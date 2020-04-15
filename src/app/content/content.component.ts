import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DictionaryService } from '../dictionary.service';
import { last } from 'rxjs/operators';

@Component({
  selector: 'content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {
  //prevents animations on page load
  preload: boolean = true; 
  fullScreen: boolean = false; 
  //reconfigured text content
  content: string = " ";
  //stores pre-response values for response configuration and misspelled value change check; also used to set word count
  splitContent: any[]; //string and regex
  //last character of unconfigured response for checking value changes of misspelled words
  lastChar: any; //string and regex
  wordcount: number = 0; 
  //configured response of results from api
  response: { word: string, suggestions: string[], misspelled: boolean }[] = [
    {word: "", suggestions: [], misspelled: false}
  ]; 
  //all misspelled results for checking value changes of misspelled words
  misspellings:{ word: string, suggestions: string[], misspelled: boolean }[] = [];  
  //stores all ignored
  ignored: string[] = [];  
  //loading state boolean
  loading: boolean = false;
  //pop up toggle for no misspellings and clipboard copied
  popup: boolean = false; 
  //message for popup
  status: {message: string, check: boolean};
  //track keydown for select all delete
  keys: number[] = [];

  @ViewChild("contentBodyContainer") contentBodyContainer: ElementRef;
  
  //resize button
  resize() {
    this.fullScreen = !this.fullScreen;
  }
  //tracks user input to body content
  onChange() {
    this.setContent();
    // setTimeout(()=> this.checkMisspelledChange(), 0);
  
  }

  //set content buffer for suggestion submit emit or manual user change
  buffer() {

    setTimeout( ()=> this.setContent(), 0);
  }
  //configure text content for api request
  setContent () {
    console.log("Live:",this.contentBodyContainer.nativeElement.textContent)
    let noTrim = this.contentBodyContainer.nativeElement.textContent.replace(/Suggestions.+?[^(Found)](Ignore|Submit)/,"").replace(/No\sSuggestions.+?(FoundIgnore|FoundSubmit)/g,"");
    this.lastChar = noTrim.split("")[noTrim.length -1].charCodeAt(0);
    this.content = noTrim.trim().replace(/\u00A0/g,"").replace(/\s{2,}/g," ");
    console.log("set:", this.content)
    this.splitContent = this.content.split(/\s+/);
    // console.log("split",this.splitContent);
    this.setWordCount();
  }

  setWordCount() {
    this.splitContent[0] === "" ? this.wordcount = 0 : this.wordcount = this.splitContent.length;
  }
  
  //check button api call
  checkContent () {
    //configure to empty stay
    this.popup = false;
    this.loading = true;
    let request = {content: this.content}
    // console.log("request",this.content)
    this.dictionary.checkContent(request)
      .subscribe( response => {
          // console.log("raw response", response["results"])
          let configuredResponse = this.configureResponse(response["results"]);
          setTimeout(()=> {
            this.response = configuredResponse;
            this.setContent();
            // console.log("configured response", this.response)
            this.misspellings = this.response.filter(result => result.misspelled);
            this.loading = false; 
            if(this.misspellings.length === 0) {
              this.popup = true;
              this.status = {message: "No Misspellings Found", check: true};
            }
          },0);
      }, (error: Response) => {
        if(error.status === 404) {
          console.log(error.status)
        } else if (error.status === 400) {
          console.log(error.status)
        } else {
          console.log(error.status)
        }
      })
  }

  configureResponse(response) {
    //re-add punctuation and spaces
    let configuredResponse = [];
    let createResult = word => {return {word: word, suggestions: [], misspelled: false}};
    //re-add spacing and any removed characters from plural to singular conversion by api
    for(let i = 0; i < response.length; i++) {
      let lastLoop = response.length - 1;
      let result = response[i];
      let request = this.splitContent[i];
      let lastIndex = request.split("").length - 1;
      let lastChar = request.split("")[lastIndex];
      let exceptLast = request.slice(0,request.length - 1);
      //if result word exactly matches request word directly add it
      if(result.word === request){
        configuredResponse.push(result);
       //otherwise (because of api plural swap)
      } else {
        //if all but the last characters match
        if(result.word.slice(0,result.word.length - 1) === exceptLast) {
          result.word += lastChar;
          configuredResponse.push(result);
        // } else if(/[.,;!?:]/.test(lastChar) && result.misspelled) {
        //     result.word = request.slice(0,lastIndex);
        //     configuredResponse.push(result);
        //     configuredResponse.push(createResult(lastChar));
        //     // console.log("configured",configuredResponse)
          } else {
            result.word = request;
            configuredResponse.push(result);
        }
      }
      //don't consider ignored words as misspelled
      if(this.ignored.indexOf(result.word) !== -1) result.misspelled = false; 
      //add space between words except for end
      if(result.misspelled) configuredResponse.push(createResult(""));
    }

    return configuredResponse;
  }

  addIgnored (ignored) {
    // console.log("ignore received")
    this.ignored.push(ignored)
  }

  //old method
  // checkMisspelledChange () {
  //   // console.log("original response",this.response)
  //   for(let i = 0; i < this.misspellings.length; i++){
  //     let misspelled = this.misspellings[i].word;
  //     let contentIndex = this.splitContent.indexOf(misspelled);
  //     let lastSplitIndex = this.splitContent.length - 1; 
  //     let responseIndex = this.response.findIndex(result => result.word === misspelled);
  //     // console.log("before change",misspelled,this.splitContent)
  //     //if misspelled word no longer exists in content due to character change or if last input was a space and misspelled word is the last word of content
  //     if(contentIndex === -1 || (this.lastChar === 115 || this.lastChar === 160) && (misspelled === this.splitContent[lastSplitIndex])) {
  //       this.misspellings.splice(i,1);
  //       this.response[responseIndex].misspelled = false;
  //       this.buffer();        
  //       // console.log("Changed",misspelled,this.splitContent)
  //     }
  //     // console.log("here",this.response[responseIndex],this.response[responseIndex+1], this.response)
  // }
// }
  //copy button
  copyContent () {
    let textarea = document.createElement("textarea")
    textarea.value = this.content;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    this.popup = true;
    this.status = {message: "Copied To Clipboard", check: false};
  }

  //erase button
  eraseContent() {
    this.response = [{word: " ", suggestions: [], misspelled: false}];
    this.popup = false; 
    this.misspellings= [];
    this.ignored = [];
    setTimeout(()=> this.setContent(), 0); 
  }

  closePopup() {
    this.popup = false;
  }

  constructor(private dictionary: DictionaryService) {}


  ngOnInit(): void {
     //prevents content-editable from deleting innerHTML formatting
    document.addEventListener("keydown", (e)=>{
      
      switch(this.keys.length) {
        case 0: if(this.keys.length === 0 && (e.keyCode === 224 || e.keyCode === 91 || e.keyCode === 17)) this.keys.push(e.keyCode);
        break;
        case 1: this.keys.length === 1 && e.keyCode === 65 ? this.keys.push(e.keyCode) : this.keys = [];
        break;
        case 2: this.keys.length === 2 && (e.keyCode === 46 || e.keyCode === 8) ? this.keys.push(e.keyCode) : this.keys = [];
      }
     
      // console.log(e.keyCode)
      // console.log("keys",this.keys,this.keys.length,e.keyCode)
      if ((e.keyCode === 46 || e.keyCode === 8)&& this.content.length < 1) {
        // console.log("blocked")
          if (e.preventDefault) {
            e.preventDefault();
          } else {
            e.returnValue = false;
          }
      } else if ((e.keyCode === 46 || e.keyCode === 8) && this.keys.length === 3) {
        // console.log("switched")
        if (e.preventDefault) {
          e.preventDefault();
        } else {
          e.returnValue = false;
        }
        this.eraseContent();
        this.keys = [];
      }
      //format text on paste
      document.addEventListener("paste", (event) => {
          let paste = (event.clipboardData).getData('text');
  
          const selection = window.getSelection();
          if (!selection.rangeCount) return false;
          selection.deleteFromDocument();
          selection.getRangeAt(0).insertNode(document.createTextNode(paste));
          event.preventDefault();

          this.setContent();
          selection.empty();
          // let id = "last";
          // console.log("element", document.getElementById(id),id)
          // document.getElementById(id).focus()
        });
    });
      //required to avoid initial animation for resize button transition 
    setTimeout(
      ()=> {
        this.preload = false;     
    },500)
  }

}

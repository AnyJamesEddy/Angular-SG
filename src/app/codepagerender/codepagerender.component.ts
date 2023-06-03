import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild
} from '@angular/core';

@Component({
  selector: 'app-codepagerender',
  templateUrl: './codepagerender.component.html',
  styleUrls: ['./codepagerender.component.scss']
})
export class CodepagerenderComponent implements OnInit, AfterViewInit {
  @ViewChild('content', {static: true}) content!: ElementRef;
  @ViewChild('code', {static: false}) code!: ElementRef;

  html: string = '';
  cleanHTML:string='';

  constructor(private renderer: Renderer2) {
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log(this.content)
    this.html=this.content.nativeElement.innerHTML; // Capturing the inner HTML
    this.html.replace(/</g,"&lt;");
    this.html.replace(/>/g,"&gt;");
    this.cleanHTML= this.delete_ngcontent(this.html); // Cleaning the inner HTML from _ngcontent-...
    this.renderer.setProperty(this.code.nativeElement, 'innerText', this.cleanHTML);
  }

  delete_ngcontent(str:string){
    let index1:number;
    let index2:number;
    if (str.includes('_ngcontent-')){
      index1 = str.indexOf('_ngcontent-');
      index2 = str.indexOf(' ',index1);
      str=str.slice(0,index1-1)+str.slice(index2);
    }
    return str;
  }
}

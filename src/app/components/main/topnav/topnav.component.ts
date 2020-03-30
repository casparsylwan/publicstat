import { Component, OnInit } from '@angular/core';
import { TextAnimation } from 'ngx-teximate';
import { bounceIn } from 'ng-animate';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.css']
})
export class TopnavComponent implements OnInit {

  constructor() { }

  //Headings and text
  publicStatistics:string = "Public statistics";
  pageinfo:string = "We will get your stats";


  //Text animations
  enterAnimation: TextAnimation = {
    animation: bounceIn,
    delay: 100,
    type: 'letter'
  };

  // Classes
  line:string = "line";


  //Booleans
  spinTheLines:boolean= false;
  secondText:boolean = false;

  ngOnInit(): void {
    setTimeout(()=> this.secondText = true, 1800 );
  }

  public openMenu(){
    console.log(this.spinTheLines)
    this.spinTheLines = !this.spinTheLines;
  }

  public writeSecondText(text:string){

    setTimeout(()=> "console.log(text.length)", 3000 )
    
    console.log(text.length)
  }

}

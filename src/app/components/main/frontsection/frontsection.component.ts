import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontsection',
  templateUrl: './frontsection.component.html',
  styleUrls: ['./frontsection.component.css'],
  host: {
    "(window:resize)":"onWindowResize($event)"
  }
})
export class FrontsectionComponent implements OnInit {

  // Get screenSize
  screenSize:number;
  isMobile: boolean = false;
  width:number = window.innerWidth;
  height:number = window.innerHeight;
  mobileWidth:number  = 760;

  //State change new view
  viewOld:number = 0;
  views: number = 0;


  constructor() { }

  ngOnInit(): void {
  }

  onWindowResize(event) {
    this.width = event.target.innerWidth;
    this.height = event.target.innerHeight;
    this.isMobile = this.width < this.mobileWidth;
}


 // public mainTopFocus() {}

  public mainRigthTopFocus(){
    console.log(this.views);
    console.log(this.screenSize)
    if(this.views===2){

      this.views = 0;

    }else{

      this.views= 2;

    }
  }

  public mainLeftFocus() {

    if(this.views===1){

      this.views = 0;

    }else{

      this.views= 1;

    }
  }

  public mainRigthDown(){

    if(this.views===3){

      this.views = 0;

    }else{

      this.views= 3;

    }

  }

 public stateChangeMainTop(){

    switch(this.views){
      case (1):{
        if( this.mobileWidth>this.width ){
          return {
            'height' : '10rem',
            'transition': 'height ease-in 500ms 500ms'
          }
        }else{
          return {
            'height': '40rem',
            'transition': 'height ease-in 500ms 500ms'
          }
        }
       
        break;
      }default : {
        return {
          'heigth' : '30rem',
          'transition': 'height ease-in 500ms 500ms'
        }
      }
    }

  }

  public stateChangeMainLeft() {

    switch (this.views) {
      case (1): {
        console.log(this.views)
        return {
          'width': '65%'
        }
        break;
      }
      case (2): {
        console.log(this.views)
        return {
          'width': '0%',
          'transition': 'width ease-in 500ms 500ms'
        }
        break;
      }
      case (3): {
        return{
          'width': '0',
          'transition': 'width ease-in 500ms'
        }
      }
      default: {
        console.log(this.views)
        return {
          'width': '50%',
          'transition': 'width ease-in 500ms 0ms'
        }
        break;
      }
    }
  }

  public stateChangeMainRigth() {

    switch (this.views) {
      case (1): {
        console.log(this.views)
        return {
          'width': '35%',
          'heigth': '100%'
        }
        break;
      }
      case (2): {
        console.log(this.views)
        return {
          'width': '50%',
          'heigth': '150%'
        }
        break;
      }
      default: {
        console.log(this.views)
        return {
          'width': '50%',
          'heigth': '100%'
        }
        break;
      }

    }
  }


  public stateChangeMainRigthTop() {

    switch (this.views) {
      case (1): {
        console.log(this.views)
        return {
          'width': '100%',
          'height': '50%',
          'transition': 'height ease-in 500ms 500ms'
        }
        break;
      }
      case (2): {
        console.log(this.views)
        return {
          'width': '200%',
          'height': '100%',
          'transition': 'height ease-in 500ms 0ms, width ease-in 500ms 500ms'
        }
        break;
      }case (3) :{
        return {
          'width': '200%',
          'transition': 'width ease-in 500ms'
        }
      
      
      } default: {
        console.log(this.views)
        return {
          'width': '100%',
          'heigth': '50%',
          'transition': 'height ease-in 500ms 500ms , width ease-in 500ms 0ms'
        }
        break;
      }

    }
  }

  public stateChangemaindown(){

    switch(this.views){
      case(1) : {
        return { 'background-color': '#777700',
                 'height' : '50%',
                 'transition': 'height ease-in 500ms 0ms'
                }
      
      }case(2) : {
        return { 'background-color': '#777700',
                 'height': '0',
                 'transition': 'height ease-in 500ms 0ms'
                }
      
              
      }case (3) :{
                return {
                  'width': '200%',
                  'transition': 'width ease-in 500ms'
                }
              
              
              }default : {
        return { 'background-color': '#777700',
                 'transition': 'height ease-in 500ms, width ease-in 500ms'
                 
                }
      }
    }
  }

  public stateChangeMainOptionField() {

    switch (this.views) {
      case (1): {
        return {
          'height': '0rem',
          'border-bottom': '4px solid #fff',
          'transition': 'all ease-in 500ms 0ms'
        }
        break;
      } default: {
        return {
          'height': '4rem',
          'border-bottom': '1px solid #fff',
          'transition': 'all ease-in 300ms 700ms'
          }
          break;
        }
      }
    }


  public viewCange() {

    switch (this.views) {
      case (1): {
        console.log(this.views)
        return '#fff'
        break;
      }
      case (2): {
        console.log(this.views)
        return '#ff0'
        break;
      }
      default: {
        console.log(this.views)
        return '#00f'
        break;
      }
    }
  }

}

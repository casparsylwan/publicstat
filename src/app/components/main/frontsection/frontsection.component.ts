import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontsection',
  templateUrl: './frontsection.component.html',
  styleUrls: ['./frontsection.component.css']
})
export class FrontsectionComponent implements OnInit {

  //Booleans for section in focus

  openMainLeft:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public mainLeftFocus(){

    this.openMainLeft = !this.openMainLeft;

  }

}

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.scss']
})
export class HeadlineComponent implements OnInit {

  //change headline
  headlines = [

    'Hi, Im Max Kraemer Front End Developer',
    'Fascinated of Coding',
    'Coding is the language of the future and everyone should learn it'

  ];

  currentHeadlines =0;

  ngOnInit(){

    this.showImages();

  }
  
  showImages() {

    setInterval(() => {

      this.currentHeadlines++;
      this.currentHeadlines = this.currentHeadlines % this.headlines.length;



    },8000);


  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  figures: any[] = ['assets/main-page/season-1.svg','assets/main-page/season-2.svg','assets/main-page/season-3.svg','assets/main-page/season-1.svg',
    'assets/main-page/season-2.svg','assets/main-page/season-4.svg','assets/main-page/season-1.svg','assets/main-page/season-2.svg'
  ]

  ngOnInit() {
    
  }

  onMouseEnter(){
    document.getElementsByClassName('hover-div')[0].setAttribute('style','display:flex; justify-content:center;')

    document.getElementsByClassName('main')[0].setAttribute('style','background-color: #eeeeee; opacity:0.8;')
  }

  onMouseLeave(){
    document.getElementsByClassName('hover-div')[0].setAttribute('style','display:none;')

    document.getElementsByClassName('main')[0].setAttribute('style','background-color: unset; opacity:unset;')
  }
}

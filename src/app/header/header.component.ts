import { Component, OnInit } from '@angular/core';
import { __classPrivateFieldSet } from 'tslib';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  showMenu(){

      document.getElementById('menu')?.classList.add('showOverlay-menu');
    
  }

  closeMenu(){

      document.getElementById('menu')?.classList.remove('showOverlay-menu');

  }

}

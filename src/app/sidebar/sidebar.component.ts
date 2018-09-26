import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  currentUrl: string;
  
  constructor(private router: Router) { 
    // router.events.subscribe((__: NavigationEnd) => this.currentUrl = __.url);
    // console.log(this.currentUrl);



    this.router.events.subscribe((res) => { 
      console.log(this.router.url,"Current URL");
      this.currentUrl = this.router.url;
  })


}

  ngOnInit() {
  }

}

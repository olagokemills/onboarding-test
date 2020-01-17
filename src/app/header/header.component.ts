import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  url: any;
  tabName1: string = '1';
  tabName2: string = '2';
  tabName3: string = '3';
  name:any;
  constructor(private router: Router, private location: Location, private route: ActivatedRoute) { 
    // console.log(window.location.href);
    this.url = window.location.href.slice(22);
    // console.log(this.url);
  }

  ngOnInit() {
    // this.url = this.router.url;
    // this.name = this.route;
    this.setDefault(this.url);
  }

  goToRoute(route) {
    // console.log(this.route.url);
    this.router.navigate([route]);
    switch (route) {
      case 'personal-information':
          this.tabName1 = 'Personal Information';
          this.tabName2 = '2';
          this.tabName3 = '3';
          if($('.p-tab').hasClass('col') == false) {
            $('.p-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
            $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
            $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          }
        break;

      case 'documents-upload':
          this.tabName2 = 'Documents Upload';
          this.tabName1 = '1';
          this.tabName3 = '3';
          console.log($('.d-tab').hasClass('col'));
          if($('.d-tab').hasClass('col') == false) {
            $('.d-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');;
            $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
            $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          }
        break;

      case 'review-details':
        this.tabName3 = 'Review and Submit';
        this.tabName1 = '1';
        this.tabName2 = '2';
        console.log($('.r-tab').hasClass('col'));
        if($('.r-tab').hasClass('col') == false) {
          $('.r-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
          $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
        }
      break;
    
      default:
        break;
    }
  }

  setDefault(route) {
    switch (route) {
      case 'personal-information':
          this.tabName1 = 'Personal Information';
          this.tabName2 = '2';
          this.tabName3 = '3';
          if($('.p-tab').hasClass('col') == false) {
            $('.p-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
            $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
            $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          }
        break;

      case 'documents-upload':
          this.tabName2 = 'Documents Upload';
          this.tabName1 = '1';
          this.tabName3 = '3';
          console.log($('.d-tab').hasClass('col'));
          if($('.d-tab').hasClass('col') == false) {
            $('.d-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
            $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
            $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          }
        break;

      case 'review-details':
        this.tabName3 = 'Review and Submit';
        this.tabName1 = '1';
        this.tabName2 = '2';
        console.log($('.r-tab').hasClass('col'));
        if($('.r-tab').hasClass('col') == false) {
          $('.r-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
          $('.p-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
        }
      break;
    
      default:
        this.tabName1 = 'Personal Information';
          this.tabName2 = '2';
          this.tabName3 = '3';
          if($('.p-tab').hasClass('col') == false) {
            $('.p-tab').removeClass('col-3').addClass('col').addClass('nav-tab-active');
            $('.r-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
            $('.d-tab').removeClass('col').removeClass('nav-tab-active').addClass('col-3');
          }
        break;
    }
  }

}

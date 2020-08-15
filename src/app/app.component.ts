import { Component, AfterViewInit } from '@angular/core';
import jQuery from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'clients-app';

  // tslint:disable-next-line: typedef
  ngAfterViewInit(){
      // tslint:disable-next-line: only-arrow-functions
      (($) => {
        'use strict';
        // Add active state to sidbar nav links
        const path = window.location.href; // because the 'href' property of the DOM element is the absolute path
        // tslint:disable-next-line: typedef
        $('#layoutSidenav_nav .sb-sidenav a.nav-link').each(function() {
          if (this.href === path) {
            $(this).addClass('active');
          }
        });

        // Toggle the side navigation
        // tslint:disable-next-line: only-arrow-functions
        $('#sidebarToggle').on('click', e => {
          e.preventDefault();
          $('body').toggleClass('sb-sidenav-toggled');
        });
      })(jQuery);

  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  public onHomeClick()
  {
    this.router.navigate([]).then(result=>{ window.open("#homepg/", "_blank")});
  }

  public onAboutClick()
  {
    this.router.navigate([]).then(result=>{ window.open("#about-us/", "_blank")});
  }
}

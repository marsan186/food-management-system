import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  public href: string = "";    
  constructor(private route:ActivatedRoute,private router: Router) { }

  ngOnInit() {
    this.href = this.router.url;
    console.log(this.router.url);
  }

}

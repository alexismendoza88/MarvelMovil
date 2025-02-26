import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  standalone:false
})
export class HeroDetailPage implements OnInit {

  hero: any={};

  constructor(private router: Router,private activatedroute:ActivatedRoute) {

  }

  ngOnInit() {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state) {
      this.hero = navigation.extras.state['hero'];
    }
  }

  // Go back to the previous page
  goBack() {
    this.router.navigate(['/heroes-list']);
  }
}

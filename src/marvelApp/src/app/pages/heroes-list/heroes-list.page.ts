import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MarvelService } from 'src/app/services/marvel.service';
@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.page.html',
  styleUrls: ['./heroes-list.page.scss'],
  standalone:false
})
export class HeroesListPage implements OnInit {
  heroes: any[] = [];
  busy:boolean=false;
  constructor(private marvelService: MarvelService, private router: Router) {}

  ngOnInit() {
    this.busy=true;
    this.marvelService.getHeroes().subscribe({
      next: response => {
        this.busy=false;
        this.heroes = response.data.results;
      },
      error: err => {
        this.busy=false;
      },
      complete: () =>{

      }
    });
  }

  // Navigate to the detail page with hero data
  openHero(hero: any) {
    this.router.navigate(['/hero-detail'], { state: { hero } });
  }

}

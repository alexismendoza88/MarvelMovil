import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroesListPageRoutingModule } from './heroes-list-routing.module';

import { HeroesListPage } from './heroes-list.page';
import {
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";

@NgModule({
  imports: [
    TranslatePipe,
    TranslateDirective,
    CommonModule,
    FormsModule,
    IonicModule,
    HeroesListPageRoutingModule,
  ],
  declarations: [HeroesListPage]
})
export class HeroesListPageModule {}

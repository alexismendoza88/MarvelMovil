import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeroDetailPageRoutingModule } from './hero-detail-routing.module';

import { HeroDetailPage } from './hero-detail.page';
import {
  TranslatePipe,
  TranslateDirective
} from "@ngx-translate/core";

@NgModule({
  imports: [
    TranslatePipe, TranslateDirective,
    CommonModule,
    FormsModule,
    IonicModule,
    HeroDetailPageRoutingModule
  ],
  declarations: [HeroDetailPage]
})
export class HeroDetailPageModule {}

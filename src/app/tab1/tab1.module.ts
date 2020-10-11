import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { LottieModule } from 'ngx-lottie';
import player from 'lottie-web';

import { Tab1PageRoutingModule } from './tab1-routing.module';
export function playerFactory() {
  return player;
}
@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    [LottieModule.forRoot({ player: playerFactory })]
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}

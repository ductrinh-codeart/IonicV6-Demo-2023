import { Component } from '@angular/core';
import { NavController, RefresherCustomEvent } from '@ionic/angular';

import { DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  Components:any = [];

  constructor(
    private data: DataService,
    public navCtrl: NavController,
    ) { 
      this.getMessages();
    }

  refresh(ev: any) {
    setTimeout(() => {
      (ev as RefresherCustomEvent).detail.complete();
    }, 3000);
  }

  getMessages() {
    this.Components = this.data.getMessages();
  }

  goToComponent(i:any) {
    this.navCtrl.navigateForward(i.Link);
  }

}

import { Component } from '@angular/core';
import {AlertController, Header} from '@ionic/angular';
import {async} from 'q';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
})
export class Tab3Page {
  constructor(private alertController: AlertController) {}
  }
  async alerta (){
  const alert = await this.alertController.create({
    Header: 'Alerta'
  });
}



import { Component } from '@angular/core';
import { ShoppingItemService } from '../services/shopping-item.service';

import { AlertController, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor(
    public shoppingService: ShoppingItemService,
    private alertController: AlertController,
    private menuController: MenuController
  ) {}
  async removeItem(item: string){
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      message: '¿Seguro que quieres eliminar el elemento?',
      buttons: [
        {
          text: 'Si',
          handler: (blah) => {
            this.shoppingService.removeItem(item);
          }
        }, {
          text: 'No',
          handler: () => {
            alert. dismiss();
          }
        }
      ]
    });
    await alert.present();
  }

  onRenderItems($event){
    console.log($event);
    const item = this.shoppingService.items.splice($event.detail.from, 1)[0];
    this.shoppingService.items.splice($event.detail.to, 0, item);
    $event.detail.complete();
    console.log(this.shoppingService.items);
  }
  async removeAll(){
    const alert = await this.alertController.create({
      header: 'Confirmacion',
      message: '¿Seguro que quieres eliminar el elemento?',
      buttons: [
        {
          text: 'Si',
          handler: (blah) => {
            this.shoppingService.removeAllItems();
            this.menuController.close()
          }
        }, {
          text: 'No',
          handler: () => {
            alert. dismiss();
            this.menuController.close()
          }
        }
      ]
    });
    await alert.present();
  }
}
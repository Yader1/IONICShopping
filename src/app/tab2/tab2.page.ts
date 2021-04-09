import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ShoppingItemService } from '../services/shopping-item.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public item: string;

  constructor(
    private shoppingService: ShoppingItemService,
    private alercontroller: AlertController
  ) {}

  addItem(){
    console.log(this.item);

    if(this.item &&  this.item != ''){
      if(!this.shoppingService.existItem(this.item)){
        this.shoppingService.addItem(this.item);
        this.item='';
        console.log(this.shoppingService.items);

        this.AlertExistoso();
      }else{
        //mensajede cuando ya existe el elemento
        this.AlertErrorExiste();
      }
    }else{
        //mensaje de error cuando pasemos un valor vacio
        this.AlertError();
    }
  }

  async AlertExistoso() {
    const alert = await this.alercontroller.create({
      header: 'Exito',
      message: 'Item añadido correctamente.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async AlertErrorExiste() {
    const alert = await this.alercontroller.create({
      header: 'ERROR',
      message: 'Item ya existe.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async AlertError() {
    const alert = await this.alercontroller.create({
      header: 'ERROR',
      message: 'Error, debes de escribir un item.',
      buttons: ['OK']
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

}

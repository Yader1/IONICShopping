import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemService {

  private _items: string[];
  private _isEmpty: boolean;

  public get isEmpty(): boolean {
    return this._isEmpty;
  }
  public set isEmpty(value: boolean) {
    this._isEmpty = value;
  }
  
  public get items(): string[] {
    return this._items;
  }
  public set items(value: string[]) {
    this._items = value;
  }
 

  constructor() { 
    this._items = [];
    this._isEmpty = true;
  }

  addItem(item: string){
      this._items.push(item);
      this._isEmpty = false; // comprovar que el campo no este vacio
  }

  //Metodo para recorrer un bucle y eliminar un dato del arreglo
  removeItem(item: string){
    let index = this._items.findIndex(it => it === item); //Identificamos la posicion del elemento
    this._items.splice(index, 1); // Eliminamos la posicion de item

    if(this._items.length === 0){
      this._isEmpty = true;
    }
  }

  removeAllItems(){
    this._items = [];
    this._isEmpty = true;
  }

  existItem(item: string){

    const itemFound  = this._items.find(it => it.toLowerCase().trim() === item.toLowerCase().trim());
    if(itemFound){
      return true;
    }else{
      return false;
    }

  }

}

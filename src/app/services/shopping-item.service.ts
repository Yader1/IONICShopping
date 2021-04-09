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

}

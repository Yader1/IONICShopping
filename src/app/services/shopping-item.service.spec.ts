/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ShoppingItemService } from './shopping-item.service';

describe('Service: ShoppingItem', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShoppingItemService]
    });
  });

  it('should ...', inject([ShoppingItemService], (service: ShoppingItemService) => {
    expect(service).toBeTruthy();
  }));
});

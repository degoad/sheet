import { Injectable } from '@angular/core';


export interface Item {
  id: number ;
  email: string ;
  password: string ;
}

const ITEMS_KEY = 'my-items';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: Storage) { }

  addItem(item: Item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (items) {
        items.push(item);
        return this.storage.set(ITEMS_KEY, [item]);
      } else {
        return this.storage.set(ITEMS_KEY, [item]);
      }


    });
  }

  getItems(): Promise <Item[]> {
    return this.storage.get(ITEMS_KEY);
  }

  updateItem(item: Item): Promise <Item[]> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
      if (!items || items.length === 0) {
        items.push(item);
        return null;
      }
      let newItems: Item[] = [];

      for (let i of items) {
        if (i.id === item.id) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, newItems);
  });
  }
  deleteItem(id: number): Promise <Item> {
    return this.storage.get(ITEMS_KEY).then((items: Item[]) => {
    if (!items || items.length === 0) {
      return null;
    }
    let toKeep: Item[] = [];

    for (let i of items) {
        if (i.id !== id) {
        toKeep.push(i);
        }
    }
  });
  }
}

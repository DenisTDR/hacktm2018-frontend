import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  lsObject: any;

  constructor() {
    this.lsObject = typeof localStorage === 'undefined' ? new MockStorage() : localStorage;
  }

  public set(key: string, value: any) {
    this.lsObject.setItem(key, JSON.stringify({v: value}));
  }

  public get(key: string): any {
    if (!this.lsObject.getItem(key)) {
      return null;
    }
    return JSON.parse(this.lsObject.getItem(key)).v;
  }

  public clear(key: string): void {
    this.lsObject.clear(key);
  }
}

class MockStorage {
  private bag: any = {};

  public setItem(key: string, value: string): void {
    this.bag[key] = value;
  }

  public getItem(key: string): string {
    return this.bag[key];
  }

  public clear(key: string): void {
    delete this.bag[key];
  }
}

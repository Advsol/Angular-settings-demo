import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentKeysService {

  public contentKey: string;
  public contentItemKey: string;

  // Grab our setting keys for this iPart from the DOM
  constructor() { 
    const ck = (document.querySelector("#x-contentKey") as HTMLInputElement).value;
    const cik = (document.querySelector("#x-contentItemKey") as HTMLInputElement).value;

    this.contentKey = ck;
    this.contentItemKey =cik; 
  }

}

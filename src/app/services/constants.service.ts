import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConstantsService {

  public apiUrl: string;
  public emailRegex = '^[a-zA-Z0-9.!#$%&’*+\/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$';

  constructor() {
    this.getApiUrl();
  }

  private getApiUrl(): void {
      this.apiUrl = "localhost";
  }
}

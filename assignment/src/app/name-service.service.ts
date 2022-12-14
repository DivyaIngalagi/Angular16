import { Injectable } from '@angular/core';

@Injectable()
export class NameService {
  names: string[] = [];

  add(name: string) {
    this.names.push(name);
  }

  clear() {
    this.names = [];
  }
}

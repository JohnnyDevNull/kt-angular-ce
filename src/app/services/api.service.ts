import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { ApiData } from '../types/api-data.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
  getData(): Observable<ApiData> {
    return of({
      a: true,
      b: 44,
      c: 'Hello, Klicktipp!',
      d: {
        e: 'I am a nested object with strings!',
        f: {
          g: {
            h: {
              i: 'So am I!',
              j: false,
              k: 123,
              l: 'And I am last!'
            }
          }
        }
      }
    });
  }
}

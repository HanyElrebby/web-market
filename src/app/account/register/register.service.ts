import axios from 'axios';
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
  })
export class RegisterService {
  public processRegistration(account: any): Promise<any> {
    return axios.post('/register', account);
  }
}

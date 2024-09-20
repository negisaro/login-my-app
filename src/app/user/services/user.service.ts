import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environments';
import { User } from '../../auth/interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private readonly baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getUser(): Observable<User[]>{
    return this.http.get<User[]>(`${this.baseUrl}/api/users`)
  }
}

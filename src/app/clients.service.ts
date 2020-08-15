import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

import { Client } from './clients/client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }

  save(client: Client): Observable<Client>{
    return this.http.post<Client>('http://localhost:8181/api/clients', client);
  }

  getClient(): Client {
    const client = new Client();
    client.name = 'Roberto';
    client.nif = '298.456.564';
    return client;
  }
}

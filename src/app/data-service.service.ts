import { Injectable } from '@angular/core';
import {Client} from "./model/client";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class Dataservice {

  constructor(public http: HttpClient) { }
  fetchClients(): Promise<Client[]> {

    return this.http
      .get('http://localhost:8080/farm-java/api/clients')
      .toPromise()
      .then(data => data as Client[])
  }

}

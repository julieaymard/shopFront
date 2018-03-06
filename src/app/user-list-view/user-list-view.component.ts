import { Component, OnInit } from '@angular/core';
import {Client} from "../model/client";
import {Dataservice} from "../data-service.service";

@Component({
  selector: 'app-user-list-view',
  templateUrl: './user-list-view.component.html',
  styleUrls: ['./user-list-view.component.css']
})
export class UserListViewComponent implements OnInit {
  clients: Client[];

  constructor(public dataService: Dataservice) {
    dataService.fetchClients()
    .then(clients => this.clients = clients)
    .then(clients => console.log('Clients:', clients));
  }

  ngOnInit() {
  }

}

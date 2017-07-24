import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  condition1 = true;
  serverName = 'Alpha';
  serverStatus = 'Online';
  servers = ['Server1' , 'Server2'];
  newServer = '';
  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    // Ternary Operator: Condition ? ' If True Do This' : 'Else Do Another';
  }

  ngOnInit() {
  }
  showPara () {
    this.condition1 = true;
  }

  hidePara () {
    this.condition1 = false;
  }
  getColor () {
    return this.serverStatus === 'Online' ? 'red' : 'blue' ;
  }
  getServerStatus(): string {
    return 'Online';
  }

  addServer () {
    this.servers.push(this.newServer);
  }
}

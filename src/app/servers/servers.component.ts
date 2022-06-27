import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }
  filteredString:string='';
  statusHighlight =new Promise ((resolve,reject) => {
    setInterval(()=>{
      resolve('Status Highlight');
    },1000)
  });
  servers=[
    {
    instancetype:'hello',
    name:'production server',
    date: new Date,
    status:'stable'
  },
  {
    instancetype:'medium',
    name:'production server',
    date: new Date,
    status:'unstable'
  },
  {
    instancetype:'medium',
    name:'production server',
    date: new Date,
    status:'hero'
  },
  {
    instancetype:'medium',
    name:'production server',
    date: new Date,
    status:'stable'
  },
  {
    instancetype:'Strong',
    name:'production server',
    date: new Date,
    status:'hero'
  }
]
server= {
  instancetype:'new',
  name:'production server',
  date: new Date,
  status:'hero'
}
onAddServer(){
this.servers.push(this.server);
}
  ngOnInit(): void {
  }

}

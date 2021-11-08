import { Component, Input, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo: string;

  constructor(private database:ServiceService) { }

  ngDestroy(){

  }

  ngOnInit(): void {
    this.database.logout();
  }

}

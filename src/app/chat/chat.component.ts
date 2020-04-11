import { Component, OnInit } from '@angular/core';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor(private fbService: FirebaseServiceService) { }

  ngOnInit() {
  }


  logout() {
    this.fbService.logout();
  }
}

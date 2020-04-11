import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: string;
  error: string = '';
  constructor(private router: Router,
    private route: ActivatedRoute,
    private fbService: FirebaseServiceService
  ) { }

  ngOnInit() {
  }

  register() {
    if (this.email && this.password) {
      this.fbService.register(this.email, this.password).then((error) => {
        if (error) {
          console.log(error);
          this.error = error;
        } else {
          this.error = '';
        }
      });
    }
  }

  goToLogin() {
    this.router.navigate(['/login'], { relativeTo: this.route });
  }

}

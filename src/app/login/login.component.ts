import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FirebaseServiceService } from '../services/firebase-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;

  error: string = '';

  constructor(private router: Router,
    private route: ActivatedRoute,
    private fbService: FirebaseServiceService) { }

  ngOnInit() {

  }


  login() {
    console.log(this.email, this.password);

    if (this.email && this.password) {
      this.fbService.login(this.email, this.password).then((error) => {
        if (error) {
          console.log(error);
          this.error = error;
        }else {
          this.error = '';
        }
      });
    }
  }

  goToRegister() {
    this.router.navigate(['/register'], { relativeTo: this.route });
  }
}

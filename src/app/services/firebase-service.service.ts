import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute, ) {
    this.firebaseAuth.authState.subscribe(
      user => {
        console.log(user);
        // Check if user not null
        if (user) {
          this.router.navigate(['/chat'], { relativeTo: this.route });
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  async login(email: string, password: string) {


    try {
      await this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      return error;
    }
  }

  async register(email: string, password: string) {
    try {
      await this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      return error;
    }
  }

  async logout() {
    this.firebaseAuth.auth.signOut().then((_) => {
      this.router.navigate(['/login'], { relativeTo: this.route });
    });
  }
}

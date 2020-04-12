import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseServiceService {
  user: firebase.User;

  userSubject: Subject<firebase.User> = new Subject<firebase.User>();

  constructor(private firebaseAuth: AngularFireAuth,
    private router: Router,
    private route: ActivatedRoute, ) {
    this.firebaseAuth.authState.subscribe(
      user => {
        console.log(user);
        // Check if user not null
        if (user) {
          this.user = user;
          this.userSubject.next(this.user);
          this.router.navigate(['/chat'], { relativeTo: this.route });
        } else {
          user = null;
        }
      },
      error => {
        console.log(error);
        this.user = null;
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

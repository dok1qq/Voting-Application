import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { AngularFire, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2';

@Injectable()
export class CrudService {
  votings: FirebaseListObservable<any>;
  vote: FirebaseObjectObservable<any>;
  user: any = null;
  polls: FirebaseListObservable<any>;

  constructor(private af: AngularFire, private as: AuthService){
    this.votings = af.database.list('/votings');

    this.as.af.auth.subscribe(u => {
        if (u != null) {
          this.user = u.auth.uid.toString();
        } else {
          this.user = null;
        }
      }
    );
  }


  addNewPoll(model: any): Promise<string> {
    return new Promise((resolve, reject) => {
      model.user = this.user;
      this.votings.push(model).once('value', snapshot => {
        resolve(snapshot.key);
      }).catch(err => {
        reject(err);
      });
    });
  }

  getVote(id: string): Promise<any> {
    return new Promise((resolve, reject) => {
      this.vote = this.af.database.object('/votings/' + id);
      resolve(this.vote);
    });
  }

  getPolls(): Promise<any> {
    return new Promise((resolve, reject) => {
      console.log(this.user);

      if (this.user != null){
        this.polls = this.af.database.list('/votings', {
          query: {
            orderByChild: 'user',
            equalTo: this.user
          }
        });
        resolve(this.polls);
      } else {
        reject('fail');
      }
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { CrudService } from "../auth/crud.sercive";
import { Router } from "@angular/router";

@Component({
  selector: 'polls-component',
  templateUrl: './polls.component.html',
  styleUrls: ['./polls.component.css']
})
export class PollsComponent implements OnInit{
  constructor(private cs: CrudService, private router: Router){}

  polls: any;
  deleteAccept: boolean = false;

  ngOnInit(): void {
    this.cs.getPolls().then(p => {
      p.subscribe(polls => this.polls = polls,
      err => console.log(err),
        () => {
          console.log('Complete');
          this.polls = null;
        });
    }).catch(err => {
      this.polls = null;
      this.router.navigate(['/dashboard']);
    });
  }

  resetPoll(id: string, data: Array<number>): void {
    for(let i=0; i<data.length; i++){
      data[i] = 0;
    }

    this.cs.getVote(id).then(v => {
      v.update({data: data});
    });
  }

  deletePoll(id: string): void {
    this.cs.getVote(id).then(v => {
      v.remove();
    });
  }
}

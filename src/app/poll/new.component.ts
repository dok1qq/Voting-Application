import { Component, OnInit } from '@angular/core';
import { CrudService } from "../auth/crud.sercive";

import { Poll } from '../interfaces/poll';

@Component({
    selector: 'new-component',
    templateUrl: 'new.component.html',
    styleUrls: ['new.component.css']
})
export class NewComponent implements OnInit {
  poll: Poll;
  submitted: boolean;
  labels: Array<string> = [];
  data: Array<number> = [];
  link: any = null;

  constructor(private cs: CrudService) {}

  ngOnInit(): void {
    this.poll = {
      title: '',
      options: {
        first: '',
        second: '',
        third: 'hidden',
        fourth: 'hidden',
        fifth: 'hidden',
        sixth: 'hidden',
        seventh: 'hidden',
        eighth: 'hidden',
        ninth: 'hidden',
        tenth: 'hidden'
      }
    };
  }

  submitForm(model: Poll, isValid: boolean): void {
    this.submitted = true;
    if (isValid){
      this.pollLabels();
      this.pollData();

      this.cs.addNewPoll({
        title: model.title,
        labels: this.labels,
        data: this.data
      }).then(result => {
        this.ngOnInit();
        // преддоставить ссылку и сделать красивое окно
        this.link = 'https://votingapp-e046f.firebaseapp.com/voting/'+ result;
        console.log(this.link);
      }).catch(err => {
        console.log(err.name, err.message);
      });
    }
  }

  pollLabels(): void{
    for(let elem in this.poll.options){
      let el = this.poll.options[elem];
      if ((el != 'hidden')&&(el != '')){
        this.labels.push(el);
      }
    }
  }

  pollData(): void{
    for(let i=0; i<this.labels.length; i++){
      this.data.push(0);
    }
  }

  addOptions(): void {
    for(let elem in this.poll.options){
      if (this.poll.options[elem] == 'hidden'){
        this.poll.options[elem] = '';
        break;
      }
    }
  }
}

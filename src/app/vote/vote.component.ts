import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrudService } from "../auth/crud.sercive";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { NumberWrapper } from "./number.wrapper";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'vote-component',
    templateUrl: 'vote.component.html',
    styleUrls: ['vote.component.css']
})
export class VoteComponent implements OnInit {
  constructor(
    private cs: CrudService,
    private router: Router,
    private route: ActivatedRoute,
    private as: AuthService
  ) {}

  vote: any;
  prepare: number = null;
  subscription: any;
  charts: any = {
    bar: true,
    doughnut: false,
    polar: false,
    radar: false,
    pie: false
  };

  barChartData: any[] = [{
    data: [],
    label: ''
  }];

  toggle: boolean = null;

  ngOnInit(): void {
  this.route.params.forEach((params: Params) => {
    let id = params['id'];
    this.cs.getVote(id.toString()).then(v => {
      v.subscribe(vote => {
        if(vote !== null && vote !== undefined){
          this.vote = vote;
          this.barChartData[0].data = vote.data;
          this.barChartData[0].label = vote.title;

          this.as.af.auth.subscribe(u => {
            if (u != null){
              console.log(u.auth.uid.toString(), vote.user);
              if (u.auth.uid.toString() != vote.user){
                this.toggle = false;
              } else {
                this.toggle = true;
              }
            }
          });
        }
      })
    });
    });
  }

  prepareToVote(index: number): void {
    this.prepare = index;
    console.log(index);
  }

  changeChart(type: string): void {
    for(let t in this.charts){
      this.charts[t] = false;
    }

    this.charts[type] = true;
  }

  toVote(): void {
    let num = new NumberWrapper(this.vote.data[this.prepare]);
    this.vote.data[this.prepare] = num.valueOf() + 1;
    this.cs.vote.update({data: this.vote.data});
    this.prepare = null;
    this.toggle = true;
  }

  ngOnDestroy(): void {
    //this.subscription.dispose();
  }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, TypeSubscription } from 'src/app/model/subscription.model';
import { SubscriptionService } from 'src/app/shared/subscription.service';
import { CommonModule } from '@angular/common';
import { SkierService } from 'src/app/shared/skier.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit{
  constructor(private router: Router ,private skierService: SkierService,    private formBuilder: FormBuilder ){}// Injectez le FormBuilder
  
  subscription:any;
  reloadData() {
    this.subscription = this.skierService.getAll().subscribe((res)=>{
      this.subscription=res;
      console.log(res);
  
     });

  }
  deleteEvents = (id: number) => {
    if (confirm('Are you sur?')) {
      this.skierService.deleteFood(id).subscribe(() => {
        // Recharge la page après la suppression
        window.location.reload();
        
      });
    }
  }

  ngOnInit() {
    this.reloadData();

  }

}

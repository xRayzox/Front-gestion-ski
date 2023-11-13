import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Skier } from 'src/app/model/skier';
import { Subscription } from 'src/app/model/subscription.model';
import { SkierService } from 'src/app/shared/skier.service';
import { SubscriptionService } from 'src/app/shared/subscription.service';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  ngOnInit() {
  
  }
  subscription: Skier = new Skier();

  constructor(private subscriptionService: SkierService, private router: Router,  private formBuilder: FormBuilder // Injectez le FormBuilder
  ) {} // Injectez le service
  save() {
    this.subscriptionService
      .addSubscription(this.subscription)
      .subscribe({
        next: data => {
          console.log(data);
          this.subscription = new Skier();
          this.router.navigate(['/list']); 

        },
        error: error => console.log(error)
      });
  }
  onSubmit() {
    this.save();   
  }
}

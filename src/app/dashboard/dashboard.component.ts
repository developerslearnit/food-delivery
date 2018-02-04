import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurantService } from 'app/shared/app.service';

@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent {
  data: any = {};
  restaurants: any[];
  constructor(private appService: RestaurantService) {

    this.getRestaa();

  }

  getRestaa() {
    this.appService.getRestaurantList().subscribe((data) => {
      this.restaurants = data.json().results;
    });
  }

  saveRestaurant() {
    let Restdata = {
      name: this.data.restaurantName,
      rating: 5,
      deliveryFee: this.data.delFee,
      averageDeliveryTime: 60,
      logo: '',
      restaurantPhoto: '',
      address: this.data.address,
      minOrderPrice: this.data.minOrder,
      latitude: 1.45678,
      longitude: 2.34566
    };

    this.appService.saveRestaurant(Restdata).subscribe((val) => {
      this.getRestaa();
    })

  }

}

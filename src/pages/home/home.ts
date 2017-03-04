import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';

import { CategoryItemsPage } from '../category-items/category-items';

import { CategoryService, CategoryType } from '../../services/category.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  categories: any[] = [
    { name: "ALIMENTOS", icon: "img/groceries2.png", color: "#4ECDC4", categoryType: CategoryType.Food},
    { name: "HOGAR", icon: "img/home2.png", color: "#C7F464", categoryType: CategoryType.HomeGoods},
    { name: "CUIDADO PERSONAL", icon: "img/cosmetics2.png", color: "#FF6B6B", categoryType: CategoryType.PersonalCare},
    { name: "MASCOTA", icon: "img/pet-food.png", color: "#F2C45A", categoryType: CategoryType.Pets}
  ];

  goToCategoryItems(categoryType:CategoryType) {
    //push another page onto the history stack
    //causing the nav controller to animate the new page in
    this.navCtrl.push(CategoryItemsPage, {
      categoryType: categoryType
    },
    {
      animation: "ios-transition"
    });
  };

  constructor(public navCtrl: NavController, public params:NavParams) {

  }

}

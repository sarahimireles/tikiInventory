import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CategoryService, CategoryType } from '../../services/category.service';

/*
  Generated class for the CategoryItems page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-category-items',
  templateUrl: 'category-items.html'
})
export class CategoryItemsPage {

  itemsByCategory: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public categoryService: CategoryService) {
  }

  ionViewDidLoad() {
    this.itemsByCategory = this.categoryService.getItemsForCategory(this.navParams.get("categoryType"));
  }

  goBack(){
    this.navCtrl.pop({
      animation: "ios-transition",
      direction: "back"
    });
  }

}

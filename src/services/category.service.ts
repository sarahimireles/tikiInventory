import { Injectable } from '@angular/core';

@Injectable()
export class CategoryService {

    foodObjects: any[] = [
        { name: "Leche", quantity: "0", icon: "img/milk.png", color: "#a8d164"},
        { name: "Huevos", quantity: "10", icon: "img/egg.png", color: "#0dccc0"},
        { name: "Frijoles", quantity: "0", icon: "img/beans.png"},
        { name: "Pan", quantity: "1", icon: "img/toast.png"},
        { name: "Tostadas", quantity: "0", icon: "img/toaster.png"},
        { name: "Tomates cherry", quantity: "0", icon: "img/tomato-1.png"}
    ];

    HomeGoodsObjects: any[] = [
        { name: "Jabon de ropa", quantity: "2", icon: "img/soap-2.png"},
        { name: "Jabon para trastes", quantity: "1", icon: "img/liquid-soap.png"}
    ];

    PersonalCareObjects: any[] = [
        { name: "Shampoo Rubs", quantity: "1", icon: "img/shampoo.png"},
        { name: "Shampoo Sarahi", quantity: "1", icon: "img/shampoo-1.png"},
        { name: "Acondicionador Sarahi", quantity: "1", icon: "img/shampoo-1.png"}
    ];

     PetsObjects: any[] = [
        { name: "Croquetas", quantity: "1", icon: "img/dog-food.png"}
    ];
    
    constructor() {
    }

    getItemsForCategory (categoryType:CategoryType){
        switch(categoryType){
            case CategoryType.Food:
                return this.foodObjects;
            case CategoryType.HomeGoods:
                return this.HomeGoodsObjects;
            case CategoryType.PersonalCare:
                return this.PersonalCareObjects;
            case CategoryType.Pets:
                return this.PetsObjects;
        }
    }

}

export enum CategoryType {
    Food,
    HomeGoods,
    PersonalCare,
    Pets
}


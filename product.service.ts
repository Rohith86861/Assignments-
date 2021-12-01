import { Injectable } from '@angular/core';
/*import { Products } from './app.component';*/
import { Products } from './products';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  arrProducts =[
    new Products(101,"TV",20000),
    new Products(102,"Laptop",65000),
    new Products(103,"Mobile",28000),
    new Products(104,"Sports watch",3000),
    
  ]
  getAllProducts(){
    return this.arrProducts;
  }
  getProductsById(id:number){
    var temp: Products[]= []; //this will store the search results
    for(var i=0; i<this.arrProducts.length; i++){
      if(this.arrProducts[i].productId == id){
        temp.push(this.arrProducts[i]);
      }
    }
    return temp;
  }


  getProductsByName(name:string){
    var temp: Products[]= []; //this will store the search results
    temp = this.arrProducts.filter(res =>{
      return res.productName.match(name);
    });
    return temp;
  }

  //save the items into the arrProducts
  save(id:number, name:string, cost:number){
    if(id!=0 && name!="" && cost!=0){
      var temp = new Products(id,name,cost);
      this.arrProducts.push(temp);
    }
  }

  //deleting the sent id obj from arrProducts
  delete(id:number){
    for(var i=0; i<this.arrProducts.length; i++){
      if(this.arrProducts[i].productId == id){
        this.arrProducts.splice(i,1);
      }
    }
  }
  
  //edit the object 
  edit(id:number, name:string, cost:number){
    for(var i=0; i<this.arrProducts.length; i++){
      if(this.arrProducts[i].productId == id){
        this.arrProducts[i].productName = name;
        this.arrProducts[i].cost = cost;
      }
    }
  }
}



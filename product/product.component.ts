import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Products } from '../products';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private router:Router,private productService:ProductService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((param)=>{
      this.idForProductsRouting=Number(param.get('id'));

      if(this.idForProductsRouting>0)
      this.displayBasedOnID();
      else
      this.getAllProducts();
    

    }
    );
    
  }
  arrProducts:Products[]=[];
  getAllProducts()
  {
    this.arrProducts = this.productService.getAllProducts();

  }
  displayBasedOnID(){
    this.arrProducts=this.productService.getProductsById(this.idForProductsRouting);
  }
  idForProductsRouting=0;
  routeBasedOnId(){
    let strURLForProductsFilterById="";
    if(this.idForProductsRouting>0)
    strURLForProductsFilterById="products1/"+this.idForProductsRouting;

    this.router.navigate([strURLForProductsFilterById]);
  }
  displayAll(){
    this.idForProductsRouting=0;
    this.arrProducts = this.productService.getAllProducts();
  }



}

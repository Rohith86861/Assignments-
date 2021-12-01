import { Component, OnInit,Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() strNameParenToChild="" ;
  @Input() loginobj={uid:'',pwd:''}

  constructor(private pinfo:ProductService) { }

  ngOnInit(): void {
  }
  @Output() messageToEmit=new EventEmitter();
  strData="";
  n=this.pinfo.arrProducts.length;
  s1=this.pinfo.arrProducts[0].productId+" "+this.pinfo.arrProducts[0].productName+" "+this.pinfo.arrProducts[0].cost;
  sendMessageToParent(){
    this.messageToEmit.emit(this.strData);
    this.messageToEmit.emit(this.s1);
  }

}

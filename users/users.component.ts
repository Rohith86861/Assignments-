import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { ApiService } from '../insurance/api.service';
import { InsuranceModel } from '../insurance/insurance.model';
import { InsuranceComponent } from '../insurance/insurance.component';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  columnI = [
    'Policy No',
    'Policy Holders Name ',
    'Policy Amount ',
    'Amount for EMI ',
    'Nominees Name',
    'Actions',
  ];

  showAdd!:boolean;
showUpdate !:boolean;

  formValue!: FormGroup;

  insuranceModelObj: InsuranceModel = new InsuranceModel();
  insuranceData: any;
  
  constructor(private formBuilder: FormBuilder,private router:Router,private activatedRoute:ActivatedRoute, private insuranceComponent:InsuranceComponent,private apiService:ApiService,private insuranceModal:InsuranceModel) { }

  ngOnInit(): void {
    /*this.activatedRoute.paramMap.subscribe((param)=>{
      this.idForProductsRouting=Number(param.get('id'));*/
      /*this.formValue = this.formBuilder.group({
        policyNo: [],
        holderName: [''],
        amount: [],
        emiAmount: [],
        nomineeName: [''],
      });*/
      this.formValue = this.formBuilder.group({
        policyNo: [],
        holderName: [''],
        amount: [],
        emiAmount: [],
        nomineeName: [''],
      });
      this.getAllInsurance();

  }
  idForProductsRouting=0;
  clickAdd(){

  }
  postInsuranceDetails() {

  }
  getAllInsurance() {
    this.insuranceComponent.getAllInsurance();
  }
  deleteInsurance(row: any)
  {

  }
  onEdit(row: any){

  }
  updateInsuranceDetails()
  {

  }

}


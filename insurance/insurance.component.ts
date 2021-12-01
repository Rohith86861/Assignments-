import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
//import { ApiService } from '../api.service';
import { ApiService } from './api.service';
import { InsuranceModel } from './insurance.model';


@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent implements OnInit {
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

  constructor(private formBuilder: FormBuilder, private api: ApiService) {}

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      policyNo: [],
      holderName: [''],
      amount: [],
      emiAmount: [],
      nomineeName: [''],
    });
    this.getAllInsurance();
  }
   
clickAdd()
{
  this.formValue.reset();
  this.showAdd=true;
  this.showUpdate=false;
}
  postInsuranceDetails() {
    let t=this.insuranceData
    this.insuranceModelObj.policyNo = this.formValue.value.policyNo;
    this.insuranceModelObj.holderName = this.formValue.value.holderName;
    this.insuranceModelObj.amount = this.formValue.value.amount;
    this.insuranceModelObj.emiAmount = this.formValue.value.emiAmount;
    this.insuranceModelObj.nomineeName = this.formValue.value.nomineeName;
    this.api.postInsurance(this.insuranceModelObj).subscribe(
      (res) => {


        alert(res);
        console.log('Details added successfuly');
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllInsurance();
      },

    );
  }

  getAllInsurance() {
    this.api.getInsurance().subscribe((res) => {
      this.insuranceData = res;
    });
  }

  deleteInsurance(row: any) {
    this.api.deleteInsurance(row.id).subscribe((res) => {
    console.log('Insuarance Details is Deleted');
      this.getAllInsurance();
    });
  }

  onEdit(row: any) {
    this.showUpdate=true;
    this.showAdd=false;
    let t= this.insuranceData;
    this.api.onEdit(row.id).subscribe((res)=>{
    alert(" in edit");
    t=res;
    this.insuranceModelObj.id=row.id;
    this.formValue.controls['policyNo'].setValue(row.policyNo);
    this.formValue.controls['holderName'].setValue(row.holderName);
    this.formValue.controls['amount'].setValue(row.amount);
    this.formValue.controls['emiAmount'].setValue(row.emiAmount);
    this.formValue.controls['nomineeName'].setValue(row.nomineeName);
    });
  }
  updateInsuranceDetails() {
    this.insuranceModelObj.policyNo = this.formValue.value.policyNo;
    this.insuranceModelObj.holderName = this.formValue.value.holderName;
    this.insuranceModelObj.amount = this.formValue.value.amount;
    this.insuranceModelObj.emiAmount = this.formValue.value.emiAmount;
    this.insuranceModelObj.nomineeName = this.formValue.value.nomineeName;


    this.api.updateInsurance(this.insuranceModelObj,this.insuranceModelObj.id)
    .subscribe(res=>
      {
        console.log("Updated Successfully");
        let ref = document.getElementById('cancel');
        ref?.click();
        this.formValue.reset();
        this.getAllInsurance();
      })
  }
}
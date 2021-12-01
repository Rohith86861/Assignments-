import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {ProductService} from './product.service';
import {Products} from './products';
import { RestService } from './rest.service';
import {User} from './user';
import { Router } from '@angular/router';
import { LoggerService } from './logger.service';
import { StudentComponent } from './student/student/student.component';
import { AuthenticationServiceService } from './authentication-service.service';
import { style } from '@angular/animations';
import { NONE_TYPE } from '@angular/compiler';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'my-app';
  iNumber=250;
strName="Rohith";
userObj={uid:'Rohith s',pwd:'dev'};

InsuranceObj={policyNo:'001',policyHoldersName:'Rohith',AmountOnMaturity:10000,Nominee_Name:'Kumar',Monthly_EMI:1000,Duration_Of_Policy:18 };
imgURL="./assets/Images/download (1).png"
bDisableButton= false;

enableButton(){
  this.bDisableButton=false;
}
disableButton(){
  this.bDisableButton=true;
}
verifyEmail(email : string){
  alert("Pls check your email,we have sent a verification email to : "+email+"\n Pls click on the given link to verify your mail..");

}
verifyPhone(phone : any){
  var phoneno = /^\d{10}$/; 
  if(!phone.match(phoneno)){ 
    alert("Please enter valid phone number"); 
  }
  
}
login(user_id:any , password:any ){
  if(user_id != "Rohith" &&password !="dev"){
    alert("wrong user_id and password")

  }

}
strNameTwoWayDataBinding ="Rohith";
strNameParenToChild='Rohith'
loginobj={uid:'',pwd:''};
bCustomer=true;
changeToCustomer()
{
  this.bCustomer=true;
}
changeToEmployee(){
  this.bCustomer=false;
}
strColor="red";
strFontSize="20";
strWordSpacing="5";
strTextAlign="center";
strLetterSpacing="0.5";
strCustomer="Yes";
strUID='';
strPWD='';
userList=[
  {uid:101, name:'Rohith',pwd:'admin'},
  {uid:102, name:'Mani',pwd:'admin'},
  {uid:103, name:'Sanjay',pwd:'admin'},
  {uid:104, name:'Varun',pwd:'admin'},
  {uid:105, name:'Mahesh',pwd:'admin'}

]
bMorning=false;
bEvening=false;
goodMorning()
{
  this.bMorning=true;
  this.bEvening=false;
}
goodEvening()
{
  this.bEvening=true;
  this.bMorning=false;
}
strData='1';
Emp=[
  {Empid:101,Name:'Rohith', dept:'Dev', des:'Software Engineer', loc:'Hyderabad'},
  {Empid:102,Name:'Mani', dept:'Admin', des:'Software Engineer', loc:'Hyderabad'},
  {Empid:103,Name:'Sanjay', dept:'Dev', des:'Software Engineer', loc:'Hyderabad'},
  {Empid:104,Name:'Varun', dept:'Dev', des:'Software Engineer', loc:'Hyderabad'},
  {Empid:105,Name:'Mahesh', dept:'Testing', des:'Software Engineer', loc:'Hyderabad'}
]
strRegisterf='none';
strLoginf='';
registerform(){
  this.strRegisterf= '';
  this.strLoginf='none';
}
loginform(){
  this.strRegisterf= 'none';
  this.strLoginf='';
}
ButtonClicked(){

}
strDataToConvert="My name is Rohith";
iCurrencyData = 3500;
todayDateInMillis=Date.now();
todayDateInDateObj= new Date();
todaysDateInStringFormat=new Date().toDateString();
jsonUserObj = {'uid':120,'name':'Rohith','pwd':'admin'};
jsonInsuranceObj=[
  {policyNo:'001',policyHoldersName:'Rohith',AmountOnMaturity:10000,Nominee_Name:'Kumar',Monthly_EMI:1000,Duration_Of_Policy:18 },
  {policyNo:'002',policyHoldersName:'Varun',AmountOnMaturity:90000,Nominee_Name:'Kumar',Monthly_EMI:1000,Duration_Of_Policy:18 },

]
jsonStudentObjs=[
  {'student_id':102,'name':'rohith','stream':'cs','location':'hyderabad','marks':91},
  {'student_id':103,'name':'Varun','stream':'cs','location':'secunderabad','marks':92},
  {'student_id':104,'name':'Mani','stream':'cs','location':'medcahal','marks':99},
]
iDataForDecimalPipe=250.21398424;
iDataForPercentPipe=2.5;
strDataForSlicePipe1='Rohith Kumar';
strDataForSlicePipe='Munnar';
strN1ForSlicePipe=1;
strN2ForSlicePipe=-1;
iFarent=0;
iCelcius=0;
testCase='rohith'
nameString='';
users=[
  {firstName:'John',lastName:'Doe',dept:'Finance',salary:5000,doj:new Date('2015-12-11')},
  {firstName:'Any',lastName:'Watson',dept:'Finance',salary:5000,doj:new Date('2015-12-11')},
  {firstName:'Ram',lastName:'Doe',dept:'Finance',salary:5000,doj:new Date('2015-12-11')}

]
addUser(){
  this.users.push(
    {firstName:'Rohith',lastName:'Kumar',dept:'Finance',salary:9000,doj:new Date('2021-12-11')},

  )
}
reset(){
  this.users=this.users.slice(0,this.users.length-1);
}
iNumber1=1;
iNumber2=2;
formValue !:FormGroup
constructor (private authenticationService:AuthenticationServiceService, private productServiceObj:ProductService ,public rs:RestService,private router:Router , private loggerServiceObj:LoggerService, private formbuilder:FormBuilder){
}
arrProductsObjs:Products[]=[];
productId=0;
productName='';
cost=0;
searchId="";
searchName="";
bAddProduct = true;
  bSaveProduct = false;
  bEditProduct = false;
isShown:boolean=false;
plus=true;

getProductData(){
  this.loggerServiceObj.log("Before fetching the records from products service...");
  this.arrProductsObjs = this.productServiceObj.getAllProducts();
  this.loggerServiceObj.log("After fetching the records from products service...");
  this.loggerServiceObj.log("all log");
  
}
addProduct(){
  this.arrProductsObjs.push(new Products(this.productId,this.productName,this.cost));
}
getProductById(){
  console.log("in");
  if(this.searchId === ''){
    this.getProductData();
    //return this.arrProductsObjs;
  }
  return this.arrProductsObjs=this.arrProductsObjs.filter((arrProductsObjs)=>arrProductsObjs.productId.toString().toLowerCase().startsWith(this.searchId.toLowerCase()));  
}
getProductByName(){
  console.log("in");
  if(this.searchName === ''){
    this.getProductData();
    //return this.arrProductsObjs;
  }
  if(this.searchId != ''){
    this.arrProductsObjs=this.arrProductsObjs.filter((arrProductsObjs)=>arrProductsObjs.productId.toString().toLowerCase().startsWith(this.searchId.toLowerCase()));
  }
  this.arrProductsObjs=this.arrProductsObjs.filter((arrProductsObjs)=>arrProductsObjs.productName.toLowerCase().startsWith(this.searchName.toLowerCase()));   
  return this.arrProductsObjs
}
addProducts(){
  this.bAddProduct =false;
  this.bSaveProduct = true;
  this.bEditProduct = false;
}

saveProduct(id:number, name:string, cost:number){
  this.bAddProduct = true;
  this.bSaveProduct = false;
  this.bEditProduct = false;

  this.productServiceObj.save(id,name,cost)

}

  saveProductOfEdit(){
    console.log("Clicked save product of edit")
    this.bAddProduct = true;
    this.bSaveProduct = false;
    this.bEditProduct = false;
    

    var pid = this.productId;
    var pname = this.productName;
    var pcost = this.cost;
    this.productServiceObj.edit(pid, pname, pcost);
    this.productId=0;
    this.productName='';
    this.cost=0;
    this.isShown=false;
    this.plus=true;


  }
  editProduct(id:number, name:string, cost:number){
    this.bAddProduct = false;
    this.bSaveProduct = false;
    this.bEditProduct = true;
    this.isShown=true;
    this.plus=false;

    //populating the input boxes which contain two way data binding variables with the record whose edit is clicked
    this.productId = id;
    this.productName = name;
    this.cost = cost;
    
  }



deleteProduct(td:any){
  //var row:any = td.parentElement;
  this.arrProductsObjs=this.arrProductsObjs.splice(td,1);
  this.getProductData();
}
columns=["User Id","First Name","Last Name","Email","Location","Actions"];
arrUsers:User[]=[];
//response:any;
ngOnInit(): void{
  /*this.rs.getUsers().subscribe((response) => {
    this.users=response;
})
*/
this.formValue=this.formbuilder.group({
  firstname:['']
})
this.readData()


}
readData()
{
  this.rs.getUsers().subscribe(
    (data) =>
    {
      this.arrUsers=data;
    },
    (error) => console.log(error)
  )
  
}
/*add(){
  let userObj=new User(101,'r','s','r@','d');
  this.rs.insertData(userObj).subscribe(

  )
}*/
/*editData(row: any){
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['firstName'].setValue(row.firstName);
  this.formValue.controls['firstName'].setValue(row.firstName);


}*/
deleteRow(val:any){
  this.rs.deleteUser(val).subscribe(
    (data)=>{
      this.readData();

  },
  (error)=>console.log("Unable to delete"+error)
    );
    this.rs.getUsers().subscribe((response)=>{
      this.users = response;
    })
}
insertRecord(){
  let userObj=new User(109,'Rohith','s','a@','d');
  this.rs.insertData(userObj).subscribe(
    (data)=>
    {
      console.log("inser data"+data);
      this.readData();
    },

    (error) => console.log("unable to inser"+error)
  );
}
/*updateRow(id){

}*/
strMsgFromChild="";
getMessage(msg:any){
  this.strMsgFromChild=msg;
}
getDataFromAnotherComponent(){
  let studentComponentObj = new StudentComponent();
  console.log("Data sent from Student Component from Student Module is"+studentComponentObj.getName());
}
logInForAuthGuard(){
  this.authenticationService.login();
}
logOutForAuthGuard(){
  this.authenticationService.logout();
}
strUIDForQueryParams='Rohith';
  strPwdForQueryParams='admin';

}


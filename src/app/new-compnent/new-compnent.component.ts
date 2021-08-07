import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-new-compnent',
  templateUrl: './new-compnent.component.html',
  styleUrls: ['./new-compnent.component.css']
})
export class NewCompnentComponent implements OnInit {
  
  todaydate: any;
  newcomponent = "Entered in new component created"; 
  public persondata : any;
  emailid: any; 
  formdata: any;


   constructor(private myservice: MyserviceService) {}
   ngOnInit() { 
        this.myservice.getData().subscribe((data) => {
          
          this.persondata = data;
      });
      this.todaydate = this.myservice.showTodayDate(); 
      this.myservice.serviceproperty = this.newcomponent; 
      this.formdata = new FormGroup({ 
        emailid: new FormControl("", Validators.compose([
          Validators.required,
          Validators.pattern("[^ @]*@[^ @]*")
       ])),
       passwd: new FormControl("")
        
        // emailid: new FormControl("angular@gmail.com"),
        // passwd: new FormControl("abcd1234") 
     }); 
   } 

   onClickSubmit(data: { emailid: string; passwd: string; }) {
    alert("Entered Email id : " + data.emailid + ' '+ "Entered Password: " + data.passwd ); 
    this.emailid = data.emailid;
 }
   

  jsonval = {name:'Rox', age:'25', address:{a1:'Mumbai', a2:'Karnataka'}}; 


  title = " Anglur App Compnent"
  // declared array of months. 
  months = ["January", "February", "March", "April", "May", "June", "July", 
  "August", "September", "October", "November", "December"]; 

  isavailable = false; //variable is set to true

  myClickFunction($event: any) {
    //just added console.log which will display the event details in browser on click of the button.
    this.isavailable = !this.isavailable; 
    // variable is toggled onclick of the button 
 }


 changemonths($event: any) {
  console.log("Changed month from the Dropdown");
  console.log($event);
}


}

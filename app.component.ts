import { Component,OnInit } from '@angular/core';
//component decorator

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'

})
export class AppComponent implements OnInit {
  /**public variables */
  firstName:string;
  lastName:string;
  title:string;
  submitted:boolean=false;
}
ngOnInit(){
  /**Assign values to the variable after ngOnInit */
  this.firstName='Navita';
  this.lastName='Kamble';
}

//function to create title and bind it
CreateTitle(first,last){
  this.submitted=true;
  this.title=`FirstName:"${first}"and LastName:"${last}"`;
}
}
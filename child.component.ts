//import component and OnInit modules
import{Component,OnInit,Input} from '@angular/core';
@Component({
    selector:"child-app",
    templateUrl:"./child.component.html"
})

export class ChildComponent implements OnInit{
    @Input() title;

    //public variable
    childTitle:string;

    constructor(){}
    ngOnInit(){
        //Assigning values to the variables after ngOnInit

        this.childTitle=this.title;
    }
}
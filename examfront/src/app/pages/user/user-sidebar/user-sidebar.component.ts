import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(private _cat:CategoryService,private _snack:MatSnackBar){

  }

  category:any;
  ngOnInit(): void {
    this._cat.categories().subscribe(
      (data:any)=>{
        this.category=data;
      },
      (error)=>{
        this._snack.open('Error in loading Categories','',{
          duration:3000
        })
      }
    )
  }

}

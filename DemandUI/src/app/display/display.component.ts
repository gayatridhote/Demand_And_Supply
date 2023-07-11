import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: [ './display.component.css']
})

//'./display.component.css'
export class DisplayComponent implements OnInit {

  user: any ;
  p : any ;


  constructor( private http : HttpClient) {}

  ngOnInit(): void{
   this.http.get('http://localhost:5104/DandSApi/DisplayForAdmin/GetAll').subscribe({
    next: response => this.user = response,
    error: error => console.log(error),
    complete: () => console.log(this.user)
   })
  }
}

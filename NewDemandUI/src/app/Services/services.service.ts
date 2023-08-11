import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  baseUrl = "http://localhost:5104/DandSApi/DisplayForAdmin"
  constructor(private http: HttpClient) { }

  getAllData(){
    return this.http.get(  this.baseUrl + "/GetAll");
  }

  getDataByPositionId(positionId: string){
    return this.http.get(  this.baseUrl + "/GetByPositionId/" + positionId)
  }

  UploadResume(formData: FormData){
  
    return this.http.post(  this.baseUrl + "/UploadResume",formData )
  }
  
}

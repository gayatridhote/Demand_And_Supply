import { HttpClient, HttpEventType } from '@angular/common/http';
import { AfterViewInit, Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../Services/services.service';

@Component({
  selector: 'app-apply-here',
  templateUrl: './apply-here.component.html',
  styleUrls: ['./apply-here.component.css']
})
export class ApplyHereComponent implements OnInit {

  inputdata: any;
  positionId: any;
  user: any;
  file: File;
  fileName: string = '';
  alert: any


  constructor(private router: ActivatedRoute,
    private service: ServicesService,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private ref: MatDialogRef<ApplyHereComponent>) { }



  //to get details according to position Id
  ngOnInit(): void {
    this.inputdata = this.data;
    if (this.inputdata.code > 0) {
      this.service.getDataByPositionId(this.inputdata.code).subscribe(
        item => {
          this.user = item;

        }
      )
    }




    // this.positionId = this.router.snapshot.paramMap.get('id');
    // this.service.getDataByPositionId(this.positionId).subscribe(
    //   (result) => {
    //     this.user = result;
    //   })
  };


  onClose() {
    this.ref.close('Closing');
  }
  formData: FormData;

  //To select file in frontend
  getFile(event: any) {
    this.file = event.target.files[0];
    if (this.file) {
      this.fileName = this.file.name;
    }

    console.log('file', this.file);


  }


  // To send file to backend
  submit() {
    if (this.file) {
      let formData = new FormData();
      formData.append("positionId",this.inputdata.code)
      formData.append("Resume", this.file)

      this.service.UploadResume(formData).subscribe(
        (result) => {
          this.alert = result;
          console.log(this.alert);
          if (result) {
            console.log("Resume Uploaded Successfully")
          }
          else { console.log("Resume Upload Unsuccessfully") };

        })
    }else{ console.log("not found"); }
  }



}


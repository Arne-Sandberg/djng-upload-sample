import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  files: File[];
  name: string;

  constructor(private _http: HttpClient) { }

  ngOnInit() {
  }

  onInputFileChange(event) {
    // the files list is in event.target.files
    // grab it when change, before form submit
    this.files = <File[]>event.target.files;
    console.log(this.files);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', this.name);
    formData.append('image', this.files[0], this.files[0].name);
    this._http
      .post('http://localhost:8000/api/1.0/files/', formData)
      .subscribe(response => {
        console.log(response);
      }, error => {
        console.error(error);
      });
  }

}

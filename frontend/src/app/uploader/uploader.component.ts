import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  files: File[];
  theForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _http: HttpClient
  ) {
    this._createForm();
  }

  ngOnInit() {
  }

  private _createForm() {
    this.theForm = this._formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(5)]],
      image: ''
    });
  }

  onInputFileChange(event) {
    // the files list is in event.target.files
    // grab it when change, before form submit
    this.files = <File[]>event.target.files;
    console.log('File selected:', this.files);
  }

  onSubmit() {
    const values = this.theForm.value;
    const formData = new FormData(this.theForm.value);
    formData.append('name', values.name);
    if (this.files && this.files.length > 0) {
      formData.append('image', this.files[0], this.files[0].name);
    }
    this._http
      .post('http://localhost:8000/api/1.0/files/', formData)
      .subscribe(response => {
        console.log('saved!', response);
        alert('Saved!');
        this.theForm.reset();
      }, error => {
        console.error(error);
        alert('error\n' + error);
      });
  }

}

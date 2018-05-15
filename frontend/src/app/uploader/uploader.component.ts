import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FilesService } from '../files.service';

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
    private _service: FilesService
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
    if (this.files && this.files.length > 0) {
      values.image = this.files[0];
    }
    this._service
      .uploadFile(values)
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

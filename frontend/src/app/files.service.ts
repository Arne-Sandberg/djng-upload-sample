import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadFile } from './upload-file';

@Injectable()
export class FilesService {

  constructor(private _http: HttpClient) { }

  uploadFile(file: UploadFile) {
    const formData = new FormData();
    formData.append('name', file.name);
    if (file.image) {
      formData.append('image', file.image, file.image.name);
    }
    return this._http
      .post('http://localhost:8000/api/1.0/files/', formData)

  }
}

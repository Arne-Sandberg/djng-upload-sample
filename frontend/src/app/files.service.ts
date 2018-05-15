import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UploadFile } from './upload-file';

import { environment } from '../environments/environment';

@Injectable()
export class FilesService {

  private _endpoint: string = `${environment.apiBaseUrl}/files/`;

  constructor(private _http: HttpClient) { }

  uploadFile(file: UploadFile) {
    const formData = new FormData();
    formData.append('name', file.name);
    if (file.image) {
      formData.append('image', file.image, file.image.name);
    }
    return this._http
      .post(this._endpoint, formData)

  }
}

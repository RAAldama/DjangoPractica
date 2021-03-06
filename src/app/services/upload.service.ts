import { Injectable } from '@angular/core';
import * as AWS from 'aws-sdk/global';
import * as S3 from 'aws-sdk/clients/s3';

@Injectable({
  providedIn: 'root',
})
export class UploadService {
  constructor() {}

  fileUpload(file) {
    const contentType = file.type;
    const bucket = new S3(
          {
              accessKeyId: '',
              secretAccessKey: '',
              region: 'us-east-1',
            
          }
      );
      const params = {
          Bucket: 'practica-django',
          Key:  file.name,
          Body: file,
          ACL: 'public-read',
          ContentType: contentType
      };
      bucket.upload(params, function (err, data) {
          if (err) {
              console.log('EROOR: ',JSON.stringify( err));
              return false;
          }
          console.log('File Uploaded.', data);
          return true;
      });
    }
}

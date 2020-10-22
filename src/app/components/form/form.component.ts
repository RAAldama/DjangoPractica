import { Component, OnInit } from '@angular/core';
import { UploadService } from '../../services/upload.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {

  toFile;

  constructor(private uploadService: UploadService) {}

  ngOnInit() {}

  onChange(event){
    this.toFile = event.target.files;
  }
  
  submit(){
    const file = this.toFile.item(0);
    this.uploadService.fileUpload(file);
  }
  
}

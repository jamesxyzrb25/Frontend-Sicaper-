import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-editar-personal',
  templateUrl: './editar-personal.component.html',
  styleUrls: ['./editar-personal.component.css']
})
export class EditarPersonalComponent implements OnInit {

  options: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');

  imageUrl: string = "../../assets/images/github.png";
  fileToUpload: File = null;

  selectedFiles: FileList;
  progressInfos = [];
  message = '';

  fileInfos: Observable<any>;

  constructor(fb: FormBuilder) {
    this.options = fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
    });
   }

  ngOnInit(): void {
  }

  selectFiles(file: FileList){
    this.fileToUpload = file.item(0);

    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;

    };
    reader.readAsDataURL(this.fileToUpload);

  }

  onSubmit(){

  }

}

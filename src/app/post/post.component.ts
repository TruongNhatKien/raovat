import { Component, OnInit } from '@angular/core';
import { HttpService } from '../providers/http.service';
import { log } from 'util';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  imageUrl: string = "./assets/default.jpg";
  fileToUpload: File = null;

  namePr: string = '';
  pricePr: string = '';
  infoPr: string = '';
  addrPr: string = '';

  constructor(
    private httpService: HttpService,
  ) { }

  ngOnInit() {
    this.imageUrl;
  }

  postIfPr() {
    if (this.namePr.length !== 0 && this.addrPr.length !== 0 && this.pricePr.length !== 0 && this.infoPr.length !== 0) {
      const postIf: any = {
        name: this.namePr,
        price: this.pricePr,
        info: this.infoPr,
        addr: this.addrPr,
      };
      this.httpService.postIfPr(postIf).subscribe(data => {
        // this.fileStore.loadDataIfNeed();
      });
      this.namePr = '';
      this.pricePr = '';
      this.infoPr = '';
      this.addrPr = '';
    } else if (this.namePr.length === 0 || this.infoPr.length === 0 || this.pricePr.length === 0 ||this.addrPr.length === 0) {
      const checkAdd = confirm('Data is empty! Do you want exit?');
    }
  }

  handleFileInput(file: FileList) {
    this.fileToUpload = file.item(0);

    //Show image preview
    var reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }

  selectChangeHandler (event: any) {
    this.addrPr = event.target.value;
  }
}

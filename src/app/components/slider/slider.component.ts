import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  loading = true;
  imgs: Array<any> = [];
  error: boolean;
  errorMsg: string;

  constructor(private http: HttpClient) {
    this.http.get('https://jsonplaceholder.typicode.com/photos').subscribe((resp: any) => {
      for (let i = 1; i < 500; i ++) {
        this.imgs.push(resp[i]);
      }
      this.loading = false;
    }, err => {
      this.error = true;
      this.errorMsg = err.message;
      this.loading = false;
    });
  }




  config = {
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  };


  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { QualquerCoisaService } from './qualquer-coisa.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-qualquer-coisa',
  templateUrl: './qualquer-coisa.component.html',
  styleUrls: ['./qualquer-coisa.component.css']
})
export class QualquerCoisaComponent implements OnInit {

  joke: string = '';
  //categoryJoke: string = '';
  goodJokes: any = [];
  categories: any = [];
  selectedCategory: any;
  constructor(private qqrCoisa: QualquerCoisaService, private spinner: NgxSpinnerService) { }

  ngOnInit() {
    this.spinner.show();
    this.getAllCategories();
  }

  likeJoke() {
    this.goodJokes.push(this.joke);
  }

  getAJoke() {
    this.qqrCoisa.getJokes().subscribe(
      res => {
        this.joke = res['value'];
      }
    );
  }

  getAllCategories() {
    this.qqrCoisa.getCategories().subscribe(
      res => {
        this.categories = res;
        this.spinner.hide();
      }
    );
  }

  getCategoryJoke() {
    this.qqrCoisa.getJokeByCategory(this.selectedCategory).subscribe(
      res => {
        this.joke = res['value'];
      }
    )
  }

  removeJoke(index){
    this.goodJokes.splice(index, 1);
  }

  /* getACategoryJoke(aux) {
     this.qqrCoisa.getJokeByCategory(aux).subscribe(
       res=> {
         this.categoryJoke = res['value'];
       }
     );
   }*/
}

import { Component, OnInit } from '@angular/core';
import { QualquerCoisaService } from './qualquer-coisa.service';

@Component({
  selector: 'app-qualquer-coisa',
  templateUrl: './qualquer-coisa.component.html',
  styleUrls: ['./qualquer-coisa.component.css']
})
export class QualquerCoisaComponent implements OnInit {

  joke: string = '';
  categoryJoke: string = '';
  goodJokes: any = [];
  categories: any = [];
  constructor(private qqrCoisa: QualquerCoisaService) { }

  ngOnInit() {
     
  }

  likeJoke(){
    this.goodJokes.push(this.joke);  
  }

  getAJoke(){
    this.qqrCoisa.getJokes().subscribe(
      res=> {
        this.joke = res['value'];
      }
    );
  }

  getAllCategories() {
    this.qqrCoisa.getCategories().subscribe(
      res=> {
        this.categories = res;
      }
    );
  }

  getACategoryJoke(aux) {
    this.qqrCoisa.getJokeByCategory(aux).subscribe(
      res=> {
        this.categoryJoke = res['value'];
      }
    );
  }
}

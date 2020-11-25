import { Product } from './../../model/product.model';
import { SearchService } from './../../service/search.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: string;
  product: Product[];

  constructor(private searchService: SearchService) { }

  ngOnInit(): void {
  }

  public getProducts(){
    this.searchService.getProducts(this.search).subscribe(product => {
        this.product = product;
      }
    );
  }

}

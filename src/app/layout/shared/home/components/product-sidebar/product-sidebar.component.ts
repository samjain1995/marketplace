import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss']
})
export class ProductSidebarComponent implements OnInit {

//  products: any = { category: { name: '', products: [] } };
 products: Array<any> = [{cat: 'cat1', products: []}, {cat: 'cat2', products: []}, {cat: 'cat3', products: []}, {cat: 'cat1', products: []}];

  constructor() { }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    for (let i = 0; i < this.products.length; i++) {
      for (let j = 0; j < 5; j++) {
        this.products[i].products.push(Object.assign({}, { name: `product_${j+1}`}))
      }
    }
    console.log(this.products);    
  }

}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-product-sidebar',
  templateUrl: './product-sidebar.component.html',
  styleUrls: ['./product-sidebar.component.scss']
})
export class ProductSidebarComponent implements OnInit, OnChanges {

  @Input('sidenav') sidenav = '';
  @Output() sidenavStatus = new EventEmitter<number>();
  //  products: any = { category: { name: '', products: [] } };
  products: Array<any> = [
    {
      cat: 'cat1', products: [
        {name: 'Specific Diets', logo: '/assets/images/fork.png'},
        {name: 'Fruits & Vegetables', logo: '/assets/images/harvest.png'},
        {name: 'Meat & milk', logo: '/assets/images/fish.png'},
        {name: 'Dairy, Eggs & Fresh convenience food', logo: '/assets/images/milk.png'},
        {name: 'Bread & Bakery', logo: '/assets/images/bread.png'}
        
      ]
    },
    {
      cat: 'cat2', products: [
        {name: 'Specific Diets', logo: '/assets/images/fork.png'},
        {name: 'Fruits & Vegetables', logo: '/assets/images/harvest.png'},
        {name: 'Meat & milk', logo: '/assets/images/fish.png'},
        {name: 'Dairy, Eggs & Fresh convenience food', logo: '/assets/images/milk.png'},
        {name: 'Bread & Bakery', logo: '/assets/images/bread.png'}
      ]
    },
    {
      cat: 'cat3', products: [
        {name: 'Specific Diets', logo: '/assets/images/fork.png'},
        {name: 'Fruits & Vegetables', logo: '/assets/images/harvest.png'},
        {name: 'Meat & milk', logo: '/assets/images/fish.png'},
        {name: 'Dairy, Eggs & Fresh convenience food', logo: '/assets/images/milk.png'},
        {name: 'Bread & Bakery', logo: '/assets/images/bread.png'}
      ]
    },
    {
      cat: 'cat4', products: [
        {name: 'Specific Diets', logo: '/assets/images/fork.png'},
        {name: 'Fruits & Vegetables', logo: '/assets/images/harvest.png'},
        {name: 'Meat & milk', logo: '/assets/images/fish.png'},
        {name: 'Dairy, Eggs & Fresh convenience food', logo: '/assets/images/milk.png'},
        {name: 'Bread & Bakery', logo: '/assets/images/bread.png'}
      ]
    },
    {
      cat: 'cat5', products: [
        {name: 'Specific Diets', logo: '/assets/images/fork.png'},
        {name: 'Fruits & Vegetables', logo: '/assets/images/harvest.png'},
        {name: 'Meat & milk', logo: '/assets/images/fish.png'},
        {name: 'Dairy, Eggs & Fresh convenience food', logo: '/assets/images/milk.png'},
        {name: 'Bread & Bakery', logo: '/assets/images/bread.png'}
      ]
    }
  ];

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
   this.sidenav = changes.sidenav.currentValue;
   console.log(this.sidenav);
   
   this.sidenavStatus.emit(Number(this.sidenav))
  }

  ngOnInit() {
    // this.getProducts();
  }

  public getProducts() {
    for (let i = 0; i < this.products.length; i++) {
      for (let j = 0; j < 5; j++) {
        this.products[i].products.push(Object.assign({}, { name: `product_${j + 1}` }))
      }
    }
    console.log(this.products);
  }

}

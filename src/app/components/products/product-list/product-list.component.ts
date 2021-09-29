import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products!: Array<Product>;

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.Get().subscribe( products => {
      this.Products = products.slice(0,5);

    })
  }

}

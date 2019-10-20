import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {
  uri = 'http://localhost:8080/'
  constructor(private db: AngularFireDatabase) { }
  // constructor(private http: HttpClient) { }
  
  create(product) {
    // return this.db.list('/products').push(product);
    const obj = {
      category: "seasonings",
      imageUrl: "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
      price: "1010101.22",
      title: "Spinach"
    };
    // return this.http.get(`${this.uri}/products`)
  }

  getAll() {
    // console.log(this.db.list('/products'));
    return this.db.list('/products');
    // const obj = {
    //   category: "seasonings",
    //   imageUrl: "http://www.publicdomainpictures.net/pictures/170000/velka/spinach-leaves-1461774375kTU.jpg",
    //   price: "1010101.22",
    //   title: "Spinach"
    // };
    // return this.http.get(`${this.uri}/products`)
  }

  getProduct(productId) {
    return this.db.object('/products/' + productId);
  }

  updateProduct(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  deleteProduct(productId) {
    return this.db.object('/products/' + productId).remove();
  }

}

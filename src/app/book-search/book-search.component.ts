import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GoogleBooksApiService } from '../google-books-api.service';
import { Book } from '../models'
@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.css']
})
export class BookSearchComponent implements OnInit {

  search_results: Book[];
  // https://www.googleapis.com/books/v1/volumes?q=
  // items
  // get first 20
  // item.volumeInfo:
  // .title
  // .subtitle
  // .authors (.join(","))
  // .pageCount
  // publishedDate
  // imageLinks.smallThumbnail
  // value book
  // selflink
  // https://www.googleapis.com/books/v1/volumes/qhWZjwEACAAJ

  constructor(private googleservice: GoogleBooksApiService) { }

  ngOnInit() { 
    this.fetch('distributed systems')
  }
  

  fetch(q: String) {
    this.googleservice.getBooks(q)
    .subscribe(items => {
      this.search_results = items.items.map(item => {
        // console.log(item)
        return new Book(
          "003",
          item.volumeInfo.title,
          item.volumeInfo.subtitle,
          item.volumeInfo.authors.join(','),
          item.volumeInfo.pageCount,
          item.volumeInfo.publishedDate,
          item.selfLink
        )
      // this.search_results = books})  
      });
   })
  }
}

import { Component, OnInit, AfterViewInit } from '@angular/core';
import { BookService } from '../service/book-service.service';
import { Observable } from "rxjs";  
import { Book } from '../model/Book';
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  posts;
  books: Book[];
  constructor(private bookService:BookService) { }
  
  ngOnInit(): void {
    this.bookService.getBookList().subscribe(data =>{  
      this.books =data;  
      });
  }
  sortBooks(value:string): void {
    if(value=='year'){
      this.books=this.books.sort((a, b) => a.year - b.year);
    }else if(value=='author'){
      this.books=this.books.sort((a, b) => a.author.localeCompare(b.author));
    }else if(value=='price'){
      this.books=this.books.sort((a, b) => a.price - b.price);
    }

  }
  onDelete(value){
    this.bookService.onDelete(value).subscribe();
  }
}

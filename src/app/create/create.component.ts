import { Component, OnInit } from '@angular/core';
import {BookService} from '../service/book-service.service'

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private bookService:BookService) { }

  ngOnInit(): void {
  }
  insert(value){

this.bookService.createNew(value).subscribe(data =>{  
 console.log(data)
  });
  }

}

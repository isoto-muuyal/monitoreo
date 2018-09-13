import { Component, OnInit, Input, Output } from '@angular/core';
import { NotesService } from '../notes.service';

@Component({
  selector: 'app-notas',
  templateUrl: './notas.component.html',
  styleUrls: ['./notas.component.css']
})
export class NotasComponent implements OnInit {

  id;
  title;
  content;
  category;
  author;
  important: boolean;
  importantLabel;
  mediaName;
  city;
  state;
  witness;

  constructor(service: NotesService) {
    this.id = service.id;
    this.title = service.title;
    this.content = service.content;
    this.category = service.category;
    this.author = service.author;
    this.important = service.important;
    this.mediaName = service.mediaName;
    this.city = service.city;
    this.state = service.state;
    this.witness = service.witness;
   }

  ngOnInit() {
  }

}

import { Injectable } from '@angular/core';

@Injectable()
export class NotesService {

  id;
  title;
  content;
  category;
  author;
  important: boolean;
  mediaName;
  city;
  state;
  witness;

  constructor() {

    this.id=1;
    this.title='title test';
    this.content = 'asdasd';
    this.category = 'seguridad';
    this.author = 'juan perez';
    this.important = false;
    this.mediaName = 'heraldo';
    this.city = 'chihuahua';
    this.state = 'chihuahua';
    this.witness = 'testigo';

   }

}

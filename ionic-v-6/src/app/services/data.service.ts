import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messages = [
    {
      Id: 0,
      Name: 'Alert',
      Icon: '',
      Link: 'alert',
    },
    {
      Id: 1,
      Name: 'Action Sheet',
      Icon: '',
      Link: 'action-sheet',
    },
    {
      Id: 2,
      Name: 'Accordion',
      Icon: '',
      Link: 'accordion',
    },
  ];

  constructor() { }

  public getMessages() {
    return this.messages;
  }

  public getMessageById(id: number) {
    return this.messages[id];
  }
}

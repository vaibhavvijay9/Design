import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-messages-screen',
  templateUrl: './messages-screen.component.html',
  styleUrls: ['./messages-screen.component.scss']
})
export class MessagesScreenComponent implements OnInit {

  chatList;

  constructor() { }

  ngOnInit() {
    this.chatList = [
      {name: 'Olivia Sol',message: 'Hey robin, this seems like a great start', timestamp: '19 Jan, 2018 | 03:40 pm',replies:'20', chart:'290/300'},
      {name: 'Alexander',message: 'ok so please tell me how we can go further on it.', timestamp: '19 Jan, 2018 | 03:40 pm',replies:'20', chart:'290/300'},
      {name: 'Sophia Richi',message: 'Thanks! How are you', timestamp: '19 Jan, 2018 | 03:40 pm',replies:'20', chart:'290/300'}
    ]
  }

  fabFocus(){
    $('#fabPanel').removeClass('d-none');
    $('#fabPanel').addClass('d-flex');
  }

  fabFocusOut(){
    $('#fabPanel').removeClass('d-flex');
    $('#fabPanel').addClass('d-none');
  }

}

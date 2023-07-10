import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { Quote } from '../../models/quote';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css'],
})
export class QuoteCardComponent implements OnInit {
  @Input({ required: true }) data: Quote;
  @Output() newQuote: EventEmitter<void> = new EventEmitter();

  ngOnInit() {
    if (this.data === null || this.data === undefined) {
      throw new TypeError('The input "data" is required');
    }
  }
}

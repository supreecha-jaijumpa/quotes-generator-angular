import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quote } from './core/models/quote.model';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  quotes: Quote[] | null = null;
  quote: Quote | null = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  handleNewQuote(data: Quote[] | null) {
    if (!data || data.length === 0) {
      this.quote = null;
      return;
    }

    const newQuote = data[Math.floor(Math.random() * data.length)];
    this.quote = newQuote;
  }

  ngOnInit(): void {
    this.http
      .get('https://type.fit/api/quotes')
      .pipe(catchError((error) => (this.error = String(error))))
      .subscribe((data) => {
        this.quotes = data as Quote[];
        this.handleNewQuote(data as Quote[]);
      });
  }
}

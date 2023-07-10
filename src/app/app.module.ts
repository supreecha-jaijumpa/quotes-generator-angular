import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CopyToClipboardComponent } from './copy-to-clipboard/copy-to-clipboard.component';
import { QuoteCardComponent } from './quote-card/quote-card.component';

@NgModule({
  declarations: [AppComponent, CopyToClipboardComponent, QuoteCardComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

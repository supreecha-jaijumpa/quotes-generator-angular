import { Component, Input } from '@angular/core';
import { CopyToClipboardService } from './copy-toclipboard.service';

@Component({
  selector: 'app-copy-to-clipboard',
  templateUrl: './copy-to-clipboard.component.html',
  styleUrls: ['./copy-to-clipboard.component.css'],
})
export class CopyToClipboardComponent {
  @Input({ required: true }) text: string;
  copied: boolean = false;
  constructor(private copyToClipboardService: CopyToClipboardService) {}

  handleCopy() {
    this.copyToClipboardService.copy(this.text);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 3000);
  }
}

import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CopyToClipboardService {
  copiedText: string | null = null;

  async copy(text: string) {
    if (!navigator?.clipboard) {
      console.warn('Clipboard not supported');
      return false;
    }

    try {
      await navigator.clipboard.writeText(text);
      this.copiedText = text;
      return true;
    } catch (error) {
      console.warn('Copy failed', error);
      this.copiedText = null;
      return false;
    }
  }
}

import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightKeywords]'
})
export class HighlightKeywordsDirective implements OnChanges {
  @Input() appHighlightKeywords: string = '';
  @Input() keywords: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['appHighlightKeywords'] || changes['keywords']) {
      this.highlightText();
    }
  }

  private highlightText(): void {
    if (!this.appHighlightKeywords || !this.keywords) {
      this.el.nativeElement.innerHTML = this.appHighlightKeywords || '';
      return;
    }

    const keywordArray = this.keywords
      .toLowerCase()
      .split(' ')
      .filter(k => k.trim())
      .sort((a, b) => b.length - a.length);

    let highlightedText = this.appHighlightKeywords;

    keywordArray.forEach(keyword => {
      if (keyword.trim()) {
        const regex = new RegExp(`(${this.escapeRegExp(keyword)})`, 'gi');
        highlightedText = highlightedText.replace(
          regex,
          '<span class="highlight">$1</span>'
        );
      }
    });

    this.el.nativeElement.innerHTML = highlightedText;
  }

  private escapeRegExp(string: string): string {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  }
}

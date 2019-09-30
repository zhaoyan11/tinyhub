import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColorRandom]'
})
export class BgColorRandomDirective implements OnInit {
  public colors = [
    'magenta',
    'red',
    'volcano',
    'orange',
    'gold',
    'lime',
    'green',
    'cyan',
    'blue',
    'geekblue',
    'purple'
  ];

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    const color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', color);
  }
}

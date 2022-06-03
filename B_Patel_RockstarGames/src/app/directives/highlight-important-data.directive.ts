import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  private isHighlighted: boolean = false;
  private initialTypeBorder: string;
  private initialTitleBgColor: string;
  // private initialTextColor: string;
  @HostBinding('style.border')
  get borderForType() {
    return this.isHighlighted ? '5px double red' : this.initialTypeBorder;
  }
  @HostBinding('style.backgroundColor')
  get backgroundColorForTitle() {
    return this.isHighlighted ? this.color || "transparent" :
      this.initialTitleBgColor;
  }
  constructor(private el: ElementRef) {
    this.initialTypeBorder = this.el.nativeElement.style.border;
    this.initialTitleBgColor = this.el.nativeElement.style.backgroundColor;
  }

  @HostListener('mouseenter') onclickTitle() {
    this.isHighlighted = !this.isHighlighted;
  }
  @HostListener('mouseout') onClickTitle() {
    this.isHighlighted = !this.isHighlighted;
    // console.log(this.color);
  }
  @HostListener('click') onClickType() {
    this.isHighlighted = !this.isHighlighted;
    // console.log(this.color);
  }

  // checkLuminance(color: string): string {
  //   // run luminance check on the color to return either black or white for the text color for maximum contrast
  //   return this.isHighlighted ? "white" : "black";
  // }

}

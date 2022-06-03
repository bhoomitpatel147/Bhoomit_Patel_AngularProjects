import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  private isHighlighted: boolean = false;
  private initialColour: string;
  // private initialTextColor: string;
  @HostBinding('style.border')
  get border() {
    return this.isHighlighted ? '5px double red' : this.initialColour;
  }
  // @HostBinding('style.border')
  // get textColour() {
  //   return this.isHighlighted ? this.checkLuminance(this.color || "green") :
  //     this.checkLuminance(this.initialColour);
  // }
  constructor(private el: ElementRef) {
    this.initialColour = this.el.nativeElement.style.border;
    // this.initialTextColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onclick() {
    this.isHighlighted = !this.isHighlighted;
  }
  @HostListener('mouseout') onClick() {
    this.isHighlighted = !this.isHighlighted;
  }

  // checkLuminance(color: string): string {
  //   // run luminance check on the color to return either black or white for the text color for maximum contrast
  //   return this.isHighlighted ? "white" : "black";
  // }

}

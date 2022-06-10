import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  @Input() highLightCss?: "type" | "title" | "tag" | "author";
  // @Input() color?: string;


  private isHighLightBorder: boolean = false;
  private isHighLightBgColor: boolean = false;
  private isHightLightTextColor: boolean = false;

  // private initialTypeBorder: string;
  // private initialTitleBgColor: string;
  private initialTextColor: string;


  @HostBinding('style.backgroundColor')
  get backgroundColorForTitle() {
    return this.isHighLightBgColor ? this.color : "transparent";
  }

  @HostBinding('class.borderType')
  get borderForType() {
    return this.isHighLightBorder;
  }
  @HostBinding('class.fontColor')
  get textColorForTags() {
    return this.isHightLightTextColor;
  }

  @HostBinding('class.backgroundColor')
  get bgColor() {
    return this.isHighLightBgColor;
  }



  constructor(private el: ElementRef) {

    this.initialTextColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onclickTitle() {
    this.hoverAffect(true);
  }

  @HostListener('mouseleave') onClickTitle() {
    this.hoverAffect(false);

    // console.log(this.color);
  }

  private hoverAffect(newState: boolean) {
    if (this.highLightCss === "type" || this.highLightCss === "author") {
      // reset type background color
      this.isHighLightBorder = newState;
      // this.elm.nativeElement.style.border = newState ? "4px solid #0000ff" : "none";
    }

    if (this.highLightCss === "tag" || this.highLightCss === "author") {
      // reset tag font color back to original value
      this.isHightLightTextColor = newState;
      // this.elm.nativeElement.style.color = newState ? 'darkred' : this.initialColourOfTagText;
    }
  }
  @HostListener('click') onClickType() {
    if (this.highLightCss === 'title' || this.highLightCss === 'author') {
      this.isHighLightBgColor = !this.isHighLightBgColor;
    }
    // console.log(this.color);
  }

  // checkLuminance(color: string): string {
  //   // run luminance check on the color to return either black or white for the text color for maximum contrast
  //   return this.isHighlighted ? "white" : "black";
  // }

}

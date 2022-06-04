import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightImportantData]'
})
export class HighlightImportantDataDirective {
  @Input() color?: string;
  private isHighLightBorder: boolean = false;
  private isHighLightBgColor: boolean = false;
  private isHightLightTextColor: boolean = false;

  private initialTypeBorder: string;
  private initialTitleBgColor: string;
  private initialTextColor: string;

  @HostBinding('style.border')
  get borderForType() {
    return this.isHighLightBorder ? '5px double red' : this.initialTypeBorder;
  }
  @HostBinding('style.backgroundColor')
  get backgroundColorForTitle() {
    return this.isHighLightBgColor ? this.color || "transparent" :
      this.initialTitleBgColor;
  }

  @HostBinding('style.color')
  get textColorForTags() {
    return this.isHightLightTextColor ? 'red' : this.initialTextColor;
  }



  constructor(private el: ElementRef) {
    this.initialTypeBorder = this.el.nativeElement.style.border;
    this.initialTitleBgColor = this.el.nativeElement.style.backgroundColor;
    this.initialTextColor = this.el.nativeElement.style.color;
  }

  @HostListener('mouseenter') onclickTitle() {
    this.isHighLightBorder = !this.isHighLightBorder;
    this.isHightLightTextColor = !this.isHightLightTextColor;

  }

  @HostListener('mouseout') onClickTitle() {
    this.isHighLightBorder = !this.isHighLightBorder;
    this.isHightLightTextColor = !this.isHightLightTextColor;

    // console.log(this.color);
  }
  // @HostListener('mouseenter') onOverTag() {
  //   this.isHightLightTextColor = !this.isHightLightTextColor;
  // }
  // @HostListener('mouseout') onOutTag() {
  //   this.isHightLightTextColor = !this.isHightLightTextColor;

  //   // console.log(this.color);
  // }
  @HostListener('click') onClickType() {
    this.isHighLightBgColor = !this.isHighLightBgColor;
    // console.log(this.color);
  }

  // checkLuminance(color: string): string {
  //   // run luminance check on the color to return either black or white for the text color for maximum contrast
  //   return this.isHighlighted ? "white" : "black";
  // }

}

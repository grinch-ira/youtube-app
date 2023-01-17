import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { ColorByTime } from '../models/filter.model';
@Directive({
  selector: '[appDateStatus]',
})

export class DateStatusDirective implements OnInit {

  @Input('appDateStatus') public time!: string;

  constructor(private elem: ElementRef) {

  }



  public ngOnInit(): void {
    const color: string = this.getColorByTime(new Date(this.time));
    this.elem.nativeElement.style.borderColor = color;
  }

  public getColorByTime(time: Date): string {
    const olderSixMonth: number = new Date(0).setMonth(6);
    const olderOneMonth: number = new Date(0).setMonth(1);
    const olderSevenDay: number = new Date(0).setDate(7);
    const timeDifference: number = new Date().getTime() - time.getTime();

    if (timeDifference < olderSevenDay) {
      return ColorByTime.Blue;
    } else if (
      timeDifference < olderOneMonth &&
      timeDifference > olderSevenDay
    ) {
      return ColorByTime.Green;
    } else if (
      timeDifference < olderSixMonth &&
      timeDifference > olderOneMonth
    ) {
      return ColorByTime.Yellow;
    } else {
      return ColorByTime.Red;
    }
  }
}

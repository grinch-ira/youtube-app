import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IItem } from 'src/app/shared/models/search-item.model';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss'],
})

export class VideoCardComponent implements OnInit {
  public title?: string;

  public imageUrl?: string;

  public viewCount!: string;

  public likeCount!: string;

  public dislikeCount!: string;

  public commentCount!: string;

  @Input() item!: IItem;

  constructor(private router: Router) { }

  public ngOnInit(): void {
    if (!this.item) {
      return;
    } else {
      this.title = this.item.snippet.title;
      this.imageUrl = this.item.snippet.thumbnails.medium.url;
      this.viewCount = this.changeValue(this.item.statistics.viewCount);
      this.likeCount = this.changeValue(this.item.statistics.likeCount);
      this.dislikeCount = this.changeValue(this.item.statistics.dislikeCount);
      this.commentCount = this.changeValue(this.item.statistics.commentCount);
    }
  }

  public changeValue(value: string): string {
    const [a, b] = [1000, 1000000];
    if (+value > a) {
      return Math.floor(+value / a) + 'K';
    } else if (+value > b) {
      return Math.floor(+value / b) + 'M';
    }
    return value;
  }

  public goToCardInfo(): void {
    this.router.navigate(['info', this.item.id]);
  }
}

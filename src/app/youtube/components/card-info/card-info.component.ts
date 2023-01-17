import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IItem } from 'src/app/shared/models/search-item.model';
import { Location } from '@angular/common';
import { YoutubeApiService } from 'src/app/core/services/youtube-api.service';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})


export class CardInfoComponent implements OnInit {

  public item!: IItem;

  public id!:string;

  public publicationTime!: Date;

  constructor(
    private youtubeApi: YoutubeApiService,
    private route: ActivatedRoute,
    private router: Router,
    private location: Location,
  ) { }

  public ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.youtubeApi.getIdFromSearchIds(this.id)
      .subscribe(
        (responce => {
          if (!responce?.items[0]) { this.router.navigate(['404']); }
          this.item = responce?.items[0];
          this.publicationTime = new Date(this.item?.snippet?.publishedAt);
        }),
        () => this.router.navigate(['404']),
      );
  }

  public goBack(): void {
    this.location.back();
  }


}

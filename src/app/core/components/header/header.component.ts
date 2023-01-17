import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { catchError, filter, Observable, switchMap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { CardsCollectionService } from '../../services/cards-collection.service';
import { UserService } from '../../services/user.service';
import { YoutubeApiService } from '../../services/youtube-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})

export class HeaderComponent implements OnInit, AfterViewInit {
  @ViewChild('headerInput') public headerInput!: ElementRef<HTMLInputElement>;

  public isFilterBlockVisible: boolean = false;

  public loginUserName: User | null | undefined = null;

  constructor(
    private userService: UserService,
    private router: Router,
    private youtubeApi: YoutubeApiService,
    private cardsCollection: CardsCollectionService,
  ) {}

  public ngOnInit(): void {
    this.userService.getUserStream().subscribe((newUser) => {
      this.loginUserName = newUser;
      console.log('username=' + newUser?.name);
    });
  }

  public ngAfterViewInit(): void {
    const input: HTMLInputElement = this.headerInput.nativeElement;

    const inputStream: Observable<string> = new Observable((obs) => {
      input.oninput = () => obs.next(input.value);
    });

    inputStream
      .pipe(
        filter((value) => !!value.trim()),
        switchMap((query) =>
          this.youtubeApi.fetchVideosByQuery(query).pipe(
            catchError(() => {
              return [];
            }),
          ),
        ),
      )
      .subscribe((items) => {
        if (items.length) {
          this.cardsCollection.addNewItems(items);
        }
      });
  }

  public exitUser(): void {
    this.userService?.exitUser();
    this.router.navigate(['login']);
  }

  public goToCreateCard():void {
    this.router.navigate(['create']);
  }

  public goToLogin(): void {
    this.router.navigate(['login']);
  }

  public goToHome(): void {
    this.router.navigate(['/']);
  }
}

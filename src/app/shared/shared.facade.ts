import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of, shareReplay} from "rxjs";
import {CustomerByPhoneNumberContent, Messages, MessageType, ResponseType} from "./shared.interfaces";
import {filter, finalize, switchMap, take, tap} from "rxjs/operators";
import {SharedService} from "./shared.service";
@Injectable()
export class SharedFacade {

  public messagesSubject = new BehaviorSubject<Messages | null>(null);
  messages$ = this.messagesSubject.asObservable()
    .pipe(
      filter((messages): messages is Messages => !!messages),
    );

  private loaderSubject = new BehaviorSubject<boolean>(false);
  loading$ = this.loaderSubject.asObservable();

  private navigateButtonSubject = new BehaviorSubject<string | null>(null);
  navigateButton$ = this.navigateButtonSubject.asObservable();

  private regionIdSubject = new BehaviorSubject<string | null>(null);
  regionId$ = this.regionIdSubject.asObservable();

  private currencyIdSubject = new BehaviorSubject<string | null>(null);
  currencyId$ = this.currencyIdSubject.asObservable();

  private cityIdSubject = new BehaviorSubject<string | null>(null);
  cityId$ = this.cityIdSubject.asObservable();

  private accountIdSubject = new BehaviorSubject<string | null>(null);
  accountId$ = this.accountIdSubject.asObservable();

  private uploadFileSubject$ = new BehaviorSubject<string | null>(null);
  uploadFileProcess$ = this.uploadFileSubject$.asObservable();


  private categoryBrandIdSubject$ = new BehaviorSubject<string | null>(null);
  categoryBrandId$ = this.categoryBrandIdSubject$.asObservable();

  private invoiceIdSubject = new BehaviorSubject<string | null>(null);
  invoiceId$ = this.invoiceIdSubject.asObservable();

  constructor(private sharedService: SharedService) {
  }

  public uploadFile(file: File): void {
    this.showLoaderUntilCompleted(this.sharedService.uploadFile(file).pipe(
      tap(res => {
        if (res.type === ResponseType.Success) {
          this.uploadFileSubject$.next(res.content);
        } else {
          this.uploadFileSubject$.next(null);
        }
      }),
      shareReplay()
    )).pipe(
      take(1)
    ).subscribe();
  }

  cleanUploadFile() {
    this.uploadFileSubject$.next(null);
  }


  showMessage(type: MessageType, title: string, text: Array<string>): void {
   console.log('showMessage');
    const message = this.getMessage(text);
    console.log('message');
    console.log(message);
    this.messagesSubject.next({type, title, text: message});
    this.messagesSubject.next(null);
  }

  private getMessage(text: Array<string>): string {
    let message = '';
    text.forEach((value, index, array) => {
      message = message + value + '\n';
    });
    return message;
  }

  showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingOn()),
        switchMap(() => obs$),
        finalize(() => {
          this.loadingOff();
        })
      );
  }

  loadingOn(): void {
    this.loaderSubject.next(true);
  }

  navigateButtonOn(navigateTo: string | null): void {
    this.navigateButtonSubject.next(navigateTo);
  }

  regionId(regionId: string | null): void {
    this.regionIdSubject.next(regionId);
  }

  currencyPrices(currencyId: string): void {
    this.currencyIdSubject.next(currencyId);
  }

  categoryBrand(categoryBrandId: string): void {
    this.categoryBrandIdSubject$.next(categoryBrandId);
  }

  cityId(cityId: string | null): void {
    this.cityIdSubject.next(cityId);
  }

  accountId(accountId: string | null): void {
    this.accountIdSubject.next(accountId);
  }

  invoiceId(invoiceId: string | null): void {
    this.invoiceIdSubject.next(invoiceId);
  }

  loadingOff(): void {
    this.loaderSubject.next(false);
  }
}

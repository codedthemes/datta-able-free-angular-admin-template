import {Injectable} from "@angular/core";
import {BehaviorSubject, Observable, of} from "rxjs";
import {Messages, MessageType} from "./shared.interfaces";
import {filter, finalize, switchMap, tap} from "rxjs/operators";
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


  constructor(private sharedService: SharedService) {
  }




  showMessage(type: MessageType, title: string, text: Array<string>): void {
    const message = this.getMessage(text);
    this.messagesSubject.next({type, title, text: message});
    setTimeout(() => {
      this.messagesSubject.next(null);
    }, 5000);
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


  loadingOff(): void {
    this.loaderSubject.next(false);
  }
}

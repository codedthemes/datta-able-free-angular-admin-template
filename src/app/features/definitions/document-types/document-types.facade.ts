import {BehaviorSubject, shareReplay} from "rxjs";
import {SharedFacade} from "../../../shared/shared.facade";
import {tap} from "rxjs/operators";
import {MessageType, ResponseType} from "../../../shared/shared.interfaces";
import {produce} from "immer";
import {GetDocumentTypeCommand} from "./document-types.interface";
import {DocumentTypesServices} from "./document-types.services";
import {Injectable} from "@angular/core";
@Injectable()
export class DocumentTypesFacade {

    private DocumentTypeSubject$ = new BehaviorSubject<GetDocumentTypeCommand[]>([]);
    public DocumentType$ = this.DocumentTypeSubject$.asObservable();

    constructor(
        private sharedFacade: SharedFacade,
        private documentTypesServices: DocumentTypesServices
    ) {
    }
    deleteDocumentType(id: string): void {
        const deleteDocumentTypeProcess$ = this.documentTypesServices.DeleteDocumentTypes(id).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    // this.sharedFacade.showMessage(MessageType.success, 'تم حذف بنجاح', res.messages);
                    this.sharedFacade.showMessage(MessageType.success, ' حذف نوع مستند', ['تم حذف بنجاح']);
                    const prev = this.DocumentTypeSubject$.getValue();
                    const result = prev.filter((x: any) => x.id != id);
                    this.DocumentTypeSubject$.next(result);
                    this.DocumentTypeSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الحذف', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(deleteDocumentTypeProcess$).pipe().subscribe();
    }
    GetDocumentType(): any {
        const getDocumentTypeProcess$ = this.documentTypesServices.GetDocumentTypes(1).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.DocumentTypeSubject$.next(res.content);
                } else {
                    this.DocumentTypeSubject$.next([]);
                    this.sharedFacade.showMessage(MessageType.error, 'خطأ في عملية جلب مستندات', res.messages);
                }
            }),
            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(getDocumentTypeProcess$).pipe().subscribe();
    }
    AddDocumentType(document: any): void {
        const addDocumentTypeProcess$ = this.documentTypesServices.AddDocumentTypes(document).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تمت الإضافة بنجاح',res.messages);
                    const prev = this.DocumentTypeSubject$.getValue();
                    this.DocumentTypeSubject$.next(
                        produce(prev, (draft: GetDocumentTypeCommand[]) => {
                            document.id = res.content;
                            draft.unshift(document);
                        }));
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية الإضافة', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(addDocumentTypeProcess$).pipe().subscribe();
    }
    UpdateDocumentType(document: any): void {

        const updateDocumentTypeProcess$ = this.documentTypesServices.UpdateDocumentTypes(document).pipe(
            tap(res => {
                if (res.type == ResponseType.Success) {
                    this.sharedFacade.showMessage(MessageType.success, 'تم تعديل بنجاح', res.messages);
                    const prev = this.DocumentTypeSubject$.getValue();
                    this.DocumentTypeSubject$.next(
                        produce(prev, (draft: GetDocumentTypeCommand[]) => {
                            const index = draft.findIndex(x => x.id === document.id);
                            draft[index] = document;
                        }));
                    this.DocumentTypeSubject$.subscribe();
                } else {
                    this.sharedFacade.showMessage(MessageType.error, 'لم تتم عملية تعديل', res.messages);
                }
            }),

            shareReplay()
        );
        this.sharedFacade.showLoaderUntilCompleted(updateDocumentTypeProcess$).pipe().subscribe();
    }
}
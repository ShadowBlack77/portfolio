import { Observable, of } from "rxjs";
import { GetAllElementsModel } from "./get-all-elements.interface";
import { Injectable, InjectionToken } from "@angular/core";

export const GET_ALL_ELEMENTS_TOKEN: InjectionToken<string> = new InjectionToken('GET_ALL_ELEMENTS_TOKEN');

@Injectable()
export class GetAllElements implements GetAllElementsModel {

  public getAllElements(elementsSelector: string): any {
    const allElements = document.querySelectorAll(elementsSelector);
  
    return allElements;
  }
}
import { Injectable } from "@angular/core";
import { dialogHelper } from "./dialog/dialog.helper";

@Injectable({
  providedIn: 'root'
})
export class helper{
  public static dialog  = new dialogHelper();

}

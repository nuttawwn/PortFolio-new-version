import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { NgxSpinnerService } from 'ngx-spinner';
import { helper } from 'src/app/Helper/helper';
import { GoogleSheetService } from 'src/app/service/google-sheet.service';
import { contactModel } from '../modole/model/contact.model';
@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {
  public contactFrom: FormGroup;
  public contactModel = new contactModel()
  constructor
    (
      private formBuilder: FormBuilder,
      private sheetService: GoogleSheetService,
      private spinner: NgxSpinnerService
    ) {
    this.contactFrom = this.formBuilder.group({
      Name: [this.contactModel.Name, [Validators.required]],
      Email: [this.contactModel.Email, [Validators.required]],
      Message: [this.contactModel.Message, [Validators.required]],
    });
  }
  // public scriptURL = 'https://script.google.com/macros/s/AKfycby0YyyhAiG3ndiQLbv9AtZWvAUG5WAX9i83RLWvMVpY2eoA8UFYvSswyYpd-fHfpUfU/exec'
  // public form = document.getElementById('submit-to-google-sheet');
  // public msg = document.getElementById("msg")
  // contactFrom : FormGroup
  ngOnInit() {
  }
  public sendMail() {
    console.log("test ");
    console.log("contactmodel", this.contactModel);
    let name = this.contactModel.Name
    let email = this.contactModel.Email
    let message = this.contactModel.Message
    let Checkbox = false
    let dis = this.checkValue(name, email, message)
    if (dis == true) {
      this.spinner.show();
      this.sheetService.updateSheet(name, email, message, Checkbox).subscribe((res) => {
        helper.dialog.successWithButton("Send Data Complete Please wait for call back ", () => {
          setTimeout(() => {
            /** spinner ends after 5 seconds */
            this.spinner.hide();
            location.reload();
          }, 500);
        })
      })
    }
    else {
      helper.dialog.error("The contact's information not complete")
    }
  }
  private checkValue(name: string, email: string, message: string) {
    let check: boolean = true
    console.log("name = ", name);
    console.log("email = ", email);
    console.log("message = ", message);
    message == null || message === "" ? check = false : check = true
    name == null || message === "" ? check = false : check = true
    email == null || message === "" ? check = false : check = true
    return check;
  }
}

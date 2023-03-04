import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { helper } from 'src/app/Helper/helper';
@Component({
  selector: 'app-contact-component',
  templateUrl: './contact-component.component.html',
  styleUrls: ['./contact-component.component.scss']
})
export class ContactComponentComponent implements OnInit {
  // contactFrom : FormGroup;
  constructor
    (
      private formBuilder: FormBuilder,
    ) {
  }
  // public scriptURL = 'https://script.google.com/macros/s/AKfycby0YyyhAiG3ndiQLbv9AtZWvAUG5WAX9i83RLWvMVpY2eoA8UFYvSswyYpd-fHfpUfU/exec'
  // public form = document.getElementById('submit-to-google-sheet');
  // public msg = document.getElementById("msg")
  // contactFrom : FormGroup
  ngOnInit() {
  }
  public sendMail() {
    console.log("test ");
    helper.dialog.successWithButton("Send E-mail Successful");
    //   this.form.addEventListener('submit', e => {
    //     e.preventDefault()
    //     fetch(this.scriptURL, { method: 'POST', body: new FormData(this.form) })
    //         .then(response => {
    //             Swal.fire({
    //                 position: 'center',
    //                 icon: 'success',
    //                 title: 'Send Data Succesfully',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             },
    //                 setTimeout(()=> {
    //                     // this.msg.innerHTML = " ";
    //                 }, 0)
    //             )
    //             form.reset()
    //             // msg.innerHTML = "Message sen successfully"
    //         })
    //         .catch(error => console.error('Error!', error.message))
    // })
  }
}

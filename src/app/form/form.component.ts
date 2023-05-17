import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {
  subjects = [
    "BAS201",
    "BAS202",
    "BAS203",
    "BAS204",
    "BAS205",
    "BCS201",
    "BEC201",
    "BEE201",
    "BME201"
  ]

  selected_subject = 0

  update_subject(e: any) {
    this.selected_subject = e.target.value
  }

  units = [1,2,3,4,5]

  selected_unit = 0

  update_unit(e: any) {
    this.selected_unit = e.target.value
  }

  download_notes() {
    if (this.selected_subject && this.selected_unit) {
      window.open("https://raw.githubusercontent.com/tejus3131/miethub/master/notes/"+this.selected_subject+"/"+this.selected_unit, '_blank')
    }
    else {
      alert("Please select a subject and unit")
    }
  }

}

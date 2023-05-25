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

  urls: {[index: string]:any}  = {
    "BAS201": {1: "https://drive.google.com/file/d/1hnSbOSqnoap0aDg4retabM1vGOvB_mds/view?usp=share_link",
               2: "https://drive.google.com/file/d/1bEDSiE5V7odSf9PWuprwCUo_l7K_XbI9/view?usp=share_link",
               3: "https://drive.google.com/file/d/11IXpd8DIz-XutzikCZpG7eUkTEpmLc-L/view?usp=share_link",
               4: "https://drive.google.com/file/d/1cEDCSr_dmY9DR4R-iAUDBnlzob0bI1H4/view?usp=share_link",
               5: "https://drive.google.com/file/d/1ZMYxUkrgPcdTtgvXMc6GghJQX9AnrCx_/view?usp=share_link"},
    "BAS202": {1: "https://drive.google.com/file/d/1o_oKjH6sY9JHrRDnvUlBaIsM7TVRUazy/view?usp=share_link",
                2: "https://drive.google.com/file/d/1xDngjKGnoffQYnS9ctwiXhL9_DrzWgP-/view?usp=share_link",
                3: "https://drive.google.com/file/d/16BWFtVlOCljvpIoT4WtIz7s5j9ystXMV/view?usp=share_link",
                4: "https://drive.google.com/file/d/1sVHFJHrqleVm_p0yiZJGDsFVQFbLOo8N/view?usp=share_link",
                5: "https://drive.google.com/file/d/1OEuxqboKwc7NjWNaS6ZU3tqiD9mi-GUU/view?usp=share_link"},
    "BAS203": {1: "https://drive.google.com/file/d/1joIIJOqlsnarDiKZxTe7qhfRgnK90yk-/view?usp=share_link",
                2: "https://drive.google.com/file/d/1jbxaRnX4B4srqDRt-wImgtTDlgEZqmBw/view?usp=share_link", 
                3: "https://drive.google.com/file/d/1ny06B75wyBtu9JwWXg1W_e9FMCQjXroP/view?usp=share_link",
                4: "https://drive.google.com/file/d/1Y10kQqCS70ci5O88cilRuwKOzCfhsEcO/view?usp=share_link",
                5: "https://drive.google.com/file/d/105gyBYWYRplikiwr-melyo2Tn-86zLd4/view?usp=share_link"},
    "BAS204": {1: "https://drive.google.com/file/d/169D24O4dJNC3SHwcqUkblsPAFHrOmRlo/view?usp=share_link",
                2: "https://drive.google.com/file/d/1PTr5uiQbJRBmmbSNUeeR4cUJkyGmHy0e/view?usp=share_link",
                3: "https://drive.google.com/file/d/1MP6NPyAPtWSf16D2S9Vx3hszfy4IEXNn/view?usp=share_link",
                4: "https://drive.google.com/file/d/1z7MOYqf_vc22_qaUnTZepFG0MRhMfOVJ/view?usp=share_link",
                5: "https://drive.google.com/file/d/1iFqIL4gc5COs5qnmu7m2PTZD1dw-6N7S/view?usp=share_link"},
    "BAS205": {1: "https://drive.google.com/file/d/1eNk5AZa3TTtbpPzLuAc8fHLEOySrPWyo/view?usp=share_link",
                2: "https://drive.google.com/file/d/1uUmk_0Fg8glMHmcpj0UmHZWf75r8mcQb/view?usp=share_link",
                3: "https://drive.google.com/file/d/1amlM3CIi2IsfnD6H6snxPoKcHuaId7NH/view?usp=share_link",
                4: "https://drive.google.com/file/d/1bNF8PIxefoLz7eQIF1sGz7F1Jx0r95aG/view?usp=share_link",
                5: "https://drive.google.com/file/d/1Ye0g8-ylocfowXcXoSGfVvt0UeT5aEgK/view?usp=share_link"},
    "BCS201": {1: "https://drive.google.com/file/d/1VxvRXz1F_fYCWDVqBxHALeBlOYBZyriG/view?usp=share_link",
                2: "https://drive.google.com/file/d/1l0SNGHeNeMHi6uWADgXaBz9gA9fPHG1I/view?usp=share_link",
                3: "https://drive.google.com/file/d/1_gmyYImZJpTKnjdYnTwPn9UDF7l_EQKN/view?usp=share_link",
                4: "https://drive.google.com/file/d/1E-uNaFyHA1LZSlmwRk_n73D9j-XEZL3Z/view?usp=share_link",
                5: "https://drive.google.com/file/d/1CFPf3BDc0couxfSCP72jAbfSFozoy9kT/view?usp=share_link"},
    "BEC201": {1: "https://drive.google.com/file/d/1vpALUeyVBhVobwb2EG4BuoQWs9GV8R3a/view?usp=share_link",
                2: "https://drive.google.com/file/d/1bF9NyQcz4wyEEwR3BpaWzo51msBHcqEp/view?usp=share_link",
                3: "https://drive.google.com/file/d/1Xl-YVSn7AH7InQPo_vpaxv0uoMn47ceC/view?usp=share_link",
                4: "https://drive.google.com/file/d/1Hlo1Nb7HdqhcpevFMOuscLoK8t8_Yh42/view?usp=share_link",
                5: "https://drive.google.com/file/d/1YdkZ9AyC4NICJlqf35ZPIDyxP1irqtDi/view?usp=share_link"},
    "BEE201": {1: "https://drive.google.com/file/d/1Ejo96GDNPCO3I9KTTgwOsfGIOEo9qWAn/view?usp=share_link",
                2: "https://drive.google.com/file/d/1K_f4ENRY4qvGSRsuMxSnKppVnrc9WtAs/view?usp=share_link",
                3: "https://drive.google.com/file/d/1RRz51Kn9_IOI3VPYyWmVOIV2U5quLzf5/view?usp=share_link",
                4: "https://drive.google.com/file/d/1-WdnUmPxgvNUdRiRzUl0n6gcmLcT-8eO/view?usp=share_link",
                5: "https://drive.google.com/file/d/1ZGGdIzi8v33XHmdKCBb0Hw0WLfE1_r63/view?usp=share_link"},
    "BME201": {1: "https://drive.google.com/file/d/1_E9ci4hYuV0fVPUnUYgHD6SUfD1_dm24/view?usp=share_link",
                2: "https://drive.google.com/file/d/10qF8bR0LdlFSTlhSP85QvVq8io4pycFf/view?usp=share_link",
                3: "https://drive.google.com/file/d/1tkonfac3wS_Po62GD9bUP2uVUZ9Lfrnw/view?usp=share_link",
                4: "https://drive.google.com/file/d/1TbcKfRZ-Jf3lm1181djUzeQ8sN7cx2PE/view?usp=share_link",
                5: "https://drive.google.com/file/d/1sLgurbi04tTzemAJqL5j5bNppSZwhxx4/view?usp=share_link"}
  }

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
      window.open(this.urls[this.selected_subject][this.selected_unit], '_blank')
      console.log(this.urls[this.selected_subject][this.selected_unit])
    }
    else {
      alert("Please select a subject and unit")
    }
  }

}

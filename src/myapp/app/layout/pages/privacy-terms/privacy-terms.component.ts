import { UtilityService } from './../../../services/utility/utility.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { lang } from 'moment';

@Component({
  selector: 'app-privacy-terms',
  templateUrl: './privacy-terms.component.html',
  styleUrls: ['./privacy-terms.component.scss']
})
export class PrivacyTermsComponent implements OnInit {

  heading: string = '';
  terms: string;

  constructor(
    private route: ActivatedRoute,
    private util: UtilityService
  ) { }

  ngOnInit() {

    let langData = this.util.getLocalData('langData', true) || { id: this.util.handler.languageId };
    let data = this.route.snapshot.data.termsAndPolicy;
    let termsAndPolicy = data.find(item => item.language_id == langData.id);
    let type = this.route.snapshot.data.type;

    switch (type) {
      case 1:
        this.terms = termsAndPolicy['terms_and_conditions'];
        this.heading = 'Terms And Conditions'
        break;
      case 2:
        this.terms = termsAndPolicy['faq'];
        this.heading = 'Privacy Policy'
        break;
      case 3:
        this.terms = termsAndPolicy['about_us'];
        this.heading = 'About Us'
        break;
      case 4:
        this.terms = termsAndPolicy['faqs'];
        this.heading = "FAQ's"
        break;
    }


    if (langData.language_code != 'en') {
      setTimeout(() => {
        let x = document.getElementsByTagName("pre");
        for (let i = 0; i < x.length; i++) {
          x[i].style.textIndent = '0px';
        }
      }, 2000);
    }


  }


}
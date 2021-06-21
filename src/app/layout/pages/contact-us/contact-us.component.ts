import { Component, OnInit, Input } from '@angular/core';
import { GlobalVariable } from '../../../core/global';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  
  site_name: string = GlobalVariable.SITE_NAME;

  constructor() { }

  ngOnInit() {
  }

}

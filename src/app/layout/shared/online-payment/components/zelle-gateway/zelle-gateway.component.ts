import { Component, OnInit, OnDestroy } from '@angular/core';
import { StyleVariables } from '../../../../../core/theme/styleVariables.model';
import { Subscription } from 'rxjs';
import { UtilityService } from '../../../../../services/utility/utility.service';
import { GlobalVariable } from '../../../../../core/global';
import { MessagingService } from '../../../../../services/messaging/messaging.service';
import { HttpService } from '../../../../../services/http/http.service';
import { ApiUrl } from '../../../../../core/apiUrl';
import { PaymentBaseComponent } from '../payment-base.component';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-zelle-gateway',
  templateUrl: './zelle-gateway.component.html',
  styleUrls: ['./zelle-gateway.component.scss']
})
export class ZelleGatewayComponent extends PaymentBaseComponent implements OnInit, OnDestroy {

  style: StyleVariables;
  styleSubscription: Subscription;
  client_data: any = { email: '', phone: '' };
  image: any = '';
  image_url: string = '';
  imageToUpload: any = '';
  imageType: Array<string> = [];
  loading: boolean = false;

  constructor(
    private http: HttpService,
    private util: UtilityService,
    private message: MessagingService,
    private translate: TranslateService) {
    super();
    this.imageType = GlobalVariable.imageType;

    this.styleSubscription = this.util.getStyles
      .subscribe((style: StyleVariables) => {
        this.style = style;
      });
  }

  ngOnInit(): void {
    let email = this.gateway.key_value_front.find((item) => item.key == 'email');
    let phone = this.gateway.key_value_front.find((item) => item.key == 'phone_number');
    this.client_data = {
      email: email ? email.value : '',
      phone: phone ? phone.value : ''
    }
  }

  onImageSelect(event: any): void {
    if (event.target.files && event.target.files[0]) {
      let file = event.target.files[0];
      if (this.imageType.includes(file.type)) {
        if ((file.size / Math.pow(1024, 2)) <= 1) {
          this.imageToUpload = event.target.files[0];
          let reader: FileReader = new FileReader();
          reader.readAsDataURL(event.target.files[0]);
          reader.onload = (e: any) => {
            this.image = e.target.result;
          }
        } else this.message.toast('warning', this.translate.instant('Image Size Must Be Less Than 1mb'));
      } else this.message.toast('warning', this.translate.instant('Invalid File Type'));
    }
  }

  uploadReceipt(): void {
    this.image_url = '';
    this.loading = true;
    let formData = this.http.appendFormData({ file: this.imageToUpload });
    this.http.postData(ApiUrl.uploadPaymentReceipt, formData)
      .subscribe(response => {
        if (!!response && response.data) {
          this.image_url = response.data;
        }
        this.loading = false;
      }, err => { this.loading = false; });
  }

  placeOrder(): void {
    this.onSuccess.emit({
      'paymentGatewayId': 'zelle',
      'token': this.image_url
    });
  }

  ngOnDestroy(): void {
    this.styleSubscription.unsubscribe();
  }
}









import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bb-booking',
  styleUrl: 'bb-booking.scss',
  shadow: false
})
export class BbBooking {

  @Prop() name: string;
  @Prop() paymentType: 'voucher'|'cb'|'card'|'18h';
  @Prop() basketDescription: string;
  private i18n: any = (window as any).configuration.i18n;

  render() {
    return (
        <div class="booking-data">
            <div class="booking-data__hotel">
              <span>{ this.name }</span>
              {
                (this.paymentType === 'voucher' || this.paymentType === 'card') 
                ? <span><i class="material-icons">monetization_on</i> { this.i18n.bookingPaymentPaid }</span>
                : (this.paymentType === 'cb')
                ? <span><i class="material-icons">flip</i> { this.i18n.bookingPaymentGuarantee }</span>
                : (this.paymentType === '18h')
                ? <span><i class="material-icons">money_off</i> { this.i18n.bookingPaymentNoGuarantee }</span>
                : null
              }
            </div>
            <span class="booking-data__basket">
              { this.basketDescription }
            </span>
        </div>
    );
  }
}

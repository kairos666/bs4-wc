import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bb-customer',
  styleUrl: 'bb-customer.scss',
  shadow: false
})
export class BbCustomer {

  @Prop() paymentType: 'voucher'|'cb'|'card'|'18h';

  render() {
    return (
      <div class={ `customer-item ${this.paymenttypeToStyleClass(this.paymentType)}` }>
        <slot></slot>
      </div>
    );
  }

  private paymenttypeToStyleClass(payment:string):string {
    return (payment === 'voucher' || payment === 'card') 
    ? 'customer-item--payment-paid'
    : (payment === 'cb')
    ? 'customer-item--payment-guarantee'
    : (payment === '18h')
    ? 'customer-item--payment-no-guarantee'
    : '';
  }
}

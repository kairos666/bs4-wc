import { Component, Prop, State, Watch } from '@stencil/core';
import { arrayPropConverter } from '../../global/scripts/utils';

@Component({
  tag: 'bb-customer-list',
  styleUrl: 'bb-customer-list.scss',
  shadow: false
})
export class BbCustomerList {

  @Prop() customers: any[]|string;
  @State() _customers: any[];

  @Watch('customers')
  customersHandler(newValue:any[]|string):void {
    this._customers = arrayPropConverter(newValue, 'bb-customer-list | customers attribute is not valid JSON array');
  }

  componentWillLoad() {
    // process initial object prop inputs
    this.customersHandler(this.customers);
  }

  render() {
    return (
        <ul class="customer-list">
            { this._customers.map(item => 
                <li>
                    <bb-customer payment-type={item.booking.paymentType}>
                        <bb-contact first-name={item.customer.firstName} last-name={item.customer.lastName} phone={item.customer.phone} email={item.customer.email}></bb-contact>
                        <bb-booking name={item.booking.hotel} basket-description={item.booking.basketDescription}></bb-booking>
                    </bb-customer>
                </li>
            )}
        </ul>
    );
  }
}

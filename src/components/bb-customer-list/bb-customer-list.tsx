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
  private i18n: any = (window as any).configuration.i18n;

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
                    <bb-customer>
                        <bb-contact first-name={item.customer.firstName} last-name={item.customer.lastName} phone={item.customer.phone} email={item.customer.email}></bb-contact>
                        { this.renderBooking(item.booking) }
                        { this.renderActions(item.actions) }
                    </bb-customer>
                </li>
            )}
        </ul>
    );
  }

  private renderBooking(booking:any) {
    // wrong data format or no actions
    if (!booking || !booking.hotel || !booking.basketDescription|| !booking.paymentType) return null;

    return (<bb-booking name={booking.hotel} basket-description={booking.basketDescription} payment-type={booking.paymentType}></bb-booking>)
  }

  private renderActions(actions:any) {
    // wrong data format or no actions
    if (!actions || actions instanceof Array === false || actions.length === 0) return null;

    // one or many actions
    if (actions.length === 1) {
      return (<button type="button" class="btn">{ this.i18n[actions[0].labelKey] }</button>)
    } else {
      return (
        <bs-split-button>
          {actions.map((action, index) => 
            {(index === 0)
              ? <button type="button" slot="primary-action" class="btn">{ this.i18n[action.labelKey] }</button>
              : <button type="button" class="dropdown-item">{ this.i18n[action.labelKey] }</button>
            }
          )}
          <button type="button" slot="primary-action" class="btn">check in</button>
          <a class="dropdown-item" href="#">Remboursement</a>
          <a class="dropdown-item" href="#">Annulation</a>
        </bs-split-button>
      )
    }
  }
}

import { Component } from '@stencil/core';

@Component({
  tag: 'bb-customer',
  styleUrl: 'bb-customer.scss',
  shadow: false
})
export class BbCustomer {

  render() {
    return (
      <div class="customer-item">
        <slot></slot>
      </div>
    );
  }
}

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bb-booking',
  styleUrl: 'bb-booking.scss',
  shadow: false
})
export class BbBooking {

  @Prop() name: string;
  @Prop() basketDescription: string;

  render() {
    return (
        <div class="booking-data">
            <span class="booking-data__hotel">{ this.name }</span>
            <span class="booking-data__basket">{ this.basketDescription }</span>
        </div>
    );
  }
}

import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bb-contact',
  styleUrl: 'bb-contact.scss',
  shadow: false
})
export class BbContact {

  @Prop() firstName: string;
  @Prop() lastName: string;
  @Prop() phone: string;
  @Prop() email: string;
  private i18n: any = (window as any).configuration.i18n;

  render() {
    return (
        <div class="customer-data">
            <div class="customer-data__name">
                <span>{ this.firstName }</span>
                <span>{ this.lastName }</span>
            </div>
            <div class="customer-data__contact">
                <a title={ `${this.i18n.contactVerb} ${this.firstName} ${this.lastName}  ${this.i18n.contactMeanPhone}` } href={ `tel:${this.phone}` }>{ this.phone }</a>
                <a title={ `${this.i18n.contactVerb} ${this.firstName} ${this.lastName}  ${this.i18n.contactMeanEmail}` } href={ `mailto:${this.email}` }>{ this.email }</a>
            </div>
        </div>
    );
  }
}

import { Component, Prop, State, Watch } from '@stencil/core';
import { objectPropConverter } from '../../global/scripts/utils';

@Component({
  tag: 'bb-input',
  styleUrl: 'bb-input.scss',
  shadow: false
})
export class BbInput {

  @Prop() lng: Object|string;
  @Prop() endpoint: string;
  @State() i18n: any;

  @Watch('lng')
  lngHandler(newValue:Object|string):void {
    this.i18n = objectPropConverter(newValue, 'bb-input | lng attribute is not valid JSON object');
  }

  render() {
    return (
      <div>
        Hello, World! I'm {this.i18n.labelA} {this.i18n.labelB} {this.endpoint}
      </div>
    );
  }

  componentWillLoad() {
    // process initial object prop inputs
    this.lngHandler(this.lng);
    console.log('Component is about to be rendered');
    console.log(this.i18n);
  }
}

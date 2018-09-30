import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'bs-split-button',
  styleUrl: 'bs-split-button.scss',
  shadow: false
})
export class BsSplitButton {
  @Prop() btnType: 'secondary'|'primary'|'success'|'info'|'warning'|'danger'

  render() {
    return (
      <div class="btn-group">
        <slot name="primary-action" />
        <bs-dropdown split btnType={ this.btnType }>
          <span slot="drop-content">
            <slot></slot>
          </span>
        </bs-dropdown>
      </div>
    );
  }
}

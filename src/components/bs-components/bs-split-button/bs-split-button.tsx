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
        <a class={ `btn ${(this.btnType) ? 'btn-' + this.btnType : 'btn-secondary'}` } href="#primary-action">
          <slot name="primary-action" />
        </a>
        <bs-dropdown split btnType={ this.btnType }>
          <span slot="drop-content">
            <slot></slot>
          </span>
        </bs-dropdown>
      </div>
    );
  }
}

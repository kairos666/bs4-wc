import { Component, State, Prop } from '@stencil/core';

@Component({
  tag: 'bb-block-wrapper',
  styleUrl: 'bb-block-wrapper.scss',
  shadow: false
})
export class BbBlockWrapper {

  @Prop() blockTitle: string;
  @Prop() blockState: 'loading'|'default'|'error' = 'default';
  @State() asyncState: 'idle'|'pending'|'obsolete' = 'idle';

  render() {
    return (
        <section class="bb-block-wrapper">
            <header class="navbar navbar-light bg-light">
                <span  class="navbar-text">{ this.blockTitle }</span>
                <span>{ this.asyncState } { this.blockState }</span>
            </header>
            <div class="bb-block-wrapper__body">
                <div class={ `bb-block-wrapper__inner-body ${ (this.blockState !== 'default') ? 'disabled' : '' }` }>
                    <slot></slot>
                </div>
                <aside class={ `bb-block-wrapper__utils ${ (this.blockState === 'default') ? 'disabled' : this.blockState + '-screen' }` }>
                    <div class="bb-block-wrapper__loading-screen"></div>
                    <div class="bb-block-wrapper__error-screen"></div>
                </aside>
            </div>
        </section>
    );
  }
}

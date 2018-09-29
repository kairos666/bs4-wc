import { Component, Prop, State } from '@stencil/core';

@Component({
  tag: 'bs-dropdown',
  shadow: false
})
export class BsDropdown {
  @Prop() btnType: 'secondary'|'primary'|'success'|'info'|'warning'|'danger'
  @Prop() split: boolean;
  @State() isOpen: boolean = false;

  render() {
    return (
        <div class={ `dropdown ${(this.isOpen) ? 'show' : ''}` }>
            <button class={ `btn ${(this.btnType) ? 'btn-' + this.btnType : 'btn-secondary'} dropdown-toggle ${(this.split) ? 'dropdown-toggle-split' : ''}` } onClick={ () => this.dropBtnClicked() } type="button" aria-haspopup="true" aria-expanded={ this.isOpen }>
                {(!this.split) 
                    ? <slot name="drop-trigger" />
                    : <span class="sr-only">Toggle Dropdown</span>
                }
            </button>
            <div class={ `dropdown-menu ${(this.isOpen) ? 'show' : ''}` }>
                <slot name="drop-content" />
            </div>
        </div>
    );
  }


  private dropBtnClicked():void {
    this.isOpen = !this.isOpen;
  }
}

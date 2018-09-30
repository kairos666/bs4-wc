import { Component, Prop, State, Element } from '@stencil/core';

@Component({
  tag: 'bs-dropdown',
  styleUrl: 'bs-dropdown.scss',
  shadow: false
})
export class BsDropdown {
  @Element() elt: HTMLElement;
  @Prop() btnType: 'secondary'|'primary'|'success'|'info'|'warning'|'danger'
  @Prop() split: boolean;
  @State() isOpen: boolean = false;

  render() {
    return (
        <div class={ `dropdown ${(this.isOpen) ? 'show' : ''}` }>
            <button class={ `btn ${(this.btnType) ? 'btn-' + this.btnType : ''} dropdown-toggle ${(this.split) ? 'dropdown-toggle-split' : ''}` } onClick={ () => this.dropBtnClicked() } type="button" aria-haspopup="true" aria-expanded={ this.isOpen }>
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

  componentDidLoad() {
    document.addEventListener('click', this.handleOutsideClick.bind(this));
  }

  componentDidUnload() {
    document.removeEventListener('click', this.handleOutsideClick.bind(this));
  }

  private dropBtnClicked():void {
    this.isOpen = !this.isOpen;
  }

  private handleOutsideClick(evt:UIEvent):void {
    if (evt.target !== this.elt.querySelector('.dropdown-toggle')) this.isOpen = false;
  }
}

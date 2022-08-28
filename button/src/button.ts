import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import ButtonBase from '../../shared/button-base';
import buttonStyles from './button.styles';

@customElement('ss-ui-button')
export default class SimployerSuiteUIButton extends ButtonBase {
  static styles = buttonStyles;

  @property({ type: String })
  color:
    | 'primary'
    | 'secondary'
    | 'accent'
    | 'accent2'
    | 'white'
    | 'invisible' = 'primary';

  constructor() {
    super();
  }

  render() {
    return html`
      <button
        id=${this.buttonId}
        data-testid=${ifDefined(this.testId)}
        part="button"
        class=${classMap({
          button: true,
          'button--primary': this.color === 'primary',
          'button--secondary': this.color === 'secondary',
          'button--accent': this.color === 'accent',
          'button--accent2': this.color === 'accent2',
          'button--white': this.color === 'white',
          'button--invisible': this.color === 'invisible',
          'button--disabled': this.disabled || this.loading,
          'button--loading': this.loading,
          'button--focus': this.hasFocus,
        })}
        ?disabled=${this.disabled || this.loading}
        type=${ifDefined(this.type)}
        name=${ifDefined(this.name)}
        value=${ifDefined(this.value)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label=${ifDefined(this.ariaLabel)}
        aria-pressed=${ifDefined(this.ariaPressed)}
        aria-expanded=${ifDefined(this.ariaExpanded)}
        @blur=${this._handleBlur}
        @click=${this._handleClick}
      >
        <span part="prefix" class="button__prefix">
          ${this.loading
            ? html`<ss-ui-spinner inline class="loader"></ss-ui-spinner>`
            : html`<slot name="prefix"></slot>`}
        </span>
        <span part="label" class="button__label">
          <slot></slot>
        </span>
        <span part="suffix" class="button__suffix">
          <slot name="suffix"></slot>
        </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ss-ui-button': SimployerSuiteUIButton;
  }
}

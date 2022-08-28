import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import ButtonBase from '../../shared/button-base';
import buttonRoundStyles from './button-round.styles';

@customElement('ss-ui-button-round')
export default class SimployerSuiteUIButtonRound extends ButtonBase {
  static styles = buttonRoundStyles;
  @property({ type: String })
  color: 'primary' | 'accent' | 'grey' = 'primary';

  @property({ type: Boolean })
  outlined = false;

  @property({ type: String })
  size: 'small' | 'medium' | 'large' = 'medium';

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
          'button--grey': this.color === 'grey',
          'button--accent': this.color === 'accent',
          'button--disabled': this.disabled,
          'button--focus': this.hasFocus,
          'button--outlined': this.outlined,
          'button--small': this.size === 'small',
        })}
        ?disabled=${this.disabled}
        type=${ifDefined(this.type)}
        name=${ifDefined(this.name)}
        value=${ifDefined(this.value)}
        aria-disabled=${this.disabled ? 'true' : 'false'}
        aria-label=${ifDefined(this.ariaLabel)}
        aria-pressed=${ifDefined(this.ariaPressed)}
        aria-expanded=${ifDefined(this.ariaExpanded)}
        @blur=${this._handleBlur}
      >
        <span part="icon" class="button-icon">
          <slot name="icon">X</slot>
        </span>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ss-ui-button-round': SimployerSuiteUIButtonRound;
  }
}

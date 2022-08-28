import { LitElement, html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { live } from 'lit/directives/live.js';
import checkboxStyles from './checkbox.styles';
import { redispatchEvent } from '../../utils/event';
import { classMap } from 'lit/directives/class-map.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import baseStyles from '../../styles/base.styles';

@customElement('ss-ui-checkbox')
export default class SimployerSuiteUICheckbox extends LitElement {
  static styles = [baseStyles, checkboxStyles];

  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private _hasFocus = false;

  @property() name: string;
  @property() value: string;
  @property({ reflect: true }) error: string;
  @property({ type: Boolean, reflect: true }) disabled = false;
  @property({ type: Boolean, reflect: true }) required = false;
  @property({ type: Boolean, reflect: true }) checked = false;
  @property({ type: Boolean, reflect: true }) indeterminate = false;
  @property({ type: Boolean, reflect: true }) invalid = false;

  /** Simulates a click on the checkbox. */
  public click() {
    this.input.click();
  }

  /** Sets focus on the checkbox. */
  public focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
  public blur() {
    this.input.blur();
  }

  private _handleClick(event: PointerEvent) {
    this.checked = !this.checked;
    this.indeterminate = false;
    this._redispatchEvent(event);
  }

  private _handleBlur(event: FocusEvent) {
    this._hasFocus = false;
    this._redispatchEvent(event);
  }

  private _handleFocus(event: FocusEvent) {
    this._hasFocus = true;
    this._redispatchEvent(event);
  }

  private _handleInvalid() {
    this.invalid = true;
  }

  private _redispatchEvent(event: Event) {
    redispatchEvent(this, event);
  }

  private _renderCheckedCheckbox() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="14" height="14" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19ZM16.58 7.58L17.99 9L9.99 17L5.99 13.01L7.41 11.6L9.99 14.17L16.58 7.58Z"
          fill="#EC5B55"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z"
          fill="#074975"
        />
      </svg>
    `;
  }

  private _renderIndeterminateCheckbox() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="14" height="14" fill="white" />
        <path
          d="M16.0833 13.5833H7.91666V12.4167H16.0833V13.5833Z"
          fill="#EC5B55"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z"
          fill="#074975"
        />
      </svg>
    `;
  }
  private _renderUncheckedCheckbox() {
    return html`
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect x="5" y="5" width="14" height="14" fill="white" />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M5 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H5C3.9 21 3 20.1 3 19V5C3 3.9 3.9 3 5 3ZM19 19V5H5V19H19Z"
          fill="#074975"
        />
      </svg>
    `;
  }

  render() {
    return html`
      <label
        part="base"
        class=${classMap({
          'checkbox--disabled': this.disabled,
        })}
      >
        <input
          class="checkbox__input"
          type="checkbox"
          name=${ifDefined(this.name)}
          value=${ifDefined(this.value)}
          ?indeterminate=${live(this.indeterminate)}
          ?checked=${live(this.checked)}
          ?disabled=${this.disabled}
          ?required=${this.required}
          aria-checked=${this.checked ? 'true' : 'false'}
          aria-invalid=${this.invalid ? 'true' : 'false'}
          aria-describedby=${this.invalid ? 'error-text' : 'label'}
          aria-label="label"
          @invalid=${this._handleInvalid}
          @click=${this._handleClick}
          @blur=${this._handleBlur}
          @focus=${this._handleFocus}
        />
        <span
          part="control"
          class=${classMap({
            checkbox__control: true,
            'checkbox__control--focused': this._hasFocus,
            'checkbox__control--invalid': this.invalid,
          })}
        >
          ${this.checked ? this._renderCheckedCheckbox() : null}
          ${!this.checked && this.indeterminate
            ? this._renderIndeterminateCheckbox()
            : null}
          ${!this.checked && !this.indeterminate
            ? this._renderUncheckedCheckbox()
            : null}
        </span>
        <span part="label" class="checkbox__label" id="label">
          <slot></slot>
        </span>
        ${this.required ? html`<span class="asterisk">*</span>` : null}
        ${this.invalid && this.error
          ? html`<div id="error-text"><p>${this.error}</p></div>`
          : null}
      </label>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'ss-ui-checkbox': SimployerSuiteUICheckbox;
  }
}

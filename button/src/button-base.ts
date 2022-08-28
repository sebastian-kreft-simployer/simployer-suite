import { LitElement } from 'lit';
import { property, query } from 'lit/decorators.js';
import { redispatchEvent } from '../../utils/event';

export default class ButtonBase extends LitElement {
  @query('.button') button: HTMLButtonElement;
  hasFocus = false;

  @property()
  buttonId = 'button';

  @property()
  testId: string;

  @property({ type: Boolean })
  loading = false;

  /* Optional aria-label in cases where the button text itself is not sufficient to describe the purpose.
   * Make sure the label is sufficient to describe the purpose of the button on its own.
   */
  @property()
  ariaLabel: string;

  /* Optional aria-pressed attribute for toggle buttons */
  @property({ type: String })
  ariaPressed: 'true' | 'false' | 'mixed';

  /* Optional aria-expanded attribute for expandable controls/widgets
   * Examples: Menus, dialogs and accordions.
   */
  @property({ type: String })
  ariaExpanded: 'true' | 'false';

  @property({ reflect: true })
  type: 'button' | 'submit' = 'button';

  /** An optional name for the button. */
  @property() name?: string;

  /** An optional value for the button. */
  @property() value?: string;

  @property({ type: Boolean })
  disabled = false;

  constructor() {
    super();
    this.addEventListener('click', this._handleClick);
  }

  public click() {
    this.button?.click();
  }
  public focus() {
    this.hasFocus = true;
    this.button?.focus();
  }

  protected _handleClick(event: MouseEvent) {
    if (this.disabled || this.loading) {
      event.preventDefault();
      event.stopImmediatePropagation();
      return;
    }
  }

  protected _handleBlur(event: FocusEvent) {
    this.hasFocus = false;
    this._redispatchEvent(event);
  }

  protected _redispatchEvent(event: Event) {
    redispatchEvent(this, event);
  }
}

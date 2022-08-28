import { css } from 'lit';
import baseStyles from '../../styles/base.styles';

export default css`
  ${baseStyles}
  :host {
    --line-height-base: 1.5;
    display: inline-block;
    font-family: var(--font-family);
    --button-color-bg: var(--color-primary);
    --button-color-bg-active: var(--color-primary-darken);
  }
  .loader {
    --loader-size: 1.25rem;
    --loader-color-bg: #b2b2b2;
    --loader-color-fg: #686868;
    height: 1.25rem;
  }
  .button {
    font-size: 1rem;
    font-weight: 400;
    background-color: var(--button-color-bg);
    color: var(--button-color-font);
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    line-height: var(--line-height-base);
    margin: -0.25rem 0 0 0;
    border: none;
    padding: var(--button-padding);
    min-height: 2rem;
    text-decoration: none;
    text-align: left;
    border-radius: var(--button-border-radius);
    appearance: none;
  }
  .button:active {
    background-color: var(--button-color-bg-active);
  }
  .button--disabled {
    background-color: var(--button-color-bg-disabled);
    color: var(--button-color-font-disabled);
    font-weight: 400;
    cursor: not-allowed;
  }
  .button--disabled:active {
    background-color: var(--button-color-bg-disabled);
  }

  .button:focus {
    outline: none;
  }
  .button:focus-visible,
  .button--focus {
    box-shadow: inset 0 0 1px 2px var(--color-focus-primary);
  }

  .button--loading {
    cursor: wait;
  }
  .button--secondary {
    --button-color-bg: var(--color-secondary);
    --button-color-bg-active: var(--color-secondary-darken);
    --button-color-font: var(--button-color-font-inverted);
  }
  .button--accent {
    --button-color-bg: var(--color-accent1);
    --button-color-bg-active: #e72f27;
  }
  .button--accent:focus-visible {
    box-shadow: inset 0 0 1px 2px var(--color-focus-secondary);
  }
  .button--accent2 {
    --button-color-bg: var(--color-accent2);
    --button-color-bg-active: #0d8c8c;
    --button-color-font: var(--button-color-font-inverted);
  }
  .button--white {
    --button-color-bg: white;
    --button-color-bg-active: #d9d9d9;
    --button-color-font: var(--button-color-font-inverted);
    border: 1px solid #d9d9d9;
  }
  .button--invisible {
    --button-color-bg: transparent;
    --button-color-bg-active: #d9d9d9;
    --button-color-font: var(--button-color-font-inverted);
  }

  .button__prefix {
    margin-right: 0.375rem;
    display: inline-flex;
    align-items: center;
  }
  .button__suffix {
    margin-left: 0.375rem;
    display: inline-flex;
    align-items: center;
  }
`;

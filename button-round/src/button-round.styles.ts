import { css } from 'lit';
import baseStyles from '../../styles/base.styles';

export default css`
  ${baseStyles}
  :host {
    --button-size: 3rem;
    --button-color: white;
    --button-color-bg: var(--color-primary);
    --button-border-width: 0.125rem;
    --button-border-color: transparent;
    --button-color-grey: #d9d9d9;
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--button-size);
    height: var(--button-size);
    border-radius: 1.5rem;
    border: var(--button-border-width) solid var(--button-border-color);
    background-color: var(--button-color-bg);
    position: relative;
    color: var(--button-color);
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.1s ease-in-out;
  }
  .button:focus-visible {
    outline: none;
    --button-border-color: var(--color-accent1);
    --button-color-bg: var(--button-color-grey);
    --button-color: var(--color-primary);
  }
  .button--accent {
    --button-color-bg: var(--color-accent1);
  }
  .button--grey {
    --button-color-bg: var(--button-color-grey);
    --button-color: var(--color-grey-dark);
  }
  .button--outlined {
    --button-color-bg: transparent;
    --button-border-color: var(--color-primary);
    --button-color: var(--color-primary);
  }
  .button--accent:focus-visible,
  .button--accent.button--outlined:focus-visible {
    --button-color-bg: var(--button-color-grey);
  }
  .button--accent.button--outlined {
    --button-color: var(--color-accent1);
    --button-border-color: var(--color-accent1);
  }

  .button:hover {
    transform: scale(1.2);
    transition: transform 0.1s ease-in-out;
  }

  .button--disabled {
    --button-color-bg: var(--button-color-grey);
    --button-color: var(--color-grey-dark);
    cursor: not-allowed;
  }
  .button--disabled:hover {
    transform: scale(1);
  }

  .button-icon {
    display: flex;
  }

  .button--small {
    --button-size: 2rem;
  }
  .button--small slot {
    font-size: 16px !important;
  }
`;

import { css } from 'lit';

export default css`
  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__control {
    display: inline-block;
  }

  .checkbox__label {
    vertical-align: middle;
  }

  .checkbox--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .checkbox__control--focused {
    outline: none;
    box-shadow: inset 0 0 1px 2px var(--color-secondary-darken);
  }

  .checkbox__control--invalid {
    outline: none;
    box-shadow: inset 0 0 1px 2px var(--color-accent1);
  }

  .asterisk {
    color: var(--color-status-error);
    font-weight: 900;
    margin-left: -2px;
  }

  #error-text p {
    color: var(--color-status-error);
    margin: 0 0 1rem;
  }
`;

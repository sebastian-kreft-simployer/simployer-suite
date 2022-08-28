import { css } from 'lit';

export default css`
  :host {
    box-sizing: border-box;
    font-family: var(--font-family);
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
    font-family: var(--font-family);
  }

  svg {
    vertical-align: middle;
  }
`;

import '@divriots/dockit-core/layout/dockit-layout.define.js';
import { styles } from '@divriots/dockit-core/layout';
import 'https://suitestaticfilesdev.z6.web.core.windows.net/styleguide/css/styleguide.css';
import { html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import logoSvg from './logo.svg?raw';

export const docLayoutTemplate = (content, context) => html`
  <style>
    ${unsafeHTML(styles)} [slot='logo'] span {
      color: var(--figma-core-colors-primary-500);
    }

    [slot='logo'] {
      display: flex;
      align-items: center;
      gap: 1em;
      font-size: 24px;
      width: max-content;
    }

    /** 
     * Double attr selector to beat dockit-layout's selector specificity
     * We want height of auto here. TODO: Fix in dockit-layout?
     */
    [slot='logo'][slot='logo'] > svg {
      height: auto;
    }
  </style>
  <dockit-layout disable-color-scheme-change .context="${context}">
    <div slot="logo">
      ${unsafeHTML(logoSvg)}<span>Figma Tokens Starter</span>
    </div>
    <div class="dark:prose-invert">${unsafeHTML(content)}</div>
  </dockit-layout>
`;

# Checkbox

This is a Checkbox component.

```js script
import { html } from 'lit';
import '../src/checkbox.ts';
```

```js preview-story
export const unchecked = () =>
  html` <ss-ui-checkbox>Check me!</ss-ui-checkbox> `;
```

```js preview-story
export const checked = () =>
  html` <ss-ui-checkbox checked>Check me!</ss-ui-checkbox> `;
```

```js preview-story
export const indeterminate = () =>
  html` <ss-ui-checkbox indeterminate>Check me!</ss-ui-checkbox> `;
```

```js preview-story
export const disabled = () =>
  html` <ss-ui-checkbox disabled>Check me!</ss-ui-checkbox> `;
```

```js preview-story
export const required = () =>
  html` <ss-ui-checkbox required>Check me!</ss-ui-checkbox> `;
```

```js preview-story
export const invalid = () =>
  html` <ss-ui-checkbox invalid>Check me!</ss-ui-checkbox> `;
```

```js preview-story
export const noLabel = () => html` <ss-ui-checkbox></ss-ui-checkbox> `;
```

```js preview-story
export const withError = () =>
  html`
    <ss-ui-checkbox invalid error="This is an error message!">
      Check me!
    </ss-ui-checkbox>
  `;
```

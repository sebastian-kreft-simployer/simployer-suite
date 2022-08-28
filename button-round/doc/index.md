# Round button

This is a Round button component.

```js script
import { html } from 'lit';
import '../src/button-round.ts';
```

```js preview-story
export const withIcon = () =>
  html`
    <ss-ui-button-round
      ><span slot="icon" class="material-icons">call</span></ss-ui-button-round
    >
  `;
```

```js preview-story
export const accent = () =>
  html`
    <ss-ui-button-round color="accent">
      <span slot="icon" class="material-icons">call</span>
    </ss-ui-button-round>
  `;
```

```js preview-story
export const grey = () =>
  html`
    <ss-ui-button-round color="grey">
      <span slot="icon" class="material-icons">call</span>
    </ss-ui-button-round>
  `;
```

```js preview-story
export const outlined = () =>
  html`
    <ss-ui-button-round outlined>
      <span slot="icon" class="material-icons">call</span>
    </ss-ui-button-round>
  `;
```

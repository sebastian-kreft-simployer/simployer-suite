# Colors

```js script
import { html } from 'lit';
import '@divriots/dockit-core/css-showcases/dockit-css-showcases.define.js';
import 'https://suitestaticfilesdev.z6.web.core.windows.net/styleguide/css/styleguide.css';
import './styles.css';
```

## Core

### Primary colors

```js story
export const primary = () => html`
  <dockit-css-showcases
    css-props-prefix="--color-primary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Secondary colors

```js story
export const secondary = () => html`
  <dockit-css-showcases
    css-props-prefix="--color-secondary"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Accent colors

```js story
export const accent = () => html`
  <dockit-css-showcases
    css-props-prefix="--color-accent"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Supportive colors

```js story
export const supportive = () => html`
  <dockit-css-showcases
    css-props-prefix="--color-supportive"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Focus colors

```js story
export const focus = () => html`
  <dockit-css-showcases
    css-props-prefix="--color-focus"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

### Grey colors

```js story
export const grey = () => html`
  <dockit-css-showcases
    css-props-prefix="--color-grey"
    component-class="box"
    style-key="background-color"
  ></dockit-css-showcases>
`;
```

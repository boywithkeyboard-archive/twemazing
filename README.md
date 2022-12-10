# twemazing

> **Note**: twemazing **only receives bug fixes** and is **entirely automated**.

> **Warning**: As of December 2022, Twemoji appears to no longer be maintained, making this project obsolete. Therefore, we'll archive this repository for the time being.

### SVG

**Variable** × `~8 MB`

```bash
npm i @twemazing/svg
```

### PNG

**64x** × `~8 MB`

```bash
npm i @twemazing/64x
```

**128x** × `~17 MB`

```bash
npm i @twemazing/128x
```

**256x** × `~35 MB`

```bash
npm i @twemazing/256x
```

**512x** × `~80 MB`

```bash
npm i @twemazing/512x
```

## Usage

#### CDN

```html
<img src='https://cdn.jsdelivr.net/npm/@twemazing/svg/1fae0.svg' alt='melting face emoji' />
```

#### JavaScript

```js
import meltingFace from '@twemazing/svg/1fae0.svg'

const MyComponent = () => (
  <img src={meltingFace} alt='melting face emoji' />
)
```

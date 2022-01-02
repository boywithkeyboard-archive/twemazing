# twemazing

🧸 **twemazing** - a better Twemoji Library!

#### Libraries

- [`twemazing`](https://www.npmjs.com/package/twemazing) **(react)**
- [`@twemazing/css`](https://www.npmjs.com/package/@twemazing/css) **(css)**
- [`@twemazing/js`](https://www.npmjs.com/package/@twemazing/js) **(js)**
- [`@twemazing/sass`](https://www.npmjs.com/package/@twemazing/sass) **(sass)**
- [`@twemazing/scss`](https://www.npmjs.com/package/@twemazing/scss) **(scss)**
- [`@twemazing/cdn`](https://www.npmjs.com/package/@twemazing/cdn) **(images)**

#### CDN Clones

- [`@twe/x`](https://www.npmjs.com/package/@twe/x)
- [`@twe/moji`](https://www.npmjs.com/package/@twe/moji)
- [`@twe/cdn`](https://www.npmjs.com/package/@twe/cdn)

###### ℹ️ All our packages follow the versioning of this repository. ✅ Up to date with [Twemoji v13.1.0](https://twemoji.twitter.com). 🏷️ Names as of [Emojipedia](https://emojipedia.org/emoji).

## Usage

- ### React Library

  - #### Installation
    ```sh-session
    npm i twemazing
    yarn add twemazing
    ```
    
  - #### Usage
    ```js
    import { PartyingFace } from 'twemazing'
    
    <PartyingFace size={512} /> // -> 🥳
    ```
  
- ### CSS Library

  - #### Installation
    ```html
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@twemazing/css">
    ```
    ```css
    @import url('https://cdn.jsdelivr.net/npm/@twemazing/css');
    ```

  - #### Usage
    ```html
    <i class="twe twe-partying-face"></i> <!-- 🥳 -->
    ```
    
- ### JavaScript Library
  - #### Installation
    ```html
    <script src="https://cdn.jsdelivr.net/npm/@twemazing/js"></script>
    ```
    
  - #### Usage
    ```html
    <i class="twe twe-partying-face"></i> <!-- 🥳 -->
    ```
    
- ### Sass Libraries
  - #### Installation
    ```scss
    // scss
    @import 'https://cdn.jsdelivr.net/npm/@twemazing/scss';
    
    // sass
    @import 'https://cdn.jsdelivr.net/npm/@twemazing/sass';
    ```
    
  - #### Usage
    ```html
    <i class="twe twe-partying-face"></i> <!-- 🥳 -->
    ```
- ### CDN[\*](#cdn-clones)

  ```html
  <img src="https://cdn.jsdelivr.net/npm/{cdn}/{codepoint_of_emoji}.svg" alt="error" />
  ```

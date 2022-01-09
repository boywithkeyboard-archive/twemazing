import release from './release.js'
import emojis from './emojis.js'
import twe_cdn from './builders/@twe-cdn.js'
import twe_moji from './builders/@twe-moji.js'
import twe_x from './builders/@twe-x.js'
import cdn from './builders/cdn.js'
import css from './builders/css.js'
import js from './builders/js.js'
import react from './builders/react.js'
import sass from './builders/sass.js'
import scss from './builders/scss.js'

(async () => {
  const config = {
    release: release,
    emojis: emojis
  }
  
  await twe_cdn(config)
  await twe_moji(config)
  await twe_x(config)
  await cdn(config)
  await css(config)
  await js(config)
  await react(config)
  await sass(config)
  await scss(config)
})()
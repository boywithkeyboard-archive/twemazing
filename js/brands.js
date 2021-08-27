/*!
 *  Twemazing 1.2.1 by Azury - https://twemazing.com
 *  License - Apache-2.0
!*/

// brands
const brands = ['discord', 'dropbox', 'github', 'google', 'google-drive', 'spotify', 'twitter', 'google-chrome', 'firefox']

// get all brands
const twb = document.querySelectorAll('.twb')

// get amount of brands
let amountOfBrands = twb.length

// loop through all and add default style
while (amountOfBrands--) {
  twb[amountOfBrands].style.display = 'inline-block'
  twb[amountOfBrands].style.height = '1em'
  twb[amountOfBrands].style.width = '1em'
  twb[amountOfBrands].style.margin = '0 .05em 0 .1em'
  twb[amountOfBrands].style.verticalAlign = '-0.1em'
  twb[amountOfBrands].style.backgroundRepeat = 'no-repeat'
  twb[amountOfBrands].style.backgroundPosition = 'center center'
  twb[amountOfBrands].style.backgroundSize = '1em 1em'

  const name = twb[amountOfBrands].classList[1].replace('twb-', '')
  const brand = brands.find(item => item == name)

  twb[amountOfBrands].style.background = `url(https://cdn.jsdelivr.net/npm/@twe/brands/${brand}.svg)`
}
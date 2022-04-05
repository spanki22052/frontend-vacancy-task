import { icons } from 'components/menu'
import { categories, tokens } from 'components/tokens'
import { useState } from 'react'
import './main.scss'

const format = (str: String) => {
  const s = str.length
  const chars = str.split('')
  const strWithSpaces = chars.reduceRight((acc, char, i) => {
    const spaceOrNothing = (s - i) % 3 === 0 ? ' ' : ''
    return spaceOrNothing + char + acc
  }, '')

  return strWithSpaces[0] === ' ' ? strWithSpaces.slice(1) : strWithSpaces
}
const TokensComponent = () => {
  const [selectedF, setSelF] = useState(0)
  const [selectedT, setSelT] = useState(-1)
  return (
    <div className="tokens-block">
      <div className="tokens">
        <div className="tokens-menu">
          <h1 className="left-side">Токены Everscale</h1>
          <div className="filter">
            {categories.map((el, index) => {
              return (
                <p
                  key={index}
                  className={selectedF === index ? 'selected' : ''}
                  onClick={() => {
                    setSelF(index)
                    setSelT(-1)
                  }}
                >
                  {el.title}
                </p>
              )
            })}
          </div>
        </div>
        {tokens
          .filter((el) => {
            if (categories[selectedF].id === 'all') {
              return el
            }
            return el.categories.includes(categories[selectedF].title.toLowerCase())
          })
          .map((item, index) => {
            return (
              <div
                className={`token ${selectedT === index ? 'selected' : ''}`}
                key={index}
              >
                <p className="counter">#{index + 1}</p>
                <img src={item.logoURI} alt="logo" />
                <span className="name-symbol">
                  <p className="name">{item.name}</p>
                  <p className="symbol">{item.symbol}</p>
                </span>
                <span className="price">
                  <span className="now-price">{item.price} $</span>
                  <span className="price-changes">
                    <p
                      className="price-change"
                      style={
                        item.priceChange.hours24 > 0
                          ? { color: '#30BF8C' }
                          : item.priceChange.hours24 !== 0
                          ? { color: '#FF647C' }
                          : {}
                      }
                    >
                      {item.priceChange.hours24}
                    </p>
                    <div className="dot"></div>
                    <p
                      className="price-change"
                      style={
                        item.priceChange.days7 > 0
                          ? { color: '#30BF8C' }
                          : item.priceChange.days7 !== 0
                          ? { color: '#FF647C' }
                          : {}
                      }
                    >
                      {item.priceChange.days7}
                    </p>
                    <div className="dot"></div>
                    <p
                      className="price-change"
                      style={
                        item.priceChange.days365 > 0
                          ? { color: '#30BF8C' }
                          : item.priceChange.days365 !== 0
                          ? { color: '#FF647C' }
                          : {}
                      }
                    >
                      {item.priceChange.days365}
                    </p>
                  </span>
                </span>
                <div className="volume">
                  {item.volume} $<span>{item.volumeChangePercentage}%</span>
                </div>
                <div className="profiles">
                  {icons.profiles}
                  <p>{format(item.tvl.toString())} </p>
                </div>
                <span
                  className={`arrow ${selectedT === index ? 'selected' : ''}`}
                  onClick={() => setSelT(selectedT === index ? -1 : index)}
                >
                  {icons.arrow}
                </span>
                <p className="info">{item.description}</p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default TokensComponent

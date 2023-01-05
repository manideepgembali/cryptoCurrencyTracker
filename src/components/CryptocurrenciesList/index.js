// Write your JS code here
import CryptocurrenciesItem from '../CryptocurrencyItem'

import './index.css'

const CryptocurrenciesList = props => {
  const {blogData} = props
  return (
    <div className="card">
      <h1 className="head">Cryptocurrency Tracker</h1>
      <img
        src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
        alt="cryptocurrency"
        className="image"
      />
      <div className="card1">
        <p className="para1">Coin Type</p>
        <div className="mini-card">
          <p className="para">USD</p>
          <p>EURO</p>
        </div>
      </div>
      <div>
        {blogData.map(eachOne => (
          <CryptocurrenciesItem eachOne={eachOne} key={eachOne.id} />
        ))}
      </div>
    </div>
  )
}
export default CryptocurrenciesList

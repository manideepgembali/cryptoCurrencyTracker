// Write your JS code here
import './index.css'

const CryptocurrenciesItem = props => {
  const {eachOne} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = eachOne
  return (
    <li>
      <div className="mini-card2">
        <div className="logo">
          <img src={currencyLogo} alt={currencyName} className="image1" />
          <p className="para2">{currencyName}</p>
        </div>
        <div className="mini-card">
          <p className="para">{usdValue}</p>
          <p>{euroValue}</p>
        </div>
      </div>
    </li>
  )
}
export default CryptocurrenciesItem

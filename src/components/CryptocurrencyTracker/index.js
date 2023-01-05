// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {
    blogData: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getCurrencyData()
  }

  getCurrencyData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({blogData: formattedData, isLoading: false})
    console.log(formattedData)
  }

  render() {
    const {blogData, isLoading} = this.state
    return (
      <div className="bg">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList blogData={blogData} />
        )}
      </div>
    )
  }
}
export default CryptocurrencyTracker

import {Component} from 'react'

import './index.css'
import DestinationItem from '../DestinationItem'

class DestinationSearch extends Component {
  state = {searchText: ''}

  onChangeSearchInput = event => {
    this.setState({searchText: event.target.value})
  }

  render() {
    const {searchText} = this.state

    const filterDetails = value =>
      value.name.toLowerCase().includes(searchText.toLowerCase())

    const {destinationsList} = this.props

    const filteredDestinations = destinationsList.filter(destination =>
      filterDetails(destination),
    )

    return (
      <div className="main-container">
        <div className="search-container">
          <h1>Destination Search</h1>
          <div className="input-container">
            <input
              type="search"
              placeholder="Search"
              value={searchText}
              onChange={this.onChangeSearchInput}
              className="input"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
              alt="search icon"
              className="search-icon"
            />
          </div>
        </div>
        <ul className="destination-container">
          {filteredDestinations.map(eachdestination => (
            <DestinationItem
              destinationDetails={eachdestination}
              key={eachdestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch

// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  eatBanana = () => {
    this.setState(prevbanana => ({banana: prevbanana.banana + 1}))
  }

  eatMango = () => {
    this.setState(prevmango => ({mango: prevmango.mango + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="card-container">
        <h1 className="header">
          Bob ate <span className="fruit">{mango}</span> mangoes
          <span className="fruit"> {banana}</span> bananas
        </h1>
        <div className="images-card">
          <div className="image-card card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png "
              alt="mango"
              className="image"
            />
            <button className="button" type="button" onClick={this.eatMango}>
              Eat Mango
            </button>
          </div>
          <div className="image-card card2">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png "
              alt="banana"
              className="image"
            />
            <button className="button" type="button" onClick={this.eatBanana}>
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter

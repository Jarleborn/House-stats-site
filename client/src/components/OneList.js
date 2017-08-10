import React,{Component} from 'react'
import {Col, Row, Collection, CollectionItem} from 'react-materialize'
import HouseCard from './HouseCard'
import ChartBox from './Chart'

class OneList extends Component {
  constructor(props){
  	super(props)
  	this.state = {}
    this.getHouse()
  }
  componentWillUpdate(nextProps, nextState) {
    this.props.socket.on('updated', data => {
      this.getHouse()
    })
  }

  getHouse() {
    fetch('http://localhost:1337/house/' + this.props.match.params.house)
    .then(response => {
      return response.json()
    })
    .then(res => {
      this.setState({'house':res[this.props.match.params.house]})
    })
  }

  renderHouse(){
    if (this.state.house){

      return (
        <div>
          <Col l={7} m={12} s={12}>
            <HouseCard house={this.state.house}  />
          </Col>
          <Col  l={5} m={12} s={12}>
            <ChartBox rooms={this.state.house.rooms} />
          </Col>
        </div>)
    } else{
      return <h2> Gattering Data </h2>
    }
  }
  render() {

    return (
        <div className="one-list">
        <Row>
          {this.renderHouse()}
        </Row>
        </div>
    )
  }
}

export default OneList

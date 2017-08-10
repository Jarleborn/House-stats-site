import React,{Component} from 'react'
import {Card, Col, Row, Collection, CollectionItem} from 'react-materialize'

class HouseCard extends Component {
  constructor(props){
    super(props)
    this.state = {house: this.props.house}
    this.state = {houseID: this.props.houseID}

  }
  render() {

    if (this.props.house) {
      let rooms = []
      let room
      for (room in this.props.house.rooms){
        rooms.push(this.props.house.rooms[room])
      }
      return (
        <div className="class-name">
        <Card className='blue-grey darken-1' textClassName='white-text' title={this.props.house.adress} actions={[<a href={this.props.houseID}>Read more</a>]}>
        <Collection>
          { rooms.map(function (room) {
            if (room) {
              return (
                <CollectionItem key={room.name}>
                  <Row>
                    <Col m={4} s={12}>
                      <b > {room.name} </b>
                    </Col>
                    <Col m={3} s={12}>
                      <b> Humidity: {room.humidity} </b>
                    </Col>
                    <Col m={3} s={12}>
                      <b> Temperature: {room.temperature} </b>
                    </Col>
                  </Row>
                </CollectionItem>
              )
            }
          })}
        </Collection>
        </Card>
        </div>
      )
    } else{
      return(<p> No rooms :( </p>)
    }

  }
}

export default HouseCard

import React,{Component} from 'react'
import {Col, Row, Collection, CollectionItem} from 'react-materialize'
import HouseCard from './HouseCard'
class AllList extends Component {
  constructor(props){
    super(props)
    this.state = {
      houses: [],
    }
  }
  componentDidMount() {
    this.props.socket.on('initHouse', data => {
      this.setState({'houses': data.houses})
    })
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.socket.on('updated', data => {
      this.setState({'houses': data})
    })
    this.props.socket.on('added', data => {
      this.setState({'houses': data})
    })
  }

  render() {

    return (
        <div className="all-list">
          <Row>
            <Col s={10} offset='s1'>
              <Collection>
                {this.state.houses.map( function(houseData, key){
                  let houseName = Object.keys(houseData)[0]
                  if (houseData[houseName]) {
                    return <HouseCard house={houseData[houseName]} houseID={houseName} />
                  }
                  return <CollectionItem key={key}> "Gattering data" </CollectionItem>
                })}
              </Collection>
            </Col>
          </Row>
        </div>
    )
  }
}

export default AllList

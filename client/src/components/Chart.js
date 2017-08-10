import React,{Component} from 'react'
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts'

class ChartBox extends Component {
  constructor(props){
  	super(props)
  	this.state = {'rooms': this.props.rooms}
  }

  componentWillMount() {
    let room
    let rooms = []
    for (room in this.props.rooms){
      rooms.push({
        'label':  this.props.rooms[room].name,
        'value':  this.props.rooms[room].temperature,
      })
    }
  }


  render() {

    return (
      <div id='ChartBox'>
        <h4 class="card-title"> Temperature differances in the rooms </h4>
        <ResponsiveContainer width='100%' height={600}>
          <BarChart width="800" height="400" data={this.props.rooms}
            margin={{top: 100, right: 5, left: 5, bottom: 5}}>
            <XAxis dataKey="name"/>
            <YAxis dataKey="temperature"/>
            <CartesianGrid strokeDasharray="3 3"/>
            <Tooltip/>
            <Bar dataKey="temperature" fill="#9C43DB" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}

export default ChartBox

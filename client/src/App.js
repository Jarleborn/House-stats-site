import React, { Component } from 'react'
import './App.css'
import {Navbar} from 'react-materialize'
import AllList from './components/allList'
import OneList from './components/OneList'
import io from 'socket.io-client'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
let socket = io('http://localhost:1337')

class App extends Component {

  state = { data: {} }

  componentDidMount() {
    socket.on('server:event', data => {
      this.setState({ data })
    })
  }

  sendMessage = message => {
    console.log(message)
    socket.emit('getHouse', message)
  }

  render() {
    return (

      <div className="App">
        <Navbar  brand='House Stats Site' >
        </Navbar>
        <Router>
            <Switch>
            <div>
              <Route exact path='/' render={(props) => (
                <AllList
                  socket={socket}
                  sendMessage={this.sendMessage}
                />
              )}>
              </Route>
              <Route path='/:house'
              component={(props) => <OneList {...props} socket={socket}
              sendMessage={this.sendMessage}
              />} >
              </Route>

              </div>
            </Switch>
        </Router>
        <p className="App-intro">
          Made with react and NodeJS by Hampus Jarleborn
        </p>
      </div>
    )
  }
}

export default App

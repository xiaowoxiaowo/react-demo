import React, { Component, Fragment } from 'react'
import { CSSTransition, TransitionGroup, SwitchTransition } from 'react-transition-group'
import './style.css'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
      isOn: true
    }
    this.handleAddItem = this.handleAddItem.bind(this)
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
        {
          this.state.list.map((item, index) => {
            return (
              <CSSTransition timeout={1000}
                             unmountOnExit
                             classNames='fade'
                             onEntered={(el) => {el.style.color = 'blue'}}
                             appear={true}
                             key={index}
              >
                <div>{item}</div>
              </CSSTransition>
            )
          })
        }
        </TransitionGroup>
        <button onClick={this.handleAddItem}>Add</button>
        <br/>
        <SwitchTransition mode="in-out">
          <CSSTransition classNames="btn"
                         timeout={100}
                         key={this.state.isOn ? "on" : "off"}>
            {
              <button onClick={this.btnClick.bind(this)}>
                {this.state.isOn ? "on": "off"}
              </button>
            }
          </CSSTransition>
        </SwitchTransition>
      </Fragment>
    )
  }
  handleAddItem() {
    this.setState((prevState) => ({
      list: [...prevState.list, 'item']
    }))
  }
  btnClick() {
    this.setState((prevState) => ({
      isOn: !prevState.isOn
    }))
  }
}

export default App


/*
<CSSTransition in={this.state.show}
timeout={1000}
unmountOnExit
classNames='fade'
onEntered={(el) => {el.style.color = 'blue'}}
appear={true}
  >*/

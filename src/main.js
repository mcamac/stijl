
// site entry point

// import 'es6-promise'
// import 'whatwg-fetch'
// import 'babel-regenerator-runtime'

import React from 'react'
import ReactDOM from 'react-dom'
import * as ui from './ui'

document.title = 'Project'

const Button = (props) =>
  <ui.Col
    fontWeight='bold'
    color='steelblue'
    cursor='pointer'
    margin='5'
    padding='5'
    border='2px solid steelblue'
    borderRadius='5'
    {...props}
  />

const Root = React.createClass({
  render() {
    return <ui.Window
      fontFamily='Open Sans'
      fontSize='15'
      flexDirection='row'
      justifyContent='center'
    >
      <ui.Col
        flexBasis='200'
        // background='lightgray'
        padding='5'
      >
        {/*<ui.Row alignItems='center'>
          <ui.Col margin='5' >App</ui.Col><Button>Click</Button>
        </ui.Row>*/}
        <ui.Col
          // border='3px solid hsl(0, 0%, 79%)'
          borderRadius='5'
          flexBasis='200'
          background='hsl(0, 0%, 79%)'
        >
          <ui.Row
            padding='12'
            borderBottom='2px solid white'
            alignItems='center'
          >
            App
          </ui.Row>
        </ui.Col>
      </ui.Col>
    </ui.Window>
  },
})

ReactDOM.render(<Root/>, document.getElementById('root'))

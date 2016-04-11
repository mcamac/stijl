
import React from 'react'
import _ from '../lodash'
import * as ui from '../ui'

// export const Select = (props) =>
//   <ui.Row
//     name='Select'
//     alignItems='center'
//     {...props}
//   >
//     <ui.ContentEditable flexGrow={1}/>
//     <ui.Inline>▾</ui.Inline>
//   </ui.Row>

export const Select = React.createClass({
  getInitialState() {
    return {}
  },
  handleFocus() {
    this.setState({focus: true})
    if (this.props.onFocus) this.props.onFocus()
  },
  handleBlur() {
    // this.setState({focus: false})
    if (this.props.onBlur) this.props.onBlur()
  },
  handleClick(option) {
    this.setState({focus: false})
    this.props.onChange(option)
  },
  render() {
    return <ui.Row
      name='Select'
      alignItems='center'
      onFocus={this.handleFocus}
      onBlur={this.handleBlur}
    >
      <ui.ContentEditable
        WebkitTapHighlightColor='rgba(0,0,0,0)'
        flexGrow='1'
        value={this.props.value}
      />
      <ui.Div
        cursor='pointer'
      >▾</ui.Div>
      {this.state.focus ? <ui.Div
        name='SelectMenu'
        position='absolute'
        width='calc(100% + 4px)'
        left={-2}
        top='calc(100% + 2px)'
        zIndex='10'
      >
        {_.map(
          (d, i) => <ui.ButtonFlat
            key={i}
            onClick={() => this.handleClick(d)}
            marginRight={0}
          >
            {d}
          </ui.ButtonFlat>,
          this.props.options,
        )}
      </ui.Div> : undefined}
    </ui.Row>
  },
})

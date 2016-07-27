
import React from 'react'
import {getTheme} from '../getTheme'

export const SH = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexBasis: theme.base.gutter / 2,
          flexShrink: 0,
        },
        ...theme.Sh,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const S = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexBasis: theme.base.gutter,
          flexShrink: 0,
        },
        ...theme.S,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const S2 = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexBasis: theme.base.gutter * 2,
          flexShrink: 0,
        },
        ...theme.S2,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const S3 = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexBasis: theme.base.gutter * 3,
          flexShrink: 0,
        },
        ...theme.S3,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

export const S4 = React.createClass({
  mixins: [getTheme],
  render() {
    const theme = this.getTheme()
    return <div
      {...this.getActions()}
      style={{
        ...this.defaultStyle,
        ...{
          flexBasis: theme.base.gutter * 4,
          flexShrink: 0,
        },
        ...theme.S4,
        ...this.getPropsStyle(),
      }}
    >
      {this.props.children}
    </div>
  },
})

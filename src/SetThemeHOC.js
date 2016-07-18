
import React from 'react'
import _ from 'lodash/fp'
import {generateTheme} from './generateTheme'

export class SetThemeHOC extends React.Component {
  static childContextTypes = {
    theme: React.PropTypes.object,
  }

  getTheme = () =>
    generateTheme(this.props.theme)

  getChildContext = () => ({
    theme: this.getTheme(),
  })

  render() {
    if (!this.props.children) return null
    return React.cloneElement(
      React.Children.only(this.props.children),
      {
        ..._.omit('children', this.props),
        theme: this.getTheme(),
      },
    )
  }
}

export const setThemeHOC = _.curry((theme, Component) => {
  const inputTheme = generateTheme(theme)
  return class SetThemeHOC2 extends React.Component {
    static childContextTypes = {
      theme: React.PropTypes.object,
    }
    getChildContext = () => ({
      theme: inputTheme,
    })
    render() {
      return <Component
        {...this.props}
        theme={inputTheme}
      />
    }
  }
})

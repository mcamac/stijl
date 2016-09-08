
import React from 'react'
import _ from 'lodash/fp'
import {ui, theme} from '../index'
import {color} from 'd3-color'

export class Wrapper extends React.Component {
  render() {
    return <ui.Col
      margin padding
      {...this.props}
      css={{
        borderWidth: theme.borderWidth,
        borderColor: _.set('opacity', 0.3, color(theme.color))
      }}
    />
  }
}

export class ColExample extends React.Component {
  render() {
    return <Wrapper css={{
    }}>
      <ui.Col padding>Col 1</ui.Col>
      <ui.Col padding>Col 2</ui.Col>
      <ui.Col padding>Col 3</ui.Col>
    </Wrapper>
  }
}

export class RowExample extends React.Component {
  render() {
    return <Wrapper css={{
      flexDirection: 'row',
    }}>
      <ui.Row padding>Row 1</ui.Row>
      <ui.Row padding>Row 2</ui.Row>
      <ui.Row padding>Row 3</ui.Row>
    </Wrapper>
  }
}

export class RowWrapExample extends React.Component {
  render() {
    return <Wrapper css={{
      flexDirection: 'row',
      flexWrap: 'wrap',
    }}>
      <ui.Row padding>longer column, with more text</ui.Row>
      <ui.Row padding>longer column, with more text</ui.Row>
      <ui.Row padding>longer column, with more text</ui.Row>
    </Wrapper>
  }
}

export class HExample extends React.Component {
  render() {
    return <Wrapper>
      <ui.H0>Header 0</ui.H0>
      <ui.H1>Header 1</ui.H1>
      <ui.H2>Header 2</ui.H2>
      <ui.H3>Header 3</ui.H3>
      <ui.H4>Header 4</ui.H4>
      <ui.H5>Header 5</ui.H5>
      <ui.H6>Header 6</ui.H6>
    </Wrapper>
  }
}

export class PExample extends React.Component {
  render() {
    return <Wrapper>
      <ui.P>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</ui.P>
    </Wrapper>
  }
}

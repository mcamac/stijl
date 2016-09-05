
import React from 'react'
import {ui, theme} from '../index'

class MarkedColumn extends React.Component {
  render() {
    return <ui.Col margin padding css={{
      background: 'hsl(200, 30%, 90%)',
      borderWidth: theme.borderWidth,
    }} {...this.props}>
      {this.props.children}
    </ui.Col>
  }
}

export class ColExample extends React.Component {
  render() {
    return <MarkedColumn>
      <MarkedColumn>Col 1</MarkedColumn>
      <MarkedColumn>Col 2</MarkedColumn>
      <MarkedColumn>Col 3</MarkedColumn>
    </MarkedColumn>
  }
}

class MarkedRow extends React.Component {
  render() {
    return <ui.Row margin padding css={{
      background: 'hsl(200, 30%, 90%)',
      borderWidth: theme.borderWidth,
    }} {...this.props}>
      {this.props.children}
    </ui.Row>
  }
}

export class RowExample extends React.Component {
  render() {
    return <MarkedRow>
      <MarkedRow>Row 1</MarkedRow>
      <MarkedRow>Row 2</MarkedRow>
      <MarkedRow>Row 3</MarkedRow>
    </MarkedRow>
  }
}

class MarkedRowWrap extends React.Component {
  render() {
    return <ui.RowWrap margin padding css={{
      background: 'hsl(200, 30%, 90%)',
      borderWidth: theme.borderWidth,
    }} {...this.props}>
      {this.props.children}
    </ui.RowWrap>
  }
}

export class RowWrapExample extends React.Component {
  render() {
    return <MarkedRowWrap>
      <MarkedRowWrap>Row 1, with a long long text</MarkedRowWrap>
      <MarkedRowWrap>Row 2, with a long long text</MarkedRowWrap>
      <MarkedRowWrap>Row 3, with a long long text</MarkedRowWrap>
    </MarkedRowWrap>
  }
}

export class HExample extends React.Component {
  render() {
    return <MarkedColumn>
      <ui.H0>Header 0</ui.H0>
      <ui.H1>Header 1</ui.H1>
      <ui.H2>Header 2</ui.H2>
      <ui.H3>Header 3</ui.H3>
      <ui.H4>Header 4</ui.H4>
      <ui.H5>Header 5</ui.H5>
      <ui.H6>Header 6</ui.H6>
    </MarkedColumn>
  }
}

export class PExample extends React.Component {
  render() {
    return <MarkedColumn>
      <ui.P>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere, whose upper half was strewn with silver. Looking down into the dark gulf below, I could see a ruddy light streaming through a rift in the clouds.</ui.P>
    </MarkedColumn>
  }
}

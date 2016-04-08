
import React from 'react'
import _ from 'lodash/fp'
import * as ui from '../ui'

const rowPick = [
  'background', 'backgroundColor',
  'border', 'borderBottom', 'borderTop', 'borderLeft', 'borderRight',
  'borderWidth', 'borderColor',
]

export const ContainerRow = (props) =>
  <ui.Div
    name='ContainerRow'
    {...props}
  />

export const ContainerCol = (props) =>
  <ui.Div
    name='ContainerCol'
    {...props}
  />

export const Container = (props) => {
  const extraStyle = {}
  if (props.noPad) {
    extraStyle.paddingLeft = 0
    extraStyle.paddingRight = 0
  }
  return <ui.Div
    name='ContainerRow'
    {..._.pick(rowPick, props)}
  >
    <ui.Div
      name={props.text ? 'ContainerColText' : 'ContainerCol'}
      {...extraStyle}
      {..._.omit(rowPick, props)}
    >
      {props.children}
    </ui.Div>
  </ui.Div>
}

export const Col = (props) => {
  const extraStyle = {}
  if (props.noPad) {
    extraStyle.paddingLeft = 0
    extraStyle.paddingRight = 0
  }
  return <ui.Div
    name='Col'
    {...extraStyle}
    {...props}
  />
}

export const ColWrapper = (props) =>
  <ui.Div
    name='ColWrapper'
    flexDirection='row'
    {...props}
  />

export const Row = (props) =>
  <ui.Div
    flexDirection='row'
    {...props}
  />

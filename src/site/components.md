
```js
import {ui} from 'stijl'
```

All the components have a default style and a tag specific style applied to then, they can be modified by using the `css` props and the helper props.

## ui.Window

A column component with `minHeight: 100%` and the `background`, `color`, `fontSize` and `fontFamily` from the theme. This is a good component to start a site or web app, when all the parents (`<html/>`, `<body/>`) have `height: 100%` and no margin, this component will occupy the whole window and grow accordingly to the content.

## ui.Col

Flexbox column component, for laying down children vertically.
```
<ui.Col>
  <ui.Col>Col 1</ui.Col>
  <ui.Col>Col 2</ui.Col>
  <ui.Col>Col 3</ui.Col>
</ui.Col>
```

<ColExample></ColExample>

## ui.Row

Flexbox row component, for laying down children horizontally.
```
<ui.Row>
  <ui.Row>Row 1</ui.Row>
  <ui.Row>Row 2</ui.Row>
  <ui.Row>Row 3</ui.Row>
</ui.Col>
```

<RowExample></RowExample>

## ui.RowWrap

Flexbox row component with `flexWrap: 'wrap'`, for laying down children wrapped horizontally.
```
<ui.RowWrap>
  <ui.RowWrap>RowWrap 1</ui.RowWrap>
  <ui.RowWrap>RowWrap 2</ui.RowWrap>
  <ui.RowWrap>RowWrap 3</ui.RowWrap>
</ui.Col>
```

<RowWrapExample></RowWrapExample>

## ui.H0 ~ ui.H6

Header components, the font size of each header come from the `theme.scale`, H0 uses `fontSize: theme.scale[0]`, H1 uses `fontSize: theme.scale[1]`, etc.

<HExample></HExample>

## ui.P

The paragraph component, uses `fontSize`, `color` and `lineHeight` from the theme.

<PExample></PExample>

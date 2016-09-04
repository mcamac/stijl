
# Stijl

Configurable and extendable UI components for React (beta).

This lib features UI and layout components that are easy to configure and extend both locally as globally.  
The components accept a css object that can contain any styles, css selectors, pseudo-classes and media-queries; special props and tags can be used for quickly put together complex layouts.  
On the global level, the theme of all components can be modified and extended.

```bash
$ npm i stijl --S
```

```jsx
import React from 'react'
import {start, ui, theme} from 'stijl'
import {color} from 'd3-color'

// we will extend the default theme with a new
// background and action colors
const myTheme = {
  background: 'lightgray',
  action: 'steelblue',
}

// Before using any component, run `start()`
// pass any extensions here
start([myTheme])

class Home extends React.Component {
  render() {
    // All components come with default flex-box styles
    return <ui.Row>
      <ui.Col
        // you can use the css prop for doing custom local styles
        css={{
          background: theme.backgroundCard,
          // it accepts css selectors, pseudo-classes and media-queries
          '> p': {fontWeight: 'bold'},
          ':hover': {background: color(theme.action).brighter(1)},
          '@media (max-width: 600px)': {background: 'blue'},
        }}
        // special props are available for consistent configuration
        // of gutters and spacing according to the theme
        margin
        padding
      >
        <ui.H1>Heading 1</ui.H1>
        <ui.P>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, <ui.A href='#'>there live the blind
          texts. Separated they live in Bookmarksgrove right</ui.A> at the
          coast of the Semantics, a large language ocean.
        </ui.P>
      </ui.Col>
    </ui.Row>
  }
}
```

## Named Exports

### `start(themeExtensions: ?Array<Object>, cssObjectExtensions: ?Array<Object>, uiExtensions: ?Array<Object>)`

Before using the UI components, call `start()` with any extensions you want to apply. More Info: [Extensions tutorial](/)

### `ui: Object<{[componentName]: ReactClass}>`

All components in `ui` accept all the props that html tags can accept, they receive a default element style and a tag style created using the theme object. More info: ["Theme Logic"](/).

The default style applied to all components"
```
{
  alignContent: 'flex-start',
  alignItems: 'stretch',
  border: '0 solid black',
  boxSizing: 'borderBox',
  display: 'flex',
  flexDirection: 'column',
  flexShrink: 0,
  margin: 0,
  minWidth: 0,
  padding: 0,
  position: 'relative',
}
```

The base UI components rely on flex-box for their composition and layout. More info ["Layout Examples"](/)

A css prop is available for extending the style of the component. Also, several specific margin and padding props are available for quickly configuring spacing while keeping a consistent grid. More info: ["Gutter and spacing logic"](/)

**props**:  
- `css: ?Object`  
Add a new style to the object. It accepts anything that can go into React inline styles, it can also handle css selectors, pseudo-classes and media-queries. Under the hood this object is converted to one or more css rules with hashed class names, if those rules don't already exist they are inserted into the document, the resulting class names are then added to the component.  
More info: ["The css object"](/).  
```jsx
<Col css={{
  color: 'blue',
  flexGrow: 1,
  height: 100,
  '> p': {fontWeight: 'bold},
  ':hover': {background: 'lightgray'},
  '@media (max-width: 600px)': {height: 50},
}}/>
```
- `marginAuto: ?bool`  
Set all the margins to auto  
```jsx
<Col marginAuto/>
```
- `marginZero: ?bool`  
Set all margins to zero  
- `margin: ?bool`  
- `marginHalf: ?bool`  
- `marginDouble: ?bool`  
Set all the margins to the amount of the gutter in the `theme`, to half that amount or to double that amount  
- `marginHorizontalZero: ?bool`  
- `marginHorizontal: ?bool`  
- `marginHorizontalHalf: ?bool`  
- `marginHorizontalDouble: ?bool`  
Set the horizontal margin (left and right) to zero, to the gutter size in the `theme` to half that amount or to double that amount  
- `negativeMarginHorizontal: ?bool`  
Set a negative horizontal margin with an amount equal to the gutter size in the `theme`  
- `margiVerticalZero: ?bool`  
- `marginVertical: ?bool`  
- `marginVerticalHalf: ?bool`  
- `marginVerticalDouble: ?bool`   
- `negativeMarginVertical: ?bool`  
Same thing as the horizontal margins but for the vertical margins (top and bottom)  
- `padding: ?bool`
- `paddingZero: ?bool`
- `paddingHalf: ?bool`
- `paddingDouble: ?bool`
- `paddingHorizontal: ?bool`
- `paddingHorizontalZero: ?bool`
- `paddingHorizontalHalf: ?bool`
- `paddingHorizontalDouble: ?bool`
- `negativePaddingHorizontal: ?bool`
- `paddingVertical: ?bool`
- `paddingVerticalZero: ?bool`
- `paddingVerticalHalf: ?bool`
- `paddingVerticalDouble: ?bool`
- `negativePaddingVertical: ?bool`  
Same as the margins, but for the element paddings

### `ui.H0: ReactClass`
A `<div/>` element with a `fontSize` equals to `theme.scale[0]`. It's meant to be used as hero title.

### `ui.H1: ReactClass`
A `<h1/>` element with a `fontSize` equals to `theme.scale[1]`.

### `ui.H2: ReactClass`
A `<h2/>` element with a `fontSize` equals to `theme.scale[2]`.

### `ui.H3: ReactClass`
A `<h3/>` element with a `fontSize` equals to `theme.scale[3]`.

### `ui.H4: ReactClass`
A `<h4/>` element with a `fontSize` equals to `theme.scale[4]`.

### `ui.H5: ReactClass`
A `<h5/>` element with a `fontSize` equals to `theme.scale[5]`.

### `ui.H6: ReactClass`
A `<h6/>` element with a `fontSize` equals to `theme.scale[6]`.

### `ui.P: ReactClass`
### `ui.A: ReactClass`
### `ui.Hr: ReactClass`
### `ui.Span: ReactClass`
### `ui.Pre: ReactClass`
### `ui.Blockquote: ReactClass`
### `ui.Code: ReactClass`
### `ui.Form: ReactClass`
### `ui.Input: ReactClass`
### `ui.Button: ReactClass`
### `ui.Select: ReactClass`
### `ui.Window: ReactClass`

### `ui.Col: ReactClass`
A `<div/>` with `flex-direction: column`.

### `ui.Row: ReactClass`
A `<div/>` with `flex-direction: row`.

### `ui.RowWrap: ReactClass`
A `<div/>` with `flex-direction: row` and `flex-wrap: wrap`.

### `ui.Space: ReactClass`
This object creates a space with a flex-basis equal to one gutter from the `theme`. This space can be horizontal or vertical according to the flex-direction of the container.

### `ui.SpaceHalf: ReactClass`
Same as the `ui.Space`, but with half the `theme.gutter`.

### `ui.SpaceDouble: ReactClass`
Same as the `ui.Space`, but with double the `theme.gutter`.

### `ui.SpaceTriple: ReactClass`
Same as the `ui.Space`, but with three times the `theme.gutter`.

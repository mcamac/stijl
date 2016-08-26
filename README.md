
# Stijl

Configurable and Extendable UI components for React (beta)

```bash
$ npm i stijl --S
```

```jsx
import React from 'react'
import {start, ui, theme} from 'stijl'

const myTheme = {
  background: 'lightgray',
  action: 'steelblue',
}

// Before using any component, run `start()`
// pass any extensions here
start([myTheme])

class Home extends React.Component {
  render() {
    return <ui.Row>
      // All components have default flex-box styles
      <ui.Col
        // do custom style using the css prop
        css={{
          background: theme.backgroundCard,
          // it accepts css selectors, pseudo-classes and media-queries
          ':hover': {background: 'red'},
          '@media (max-width: 600px)': {background: 'blue'},
        }}
        // special props are available for consistent configuration
        // of gutters and spacing
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

#### `start(themeExtensions: ?Array<Object>, cssObjectExtensions: ?Array<Object>, uiExtensions: ?Array<Object>)`

Before using the UI components, call `start()` with any extensions you want to apply. More Info: [Extensions tutorial](/)

#### `ui: Object<{[componentName]: ReactClass}>`

All components in `ui` accept all the props that html tags can accept, they receive a default element style and a tag style created using the theme object. More info: ["Theme Logic"](/). 

**props**:  
- `css: Object`  
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
- `marginAuto: bool`  
Set all the margins to auto  
```jsx
<Col marginAuto/>
```
- `marginZero: bool`  
Set all margins to zero  
- `margin: bool`  
- `marginHalf: bool`  
- `marginDouble: bool`  
Set all the margins to the amount of the gutter in the `theme`, to half that amount or to double that amount  
- `marginHorizontalZero: bool`  
- `marginHorizontal: bool`  
- `marginHorizontalHalf: bool`  
- `marginHorizontalDouble: bool`  
Set the horizontal margin (left and right) to zero, to the gutter size in the `theme` to half that amount or to double that amount  
- `negativeMarginHorizontal: bool`  
Set a negative horizontal margin with an amount equal to the gutter size in the `theme`  
- `margiVerticalZero: bool`  
- `marginVertical: bool`  
- `marginVerticalHalf: bool`  
- `marginVerticalDouble: bool`   
- `negativeMarginVertical: bool`  
Same thing as the horizontal margins but for the vertical margins (top and bottom)

'padding', 'paddingZero', 'paddingHalf', 'paddingDouble',
'paddingHorizontal', 'paddingHorizontalZero', 'paddingHorizontalHalf', 'paddingHorizontalDouble', 'negativePaddingHorizontal',
'paddingVertical', 'paddingVerticalZero', 'paddingVerticalHalf', 'paddingVerticalDouble', 'negativePaddingVertical'

`ui.<Component>`:  
H0, H1, H2, H3, H4, H5, H6, P, A, Hr,  
Span, Pre, Blockquote, Code,  
Form, Input, Button, Select,  
Window, Col, Row, RowWrap,  
Space, SpaceHalf, SpaceDouble, SpaceTriple,  

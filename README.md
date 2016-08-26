
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
        // special props are available for consistent configuration
        // of gutters and spacing
        margin padding
        // do custom style using the css prop
        css={{
          background: theme.backgroundCard,
          // it accepts css selectors, pseudo-classes and media-queries
          ':hover': {background: 'red'},
          '@media (max-width: 600px)': {background: 'blue'},
        }}
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

##### `start(themeExtensions: ?Array<Object>, cssObjectExtensions: ?Array<Object>, uiExtensions: ?Array<Object>)`

Before using the UI components, call `start()` with any extensions you want to apply.

- [Extensions tutorial](#extensions)

##### `ui: Object<{[componentName]: ReactClass}>`

All components in `ui` accept the following props:  
```
css: Object
'marginAuto',

'margin', 'marginZero', 'marginHalf', 'marginDouble',
'marginHorizontal', 'marginHorizontalZero', 'marginHorizontalHalf', 'marginHorizontalDouble', 'negativeMarginHorizontal',
'marginVertical', 'marginVerticalZero', 'marginVerticalHalf', 'marginVerticalDouble', 'negativeMarginVertical',

'padding', 'paddingZero', 'paddingHalf', 'paddingDouble',
'paddingHorizontal', 'paddingHorizontalZero', 'paddingHorizontalHalf', 'paddingHorizontalDouble', 'negativePaddingHorizontal',
'paddingVertical', 'paddingVerticalZero', 'paddingVerticalHalf', 'paddingVerticalDouble', 'negativePaddingVertical'
```

`ui.<Component>`:  
H0, H1, H2, H3, H4, H5, H6, P, A, Hr,  
Span, Pre, Blockquote, Code,  
Form, Input, Button, Select,  
Window, Col, Row, RowWrap,  
Space, SpaceHalf, SpaceDouble, SpaceTriple,  

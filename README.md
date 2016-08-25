
# Stijl

Configurable and Extendable UI components for React
(under development)

```bash
$ npm i stijl --S
```

```jsx
import React from 'react'
import {start, ui, theme} from 'stijl'

start()

class Home extends React.Component {
  render() {
    return <ui.Window>
      <ui.Row>
        <ui.Col margin padding css={{
          background: theme.backgroundCard,
          ':hover': {background: 'red'},
          '@media (max-width: 600px)': {background: 'blue'},
        }}>
          <ui.H1>Heading 1</ui.H1>
          <ui.P>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, <ui.A href='#'>there live the blind
            texts. Separated they live in Bookmarksgrove right</ui.A> at the
            coast of the Semantics, a large language ocean.
          </ui.P>
        </ui.Col>
      </ui.Row>
    </ui.Window>
  }
}
```

## Base components

`ui.<Component>`:  
H0, H1, H2, H3, H4, H5, H6, P, A, Hr,  
Span, Pre, Blockquote, Code,  
Form, Input, Button, Select,  
Window, Col, Row, RowWrap,  
Space, SpaceHalf, SpaceDouble, SpaceTriple,  

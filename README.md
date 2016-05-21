# Stijl

Layout components for React
(under development)

```bash
$ npm i stijl --save
```

```jsx
import {ui} from 'stijl'

const Root = () =>
  <ui.Window>
    <ui.Row justifyContent='center'>
      <ui.Col p justifyContent='center' flexBasis={700}>
        <ui.S/>
        <ui.H1>Heading 1</ui.H1>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
        </ui.P>
      </ui.Col>
    </ui.Row>
  </ui.Window>
```

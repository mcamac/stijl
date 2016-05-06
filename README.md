# Stijl

Layout components for React
(under development)

```bash
$ npm i stijl --save
```

```
import * as ui from 'stijl'

const Root = () =>
  <ui.Window>
    <ui.Row justifyContent='center' flexGrow={1}>
      <ui.ColText p pV justifyContent='center'>
        <ui.S/>
        <ui.H1>Heading 1</ui.H1>
        <ui.P>
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, <ui.A href='#'>there live the blind texts. Separated they live in Bookmarksgrove right</ui.A> at the coast of the Semantics, a large language ocean.
        </ui.P>
      </ui.ColText>
    </ui.Row/>
  </ui.Window>
```

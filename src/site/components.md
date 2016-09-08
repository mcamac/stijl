
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
  <ui.Col>Value 1</ui.Col>
  <ui.Col>Value 2</ui.Col>
  <ui.Col>Value 3</ui.Col>
</ui.Col>
```

<wrapper>
  <col padding>Value 1</col>
  <col padding>Value 2</col>
  <col padding>Value 3</col>
</wrapper>

## ui.Row

Flexbox row component, for laying down children horizontally.
```
<ui.Row>
  <ui.Col>Value 1</ui.Col>
  <ui.Col>Value 2</ui.Col>
  <ui.Col>Value 3</ui.Col>
</ui.Col>
```

<wrapper>
  <row>
    <col padding>Value 1</col>
    <col padding>Value 2</col>
    <col padding>Value 3</col>
  </row>
</wrapper>

## ui.RowWrap

Flexbox row component with `flexWrap: 'wrap'`, for laying down children wrapped horizontally.
```
<ui.RowWrap>
  <ui.Col>Longer column, with more text 1</ui.Col>
  <ui.Col>Longer column, with more text 2</ui.Col>
  <ui.Col>Longer column, with more text 3</ui.Col>
</ui.Col>
```

<wrapper>
  <rowWrap>
    <col padding>Longer column, with more text 1</col>
    <col padding>Longer column, with more text 2</col>
    <col padding>Longer column, with more text 3</col>
  </rowWrap>
</wrapper>

## ui.Card

```
<ui.Card>
  <ui.H4>Text</ui.H4>
  <ui.P>description</ui.P>
</ui.Card>
```

<wrapper>
  <card>
    <h4>Text</h4>
    <p>description</p>
  </card>
</wrapper>

## ui.H0 ~ ui.H6

Header components, the font size of each header come from the `theme.scale`, H0 uses `fontSize: theme.scale[0]`, H1 uses `fontSize: theme.scale[1]`, etc.
```
<ui.Col>
  <ui.H0>Header 0</ui.H0>
  <ui.H1>Header 1</ui.H1>
  <ui.H2>Header 2</ui.H2>
  <ui.H3>Header 3</ui.H3>
  <ui.H4>Header 4</ui.H4>
  <ui.H5>Header 5</ui.H5>
  <ui.H6>Header 6</ui.H6>
</ui.Col>
```

<wrapper>
  <h0>Header 0</h0>
  <h1>Header 1</h1>
  <h2>Header 2</h2>
  <h3>Header 3</h3>
  <h4>Header 4</h4>
  <h5>Header 5</h5>
  <h6>Header 6</h6>
</wrapper>

## ui.P

The paragraph component, uses `fontSize`, `color` and `lineHeight` from the theme.

```
<Wrapper>
  <ui.P>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere.</ui.P>
</Wrapper>
```

<wrapper>
  <p>Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere.</p>
</wrapper>

## ui.A

The link component, its color uses the `action` property from the theme.
```
<ui.P>
  Apparently <ui.A href='#'>we had reached</ui.A> a great height in the atmosphere.
</ui.P>
```

<wrapper>
  <p>
    Apparently <a href='#'>we had reached</a> a great height in the atmosphere.
  </p>
</wrapper>

## ui.Hr

The thematic break component, it uses `borderWidth` and `color` from the theme.

```
<ui.Hr/>
```

<wrapper>
  <hr/>
</wrapper>

## ui.Blockquote

```
<ui.Blockquote>
  <ui.P>
    Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere.
  </ui.P>
</ui.Blockquote>
```

<wrapper>
<blockquote><p>
  Apparently we had reached a great height in the atmosphere, for the sky was a dead black, and the stars had ceased to twinkle. By the same illusion which lifts the horizon of the sea to the level of the spectator on a hillside, the sable cloud beneath was dished out, and the car seemed to float in the middle of an immense dark sphere.
</p></blockquote>
</wrapper>

## ui.Code, ui.Pre
```
<ui.P>
  Apparently <ui.Code>we had reached</ui.Code> a great height in the atmosphere.
</ui.P>
<ui.Pre>
  <ui.Code>
    import someCode from './someFile'
  </ui.Code>
</ui.Pre>
```

<wrapper>
<p>
  Apparently <code>we had reached</code> a great height in the atmosphere.
</p>
<pre>
  <code>
    import someCode from './someFile'
  </code>
</pre>
</wrapper>

## ui.Ul, ui.Ol, ui.Li
```
<ui.Ul>
  <ui.Li>item 1</ui.Li>
  <ui.Li>item 2</ui.Li>
</ui.Ul>
<ui.Ol>
  <ui.Li>item 1</ui.Li>
  <ui.Li>item 2</ui.Li>
</ui.Ol>
```

<wrapper>
<ul>
  <li>item 1</li>
  <li>item 2</li>
</ul>
<ol>
  <li>item 1</li>
  <li>item 2</li>
</ol>
</wrapper>

## ui.Table, ui.THead, ui.TBody, ui.TR, ui.TH, ui.TD

```
<ui.Table>
  <ui.THead>
    <ui.TR>
      <ui.TH>Firstname</ui.TH>
      <ui.TH>Lastname</ui.TH>
      <ui.TH>Age</ui.TH>
    </ui.TR>
  </ui.THead>
  <ui.TBody>
    <ui.TR>
      <ui.TD>Jill</ui.TD>
      <ui.TD>Smith</ui.TD>
      <ui.TD>50</ui.TD>
    </ui.TR>
    <ui.TR>
      <ui.TD>Eve</ui.TD>
      <ui.TD>Jackson</ui.TD>
      <ui.TD>94</ui.TD>
    </ui.TR>
    <ui.TR>
      <ui.TD>John</ui.TD>
      <ui.TD>Doe</ui.TD>
      <ui.TD>80</ui.TD>
    </ui.TR>
  </ui.TBody>
</ui.Table>
```

<wrapper>
  <table>
    <thead>
      <tr>
        <th>Firstname</th>
        <th>Lastname</th>
        <th>Age</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Jill</td>
        <td>Smith</td>
        <td>50</td>
      </tr>
      <tr>
        <td>Eve</td>
        <td>Jackson</td>
        <td>94</td>
      </tr>
      <tr>
        <td>John</td>
        <td>Doe</td>
        <td>80</td>
      </tr>
    </tbody>
  </table>
</wrapper>

## ui.Img

```
<ui.Img src='http://luiscarli.surge.sh/photo/2016-08-27_L1000350'/>
```

<wrapper>
  <img src='https://s3.amazonaws.com/luiscarli.com/photo-1200/2016-08-27_L1000350.jpg'/>
</wrapper>

## ui.Space, ui.SpaceHalf, ui.SpaceDouble, ui.SpaceTriple

Components for adding spaces between your rows and columns. They use `flexBasis` with a multiplier of the `gutter` on the theme.
```
<ui.Hr/>
<ui.Hr/>
<ui.SpaceHalf/>
<ui.Hr/>
<ui.Space/>
<ui.Hr/>
<ui.SpaceDouble/>
<ui.Hr/>
<ui.SpaceTriple/>
<ui.Hr/>
```

<wrapper>
  <hr/>
  <hr/>
  <spaceHalf/>
  <hr/>
  <space/>
  <hr/>
  <spaceDouble/>
  <hr/>
  <spaceTriple/>
  <hr/>
</wrapper>

## ui.Button

```
<ui.Button>Click</ui.Button>
```

<wrapper>
  <button>Click</button>
</wrapper>

## ui.Input

```
<ui.Input placeholder='add text'/>
```

<wrapper>
  <input placeholder='add text'/>
</wrapper>

## ui.Select

```
<ui.Select>
  <option>option 1</option>
  <option>option 2</option>
</ui.Select>
```

<wrapper>
  <select>
    <option>option 1</option>
    <option>option 2</option>
  </select>
</wrapper>

## ui.Span, ui.Form

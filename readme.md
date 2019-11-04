Turn JSON into a reactstrap JSON Nav

#### Install
```
npm i reactstrap-json-nav
```

#### Usage
```js
import Navigation from 'reactstrap-json-nav'

let json = [
  {name: 'Components', url: '/components/'},
  {name: 'GitHub', url: 'https://github.com/reactstrap/reactstrap'}
]

export default () => (
  <Navigation json={json}/>
)
```

#### Output
```js
export default ({}) => (
  <Nav className="ml-auto" navbar>
    <NavItem>
      <NavLink href="/components/">Components</NavLink>
    </NavItem>
    <NavItem>
      <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
    </NavItem>
  </Nav>
)
```

#### Development
1. Edit src/index.js
2. Run `npm run build`
3. Submit pull-request

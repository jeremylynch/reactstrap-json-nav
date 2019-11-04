Turn JSON into a reactstrap JSON Nav

#### Install
```
npm i reactstrap-json-nav
```

#### Usage
```js
import Navigation from 'reactstrap-json-nav'

let json = [
  {name: 'Contact Us', url: '/home'}
]

export default () => (
  <Navigation json={json}/>
)
```

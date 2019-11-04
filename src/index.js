import React from 'react'
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu} from 'reactstrap';

let NormalLink = ({to, children, ...options}) => (
  <a href={to} {...options}>
    {children}
  </a>
)

let Link = ({to, children, link, ...options}) => {
  let LinkComponent = link ? link : NormalLink
  return <LinkComponent link={link} to={to} children={children} {...options}/>
}

let Item = ({url, name, children, link}) => (
  <NavItem>
    <Link
      to={url}
      className="nav-link"
      link={link}
    >
      {name ? name : children}
    </Link>
  </NavItem>
)

let DropdownItem = ({name, url, children, link}) => (
  <Link to={url} link={link} className="dropdown-item">
    {name ? name : children}
  </Link>
)

let Dropdown = ({dropdownItems, name, link}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {name}
    </DropdownToggle>
    <DropdownMenu right>
      {dropdownItems.map((item, i) => (
        <DropdownItem {...item} link={link} key={i}/>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
)

let JsonNav = ({json, link}) => (
  <Nav className="ml-auto" navbar>
    {json.map((nav, i) => {
      let Component = nav.dropdownItems ? Dropdown : Item
      return <Component {...nav} key={i} link={link}/>
    })}
  </Nav>
)

export default JsonNav

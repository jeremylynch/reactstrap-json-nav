import React from 'react'
import {
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu
} from 'reactstrap';

let NormalLink = ({to, children, ...options}) => (
  <a href={to} {...options}>
    {children}
  </a>
)

let Link = ({to, children, link, ...options}) => {
  let LinkComponent = link ? link : NormalLink
  return <LinkComponent link={link} to={to} children={children} {...options}/>
}

let Item = ({url, name, children, link, ...options}) => (
  <NavItem>
    <Link
      to={url}
      className="nav-link"
      link={link}
      {...options}
    >
      {name ? name : children}
    </Link>
  </NavItem>
)

let DropdownItem = ({name, url, children, link, ...options}) => (
  <Link to={url} link={link} className="dropdown-item" {...options}>
    {name ? name : children}
  </Link>
)

let Dropdown = ({dropdownItems, name, link, ...options}) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      {name}
    </DropdownToggle>
    <DropdownMenu right>
      {dropdownItems.map((item, i) => (
        <DropdownItem {...item} link={link} key={i} {...options}/>
      ))}
    </DropdownMenu>
  </UncontrolledDropdown>
)

let JsonNav = ({json, link, className="ml-auto", ...options}) => (
  <Nav className={className} navbar>
    {json.map((nav, i) => {
      let Component = nav.dropdownItems ? Dropdown : Item
      return <Component {...nav} key={i} link={link} {...options}/>
    })}
  </Nav>
)

export default JsonNav

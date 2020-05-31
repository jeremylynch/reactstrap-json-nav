"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactstrap = require("reactstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var NormalLink = function NormalLink(_ref) {
  var to = _ref.to,
      children = _ref.children,
      options = _objectWithoutProperties(_ref, ["to", "children"]);

  return /*#__PURE__*/_react["default"].createElement("a", _extends({
    href: to
  }, options), children);
};

var Link = function Link(_ref2) {
  var to = _ref2.to,
      children = _ref2.children,
      link = _ref2.link,
      options = _objectWithoutProperties(_ref2, ["to", "children", "link"]);

  var LinkComponent = link ? link : NormalLink;
  return /*#__PURE__*/_react["default"].createElement(LinkComponent, _extends({
    link: link,
    to: to,
    children: children
  }, options));
};

var Item = function Item(_ref3) {
  var url = _ref3.url,
      name = _ref3.name,
      children = _ref3.children,
      link = _ref3.link,
      options = _objectWithoutProperties(_ref3, ["url", "name", "children", "link"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.NavItem, null, /*#__PURE__*/_react["default"].createElement(Link, _extends({
    to: url,
    className: "nav-link",
    link: link
  }, options), name ? name : children));
};

var DropdownItem = function DropdownItem(_ref4) {
  var name = _ref4.name,
      url = _ref4.url,
      children = _ref4.children,
      link = _ref4.link,
      options = _objectWithoutProperties(_ref4, ["name", "url", "children", "link"]);

  return /*#__PURE__*/_react["default"].createElement(Link, _extends({
    to: url,
    link: link,
    className: "dropdown-item"
  }, options), name ? name : children);
};

var Dropdown = function Dropdown(_ref5) {
  var dropdownItems = _ref5.dropdownItems,
      name = _ref5.name,
      link = _ref5.link,
      options = _objectWithoutProperties(_ref5, ["dropdownItems", "name", "link"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.UncontrolledDropdown, {
    nav: true,
    inNavbar: true
  }, /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownToggle, {
    nav: true,
    caret: true
  }, name), /*#__PURE__*/_react["default"].createElement(_reactstrap.DropdownMenu, {
    right: true
  }, dropdownItems.map(function (item, i) {
    return /*#__PURE__*/_react["default"].createElement(DropdownItem, _extends({}, item, {
      link: link,
      key: i
    }, options));
  })));
};

var JsonNav = function JsonNav(_ref6) {
  var json = _ref6.json,
      link = _ref6.link,
      _ref6$className = _ref6.className,
      className = _ref6$className === void 0 ? "ml-auto" : _ref6$className,
      options = _objectWithoutProperties(_ref6, ["json", "link", "className"]);

  return /*#__PURE__*/_react["default"].createElement(_reactstrap.Nav, {
    className: className,
    navbar: true
  }, json.map(function (nav, i) {
    var Component = nav.dropdownItems ? Dropdown : Item;
    return /*#__PURE__*/_react["default"].createElement(Component, _extends({}, nav, {
      key: i,
      link: link,
      activeClassName: activeClassName
    }, options));
  }));
};

var _default = JsonNav;
exports["default"] = _default;

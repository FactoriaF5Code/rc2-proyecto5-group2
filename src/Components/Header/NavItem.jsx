import React from 'react';
const NavItem = ({ href, text }) => (
  <li>
    <a href={href}>{text}</a>
  </li>
);
export default NavItem;
import React from 'react';
import './ListItem.scss';
type ListItemTypes = {
    name: string,
    toggle: any
}
export default function ListItem({name, toggle}: ListItemTypes) {

  return (
    <li className='cmp-navigation__list-item' onClick={toggle}>
        {name}
    </li>
  )
}

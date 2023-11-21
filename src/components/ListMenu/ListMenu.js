import React from 'react';

import './ListMenu.css';

const ListMenu = (props) => (
  <ul className="ListMenu">
    {
      props.sendEntries.map((value, index) => (
        <a href={value.entry} key={index}>
          <li>
            {value.entry}
          </li>
        </a>
      ))
    }
  </ul>
);


export default ListMenu;

import React, { useState } from 'react';
import classnames from 'classnames';
import './Menu.scss';

const Menu = () => {
  const [currentItem, setCurrentItem] = useState('integration1');

  const handleClick = (value) => {
    setCurrentItem(value);
  };

  const arr = [
    {
      title: 'Integration',
      value: 'Integration1',
    },
    {
      title: 'Pricing',
      value: 'Pricing2',
    },
    {
      title: 'Settings',
      value: 'Settings1',
    },
    {
      title: 'Points and Purchases',
      value: 'integration4',
    },
    {
      title: 'Compatibility and Limitations',
      value: 'integration5',
    },
    {
      title: 'Additional featureasdasd',
      value: 'integration7',
    },
  ];

  const getButtonClass = (value) => classnames('menu-list__button', {
    'menu-list__button--active': currentItem === value,
  });

  const getListItemClass = (value) => classnames('menu-list__item', {
    'menu-list__item--active': currentItem === value,
  });

  return (
    <div className="menu">
      <ul className="menu-list">
        {arr.map(({ title, value }, index) => (
          <li key={index} className={getListItemClass(value)}>
            <button
              className={getButtonClass(value)}
              onClick={() => handleClick(value, index)}
            >
              {title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Menu;

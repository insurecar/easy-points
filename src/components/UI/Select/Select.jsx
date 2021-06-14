import React, { useRef } from 'react';
import './Select.scss';

const Select = () => {
  const ref = useRef();

  return (
    <label className="label__select">
      <select name="choose" className="select">
        <option value="" hidden>default</option>
        <option value="first">as</option>
        <option value="second">asd</option>
        <option value="third">asd</option>
      </select>
    </label>
  );
};
export default Select;

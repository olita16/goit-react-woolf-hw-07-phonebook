// import { nanoid } from 'nanoid';
// import { useSelector, useDispatch } from 'react-redux';
// import { getFilter } from 'redux/selectors';
// import { changeFilter } from 'redux/filterSlice';
// import css from '../Filter/Filter.module.css';

// const filterInputId = nanoid();

// function Filter() {
//   const value = useSelector(getFilter);
//   const dispatch = useDispatch();

//   const onChangeFilter = event => {
//     const normalizedValue = event.target.value.toLowerCase();

//     dispatch(changeFilter(normalizedValue));
//   };

//   return (
//     <div>
//       <label className={css.filterLabel}>
//         Find contacts by name
//         <input
//           type="text"
//           value={value}
//           onChange={onChangeFilter}
//           id={filterInputId}
//         />
//       </label>
//     </div>
//   );
// }

// export default Filter;

import React from 'react';

import { nanoid } from '@reduxjs/toolkit';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from '../../redux/selectors';
import { changeFilter } from '../../redux/filterSlice';
import css from '../Filter/Filter.module.css';

const filterInputId = nanoid();

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div>
      <label className={css.filterLabel}>
        Find contacts by name
        <input
          type="text"
          value={value}
          onChange={onChangeFilter}
          id={filterInputId}
        />
      </label>
    </div>
  );
};

export default Filter;

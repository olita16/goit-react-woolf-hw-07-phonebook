import { nanoid } from 'nanoid';
import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { changeFilter } from 'redux/filterSlice';
import css from '../Filter/Filter.module.css';

const filterInputId = nanoid();

function Filter() {
  const value = useSelector(getFilter);
  const dispatch = useDispatch();

  const onChangeFilter = event => {
    const normalizedValue = event.target.value.toLowerCase();

    dispatch(changeFilter(normalizedValue));
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
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
}

export default Filter;

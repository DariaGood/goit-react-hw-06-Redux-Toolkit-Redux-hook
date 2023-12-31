import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'redux/phonebookSlice';
import { InputFilter, P } from 'components/Style/Element.styled';

const Filter = () => {
  const filter = useSelector(state => state.filter);
  const dispatch = useDispatch();

  const onChange = event => {
    dispatch(filterContact(event.currentTarget.value));
  };

  return (
    <div>
      <P>Find contacts by name</P>
      <InputFilter
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        onChange={onChange}
        value={filter}
        placeholder="Enter name"
      />
    </div>
  );
};

export default Filter;

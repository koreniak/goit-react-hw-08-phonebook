import { useDispatch, useSelector } from "react-redux";
import { FilterField, FilterInput } from "./Filter.styled";
import { setFilter } from "redux/contacts/filterSlice";
import { selectFilter } from "redux/contacts/selectors";

const Filter = () => {
  const filter = useSelector(selectFilter)
  const dispatch = useDispatch();

  return <FilterField>
          Find contacts by name
          <FilterInput type="text" value={filter} onChange={(e) => dispatch(setFilter(e.target.value))} />
        </FilterField>
};

export default Filter;
import './searchInput.css';
import SearchIcon from '../../assets/search.png';
const SearchInput = ({ handleSearchInput }) => {
  const handleChange = (e) => {
    handleSearchInput(e.target.value);
  };

  return (
    <div className="input__container">
      <label></label>
      <input type="text" onChange={handleChange} placeholder="SEARCH" />
      <img src={SearchIcon} />
    </div>
  );
};

export default SearchInput;

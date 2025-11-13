//--- This is the component of Searching Dropdown ---//
// CSS SECTION: Dropdown

import {useState, useCallback } from "react";
import Select from 'react-select';

const ListSearch = ({ 
  options, 
  title, 
  placeholder, 
  onFilterChange, 
  value, 
  width = '300', 
  visible = true,
  menuIsOpen = true,
  searchable = true,
  clearable = true,
}) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = useCallback((option) => {
    setSelectedOption(option);
    if (onFilterChange) {
      onFilterChange(option);
  }}, [onFilterChange]);

  // hide dropdown if not visible
  if (!visible) return null; 

  // sort option
  const sortedOptions = [...options].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  return (
    <div className = "dropdown-container">
      <label>
        {/* {title}:{" "} */}
        <Select
          value = {value}
          onChange = {handleChange}
          options = {sortedOptions}
          placeholder = {placeholder}
          menuIsOpen = {menuIsOpen}
          isSearchable = {searchable}
          isClearable = {clearable}
          styles={{
            container: (base) => ({
              ...base,
              width: `${width}px`,
            }),
            menu: (base) => ({
              ...base,
              position: 'relative',
              zIndex: 1,
            })
          }}
        />
      </label>
    </div>
  );
};

export default ListSearch;

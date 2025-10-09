import {useState, useCallback } from "react";
import Select from 'react-select';

const ListSearch = ({ options, Title, placeholder, onFilterChange, value, width = '300', visible = true }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = useCallback((option) => {
    setSelectedOption(option);
    if (onFilterChange) {
      onFilterChange(option);
  }}, [onFilterChange]);

  if (!visible) return null; // ✅ Hide dropdown

  const sortedOptions = [...options].sort((a, b) =>
    a.label.localeCompare(b.label)
  );

  return (
    <div style={{ display: "flex", gap: "1rem", alignItems: "center"}}>
      <label>
        {Title}:{" "}
        <Select
          value={value}
          onChange={handleChange}
          options={sortedOptions}
          placeholder={placeholder}
          menuIsOpen={true}
          isSearchable
          isClearable
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

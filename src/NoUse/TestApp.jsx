import Select from 'react-select';
import SearchableDropdown from './components/SearchDropdown';

const allOptions = [
  { value: '', label: `All ${showCounts ? `(${filteredData.nodes.length} nodes, ${filteredData.links.length} links)` : ''}` },
  ...allTags.map(tag => ({ value: tag, label: tag })),
];

<SearchableDropdown
  value={filterTag}
  onChange={handleTagChange}
  options={allOptions}
/>

const options = [
  { value: '', label: `All ${showCounts ? `(${filteredData.nodes.length} nodes, ${filteredData.links.length} links)` : ''}` },
  ...allTags.map(tag => ({ value: tag, label: tag })),
];

const handleChange = (selectedOption) => {
  handleTagChange(selectedOption.value);
};

<Select
  value={options.find(opt => opt.value === filterTag)}
  onChange={handleChange}
  options={options}
  isSearchable
/>

export default App;
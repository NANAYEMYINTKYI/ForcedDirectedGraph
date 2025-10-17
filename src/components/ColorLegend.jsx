//--- This is the graph legend where you can check/uncheck the color ---//
// NOTE: For changing color of select/unselect go to CustomData
// CSS SECTION: Legend

import { Checkbox } from 'antd';
import './ComponentStyle.css';
import {colorScale, graphcolor} from './CustomData.jsx';

const Legend = ({label, selectedIds, setSelectedIds }) => {
  
  // NORMALIZE THE LABEL ARRAY
  const normalized = label.map((item, index) =>
    typeof item === 'object'
      ? { id: item.id, name: item.name }
      : { id: index + 1, name: item }
  );

  // LOGIC OF CHECKBOX BEHAVIOR
  const handleCheckboxChange = (id) => {
    const isSelected = selectedIds.includes(id);
    if (selectedIds.length >= normalized.length) {
      // All selected → select only clicked one
      setSelectedIds([id]);
    } else if (isSelected) {
      // Unchecking a selected one
      setSelectedIds(prev => prev.filter(itemId => itemId !== id));
    } else {
      // Checking a new one
      setSelectedIds(prev => [...prev, id]);
    }
  };

  return (
    <div className="legendbox">
      {normalized.map(list => {
        const customStyle = { '--checkbox-color': colorScale(list.id), '--unselected-color': graphcolor.inactive };
        return (
          <div 
            key = {list.id} 
            className = "legenditem"
            style={customStyle}
          >
            <Checkbox
              checked={selectedIds.includes(list.id)}
              onChange={() => handleCheckboxChange(list.id)}
            >
              {list.name}
            </Checkbox>
          </div>
        );
      })}
    </div>
  );
};

export default Legend;
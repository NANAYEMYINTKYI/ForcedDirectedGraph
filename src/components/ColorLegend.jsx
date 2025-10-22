//--- This is the graph legend where you can check/uncheck the color ---//
// NOTE: For changing color of select/unselect go to CustomData
// CSS SECTION: Legend

import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
import './ComponentStyle.css';
import {colorScale, graphcolor} from './CustomData.jsx';

const Legend = ({label, selectedIds, setSelectedIds }) => {
  
  // NORMALIZE THE LABEL ARRAY
  const normalized = label.map((item, index) => {
    return { 
      id: index + 1, groupid: item.groupid , name: item.name 
    }
  });

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

  const selectAll = () => {
    setSelectedIds(colorScale.domain());
  }

  return (
    <div>
      <button className="selectallbutton" onClick={selectAll}>
        Select All
      </button>
      <div className="legendbox">
        {normalized.map(list => {
          const customStyle = { '--checkbox-color': colorScale(list.groupid), '--unselected-color': graphcolor.inactive };
          return (
            <div 
              key = {list.id} 
              className = "legenditem"
              style={customStyle}
            >
              <FormControlLabel  
                control={
                  <Checkbox
                    checked={selectedIds.includes(list.id)}
                    onChange={() => handleCheckboxChange(list.id)}
                    size="xsmall"
                  />
                }
                label = {list.name}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Legend;

// import { Checkbox, FormGroup, FormControlLabel } from '@mui/material';
// import './ComponentStyle.css';
// import {colorScale, graphcolor} from './CustomData.jsx';

// const Legend = ({label, selectedIds, setSelectedIds }) => {
  
//   // NORMALIZE THE LABEL ARRAY
//   const normalized = label.map((item, index) => {
//     return { 
//       id: index + 1, groupid: item.groupid , name: item.name 
//     }
//   });

//   // LOGIC OF CHECKBOX BEHAVIOR
//   const handleCheckboxChange = (id) => {
//     const isSelected = selectedIds.includes(id);
//     if (selectedIds.length >= normalized.length) {
//       // All selected → select only clicked one
//       setSelectedIds([id]);
//     } else if (isSelected) {
//       // Unchecking a selected one
//       setSelectedIds(prev => prev.filter(itemId => itemId !== id));
//     } else {
//       // Checking a new one
//       setSelectedIds(prev => [...prev, id]);
//     }
//   };

//   const selectAll = () => {
//     setSelectedIds(colorScale.domain());
//   }

//   return (
//     <div>
//       <button className="selectallbutton" onClick={selectAll}>
//         Select All
//       </button>
//       <div className="legendbox">
//         {normalized.map(list => {
//           const customStyle = { '--checkbox-color': colorScale(list.groupid), '--unselected-color': graphcolor.inactive };
//           return (
//             <div 
//               key = {list.id} 
//               className = "legenditem"
//               style={customStyle}
//             >
//               <FormControlLabel  
//                 control={
//                   <Checkbox
//                     checked={selectedIds.includes(list.id)}
//                     onChange={() => handleCheckboxChange(list.id)}
//                     size="xsmall"
//                   />
//                 }
//                 label = {list.name}
//               />
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Legend;
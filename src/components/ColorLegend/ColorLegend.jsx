//--- This is the graph legend where you can check/uncheck the color ---//
// NOTE: For changing color of select/unselect go to CustomData
// CSS SECTION: Legend

import React, { useState } from "react";
import { Checkbox, FormGroup, FormControlLabel, Box } from '@mui/material';
import '../../styles/ComponentStyle.css';
import {colorScale, graphcolor} from '../../utils/CustomData';

const Legend = ({
  label, 
  groups = [], 
  selectedIds, 
  setSelectedIds 
}) => {
  
  // NORMALIZE THE LABEL ARRAY
  const normalized = label.map((item, index) => {
    return { 
      id: index + 1, groupid: item.groupid , name: item.name 
    }
  });

  // MATCHING GROUP
  const groupedData = groups.map(group => {
    const children = normalized.filter(item => item.groupid === group.groupid);
    return { ...group, children };
  });

  // FIND UNGROUPED
  const ungrouped = normalized.filter(item =>
    !groups.some(group => group.groupid === item.groupid)
  );
  
  // LOGIC OF CHECKBOX BEHAVIOR
  const handleChildToggle = (id) => {
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

  // Parent Logic
  const handleParentToggle = (children) => {
    const childIds = children.map(child => child.id);
    const allSelected = childIds.every(id => selectedIds.includes(id));
    
    if (selectedIds.length >= normalized.length) {
      setSelectedIds(prev => prev.filter(id => childIds.includes(id)));
    } else if (allSelected) {
      setSelectedIds(prev => prev.filter(id => !childIds.includes(id)));
    } else {
      setSelectedIds(prev => Array.from(new Set([...prev, ...childIds])));
    }
  };
  
  const selectAll = () => {
    setSelectedIds(colorScale.domain());
  }

  return (
    <div>
      <button 
        className = "selectallbutton" 
        onClick = {selectAll}
      >
        Select All
      </button>
      {/* For group data */}
      <div className = "legendbox">
        {groupedData.map(group => {
          // Skip empty groups
          if (group.children.length === 0) return null; 

          const childIds = group.children.map(child => child.id);
          const allSelected = childIds.every(id => selectedIds.includes(id));
          const noneSelected = childIds.every(id => !selectedIds.includes(id));
          const indeterminate = !allSelected && !noneSelected;
          const customStyle = { '--checkbox-color': colorScale(group.groupid), '--unselected-color': graphcolor.inactive };

          return (
            <div 
              key = {group.groupid} 
              className = "legendparent"
              style = {customStyle}
            >
              <FormControlLabel
                control = {
                  <Checkbox
                    checked = {allSelected}
                    indeterminate = {indeterminate}
                    onChange = {() => handleParentToggle(group.children)}
                    size = "medium"
                  />
                }
                label = {group.name}
              />
              <div
                className = "legenditem"
                style = {customStyle}
              >
                {group.children.map(child => (
                  <FormControlLabel
                    key = {child.id}
                    control = {
                      <Checkbox
                        checked = {selectedIds.includes(child.id)}
                        onChange = {() => handleChildToggle(child.id)}
                        size = "xsmall"
                      />
                    }
                    label = {child.name}
                  />
                ))}
              </div>
            </div>
          );
        })}

        {/* For ungroup data */}
        {ungrouped.length > 0 && ( 
          <div className = "legendbox">
            {ungrouped.map(item => {
              const customStyle = { '--checkbox-color': colorScale(item.groupid), '--unselected-color': graphcolor.inactive };
              return (
                <div 
                  key = {item.id} 
                  className = "legenditem"
                  style={customStyle}
                >
                  <FormControlLabel
                    control = {
                      <Checkbox
                        checked = {selectedIds.includes(item.id)}
                        onChange = {() => handleChildToggle(item.id)}
                        size="xsmall"
                      />
                    }
                    label = {item.name}
                  />
                </div>
              )
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Legend;
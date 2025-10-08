import React, {useCallback, useState} from 'react';
import * as Icons from '@ant-design/icons';
import PublicIcon from '@mui/icons-material/Public';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import TagManager from './TagManager';
import ListSearch from './ListSearch';
import './ToolBar.css'

const Toolbar = ({
  datasets,
  currentDataset,
  handleDatasetChange,
  FilterData,
  handleFilterChange,
  setFilterTag,
  projects,
  connection,
  handleTitleChange,
  handleConnectionChange,
  selectedTitle,
  selectedConnection,
  toggleToolbar,
  isCollapsed
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    // <div className={`sidebar ${isCollapsed ? "collapsed" : ""}`}>
    //   <button className="toggle-btn" onClick={toggleSidebar}>
    //     {isCollapsed ? "Expand" : "Collapse"}
    //   </button>
    //   <div className="content">
    //     {!isCollapsed && (
    //       <>
    //         <p>Home</p>
    //         <p>About</p>
    //         <p>Contact</p>
    //       </>
    //     )}
    //   </div>
    // </div>
    // <div className={`toolbar ${isCollapsed ? "collapsed" : ""}`}>
    <div>
    <div>
      <button className={'togglebutton'} onClick={toggleToolbar}>
        {isCollapsed ? <Icons.LeftOutlined /> : <Icons.RightOutlined /> } 
      </button>
    </div>
    <div>
      {/* Dataset Selector */}
      
    <div>
    </div>
      <button
       className={'toolelement'}
        aria-describedby={id}
        variant="contained"
        onClick={handleClick}
        >
        <Icons.DatabaseOutlined /> Select Dataset
      </button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
      <section className="dataset-selector">
        <div className="dataset-buttons">
          {Object.entries(datasets).map(([key, dataset]) => (
            <button
              key={key}
              className={`dataset-btn ${currentDataset === key ? 'active' : ''}`}
              onClick={() => handleDatasetChange(key)}
            >
              {dataset.name}
            </button>
          ))}
        </div>
      </section>
      </Popover>
    </div>
    <div>
      <button className={'toolelement'}>
        <Icons.PictureOutlined /> Search by Project Title
      </button>
    </div>
    <div>
      <button className={'toolelement'}>
        <Icons.UserOutlined /> Search by Contributer
      </button>
    </div>
    <div>
      <button className={'toolelement'}>
        <PublicIcon /> Search by Country
      </button>
    </div>
    <div>
      <button className={'toolelement'}>
        <Icons.FilterOutlined /> Filter by Tag
      </button>
    </div>
    <div>
      <button className={'toolelement'}>
        <Icons.BarsOutlined /> Meaning of Color
      </button>
    </div>

      {/* Tag Filter */}
      <TagManager 
        datasets={datasets}
        currentDataset={currentDataset}
        mabData={FilterData}
        onFilterChange={handleFilterChange}
        onTagSelect={setFilterTag}
        showCounts={true}
      />

      {/* Title Search */}
      {/* <ListSearch 
        options={projects}
        Title="Search by Title"
        placeholder="Input Title"
        onFilterChange={handleTitleChange}
        value={selectedTitle}
      /> */}

      {/* People Search */}
      {/* <ListSearch 
        options={connection}
        Title="Search by People"
        placeholder="Input People"
        onFilterChange={handleConnectionChange}
        visible={currentDataset === 'people'}
        value={selectedConnection}
      /> */}

      {/* Country Search */}
      {/* <ListSearch 
        options={connection}
        Title="Search by Country"
        placeholder="Input Country"
        onFilterChange={handleConnectionChange}
        visible={currentDataset === 'country'}
        value={selectedConnection}
      /> */}
    </div>
  );
};

export default Toolbar;

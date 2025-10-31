import { useState, useEffect, useMemo, useCallback, useRef } from "react";
import * as Icons from "@ant-design/icons";
import ForceDirectedGraph from "./components/ForcedGraph/ForcedDirectedGraph.jsx";
import Timeline from "./components/TimeLine/Timeline.jsx";
import Toolbar from "./components/ToolBar/ToolBar.jsx";
import Description from "./components/Description/DrawerDescription.jsx";
import useAppState from "./hooks/useAppState.jsx";
import UserActivityDetector from "./utils/UserAction.jsx"
import TagFilter from "./components/Filters/TagFilter.jsx";
import "./styles/App.css";

export default function App() {
  const {
    // state
    currentDataset,
    setCurrentDataset,
    yearRange,
    setYearRange,
    filteredData,
    setFilteredData,
    filterTag,
    setFilterTag,
    filterCountry,
    setFilterCountry,
    selectedTitle,
    setSelectedTitle,
    selectedConnection,
    setSelectedConnection,
    selectedNode,
    setSelectedNode,
    isCollapsed,
    setIsCollapsed,
    selectedRoles,
    setSelectedRoles,
    showNode,
    setShowNode,
    isPlaying,
    setIsPlaying,
    isActive, 
    setIsActive,

    // handlers
    handleDatasetChange,
    handleTitleChange,
    handleConnectionChange,
    toggleToolbar,
    closeDescription,
    handleRangeChange,
    resetFilter,

    // derived
    FilterData,
    datasets,
    projects,
    connection,
    graphProps,
  } = useAppState();

  // UI
  return (
    <div className = "app">
      <header className = "header">
        <h1>MAB Social Graph</h1>
      </header>
      <div className = "toolbar">
        <Toolbar 
          datasets={datasets}
          currentDataset={currentDataset}
          handleDatasetChange={handleDatasetChange}
          filteredData={filteredData}

          filterTag={filterTag}
          setFilterTag={setFilterTag}
          filterCountry={filterCountry}
          setFilterCountry={setFilterCountry}

          projects={projects}
          connection={connection}
          handleTitleChange={handleTitleChange}
          handleConnectionChange={handleConnectionChange}
          selectedTitle={selectedTitle}
          selectedConnection={selectedConnection}
          toggleToolbar = {toggleToolbar}
          isCollapsed = {isCollapsed}
          selectedRoles = {selectedRoles}
          setSelectedRoles = {setSelectedRoles} 
          resetFilter = {resetFilter}
        />
      </div>
      {showNode && (
        <div className = "description">
          <div style = {{display: 'inline-block' }}>
            <button className = {'closebutton'} onClick = {closeDescription}>
              <Icons.CloseOutlined /> 
            </button>
          </div>
            <Description 
              name = {showNode}
              data = {FilterData}
              nodelist = {datasets[currentDataset].nodes}
              dataset = {currentDataset}
            />
        </div>
      )}
      <div className = "app-content">
        {/* Force-directed graph component */}
        <ForceDirectedGraph {...graphProps} />
      </div>
      <div className = "buttom-controls">
        {/* Timeline */}
        <section className = "timeline-section">
          <p>Select Year Range:</p>
          <Timeline
            value = {yearRange}
            setIsPlaying = {setIsPlaying}
            isPlaying = {isPlaying}
            onChange = {handleRangeChange}
            label = "Select year range"
            width = {Math.min(750, window.innerWidth - 100)}
          />
        </section>
      </div>
    </div>
  );
};

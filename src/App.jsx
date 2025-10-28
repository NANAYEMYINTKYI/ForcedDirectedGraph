import * as Icons from "@ant-design/icons";
import ForceDirectedGraph from "./components/ForcedGraph/ForcedDirectedGraph.jsx";
import Timeline from "./components/TimeLine/Timeline.jsx";
import Toolbar from "./components/ToolBar/ToolBar.jsx";
import Description from "./components/Description/DrawerDescription.jsx";
import useAppState from "./hooks/useAppState.jsx";
import "./styles/App.css";

export default function App() {
  // ...existing code...
  const {
    // state
    yearRange,
    setYearRange,
    filteredData,
    setFilteredData,
    filterTag,
    setFilterTag,
    filterCountry,
    setFilterCountry,
    currentDataset,
    setCurrentDataset,
    selectedTitle,
    selectedConnection,
    selectedNode,
    isPlaying,
    setIsPlaying,
    isCollapsed,
    toggleToolbar,
    showNode,
    setShowNode,
    isClicked,
    handleAction,
    time,
    selectedRoles,
    setSelectedRoles,
    // derived
    FilterData,
    datasets,
    projects,
    connection,
    graphProps,
    // handlers
    handleRangeChange,
    handleDatasetChange,
    handleFilterChange,
    handleTitleChange,
    handleConnectionChange,
    closeDescription,
  } = useAppState();


  // UI
  return (
    <div className="app" onClick={handleAction}>
      {/* Header */}
      <header className="header">
        <h1>MAB Social Graph</h1>
      </header>
      <div className="toolbar">
        <Toolbar 
          datasets={datasets}
          currentDataset={currentDataset}
          handleDatasetChange={handleDatasetChange}
          FilterData={FilterData}
          handleFilterChange={handleFilterChange}
          setFilterTag={setFilterTag}
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
        />
      </div>
        {showNode && (
      <div className="description">
            <div style={{display: 'inline-block' }}>
              <button className={'closebutton'} onClick={closeDescription}>
                <Icons.CloseOutlined /> 
              </button>
            </div>
              <Description 
                // name = 'iart'
                // name = 'Germany'
                // name = 'IN THE AIR, TONIGHT'
                // name = 'ANTopolis'
                name = {showNode}
                data = {FilterData}
                nodelist = {datasets[currentDataset].nodes}
                dataset = {currentDataset}
              />
              </div>)}
      <div className="legend">
      {/* <div style={{ margin: '20px'}}>
                  {currentDataset === 'people' ? (
                    <>
                      <b style={{ color: 'white', paddingBottom: '10px', display: 'block' }}>Contributor Role Legend</b>
                      <Legend 
                        label={contributorFields}
                        groups={contributergroup}
                        selectedIds={selectedRoles}
                        setSelectedIds={setSelectedRoles}
                      />
                    </>
                  ) : (
                    <>
                      <b style={{ color: 'white', paddingBottom: '10px', display: 'block' }}>Continent Legend</b>
                      <Legend 
                        label={continentList}
                        selectedIds={selectedRoles}
                        setSelectedIds={setSelectedRoles}
                      />
                    </>
                  )}
                </div> */}
      {/* Dataset Selector */}
      {/* <section className="dataset-selector">
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
        {/* Tag Filter */}
          {/* <TagManager 
            datasets={datasets}
            currentDataset={currentDataset}
            mabData={FilterData}
            onFilterChange={handleFilterChange}
            onTagSelect= {setFilterTag}
            showCounts={true}
          />
          <ListSearch 
            options = {projects}
            Title = "Search by Title"
            placeholder = "Input Title"
            onFilterChange={handleTitleChange}
            value = {selectedTitle}
          />
          <ListSearch 
            options = {connection}
            Title = "Search by People"
            placeholder = "Input People"
            onFilterChange = {handleConnectionChange}
            visible = {currentDataset === 'people'}
            value = {selectedConnection}
          />
          <ListSearch 
            options = {connection}
            Title = "Search by Country"
            placeholder = "Input Country"
            onFilterChange = {handleConnectionChange}
            visible = {currentDataset === 'country'}
            value = {selectedConnection}
          /> */}
        </div>
      <div className="app-content">
        {/* Force-directed graph component */}
        <ForceDirectedGraph {...graphProps} />
      </div>
      <div className="buttom-controls">
        {/* Timeline */}
        <section className="timeline-section">
          <p>Select Year Range:</p>
          <Timeline
            value={yearRange}
            setIsPlaying={setIsPlaying}
            isPlaying={isPlaying}
            onChange={handleRangeChange}
            // OnPlayingChange={isPlaying => {
            //   setIsPlaying(isPlaying);
            // }}
            label="Select year range"
            width={Math.min(750, window.innerWidth - 100)} // Make responsive
          />
        </section>
      </div>
    </div>
  );
};

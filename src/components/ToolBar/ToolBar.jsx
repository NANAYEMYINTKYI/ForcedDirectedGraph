//--- This is the component of Toolbar ---//
// CSS SECTION: ToolBar, Dataset

import * as Icons from '@ant-design/icons';
import usePopover from '../../hooks/usePopover.jsx';
import ToolBarButton from './ToolBarButton.jsx';
// import TagManager from '../../utils/TagManager.jsx';
import TagFilter from '../Filters/TagFilter.jsx';
import ListSearch from '../DropDown/ListSearch.jsx';
import Legend from '../ColorLegend/ColorLegend.jsx';
import {contributorFields, continentList, contributergroup} from '../../utils/CustomData.jsx';
import '../../styles/ComponentStyle.css';


const Toolbar = ({
  datasets,
  currentDataset,
  handleDatasetChange,
  FilterData,
  handleFilterChange,
  handleCountryChange,
  setFilterTag,
  setFilterCountry,
  projects,
  connection,
  handleTitleChange,
  handleConnectionChange,
  selectedTitle,
  selectedConnection,
  toggleToolbar,
  isCollapsed, 
  selectedRoles, 
  setSelectedRoles
}) => {
  const datasetPopover = usePopover();
  const titlePopover = usePopover();
  const contributerPopover = usePopover();
  const countryPopover = usePopover();
  const countryTagPopover = usePopover();
  const tagPopover = usePopover();
  const colorPopover = usePopover();

  return (
    <div>
      <div>
        <button 
          className = {'togglebutton'} 
          onClick = {toggleToolbar}
        >
          {isCollapsed ? <Icons.LeftOutlined /> : <Icons.RightOutlined /> } 
        </button>
      </div>

      <div>
        {/* Dataset Selector */}
        <ToolBarButton
          icon = {<Icons.DatabaseOutlined />}
          label = "Select Dataset"
          showLabel = {!isCollapsed}
          visible = {true}
          popover = {datasetPopover}
          mounted = {false}
          popoverContent = {
            <div className = "dataset-buttons">
              {Object.entries(datasets).map(([key, dataset]) => (
                <button
                  key = {key}
                  className = {`dataset-btn ${currentDataset === key ? 'active' : ''}`}
                  onClick = {() => handleDatasetChange(key)}
                >
                  {dataset.name}
                </button>
              ))}
            </div>
          }
        />
      </div>

      <div>
        {/* Title Search */}
        <ToolBarButton
          icon = {<Icons.PictureOutlined />}
          label = "Search by Project Title"
          showLabel = {!isCollapsed}
          visible = {true}
          popover = {titlePopover}
          mounted = {false}
          popoverContent = {
            <ListSearch 
              options = {projects}
              title = "Search by Title"
              placeholder = "Input Title"
              onFilterChange = {handleTitleChange}
              value = {selectedTitle}
              clearable = {false}
            />
          }
        />
      </div>

      <div>
        {/* People Search */}
        <ToolBarButton
          icon = {<Icons.UserOutlined />}
          label = "Search by Contributer"
          showLabel = {!isCollapsed}
          visible = {currentDataset === 'people'}
          popover = {contributerPopover}
          mounted = {false}
          popoverContent = {
            <ListSearch 
              options = {connection}
              title = "Search by People"
              placeholder = "Input People"
              onFilterChange = {handleConnectionChange}
              visible = {currentDataset === 'people'}
              value = {selectedConnection}
              clearable = {false}
            />
          }
        />
      </div>

      <div>
        {/* Country Search */}
        <ToolBarButton
          icon = {<Icons.GlobalOutlined />}
          label = "Search by Country"
          showLabel = {!isCollapsed}
          visible = {currentDataset === 'country'}
          popover = {countryPopover}
          mounted = {false}
          popoverContent = {
            <ListSearch 
              options = {connection}
              title = "Search by Country"
              placeholder = "Input Country"
              onFilterChange = {handleConnectionChange}
              visible = {currentDataset === 'country'}
              value = {selectedConnection}
              clearable = {false}
            />
          }
        />
      </div>
      <div>

        {/* Tag Filter */}
        <ToolBarButton
          icon = {<Icons.FilterOutlined />}
          label = "Filter by Tag"
          showLabel = {!isCollapsed}
          visible = {true}
          popover = {tagPopover}
          mounted = {true}
          popoverContent = {
            // <TagManager 
            //   datasets={datasets}
            //   currentDataset={currentDataset}
            //   mabData={FilterData}
            //   onFilterChange={handleFilterChange}
            //   onTagSelect={setFilterTag}
            //   filterType='tag'
            //   showCounts={true}
            // />
            <TagFilter
              datasets={datasets}
              // processedDatasets={processedDatasets}
              currentDataset={currentDataset}
              onCountryChange={handleCountryChange}
              onCountrySelect={setFilterCountry}
              filterType='tag'
              showCounts={true}
            />
          }
        />
      </div>

      <div>
      {/* Country Tag Filter */}
        <ToolBarButton
          icon = {<Icons.FilterOutlined />}
          label = "Filter by Country"
          showLabel = {!isCollapsed}
          visible = {true}
          popover = {countryTagPopover}
          mounted = {true}
          popoverContent = {
            // <TagManager 
            //   datasets={datasets}
            //   currentDataset={currentDataset}
            //   mabData={FilterData}
            //   onCountryChange={handleCountryChange}
            //   onCountrySelect={setFilterCountry}
            //   filterType="country"
            //   showCounts={true}
            // />
            <TagFilter
              // processedDatasets={processedDatasets}
              datasets={datasets}
              currentDataset={currentDataset}
              onCountryChange={handleCountryChange}
              onCountrySelect={setFilterCountry}
              filterType='country'
              showCounts={true}
            />
          }
        />
      </div>
      <div>
        {/* Legend */}
        <ToolBarButton
          icon = {<Icons.BarsOutlined />}
          label = "Meaning of Color"
          showLabel = {!isCollapsed}
          visible = {true}
          popover = {colorPopover}
          mounted = {false}
          popoverContent = {
            currentDataset === 'people' ? (
              <>
                <b>Contributor Role Legend</b>
                <Legend 
                  label = {contributorFields}
                  groups = {contributergroup}
                  selectedIds = {selectedRoles}
                  setSelectedIds = {setSelectedRoles}
                />
              </>
            ) : (
              <>
                <b>Continent Legend</b>
                <Legend 
                  label = {continentList}
                  selectedIds = {selectedRoles}
                  setSelectedIds = {setSelectedRoles}
                />
              </>
            )
          }
        />
      </div>
    </div>
  );
};
export default Toolbar;
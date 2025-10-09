import * as Icons from '@ant-design/icons';
import Popover from '@mui/material/Popover';
import ToolBarPopover from './ToolBarPopover';
import TagManager from './TagManager';
import ListSearch from './ListSearch';
import Legend from './ColorLegend';
import {colorScale, contributorFields, continentList} from './Colorlist'
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
  const datasetPopover = ToolBarPopover();
  const TitlePopover = ToolBarPopover();
  const Contributer = ToolBarPopover();
  const Country = ToolBarPopover();
  const Tag = ToolBarPopover();
  const Color = ToolBarPopover();

  return (
    <div>
      <div>
        <button className={'togglebutton'} onClick={toggleToolbar}>
          {isCollapsed ? <Icons.LeftOutlined /> : <Icons.RightOutlined /> } 
        </button>
      </div>

      <div>
        {/* Dataset Selector */}
        <button
          className={'toolelement'}
          aria-describedby={datasetPopover.id}
          variant="contained"
          onClick={datasetPopover.handleClick}
        >
          <Icons.DatabaseOutlined /> {!isCollapsed && ('Select Dataset')}
        </button>
        <Popover
          id={datasetPopover.id}
          open={datasetPopover.open}
          anchorEl={datasetPopover.anchorEl}
          onClose={datasetPopover.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx:{borderRadius: 3},
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
        {/* Title Search */}
        <button
          className={'toolelement'}
          aria-describedby={TitlePopover.id}
          variant="contained"
          onClick={TitlePopover.handleClick}
        >
          <Icons.PictureOutlined />  {!isCollapsed && ('Search by Project Title')}
        </button>
        <Popover
          className={'Popoverelement'}
          id={TitlePopover.id}
          open={TitlePopover.open}
          anchorEl={TitlePopover.anchorEl}
          onClose={TitlePopover.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx:{borderRadius: 3},
          }}
        >
          <div style={{margin: '20px'}}>
            <ListSearch 
              options={projects}
              Title="Search by Title"
              placeholder="Input Title"
              onFilterChange={handleTitleChange}
              value={selectedTitle}
            />
          </div>
        </Popover>
      </div>

      <div>
        {/* People Search */}
        {currentDataset === 'people' && (
        <button
        className={'toolelement'}
          aria-describedby={Contributer.id}
          variant="contained"
          onClick={Contributer.handleClick}
        >
          <Icons.UserOutlined /> {!isCollapsed && ('Search by Contributer')}
        </button>
        )}
        <Popover
          className={'Popoverelement'}
          id={Contributer.id}
          open={Contributer.open}
          anchorEl={Contributer.anchorEl}
          onClose={Contributer.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx:{borderRadius: 3},
          }}
        >
          <div style={{margin: '20px'}}>
            <ListSearch 
              options={connection}
              Title="Search by People"
              placeholder="Input People"
              onFilterChange={handleConnectionChange}
              visible={currentDataset === 'people'}
              value={selectedConnection}
            />
          </div>
        </Popover>
      </div>

      <div>
        {/* Country Search */}
        {currentDataset === 'country' && (
          <button
            className={'toolelement'}
            aria-describedby={Country.id}
            variant="contained"
            onClick={Country.handleClick}
            >
            <Icons.GlobalOutlined /> {!isCollapsed && ('Search by Country')}
          </button>
        )}
        <Popover
          className={'Popoverelement'}
          id={Country.id}
          open={Country.open}
          anchorEl={Country.anchorEl}
          onClose={Country.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx:{borderRadius: 3},
          }}
        >
          <div style={{margin: '20px'}}>
            <ListSearch 
              options={connection}
              Title="Search by Country"
              placeholder="Input Country"
              onFilterChange={handleConnectionChange}
              visible={currentDataset === 'country'}
              value={selectedConnection}
            />
          </div>
        </Popover>
      </div>

      <div>
        {/* Tag Filter */}
        <button
          className={'toolelement'}
          aria-describedby={Tag.id}
          variant="contained"
          onClick={Tag.handleClick}
        >
          <Icons.FilterOutlined /> {!isCollapsed && ('Filter by Tag')}
        </button>
        <Popover
          className={'Popoverelement'}
          id={Tag.id}
          open={Tag.open}
          anchorEl={Tag.anchorEl}
          onClose={Tag.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx:{borderRadius: 3,
          },
            display: open ? 'block' : 'none',
            pointerEvents: open ? 'auto' : 'none',
          }}
          keepMounted
        >
          <div style={{margin: '20px'}}>
            <TagManager 
              datasets={datasets}
              currentDataset={currentDataset}
              mabData={FilterData}
              onFilterChange={handleFilterChange}
              onTagSelect={setFilterTag}
              showCounts={true}
            />
          </div>
        </Popover>
      </div>

      <div>
        {/* Legend */}
        <button
          className={'toolelement'}
          aria-describedby={Color.id}
          variant="contained"
          onClick={Color.handleClick}
        >
          <Icons.BarsOutlined /> {!isCollapsed && ('Meaning of Color')}
        </button>
        <Popover
          className={'Popoverelement'}
          id={Color.id}
          open={Color.open}
          anchorEl={Color.anchorEl}
          onClose={Color.handleClose}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            sx:{borderRadius: 3},
          }}
        >
          <div style={{ margin: '20px' }}>
            {currentDataset === 'people' ? (
              <>
                <b>Contributor Role Legend</b>
                <Legend 
                  colorScale={colorScale}
                  label={contributorFields}
                />
              </>
            ) : (
              <>
                <b>Continent Legend</b>
                <Legend 
                  colorScale={colorScale}
                  label={continentList}
                />
              </>
            )}
          </div>
        </Popover>
      </div>
    </div>
  );
};
export default Toolbar;


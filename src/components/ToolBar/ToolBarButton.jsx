//--- This is the UI of Toolbar button and Popover ---//
// CSS SECTION: ToolBar

import Popover from '@mui/material/Popover';
import '../../styles/ComponentStyle.css'

export default function ToolBarButton({
  icon,
  label,
  showLabel = true,
  visible,
  popover,
  mounted = false,
  popoverContent,
}) {
  if (!visible) return null;

  return (
    <div>
      <button
        className = {`toolelement ${popover.open ? "popover-open" : ""}`}
        aria-describedby = {popover.id}
        onClick = {popover.handleClick}
      >
        {icon} {showLabel && label}
      </button>

      <Popover
        className = "popoverelement"
        id = {popover.id}
        open = {popover.open}
        anchorEl = {popover.anchorEl}
        onClose = {popover.handleClose}
        anchorOrigin = {{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin = {{
          vertical: 'top',
          horizontal: 'right',
        }}
        // PaperProps = {{
        //   onMouseLeave: popover.handleClose,
        // }}
        keepMounted = {mounted}
      >
        <div style = {{ margin: '20px' }}>
          {popoverContent}
        </div>
      </Popover>
    </div>
  );
}
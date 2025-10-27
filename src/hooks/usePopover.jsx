//--- This is the function of using Popover (Not include UI) ---//

import { useState } from 'react';

export default function usePopover() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return {
    anchorEl,
    open,
    id,
    handleClick,
    handleClose,
  };
}
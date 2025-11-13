//--- This is the component of ShowFilter ---//
// CSS SECTION: ShowFilter

import {CloseOutlined} from '@ant-design/icons'
import {contributorFields, contributergroup} from '../../utils/CustomData'

export default function ShowFilter({ type, tag, setTag }) {
  if (type === "Role") {
    if (tag.length >= contributorFields.length) return;

    const selectedGroups = contributorFields
      .filter((_, index) => tag.includes(index + 1))
      .map(role => contributergroup.find(group => group.groupid === role.groupid)?.name)
      .filter((value, index, self) => self.indexOf(value) === index); // remove duplicates

    const cancel = (groupName) => {
      // Find the groupid corresponding to the groupName
      const group = contributergroup.find(g => g.name === groupName);
      if (!group) return;

      // Filter out all tags where role belongs to this group
      const updatedTag = tag.filter(index => contributorFields[index - 1].groupid !== group.groupid);
      setTag(updatedTag);
    };

    // Toggle select all when None is clicked
    const SelectAll = () => {
        const allIndices = contributorFields.map((_, i) => i + 1);
        setTag(allIndices);
    };

    return (
      <>
      {tag.length === 0 ? (
          <div className="show-filter" onClick={SelectAll}>
              <b>Roles:</b> None
              <CloseOutlined 
              />
          </div>
        ) : (
          selectedGroups.map((groupName, i) => (
            <div className="show-filter" key={i} onClick={() => cancel(groupName)}>
              <b>Roles:</b> {groupName}
              <CloseOutlined/>
            </div>
          ))
        )}
      </>
    );
  }
  if (!tag) return;

  const close = () => setTag(null);

  return (
    <div className="show-filter" onClick={close}>
      <b>{type}:</b> {tag.toUpperCase()} <CloseOutlined/>
    </div>
  );
}

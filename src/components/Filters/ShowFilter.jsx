//--- This is the component of ShowFilter ---//
// CSS SECTION: ShowFilter

import {CloseOutlined} from '@ant-design/icons'
import {contributorFields, contributergroup, continentList} from '../../utils/CustomData'

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
              <b>{type}:</b> None
              <CloseOutlined 
              />
          </div>
        ) : (
          selectedGroups.map((groupName, i) => (
            <div className="show-filter" key={i} onClick={() => cancel(groupName)}>
              <b>{type}:</b> {groupName}
              <CloseOutlined/>
            </div>
          ))
        )}
      </>
    );
  } else if (type === "Continents"){
    if (tag.length >= continentList.length) return;

    // Map selected tags to continent names
    const selectedContinents = continentList
      .filter((_, index) => tag.includes(index + 1))
      .map(field => continentList.find(c => c.name === field.name)?.name);

    const cancel = (continentName) => {
      // Filter out all tags that match this continent name
      const updatedTag = tag.filter(
        index => continentList[index - 1].name !== continentName
      );
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
            <b>{type}:</b> None
            <CloseOutlined />
          </div>
        ) : (
          selectedContinents.map((continentName, i) => (
            <div className="show-filter" key={i} onClick={() => cancel(continentName)}>
              <b>{type}:</b> {continentName}
              <CloseOutlined />
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

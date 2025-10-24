//--- This is the component of Tag ---//
// CSS SECTION: Tag

export default function Tags({ tagString }) {
  const tags = tagString
    ? tagString.replace(/[\[\]']/g, '').split(',').map(t => t.trim()).filter(t => t)
    : [];

  return (
    <div className="tag-container">
      {tags.map(tag => (
        <span
          key = {tag}
          className = "tag"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}
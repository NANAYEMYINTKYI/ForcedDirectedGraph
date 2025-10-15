
const Legend = ({colorScale, label}) => {

  // Normalize the label array
  const normalized = label.map((item, index) =>
    typeof item === 'object'
      ? { id: item.id, name: item.name }
      : { id: index + 1, name: item }
  );
    
  return (
    <div 
    style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '2rem', margin: '0.5rem' }}>
      {normalized.map((list) => (
        <div
          key={list.id}
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'white' }}
        >
           <div
            style={{
              width: 16,
              height: 16,
              backgroundColor: colorScale(list.id),
              borderRadius: 4,
              flexShrink: 0,
            }}
          />
          {list.name}
        </div>
      ))}
    </div>
  );
};

export default Legend;

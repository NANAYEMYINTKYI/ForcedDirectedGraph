import './ComponentStyle.css'

// Import all images from a folder
const imageslist = import.meta.glob("../asset/image/*.{png,jpg,jpeg,svg}", {
  eager: true,
});

const image = {};
Object.keys(imageslist).forEach((path) => {
  const fileName = path.split("/").pop();
  image[fileName] = imageslist[path].default || imageslist[path];
});

const Description = ({name, data, nodelist, dataset}) => {
  // console.log(data)
  // console.log(name)

  // const selectedNode = nodelist.find(d => d.id.toLowerCase() === name.toLowerCase());
  // const selectedTitle = data.find(d => d.Title.toLowerCase() === name.toLowerCase());
  const listselectedNode = nodelist.filter(d => d.id.toLowerCase() === name.toLowerCase());
  const listselectedTitle = data.filter(d => d.Title.toLowerCase() === name.toLowerCase());

  const selectedNode = listselectedNode[0]
  // const selectedTitle = listselectedTitle[0]
  // console.log(selectedNode)
  // console.log(listselectedTitle)

  if (selectedNode.group === 18){    
  return(
    <div className='Description'>
      {listselectedTitle.map((project, index) => (
        <div key={project.file}>
         <h2 style={{ textAlign: 'center' }}>{project.Title}</h2><br />
         <img src={image[project.file]} alt={project.Title} className="descriptionimage" /><br />
         <b>Year: </b>{project.Year}<br />
         <b>Location: </b>{project.Location}
         <hr className="section-line" />
         <h3>Description </h3>
         {project.Description}<br />
         <Tags tagString={project.Tag} />
         <a
          href={project.URL}
          style={{ display: 'block', textAlign: 'right' }}
        >
          More about {project.Title}...
        </a>
        <hr className="section-line" />
        <h3>Contributer </h3>
        <ul style={{ listStyle: 'none' }}>
          {Object.entries(
            project.contributors?.reduce((acc, contributor) => {
              const { name, position } = contributor;
              if (!acc[name]) {
                acc[name] = new Set();
              }
              acc[name].add(position);
              return acc;
            }, {})
          ).map(([name, positions], index) => (
            <li key={index}>
              <b>{name}</b> – {[...positions].join(', ')}
            </li>
          ))}
        </ul>
        {index !== listselectedTitle.length - 1 && <hr className="section-line" />}
      </div>
      ))}
    </div>
  )
  } else if (dataset === 'people'){
    return (
      <div className="Description">
        <h2 style={{ textAlign: 'center' }}>{selectedNode.label}</h2>
        <br />
        <b>Position: </b>{selectedNode.positions.join(", ")}<br />
        <hr className="section-line" />
        <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>PROJECTS</h2>
        <div className="projects">
          {selectedNode.projects.map((projectTitle, idx) => {
            const matched = nodelist.find(
              d => d.id.toLowerCase() === projectTitle.toLowerCase()
            );
            return (
              <div
                key={idx}
                style={{
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  padding: '1rem',
                }}
              >
                <h3 style={{ textAlign: 'center', marginBottom: '2.5px' }}>
                  <a
                  href={matched.url}
                  style={{ color: 'black' }}
                >
                  {projectTitle}
                  </a>
                </h3>
                <img
                  src={image[matched.file]}
                  alt={projectTitle}
                  style={{ width: '100%', maxHeight: '300px', objectFit: 'cover' }}
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Description">
        <h2 style={{ textAlign: 'center' }}>{selectedNode.label}</h2>
        <h3 style={{ textAlign: 'center' }}>Continent: {selectedNode.continent}</h3>
        <hr className="section-line" />
        <h2 style={{ textAlign: 'center', marginBottom: '5px' }}>PROJECTS</h2>
        <div>
          {/* Filter projects by country */}
          {nodelist
            .filter(project => {
              const location = project.location?.toLowerCase() || '';
              const countryName = selectedNode.id;
              return location.includes(countryName);
            })
            .map((projectTitle, idx) => (
              <div
                key={idx}
                style={{
                  marginBottom: '1rem',
                  border: '1px solid #ccc',
                  padding: '1rem',
                }}
              >
                {/* Project Title with Link */}
                <h3 style={{ textAlign: 'center', marginBottom: '5px' }}>
                  <a
                    href={projectTitle.url}
                    style={{ color: 'black' }}
                  >
                    {projectTitle.label}
                  </a>
                </h3>
                {/* Project Location */}
                <p style={{ textAlign: 'center', marginBottom: '5px', fontStyle: 'italic' }}>
                  <b>Location:</b> {projectTitle.location}
                </p>
                {/* Project Image */}
                {image[projectTitle.file] && (
                  <img
                    src={image[projectTitle.file]}
                    alt={projectTitle.label}
                    style={{
                      width: '100%',
                      maxHeight: '300px',
                      objectFit: 'cover'
                    }}
                  />
                )}
              </div>
            ))}
        </div>
      </div>
    );
  }
};

export default Description;

function Tags({ tagString }) {
  const tags = tagString
    ? tagString.replace(/[\[\]']/g, '').split(',').map(t => t.trim()).filter(t => t)
    : [];

  return (
    <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', margin: '5px 0' }}>
      {tags.map(tag => (
        <span
          key={tag}
          style={{
            padding: '6px 6px',
            backgroundColor: '#f0f0f0',
            color: '#333',
            border: '1px solid #2c2c2cff',
            borderRadius: '4px',
            fontSize: '14px',
            // userSelect: 'none',
          }}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}


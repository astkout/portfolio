// function ProjectItem({ image, name }) {
//     return (
//       <div className="projectItem">
//         <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
//         <h3>{name}</h3>
//       </div>
//     );
//   }
  
//   export default ProjectItem;

import React from "react";

function ProjectItem({ image, name, link }) {
  const handleClick = () => {
    // Open the link in a new tab or window when the image is clicked
    window.open(link, "_blank");
  };

  return (
    <div className="projectItem" onClick={handleClick}>
      <div style={{ backgroundImage: `url(${image})` }} className="bgImage" />
      <h3>{name}</h3>
    </div>
  );
}

export default ProjectItem;

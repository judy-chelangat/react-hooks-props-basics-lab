import React from "react";

function About({bio}) {
  if(!bio.bio){
    return (
      <div id="about">
      <h2>About Me</h2>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={bio.links.github}>{bio.links.github}</a> {/* Link to GitHub */}
      <a href={bio.links.linkedin}>{bio.links.linkedin}</a> {/* Link to LinkedIn */}  
    </div>
    )
  }
  else
  {
  return (
    <div id="about">
      <h2>About Me</h2>
      <p>{bio.bio}</p>
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={bio. links.github}>{bio.links.github}</a> {/* Link to GitHub */}
      <a href={bio.links.linkedin}>{bio.links.linkedin}</a> {/* Link to LinkedIn */}  
    </div>
  );
  }
}

export default About;

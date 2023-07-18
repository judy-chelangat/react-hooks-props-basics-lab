import React from "react";

function Links({link}){
    return (
    <div>
<h3>Links</h3>
<a href = {link.links.github}>github</a>
<a href ={link.links.linkedin}>LinkedIn</a>
</div>
    )
}

export default Links;
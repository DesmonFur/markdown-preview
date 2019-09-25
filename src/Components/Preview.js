import React from "react";
import marked from 'marked'
export default function Preview(props) {
  console.log(props);
  return (
    <div>
      {/* <h1>{props.markdown}</h1> */}
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.markdown)}} />
    </div>
  );
}

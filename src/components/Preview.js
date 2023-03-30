import React from 'react';
import {marked} from 'marked';

marked.setOptions({
  renderer: new marked.Renderer(),
  gfm: true,
  breaks: true,
  headerIds: false,
  // Start heading levels at level 3
  headerLevelStart: 3
});

function Preview(props) {
  const markdown = marked(props.markdown);

  return (
    <div>
      <h2>Preview</h2>
      <div id="preview" dangerouslySetInnerHTML={{ __html: markdown }} />
    </div>
  );
}

export default Preview;

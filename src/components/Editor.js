import React from 'react';

function Editor(props) {
  const handleChange = (event) => {
    props.onMarkdownChange(event.target.value);
  };

  return (
    <div>
      <h2>Editor</h2>
      <textarea id="editor" value={props.markdown} onChange={handleChange} />
    </div>
  );
}

export default Editor;

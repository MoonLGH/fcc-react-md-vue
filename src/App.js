import React, { useState } from 'react';
import Editor from './components/Editor';
import Preview from './components/Preview';

function App() {
  const [markdown, setMarkdown] = useState(`# Welcome to my Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres a code snippet, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. But the list goes on...

And if you want to embed images, this is how you do it:

![React Logo w/ Text](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/240px-React-icon.svg.png)
`);

  const handleMarkdownChange = (newMarkdown) => {
    setMarkdown(newMarkdown);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <Editor markdown={markdown} onMarkdownChange={handleMarkdownChange} />
        </div>
        <div className="column">
          <Preview markdown={markdown} />
        </div>
      </div>
    </div>
  );
}

export default App;

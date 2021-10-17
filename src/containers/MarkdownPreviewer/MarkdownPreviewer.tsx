/* eslint-disable no-useless-concat */
import { useState } from "react";
import marked from "marked";
//import "./style.scss";

const defaultText = "# Emad Armoun" + "\r\n" +
  "## Full-stack JavaScript Developer" + "\r\n" +
  "### sub header" + "\r\n" +
  "Heres some code, `<div></div>`, between 2 backticks." + "\r\n" +
  "```// this is multi-line code:" + "\r\n" +
  "return multiLineCode;" + "\r\n" +
  "```" + "\r\n" +
  "> Block Quotes!" + "\r\n" +
  "- And of course there are lists." + "\r\n" +
  "  - Some are bulleted." + "\r\n" +
  "1. And there are numbered lists too." + "\r\n" +
  "1. Use just 1s if you want!" + "\r\n" +
  "<br/>" +
  "![It's me](https://raw.githubusercontent.com/Em-IT/netherland-explorer/master/src/assets/images/me.jpg)" +
  "<br/>" + "\r\n" +
  "There's also [links](https://www.freecodecamp.org), and" + "\r\n" +
  "**Bolded Item**";

marked.setOptions({
  breaks: true
});

export const MarkdownPreviewer = () => {
  const [text, setText] = useState(defaultText);
  const handleChangeTA = (e: any) => {
    setText(e.target.value);
  }
  
  const createMarkup = ()=> {
    return {
      __html: marked(text)
    }
  }

  return (
    <>
      <div className="box" id="text-area-box">
        <label>Please enter your markdown code here</label>
        <textarea id="editor" rows={7} value={text} onChange={handleChangeTA}></textarea>
      </div>

      <div className="box" id="preview-box">
        <div id="preview" dangerouslySetInnerHTML={createMarkup()}>
        </div>
      </div>
      </>
  )
}

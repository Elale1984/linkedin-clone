import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
  const newArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRigt">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle("Dev Jobs Are on the Rise", "Top News - less than 1% unemployment.")}
      {newArticle("Study as A Lifestyle", "Its not a task, it is definition.")}
      {newArticle("Now Hiring Developers", "Big Tech is on the rise!")}
      {newArticle("Teach to Learn", "How to master any subject.")}
      {newArticle("Remote Work", "Welcome to your new office.")}
      {newArticle("Eat, Sleep, Code", "Do what you love.")}
    </div>
  );
}

export default Widgets;

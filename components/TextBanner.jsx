"use client";
import Styles from "../styles/rss.css";

function TextBanner(props) {
  return (
    <div id="rssBlock" className=" flex h-40 items-center whitespace-nowrap">
      <p className="cnnContents ">
        <span className="marqueeStyle whitespace-nowrap font-tyk text-wh2 text-orangebase">
          {" "}
          {props.text} {props.text}{" "}
        </span>
      </p>
    </div>
  );
}

export default TextBanner;

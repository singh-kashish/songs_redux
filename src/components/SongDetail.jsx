import React from "react";
import { connect } from "react-redux";

const SongDetail = ({ song }) => {
  if (!song) {
    return (
      <div className="ui card">
        <div className="content">
          <div className="header">Select a Song</div>
        </div>
      </div>
    );
  }
  return (
    <div className="ui card">
      <div className="content">
        <div className="header">
          <h3>Details for:</h3>
        </div>
        <div className="content">
          <p>Title : {song.title}</p>
          <p>Duration : {song.duration}</p>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => {
  return { song: state.selectedSong };
};
export default connect(mapStateToProps)(SongDetail);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
              <div className="item" key={song.title}>
                <div className="right floated content">
                <button 
                    className="ui button primary"
                    onClick={() => this.props.selectSong(song)}>
                    Select
                </button>
                </div>
                <div className="content">
                    {song.title}
                </div>
              </div>
            );
        });
    }
    render () {
        // console.log(this.props)
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

// WHAT IS HAPPENING IN THE mapStateToProps FUNCTION:
// we are going to take out state object (essentially all of the data in our Redux strore), and we're going to run some calculation that will cause that data to show up as props inside of our componenet.
const mapStateToProps = state => {
    // the state variable here will be our entire list of songs from the reducer & our currently selected song reducer
    // console.log(state);

    return { songs: state.songs };
}

export default connect(mapStateToProps, {
    // selectSong: selectSong <-- which can also be written as:
    selectSong //this gets passed as a prop into our component
})(SongList);

// react-redux will always:
// 1.) Import { connect } from 'react-redux';
// 2.) Export default connect(mapStateToProps)(ComponentName);
// 3.) Define mapStateToProps and it will always:
    // A.) get a first argument of `state` 
    // B.) return an object that is going to show up as props inside of our component
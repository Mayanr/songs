import { combineReducers } from 'redux';

// this is a static list (does not change), so no need to pass any arguments here
const songsReducer = () => {
    return [
        { title: 'No Scrubs', duration: '4:05' },
        { title: 'Macarena', duration: '2:35' },
        { title: 'All Star', duration: '3:19' },
        { title: 'I Want it That Way', duration: '4:10' }
    ];
};

// this changes when an action takes place (a song is selected)
const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    };
    return selectedSong
};

// these keys will show up inside of our state object
export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});
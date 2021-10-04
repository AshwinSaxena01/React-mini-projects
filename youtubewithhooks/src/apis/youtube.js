import axios from 'axios';

const KEY = 'AIzaSyDGMdzxWErMbxj-qd-9uEexwdZTULwfhWg';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY

    }
});




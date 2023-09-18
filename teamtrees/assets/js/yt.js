const youtubeKey = 'AIzaSyDzXNXk8c3gYjyas2K5-zcSyKf-Ss8FJoc';
const youtubeUser = 'UCKBr-qe7gjVJRQ7r2qIfGkg';
const getYouTubeviews = document.getElementById('getYouTubeviews');
let getYoutTube = () => {
    fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${youtubeUser}&key=${youtubeKey}`)
    .then(response => {
        return response.json()
    })
    .then(data => {
        console.log(data);
        getYouTubeviews.innerHTML = data["items"][0].statistics.viewCount;
    })
      .catch(error => console.log('error', error));
}
getYoutTube();
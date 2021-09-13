document.addEventListener('DOMContentLoaded', () => {
    /*
      All audio and images curtosey of archive.org. What a solid website!
    */
    const src = [
      [
        // "", "Kontrol", "music/Kontrol.mp3", "images/favicon.png"
        "", "Kontrol", "music/Kontrol.mp3", ""
      ],
      [
        "", "Falling Fast", "music/Falling Fast.mp3", ""
      ],
      [
        "", "Lonely", "music/Lonely.mp3", ""
      ]
 
    ];
    
    for (x = 0; x < src.length; x++) {
      var s = src[x];
      var number = parseInt(x) + 1;
      var artist = document.createTextNode(number + ": " + s[0]);
      var track_name = document.createTextNode(s[1]);
      
      var listItem = document.createElement('div');
      var artist_text = document.createElement('h5');
      var track_text = document.createElement('p');
      
    //   artist_text.appendChild(artist);
      track_text.appendChild(track_name);
      
      listItem.appendChild(artist_text);
      listItem.appendChild(track_text);
      
      listItem.classList.add('item');
      listItem.dataset.index = x;
      
      document.getElementById('list-mplayer').appendChild(listItem);
    }
    displayTrack(0);
    
    var listItems = document.querySelectorAll('.item');
    listItems.forEach(el => {
      el.onclick = () => {
        displayTrack(el.dataset.index);
      };
    });
    
    function displayTrack(x) {
      var active = document.querySelector('.is-active');
      if (active) {
        active.classList.remove('is-active'); 
      }
      var el = document.getElementById('list-mplayer').children[x];
      el.classList.add('is-active');
      var s = src[x],
          artist = s[0],
          track = s[1],
          audio = s[2],
          img = s[3],
          number = parseInt(x) + 1;
    //   document.getElementById('title-mplayer').innerText = number + ": " + artist;
    //   document.getElementById('title-mplayer').innerText = number + ": " + artist;
      document.getElementById('song_title').innerText = track;
      var albumArt = document.getElementById('art-mplayer');
      albumArt.src = img;
      albumArt.alt = artist + " " + track;
      document.getElementById('audio').src = audio;
    }
  })
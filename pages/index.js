<!DOCTYPE html>
<html>
  <head>
    <title>Wonderwall Typing Test</title>
  </head>
  <body>
    <div id="video-container">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/bx1Bh8ZvH84?autoplay=1&controls=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
    <div id="typing-test">
      <h2>Wonderwall Typing Test</h2>
      <p>Start typing the lyrics below:</p>
      <p id="lyrics"></p>
      <input type="text" id="user-input" autofocus>
      <p id="speed"></p>
      <p id="accuracy"></p>
    </div>
    <script>
      const lyrics = "Today is gonna be the day that they're gonna throw it back to you";
      const lyricArray = lyrics.split(" ");
      const lyricsElement = document.getElementById("lyrics");
      const userInput = document.getElementById("user-input");
      const speedElement = document.getElementById("speed");
      const accuracyElement = document.getElementById("accuracy");
      let currentIndex = 0;
      let correct = 0;
      let incorrect = 0;
      function updateLyrics() {
        let newLyrics = "";
        for (let i = 0; i < lyricArray.length; i++) {
          if (i === currentIndex) {
            newLyrics += "<span class='current'>" + lyricArray[i] + "</span> ";
          } else {
            newLyrics += lyricArray[i] + " ";
          }
        }
        lyricsElement.innerHTML = newLyrics;
      }
      updateLyrics();
      userInput.addEventListener("input", function() {
        if (userInput.value.endsWith(" ")) {
          if (userInput.value.trim() === lyricArray[currentIndex]) {
            correct++;
          } else {
            incorrect++;
          }
          currentIndex++;
          updateLyrics();
          userInput.value = "";
          const accuracy = correct / (correct + incorrect) * 100;
          accuracyElement.innerHTML = "Accuracy: " + accuracy.toFixed(2) + "%";
        }
        const speed = currentIndex / ((Date.now() - startTime) / 60000);
        speedElement.innerHTML = "Speed: " + speed.toFixed(2) + " wpm";
      });
      let startTime = Date.now();
    </script>
    <style>
      #video-container {
        margin-bottom: 20px;
      }
      #typing-test {
        max-width: 600px;
        margin: 0 auto;
        text-align: center;
      }
      #lyrics {
        font-size: 24px;
        line-height: 1.5;
        margin: 20px 0;
      }
      .current {
        font-weight: bold;
      }
      input[type=text] {
        font-size: 24px;
        padding: 10px;
        margin-bottom: 20px;
        border: none;
        border-bottom: 2px solid #ccc;
        text-align: center;
      }
      p {
        margin-bottom: 10px;
      }
    </style>
  </body>
</html>

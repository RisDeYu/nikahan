window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky", this.window.scrollY > 0)
  })
  
  
  // Set the date we're counting down to
  var countDownDate = new Date("May 05, 2024 09:0:00").getTime();
  
  // Update the count down every 1 second
  var x = setInterval(function() {
  
    // Get today's date and time
    var now = new Date().getTime();
      
    // Find the distance between now and the count down date
    var distance = countDownDate - now;
      
    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
    // Output the result in an element with id="demo"
    //document.getElementById("hitung-mundur").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
    document.getElementById("days").innerText = days,
    document.getElementById("hours").innerText = hours,
    document.getElementById("minutes").innerText = minutes,
    document.getElementById("seconds").innerText = seconds;
      
    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "Akad Nikah Telah Dilaksanakan";
    }
  }, 1000);
  
  
  function myFunction() {
  
    // Copy the text inside the text field
    navigator.clipboard.writeText("4790483435");
    
    // Alert the copied text
    //alert("Ingin menyalin nomor rekening?");
  }
  
  function myFunction1() {
    
    // Copy the text inside the text field
    navigator.clipboard.writeText("026101088836500");
  
    // Alert the copied text
    //alert("Ingin menyalin nomor rekening?");
  }
  
  const PlayPause = document.getElementById('play-pause');
  const Mute = document.getElementById('mute');
  const Audio = document.querySelector('audio ');
  
  let song_Playing = true;
  
  function putarAudio(){
    song_Playing = true;
    Audio.play();
    PlayPause.classList.add('active');
  
    // nampilin ikon
    PlayPause.innerHTML = '<ion-icon name="pause-circle-outline"></ion-icon>';
  }
  
  function stopAudio(){
    song_Playing = false;
    Audio.pause();
    PlayPause.classList.remove('active');
  
    //gaanti ikonnya
    PlayPause.innerHTML = '<ion-icon name="play-circle-outline"></ion-icon>';
  }
  
  //tombol play pause
  PlayPause.addEventListener("click",() => (song_Playing ? stopAudio() : putarAudio()));
  
  
  //tombol mute
  Mute.addEventListener("click",fMute);
  
  function fMute(){
    if(Audio.muted){
      Audio.muted = false;
      //gaanti ikonnya
      Mute.innerHTML = '<ion-icon name="volume-high-outline"></ion-icon>';
    }
    else{
      Audio.muted = true;
      // nampilin ikon
      Mute.innerHTML = '<ion-icon name="volume-mute-outline"></ion-icon>';
    }
  }
  
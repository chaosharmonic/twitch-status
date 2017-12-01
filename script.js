function stream(user){
  var span = "#" + user;
  var icon = span + "-icon";
  var url = 'https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?';
  $.getJSON(url, function(data) {
    if(data.stream === null){
      $(icon).addClass("offline");
      $(span).text("Offline");
    }
    else {
      $(span).text("Playing " + data.stream.channel.game + " - " + data.stream.channel.status)
    }
  });
}

stream("freecodecamp");
stream("lffn");
stream("Mang0");
stream("westballz");
stream("xd1x");

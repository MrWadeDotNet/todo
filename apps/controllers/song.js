  app.controller("SongCtrl", function($scope) {
  $scope.title = "Song Controller";
  $scope.macaroni = "";


  $scope.songs = [{
    name: "Song One",
    album: "Album One",
    artist: "Artist One"
  },
  {
    name: "Song Two",
    album: "Album Two",
    artist: "Artist Two"
  },
  {
    name: "Song Three",
    album: "Album Three",
    artist: "Artist Three"
  }];

  $scope.addSong = function() {
    $scope.songs.push({
      name: $scope.newSong,
      album: $scope.newAlbum,
      arist: $scope.newArtist 
    });
    
    $scope.newSong = "";
    $scope.newAlbum = "";
    $scope.newArtist = "";
  };

  $scope.killSong = function(songs) {
    var songsIndex = $scope.songs.indexOf(songs);
    if (songsIndex >= 0) {
    $scope.songs.splice(songsIndex, 1);
    }
  };

});

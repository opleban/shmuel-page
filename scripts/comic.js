var ComicViewer = (function(){
  var IMG_BASE_PATH = 'assets/images/EscapeComics/ESCAPE_color_';
  return {
    init:function(){
      var currentImage = document.getElementById('thumbnail-1');
      currentImage.className += ' selected';
      var fullPageImage = document.getElementById('full-page');
      var thumbnails = document.getElementsByClassName('thumbnail');
      for (var i=1; i<=thumbnails.length; i++){
        var thumbnail = thumbnails[i-1];
        //prefetches images upon init
        var image = new Image();
        image.src = IMG_BASE_PATH + i + '.jpg';
        (function(i){
          thumbnail.addEventListener('click', function(e){
            e.preventDefault();
            var pageNumber = i;
            fullPageImage.setAttribute('src', IMG_BASE_PATH + pageNumber + '.jpg');
            currentImage.className = 'thumbnail';
            this.className += ' selected';
            currentImage = this;
          });
        }(i));
      }
    }
  };
}());

document.addEventListener('DOMContentLoaded', function(){
  if (document.getElementById('comics-page'))
    ComicViewer.init();
});
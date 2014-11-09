var ComicViewer = (function(){
  var IMG_BASE_PATH = 'assets/images/EscapeComics/ESCAPE_color_';
  return {
    init:function(){
      var currentImage = document.getElementById('thumbnail-1');
      currentImage.className += ' selected';
      var fullPageImage = document.getElementById('full-page');
      var thumbnails = document.getElementsByClassName('thumbnail');
      for (var i=0; i<thumbnails.length; i++){
        var thumbnail = thumbnails[i];
        var prefetchRequest = new XMLHttpRequest();
        prefetchRequest.open('GET', IMG_BASE_PATH + i + '.jpg');
        (function(i){
          thumbnail.addEventListener('click', function(e){
            e.preventDefault();
            var pageNumber = i+1;
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
  ComicViewer.init();
});
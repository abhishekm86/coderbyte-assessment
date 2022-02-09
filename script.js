(function(){
  var handleClick = function(evt){
    evt.preventDefault();
    var progessWrap = document.querySelectorAll(".progress-wrapper");
    var progessBars = document.querySelectorAll(".progress-bar");
    progress = 0;
    var intVar = window.setInterval(function(){
      if(progress > 100) {
        window.clearInterval(intVar);
        Array.prototype.map.call(progessBars, function(c, i){
          c.querySelector('.progress-text').innerText = "100%";
          c.style.width = "100%";
        });
        return;
      };
      Array.prototype.map.call(progessBars, function(c, i){
        if(progress === 0) {
          progessWrap[i].style.overflow = "hidden";
        } else {
          progessWrap[i].style.overflow = "visible";
        }
        c.querySelector('.progress-text').innerText = progress +"%";
        c.style.width = progress +"%";
      });
      progress += 10;
    }, 500);
  };
  var button = document.querySelector("#triggerProgress");
  button.addEventListener("click",handleClick)
})();
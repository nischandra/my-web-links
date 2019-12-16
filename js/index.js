$(function() {
  if (screen.width < 768) {
      typeWriter(".welcome","true",50);
    setTimeout(() => {
        $("div.welcome").fadeOut();
        $("div.text").show();
    }, 5000);
  }
  else {
    $("div.welcome").remove();
    $("div.text").show();
  }
});

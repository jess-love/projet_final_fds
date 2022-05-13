document.ready(function () {
  "#menu".click(function () {
    this.toggleClass("fa-times");
    ".principal .navbar".toggleClass("nav-toggle");
  });
  window.on("scroll load", function () {
    "#menu".removeClass("fa-times");
    ".principal .navbar".removeClass("nav-toggle");
    if (window.scrollTop() > 68) {
      "header .principal .header-2".addClass("header-active");
    } else {
      "header .principal .header-2".removeClass("header-active");
    }
  });

  ".home_principal .home-slider".owlCarousel({
    items: 1,
    nav: true,
    dots: false,
    autoplay: true,
    autoplayTimeout: 80000,
    loop: true,
  });

  ".small-image img".click(function () {
    this.addClass("image-active").siblings().removeClass("image-active");
    let image = this.attr("src");
    ".big-image img".attr("src", image);
  });

  ".gallery .btns".click(function () {
    let filter = this.attr("data-filter");
    if (filter === "all") {
      ".gallery .box".show(400);
    } else {
      ".gallery .box".not("." + filter).hide(200);
      ".gallery .box".filter("." + filter).show(400);
    }

    this.addClass("button-active").siblings().removeClass("button-active");
  });
});

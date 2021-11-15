$(function () {
  $(".main_slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="img/arrow-right.png" alt=""></button>',
  });
});

$(function () {
  $(".benefits_slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn2 slick-prev2"><img src="img/arrow-left.png" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn2 slick-next2"><img src="img/arrow-right.png" alt=""></button>',
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 601,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

const tabsBtn = document.querySelectorAll(".tabs_nav");
const tabsItems = document.querySelectorAll(".tab_item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener("click", function () {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
      tabsBtn.forEach(function (item) {
        item.classList.remove("active");
      });

      tabsItems.forEach(function (item) {
        item.classList.remove("active");
      });

      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}

document.querySelector(".tabs_nav").click();

(function($) {
  "use strict";

  jQuery(document).ready(function($) {

    $('.homepage-slides').owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
    });

    $('.owl-carousel-items').owlCarousel({
      items: 4,
      margin: 15,
      loop: true,
      center: true,
      // nav:true,
      // navText:["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"],
      // responsive:{
      // 	0:{items: 1},
      // 	400:{items: 2},
      // 	600: {items: 3},
      // 	800: {items: 4},
      // 	1000: {items: 5},
      // }
    });


    // start off-canvus-menu
    $('.menu-trigger').on('click', function() {
      $('.off-canvas-menu, .off-canvas-overlay').addClass('active');
      return false;
    });

    $('.menu-close, .off-canvas-overlay').on('click', function() {
      $('.off-canvas-menu, .off-canvas-overlay').removeClass('active');
    });

    $('.search-trigger').on('click', function() {
      $('.search-box-input').toggleClass('active');
      return false;
    });
    // end off-canvus-menu


  });


})(jQuery());




// Start of Smooth Scroll JS
$(document).ready(function() {
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function() {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// End of  Smooth Scroll JS








function openRecipeHover(soul) {
  var recipeHoverStyle = document.getElementById(soul.id + "-recipe-wrapper");
  recipeHoverStyle.style.display = "block";
}




function closeRecipeHover(soul) {
  var id = soul.id.charAt(0) + soul.id.charAt(1);
  var recipeHoverStyle = document.getElementById(id + "-recipe-wrapper");
  recipeHoverStyle.style.display = "none";
}



// var dataScope = "data-api.txt";
var dataScope = "https://revivejuice.co/admin/api/data.php";


// start LoadCatagoryMenu
function loadCategoryMenu() {
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var AllItem = JSON.parse(this.responseText);


      var strCategoryMenu = '<ul class="tab-lists ">';
      var catLen = AllItem.category.length;
      for (var item = 0; item < catLen; item++) {
        if (item == 0) {
          strCategoryMenu += '<li id="menu-id-' + item + '" class="active">' +
            '<a class="waves-effect waves-ripple" data-toggle="tab" onclick="loadCategoryItem(' + item + ')" >' +
            AllItem.category[item].title +
            '</a></li>';
        } else {
          strCategoryMenu += '<li id="menu-id-' + item + '">' +
            '<a class="waves-effect waves-ripple" data-toggle="tab" onclick="loadCategoryItem(' + item + ')" >' +
            AllItem.category[item].title +
            '</a></li>';
        }
      }
      strCategoryMenu += '</ul>'
      document.getElementById('category-menu-div').innerHTML = strCategoryMenu;
    }
  };
  xmlhttp.open("GET", dataScope, true);
  xmlhttp.send();
}
// end LoadCatagoryMenu


// start loadCategoryItem

var cardCount = 1;
var endCount = 4;
var initialID = -1;
var innerflag = 0;
var outerflag = 0;

function loadCategoryItem(id) {
  // console.log(cName.className);
  // console.log(className);
  // console.log(id);
  cardCount = 1;
  if (initialID === id) {
    endCount += 4;
    // console.log(endCount);
  } else {
    initialID = id;
    endCount = 4;
  }
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var AllItem = JSON.parse(this.responseText);

      // console.log(AllItem);
      var strCategoryItem = '';
      var outerflag = 0;
      // console.log('outerflag '+ outerflag);
      var catLen = AllItem.category[id].sub_categories.length;
      for (var item = 0; item < catLen; item++) {
        if (item === catLen - 1) {
            outerflag = 1;
        }
        var itemLen = AllItem.category[id].sub_categories[item].items.length;
        var innerflag = 0;
        // console.log('innerflag '+innerflag);
        for (var z = 0; z < itemLen; z++) {
          if (z === itemLen - 1) {
              innerflag = 1;
          }
          var title = AllItem.category[id].sub_categories[item].items[z].title;
          var image = AllItem.category[id].sub_categories[item].items[z].image;
          var price = AllItem.category[id].sub_categories[item].items[z].price;
          var details = AllItem.category[id].sub_categories[item].items[z].details;
          var size = AllItem.category[id].sub_categories[item].items[z].item_size;

          strCategoryItem +=
          '<div class="col-xs-6 col-sm-4 col-md-3 col-lg-3">' +
            '<div class="single-menu-card hoverable z-depth-1">  ' +
              '<div class="menu-image-container">' +
                '<div class="responsive-image-wrapper">' +
                  '<img src="assets/img/' +image+ '" alt="">' +
                '</div>' +
              '</div>  ' +
              '<div class="menu-text-container">' +
                '<div class="meta-info">' +
                  '<h2 class="menu-heading">' + title + '</h2>' +
                '</div>' +
                '<div class="menu-details">' +

                  '<div class="menu-details-inner">'+
                      '<span onclick="openRecipeHover(this)" id="' + item + z + '">Recipe: <i class="recipe-icon fa fa-info-circle"></i></span>'+
                  	'<p>' + details + '</p>'+
                  '</div>'+

                  '<div class="recipe-wrapper" id="' + item + z + '-recipe-wrapper">' +
                    '<i class="recipe-close-icon fa fa-close" id="' + item + z + 'close" onclick="closeRecipeHover(this)"></i>' +
                    '<ul class="recipe-lists">';


          var recipeLen = AllItem.category[id].sub_categories[item].items[z].recipe.length;
          for (var i = 0; i < recipeLen; i++) {
            var reTitle = AllItem.category[id].sub_categories[item].items[z].recipe[i].title;
            var reImage = AllItem.category[id].sub_categories[item].items[z].recipe[i].image;

            strCategoryItem +=
                '<li class="hoverable">' +
                  '<div class="recipe-image-wrapper">' +
                    '<img src="assets/img/' + reImage + '" alt="">' +
                  '</div>' +
                  '<span>' + reTitle + '</span>' +
                '</li>';
              }

              strCategoryItem +=
                  '</ul>' +
                    '</div>' +
                  '</div>' +
                  '<div class="menu-footer-wrapper">' +
                    '<ul class="">' +
                      '<li class="size-tag waves-effect hoverable"><i class="fa fa-compress"></i><span>' + size + '</span></li>' +
                      '<li class="price-tag waves-effect hoverable z-depth-1"><i class="fa fa-dollar"></i><span>' + price + '</span></li>' +
                    '</ul>' +
                    '</di>' +
                  '</div>' +
                '</div>' +
              '</div>' +
            '</div>';

          // console.log(title + " " + image + " " + price + " " + details + " " + size);


          if (cardCount === endCount) {
            break;
          } else {
            cardCount += 1;
          }
        }
        if (cardCount === endCount) {
          break;
        }
      }
      // console.log('o '+ outerflag + ' i '+innerflag);
      if (outerflag === innerflag && innerflag === 1) {

      } else {
        strCategoryItem +=
          '<div id="moreButton" class="row pt-3">' +
          '<div class="btn-wrapper-101">' +
          '<div class="btn site-btn-Primary " onclick="loadCategoryItem(' + id + ')">Load more</div>' +
          '</div>' +
          '</div>';
      }

      // var strCategoryItem += '';
      document.getElementById('singleCategoryItem').innerHTML = strCategoryItem;
    }
  };
  xmlhttp.open("GET", dataScope, true);
  xmlhttp.send();
}
// end loadCategoryItem

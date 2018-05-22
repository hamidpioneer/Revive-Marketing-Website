(function ($) {
	"use strict";

    jQuery(document).ready(function($){

			$(".projects-titles li").on("click", function(){
				$(".projects-titles li").removeClass("isotope-active");
				$(this).addClass("isotope-active");
			});


			$(".projects-titles li").on("click", function(){
				var selector = $(this).attr('data-filter');
				$(".projects-list").isotope({
					filter: selector,
				});
			});

      $('.homepage-slides').owlCarousel({
      items: 1,
      nav: false,
      dots: true,
      loop: true,
      autoplay: true,
    });


    });


})(jQuery());

// Start of Smooth Scroll JS
$(document).ready(function(){
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
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
// End of  Smooth Scroll JS



// start menu item show code
// This is onload function
var dataScope = "data-api.txt";
function XXXhomeRequest(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var AllItem = JSON.parse(this.responseText);
      // var n = AllItem.length;
      // console.log(AllItem.category.length);

      // Category Item
      var strCategoryMenu='<ul class="tab-lists ">';
      var catLen = AllItem.category.length;
      for(var item = 0; item < catLen; item++){
        if(item>0){
          strCategoryMenu += '<li class="">'+
          '<a class="waves-effect waves-ripple" data-toggle="tab" onclick="loadCategoryItem('+ item +')">' +
          AllItem.category[item].title +
          '</a></li>';
        }else{
          strCategoryMenu += '<li class="active">'+
          '<a class="waves-effect waves-ripple" data-toggle="tab" onclick="loadCategoryItem('+ item +')">' +
          AllItem.category[item].title +
          '</a></li>';
        }
      }
      strCategoryMenu +='</ul>'
      document.getElementById('category-menu-div').innerHTML = strCategoryMenu;

      // Items Of Categories
      // var strCategoryMenu=''

      var strCategoryItem = '';
      catLen = AllItem.category[0].sub_categories.length;
      for(var item = 0; item < catLen; item++){
        var itemLen = AllItem.category[0].sub_categories[item].items.length;
        // console.log(AllItem.category[0].sub_categories[item].title + " " + itemLen);
        for(var z = 0; z < itemLen ;z++){
          var title = AllItem.category[0].sub_categories[item].items[z].title;
          var image = AllItem.category[0].sub_categories[item].items[z].image;
          var price = AllItem.category[0].sub_categories[item].items[z].price;
          var details = AllItem.category[0].sub_categories[item].items[z].details;
          var size = AllItem.category[0].sub_categories[item].items[z].item_size;

          strCategoryItem +=
          '<div class="col-sm-12 col-md-3   d-flex">'+
            '<div class="single-item-wrapper   ">'+
              '<div class="card waves-effect waves-ripple hoverable" >'+
                '<div class="view overlay">'+
                  '<img class="card-img-top" src="assets/img/' + image + '" alt="Card image cap">'+
                  '<a href="#!">'+
                    '<div class="mask rgba-white-slight"></div>'+
                  '</a>'+
                '</div>'+
                '<div class="card-body">'+
                  '<h4 class="card-title">' + title + '</h4>'+
                  '<p class="card-text">' + details + '</p>'+
                '</div>'+
                '<div class="content-box-footer">'+
                  '<h5 class="price">'+
                    '<i class="fa fa-usd"></i><span>' + price +'</span>'+
                  '</h5>'+
                  '<h5 class="size"><i class="fa fa-arrows-alt"></i><span>' + size + '</span></h5>'+
                '</div>'+
                '<div class="card-hover">'+
                  '<div class="title hoverable">'+
                    '<h4 class="card-title">' + title + '</h4>'+
                    '<div class="price"><div class="price-tag"><h5 class="">'+
                      '<i class="fa fa-usd"></i><span>' + price + '</span>'+
                    '</h5></div></div>'+
                  '</div>'+
                  '<div class="details hoverable">'+
                    '<p class="card-text">' + details + '</p>'+
                  '</div>'+
                  '<div class="recipe-items">';
                  var recipeLen = AllItem.category[0].sub_categories[item].items[z].recipe.length;
                  for(var i = 0; i< recipeLen; i++){
                    var reTitle = AllItem.category[0].sub_categories[item].items[z].recipe[i].title;
                    var reImage = AllItem.category[0].sub_categories[item].items[z].recipe[i].image;
                    strCategoryItem +=
                      '<div class="round-box-img hoverable">'+
                        '<img src="assets/img/' + reImage + '" alt="" class="">'+
                        '<span>' + reTitle + '</span>'+
                      '</div>';
                  }

                  strCategoryItem +=
                  '</div>'+
                  // '<div class="price-tag">'+
                  //   '<h5 class="price">'+
                  //     '<i class="fa fa-usd"></i><span>' + price + '</span>'+
                  //   '</h5>'+
                  // '</div>'+
                '</div></div></div></div>';
          // console.log(title + " " + image + " " + price + " " + details + " " + size);

        }
      }
      // var strCategoryItem += '';
      document.getElementById('singleCategoryItem').innerHTML = strCategoryItem;
    }
  };
  xmlhttp.open("GET", dataScope, true);
  xmlhttp.send();
}

function XXXloadCategoryItem(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var AllItem = JSON.parse(this.responseText);
      // var n = AllItem.length;
      // console.log(AllItem.category.length);

      // Category Item

      // Items Of Categories
      // var strCategoryMenu=''

      var strCategoryItem = '';
      catLen = AllItem.category[id].sub_categories.length;
      for(var item = 0; item < catLen; item++){
        var itemLen = AllItem.category[id].sub_categories[item].items.length;
        for(var z = 0; z < itemLen ;z++){
          var title = AllItem.category[id].sub_categories[item].items[z].title;
          var image = AllItem.category[id].sub_categories[item].items[z].image;
          var price = AllItem.category[id].sub_categories[item].items[z].price;
          var details = AllItem.category[id].sub_categories[item].items[z].details;
          var size = AllItem.category[id].sub_categories[item].items[z].item_size;

          strCategoryItem +=
          '<div class="col-sm-6 col-md-4 col-lg-3   d-flex">'+
            '<div class="single-item-wrapper   ">'+
              '<div class="card waves-effect waves-ripple hoverable" >'+
                '<div class="view overlay">'+
                  '<img class="card-img-top" src="assets/img/' + image + '" alt="Card image cap">'+
                  '<a href="#!">'+
                    '<div class="mask rgba-white-slight"></div>'+
                  '</a>'+
                '</div>'+
                '<div class="card-body">'+
                  '<h4 class="card-title">' + title + '</h4>'+
                  '<p class="card-text">' + details + '</p>'+
                '</div>'+
                '<div class="content-box-footer">'+
                  '<h5 class="price">'+
                    '<i class="fa fa-usd"></i><span>' + price +'</span>'+
                  '</h5>'+
                  '<h5 class="size"><i class="fa fa-arrows-alt"></i><span>' + size + '</span></h5>'+
                '</div>'+
                '<div class="card-hover">'+
                  '<div class="title hoverable">'+
                    '<h4 class="card-title">' + title + '</h4>'+
                    '<div class="price"><div class="price-tag"><h5 class="">'+
                      '<i class="fa fa-usd"></i><span>' + price + '</span>'+
                    '</h5></div></div>'+
                  '</div>'+
                  '<div class="details">'+
                    '<p class="card-text hoverable">' + details + '</p>'+
                  '</div>'+
                  '<div class="recipe-items">';
                  var recipeLen = AllItem.category[id].sub_categories[item].items[z].recipe.length;
                  for(var i = 0; i< recipeLen; i++){
                    var reTitle = AllItem.category[id].sub_categories[item].items[z].recipe[i].title;
                    var reImage = AllItem.category[id].sub_categories[item].items[z].recipe[i].image;
                    strCategoryItem +=
                      '<div class="round-box-img hoverable">'+
                        '<img src="assets/img/' + reImage + '" alt="">'+
                        '<span>' + reTitle + '</span>'+
                      '</div>';
                  }

                  strCategoryItem +=
                  '</div>'+
                  // '<div class="price-tag">'+
                  //   '<h5 class="price">'+
                  //     '<i class="fa fa-usd"></i><span>' + price + '</span>'+
                  //   '</h5>'+
                  // '</div>'+
                '</div></div></div></div>';
          // console.log(title + " " + image + " " + price + " " + details + " " + size);

        }
      }
      // var strCategoryItem += '';
      document.getElementById('singleCategoryItem').innerHTML = strCategoryItem;
    }
  };
  xmlhttp.open("GET",dataScope, true);
  xmlhttp.send();
}

// end menu item show code

function openRecipeHover(){
	var recipeHoverStyle = document.getElementById("recipe-wrapper");
	recipeHoverStyle.style.display="block";
}
function closeRecipeHover(){
	var recipeHoverStyle = document.getElementById("recipe-wrapper");
	recipeHoverStyle.style.display="none";
}

// window.onclick = function(event) {
// 	// console.log(event.target);
// 	var innerBody = document.getElementById("recipe-wrapper");
//     if (event.target !==innerBody) {
// 			innerBody.style.display="none";
// 			innerBody.style.bottom="100%";
// 			innerBody.style.zIndex="-3";
// 			innerBody.style.opacity="0";
//     }
// }


// start New Menu card
var dataScope = "data-api.txt";
function homeRequest(){
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      var AllItem = JSON.parse(this.responseText);
      // var n = AllItem.length;
      // console.log(AllItem.category.length);

      // Category Item
      var strCategoryMenu='<ul class="tab-lists ">';
      var catLen = AllItem.category.length;
      for(var item = 0; item < catLen; item++){
        if(item>0){
          strCategoryMenu += '<li class="">'+
          '<a class="waves-effect waves-ripple" data-toggle="tab" onclick="loadCategoryItem('+ item +')">' +
          AllItem.category[item].title +
          '</a></li>';
        }else{
          strCategoryMenu += '<li class="active">'+
          '<a class="waves-effect waves-ripple" data-toggle="tab" onclick="loadCategoryItem('+ item +')">' +
          AllItem.category[item].title +
          '</a></li>';
        }
      }
      strCategoryMenu +='</ul>'
      document.getElementById('category-menu-div').innerHTML = strCategoryMenu;

      // Items Of Categories
      // var strCategoryMenu=''

      var strCategoryItem = '';
      catLen = AllItem.category[0].sub_categories.length;
      for(var item = 0; item < catLen; item++){
        var itemLen = AllItem.category[0].sub_categories[item].items.length;
        // console.log(AllItem.category[0].sub_categories[item].title + " " + itemLen);
        for(var z = 0; z < itemLen ;z++){
          var title = AllItem.category[0].sub_categories[item].items[z].title;
          var image = AllItem.category[0].sub_categories[item].items[z].image;
          var price = AllItem.category[0].sub_categories[item].items[z].price;
          var details = AllItem.category[0].sub_categories[item].items[z].details;
          var size = AllItem.category[0].sub_categories[item].items[z].item_size;

					strCategoryItem +=
						'<div class="col-sm-12 col-md-4">'+
						  '<div class="single-item-wrapper-1">'+
						    '<div class="card">'+
						      '<div class="view overlay">'+
						        '<img class="card-img-top" src="' + image + '" alt="Card image cap">'+
						        '<a>'+
						          '<div class="mask rgba-white-slight">'+
						          '</div>'+
						        '</a>'+
						      '</div>'+
						      '<div class="card-body colorGradient-FebruaryInk">'+
						        '<h4 class="card-title">' +  title+ '</h4>'+
						        '<i onclick="openRecipeHover()" class="recipe-icon fa fa-info-circle"></i>'+
						        '<div class="recipe-wrapper" id="recipe-wrapper">'+
						          '<h4>Recipes:</h4>'+
						          '<i class="recipe-close-icon fa fa-close" onclick="closeRecipeHover()"></i>'+
						          '<ul class="recipe-lists">';



            var recipeLen = AllItem.category[0].sub_categories[item].items[z].recipe.length;
                              for(var i = 0; i< recipeLen; i++){
                                var reTitle = AllItem.category[0].sub_categories[item].items[z].recipe[i].title;
                                var reImage = AllItem.category[0].sub_categories[item].items[z].recipe[i].image;
                                strCategoryItem +=
                                '<li>'+
                                  '<div class="recipe-image-wrapper">'+
                                    '<img src="assets/img/' + reImage + '" alt="">'+
                                  '</div>'+
                                  '<span>' + reTitle + '</span>'+
                                '</li>';
                              }

            strCategoryItem +=
          '</ul>' +
        '</div>' +
        '<p class="card-text  mb-4">' + details + '</p>' +
      '</div>' +
      '<div class="rounded-bottom colorGradient-GreatWhale z-depth-2">' +
        '<ul class="">' +
          '<li class="size-tag waves-effect"><i class="fa fa-compress"></i><span>' + size + '</span></li>' +
          '<li class="price-tag waves-effect"><i class="fa fa-dollar"></i><span>' + price + '</span></li>' +
        '</ul>' +
      '</div>' +
    '</div>' +
  '</div>' +
'</div>';
          // console.log(title + " " + image + " " + price + " " + details + " " + size);

        }
      }
      // var strCategoryItem += '';
      document.getElementById('singleCategoryItem').innerHTML = strCategoryItem;
    }
  };
  xmlhttp.open("GET", dataScope, true);
  xmlhttp.send();
}

let featuredContainer = document.querySelector("#featured"), strFeaturedArticles = "";
featured.forEach(i => {
  strFeaturedArticles += '<div class="col-12 col-sm-6 col-md-4 grid-item"><a href="' + i.iframe + '" class="with-caption image-link"><img class="img-thumnail" src="' + i.thumbnail + '"><div class="title-div"><span class="title">' + i.title + '</span></div></a></div>' }), featuredContainer.innerHTML = strFeaturedArticles;



let container = document.querySelector("#grid"), strArticles = "";
audio.forEach(i => {
  strArticles += '<div class="col-12 col-sm-6 col-md-4 grid-item"><a href="' + i.iframe + '" class="with-caption image-link"><img class="img-thumnail" src="' + i.thumbnail + '"><div class="title-div"><span class="title">' + i.title + '</span></div></a></div>' }), container.innerHTML = strArticles;



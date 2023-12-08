window.onload=function(){
    header();
    var divSlikeTest=document.getElementById("slike");
    if(divSlikeTest !=null){ ucitavanjeSlika();}
    var divUslugaTest=document.getElementById("usluge");
    if(divUslugaTest !=null){ ucitavanjeUsluga();}
}
    function header(){
    var nizMeni=["index.html", "about-us.html", "gallery.html",
    "contact.html","author.html"];
    var nizNaziv=["Home", "About us", "Gallery", "Contact", "Author"];
    var divLista=document.getElementById("meni");
    var ispis="<ul class='nav'>";

    for(var i=0; i<5; i++){
        ispis+="<li><a href='"+nizMeni[i]+"'>"+nizNaziv[i]+"</a><li>";
        }
    ispis+="</ul>";
    divLista.innerHTML=ispis;
    }

    document.addEventListener("DOMContentLoaded", function() {
        var imagePaths = [
            "assets/img/slike1.jpg",
            "assets/img/slike2.jpg",
            "assets/img/slike3.jpg",
            // Dodajte još slika po potrebi
        ];
    
        var galleryContainer = document.getElementById("gallery");
    
        imagePaths.forEach(function(imagePath) {
            var imgElement = document.createElement("a");
            imgElement.href = imagePath;
            imgElement.classList.add("fancybox");
            imgElement.setAttribute("data-fancybox", "gallery");
    
            var imgThumbnail = document.createElement("img");
            imgThumbnail.src = imagePath;
    
            imgElement.appendChild(imgThumbnail);
            galleryContainer.appendChild(imgElement);
        });
    
        // Inicijalizujemo Fancybox
        $(".fancybox").fancybox({
            animationEffect: "fade",
            transitionEffect: "slide",
            loop: true
        });
    });
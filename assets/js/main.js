window.onload=function(){
    header();
}
    function header(){
    var nizMeni=["#okvir", "#about-us", "#naslov",
    "#naslov2","#naslov3"];
    var nizNaziv=["Home", "About us", "Gallery", "Contact", "Author"];
    var divLista=document.getElementById("meni");
    var ispis="<ul class='nav'>";

    for(var i=0; i<5; i++){
        ispis+="<li><a href='"+nizMeni[i]+"'>"+nizNaziv[i]+"</a><li>";
        }
    ispis+="</ul>";
    divLista.innerHTML=ispis;
    }

    let srcSlajder=['assets/img/pocetna.jpg','assets/img/pocetna1.jpg'];
    setInterval(promeniPozadinu,4000);
    let trenutnaSlika=1;
    function promeniPozadinu(){
        let slajder=document.querySelector("#slajder-slike");
        
        slajder.src = srcSlajder[trenutnaSlika];
        trenutnaSlika = (trenutnaSlika+1) % srcSlajder.length;
        console.log(srcSlajder[trenutnaSlika]);
    }

    document.addEventListener("DOMContentLoaded", function() {
        var imagePaths = [
            "assets/img/slika1.jpg",
            "assets/img/slika7.jpg",
            "assets/img/slika5.jpg",
            "assets/img/slika4.jpg",
            "assets/img/slika6.jpg",
            "assets/img/slika9.jpg",
            "assets/img/slika8.jpg",
            "assets/img/slika2.jpg",
            "assets/img/slika3.jpg",
            
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
        $(".fancybox").fancybox({
            animationEffect: "fade",
            transitionEffect: "slide",
            loop: true
        });
    });
    document.addEventListener("DOMContentLoaded", function () {
        var flowerOrderFormContainer = document.getElementById("flowerOrderFormContainer");
        var flowerOrderForm = document.createElement("form");
        flowerOrderForm.id = "flowerOrderForm";
        flowerOrderFormContainer.appendChild(flowerOrderForm);

        addFormField("Ime i Prezime:", "text", "customerName", true, "Unesite ispravno ime i prezime.");
        addFormField("Email:", "email", "customerEmail", true, "Unesite ispravan email.");
        addFormField("Telefon:", "tel", "customerPhone", true, "Unesite ispravan broj telefona.");

        addSelectField("Izaberite Buket:", "bouquetType", ["Romantični Buket", "Prolećni Buket", "Ekskluzivni Buket"]);

        addDateField("Datum Dostave:", "deliveryDate");

        addTextAreaField("Dodatne Napomene:", "additionalNotes");

        var errorContainer = document.createElement("div");
        errorContainer.className = "error-message";
        flowerOrderForm.appendChild(errorContainer);

        var submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Naruči Buket";
        submitButton.addEventListener("click", validateForm);
        flowerOrderForm.appendChild(submitButton);

        function addFormField(labelText, inputType, inputId, isRequired, validationMessage) {
            var label = document.createElement("label");
            label.textContent = labelText;
            flowerOrderForm.appendChild(label);

            var input = document.createElement("input");
            input.type = inputType;
            input.id = inputId;
            input.name = inputId;
            if (isRequired) {
                input.setAttribute("required", "true");
            }
            input.setAttribute("pattern", ".*\\S.*");
            input.setAttribute("title", validationMessage);
            flowerOrderForm.appendChild(input);
        }

        function addSelectField(labelText, selectId, options) {
            var label = document.createElement("label");
            label.textContent = labelText;
            flowerOrderForm.appendChild(label);

            var select = document.createElement("select");
            select.id = selectId;
            select.name = selectId;

            for (var i = 0; i < options.length; i++) {
                var option = document.createElement("option");
                option.value = options[i];
                option.text = options[i];
                select.appendChild(option);
            }

            flowerOrderForm.appendChild(select);
        }

        function addDateField(labelText, inputId) {
            var label = document.createElement("label");
            label.textContent = labelText;
            flowerOrderForm.appendChild(label);

            var input = document.createElement("input");
            input.type = "date";
            input.id = inputId;
            input.name = inputId;

            flowerOrderForm.appendChild(input);
        }

        function addTextAreaField(labelText, textareaId) {
            var label = document.createElement("label");
            label.textContent = labelText;
            flowerOrderForm.appendChild(label);

            var textarea = document.createElement("textarea");
            textarea.id = textareaId;
            textarea.name = textareaId;
            textarea.rows = 3;
            flowerOrderForm.appendChild(textarea);
        }

        function validateForm() {
            var customerName = document.getElementById("customerName").value;
            var customerEmail = document.getElementById("customerEmail").value;
            var customerPhone = document.getElementById("customerPhone").value;
            var bouquetType = document.getElementById("bouquetType").value;
            var deliveryDate = document.getElementById("deliveryDate").value;
            var additionalNotes = document.getElementById("additionalNotes").value;
            var errorText = "";
        
        if (!validateName(customerName)) {
            errorText += "Unesite ispravno ime i prezime (najmanje 3 slova, početak velikim slovom).\n";
        }

        if (!validateEmail(customerEmail)) {
            errorText += "Unesite validan email (@gmail.com).\n";
        }

        if (!validatePhone(customerPhone)) {
            errorText += "Unesite validan broj telefona (najviše 10 cifara).\n";
        }

        if (bouquetType === "") {
            errorText += "Izaberite vrstu buketa.\n";
        }

        if (deliveryDate.trim() === "") {
            errorText += "Unesite datum dostave.\n";
        }

        errorContainer.textContent = errorText;

        if (errorText === "") {
            console.log("Ime i Prezime: " + customerName);
            console.log("Email: " + customerEmail);
            console.log("Telefon: " + customerPhone);
            console.log("Vrsta Buketa: " + bouquetType);
            console.log("Datum Dostave: " + deliveryDate);
            console.log("Dodatne Napomene: " + additionalNotes);

            document.getElementById("flowerOrderForm").reset();
        }
    }

    function validateName(name) {
        var re = /^[A-Z][a-z]{2,}$/; 
        return re.test(name);
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    function validatePhone(phone) {
        var re = /^\d{1,10}$/; 
        return re.test(phone);
    }
});

    var footer = document.createElement("footer");
    var siteName = document.createElement("div");
    var pageLinks = document.createElement("div");
    var socialIcons = document.createElement("div");
    
    siteName.innerHTML = "<p>Pretty Bloom</p>";
    
    var pages = ["Home", "About-us", "Gallery", "Contact", "Author"];
    for (var i = 0; i < pages.length; i++) {
        var pageLink = document.createElement("a");
        pageLink.href = pages[i].toLowerCase() + ".html";
        pageLink.textContent = pages[i];
        pageLinks.appendChild(pageLink);
    }
    
    var instagramIcon = document.createElement("a");
    instagramIcon.href = "https/www.instagram.com"; // Dodajte link 
    instagramIcon.innerHTML = '<img src="path/to/instagram-icon.png" alt="Instagram">';
    
    var facebookIcon = document.createElement("a");
    facebookIcon.href = "https/www.facebook.com"; // Dodajte link ka Facebook stranici
    facebookIcon.innerHTML = '<img src="path/to/facebook-icon.png" alt="Facebook">';
    
    socialIcons.appendChild(instagramIcon);
    socialIcons.appendChild(facebookIcon);
    
    footer.appendChild(siteName);
    footer.appendChild(pageLinks);
    footer.appendChild(socialIcons);
    
    document.body.appendChild(footer);

    document.addEventListener("DOMContentLoaded", function () {
        document.getElementById("author-img").src = "assets/img/author.jpg";
        document.getElementById("author-name").textContent = "Andjela Mitrovic 136/22";
        document.getElementById("author-school").textContent = "Hello,I was born on December 15, 2003, in Brus. Currently, I live in Belgrade. I have completed high school at the School of Economics. Currently, I am studying at the Faculty of ICT";

    });
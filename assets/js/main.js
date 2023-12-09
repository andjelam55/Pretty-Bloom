window.onload=function(){
    header();
}
    function header(){
    var nizMeni=["#okvir", "#about-us", "#naslov1",
    "#naslov2","author.html"];
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
    
        // Inicijalizujemo Fancybox
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

        // Dodavanje polja za unos i labela
        addFormField("Ime i Prezime:", "text", "customerName", true);
        addFormField("Email:", "email", "customerEmail", true);
        addFormField("Telefon:", "tel", "customerPhone", true);
        
        // Dodavanje polja za izbor buketa
        addSelectField("Izaberite Buket:", "bouquetType", ["Romantični Buket", "Prolećni Buket", "Ekskluzivni Buket"]);

        // Dodavanje polja za unos datuma dostave
        addDateField("Datum Dostave:", "deliveryDate");

        // Dodavanje polja za dodatne napomene
        addTextAreaField("Dodatne Napomene:", "additionalNotes");

        // Dodavanje div-a za prikazivanje grešaka
        var errorContainer = document.createElement("div");
        errorContainer.className = "error-message";
        flowerOrderForm.appendChild(errorContainer);

        // Dodavanje dugmeta za slanje
        var submitButton = document.createElement("button");
        submitButton.type = "button";
        submitButton.textContent = "Naruči Buket";
        submitButton.addEventListener("click", validateForm);
        flowerOrderForm.appendChild(submitButton);

        function addFormField(labelText, inputType, inputId, isRequired) {
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
            textarea.rows = 4; // Prilagodi visinu textarea-e prema potrebama
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

            // Validacija
            if (customerName.trim() === "") {
                errorText += "Unesite ime i prezime.\n";
            }

            if (customerEmail.trim() === "") {
                errorText += "Unesite email.\n";
            } else if (!validateEmail(customerEmail)) {
                errorText += "Unesite validan email.\n";
            }

            if (customerPhone.trim() === "") {
                errorText += "Unesite telefon.\n";
            } else if (!validatePhone(customerPhone)) {
                errorText += "Unesite validan broj telefona.\n";
            }

            if (bouquetType === "") {
                errorText += "Izaberite vrstu buketa.\n";
            }

            if (deliveryDate.trim() === "") {
                errorText += "Unesite datum dostave.\n";
            }

            // Prikazivanje grešaka
            errorContainer.textContent = errorText;

            // Ako nema grešaka, može se izvršiti naručivanje
            if (errorText === "") {
                // Ovde možeš dodati logiku za naručivanje buketa, slanje podataka na server, ili šta god ti treba
                console.log("Ime i Prezime: " + customerName);
                console.log("Email: " + customerEmail);
                console.log("Telefon: " + customerPhone);
                console.log("Vrsta Buketa: " + bouquetType);
                console.log("Datum Dostave: " + deliveryDate);
                console.log("Dodatne Napomene: " + additionalNotes);

                // Očisti polja nakon uspešnog naručivanja
                document.getElementById("flowerOrderForm").reset();
            }
        }

        // Funkcija za validaciju email adrese
        function validateEmail(email) {
            var re = /\S+@\S+\.\S+/;
            return re.test(email);
        }

        // Funkcija za validaciju broja telefona
        function validatePhone(phone) {
            var re = /^\d{10}$/; // Primer: 1234567890
            return re.test(phone);
        }
    });
function changeName()
        {
            const refTitle = getreferenceTitle()
            const nombre = prompt("¿Cual es tu nombre?")
            refTitle.innerHTML ="¡Hola: " + nombre + "! :)";
        }

        function getreferenceTitle()
        {
            return document.getElementById("name");
        }
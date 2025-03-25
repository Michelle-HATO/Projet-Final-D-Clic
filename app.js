document.querySelector("form").addEventListener("submit", function(e) {
    e.preventDefault();
    
    const inputs = this.querySelectorAll("input, textarea");
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = "red";
            isValid = false;
        } else {
            input.style.borderColor = "#f56f3a";
        }
    });
    
    if (isValid) {
        // Envoyer le formulaire (AJAX ici)
        alert("Message envoyé avec succès !");
        this.reset();
    } else {
        alert("Veuillez remplir tous les champs requis.");
    }
});
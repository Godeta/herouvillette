// Fonction pour ouvrir une modal
function ouvrirModal(id) {
    document.getElementById(id).style.display = "block";
}

// Fonction pour fermer une modal
function fermerModal(id) {
    document.getElementById(id).style.display = "none";
}

// Fermer la modal si on clique en dehors
window.onclick = function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
}

import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["userDays"]; // Cibles pour les jours de chaque utilisateur

  toggle(event) {
    const user = event.currentTarget.dataset.user; // Récupère le nom de l'utilisateur à partir du bouton
    this.userDaysTargets.forEach((element) => {
      if (element.dataset.user === user) {
        element.classList.toggle("hidden"); // Ajoute/retire la classe `hidden`
      }
    });
  }
}

import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="highlight"
export default class extends Controller {
  static values = { selectedDays: Array };
  connect() {
    console.log("highlight controller");
    const guardDay = this.element.querySelector(".guard-day");
    if (!guardDay) return;

    const dayName = guardDay.textContent.trim(); // Récupère le texte du jour
    if (this.selectedDaysValue.includes(dayName)) {
      this.element.classList.add("highlight-day");
    }
  }
}

import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="highlight"
export default class extends Controller {
  static values = { selectedDays: Array };
  connect() {
    console.log("highlight controller");
    //console.log(this.selectedDaysValue[0].days);
    let days = this.selectedDaysValue[0].days;
    console.log(days);
    
    let user = this.selectedDaysValue[0].user;
    const guardDay = this.element.querySelector(".guard-day");
    if (!guardDay) return;

    const dayName = guardDay.textContent.trim(); // Récupère le texte du jour
    //console.log(dayName.toLowerCase());
    days.forEach((day) => {
      //console.log(day);

      if (day === dayName.toLowerCase()) {
        this.element.classList.add("highlight-day");
      }
    });
  }
}

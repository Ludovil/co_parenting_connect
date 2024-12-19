import { Controller } from "@hotwired/stimulus";

// Connects to data-controller="highlight"
export default class extends Controller {
  static values = { selectedDays: Array, user: String };
  connect() {
    console.log("Hello from the highlight controller");
    //console.log(this.selectedDaysValue[0].days);
    console.log(this.selectedDaysValue);
    this.selectedDaysValue.forEach((element) => {
      const days = element.days;
      const day_user = element.user;

      console.log(`User: ${day_user}`);
      console.log("Days:", days);

      const guardDay = this.element.querySelector(".guard-day");
      if (!guardDay) return;
      const dayName = guardDay.textContent.trim(); // Récupère le texte du jour

      days.forEach((day) => {
        console.log(`  ${day} is assigned to ${day_user}`);
        if (day === dayName.toLowerCase() && this.userValue === day_user) {
          this.element.classList.add("user-one-highlight-day");
        } else if (day === dayName.toLowerCase()) {
          this.element.classList.add("user-two-highlight-day");
        }
      });
    });
  }
}

import { Controller } from "@hotwired/stimulus"
import Calendar from "@toast-ui/calendar"

export default class extends Controller {
  static targets = ["calendar", "modal", "eventForm", "eventTitle", "eventStartDate", "eventEndDate", "eventNotes", "eventUserIds", "eventChildIds"]

  static values = []

  connect() {
    this.initializeCalendar()
    console.log("hello");

  }

  initializeCalendar() {
    this.calendar = new Calendar(this.calendarTarget, {
      defaultView: 'week',
      usageStatistics: false,
      calendars: [
        {
          id: '1',
          name: 'Work Calendar',
          color: '#FFFFFF',
          bgColor: '#9E5FFF',
          dragBgColor: '#9E5FFF',
          borderColor: '#9E5FFF',
        }
      ],
      template: {
        event: (event) => {
          let assignees = event.assignees ? event.assignees.map(assignee => assignee.full_name).join(", ") : '';
          return `
            <div class="event-tooltip">
              <strong>${event.title}</strong>
              <p>Assignees: ${assignees}</p>
            </div>
          `;
        }
      },
      clickTime: this.openEventModal.bind(this)
    })

    this.calendar.createEvents([
      {
        id: 'event1',
        calendarId: 'cal1',
        title: 'Weekly Meeting',
        start: '2024-12-30T09:00:00',
        end: '2024-12-30T10:00:00',
      },
    ]);
  }

  openEventModal(event) {
    const modal = this.modalTarget;
    if (modal) {
      modal.style.display = "block"; // Show the modal
    } else {
      console.error("Modal not found!");
    }

    // Fill in the form fields with the clicked event's start and end time
    console.log(event.currentTarget);

    //this.eventStartDateTarget.value = event.start.toISOString().slice(0, 16); // Format to datetime-local
    //this.eventEndDateTarget.value = event.end.toISOString().slice(0, 16); // Format to datetime-local

    // Load family members into the form
    // this.fetchFamilyMembers();
  }

  fetchFamilyMembers() {
    fetch("/family_members")
      .then(response => response.json())
      .then(data => {
        //this.eventUser
        this.IdsTarget.innerHTML = ''; // Clear current options
        data.family_members.forEach(member => {
          const option = document.createElement("option");
          option.value = member.id;
          option.textContent = member.full_name;
          //this.eventUser IdsTarget.appendChild(option);
        });
      });
  }

  addEvent(event) {
    event.preventDefault(); // Prevent form submission


    this.formdata = Object.fromEntries(new FormData(this.eventFormTarget))

    // Envoi de la requête POST au serveur pour sauvegarder l'événement
    fetch(this.eventFormTarget.action, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(this.formdata)
    })
    .then(response => response.json())
    .then(data => {
      if (data.id) {
        this.calendar.createEvents([{
          id: data.id, //l'ID de l'événement retourné par le serveur
          calendarId: "1",
          title: data.title,
          category: "time",
          start: data.start_date,
          end: data.end_date,
          notes: data.notes,
          assignees: data.user_ids.map(userId => ({ id: userId }))
        }]);

        this.closeEventModal();
      } else {
        // message d'erreur ??
        console.error("Erreur lors de la création de l'événement", data.errors);
      }
    })
    .catch(error => {
      console.error("Erreur de communication avec le serveur", error);
    });
  }

  closeEventModal() {
    this.modalTarget.style.display = "none"; // Hide the modal
    this.eventFormTarget.reset(); // Reset the form fields
  }

  // Navigation methods
  changeView(event) {
    const viewType = event.target.value;
    this.calendar.changeView(viewType);
  }

  prev() {
    this.calendar.prev();
  }

  next() {
    this.calendar.next();
  }

  today() {
    this.calendar.today();
  }
}

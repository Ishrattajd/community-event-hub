document.addEventListener("DOMContentLoaded", () => {
    const eventList = document.getElementById("event-list");

    // Sample event data
    const events = [
        { name: "Beach Cleanup Drive", date: "2025-04-15", slots: 20 },
        { name: "Charity Marathon", date: "2025-05-02", slots: 50 },
        { name: "Community Gardening", date: "2025-04-22", slots: 15 },
        { name: "Food Donation Drive", date: "2025-04-30", slots: 30 }
    ];

    // Function to render events
    function loadEvents() {
        eventList.innerHTML = "";
        events.forEach(event => {
            const eventCard = document.createElement("div");
            eventCard.classList.add("event-card");
            eventCard.innerHTML = `
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Volunteer Slots: ${event.slots}</p>
                <a href="event-details.html" class="btn">View Details</a>
            `;
            eventList.appendChild(eventCard);
        });
    }

    // Load events when page loads
    loadEvents();
});
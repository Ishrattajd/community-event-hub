document.addEventListener("DOMContentLoaded", () => {
    const eventForm = document.getElementById("eventForm");
    
    eventForm.addEventListener("submit", (e) => {
        e.preventDefault();
        
        const eventName = document.getElementById("eventName").value;
        const eventDate = document.getElementById("eventDate").value;
        const eventSlots = document.getElementById("eventSlots").value;
        
        const newEvent = {
            name: eventName,
            date: eventDate,
            slots: eventSlots
        };
        
        let events = JSON.parse(localStorage.getItem("events")) || [];
        events.push(newEvent);
        localStorage.setItem("events", JSON.stringify(events));
        
        alert("Event created successfully!");
        window.location.href = "events.html";
    });
});

/* ========== GT Footer Date & Time ========== */
document.addEventListener("DOMContentLoaded", () => {
  const dateTimeEl = document.querySelector(".gt-date-time");

  if (!dateTimeEl) return; // se non esiste, esce senza errori

  function updateDateTime() {
    const now = new Date();

    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const month = `<span class="gt-month">${monthNames[now.getMonth()]}</span>`;
    const day = `<span class="gt-day">${now.getDate()}</span>`;
    const year = `<span class="gt-year">${now.getFullYear()}</span>`;

    const hours = `<span class="gt-hours">${String(now.getHours()).padStart(
      2,
      "0"
    )}</span>`;
    const minutes = `<span class="gt-minutes">${String(
      now.getMinutes()
    ).padStart(2, "0")}</span>`;
    const colon = `<span class="gt-colon">:</span>`;

    dateTimeEl.innerHTML = `${month} ${day}, ${year} - ${hours}${colon}${minutes}`;
  }

  updateDateTime();
  setInterval(updateDateTime, 60 * 1000); // aggiorna ogni minuto
});

(function () {
  "use strict";

  const deadline = new Date("2026-10-05T17:00:00-04:00");
  const now = new Date();
  const status = document.querySelector("[data-deadline-status]");
  const year = document.querySelector("[data-current-year]");

  if (year) {
    year.textContent = String(now.getFullYear());
  }

  if (!status) {
    return;
  }

  const milliseconds = deadline.getTime() - now.getTime();

  if (milliseconds <= 0) {
    status.textContent = "The 2026 submission deadline has passed.";
    return;
  }

  const days = Math.ceil(milliseconds / 86400000);
  status.textContent =
    days === 1
      ? "One day remains until the submission deadline."
      : `${days} days remain until the submission deadline.`;
})();


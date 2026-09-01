const eventDate = new Date('2026-10-17T15:00:00+08:00').getTime();
const ids = ['days', 'hours', 'minutes', 'seconds'];
function updateCountdown() {
  const left = Math.max(0, eventDate - Date.now());
  const values = [Math.floor(left / 86400000), Math.floor(left / 3600000) % 24, Math.floor(left / 60000) % 60, Math.floor(left / 1000) % 60];
  ids.forEach((id, i) => document.getElementById(id).textContent = String(values[i]).padStart(2, '0'));
}
updateCountdown();
setInterval(updateCountdown, 1000);

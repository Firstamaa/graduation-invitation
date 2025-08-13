// Set tanggal wisuda
const wisudaDate = new Date("October 11, 2025 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = wisudaDate - now;

    if (distance <= 0) {
        document.getElementById("timer").innerHTML = "Selamat Wisuda! 🎓";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = 
        `${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}

setInterval(updateCountdown, 1000);

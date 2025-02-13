// 📅 প্রতিদিন তারিখ পরিবর্তন হবে
function updateDate() {
    let today = new Date();
    let dateString = today.toLocaleDateString('bn-BD', { year: 'numeric', month: 'long', day: 'numeric' });

    document.getElementById('date1').textContent = dateString;
    document.getElementById('date2').textContent = dateString;
    document.getElementById('date3').textContent = dateString;
    document.getElementById('date4').textContent = dateString;
}

updateDate();

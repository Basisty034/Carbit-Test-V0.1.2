document.getElementById('submit-btn').addEventListener('click', function() {
    const yourName = document.getElementById('your-name').value;
    const waifuHusbuName = document.getElementById('waifu-husbu-name').value;

    if (yourName && waifuHusbuName) {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('loading-overlay').style.display = 'flex';

        setTimeout(() => {
            const resultContainer = document.getElementById('result-container');
            const progressBar = document.getElementById('progress-bar');
            const resultYourName = document.getElementById('result-your-name');
            const resultWaifuHusbuName = document.getElementById('result-waifu-husbu-name');
            const resultText = document.getElementById('result-text');
            const resultImage = document.getElementById('result-image');

            resultYourName.textContent = yourName;
            resultWaifuHusbuName.textContent = waifuHusbuName;

            const percentage = Math.floor(Math.random() * 101);
            progressBar.style.width = percentage + '%';
            progressBar.textContent = percentage + '%';

            if (percentage < 25) {
                progressBar.style.backgroundColor = '#ff4d4d'; // Red
            } else if (percentage < 50) {
                progressBar.style.backgroundColor = '#ffbf00'; // Orange
            } else if (percentage < 75) {
                progressBar.style.backgroundColor = '#4d94ff'; // Blue
            } else {
                progressBar.style.backgroundColor = '#66ff66'; // Green
            }

            let conditionText = '';
            let imageSrc = '';

            if (percentage < 5) {
                conditionText = 'Raja Karbit ini mah';
                imageSrc = 'IMG/Raja Karbit ini mah.jpeg';
            } else if (percentage < 10) {
                conditionText = 'Sepuh Karbit coy!';
                imageSrc = 'IMG/Sepuh Karbit.jpeg';
            } else if (percentage < 15) {
                conditionText = 'Karbit Banget Luwh';
                imageSrc = 'IMG/Sepuh Karbit.jpeg';
            } else if (percentage < 20) {
                conditionText = 'Waifu Orang di claim dasar karbit';
                imageSrc = 'IMG/penyakit kumat claim claim waifu orang.jpeg';
            } else if (percentage < 25) {
                conditionText = 'Karbit banyak tingkah';
                imageSrc = 'IMG/karbit banyak tingkah.jpeg';
            } else if (percentage < 30) {
                conditionText = 'Terdeteksi Karbit yagesya';
                imageSrc = 'IMG/terdeteksi karbit harap waspada ygy.jpeg';
            } else if (percentage < 35) {
                conditionText = 'Sepertinya kalian masih asing';
                imageSrc = 'IMG/kalian masih asing.jpeg';
            } else if (percentage < 40) {
                conditionText = 'Agak asing tapi gpp';
                imageSrc = 'IMG/agak asing tapi gpp.jpeg';
            } else if (percentage < 45) {
                conditionText = 'Akrab meski baru kenal';
                imageSrc = 'IMG/akrab meski baru kenal.jpeg';
            } else if (percentage < 50) {
                conditionText = 'dikit lagi jadi MC coy';
                imageSrc = 'IMG/dikit lagi jadi MC.jpeg';
            } else if (percentage < 55) {
                conditionText = 'terdeteksi MC nih:v';
                imageSrc = 'IMG/terdeteksi MC ygy.jpeg';
            } else if (percentage < 60) {
                conditionText = 'udah deket tapi kurang';
                imageSrc = 'IMG/udah deket tapi kurang.jpeg';
            } else if (percentage < 65) {
                conditionText = 'teman tapi mesra';
                imageSrc = 'IMG/temen tapi mesra.jpeg';
            } else if (percentage < 70) {
                conditionText = 'ada MC coy duh kapan yh';
                imageSrc = 'IMG/ada MC coy duh kapan yh.jpeg';
            } else if (percentage < 75) {
                conditionText = 'sepuh pemikat wanita nih';
                imageSrc = 'IMG/sepuh pemikat wanita nih.jpeg';
            } else if (percentage < 80) {
                conditionText = 'hampir sempurna';
                imageSrc = 'IMG/hampir sempurna.jpeg';
            } else if (percentage < 85) {
                conditionText = 'Kalian sangat cocok!';
                imageSrc = 'IMG/kalian sangat cocok.jpeg';
            } else if (percentage < 90) {
                conditionText = 'serasi banget tuh';
                imageSrc = 'IMG/serasi banget tuh.jpeg';
            } else if (percentage < 95) {
                conditionText = 'hubungan yang harmonis';
                imageSrc = 'IMG/hubungan yang harmonis.jpeg';
            } else {
                conditionText = 'Kalian Pasangan yang Setia!';
                imageSrc = 'IMG/pasangan setia.jpeg';
            }

            resultText.innerHTML = `Sepertinya kecocokan kalian <b>${percentage}%</b> .... ${conditionText}`;
            resultImage.src = imageSrc;

            document.getElementById('loading-overlay').style.display = 'none';
            resultContainer.style.display = 'flex';
            resultContainer.style.flexDirection = 'column';
            resultContainer.style.alignItems = 'center';
        }, 2000); // Simulate loading animation for 2 seconds
    } else {
        alert('Silakan isi kedua nama.');
    }
});
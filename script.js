document.getElementById('yesButton').addEventListener('click', function() {
    // Body arka planını değiştir
    document.body.style.backgroundImage = "url('benim.jpg')";
    // Eğer background-color'u sıfırlamak istersen:
    // document.body.style.backgroundColor = "transparent";
});

document.addEventListener('DOMContentLoaded', () => {
    const noButton = document.getElementById('noButton');
    const yesButton = document.getElementById('yesButton');
    const surpriseMessage = document.getElementById('surpriseMessage');
    const container = document.querySelector('.container');
    // const body = document.body; // Bu satırı kaldırdık, çünkü body'nin stilini burada değiştirmeyeceğiz

    // "Hayır" butonuna fare ile yaklaşıldığında veya tıklandığında hareket etme
    noButton.addEventListener('mouseover', () => moveNoButton());
    noButton.addEventListener('click', (e) => {
        e.preventDefault(); // Tıklama olayını engeller, böylece sayfayı yenilemez
        moveNoButton();
    });

    function moveNoButton() {
        const containerRect = container.getBoundingClientRect();
        const buttonRect = noButton.getBoundingClientRect();

        // Butonun container içinde kalmasını sağlamak için sınırlar
        const maxX = containerRect.width - buttonRect.width - 20; // 20px boşluk bırak
        const maxY = containerRect.height - buttonRect.height - 20; // 20px boşluk bırak

        // Rastgele yeni pozisyonlar oluştur
        const newX = Math.random() * maxX;
        const newY = Math.random() * maxY;

        // Butonun konumunu ayarla
        noButton.style.position = 'absolute';
        noButton.style.left = `${newX}px`;
        noButton.style.top = `${newY}px`;
        noButton.style.transform = 'translate(0, 0)'; // CSS'teki transformu sıfırla
    }

    // "Evet" butonuna tıklandığında yapılacaklar
    yesButton.addEventListener('click', () => {
        // Butonları gizle
        noButton.style.display = 'none';
        yesButton.style.display = 'none';

        // Sürpriz mesajı göster
        surpriseMessage.classList.remove('hidden');

        // Opsiyonel: Container'ın yüksekliğini ayarlayarak mesajı daha iyi ortalayabiliriz
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.style.minHeight = 'auto'; // Min yüksekliği kaldır
        container.style.height = 'fit-content'; // İçeriğe göre yüksekliği ayarla
        // Bu iki satırı da kaldırabilirsiniz, eğer container'ın kendi arka planını korumasını isterseniz:
        // container.style.backgroundColor = 'transparent'; /* Container arka planını şeffaf yapabilirsin */
        // container.style.boxShadow = 'none'; /* Container gölgesini kaldırabilirsin */
        // container.style.border = 'none'; /* Container kenarlığını kaldırabilirsin */
    });
});
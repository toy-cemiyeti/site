function aktifButon(sayfa) {
    let butonlar = document.querySelectorAll(".menu button");

    butonlar.forEach(btn => btn.classList.remove("active"));

    if (sayfa === "ana") butonlar[0].classList.add("active");
    if (sayfa === "dusunceler") butonlar[1].classList.add("active");
    if (sayfa === "kitaplar") butonlar[2].classList.add("active");
    if (sayfa === "katki") butonlar[3].classList.add("active");
}

function sayfaGoster(sayfa) {
    aktifButon(sayfa);

    let icerik = document.getElementById("icerik");

    if (sayfa === "ana") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Hoş geldin</h2>
                <p>
                    Toy, düşünce, fikir ve kitap etrafında şekillenen sade bir alan.
                    Gürültü değil, anlam arayanlar için.
                </p>
            </section>

            <section class="cards">
                <div class="card">
                    <h3>Fikirler ve Düşünceler</h3>
                    <p>Toplum, insan, anlam ve düzen üzerine yazılar.</p>
                </div>

                <div class="card">
                    <h3>Kitaplar</h3>
                    <p>Okunması gereken eserler ve kısa değerlendirmeler.</p>
                </div>

                <div class="card">
                    <h3>Katkı Ekle</h3>
                    <p>Yakında sen de kendi fikrini paylaşabileceksin.</p>
                </div>
            </section>
        `;
    }

    if (sayfa === "dusunceler") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Fikirler ve Düşünceler</h2>
                <p>Burada düşünce yazıları yer alacak.</p>
            </section>

            <section class="liste">
                <div class="liste-kart tiklanabilir" onclick="detayGoster('toplum')">
                    <h3>Toplum neden dağılır?</h3>
                    <p>
                        Bir toplum önce ortak dilini, sonra güvenini, sonra da ortak anlamını kaybeder.
                    </p>
                </div>

                <div class="liste-kart tiklanabilir" onclick="detayGoster('insan')">
                    <h3>İnsan neden yönsüzleşir?</h3>
                    <p>
                        Hedefini kaybeden insan, zamanla kendi iradesini de başkalarına bırakır.
                    </p>
                </div>

                <div class="liste-kart tiklanabilir" onclick="detayGoster('gurultu')">
                    <h3>Gürültü çağında düşünmek</h3>
                    <p>
                        Sürekli konuşan bir dünyada derin düşünebilmek başlı başına bir dirençtir.
                    </p>
                </div>
            </section>
        `;
    }

    if (sayfa === "kitaplar") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Kitaplar</h2>
                <p>Burada önerilen kitaplar ve kısa notlar yer alacak.</p>
            </section>

            <section class="liste">
                <div class="liste-kart">
                    <h3>Suç ve Ceza</h3>
                    <p>
                        İnsan vicdanı, suç, kibir ve iç çöküş üzerine sert bir roman.
                    </p>
                </div>

                <div class="liste-kart">
                    <h3>1984</h3>
                    <p>
                        Güç, denetim, dil ve düşüncenin nasıl yönetildiğini gösteren ağır bir eser.
                    </p>
                </div>

                <div class="liste-kart">
                    <h3>Tutunamayanlar</h3>
                    <p>
                        Modern insanın parçalanmış zihnini ve yalnızlığını hissettiren güçlü bir metin.
                    </p>
                </div>
            </section>
        `;
    }

    if (sayfa === "katki") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Katkı Ekle</h2>
                <p>
                    Bu alan şimdilik hazırlık aşamasında. Yakında kullanıcı katkıları açılacak.
                </p>
            </section>

            <section class="katki-form">
                <label>Başlık</label>
                <input type="text" placeholder="Fikrinin başlığı">

                <label>Düşüncen</label>
                <textarea rows="6" placeholder="Buraya düşünceni yaz..."></textarea>

                <button disabled>Yakında Aktif</button>
            </section>
        `;
    }
}

function detayGoster(konu) {
    let icerik = document.getElementById("icerik");
    aktifButon("dusunceler");

    if (konu === "toplum") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>

            <section class="hero">
                <h2 class="detay-baslik">Toplum neden dağılır?</h2>
                <p class="detay-metin">
                    Bir toplum bir günde dağılmaz. Çöküş sessiz başlar.
                    Önce insanlar birbirine güvenmemeye başlar.
                    Sonra ortak dil bozulur; kelimeler anlamını kaybeder.
                    Ardından adalet duygusu zedelenir ve herkes sadece kendi küçük alanını korumaya çalışır.
                    O noktadan sonra toplum, birlikte yaşayan insan topluluğu olmaktan çıkar;
                    aynı yerde duran ama birbirine yabancılaşmış kalabalığa dönüşür.
                </p>
            </section>
        `;
    }

    if (konu === "insan") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>

            <section class="hero">
                <h2 class="detay-baslik">İnsan neden yönsüzleşir?</h2>
                <p class="detay-metin">
                    İnsan yönünü kaybettiğinde bunu hemen fark etmez.
                    Önce amaçlarını erteler, sonra kendi kararlarını başkalarının sesine göre şekillendirir.
                    Sürekli tüketen ama üretmeyen zihin zamanla iradesini zayıflatır.
                    Yönsüzlük çoğu zaman tembellik değil, dağılmış dikkat ve amaçsızlıktır.
                    Bu yüzden insan önce neyi reddettiğini değil, neye hizmet ettiğini sormalıdır.
                </p>
            </section>
        `;
    }

    if (konu === "gurultu") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>

            <section class="hero">
                <h2 class="detay-baslik">Gürültü çağında düşünmek</h2>
                <p class="detay-metin">
                    Bugünün dünyasında herkes konuşuyor ama çok az insan düşünüyor.
                    Gürültü, sadece ses değildir; sürekli akan içerik, dağılmış dikkat ve tepki bağımlılığıdır.
                    Derin düşünce ise yavaşlık ister, yalnızlık ister, mesafe ister.
                    Bu yüzden gerçekten düşünebilen insan artık sıradan değil, dirençli insandır.
                    Çünkü çağ, insanı anlamaya değil anlık tepkiye zorluyor.
                </p>
            </section>
        `;
    }
}

sayfaGoster("ana");

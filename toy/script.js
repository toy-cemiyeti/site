const kitap = [
    "İnsan anlam arayan bir varlıktır.",
    "Korku üzerine gidilmezse büyür.",
    "Hayat bir yolculuktur, varış değil.",
    "Bilgelik, insanın ne bilmediğini bilmesidir.",
    "Sorgulanmamış hayat, yaşanmaya değmez.",
    "İnsan düşündüğü kadar özgürdür.",
    "Adalet, herkesin kendi işini yapmasıdır.",
    "Hakikat çoğu zaman rahatsız eder.",
    "Bilgi, ruhun hatırlamasıdır.",
    "Gerçek bilgelik, hiçbir şey bilmediğini bilmektir.",
    "İnsan doğruyu aramaktan vazgeçtiği anda kaybolur.",
    "Adalet, güçlü olanın değil, doğru olanın yanında durmaktır.",
    "Ruh kirlenirse, insan karanlığa alışır.",
    "İnsan gördüğüne değil, anladığına inanır.",
    "Doğruyu söylemek, çoğu zaman yalnız kalmayı gerektirir.",
    "İnsan kendini tanımadan dünyayı anlayamaz.",
    "Gerçeklik, çoğu zaman görünenden farklıdır.",
    "Bilgelik, cevap bulmak değil doğru soruyu sormaktır.",
    "İnsan alıştığı yalanı, rahatsız eden gerçekten daha çok sever.",
    "Ruhunu beslemeyen hiçbir şey seni büyütmez.",
    "Hakikat, onu arayanı değil hazır olanı bulur.",
    "İnsan gerçeği değil, rahatını seçtiğinde çürür.",
    "Kendini bilmeyen, hiçbir şeyi bilemez.",
    "İnsan hakikati değil, alışkanlıklarını savunur.",
    "Bilgi olmadan güç, kör bir tehlikedir.",
    "Ruh eğitilmeden özgürlük tehlikelidir.",
    "İnsan, gördüğü dünyayı değil, anladığı dünyayı yaşar.",
    "Gerçek adalet, kimsenin görmediği yerde başlar.",
    "İnsan kendini kandırmayı bıraktığında değişim başlar.",
    "Doğruyu bilmek yetmez, ona göre yaşamak gerekir.",
    "İnsan gerçeği değil, işine geleni kabul eder.",
    "Bilgelik, cevaplardan çok sorularla büyür.",
    "Ruhunu geliştirmeyen insan, dış dünyada kaybolur.",
    "İnsan kendi içindeki kaosu çözmeden huzur bulamaz.",
    "Hakikat, çoğu zaman sessizlikte ortaya çıkar.",
    "İnsan yanlışlarını savunduğu sürece değişemez.",
    "Gerçek güç, kendini kontrol edebilmektir.",
    "İnsan dış dünyayı değil, kendi iç dünyasını yönetmelidir.",
    "Bilgi, insanı özgürleştirir ama sorumluluk yükler.",
    "İnsan kolay olanı seçtikçe zayıflar.",
    "Ruhunu beslemeyen bilgi, yük olmaktan başka bir şey değildir.",
    "İnsan gerçeği aramak yerine kaçmayı seçerse karanlıkta kalır.",
    "Doğruyu görmek cesaret ister.",
    "İnsan sadece kendisi için değil, başkaları için yaşar.",
    "İnsan sevgisiz yaşayamaz.",
    "Sevgi olan yerde korku barınamaz.",
    "İnsanı yaşatan şey, aldığı değil verdiğidir.",
    "Gerçek zenginlik, insanın kalbindedir.",
    "Türk töresinde söz, can kadar kıymetlidir.",
    "Devlet adaletle ayakta durur, zulümle yıkılır.",
    "İnsan töresini kaybederse yolunu kaybeder.",
    "Güç, başkalarını yenmek değil kendini yönetmektir.",
    "Ruh sessizlikte konuşur.",
    "İnsan korktuğu şeyin kölesi olur.",
    "Doğa yalan söylemez, insan söyler.",
    "İnsan doğadan uzaklaştıkça kendinden uzaklaşır."
];

const gunlukOneriler = [
    {
        ana: "Bugün zihnini dağıtan bir şeyi temizle.",
        detay: "Mesela gereksiz bildirimleri kapat, masanı toparla ya da seni bölen bir işi listenden çıkar."
    },
    {
        ana: "Bugün yarım bıraktığın bir işi bitir.",
        detay: "Mesela ertelediğin bir mesajı cevapla, bekleyen küçük bir işi kapat ya da açık kalan bir görevi tamamla."
    },
    {
        ana: "Bugün kısa bir yürüyüş yap ve kafanı toparla.",
        detay: "Mesela 10-15 dakika telefonsuz yürü, acele etme, sadece nefesini ve etrafı fark et."
    },
    {
        ana: "Bugün bir konuda ertelemeyi bırak.",
        detay: "Mesela sadece 5 dakika bile olsa o işe başla; önemli olan kusursuz yapmak değil, başlatmak."
    },
    {
        ana: "Bugün sessizce oturup neyi yanlış yaptığını düşün.",
        detay: "Mesela son günlerde seni yoran bir davranışını seç ve neden tekrar ettiğini dürüstçe sorgula."
    },
    {
        ana: "Bugün bedenini de zihnini de ihmal etme.",
        detay: "Mesela su iç, biraz esne, kısa bir nefes molası ver ve kendini gereksiz gürültüden uzaklaştır."
    },
    {
        ana: "Bugün küçük ve net bir adım at.",
        detay: "Mesela 10 sayfa oku, bir not çıkar, birini ara ya da ertelediğin tek bir işi başlat."
    },
    {
        ana: "Bugün gereksiz ekran süresini azalt.",
        detay: "Mesela 30 dakika telefonu bırakıp sadece düşün, oku ya da yürü."
    },
    {
        ana: "Bugün bir hedef belirle ve akşama kadar ona sadık kal.",
        detay: "Mesela bugün tek hedefin dağılmamak olsun ve dikkatini gün boyu oraya geri çek."
    },
    {
        ana: "Bugün kaçtığın şeyin üstüne git.",
        detay: "Mesela seni geren konuşmayı yap, korktuğun işe başla ya da ertelediğin meseleyi aç."
    }
];

let sonOneri = "";
let sonTema = "";
let sonCevap = "";

function aktifButon(sayfa) {
    const butonlar = document.querySelectorAll(".menu button");
    butonlar.forEach(btn => btn.classList.remove("active"));

    if (sayfa === "ana") butonlar[0].classList.add("active");
    if (sayfa === "dusunceler") butonlar[1].classList.add("active");
    if (sayfa === "kitaplar") butonlar[2].classList.add("active");
    if (sayfa === "katki") butonlar[3].classList.add("active");
    if (sayfa === "saman") butonlar[4].classList.add("active");
}

function mesajEkle(metin, tip) {
    const chat = document.getElementById("chatAlani");
    if (!chat) return;

    const div = document.createElement("div");
    div.className = "mesaj " + tip;
    div.innerText = metin;

    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

function sayfaGoster(sayfa) {
    aktifButon(sayfa);
    const icerik = document.getElementById("icerik");

    if (sayfa === "ana") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Hoş geldin</h2>
                <p>Toy, düşünce, fikir ve kitap etrafında şekillenen sade bir alan. Gürültü değil, anlam arayanlar için.</p>
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
    } else if (sayfa === "dusunceler") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Fikirler ve Düşünceler</h2>
                <p>Burada düşünce yazıları yer alacak.</p>
            </section>

            <section class="liste">
                <div class="liste-kart" onclick="detayGoster('toplum')">
                    <h3>Toplum neden dağılır?</h3>
                    <p>Bir toplum önce ortak dilini, sonra güvenini, sonra da ortak anlamını kaybeder.</p>
                </div>

                <div class="liste-kart" onclick="detayGoster('insan')">
                    <h3>İnsan neden yönsüzleşir?</h3>
                    <p>Hedefini kaybeden insan, zamanla kendi iradesini de başkalarına bırakır.</p>
                </div>

                <div class="liste-kart" onclick="detayGoster('gurultu')">
                    <h3>Gürültü çağında düşünmek</h3>
                    <p>Sürekli konuşan bir dünyada derin düşünebilmek başlı başına bir dirençtir.</p>
                </div>
            </section>
        `;
    } else if (sayfa === "kitaplar") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Kitaplar</h2>
                <p>Burada önerilen kitaplar ve kısa notlar yer alacak.</p>
            </section>

            <section class="liste">
                <div class="liste-kart">
                    <h3>Suç ve Ceza</h3>
                    <p>İnsan vicdanı, suç, kibir ve iç çöküş üzerine sert bir roman.</p>
                </div>

                <div class="liste-kart">
                    <h3>1984</h3>
                    <p>Güç, denetim, dil ve düşüncenin nasıl yönetildiğini gösteren ağır bir eser.</p>
                </div>

                <div class="liste-kart">
                    <h3>Tutunamayanlar</h3>
                    <p>Modern insanın parçalanmış zihnini ve yalnızlığını hissettiren güçlü bir metin.</p>
                </div>
            </section>
        `;
    } else if (sayfa === "katki") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Katkı Ekle</h2>
                <p>Bu alan şimdilik hazırlık aşamasında. Yakında kullanıcı katkıları açılacak.</p>
            </section>

            <section class="katki-form">
                <label>Başlık</label>
                <input type="text" placeholder="Fikrinin başlığı">

                <label>Düşüncen</label>
                <textarea rows="6" placeholder="Buraya düşünceni yaz..."></textarea>

                <button disabled>Yakında Aktif</button>
            </section>
        `;
    } else if (sayfa === "saman") {
        icerik.innerHTML = `
            <section class="hero">
                <h2>Şaman'a Sor</h2>
                <p>İçinde taşıdığın soruyu yaz.</p>
            </section>

            <div id="chatAlani" class="chat-alani">
                <div class="mesaj ai">Selam yolcu. İçinde taşıdığın soruyu sor. Seni dinliyorum...</div>
            </div>

            <div class="alt-bar">
                <input type="text" id="soru" placeholder="Sorunu yaz..." />
                <button onclick="cevapAl()">➤</button>
            </div>
        `;
    }
}

function detayGoster(konu) {
    const icerik = document.getElementById("icerik");
    aktifButon("dusunceler");

    if (konu === "toplum") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>
            <section class="hero">
                <h2>Toplum neden dağılır?</h2>
                <p>Bir toplum bir günde dağılmaz. Çöküş sessiz başlar. Önce insanlar birbirine güvenmemeye başlar. Sonra ortak dil bozulur, ardından adalet duygusu zedelenir.</p>
            </section>
        `;
    } else if (konu === "insan") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>
            <section class="hero">
                <h2>İnsan neden yönsüzleşir?</h2>
                <p>İnsan yönünü kaybettiğinde bunu hemen fark etmez. Önce amaçlarını erteler, sonra kendi kararlarını başkalarının sesine göre şekillendirir.</p>
            </section>
        `;
    } else if (konu === "gurultu") {
        icerik.innerHTML = `
            <button class="geri-btn" onclick="sayfaGoster('dusunceler')">← Geri</button>
            <section class="hero">
                <h2>Gürültü çağında düşünmek</h2>
                <p>Bugünün dünyasında herkes konuşuyor ama çok az insan düşünüyor. Derin düşünce artık bir direnç biçimi haline geldi.</p>
            </section>
        `;
    }
}

function kitaptanBul(soru) {
    soru = soru.toLowerCase();
    const kelimeler = soru.split(" ").filter(k => k.length > 2);
    const bulunanlar = [];

    for (const parca of kitap) {
        let puan = 0;
        for (const kelime of kelimeler) {
            if (parca.toLowerCase().includes(kelime)) {
                puan++;
            }
        }
        if (puan > 0) {
            bulunanlar.push({ metin: parca, puan: puan });
        }
    }

    bulunanlar.sort((a, b) => b.puan - a.puan);
    return bulunanlar.slice(0, 2).map(item => item.metin);
}

function gunlukCevapBul(soru) {
    const kaliplar = [
        "bugün ne yapmalıyım",
        "ne yapmalıyım",
        "bugün ne yapayım",
        "ne yapayım",
        "bugün başka ne yapmalıyım"
    ];

    soru = soru.toLowerCase();

    for (const kalip of kaliplar) {
        if (soru.includes(kalip)) {
            const secilen = gunlukOneriler[Math.floor(Math.random() * gunlukOneriler.length)];
            sonOneri = secilen.detay;
            sonTema = "gunluk";
            sonCevap = secilen.ana;
            return secilen.ana;
        }
    }

    return null;
}

function cumleUret(cumleler) {
    if (!cumleler || cumleler.length === 0) return null;

    const ilk = cumleler[Math.floor(Math.random() * cumleler.length)];
    const ikinci = cumleler.length > 1
        ? cumleler[Math.floor(Math.random() * cumleler.length)]
        : "İnsan bunu geç fark eder.";

    return ilk + " " + ikinci;
}

function takipSorusuMu(yazi) {
    return (
        yazi.includes("neden") ||
        yazi.includes("niye") ||
        yazi.includes("nasıl") ||
        yazi.includes("nasıl yani") ||
        yazi.includes("ne gibi") ||
        yazi.includes("mesela") ||
        yazi.includes("devam et") ||
        yazi.includes("aç") ||
        yazi.includes("biraz daha")
    );
}

function cevapAl() {
    const input = document.getElementById("soru");
    if (!input) return;

    const yaziHam = input.value.trim();
    const yazi = yaziHam.toLowerCase();
    if (yazi === "") return;

    mesajEkle(yaziHam, "kullanici");
    input.value = "";

    if (takipSorusuMu(yazi) && sonTema === "gunluk" && sonOneri) {
        setTimeout(() => {
            mesajEkle("Çünkü " + sonOneri, "ai");
        }, 300);
        return;
    }

    const gunlukCevap = gunlukCevapBul(yazi);
    if (gunlukCevap) {
        setTimeout(() => {
            mesajEkle(gunlukCevap, "ai");
        }, 300);
        return;
    }

    const kitapCevaplari = kitaptanBul(yazi);
    if (kitapCevaplari.length > 0) {
        const cevap = cumleUret(kitapCevaplari) || kitapCevaplari[0];
        sonTema = "bilgelik";
        sonCevap = cevap;
        setTimeout(() => {
            mesajEkle(cevap, "ai");
        }, 300);
        return;
    }

    let cevap = "Cevap bazen sorunun içindedir.";

    if (yazi.includes("selam") || yazi.includes("merhaba")) {
        cevap = "Selam yolcu.";
    } else if (yazi.includes("korku")) {
        cevap = "Korkunun üstüne gitmezsen büyür.";
    } else if (yazi.includes("hayat")) {
        cevap = "Hayat bir yolculuktur.";
    } else if (yazi.includes("ruh")) {
        cevap = "Ruh derinliktir.";
    } else if (yazi.includes("ölüm")) {
        cevap = "Ölüm en eski sorudur.";
    }

    sonTema = "genel";
    sonCevap = cevap;

    setTimeout(() => {
        mesajEkle(cevap, "ai");
    }, 400);
}

sayfaGoster("ana");

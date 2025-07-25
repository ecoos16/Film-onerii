let films = [
    {
        id: 1,
        title: "Inception",
        description: "Bilim kurgu,rüya içinde rüya. ", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        imdb: "8.8/10",
        tür: "Aksiyon/Bilim Kurgu",
        oyuncular: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        yönetmen: "Christopher Nolan",
        Konu: "Dom Cobb çok yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmak ve onları çalmaktır. Cobb’un bu ender mahareti, onu kurumsal casusluğun tehlikeli yeni dünyasında aranan bir oyuncu yapmıştır. Ancak, aynı zamanda bu durum onu uluslararası bir kaçak yapmış ve sevdiği her şeyi kaybetmesine sebep olmuştur. Cobb’a içinde bulunduğu durumdan kurtulmasını sağlayacak bir fırsat sunulur. Ona hayatını geri verebilecek son bir iş; tabi eğer imkansız başlangıçı tamamlayabilirse... Mükemmel soygun yerine, Cobb ve takımındaki profesyoneller bu sefer tam tersini yapmak zorundadır; görevleri bir fikri çalmak değil onu yerleştirmektir. Eğer başarırlarsa, mükemmel suç bu olacaktır. Ama ne dikkatle yapılan planlamalar, ne de uzmanlıkları, onları, her hareketlerini önceden tahmin ettiği anlaşılan tehlikeli düşmanlarına karşı hazırlıklı kılabilir. Bu, gelişini sadece Cobb’un görebildiği bir düşmandır.",
        süre: 148
    },
    {
        id: 2,
        title: "The Devil's Advocate",
        description: "Güç, hırs ve şeytani bir teklif.",
        poster: "https://m.media-amazon.com/images/M/MV5BNGIxZmU2ZjEtYjc3OC00Y2FiLWE2ZTQtZGI3NzE0YmRhOTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        imdb: "7.5/10",
        tür: "Korku/Fantastik",
        oyuncular: "Keanu Reeves, Al Pacino, Charlize Theron",
        yönetmen: "Taylor Hackford",
        Konu: "Film başarılı bir avukat olan Kevin Lomax'in (Keanu Reeves), zengin iş insanı John Milton (Al Pacino) ile tanıştıktan sonra garipleşen hayatını konu alır. Avukat Kevin Lomax, işinde başarılı olmayı o kadar ciddiye alır ki müvekkillerinin suçlu olduğunu bilse dahi onları adaletin elinden kurtarmayı başarır. John Milton adında zengin bir iş insanı ile tanıştıktan sonra New York'a yerleşir. New York'a yerleştikten sonra eşinin yaşadığı psikolojik sorunlar, avukat Lomax'in de bazı gerçeklere ulaşmasını sağlayacaktır.",
        süre: 136
    },
    {
        id: 3,
        title: "G.O.R.A",
        description: "Uzayda geçen bir Türk komedisi.", poster: "https://upload.wikimedia.org/wikipedia/tr/thumb/9/9a/Gora_afi%C5%9F.jpg/330px-Gora_afi%C5%9F.jpg",
        imdb: "8/10",
        tür: "Komedi/Bilim Kurgu ",
        oyuncular: "Cem Yılmaz, Ozan Güven, Özkan Uğur",
        yönetmen: "Ömer Faruk Sorak",
        Konu: "İstanbul’da halı satıcılığı yapan Arif, sahte UFO hikâyeleriyle geçimini sürdürürken uzaylılar tarafından GORA gezegenine kaçırılır. Burada güvenlik şefi Logar’ın kötü planlarına karşı mücadele eder. Mahkûm arkadaşları Faruk ve Robot-216 ile kaçış yolları arar. Prenses Ceku’ya âşık olur, GORA’yı yok edecek ateş topunu durdurarak kahraman olur. Sonunda Logar’ı alt eder, Ceku ile Dünya’ya döner ve mutlu bir hayat kurar",
        süre: 167
    },
    {
        id: 4,
        title: "Truman Show",
        description: "Hayatının her anı gizlice yayınlanan bir adamın uyanış hikâyesi. ", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAVAKK8TMnF02XIzL3LMoxOI-amk98PT9HSw&s",
        imdb: "8.2/10",
        tür: "Komedi/Bilim Kurgu",
        oyuncular: "Jim Carrey, Ed Harris, Laura Linney, Noah Emmerich, Natascha McElhone.",
        yönetmen: "Truman Burbank, mükemmel görünen bir adada yaşarken hayatının aslında dev bir stüdyoda, sahte insanlarla çevrili ve gizlice yayınlanan bir TV şovu olduğunu fark eder. Çocukluğundan beri manipüle edilen Truman, geçmişte âşık olduğu Sylvia sayesinde gerçeği sorgulamaya başlar. Şüpheleri artınca, sahte dünyadan kaçmaya çalışır ve sonunda kendi iradesiyle gerçek dünyaya adım atar.",
        süre: 108
    },
    {
        id: 5,
        title: "Midnight in Paris",
        description: "Zamanda yolculukla geçmişin büyüsünü keşfeden bir yazarın hikâyesi. ", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ZhcqxQCinUyBXfJFCw03Rp9tB5qBc--Kmg&s",
        imdb: "7.6/10",
        tür: "Komedi/Romantik",
        oyuncular: "Owen Wilson, Rachel McAdams, Marion Cotillard, Kathy Bates, Adrien Brody, Tom Hiddleston",
        yönetmen: "Woody Allen",
        Konu: "Senarist Gil, nişanlısıyla Paris’e tatile gider ancak ilişkisi karmaşık ve ilhamı kaybolmuştur. Her gece saat 12’de gizemli bir arabayla 1920’lerin Paris’ine zaman yolculuğu yapar. Bu büyülü dünyada Hemingway, Picasso ve Fitzgerald gibi sanatçılarla tanışır. Geçmişin cazibesine kapılsa da sonunda ilhamı kendi zamanında bulması gerektiğini fark eder. Film, nostaljiyle yüzleşme ve kendi yolunu bulma temalarını işler.",
        süre: 94
    },
    {
        id: 6,
        title: "Soul",
        description: "Hayatın anlamını arayan bir müzisyenin ruhsal yolculuğu. ", poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UoKaPn3lY8swi3jH2lw4L2VmglPcFKdeDA&s",
        imdb: "8/10",
        tür: "Çocuk/Fantastik",
        oyuncular: "Jamie Foxx, Tina Fey, Graham Norton, Angela Bassett, Rachel House",
        yönetmen: "Pete Docter",
        Konu: "Joe Gardner, caz tutkunu bir müzik öğretmenidir. Hayalini kurduğu performans şansını yakaladığı gün, talihsiz bir kazayla ruhlar dünyasına geçer. Burada, henüz dünyaya gelmemiş ruhlara rehberlik edilen Great Before (Büyük Önce) adlı bir yere gelir. Burada 22 adlı bir ruhla tanışır. Joe, yeniden dünyaya dönmeye çalışırken hayatın anlamını, tutkunun gerçek değerini ve yaşamanın kıymetini keşfeder. Film, derin felsefi temaları sıcak bir hikâyeyle işler.",
        süre: 100
    },
    {
        id: 7,
        title: "Memento ",
        description: "Kısa süreli hafıza kaybı yaşayan bir adamın intikam arayışı. ", poster: "https://upload.wikimedia.org/wikipedia/tr/f/f6/Memento_film_posteri.jpg",
        imdb: "8.4/10",
        tür: "Gerilim/Suç ",
        oyuncular: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano",
        yönetmen: "Christopher Nolan",
        Konu: "SLeonard Shelby, kısa süreli hafıza kaybı yaşamakta ve yeni anıları yalnızca kısa süre tutabilmektedir. Karısına yapılan saldırının intikamını almak için ipuçlarını vücuduna dövmelerle kaydeder. Ancak bu karmaşık hafıza problemi ve zamanın tersine doğru ilerleyen anlatımı, gerçekleri anlamasını zorlaştırır. Film, hafıza, kimlik ve gerçeklik üzerine zihin açıcı bir gerilim sunar.",
        süre: 113
    },
    {
        id: 8,
        title: "(The Curious Case of Benjamin Button",
        description: "Tersine yaşlanan bir adamın sıra dışı yaşam öyküsü.", poster: "https://m.media-amazon.com/images/I/91y51uzkbhL._UF894,1000_QL80_.jpg",
        imdb: "7.6/10",
        tür: "Romantik/Fantastik ",
        oyuncular: "Brad Pitt, Cate Blanchett, Taraji P. Henson, Julia Ormond",
        yönetmen: " David Fincher",
        Konu: "Benjamin Button, yaşlı doğup yıllar geçtikçe gençleşen nadir bir durumla dünyaya gelir. Zamanla çevresindeki herkes yaşlanırken, o gençleşir. Bu tersine akan hayat, Benjamin’in ailesi, aşkları ve kendi kimliğiyle karmaşık bir ilişki kurmasına neden olur. Film, zaman, yaşam ve kayıplar üzerine dokunaklı bir hikâye anlatır.",
        süre: 166
    }
];
export default films;

//API Route fonk.
export async function GET() {
    return new Response(JSON.stringify(films), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function POST(req) {
    const newFilm = await req.json();
    newFilm.id = Date.now();
    films.push(newFilm);
    return new Response(JSON.stringify({ success: true, film: newFilm }), {
        headers: { 'Content-Type': 'application/json' },
    });
}

export async function DELETE(req) {
    const { id } = await req.json();
    films = films.filter((film) => film.id !== id);
    return new Response(JSON.stringify({ success: true }), {
        headers: { 'Content-Type': 'application/json' },
    });
}
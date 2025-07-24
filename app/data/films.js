const films = [
    {
        id: 1,
        title: "Inception",
        description: "Bilim kurgu,rüya içinde rüya ", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
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
        title: "Inception",
        description: "Bilim kurgu,rüya içinde rüya ", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        imdb: "8.8/10",
        tür: "Aksiyon/Bilim Kurgu",
        oyuncular: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        yönetmen: "Christopher Nolan",
        Konu: "Dom Cobb çok yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmak ve onları çalmaktır. Cobb’un bu ender mahareti, onu kurumsal casusluğun tehlikeli yeni dünyasında aranan bir oyuncu yapmıştır. Ancak, aynı zamanda bu durum onu uluslararası bir kaçak yapmış ve sevdiği her şeyi kaybetmesine sebep olmuştur. Cobb’a içinde bulunduğu durumdan kurtulmasını sağlayacak bir fırsat sunulur. Ona hayatını geri verebilecek son bir iş; tabi eğer imkansız başlangıçı tamamlayabilirse... Mükemmel soygun yerine, Cobb ve takımındaki profesyoneller bu sefer tam tersini yapmak zorundadır; görevleri bir fikri çalmak değil onu yerleştirmektir. Eğer başarırlarsa, mükemmel suç bu olacaktır. Ama ne dikkatle yapılan planlamalar, ne de uzmanlıkları, onları, her hareketlerini önceden tahmin ettiği anlaşılan tehlikeli düşmanlarına karşı hazırlıklı kılabilir. Bu, gelişini sadece Cobb’un görebildiği bir düşmandır.",
        süre: 148

    },
    {
        id: 5,
        title: "Inception",
        description: "Bilim kurgu,rüya içinde rüya ", poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        imdb: "8.8/10",
        tür: "Aksiyon/Bilim Kurgu",
        oyuncular: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page",
        yönetmen: "Christopher Nolan",
        Konu: "Dom Cobb çok yetenekli bir hırsızdır. Uzmanlık alanı, zihnin en savunmasız olduğu rüya görme anında, bilinçaltının derinliklerindeki değerli sırları çekip çıkarmak ve onları çalmaktır. Cobb’un bu ender mahareti, onu kurumsal casusluğun tehlikeli yeni dünyasında aranan bir oyuncu yapmıştır. Ancak, aynı zamanda bu durum onu uluslararası bir kaçak yapmış ve sevdiği her şeyi kaybetmesine sebep olmuştur. Cobb’a içinde bulunduğu durumdan kurtulmasını sağlayacak bir fırsat sunulur. Ona hayatını geri verebilecek son bir iş; tabi eğer imkansız başlangıçı tamamlayabilirse... Mükemmel soygun yerine, Cobb ve takımındaki profesyoneller bu sefer tam tersini yapmak zorundadır; görevleri bir fikri çalmak değil onu yerleştirmektir. Eğer başarırlarsa, mükemmel suç bu olacaktır. Ama ne dikkatle yapılan planlamalar, ne de uzmanlıkları, onları, her hareketlerini önceden tahmin ettiği anlaşılan tehlikeli düşmanlarına karşı hazırlıklı kılabilir. Bu, gelişini sadece Cobb’un görebildiği bir düşmandır.",
        süre: 148
    }
];
export default films;
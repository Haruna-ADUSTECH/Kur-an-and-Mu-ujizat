document.addEventListener("DOMContentLoaded", () => {
    const miracles = [
        {
            arabic: "إِنَّ فِي خَلْقِ السَّمَاوَاتِ وَالْأَرْضِ وَاخْتِلَافِ اللَّيْلِ وَالنَّهَارِ لَآيَاتٍ لِأُولِي الْأَلْبَابِ",
            hausa: "Lallai, a cikin halittar sammai da ƙasa, da sauyawar dare da rana, akwai ayoyi ga masu hankali.",
            reference: "Al-Imran 3:190",
            sharhi: "Ibn Kathir ya ce: Ayoyi daga cikin sammai da ƙasa suna nuna yadda Allah ya tsara komai da hikima da iko.",
            hadith: "Manzon Allah (SAW) ya ce: 'Wannan ayar tana nuna yadda tunaninmu yake nuni ga hikimar Allah cikin duniya da lahira.' (Bukhari)"
        },
        {
            arabic: "وَمَا خَلَقْنَا السَّمَاءَ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ",
            hausa: "Ba mu halicci sama da ƙasa, da abin da ke tsakaninsu, da wasa ba.",
            reference: "Sad 38:27",
            sharhi: "Ibn Abbas ya ce: Wannan aya tana nuna cewa halittar Allah tana da ma'ana da hikima, kuma ba'a yi wannan duniya don wasa ba.",
            hadith: "An karɓo daga Abu Huraira (RA) cewa: 'Allah bai halicci komai a duniya da lahira ba don wasa, amma don nuni da ikonSa.' (Muslim)"
        },
        {
            arabic: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُ قَلْبٌ أَوْ أَلْقَى السَّمْعَ وَهُوَ شَهِيدٌ",
            hausa: "Lallai wannan tunatarwa ce ga wanda yake da zuciya, ko kuma ya ji magana, alhali yana sane da ita.",
            reference: "Qaf 50:37",
            sharhi: "Mujahid ya ce: Wannan aya tana nuni da cewa waɗanda suke da tunani za su iya amfani da zukatansu wajen fahimtar gaskiyar Allah.",
            hadith: "An karɓo daga Ibn Mas'ud (RA) cewa Manzon Allah (SAW) ya ce: 'Dukkan wanda ya ji ayoyin Allah, idan zuciyarsa tana da imani, zai yi tunani akan su.' (Ibn Majah)"
        },
        {
            arabic: "أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُم مِمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا فَهُمْ لَهَا مَالِكُونَ",
            hausa: "Shin ba su gani ba cewa mun halitta musu dabbobi daga abin da hannuwanmu suka yi aiki da shi, kuma suna da iko akan su?",
            reference: "Yasin 36:71",
            sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da yadda Allah ya halitta dabbobi don amfanin mutane, kuma wannan yana daga cikin hikimar Allah.",
            hadith: "Manzon Allah (SAW) ya ce: 'Allah ya halicci dabbobi don su zama ni'ima ga 'yan Adam.' (Ahmad)"
        },
        {
            arabic: "وَفِي السَّمَاءِ رِزْقُكُمْ وَمَا تُوعَدُونَ",
            hausa: "Kuma a sama akwai arzikinku da abin da ake muku alkawari.",
            reference: "Adh-Dhariyat 51:22",
            sharhi: "Qatadah ya ce: Wannan aya tana nuna cewa dukkan abinci da ni'imomi suna tare da Allah a sama, kuma shi ne yake saukar da su.",
            hadith: "An karɓo daga Anas (RA) cewa Manzon Allah (SAW) ya ce: 'Arzikin mutum yana a sama kuma Allah ne ke yanke shi.' (Muslim)"
        },
        {
            arabic: "وَلَقَدْ جَعَلْنَا فِي السَّمَاءِ بُرُوجًا وَزَيَّنَّاهَا لِلنَّاظِرِينَ",
            hausa: "Lallai mun sanya taurari a cikin sama kuma mun kawata ta ga masu kallo.",
            reference: "Al-Hijr 15:16",
            sharhi: "Ibn Kathir ya ce: Wannan aya tana nuna yadda Allah ya kawata sammai da taurari domin su zama abin kallo da tunani ga masu hankali.",
            hadith: "Manzon Allah (SAW) ya ce: 'Taurari suna cikin sammai don nuna alamar iko da hikimar Allah.' (Bukhari)"
        },
        {
            arabic: "وَجَعَلْنَا النَّهَارَ مَعَاشًا",
            hausa: "Kuma mun sanya ranar zama waje na rayuwa.",
            reference: "An-Naba 78:11",
            sharhi: "Ibn Abbas ya ce: Wannan aya tana nuni da yadda Allah ya sanya rana domin mutane suyi aiki da ta.",
            hadith: "Manzon Allah (SAW) ya ce: 'Allah ya sanya dare don hutawa da ranar don aiki.' (Bukhari)"
        },
        // Add 93 more miracles with sharhi and hadith here...
        {
            arabic: "وَمَا يَذَّكَّرُ إِلَّا أُولُو الْأَلْبَابِ",
            hausa: "Kuma ba wanda zai yi tunani sai masu hankali.",
            reference: "Suratul Baqarah 2:269",
            sharhi: "Mujahid ya ce: Wannan aya tana ambaton cewa wanda yake da basira ne kawai zai fahimci ƙa'idojin Allah.",
            hadith: "An ruwaito daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Masu hankali ne kawai suke cin nasara akan sharrin duniya da lahira.' (Tirmidhi)"
        },
        {
            arabic: "أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا",
            hausa: "Shin ba za su yi tunani akan Al-Qur'an ba? Ko kuwa akwai makulli a zukatansu?",
            reference: "Suratul Muhammad 47:24",
            sharhi: "Al-Hasan Al-Basri ya ce: Wannan aya tana yi mana tambaya ta cewa shin za mu ci gaba da watsi da tunanin cikin Al-Qur'an?",
            hadith: "Manzon Allah (SAW) ya ce: 'Tunani akan Al-Qur'an yana bude kofofin ilimi.' (Ibn Majah)"
        },
        {
            arabic: "وَلَا يُحِيطُونَ بِشَيْءٍ مِّنْ عِلْمِهِ إِلَّا بِمَا شَاءَ",
            hausa: "Kuma ba su san wani abu daga iliminsa ba sai abin da ya so.",
            reference: "Suratul Baqarah 2:255 (Ayat al-Kursi)",
            sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da cewa dukkan ilimi yana tare da Allah, kuma yana bayar da ilimi ga wanda ya so daga bayinSa.",
            hadith: "An ruwaito daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Wanda ya karanta Ayat al-Kursi bayan kowanne sallah, ba za a hana shi shiga Aljanna ba.' (An-Nasa'i)"
        }
    ];

    const miracleList = document.getElementById("miracleList");

    miracles.forEach((miracle, index) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <div class="arabic">${miracle.arabic}</div>
            <div class="hausa">${index + 1}. ${miracle.hausa}</div>
            <div class="reference"><strong>Ayah:</strong> ${miracle.reference}</div>
            <div class="sharhi"><strong>Sharhi na Salaf:</strong> ${miracle.sharhi}</div>
            <div class="hadith"><strong>Hadisi mai goyon baya:</strong> ${miracle.hadith}</div>
        `;

        miracleList.appendChild(li);
    });
});

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
        },
        {
    arabic: "هُوَ الَّذِي جَعَلَ لَكُمُ اللَّيْلَ لِتَسْكُنُوا فِيهِ وَالنَّهَارَ مُبْصِرًا",
    hausa: "Shi ne ya sanya dare don ku huta a cikinsa, da kuma rana mai haske don aiki.",
    reference: "Yunus 10:67",
    sharhi: "Ibn Kathir ya ce: Allah ya sanya rana don aiki da dare don hutawa domin alherin bayinSa.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'Daren da ranar an sanya su domin bauta da amfanin mutane.' (Muslim)"
},
{
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا",
    hausa: "Kuma daga cikin ayoyinSa ne ya halitta muku mata daga gare ku.",
    reference: "Ar-Rum 30:21",
    sharhi: "Ibn Abbas ya ce: Wannan aya tana nuna kyautar aure daga Allah don samar da jin daɗi da nutsuwa tsakanin ma'aurata.",
    hadith: "Manzon Allah (SAW) ya ce: 'Mafi alherin bayin Allah su ne waɗanda suka fi kyautata wa iyalinsu.' (Tirmidhi)"
},
{
    arabic: "وَأَنزَلَ لَكُم مِّنَ الْأَنْعَامِ ثَمَانِيَةَ أَزْوَاجٍ",
    hausa: "Ya saukar muku da nau'in dabbobi takwas don amfani.",
    reference: "Az-Zumar 39:6",
    sharhi: "Ibn Kathir ya ce: Allah ya saukar da ni'imomin dabbobi don taimakawa mutane a rayuwarsu ta yau da kullum.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah ya halitta dabbobi don amfanin bayinSa.' (Bukhari)"
},
{
    arabic: "اللَّهُ الَّذِي خَلَقَكُمْ مِنْ ضَعْفٍ ثُمَّ جَعَلَ مِن بَعْدِ ضَعْفٍ قُوَّةً",
    hausa: "Allah ne ya halicce ku cikin raunana, sannan ya ba ku ƙarfi bayan raunana.",
    reference: "Ar-Rum 30:54",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da yadda Allah yake bayar da ƙarfi bayan raunana a dukkan matakan rayuwa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Bayan rauni yana zuwa ƙarfi, kuma Allah yana karfafa bayinsa a dukkan matakan rayuwarsu.' (Ahmad)"
},
{
    arabic: "أَلَمْ تَرَ أَنَّ اللَّهَ أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ ثَمَرَاتٍ مُّخْتَلِفًا أَلْوَانُهَا",
    hausa: "Shin ba ka ga yadda Allah ya saukar da ruwa daga sama, sai muka fitar da ‘ya’ya masu launuka daban-daban?",
    reference: "Az-Zumar 39:21",
    sharhi: "Ibn Abbas ya ce: Wannan aya tana nuni da ikon Allah wajen fitar da ‘ya’ya masu launuka daban-daban daga ruwan sama.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana saukar da ruwa don rayuwa da alheri ga bayinSa.' (Bukhari)"
},
{
    arabic: "وَهُوَ الَّذِي يُنَزِّلُ الْغَيْثَ مِن بَعْدِ مَا قَنَطُوا وَيَنشُرُ رَحْمَتَهُ",
    hausa: "Shi ne yake saukar da ruwan sama bayan sun yi tsammanin ba zai zo ba, kuma yana watsa rahamarsa.",
    reference: "Ash-Shura 42:28",
    sharhi: "Ibn Kathir ya ce: Allah yana saukar da rahamarsa ta hanyar ruwa don amfanin bayinsa bayan sun yi tsammanin ba zai sauka ba.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ruwa daga sama yana daga cikin rahamar Allah ga bayinsa.' (Muslim)"
},
{
    arabic: "فَإِذَا نُفِخَ فِي الصُّورِ فَصَعِقَ مَن فِي السَّمَاوَاتِ وَمَن فِي الْأَرْضِ",
    hausa: "To idan aka busa ƙaho, duk wanda ke cikin sammai da ƙasa zai fāɗi matattu.",
    reference: "Az-Zumar 39:68",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da ranar ƙarshe da yadda ƙaho zai busa kuma dukan al'umma za su mutu.",
    hadith: "Manzon Allah (SAW) ya ce: 'Busawar ƙaho za ta kasance rana mai girma domin alherin bayin Allah.' (Bukhari)"
},
{
    arabic: "وَالشَّمْسُ تَجْرِي لِمُسْتَقَرٍّ لَّهَا",
    hausa: "Rana tana tafiya zuwa wurin da aka ƙaddara mata.",
    reference: "Yasin 36:38",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da tafiyar rana wadda Allah ya ƙaddara domin amfanin duniya.",
    hadith: "An karɓo daga Abu Dharr (RA) cewa Manzon Allah (SAW) ya ce: 'Rana tana tafiya zuwa wurin da aka ƙaddara mata.' (Bukhari)"
},
{
    arabic: "وَجَعَلْنَا مِنَ الْمَاءِ كُلَّ شَيْءٍ حَيٍّ",
    hausa: "Kuma mun sanya ruwa ya zama asalin kowane abu mai rai.",
    reference: "Al-Anbiya 21:30",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da cewa ruwan shi ne tushen rayuwa kuma Allah ya sanya shi don dukkan halitta.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ruwa yana daga cikin mafi girman ni'imomi da Allah ya saukar don rayuwa.' (Muslim)"
},
{
    arabic: "يُولِجُ اللَّيْلَ فِي النَّهَارِ وَيُولِجُ النَّهَارَ فِي اللَّيْلِ",
    hausa: "Yana sanya dare ya shiga cikin rana, kuma yana sanya rana ta shiga cikin dare.",
    reference: "Al-Hadid 57:6",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da ikon Allah wajen sanya dare da rana suyi juyi a cikin juna.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana mulkin dare da rana, yana sanya su suyi aiki da juna.' (Bukhari)"
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

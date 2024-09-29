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
},
        {
    arabic: "إِنَّ فِي السَّمَاوَاتِ وَالْأَرْضِ لَآيَاتٍ لِّلْمُؤْمِنِينَ",
    hausa: "Lalle a cikin sammai da ƙasa akwai ayoyi ga muminai.",
    reference: "Al-Jathiya 45:3",
    sharhi: "Ibn Kathir ya ce: Sammai da ƙasa cike suke da ayoyin Allah da ke nuni da ikonsa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk wanda yake kallon sammai da ƙasa, ya kamata ya tuna da ikonsu, saboda suna cike da ayoyi.' (Tirmidhi)"
},
{
    arabic: "وَمَا يَسْتَوِي الْأَعْمَى وَالْبَصِيرُ",
    hausa: "Makaho da mai gani ba su daidai.",
    reference: "Fatir 35:19",
    sharhi: "Ibn Abbas ya ce: Wannan aya tana nuni da bambancin tsakanin waɗanda suka yi imani da Allah da waɗanda suka ƙi gaskiya.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'Mai gani da makaho ba su daidai a wajen Allah; wanda ya yi imani yana gaba.' (Bukhari)"
},
{
    arabic: "وَهُوَ الَّذِي أَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجْنَا بِهِ نَبَاتَ كُلِّ شَيْءٍ",
    hausa: "Shi ne ya saukar da ruwa daga sama, sai muka fitar da tsire-tsire masu yawa daga cikinsa.",
    reference: "An'am 6:99",
    sharhi: "Ibn Kathir ya ce: Ruwan sama yana kawo albarkar tsire-tsire daban-daban da ke bayar da abinci ga dabbobi da mutane.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ruwa yana kawo rayuwa kuma yana samar da alheri.' (Muslim)"
},
{
    arabic: "يُخْرِجُ الْحَيَّ مِنَ الْمَيِّتِ وَيُخْرِجُ الْمَيِّتَ مِنَ الْحَيِّ",
    hausa: "Yana fitar da rai daga matacce, kuma yana fitar da matacce daga cikin rai.",
    reference: "Ar-Rum 30:19",
    sharhi: "Ibn Abbas ya ce: Allah yana da ikon sanya rai daga matacce, misali tsiro daga ƙasa maras rai, ko haihuwar ɗan adam daga cikinsa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana kawo rayuwa daga komai kuma yana ba da ikon cikar tsarinSa.' (Bukhari)"
},
{
    arabic: "وَجَعَلْنَا السَّمَاءَ سَقْفًا مَّحْفُوظًا",
    hausa: "Mun sanya sama ta zama rufin da aka kiyaye.",
    reference: "Al-Anbiya 21:32",
    sharhi: "Ibn Kathir ya ce: Sama an tsara ta ne don ta kare duniya daga abubuwan da ke iya shigowa daga sararin samaniya.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah ya sanya sama ta zama rufin da za ta kare mu daga barazanar duniya.' (Muslim)"
},
{
    arabic: "يَا أَيُّهَا النَّاسُ ضُرِبَ مَثَلٌ فَاسْتَمِعُوا لَهُ",
    hausa: "Ya ku mutane, an kawo muku misali, ku saurare shi.",
    reference: "Al-Hajj 22:73",
    sharhi: "Ibn Abbas ya ce: Allah yana kira ga mutane su saurari hikimominSa da suke cikin misalai da aka bayar domin fahimta.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ku saurari hikimomin Allah, domin suna tattare da misalai masu yawa don koyi.' (Muslim)"
},
{
    arabic: "فَسُبْحَانَ الَّذِي بِيَدِهِ مَلَكُوتُ كُلِّ شَيْءٍ",
    hausa: "Godiya ta tabbata ga wanda a hannunsa yake mulkin kowane abu.",
    reference: "Yasin 36:83",
    sharhi: "Ibn Kathir ya ce: Allah yana da cikakken iko a kowane abu da aka halitta, kuma mulkinsa yana rufe dukan halittu.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Mulkin Allah yana rufe komai a sammai da ƙasa.' (Bukhari)"
},
{
    arabic: "وَمَا قَدَرُوا اللَّهَ حَقَّ قَدْرِهِ",
    hausa: "Kuma ba su kiyaye Allah da yadda ya kamata ba.",
    reference: "Az-Zumar 39:67",
    sharhi: "Ibn Abbas ya ce: Wannan aya tana bayyana yadda wasu mutane ba su fahimci girman Allah da yadda ya kamata ba.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ku kiyaye Allah da yadda ya kamata, kuyi imani da girmanSa.' (Muslim)"
},
{
    arabic: "أَلَمْ نَجْعَلِ الْأَرْضَ مِهَادًا",
    hausa: "Shin ba mu sanya ƙasa ta zama shimfiɗa ba?",
    reference: "An-Naba 78:6",
    sharhi: "Ibn Kathir ya ce: Allah ya sanya ƙasa ta zama wurin zama mai sauƙi ga mutane su zauna suyi aiki.",
    hadith: "An karɓo daga Ibn Umar (RA) cewa Manzon Allah (SAW) ya ce: 'Ku tuna da rahamar Allah ta hanyar sanya ƙasa shimfiɗa.' (Tirmidhi)"
},
{
    arabic: "وَالسَّمَاءَ بَنَيْنَاهَا بِأَيْدٍ وَإِنَّا لَمُوسِعُونَ",
    hausa: "Mun gina sama da ƙarfi, kuma mu ne masu faɗaɗa ta.",
    reference: "Adh-Dhariyat 51:47",
    sharhi: "Ibn Abbas ya ce: Allah yana faɗaɗa sararin samaniya bisa ikonsa kuma yana ci gaba da wannan faɗaɗa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana ci gaba da faɗaɗa sammai domin ikonsa.' (Muslim)"
},
        {
    arabic: "إِنَّ فِي ذَٰلِكَ لَذِكْرَىٰ لِمَن كَانَ لَهُ قَلْبٌ أَوْ أَلْقَى السَّمْعَ وَهُوَ شَهِيدٌ",
    hausa: "Lalle a cikin wannan akwai tunatarwa ga wanda yake da zuciya ko kuma ya sanya kunne kuma yana shaida.",
    reference: "Qaf 50:37",
    sharhi: "Ibn Kathir ya ce: Ayar tana tunatar da masu hankali da zuciya cewa su saurari ayoyin Allah kuma su fahimce su.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk wanda ya saurari tunatarwa, Allah zai buɗe masa ƙofofin rahama.' (Muslim)"
},
{
    arabic: "وَمَا خَلَقْنَا السَّمَاوَاتِ وَالْأَرْضَ وَمَا بَيْنَهُمَا لَاعِبِينَ",
    hausa: "Ba mu halicci sammai da ƙasa da abin da ke tsakaninsu a wasa ba.",
    reference: "Ad-Dukhan 44:38",
    sharhi: "Ibn Kathir ya ce: Allah ya halicci sammai da ƙasa ba don wasa ba, sai domin hikima da tsari.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk abin da Allah ya halitta yana da manufa, babu wasa a cikinsa.' (Tirmidhi)"
},
{
    arabic: "وَهُوَ الَّذِي خَلَقَ السَّمَاوَاتِ وَالْأَرْضَ بِالْحَقِّ",
    hausa: "Shi ne wanda ya halicci sammai da ƙasa da gaskiya.",
    reference: "Al-An'am 6:73",
    sharhi: "Ibn Abbas ya ce: Wannan aya tana nuni da cewa Allah ya halicci dukkan abin da ke cikin sammai da ƙasa da cikakkiyar hikima da gaskiya.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana halitta da hikima kuma ba tare da kuskure ba.' (Muslim)"
},
{
    arabic: "وَتَرَى الْجِبَالَ تَحْسَبُهَا جَامِدَةً وَهِيَ تَمُرُّ مَرَّ السَّحَابِ",
    hausa: "Kuma kana ganin duwatsu ka ɗauka suna tsaye a wajen, alhali suna tafiya kamar gajimare.",
    reference: "An-Naml 27:88",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da cewa duk da cewa duwatsu suna kama da tsayayyu, akwai motsi mai tsanani a cikinsu a ƙarshen zamani.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'A ranar Ƙiyama, duwatsu za su watse kamar ƙura.' (Bukhari)"
},
{
    arabic: "وَفِي الْأَرْضِ آيَاتٌ لِّلْمُوقِنِينَ",
    hausa: "Kuma a cikin ƙasa akwai ayoyi ga masu tabbatarwa.",
    reference: "Adh-Dhariyat 51:20",
    sharhi: "Ibn Abbas ya ce: A cikin ƙasa akwai ayoyin Allah da ke tabbatarwa ga waɗanda suke da cikakken imani.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ku yi tunani kan ayoyin Allah a cikin ƙasa, domin suna tabbatarwa da imani.' (Tirmidhi)"
},
{
    arabic: "وَهُوَ الَّذِي يُحْيِي وَيُمِيتُ",
    hausa: "Shi ne wanda yake rayarwa kuma yake kashewa.",
    reference: "Al-Mu'minun 23:80",
    sharhi: "Ibn Kathir ya ce: Allah ne mai iko da rayuwa da mutuwa, kuma yana gudanar da hakan bisa hikimarsa.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'Allah ne ke bada rai kuma yana kashewa da cikakken iko.' (Muslim)"
},
{
    arabic: "يَا أَيُّهَا الَّذِينَ آمَنُوا اسْتَجِيبُوا لِلَّهِ وَلِلرَّسُولِ إِذَا دَعَاكُمْ لِمَا يُحْيِيكُمْ",
    hausa: "Ya ku waɗanda suka yi imani! Ku amsa kiran Allah da manzonsa idan ya kiraye ku zuwa ga abin da zai raya ku.",
    reference: "Al-Anfal 8:24",
    sharhi: "Ibn Abbas ya ce: Amsawa ga Allah da manzonsa yana nuni da samun nasara a duniya da lahira.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk wanda ya amsa kiran Allah, zai samu rayuwa ta hakika.' (Bukhari)"
},
{
    arabic: "إِنَّ اللَّهَ فَالِقُ الْحَبِّ وَالنَّوَىٰ",
    hausa: "Lalle Allah ne mai fashewa da tsaba da ƙwaya.",
    reference: "Al-An'am 6:95",
    sharhi: "Ibn Kathir ya ce: Allah ne ke fashewa da tsaba a lokacin shuka, kuma yana haɓaka tsire-tsire daga ƙasa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana fashe tsaba domin samar da albarkar abinci.' (Muslim)"
},
{
    arabic: "وَاللَّهُ خَلَقَكُمْ وَمَا تَعْمَلُونَ",
    hausa: "Allah ne ya halicce ku da abin da kuke aikatawa.",
    reference: "As-Saffat 37:96",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuna cewa dukkan ayyukan mutane suna ƙarƙashin ikon Allah.",
    hadith: "An karɓo daga Ibn Umar (RA) cewa Manzon Allah (SAW) ya ce: 'Dukkan ayyukan mutane suna karkashin hukuncin Allah.' (Tirmidhi)"
},
{
    arabic: "أَوَلَمْ يَرَوْا أَنَّا خَلَقْنَا لَهُم مِّمَّا عَمِلَتْ أَيْدِينَا أَنْعَامًا",
    hausa: "Shin ba su ga cewa Mun halitta musu dabbobi ba daga abin da hannunMu ya aikata?",
    reference: "Yasin 36:71",
    sharhi: "Ibn Abbas ya ce: Allah ya halicci dabbobi masu amfani ga mutane don su amfana da su a rayuwarsu ta yau da kullum.",
    hadith: "Manzon Allah (SAW) ya ce: 'Dabbobi suna daga cikin alherin Allah don rayuwar mu ta yau da kullum.' (Bukhari)"
    },
        {
    arabic: "أَوَلَمْ يَرَ ٱلَّذِينَ كَفَرُوٓاْ أَنَّ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضَ كَانَتَا رَتْقًۭا فَفَتَقْنَـٰهُمَا",
    hausa: "Shin waɗanda suka kafirta ba su ga cewa sammai da ƙasa sun kasance haɗe ba, sai muka raba su?",
    reference: "Al-Anbiya 21:30",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana magana game da hikimar Allah wajen halittar sammai da ƙasa, inda suka kasance haɗe kafin Allah ya raba su.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah ya halicci sammai da ƙasa daga komai kuma ya ba su tsarin halitta.' (Bukhari)"
},
{
    arabic: "وَمِنْ ءَايَـٰتِهِۦ خَلْقُ ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ وَٱخْتِلَـٰفُ أَلْسِنَتِكُمْ وَأَلْوَٰنِكُمْ",
    hausa: "Daga cikin ayoyinSa akwai halittar sammai da ƙasa, da bambancin harsuna da launukanku.",
    reference: "Ar-Rum 30:22",
    sharhi: "Ibn Kathir ya ce: Allah ya halicci mutane da harsuna da launuka daban-daban domin su gane cewa wannan tsari na Allah ne mai girma.",
    hadith: "An karɓo daga Anas (RA) cewa Manzon Allah (SAW) ya ce: 'Bambancin harsuna da launuka yana daga cikin alamu na girman Allah.' (Muslim)"
},
{
    arabic: "إِنَّ فِي ٱخْتِلَـٰفِ ٱلَّيْلِ وَٱلنَّهَارِ وَمَا خَلَقَ ٱللَّهُ فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ لَءَايَـٰتٍۢ لِّقَوْمٍۢ يَتَّقُونَ",
    hausa: "Lalle a cikin canjin dare da rana da abin da Allah ya halitta a cikin sammai da ƙasa akwai ayoyi ga mutane masu tsoron Allah.",
    reference: "Yunus 10:6",
    sharhi: "Ibn Kathir ya ce: Canjin dare da rana da kuma abin da ke cikin halitta na sammai da ƙasa yana nuni da ikon Allah da hikimarsa.",
    hadith: "An karɓo daga Abdullah bin Amr (RA) cewa Manzon Allah (SAW) ya ce: 'Canjin dare da rana yana nuni da girman ikon Allah.' (Muslim)"
},
{
    arabic: "خَلَقَكُم مِّن نَّفْسٍۢ وَٰحِدَةٍۢ ثُمَّ جَعَلَ مِنْهَا زَوْجَهَا",
    hausa: "Ya halicce ku daga rai ɗaya, sannan ya samar da matarsa daga gare ta.",
    reference: "Az-Zumar 39:6",
    sharhi: "Ibn Abbas ya ce: Allah ya halicci Annabi Adam daga ƙasa, sannan ya halicci Hauwa’u daga ƙabarinsa domin ta kasance abokiyar rayuwarsa.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Mata an halicce su daga ƙabarin mazansu.' (Bukhari)"
},
{
    arabic: "وَٱلْبَحْرَ يَمُدُّهُۥ مِنۢ بَعْدِهِۦ سَبْعَةُ أَبْحُرٍۢ",
    hausa: "Bahari yana samun ƙari daga bayan sa, bakwai daga cikin tekuna.",
    reference: "Luqman 31:27",
    sharhi: "Ibn Kathir ya ce: Ayar tana nuni da yadda tekuna suke da yawa kuma suna ƙaruwa, domin nunawa mutum girman arzikin Allah.",
    hadith: "Manzon Allah (SAW) ya ce: 'Alherin Allah yana cikin ƙari da yawa da kuma a cikin gasa da tekuna.' (Tirmidhi)"
},
{
    arabic: "إِنَّا كُلَّ شَىْءٍ خَلَقْنَـٰهُ بِقَدَرٍۢ",
    hausa: "Lalle dukkan komai Mun halicce shi da ƙaddara.",
    reference: "Al-Qamar 54:49",
    sharhi: "Ibn Kathir ya ce: Allah ya halicci komai bisa ga ƙaddara da tsari da hikima.",
    hadith: "An karɓo daga Ibn Umar (RA) cewa Manzon Allah (SAW) ya ce: 'Dukkan komai yana ƙarƙashin ƙaddarar Allah.' (Muslim)"
},
{
    arabic: "يَسْـَٔلُهُۥ مَن فِى ٱلسَّمَـٰوَٰتِ وَٱلْأَرْضِ",
    hausa: "Dukkan wanda ke cikin sammai da ƙasa suna roƙonSa.",
    reference: "Ar-Rahman 55:29",
    sharhi: "Ibn Kathir ya ce: Dukkan halittu suna roƙon Allah domin su samu biyan bukatu, kuma Allah yana amsa wa kowa bisa ga hikimarsa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Dukkan halittu suna dogaro da Allah domin biyan bukatunsu.' (Muslim)"
},
{
    arabic: "هُوَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ وَإِلَيْهِ تُرْجَعُونَ",
    hausa: "Shi ne wanda yake rayarwa kuma yana kashewa, kuma zuwa gare shi ne za a mayar da ku.",
    reference: "Yunus 10:56",
    sharhi: "Ibn Kathir ya ce: Allah yana da iko a kan rayuwa da mutuwa, kuma kowa zai koma gare shi domin hisabi.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana rayar da kowa kuma yana kashewa bisa ga tsarinsa.' (Bukhari)"
},
{
    arabic: "هُوَ ٱلَّذِى يُرْسِلُ ٱلرِّيَـٰحَ بُشْرًۭا بَيْنَ يَدَىْ رَحْمَتِهِۦ",
    hausa: "Shi ne wanda yake aikawa da iska don albishir kafin rahamarsa.",
    reference: "Al-A'raf 7:57",
    sharhi: "Ibn Kathir ya ce: Allah yana aikawa da iska domin ta isar da rahama ga halittu, musamman shuka da tsirrai.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah yana aikawa da iska don samar da ruwa ga halittunsa.' (Tirmidhi)"
},
{
    arabic: "وَهُوَ ٱلَّذِى جَعَلَ ٱللَّيْلَ وَٱلنَّهَارَ خِلْفَةًۭ لِّمَنْ أَرَادَ أَن يَذَّكَّرَ أَوْ أَرَادَ شُكُورًۭا",
    hausa: "Shi ne wanda ya sanya dare da rana suna canzawa domin wanda yake so ya tuna ko ya gode.",
    reference: "Al-Furqan 25:62",
    sharhi: "Ibn Abbas ya ce: Allah ya sanya dare da rana suna canzawa domin tunatar da halittu su gode masa bisa ni'imarSa.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Dare da rana suna tsayawa domin tunatarwa ga masu hankali.' (Muslim)"
    },
        {
    arabic: "وَخَلَقْنَـٰكُمْ أَزْوَٰجًۭا",
    hausa: "Mun halicce ku a matsayin ma'aurata.",
    reference: "An-Naba 78:8",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana bayyana yadda Allah Ya halicci mutane maza da mata domin su kasance masu juna.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Mata da maza an halicce su domin cika juna.' (Bukhari)"
},
{
    arabic: "هُوَ ٱلَّذِى يُنَزِّلُ ٱلْغَيْثَ مِنۢ بَعْدِ مَا قَنَطُواْ",
    hausa: "Shi ne wanda yake saukar da ruwan sama bayan mutane sun yi rashin bege.",
    reference: "Ash-Shura 42:28",
    sharhi: "Ibn Kathir ya ce: Allah yana saukar da ruwan sama a lokacin da mutane suka yi tsammanin yunwa domin ya sake rayar da su da tsirrai.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ruwan sama yana zo ne da rahama bayan mutane sun rasa bege.' (Muslim)"
},
{
    arabic: "وَٱلَّذِى نَفْسِى بِيَدِهِۦ مَا تَرَكَتُكُمْ إِلَّا وَأَنْتُمْ عَلَىٰ بَيِّنَةٍۢ",
    hausa: "Na bar ku a kan bayyani mai tsanani.",
    reference: "Al-Ma'ida 5:100",
    sharhi: "Ibn Kathir ya ce: Allah ya aiko ManzonSa tare da gaskiya da bayanai masu haske domin shiryar da mutane.",
    hadith: "An karɓo daga Umar bin Khattab (RA) cewa Manzon Allah (SAW) ya ce: 'Na bar ku akan gaskiya mai tsanani.' (Bukhari)"
},
{
    arabic: "وَٱللَّهُ جَعَلَ لَكُمُ ٱلْأَرْضَ بِسَاطًۭا",
    hausa: "Allah ne ya sanya ƙasa don ku tafiyarta da sauƙi.",
    reference: "Nuh 71:19",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuni da yadda Allah ya halicci ƙasa mai sauƙi a tafiya da amfani ga mutane domin amfanin su.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ƙasa an halicce ta domin ta zama makwancin rayuwar ɗan Adam.' (Tirmidhi)"
},
{
    arabic: "وَمَا كَانَ ٱللَّهُ لِيُضِيعَ إِيمَـٰنَكُمْ",
    hausa: "Allah ba zai batar da imaninku ba.",
    reference: "Al-Baqara 2:143",
    sharhi: "Ibn Kathir ya ce: Allah ba zai batar da sakamakon ayyukan masu imani ba, koda kuwa a kan matsala suka kasance.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah ba zai batar da imaninku ba, koda kuwa a cikin wahala kuke.' (Muslim)"
},
{
    arabic: "ٱلَّذِى خَلَقَ فَسَوَّىٰ",
    hausa: "Wanda ya halitta kuma ya yi daidai da komai.",
    reference: "Al-A'la 87:2",
    sharhi: "Ibn Kathir ya ce: Allah ya halicci komai daidai da tsari da hikima, kuma babu wani abu da yake sabanin juna cikin halittarSa.",
    hadith: "An karɓo daga Abu Musa (RA) cewa Manzon Allah (SAW) ya ce: 'Allah ya tsara komai bisa ga hikima.' (Bukhari)"
},
{
    arabic: "هُوَ ٱلَّذِى خَلَقَكُم مِّن تُرَابٍۢ",
    hausa: "Shi ne wanda ya halicce ku daga ƙasa.",
    reference: "Ghafir 40:67",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana tunatar da mutane asalinsu, cewa an halicce su daga ƙasa kuma za su koma gare ta.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Ku tuna asalinku, daga ƙasa kuka fito kuma za ku koma gare ta.' (Muslim)"
},
{
    arabic: "فَسُبْحَـٰنَ ٱلَّذِى بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ",
    hausa: "Tsarki ya tabbata ga wanda yake hannunsa mallakin dukkan komai.",
    reference: "Ya-Sin 36:83",
    sharhi: "Ibn Kathir ya ce: Allah ne mai iko a kan dukkan komai, kuma babu wani abu da zai hana shi aikata abin da yake so.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Dukkan komai yana ƙarƙashin ikon Allah.' (Muslim)"
},
{
    arabic: "إِنَّ ٱللَّهَ لَا يُغَيِّرُ مَا بِقَوْمٍ حَتَّىٰ يُغَيِّرُواْ مَا بِأَنفُسِهِمْ",
    hausa: "Lalle Allah ba Ya canza halin wani mutane sai sun canza abin da yake a cikin kansu.",
    reference: "Ar-Ra'd 13:11",
    sharhi: "Ibn Kathir ya ce: Allah yana ba da sauƙi ga mutane muddin suna nufin canji daga halin rashin biyayya zuwa ga ƙiyayewa.",
    hadith: "An karɓo daga Ali (RA) cewa Manzon Allah (SAW) ya ce: 'Idan mutum ya canza halinsa zuwa kyawawa, Allah zai gyara masa al'amuransa.' (Tirmidhi)"
},
{
    arabic: "هُوَ ٱلَّذِى جَعَلَ لَكُمُ ٱلْأَرْضَ ذَلُولًۭا فَٱمْشُواْ فِى مَنَاكِبِهَا",
    hausa: "Shi ne wanda ya sanya muku ƙasa a matsayin tafarki mai sauƙi, don ku yi tafiya a cikin rassanta.",
    reference: "Al-Mulk 67:15",
    sharhi: "Ibn Kathir ya ce: Allah ya sanya ƙasa ta zama waje mai sauƙi a gare mu domin gudanar da rayuwa da gudanar da ayyukanmu na yau da kullum.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ƙasa tana ƙunshe da ni'ima don rayuwar ɗan Adam ta kasance mai sauƙi.' (Tirmidhi)"
},
        {
    arabic: "وَٱللَّهُ ٱلَّذِىٓ أَرْسَلَ ٱلرِّيَـٰحَ فَتُثِيرُ سَحَابًۭا",
    hausa: "Allah ne wanda ya aiko da iskar da take tasar da gajimare.",
    reference: "Ar-Rum 30:48",
    sharhi: "Ibn Kathir ya ce: Allah ya aiko da iska don ta tasar da gajimare, domin ya saukar da ruwa ga ƙasa mai ƙunci.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Iska tana saukar da rahamar Allah domin ta tasar da ruwa daga gajimare.' (Bukhari)"
},
{
    arabic: "وَمَن يُهِنِ ٱللَّهُ فَمَا لَهُۥ مِن مُّكْرِمٍۢ",
    hausa: "Duk wanda Allah Ya wulakanta, babu mai masa daraja.",
    reference: "Al-Hajj 22:18",
    sharhi: "Ibn Kathir ya ce: Allah yana baiwa wanda Yake so daraja kuma Yana wulakanta wanda Yake so domin komai yana karkashin ikonsa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk wanda Allah Ya wulakanta, babu wanda zai iya masa daraja.' (Muslim)"
},
{
    arabic: "وَلَكُمْ فِيهَا جَمَالٌۭ حِينَ تُرِيحُونَ وَحِينَ تَسْرَحُونَ",
    hausa: "Kuna da kyau a cikin dabbobinku lokacin da kuka dawo dasu daga kiwo da lokacin da kuka tafi dasu kiwo.",
    reference: "An-Nahl 16:6",
    sharhi: "Ibn Kathir ya ce: Allah Ya sanya kyau da amfani a cikin dabbobi domin mutane su more su yayin kiwo da dawowa daga kiwo.",
    hadith: "Manzon Allah (SAW) ya ce: 'Allah Ya sanya muku ni'ima a cikin dabbobi, ku kula da su da kyau.' (Muslim)"
},
{
    arabic: "يُحْيِى ٱلْأَرْضَ بَعْدَ مَوْتِهَا",
    hausa: "Yana raya ƙasa bayan ta mutu.",
    reference: "Ar-Rum 30:50",
    sharhi: "Ibn Kathir ya ce: Allah yana rayar da ƙasa ta hanyar saukar da ruwa bayan ta bushe, domin ya ba da tsirrai masu albarka.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Kamar yadda Allah yake raya ƙasa bayan ta bushe, haka zai raya matattu a ranar lahira.' (Bukhari)"
},
{
    arabic: "فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ",
    hausa: "A cikinta ake raba dukkan al'amura masu hikima.",
    reference: "Ad-Dukhan 44:4",
    sharhi: "Ibn Kathir ya ce: Allah yana raba dukkan al'amura a cikin daren Lailatul Qadr, kuma yana bayar da hukunci bisa ga hikima.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'A daren Lailatul Qadr Allah yana saukar da hukunci bisa ga hikima.' (Muslim)"
},
{
    arabic: "لِيَبْلُوَكُمْ أَيُّكُمْ أَحْسَنُ عَمَلًا",
    hausa: "Don Ya jarabce ku wanne ne mafi kyawun aiki a cikinku.",
    reference: "Al-Mulk 67:2",
    sharhi: "Ibn Kathir ya ce: Allah ya halicci rayuwa da mutuwa domin ya gwada ayyukan bayinsa kuma ya tabbatar da wadanda suke kyawawan ayyuka.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana gwada bayinsa don ya ga wanda yake aikata mafi kyau.' (Tirmidhi)"
},
{
    arabic: "إِنَّ ٱللَّهَ مَعَ ٱلصَّـٰبِرِينَ",
    hausa: "Lalle ne Allah yana tare da masu haƙuri.",
    reference: "Al-Baqara 2:153",
    sharhi: "Ibn Kathir ya ce: Allah yana ba da taimako da nesa ga waɗanda suke da haƙuri a kan gwaji da fitina.",
    hadith: "An karɓo daga Anas bin Malik (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana tare da masu haƙuri a dukkan lamuran su.' (Bukhari)"
},
{
    arabic: "إِنَّهُۥ كَانَ غَفُورًۭا رَّحِيمًۭا",
    hausa: "Lalle ne Shi mai gafara ne, mai jin ƙai.",
    reference: "Al-Furqan 25:70",
    sharhi: "Ibn Kathir ya ce: Allah yana gafarta wa bayinsa idan sun tuba, kuma shi mai jin ƙai ne ga masu neman gafara.",
    hadith: "An karɓo daga Abu Musa (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana gafartawa duk wanda ya tuba cikin gaskiya.' (Muslim)"
},
{
    arabic: "إِنَّ مَعَ ٱلْعُسْرِ يُسْرًۭا",
    hausa: "Lalle da wahala akwai sauƙi.",
    reference: "Ash-Sharh 94:6",
    sharhi: "Ibn Kathir ya ce: Allah yana tabbatar wa bayinsa cewa kowane wahala yana tare da sauƙi, kuma babu wani gwaji face da sauƙi ya biyo bayansa.",
    hadith: "An karɓo daga Abdullah bin Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Kowane wahala yana tare da sauƙi biyu.' (Tirmidhi)"
},
{
    arabic: "وَجَعَلْنَا مِنَ ٱلْمَآءِ كُلَّ شَىْءٍ حَىٍّ",
    hausa: "Mun sanya daga ruwa dukkan abu mai rai.",
    reference: "Al-Anbiya 21:30",
    sharhi: "Ibn Kathir ya ce: Allah ya sanya ruwa a matsayin tushen rayuwar dukkan halitta, kuma babu wata halitta da za ta iya rayuwa ba tare da ruwa ba.",
    hadith: "An karɓo daga Anas bin Malik (RA) cewa Manzon Allah (SAW) ya ce: 'Ruwa shine tushen rayuwar dukkan abu mai rai.' (Muslim)"
},
        {
    arabic: "فَمَا ظَنُّكُم بِرَبِّ ٱلْعَـٰلَمِينَ",
    hausa: "Me kuke tsammani game da Ubangijin talikai?",
    reference: "As-Saffat 37:87",
    sharhi: "Ibn Kathir ya ce: Allah yana tambayar mutanen da suke shakka game da tashin kiyama, yana nuna musu girman al'amarin.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Ku yi tunani mai kyau game da Allah, domin lalle Allah yana tare da tunanin bawa.' (Bukhari)"
},
{
    arabic: "وَهُوَ ٱلَّذِى خَلَقَ ٱللَّيْلَ وَٱلنَّهَارَ",
    hausa: "Kuma shi ne wanda ya halicci dare da rana.",
    reference: "Al-Anbiya 21:33",
    sharhi: "Ibn Kathir ya ce: Allah Ya halicci dare da rana domin mutane su sami lokacin hutawa da yin ibada.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana tsara dare da rana domin nufinSa, ku more daga cikinsu ta hanyar ibada da aiki.' (Muslim)"
},
{
    arabic: "وَفِىٓ أَنفُسِكُمْ ۚ أَفَلَا تُبْصِرُونَ",
    hausa: "Kuma a cikin kanku akwai ayoyi. Shin ba zaku gani ba?",
    reference: "Adh-Dhariyat 51:21",
    sharhi: "Ibn Kathir ya ce: Allah yana nuna alamu a jikin dan Adam domin ya tabbatar da girman halittarSa da ikonsa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ka duba jikin ka, domin akwai alamu na ikon Allah a cikinsa.' (Muslim)"
},
{
    arabic: "أَوَلَمْ يَرَوْا أَنَّا نَسُوقُ ٱلْمَآءَ إِلَى ٱلْأَرْضِ ٱلْجُرُزِ",
    hausa: "Shin ba su ga yadda muke ja ruwa zuwa ƙasar da ta bushe ba?",
    reference: "As-Sajda 32:27",
    sharhi: "Ibn Kathir ya ce: Allah yana rarraba ruwa zuwa ƙasashen da suka bushe don ya raya su da tsirrai.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana raya ƙasa bayan bushewa da ruwa.' (Muslim)"
},
{
    arabic: "وَهُوَ عَلَىٰ كُلِّ شَىْءٍۢ قَدِيرٌۭ",
    hausa: "Kuma shi ne mai iko akan dukkan al'amura.",
    reference: "Al-Mulk 67:1",
    sharhi: "Ibn Kathir ya ce: Allah yana da cikakken iko akan komai, ba wani abu da zai gagare shi.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana da iko akan dukkan al'amura.' (Tirmidhi)"
},
{
    arabic: "وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ",
    hausa: "Lalle kai kana kan halayya mai girma.",
    reference: "Al-Qalam 68:4",
    sharhi: "Ibn Kathir ya ce: Allah yana yaba wa ManzonSa (SAW) saboda halayensa na kirki, inda yake zama misali ga al'umma.",
    hadith: "An karɓo daga Anas bin Malik (RA) cewa Manzon Allah (SAW) ya ce: 'Ni ne aka aiko don in kammala kyawawan halaye.' (Bukhari)"
},
{
    arabic: "هُوَ ٱلَّذِى يُنَزِّلُ ٱلْغَيْثَ مِنۢ بَعْدِ مَا قَنَطُوا۟",
    hausa: "Shi ne wanda yake saukar da ruwan sama bayan mutane sun yanke tsammani.",
    reference: "Ash-Shura 42:28",
    sharhi: "Ibn Kathir ya ce: Allah yana saukar da ruwan sama bayan mutane sun yanke ƙauna, domin yana yin komai bisa ga lokaci da hikimarsa.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana kawo sauƙi bayan gwaji.' (Muslim)"
},
{
    arabic: "فَٱنظُرْ إِلَىٰٓ ءَاثَـٰرِ رَحْمَتِ ٱللَّهِ",
    hausa: "Ka duba alamomin rahamar Allah.",
    reference: "Ar-Rum 30:50",
    sharhi: "Ibn Kathir ya ce: Alamomin rahamar Allah suna bayyana a cikin halittunsa da kuma saukar da rahama ga bayinsa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Rahamar Allah tana bayyana a cikin dukkan abubuwan halitta.' (Bukhari)"
},
{
    arabic: "وَإِنَّ جُندَنَا لَهُمُ ٱلْغَـٰلِبُونَ",
    hausa: "Lalle ne rundunarMu za su yi nasara.",
    reference: "As-Saffat 37:173",
    sharhi: "Ibn Kathir ya ce: Allah yana tabbatar wa da bayinsa masu biyayya cewa za su yi nasara bisa ga abokan gaba domin Allah yana tare da su.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Rundunar Allah ba za ta taɓa faduwa ba.' (Muslim)"
},
{
    arabic: "وَمَن يَتَوَكَّلْ عَلَى ٱللَّهِ فَهُوَ حَسْبُهُۥٓ",
    hausa: "Duk wanda ya dogara ga Allah, zai ishe shi.",
    reference: "At-Talaq 65:3",
    sharhi: "Ibn Kathir ya ce: Allah yana isar wa bayinsa da suke dogara gare shi, kuma yana ba su kariya daga dukkan abokan gaba.",
    hadith: "An karɓo daga Umar bin Al-Khattab (RA) cewa Manzon Allah (SAW) ya ce: 'Duk wanda ya dogara ga Allah, zai wadace shi.' (Tirmidhi)"
        },
        {
    arabic: "أَوَلَمْ يَرَوْاْ إِلَى ٱلطَّيْرِ مُسَخَّرَٰتٍۢ فِى جَوِّ ٱلسَّمَآءِ",
    hausa: "Shin ba su lura da tsuntsaye da aka daidaita su ba a cikin sararin sama?",
    reference: "An-Nahl 16:79",
    sharhi: "Ibn Kathir ya ce: Allah ya yi wa tsuntsaye iko su tashi cikin sararin sama ba tare da faɗuwa ba, abin mamaki ne ga wanda ke nazari.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana rike tsuntsaye a sama da ikonsa.' (Bukhari)"
},
{
    arabic: "فَإِنَّ مَعَ ٱلْعُسْرِ يُسْرًا",
    hausa: "Hakika, tare da kunci akwai sauƙi.",
    reference: "Ash-Sharh 94:6",
    sharhi: "Ibn Kathir ya ce: Allah yana tabbatar wa da bayinsa cewa kowane kunci yana tare da sauƙi daga Allah, bayan gwaji akwai sauƙin da ya zo daga rahamarsa.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Bayan kowanne wahala, Allah yana kawo sauƙi.' (Muslim)"
},
{
    arabic: "وَمَا تَسْقُطُ مِن وَرَقَةٍ إِلَّا يَعْلَمُهَا",
    hausa: "Kuma ba wata ganye da ke faɗuwa ba face yana sane da ita.",
    reference: "Al-An'am 6:59",
    sharhi: "Ibn Kathir ya ce: Wannan aya tana nuna cewa ilimin Allah yana game da komai, komai ƙanƙantarsa ko girmansa.",
    hadith: "An karɓo daga Jabir (RA) cewa Manzon Allah (SAW) ya ce: 'Komai yana cikin ilimin Allah.' (Bukhari)"
},
{
    arabic: "هُوَ ٱلَّذِى يُحْىِۦ وَيُمِيتُ",
    hausa: "Shi ne wanda yake rayawa kuma yake kashewa.",
    reference: "Ghāfir 40:68",
    sharhi: "Ibn Kathir ya ce: Allah yana da ikon rayawa da kashewa, babu wanda zai iya tsawaita rai ko hanzarta mutuwa ba tare da nufin Allah ba.",
    hadith: "Manzon Allah (SAW) ya ce: 'Rayuwa da mutuwa suna cikin hannun Allah.' (Muslim)"
},
{
    arabic: "فَسُبْحَـٰنَ ٱلَّذِى بِيَدِهِۦ مَلَكُوتُ كُلِّ شَىْءٍۢ",
    hausa: "To, tsarki ya tabbata ga wanda yake hannunsa mulkin dukan komai.",
    reference: "Yā Sīn 36:83",
    sharhi: "Ibn Kathir ya ce: Allah yana rike da dukkan mulki, komai yana karkashin ikonSa, tsarki da girma sun tabbata gare Shi.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Dukkan mulkin sammai da ƙasa yana cikin hannun Allah.' (Tirmidhi)"
},
{
    arabic: "فَإِذَا شَقَّتِ ٱلسَّمَآءُ فَكَانَتْ وَرْدَةًۭ كَٱلدِّهَانِ",
    hausa: "To idan sama ta fashe, sai ta zama kamar fure mai launin jajaye kamar mai.",
    reference: "Ar-Rahman 55:37",
    sharhi: "Ibn Kathir ya ce: A ranar alƙiyama, sama za ta rushe kuma ta zama kamar furanni masu ja, wannan yana nuna tsananin ranar alƙiyama.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'A ranar alƙiyama, sama za ta rushe.' (Muslim)"
},
{
    arabic: "أَفَلَا يَنظُرُونَ إِلَى ٱلْإِبِلِ كَيْفَ خُلِقَتْ",
    hausa: "Shin ba sa lura da raƙuma yadda aka halicce su?",
    reference: "Al-Ghashiya 88:17",
    sharhi: "Ibn Kathir ya ce: Allah yana jawo hankalin mutane ga halittun da suke kusa da su, kamar raƙumi, wanda ya kasance daya daga cikin manyan abubuwan al'ajabi a halitta.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duba raƙumi, za ka ga abin al'ajabi a halittarsa.' (Muslim)"
},
{
    arabic: "يَٰٓأَيُّهَا ٱلنَّاسُ ضُرِبَ مَثَلٌۭ فَٱسْتَمِعُوا۟ لَهُۥٓ",
    hausa: "Ya ku mutane! An buga misali gare ku, ku saurara da kyau.",
    reference: "Al-Hajj 22:73",
    sharhi: "Ibn Kathir ya ce: Allah yana bayar da misali domin mutane su yi tunani da nazari kan hikimarsa da alherinSa.",
    hadith: "An karɓo daga Abdullah bin Mas'ud (RA) cewa Manzon Allah (SAW) ya ce: 'Misalai suna kawo mana fahimtar abin da ke cikin al'amuran duniya da lahira.' (Bukhari)"
},
{
    arabic: "وَأَنزَلْنَا مِنَ ٱلسَّمَآءِ مَآءًۭ مُّبَٰرَكًۭا",
    hausa: "Mun saukar da ruwa daga sama mai albarka.",
    reference: "Qāf 50:9",
    sharhi: "Ibn Kathir ya ce: Ruwan da Allah ya saukar daga sama yana kawo albarka ga ƙasa, yana rayar da duk abin da ya kasance yana buƙatar ruwa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Ruwan sama yana zuwa tare da albarkar Allah.' (Bukhari)"
},
{
    arabic: "وَإِنَّ إِلَىٰ رَبِّكَ ٱلْمُنتَهَىٰ",
    hausa: "Kuma lalle, zuwa ga Ubangijinka ne makoma ta ƙarshe.",
    reference: "An-Najm 53:42",
    sharhi: "Ibn Kathir ya ce: Dukkan al'amura suna komawa ga Allah a ƙarshen lamari, domin Shi ne mai hukunci mai ƙarshe a dukkan al'amura.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'Makomar kowane bawa ita ce zuwa ga Allah.' (Muslim)"
},
     {
    arabic: "فَسُبْحَـٰنَ ٱلَّذِى خَلَقَ ٱلْأَزْوَٰجَ كُلَّهَا",
    hausa: "To, tsarki ya tabbata ga wanda ya halicci ma'aurata duka.",
    reference: "Yā Sīn 36:36",
    sharhi: "Ibn Kathir ya ce: Allah ya halicci komai cikin ma'aurata: namiji da mace, dare da rana, fari da baƙi, kuma ya kawo daidaito a cikin halittarsa.",
    hadith: "An karɓo daga Ibn Abbas (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana halitta cikin ma'aurata domin kowane abu ya daidaita.' (Tirmidhi)"
},
{
    arabic: "وَإِن تَعُدُّوا۟ نِعْمَتَ ٱللَّهِ لَا تُحْصُوهَآ",
    hausa: "Idan kuna ƙidaya ni'imomin Allah, ba za ku iya ƙidayasu ba.",
    reference: "An-Nahl 16:18",
    sharhi: "Ibn Kathir ya ce: Dukkan alheran da Allah ya yi wa mutane suna da yawa, ba za su iya ƙidaya su duka ba saboda yawan su da kuma tsananin alherinSa.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk wanda ya gode wa Allah, zai ƙara masa ni'ima.' (Bukhari)"
},
{
    arabic: "وَخُلِقَ ٱلْإِنسَـٰنُ ضَعِيفًا",
    hausa: "Kuma an halicci mutum cikin rauni.",
    reference: "An-Nisā' 4:28",
    sharhi: "Ibn Kathir ya ce: Allah ya san cewa mutum yana da rauni, shi ya sa ya sauƙaƙa masa cikin ibada da dokoki masu sauƙi.",
    hadith: "An karɓo daga Aisha (RA) cewa Manzon Allah (SAW) ya ce: 'Allah ya sauƙaƙa dokokinSa saboda saninSa da raunin bayi.' (Muslim)"
},
{
    arabic: "لَا تَقْنَطُوا۟ مِن رَّحْمَةِ ٱللَّهِ",
    hausa: "Kada ku yanke ƙauna daga rahamar Allah.",
    reference: "Az-Zumar 39:53",
    sharhi: "Ibn Kathir ya ce: Allah yana umartar bayinsa da kada su yanke ƙauna daga rahamarsa, ko da kuwa sun aikata manyan zunubai, domin rahamarsa ta fi girma.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Rahamar Allah tana fi girma da fushinsa.' (Bukhari)"
},
{
    arabic: "وَكَفَىٰ بِٱللَّهِ وَكِيلًا",
    hausa: "Kuma Allah ya isa ya zama wakili.",
    reference: "An-Nisā' 4:81",
    sharhi: "Ibn Kathir ya ce: Allah yana ƙarfafa wa bayinsa gwiwa su dogara gare Shi a dukkan al'amuransu, domin Shi ne mafi kyau a matsayin mai kula.",
    hadith: "Manzon Allah (SAW) ya ce: 'Duk wanda ya dogara ga Allah, Allah zai isar masa.' (Tirmidhi)"
},
{
    arabic: "فَإِنَّ ٱللَّهَ قَوِىٌّ عَزِيزٌ",
    hausa: "Hakika, Allah mai ƙarfi ne, mai ƙasƙantarwa.",
    reference: "Al-Ḥajj 22:40",
    sharhi: "Ibn Kathir ya ce: Allah yana da iko mai girma da ƙarfin da babu wanda zai iya kayar da Shi, kuma duk wanda ya tsani gaskiya zai rasa nasara.",
    hadith: "An karɓo daga Umar bin Al-Khattab (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana da iko da ba wanda zai iya kayar da Shi.' (Muslim)"
},
{
    arabic: "وَٱللَّهُ خَلَقَكُمۡ وَمَا تَعۡمَلُونَ",
    hausa: "Kuma Allah ne ya halicce ku da abin da kuke aikatawa.",
    reference: "As-Saffat 37:96",
    sharhi: "Ibn Kathir ya ce: Dukkan ayyukan bayi, ko dai su na biyayya ko sabo, duk suna karkashin ikon Allah, Shi ne mai halitta komai.",
    hadith: "An karɓo daga Abu Huraira (RA) cewa Manzon Allah (SAW) ya ce: 'Komai yana karkashin ikon Allah.' (Bukhari)"
},
{
    arabic: "إِنَّ ٱللَّهَ كَانَ عَلَيْكُمْ رَقِيبًا",
    hausa: "Lalle Allah yana kula da ku sosai.",
    reference: "An-Nisā' 4:1",
    sharhi: "Ibn Kathir ya ce: Allah yana lura da kowane bawa da aikinsa, babu wani abu da zai ɓuya daga gare Shi.",
    hadith: "Manzon Allah (SAW) ya ce: 'Dukkan ayyukan bawa suna cikin kulawar Allah.' (Muslim)"
},
{
    arabic: "إِنَّا نَحْنُ نَزَّلْنَا ٱلذِّكْرَ وَإِنَّا لَهُۥ لَحَٰفِظُونَ",
    hausa: "Lalle ne, Mu ne muka saukar da Alƙur'ani, kuma hakika Mu ne masu kiyaye shi.",
    reference: "Al-Ḥijr 15:9",
    sharhi: "Ibn Kathir ya ce: Allah yana tabbatar da cewa Alƙur'ani ba zai taba ɓacewa ko lalacewa ba, domin Shi ne mai kiyaye shi.",
    hadith: "An karɓo daga Abu Sa'id Al-Khudri (RA) cewa Manzon Allah (SAW) ya ce: 'Alƙur'ani zai kasance a tsare har zuwa ranar alƙiyama.' (Tirmidhi)"
},
{
    arabic: "فَإِنَّكَ بِأَعْيُنِنَا",
    hausa: "Hakika kai kuna karkashin kulawarMu.",
    reference: "Aṭ-Ṭūr 52:48",
    sharhi: "Ibn Kathir ya ce: Wannan kalma tana tabbatar da cewa Allah yana kulawa da ManzonSa da dukkan bayin da suka gaskata da Shi.",
    hadith: "An karɓo daga Anas bin Malik (RA) cewa Manzon Allah (SAW) ya ce: 'Allah yana kula da duk wanda ya dogara ga Shi.' (Muslim)"
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

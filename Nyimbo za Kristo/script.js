document.addEventListener("DOMContentLoaded", function () {
    const displayButton = document.getElementById("displayButton");
    const previousButton = document.getElementById("previousButton");
    const nextButton = document.getElementById("nextButton");
    const songNumberInput = document.getElementById("songNumberInput");
    const songTitleDisplay = document.getElementById("songTitle");
    const lyricsDisplay = document.getElementById("lyricsDisplay");

    const hymnalData = {
        1: `1. MTAKATIFU, MTAKATIFU, MTAKATIFU
        1. U Mtakatifu! Mungu mwenyezi!
        Alfajiri sifa zako tutaimba;
        U Mtakatifu , Bwana wa huruma,
        Mungu wa vyote hata milele.
        
        2. U Mtakatifu! Na malaika
        Wengi sana wanakuabudu wote;
        Elfu na maelfu wanakusujudu
        Wa zamani na hata milele.
        
        3. U Mtakatifu! Ingawa giza
        Lakuficha fahari tusiione,
        U Mtakatifu! Wewe peke yako,
        Kamili kwa uwezo na pendo.
        
        `,

        2: `2. Twamsifu Mungu
            1. Twamsifu Mungu, Mwana wa upendo
            Aliyetufia na kupaa juu.

            Chorus
            Aleluya! Usifiwe, Aleluya! Amin;
            Aleluya! Usifiwe, utabariki.
            
            2. Twamsifu Mungu, Roho mtakatifu,
            Akatufunulia Mwokozi wetu.

            Chorus
            Aleluya! Usifiwe, Aleluya! Amin;
            Aleluya! Usifiwe, utabariki.
            
            3. Twamsifu Mwana, aliyetufia
            Ametukomboa na kutuongoza.

            Chorus
            Aleluya! Usifiwe, Aleluya! Amin;
            Aleluya! Usifiwe, utabariki.
            
            4. Twamsifu Mungu wa neema yote
            Aliyetwaa dhambi, akazifuta.

            Chorus
            Aleluya! Usifiwe, Aleluya! Amin;
            Aleluya! Usifiwe, utabariki.
            
            5. Twamshe tena, tujaze na pendo.
            Moyoni uwashe moto wa Roho.
            
            Chorus
            Aleluya! Usifiwe, Aleluya! Amin;
            Aleluya! Usifiwe, utabariki.
            
            ..`,
        
        3: `3. Mungu Atukuzwe
            1. Mungu atukuzwe kwa mambo makuu,
            Upendo wake ulitupa Yesu,
            Aliyejitoa maisha yake,
            Tuwe nao uzima wamilele.

            Chorus
            Msifu, msifu, dunia sikia;
            Msifu, msifu, watu wafurahi;
            Na uje kwa Baba, kwa yesu Mwana,
            Ukamtutukuze kwa mambo yote.

            Chorus
            Msifu, msifu, dunia sikia;
            Msifu, msifu, watu wafurahi;
            Na uje kwa Baba, kwa yesu Mwana,
            Ukamtutukuze kwa mambo yote.

            2. Wokovu kamili, zawadi kwetu,
            Ahadi ya Mungu kwa ulimwengu;
            Wanaomwamini na kuungama,
            Mara moja wale husamehewa

            Chorus
            Msifu, msifu, dunia sikia;
            Msifu, msifu, watu wafurahi;
            Na uje kwa Baba, kwa yesu Mwana,
            Ukamtutukuze kwa mambo yote.

            3. Alitufundisha mambo makuu,
            Alihakikisha wokovu wetu,
            Lakini zaidi, ajabu kubwa,
            Yesu atakuja na tutamwona.

            Chorus
            Msifu, msifu, dunia sikia;
            Msifu, msifu, watu wafurahi;
            Na uje kwa Baba, kwa yesu Mwana,
            Ukamtutukuze kwa mambo yote.

            ..`,
        4: `4. Jina la Yesu, Salamu 
        1. Jina la Yesu, salamu! Lisujidieni,
        Ninyi mbinguni, hukumu, Na enzi mpeni
        Ninyi mbinguni, hukumu, Na enzi mpeni

        2. Enzi na apewe kwenu, watetea dini;
        Mkuzeni Bwana wenu, Na enzi mpeni
        Mkuzeni Bwana wenu, Na enzi mpeni

        3. Enyi mbegu ya rehema nanyi msifu;
        Mmeponywa kwa neema, Na enzi mpeni
        Mmeponywa kwa neema, Na enzi mpeni

        4. Wenye dhambi kumbukeni ya msalabani
        Kwa furaha msifuni, Na enzi mpeni
        Kwa furaha msifuni, Na enzi mpeni.

        5. Kila mtu duniani msujudieni
        Kote-kote msifuni, Na enzi mpeni
        Kote-kote msifuni, Na enzi mpeni.

        6. Sisi na wao pamoja tu mumo sifani.
        Milele sifa ni moja, na mpeni
        Milele sifa ni moja, na enzi mpeni`,
        5:`5. Na Tumwabudu Mfalme Mtukufu
            1. Na tumwabudu huyu Mfalme,
            Sifa za nguvu zake zivume;
            Ni ngao, ni ngome, Yeye milele,
            Ndizo sifa zake kale na kale.

            2. Tazameni ulimwengu huu,
            Ulivyoumwa, ajabu kuu;
            Sasa umewekwa pahali pake,
            Hata utimize majira yake.

            3. Kwa ulinzi wako, kwetu Bwana,
            Twakushukuru, U mwema sana;
            Hupewa chakula kila kiumbe,
            Kila kitu kila mahali pake.

            4. Wanadamu tu wanyange sana,
            Twakutumaini wewe, Bwana;
            Kamwe haupunguiwsako wema,
            Mkoombozi wetu, Rafiki mwema.`,
        6:`6. KUMEKUCHA KWA UZURI
        1. Kumekucha kwa uzuri. Nafumbua macho;
        Baba amenihifadhi, Ni wake moto.
        
        2. Bwana niwe leo kutwa Ulinzini mwako;
        Nisamehe dhambi, niwe Mikononi mwako.
        
        3. Roho wako anikae moyoni daima;
        Anitakase, nione Uso wako.`,
        7:`7. Mungu Msaada Wetu           
        1. Mungu Msaada wetu tangu miaka yote;
        Ndiwe tumaini letu la zamani zote.

        2. Kivuli cha kiti chako ndiyo ngome yetu,
        Watosha mkono wako ni ulinzi wetu.

        3. Kwanza havijakuwako nchi na milima,
        Ndiwe Mungu; chini yako twakaa salama.

        4. Na miaka elfu ni kama siku moja kwako;
        Utatulinda daima, tu wenyeji wako.

        5. Bwana msaada wetu tangu miaka yote,
        Mlinzi wetu na ngome, daima, milele.`,
        8:`008. UJE UKOMBOZI
        1. Unisikie ninapolia, Uje. M-kombozi;
        Moyo wangu hukutazamia, Uje. M-kombozi.
        
        Chorus
        Nimepotea mbali na kwangu, Nimetanga peke yangu;
        Unichukulie sasa kwako: Uje M-kombozi.
        
        2. Sina pahali pa kupumzika, Uje M-kombozi
        Unipe raha, nuru, uzima, Uje M-kombozi.

        Chorus
        Nimepotea mbali na kwangu, Nimetanga peke yangu;
        Unichukulie sasa kwako: Uje M-kombozi.

        3. Nimechoka, njia ni ndefu Uje, M-kombozi
        Macho yako kuona nataka, Uje M-kombozi.

        Chorus
        Nimepotea mbali na kwangu, Nimetanga peke yangu;
        Unichukulie sasa kwako: Uje M-kombozi.

        4. Bwana daima hutanidharau, Uje, M-kombozi
        Kilio changu utanijibu, Uje, M-kombozi.

        Chorus
        Nimepotea mbali na kwangu, Nimetanga peke yangu;
        Unichukulie sasa kwako: Uje M-kombozi.
        ..`,
        9:`9. Mwumbaji, Mfalme
            1. Mwumbaji, Mfalme, Vitu vyote vyako;
            Ni kwa ukarimu wako; Ninabarikiwa,
            Ni kwa ukarimu wako, Ninabarikiwa.

            2. Uliyeniumba, Nakutegemea;
            Sina budi kuzisifu Hisani zako kuu,
            Sina budi kuzisifu Hisani zako kuu.

            3. Nitatoa nini? Kwanza vyote vyako,
            Upendo wako wadai Moyo wa shukrani,
            Upendo wako wadai Moyo wa shukrani.

            4. Nipewe neema, Niwe na uwezo
            Wa kuishi kwako, Bwana: Siku zangu,zako,
            Wa kuishi kwako, Bwana: Siku zangu,zako.
            `,
        10:`10. Kristo Wa Neema Yote 
            1. Kristo wa neema zote imbisha moyo wangu
            Mifulizo ya Baraka inaamsha shangwe kuu.
            Unifunze nikupende, nikuandame kote,
            Moyo wangu ukajaefuraha na tumaini.

            2. Namshukuru sana Bwana, aniwezesha huku.
            Salama aniongoza hata kule nyuumbani.
            Yesu alinitafuta njiani mbali kwake,
            Akatoa damu yake nipone hatarini.

            3. Kweli mimi mwiwa mkubwa wa neema daima;
            Wema wako unifunge zaidi kwako Bwana.
            Ili nisivutwe tena kukuacha, ee Mponya,
            Nitwalie moyo wangu uwe wako kamili.`,
        11:`11: Jina La Bwana Li Heri
            1. Sauti zote ziimbe, jina la Yesu li heri !
            Sifa za mfalme Mungu, jina la Yesu li heri !

            Chorus
            Jina li heri, jina li heri, jina la Yesu li heri.
            Jina li heri, jina li heri, jina la Yesu li heri

            2. Hofu zote la tuliza, jina la Yesu li heri !
            Mwenye dhambi hukubali, jina la Yesu li heri.

            Chorus
            Jina li heri, jina li heri, jina la Yesu li heri.
            Jina li heri, jina li heri, jina la Yesu li heri

            3. Huvunja nguvu za dhambi, jina la Yesu li heri.
            Damu yake hutakasa, jina la Yesu li heri.

            Chorus
            Jina li heri, jina li heri, jina la Yesu li heri.
            Jina li heri, jina li heri, jina la Yesu li heri

            4. Sauti yake ni tamu, jina la Yesu li heri.
            Wakaburini husikia, jina la Yesu li heri.

            Chorus
            Jina li heri, jina li heri, jina la Yesu li heri.
            Jina li heri, jina li heri, jina la Yesu li heri

            5. Lugha maelf(u) zitaimba, jina la Yesu li heri.
            Astahili Mwana-Kondoo, jina la Yesu li heri.
            
            Chorus
            Jina li heri, jina li heri, jina la Yesu li heri.
            Jina li heri, jina li heri, jina la Yesu li heri
            ..`,
        12:`12: Msifu Mungu
        1. Msifu Mungu wa neema,
        Enyi viumbe po pote;
        Wa juu pia sifuni Baba,
        Mwana naye Roho! [AMIN]`,
        13:`13. YESU UJE KWETU
        1. Umetuahidi kwamba wawili watatu , Kwajina lako wakija,
        Utabariki; Kwa hivi leo twapiga magoti nyumbani pako.
        
        Chorus
        Yesu uje kwetu Utubariki;
        Yesu uje kwetu Uwe karibu.
        
        2. Umekuwa nasi siku nyingine, Tunakuhitaji mpaka mwisho.
        Uje Mwokozi, tupe neema; ‘Tusikie Yesu, utubariki.
        
        Chorus
        Yesu uje kwetu Utubariki;
        Yesu uje kwetu Uwe karibu.
            
        3. Uje utawale sauti zetu: Nyimbo, nazo sala uziagize;
        Imani izidi, ikamilike; Pendo liwe safi, na njia nuru.
                
        Chorus
        Yesu uje kwetu Utubariki;
        Yesu uje kwetu Uwe karibu.
    
        ..`,
        14:`14: Nitembee Nawe
        1. Nitembee nawe Mungu
        Alivyotembea Henok;
        Mkono wangu uushike;
        Unene nami kwa pole;
        Ingawa njia siioni,
        Yesu nitembee nawe.
        
        2. Siwezi tembea peke;
        Pana dhoruba mbinguni;
        Mitego ya miguu, elfu;
        Adui wengi hufichwa;
        Uitulize bahari,
        Yesu nitembee nawe.
        
        3. Ukinishika mkono,
        Anasa kwangu hasara;
        Kwa nguvu nitasafiri;
        'Tautwika msalaba;
        Hata mji wa sayuni
        Yesu nitembee nawe.`,
        15:`15: Nena Mungu
        1. Nena rohoni Yesu, Nena kwa upole
        Sema kwangu kwa pendo, "Huachwi upweke."
        Fungua moyo wangu, Nisikie mara;
        Jaza roho na sifa, Sifa zako Bwana.
        
        Chorus
        Kila siku unene, Vile kwa upole,
        Nong'oneza kwa pole wa pendo:
        "Daima utashinda, Uhuru ni wako."
        Nisikie maneno; "Huachwi upweke."
        
        2. Nena kwa wana wako, waonyeshe njia,
        Wajaze kwa furaha, Fundisha kuomba;
        Wajifunze kutoa Maisha kamili,
        Wahimize ufalme, Tumwone mwokozi.
          
        Chorus
        Kila siku unene, Vile kwa upole,
        Nong'oneza kwa pole wa pendo:
        "Daima utashinda, Uhuru ni wako."
        Nisikie maneno; "Huachwi upweke."
       
        3. Nena kama zamani, Ulipoitoa
        Sheria takatifu: Niiweke pia;
        Nipate kutukuza Wewe Mungu wangu,
        Mapenzi yoko tena, Daima kusifu.
                
        Chorus
        Kila siku unene, Vile kwa upole,
        Nong'oneza kwa pole wa pendo:
        "Daima utashinda, Uhuru ni wako."
        Nisikie maneno; "Huachwi upweke."
 
        ..`,
        16:`16: Ninakuhitaji
        1. Bwana ninakuhitaji! Nimpofu, maskini;
        Unishike mkononi, Kwako napata nguvu.

        Chorus
        Kila saa, kila saa Bwana ninakuhitaji;
        Kila saa, kila saa, Unilinde kila saa.

        2. Univike na mavazi Ya usikivu wako;
        Nguo zangu ni machafu, Nazitamani zako.

        Chorus
        Kila saa, kila saa Bwana ninakuhitaji;
        Kila saa, kila saa, Unilinde kila saa.

        3. Wewe ukiniongoza Nitakwenda salama;
        Nenda nami siku zote, U nuru na uzima.

        Chorus
        Kila saa, kila saa Bwana ninakuhitaji;
        Kila saa, kila saa, Unilinde kila saa.

        4. Na ikiwa m-beleni Sehemu yangu ngumu,
        Au ikiwa furaha, Unilinde kila saa.
        
        Chorus
        Kila saa, kila saa Bwana ninakuhitaji;
        Kila saa, kila saa, Unilinde kila saa.

        ..`,
        17:`17: Si Mimi, Kristo
        1. Si mimi, Kristo astahili sifa;
        Si mimi, Kristo ajulikane;
        Si mimi, Kristo katika maneno,
        Si mimi, Kristo kwakila tendo. 

        2. Si mimi, Kristo, kuponya huzuni;
        Kristo pekee, kufuta machozi;
        Si mimi, Kristo, kubeba mzigo;
        Si mimi, Kristo, kupunga hofu.    

        3. Kristo pekee, pasipo kujisifu;
        Kristo pekee, na nizungunze,
        Kristo pekee, na hakuna kiburi;
        Kristo pekee, sifa yangu ife.    

        4. Kristo pekee, mahitaji atoe
        Si mimi, Kristo, kisima changu;
        Kristo pekee, kwa mwili na kwa moyo;
        Si mimi, Kristo, hata milele.`,
        18:`18: Mwokozi, Kama Mchunga
        1. Mwokozi kama mchunga
        Utuongoze leo;
        Ututume malishoni;
        Fanya tayari boma.
        Bwana Yesu, peke yako
        Umetuvuta kwako.   

        2. Tu wako, uwe rafiki,
        Uwe mlinzi wetu;
        Kundi lako ulilinde,
        Tusivutwe na dhambi;
        Bwana Yesu tusikie,
        Tukiomba, samehe.       
        
        3. Umetuahidi kwamba
        Utakubali watu,
        Utawahurumia na
        Utawapa neema;
        Bwana Yesu, tunapenda
        Kuwa, mapema.`,
        19:`19: Msalabani Pa Mwokozi
        1. Msalabani pa Mwokozi Hapo niliomba upozi,
        Moyo wangu ulitakaswa, Na asifiwe.

        Chorus
        Na asifiwe, Na asifiwe,
        Alinikomboa kwa damu, Na asifiwe.

        2. Chini ya mti msumbufu Niliomba utakatifu,
        Alinikomboa kwa damu, Na asifiwe.

        Chorus
        Na asifiwe, Na asifiwe,
        Alinikomboa kwa damu, Na asifiwe.

        3. Kwa ajabu nina okoka, Yesu anakaa moyoni;
        Mtini alinifia, Na asifiwe.

        Chorus
        Na asifiwe, Na asifiwe,
        Alinikomboa kwa damu, Na asifiwe.

        4. Damu ya Yesu ya dhamani Huniokoa makosani;
        Huniendesha wokovuni, Na asifiwe.
      
        Chorus
        Na asifiwe, Na asifiwe,
        Alinikomboa kwa damu, Na asifiwe.
  
        ..`,
        20:`No. 20: Mungu Wetu Yeye Mwamba
        1. Mungu wetu yeye mwamba, Kimbilio taabuni;
        Msaada penye shida ulio karibu sana.

        Chorus
        Mwambna wetu kutupumzisha, yu kivuli kuburudisha
        Yu Mwongozi katika njia, kimbilio taabuni.

        2. Mchana usiku, yule kimbilio taabuni,
        Hivyo hatutaogopa, kwani yu karibu sana.

        Chorus
        Mwambna wetu kutupumzisha, yu kivuli kuburudisha
        Yu Mwongozi katika njia, kimbilio taabuni.

        3. Iwayo yote, Yeye tu kimbilio taabuni,
        Twamjua Yeye Mlinzi aliye karibu sana.

        Chorus
        Mwambna wetu kutupumzisha, yu kivuli kuburudisha
        Yu Mwongozi katika njia, kimbilio taabuni.

        4. Mungu wetu Ficho kwetu, kimbilio taabuni,
        Siku zote uwe Boma lililo karibu sana.
        
        Chorus
        Mwambna wetu kutupumzisha, yu kivuli kuburudisha
        Yu Mwongozi katika njia, kimbilio taabuni.
        ..`,
        21:`No. 21: Baba Twakujia
        1. Baba twakujia, Uwe msaada;
        Uwe kimbilio, twakusihi.
        Dunia ni giza tukitengwa nawe;
        Fufariji hapa, Baba yetu.

        Chorus
        Baba twakujia, tu dhaifu,
        usitugeue, tusikie.

        2. Salama tulinde, kati ya taabu;
        Uwe raha yetu mashakani.
        Roho ya sumbuka, Baba tujalie;
        Twakuomba sana, tupe nguvu.

        Chorus
        Baba twakujia, tu dhaifu,
        usitugeue, tusikie.

        3. Neema utupe, tukubali kwako;
        Moyo wetu Linda, safarini;
        Tuongoe mbele, tupate kushinda
        Na kufika ng'ambo, kule kwako.
       
        Chorus
        Baba twakujia, tu dhaifu,
        usitugeue, tusikie. 
        ..`,
        22:`022. USINIPITE MWOKOZI
        1. Usinipite , Mwokozi, unisikie;
        Unapozuru wengine, usinipite.
        
        Chrous
        Bwana, Bwana, unisikie;
        Unapozuru wengine, usinipite.
        
        2. Kiti chako cha rehema, nakitazama;
        Magoti napiga pale, nisamehewe.
         
        Chrous
        Bwana, Bwana, unisikie;
        Unapozuru wengine, usinipite.

        3. Sina ya kutegemea, ila wewe tu;
        Uso wako uwe kwangu, nakuabudu.
                
        Chrous
        Bwana, Bwana, unisikie;
        Unapozuru wengine, usinipite.

        4. Wewe tu u mfariji: sina mbinguni,
        Wala duniani pote, Bwana mwingine.
                
        Chrous
        Bwana, Bwana, unisikie;
        Unapozuru wengine, usinipite.
        ..`,
        23:`23: Yesu Furaha Ya Moyo
        1. Yesu, furaha ya moyo!Hazina ya pendo, na nuru.
        Yote yatupendezayo, yasilinganishwe nawe.

        2. Kweli yako ya daima, wawajibu wakuitao,
        Ni siku zote u mwema kwao wakutafutao.

        3. U Mkate wa uzima, kupokea ni baraka,
        Twanywa kwako u kisima roho zikiburudika.

        4. Mwokozi twakutamani, kwako roho hutulia;
        Twakushika kwa imani, nawe watubariki.

        5. Yesu, ndiwe kwetu mwanga, tufurahishe daima;
        Giza ya dhambi fukuza uwe mwanga wa uzima.`,
        24:`24: Jina La Yesu Tamu
        1. Jina lake Yesu tamu Tukilisikia,
        Hutupoza, tena hamu Hutuondolea,

        2. Roho iliyo umia kwalom hutibika,
        Chakula, njaani pia; Raha, tukichoka.

        3. Jina hili nimsingi, Ngao, Ngoma,
        Mwamba, Kwa hili napata ungi, kwangu ni akiba.

        4. Yesu, Mchunga, Rafiki, Mwalimu,
        Kuhani, Mwanzo, Mwisho, na Amana, Mali yangu yote!

        5. Moyo wangu hauwezi kukusifu kweli;
        Ila sifa zangu hizi, Bwana, zikubali.
        `,
        25:`No. 25: Taji Mvikeni
        1. Taji mvikeni Taji nyingisana, kondoo mwake Kitini,
        Bwana wa mabwana; Nami tamsifu Alikufa kwangu,
        Ni mfalme mtukufu, Seyidi wa mbingu.

        2. Taji mvikeni Mwanawa bikira; Anazovaa kicwani
        Aliteka nyara; Shilo wa manabii Mchunga wa watu
        Shina na tanzu vya Yese Wa Bethilehemu.

        3. Taji mvikeni Bwana wa mapenzi; Jeraha zake nishani
        Ni vito vya enzi, Mbingu haina Hta malaika
        Awezaye kuziona pasipo kushangaa!

        4. Taji mvikeni Bwana wa Salama; Kote-kote duniani
        Vita vitakoma; Nayo enzi yake Itaendelea,
        Chini ya miguu yake, Maua humea.`,
        26:`26: Tutokapo Tubariki
        1. Tutokapo tubariki, Utupe Kufurahi; 
        Tuwe na Upendo wako, Neema ya kushinda. N
        awe utuburudishe Tukisafiri chini.

        2. Twatoa sifa, Shukurani kwa neno ya injili; 
        Matunda ya wokovu Yaonekane kwetu; 
        Daima tuwe amini Kwa kweli yako, Bwana.

        3. Siku zetu zikizidi Tuzitoe kwa Yesu; 
        Tuwe na nguvu moyoni Tusichoke njiani; 
        Hata tutakapo ona Utukufu wa Bwana.`,
        27:` 27: Tena, Mwokozi, Twalitukuza Jina Lako
        1. Tena, Mwokozi, twalitukuza jina lako lenye kupendeza,
        Twangojea neno la amani, Kabla hatujakwenda nyumbani.

        2. Tupe amani njiani mwetu, Wewe umwanzo, umwisho wetu;
        Dhambini kamwe isiingie Midomo ikutaye wewe.

        3. Utupe amani usiku huu, Ili gizani kuwe nuru kuu.
        Tulinde kwa kuwa kwako Bwana. Usiku nisawa na mchana.

        4. Tupe amani ulimwenguni Ndiyo dawa yetu majonzini;
        Na ikitwita sauti yako, Tupe amani milele kwako.`,
        28:`028. JINA LA THAMANI
        1. Jina lake Yesu tamu, Lihifadhi moyoni;
        Litakufariji ndugu,Enda nalo popote.
        
        Chorus
        Jina la Thamani,
        (Thamani) (thamani)
        Tumai la dunia
        Jina la thamani - - tamu!)
        Furaha ya mbinguni.
        
        2. Jina la Yesu lafaa Kama ngao vitani.
        Majaribu yakisonga, Omba kwa jina hili.
                
        Chorus
        Jina la Thamani,
        (Thamani) (thamani)
        Tumai la dunia
        Jina la thamani - - tamu!)
        Furaha ya mbinguni.

        3. Jina hili la thamani Linatufurahisha,
        Napotukaribisha, Na tunapomwimbia.
                
        Chorus
        Jina la Thamani,
        (Thamani) (thamani)
        Tumai la dunia
        Jina la thamani - - tamu!)
        Furaha ya mbinguni.

        4. Mwisho wa safari yetu Tutakapomsujudu.
        Jina hili tutasifu Furaha ya mbinguni.
                
        Chorus
        Jina la Thamani,
        (Thamani) (thamani)
        Tumai la dunia
        Jina la thamani - - tamu!)
        Furaha ya mbinguni.
        ..`,
        29:`029. YESU, NAKUPENDA
        1. Yesu nakupenda, u mali yangu, Anasa za dhambi sitaki kwangu:
        Na mwokozi aliyeniokoa Sasa nakupenda, kuzidi pia.

        2. Moyo umejaa mapenzi tele Kwa vile ulivyonipenda mbele,
        Uhai wako ukanitolea Sasa nakupenda, kuzidi pia.

        3. Ulipoangikwa msalabani Tusamehewe tulio dhambini;
        Taji ya miiba uliyoivaa, Sasa nakupenda, kuzidi pia.

        4. Mawanda mazuri na masikani Niyatzamapo huko mbinguni,
        Tasema na taji nitakayovaa, Sasa nakupenda, kuzidi pia.
        `,
        30:`30. YESU UNIPENDAYE
        1. Yesu unipendaye kwako nakimbilia,
        Ni wewe utoshaye mwovu akinijia.
        Yafiche ubavuni mwako maisha yangu;
        Nifishe bandarini, wokoe moyo wangu.
        
        2. Ngome nyingine sina; nategemea kwako,
        Usinitupe Bwana, nipe neema yako,
        Ninakuamania, kuniweshesha;
        Shari wanikingia, vitani wanitosha.
        
        3. Nakutaka mpaji, vyote napata kwako;
        Niwapo muhitaji, utanijazi vyako;
        Nao waangukao wanyonge wape nguvu;
        Poza wauguao, uongoze vipofu.
        
        4. Bwana umeniosha moyo kwa damu yako;
        Neema ya kutosha yapatikana kwako;
        Kwako Bwana naona kisima cha uzima;
        Mwangu moyoni, Bwana, bubujika daima.`,
        31:`No. 31: Niimbe Pendo Lako
        1. Niimbe (niimbe) pendo lake,
        Pendo la (pendo la) Yesu Bwana;
        Sababu (sababu) alitika
        Kwa Baba akafa.

        Chorus
        Niimbe (niimbe) pendo lake;
        Sifa kuu (sifa kuu) nitatoa;
        Akafa (akafa) niwe hai, --
        Niimbe pendo lake.

        2. Machozi (machozi) alitoa
        Ijapo (ijapo) sijalia;
        Maombi (maombi) yangu bado,
        Aniombeapo.
        
        Chorus
        Niimbe (niimbe) pendo lake;
        Sifa kuu (sifa kuu) nitatoa;
        Akafa (akafa) niwe hai, --
        Niimbe pendo lake.

        3. Upendo (upendo) kubwa huo!
        Dunia (dunia) haijui
        Samaha (samaha) kwa makosa
        Kubwa kama yangu.
        
        Chorus
        Niimbe (niimbe) pendo lake;
        Sifa kuu (sifa kuu) nitatoa;
        Akafa (akafa) niwe hai, --
        Niimbe pendo lake.

        4. Hapana (hapana) tendo jema
        Ambalo (ambalo) nilitenda,
        Nataka (nataka) toka leo
        Nimwonyeshe pendo.
        
        Chorus
        Niimbe (niimbe) pendo lake;
        Sifa kuu (sifa kuu) nitatoa;
        Akafa (akafa) niwe hai, --
        Niimbe pendo lake.

        ..`
        ,
        32:`32. TANGU KUAMINI
        1. Ninao wimbo mzuri, Tangu kuamini;
        Wa mkombozi, Mfalme, Tangu kuamini.
        
        Chorus
        Tangu kuamini, Jina lake tasifu,
        Tangu kuamini, Nitalisifu Jina lake.
             
        Chorus
        Tangu kuamini, Jina lake tasifu,
        Tangu kuamini, Nitalisifu Jina lake.

        2. Kristo anitosha kweli, Tangu kuamini,
        Mapenzi yake napenda, Tangu kuamini.
                
        Chorus
        Tangu kuamini, Jina lake tasifu,
        Tangu kuamini, Nitalisifu Jina lake.

        3. Ninalo shuhuda sawa, Tangu kuamini,
        Linalofukuza shaka, Tangu kuamini.
                
        Chorus
        Tangu kuamini, Jina lake tasifu,
        Tangu kuamini, Nitalisifu Jina lake.

        4. Ninalo kao tayari, Tangu kuamini,
        Nililorithi kwa Yesu, Tangu kuamini.
                
        Chorus
        Tangu kuamini, Jina lake tasifu,
        Tangu kuamini, Nitalisifu Jina lake.

        ...`,
        33:`33. KARIBU SANA
        1. Karibu sana univute, karibu sana daima niwe.
        Bwana napenda unishike, Unilinde nisitengwe nawe,
        Unilinde nisitengwe nawe.
        
        2. Karibu sana, sina kitu, Sina sadaka kwa Bwana Yesu,
        Isipokuwa moyo wangu: Uutakase katika damu,
        Uutakase katika damu.
        
        3. Karibu sana wewe, wewe nami, Nitafurahi kuacha
        Dhambi- - Anasa zote na kiburi: Nipe Yesu niliye msulibi,
        Nipe Yesu niliye msulibi.
        
        4. Karibu sana, hata mwisho. Hata mbinguni nisimamapo:
        Daima dawamu niwepo Nitakapoona uso wako,
        Nitakapoona uso wako.`,
        34:`34. HADITHI KISA YESU
        1. Nipe habari za Yesu, Kwangu ni tamu sana;
        Kisa chake cha dhamani Hunipendeza sasa.
        Jinsi malaika wengi walivyoimba sifa,
        Alipoleta amani kwa watu wa dunia.
        
        Chorus
        Nipe habari za Yesu, Kaza moyoni mwangu;
        Kisa chake cha dhamani Hunipendeza sasa.
        
        2. Kisa cha alivyofunga Peke yake jangwani.
        Jinsi alivyolishinda jaribu la shetani;
        Kazi aliyoifanya, Na siku za huzuni,
        Jinsi walivyotesa: Yote ni yaajabu!
           
        Chorus
        Nipe habari za Yesu, Kaza moyoni mwangu;
        Kisa chake cha dhamani Hunipendeza sasa.
             
        3. Habari za msalaba Aliposulubishwa:
        Jinsi walivyomzika Akashinda kaburi.
        Kisa chake cha rehema. Upendo wake kwangu,
        Aliye toa maisha Nipokee wokovu.
         
        Chorus
        Nipe habari za Yesu, Kaza moyoni mwangu;
        Kisa chake cha dhamani Hunipendeza sasa.
               
        ,.`,
        35:`35: Nimekombolewa Na Yesu
        1. Nimekombolewa na Yesu na sasa nimefurahi;
        Kwa bei ya mauti yake mimi ni mtoto wake.

        Chorus
        Kombolewa! Nakombolewa na damu.
        Kombolewa! Mimi mwana wake kweli.

        2. Kukombolewa nafurahi, Kupita lugha kutamka;
        Kulionyesha pendo lake, mimi ni mtoto wake.
  
        Chorus
        Kombolewa! Nakombolewa na damu.
        Kombolewa! Mimi mwana wake kweli.
      
        3. Nitamwona mfalme wangu katika uzuri wake,
        Ambaye najifurahisha katika torati yake.
        
        Chorus
        Kombolewa! Nakombolewa na damu.
        Kombolewa! Mimi mwana wake kweli.

        4. Najua taji imewekwa mbinguni tayari kwangu,
        Muda kitambo atakuja ili alipo niwepo.
        
        Chorus
        Kombolewa! Nakombolewa na damu.
        Kombolewa! Mimi mwana wake kweli.

        ..`,
        36:` 36: Siku Kuu
        1. Ni siku kuu siku ile ya kumkiri Mwokozi!
        Moyo umejaa tele kunyamaza hauwezi.

        Chorus
        Siku kuu! Siku kuu! Ya kwushwa dhambi zangu kuu!
        Hukesha na kuomba tu, ananiongoza miguu.
        Siku kuu! Siku kuu! Ya kwoshwa dhambi zangu kuu!

        2. Tumekwisha kupatana, mimi bwake, yeye mbwangu,
        Na sasa nitamwandama, nikiri neno la Mungu.
        
        Chorus
        Siku kuu! Siku kuu! Ya kwushwa dhambi zangu kuu!
        Hukesha na kuomba tu, ananiongoza miguu.
        Siku kuu! Siku kuu! Ya kwoshwa dhambi zangu kuu!
        
        Chorus
        Siku kuu! Siku kuu! Ya kwushwa dhambi zangu kuu!
        Hukesha na kuomba tu, ananiongoza miguu.
        Siku kuu! Siku kuu! Ya kwoshwa dhambi zangu kuu!

        3. Moyo tulia kwa Bwana, kiimi cha raha yako;
        Huna njia mbili tena: uwe naye, yote ndako.
        
        Chorus
        Siku kuu! Siku kuu! Ya kwushwa dhambi zangu kuu!
        Hukesha na kuomba tu, ananiongoza miguu.
        Siku kuu! Siku kuu! Ya kwoshwa dhambi zangu kuu!
        ..`,
        37:`37: Pendo Lako, Ee Mwikozi
        1. Pendo lako, Ee Mwokozi, Hushinda pendo zote!
        Kaa nasi, ndani yetu, Furaha ya mbinguni.
        Yesu u rehema tupu, Safi na Kusamehe,
        Mfariji mwenye huzuni Ziondoe machozi.
        
        2. Roho yako ya upendo, Tuma kwa kundi lako;
        Hebu tuirithi raha, Iliyoahidiwa,
        Uondoe moyo mbaya, U Mwanzo tena Mwisho;
        Timiza imani yetu, Ili tuwekwe 'huru.
        
        3. Yesu, uje kwetu sasa, Tupokee huruma;
        Rudi kwetu, tena kamwe Usituache pekee,
        Tungekutukuza leo, Pamoja na malaika,
        Imba na kutoa sifa, Ingia kwa ibada.
        
        4. Sasa, Bwana, kazi yako, Imalize moyoni;
        Takasa hekalu lako, Wokovu kamilisha!
        Safisha viumbe nyako Katika wakati huu;
        Tupumzike 'toka dhambi, Tuingie mbinguni.`,
        38:`38: Nasifu Shani Ya Mungu
        1. Nasifu dhani ya Mungu, mweneza bahari,
        Muumba pia wa mbingu, jua, nyota, mwezi.
        Ni tukufu yako shani, mtengeza mambo
        Ya nyakati na zamani, yasiyo na mwisho.
        
        2. Kadiri ya nionayo, yakusifu Mungu;
        Nchi niikanyagayo, na hayo mawingu;
        Hakuna hata unyasi, usiokukuza;
        Na upepo wavumisha, au kutuliza.
        
        3. Nami kwa mkono wako, naongozwa sawa,
        Ni pato nikusipo, kukwomba ni dawa;
        Umenizingira nyuma, na mbele baraka,
        Maarifa ya ajabu! Yanishinda mimi!`,
        39:` 39: Ati, Kuna Mvua Njema
        1. Ati, kuna mvua njema yanya yenye neema;
        Watu wanaona vyema Bwana, huninyeshei?

        Chorus
        Na mimi? Na mimi? Bwana, huninyeshei?

        2. Sinipite, Baba Mwema; dhambini nimezama;
        Rehema niza daima; Bwana hunionyeshi?
 
        Chorus
        Na mimi? Na mimi? Bwana, huninyeshei?
       
        3. Sinipite, Yesu Mwema; niwe nawe daima,
        Natamani kukwandama: Bwana, hunichukui?
 
        Chorus
        Na mimi? Na mimi? Bwana, huninyeshei?
       
        4. Sinipite, Roho Mwema, Mpaji wa uzima,
        Nawe shahidi wa wema, Bwana wema hunipi?
        
        Chorus
        Na mimi? Na mimi? Bwana, huninyeshei?

        ..`,
        40:`40: Nijaze Sasa
        1. Njoo, Roho Mtukufu uoshe moyo wangu,
        Utakase nia yangu, njoo, nijaze sasa.

        Chorus
        Roho Mtukufu, njoo, nijaze sasa;
        Utakase nia yangu, njoo, nijaze sasa.

        2. Unijaze moyo wangu Ijapo sikuoni,
        Nami ninakuhitaji, njoo, nijaze sasa.
        
        Chorus
        Roho Mtukufu, njoo, nijaze sasa;
        Utakase nia yangu, njoo, nijaze sasa.

        3. Nimejaa udhaifu, nainamia kwako;
        Roho Mtukufu sasa, nitilie na nguvu.
        
        Chorus
        Roho Mtukufu, njoo, nijaze sasa;
        Utakase nia yangu, njoo, nijaze sasa.

        4. Unioshe nifariji niponye, nibariki,
        Unijaze moyo wangu; ndiwe mwenye uwezo.
         
        Chorus
        Roho Mtukufu, njoo, nijaze sasa;
        Utakase nia yangu, njoo, nijaze sasa.
        ..`,
        41:`No. 41: Roho Mtakatifu
        1. Roho Mtakatifu, Kiongozi amini;
        Utushike mkono Tulio wasafiri;
        Utupe kusikia Sauti ya upole;
        "Msafiri fuata, Naongoza nyumbani."

        2. Wewe ndiwe rafiki, Msaada karibu;
        Tusiache shakani; na tukiwa gizani
        Utupe kasikia Sauti ya upole;
        "Msafiri, fuata, Naongoza nyumbani."
        
        3. Siku zetu za kazi, Zikiwa zimekwisha,
        Wala hatuna tamaa Ila mbingu na sala;
        Utupe kusikia Sauti ya upole;
        "Msafiri fuata, Naongoza nyumbani.`,
        42:`No. 42: Ewe Roho wa mbinguni

        1. Ewe roho wa mbinguni, Maombi sikia!
        Makao yako yafanye Mioyoni mwetu.
        
        2. Kama nuru, tupenyeze, Giza uondoe;
        Siri yako tuone, Na amani yako.
        
        3. Kama moto, tusafishe, Choma dhambi yetu;
        Roho zetu ziwe zote Hekalu la Bwana.
        
        4. Kama umande, na uje, Utuburudishe,
        Moyo 'kavu utakuwa Ni wenye baraka.
        
        5. Kaka upepo Ee Roho, Katika Pentekoste
        Ukombozi Utangaze, Kwa kila taife.
        `,
        43:`No. 43: Furaha Gani!
        1. Furaha gani na ushiriki,
        Nikimtegemea Yesu tu!
        Baraka gani, tena amani,
        Nikimtegemea Yesu tu!

        Chorus
        Tegemea, salama bila hatari;
        Tegemea, tegemea Mwokozi Yesu.

        2. Nitaiweza njia nyembamba,
        Nikimtegemea Yesu tu;
        Njia 'tazidi kuwa rahisi,
        Nkimtegemea Yesu tu!
 
        Chorus
        Tegemea, salama bila hatari;
        Tegemea, tegemea Mwokozi Yesu.
       
        3. Sina sababu ya kuogopa,
        Nikimtegemea Yesu tu;
        Atakuwa karibu daima,
        Nikimtegemea Yesu tu.
        
        Chorus
        Tegemea, salama bila hatari;
        Tegemea, tegemea Mwokozi Yesu.

        ...`,
        44:`No. 44: Urafiki Wa Yesu
        1. Hakuna rafiki kama Yesu, Hakuna, hakuna!
        Tabibu mwingine wa rohoni, Hakuna hakuna!

        Chorus
        Yesu ajua shida zetu; Daima ataongoza.
        Hakuna rafiki kama Yesu, Hakuna, Hakuna!

        2. Wakati ambapo hapo yeye, Hapana, hapana!
        Wala giza kukutenga naye, Hakuna, hakuna!
     
        Chorus
        Yesu ajua shida zetu; Daima ataongoza.
        Hakuna rafiki kama Yesu, Hakuna, Hakuna!
   
        3. Aliyesahauliwa naye, Hakuna, hakuna!
        Mkosaji asiyempenda, Hakuna, hakuna!
        
        Chorus
        Yesu ajua shida zetu; Daima ataongoza.
        Hakuna rafiki kama Yesu, Hakuna, Hakuna!

        4. Kipawa kama mwokozi wetu, Hakuna, hakuna!
        Ambaye atanyimwa wokovu Hakuna, hakuna!
        
        Chorus
        Yesu ajua shida zetu; Daima ataongoza.
        Hakuna rafiki kama Yesu, Hakuna, Hakuna!

        ..`,
        45:`No. 45: Mwanga Umo Mwoyoni.
        1. Mlimani pana mwanga, Mwanga wa jua zuri
        Shambani na baharini Jua tukufu liko;
        Mwanga ulio mkubwa Umo moyoni mwangu,
        Kwa kuwa Yesu alipo Hapa pana mwangaza.

        Chorus
        Mwangaza ulio mzuri, Mwanga umo moyoni;
        Akiwapo Bwana Yesu Pana mwanga moyoni.

        2. Kama mavazi kukuu Ninavua huzuni:
        Nguo nzuri za furaha Umenipa za kuvaa.
        Nakuandama rohoni Hata nyuba ya juu
        Iliyopambwa vizuri Katika pendo lako.
        
        Chorus
        Mwangaza ulio mzuri, Mwanga umo moyoni;
        Akiwapo Bwana Yesu Pana mwanga moyoni.

        3. Ulinikomboa Yesu; Maisha yangu, mali,
        Vyote ni nyako, Mwokozi—Daima nikusifu.
        Nakuandama rohoni Hata nyumba ya juu
        Iliyopambwa vizuri Katika pendo lako.
        
        Chorus
        Mwangaza ulio mzuri, Mwanga umo moyoni;
        Akiwapo Bwana Yesu Pana mwanga moyoni.
        ..`,
        46:`No. 46: Miguuni Pake Yesu

        1. Miguuni pake Yesu, Maneno yake tamu;
        Pahali palipo heri, Niwepo kila siku,
        Miguuni pake Yesu Nakumbuka Upendo
        Na hisani vyake kwangu, Vimenivuta moyo.
        
        2. Miguuni pake Yesu, Hapa pahali bora
        Pakuweka dhambi zangu: Pahali pa pumziko.
        Miguuni pake Yesu, Hapa nafanya sala,
        Kwake napewa uwezo, Faraja na neema.
        
        3. Unibariki Mwokozi, Ni miguuni pako,
        Unitazame kwa pendo, Nione uso wako.
        Nipe Bwana nia yake Ili ionekane
        Nimekaa na Mwokozi Aliye haki yangu.`,
        47:`No. 47. Ni Heri Kifungo

        1. Ni heri kifungo kinachotufunga
        Mioyo yetu kwa pendo la Kikristo.
        
        2. M-bele ya Baba Tunatoa sala,
        Hofu, nia masumbufu Yetu ni mamoja.
        
        3. Tunavishiriki Matata na shida,
        Na mara nyingi twatoa Chozi la fanaka.
        
        4. Tunapoachana Moyoni twalia;
        Lakini tutakutana M-wisho mbinguni.`,
        48:`No. 48: Ninakupenda Zaidi

        1. Ninakupenda zaidi, Ya vyote vingine;
        Kwani umenipa raha, Na amani, Bwana.

        Chorus
        Nusu haijatangazwa (Tangazwa)
        Ya upendo wako;
        Nusu haijatangazwa (Tangazwa)
        Damu hutakasa (takasa).

        2. Nakujua u karibu Kuliko dunia;
        Kukukumbuka ni tamu kupita kuimba.

        Chorus
        Nusu haijatangazwa (Tangazwa)
        Ya upendo wako;
        Nusu haijatangazwa (Tangazwa)
        Damu hutakasa (takasa).
        
        3. Kweli wanifurahisha, na nitafurahi;
        Pasipo upendo wako naona huzuni.
        
        Chorus
        Nusu haijatangazwa (Tangazwa)
        Ya upendo wako;
        Nusu haijatangazwa (Tangazwa)
        Damu hutakasa (takasa).

        4. Itakuwaje Mwokozi, Kukaa na wewe,
        Ikiwa ulimwenguni Tuna furaha hii?
        
        Chorus
        Nusu haijatangazwa (Tangazwa)
        Ya upendo wako;
        Nusu haijatangazwa (Tangazwa)
        Damu hutakasa (takasa).

        ..`,
        49:`No. 49: Ninaye Rafiki

        1. Ninaye rafiki naye Alinipenda mbele;
        Kwa kamba za pendo lake Nemefungwa milele:
        Aukaza moyo wangu, Uache ugeuzi,
        Ninakaa ndani yake, Yeye kwangu milele.
        
        2. Ninaye Rafiki ndiye Aliyenifilia;
        Alimwaga damu yake kwa watu wote pia;
        Sina kitu mimi tena, Nikiwa navyo tele;
        Pia vyote ni amana Ndimi wake milele.
        
        3. Ninaye Rafiki naye Uwezo amepewa;
        Atanilinda mwenyewe, Juu 'tachukuliwa;
        Nikitazama mbinguni Hupata nguvu tele;
        Sasa natumika chini, Kisha juu milele.
        
        4. Ninaye Rafiki naye Yuna na moyo mwema,
        Ni Mwalimu Kiongozi, Mlinzi wa daima;
        Ni nani wa kunitenga, Na mpenzi wa mbele?
        Kwake nimetia nanga, Ndimi wake milele.
        `,
        50:`No. 50: Mungu Nawe Nanyi Daima

        1. Mungu nawe nanyi daima; hata twonane ya pili,
        Awachunge kwa fadhili, Mungu nawe nanyi daima.

        Chorus
        Hata twonane juu, hata twonane tena kwake;
        Hata twonane juu, Mungu nawe nanyi daima.

        2. Mungu nawe nanyi daima. Mungu nawe nanyi daima,
        Awafunike mabawa. Awalishe, awakuze;
        
        Chorus
        Hata twonane juu, hata twonane tena kwake;
        Hata twonane juu, Mungu nawe nanyi daima.

        3. Mungu nawe nanyi daima. Mungu nawe nanyi daima,
        Kila wakati wa shida Awalinde hifadhini:
        
        Chorus
        Hata twonane juu, hata twonane tena kwake;
        Hata twonane juu, Mungu nawe nanyi daima.

        4. Mungu nawe nanyi daima. Mungu nawe nanyi daima,
        Awabariki na pendo Ambalo halina mwisho; Mungu nawe nanyi daima.
        
        Chorus
        Hata twonane juu, hata twonane tena kwake;
        Hata twonane juu, Mungu nawe nanyi daima.
        
        ..`,
        51:`No. 51: Kuwa Na Yesu
        1. Yesu Mwokozi, kwa hakika, Hunipa furaha na amani;
        Mrithi wa wokovu wake, Natakaswa kwa damu yake.
        
        Chorus
        Habari hiyo wimbo wangu, Daima nitamsifu Yesu.
        Habari hiyo wimbo wangu, Daima nitamsifu Yesu.
        
        2. Nijitoapo nina raha, Na kwa imani namwona Bwana;
        Aniletea malaika, Wananilinda, niokoke.
                
        Chorus
        Habari hiyo wimbo wangu, Daima nitamsifu Yesu.
        Habari hiyo wimbo wangu, Daima nitamsifu Yesu.

        3. Hali na mali anaitwaa, Katika Yesu nabarikiwa;
        Nikimngoja kwa subira, Wema wake unanitosha.
                
        Chorus
        Habari hiyo wimbo wangu, Daima nitamsifu Yesu.
        Habari hiyo wimbo wangu, Daima nitamsifu Yesu.
        .. `,
        52:`No. 52: Nipe Biblia
        1. Nipe Biblia nyota ya furaha, 
        wapate nuru wasafirio;
        Hakuna la kuzuia amani,
        Kwani Yesu alituokua.
        
        Chorus
        Nipe Biblia neno takatifu,
        Nuru yake itaniongoza;
        Sheria na ahadi na upendo,
        Hata mwisho vitaendelea.
        
        2. Nipe Biblia nihuzunikapo ikinijaza moyoni dhambi;
        Nipe neno zuri la Bwana Yesu,
        Nimwone Yesu Mwokozi wangu.
            
        Chorus
        Nipe Biblia neno takatifu,
        Nuru yake itaniongoza;
        Sheria na ahadi na upendo,
        Hata mwisho vitaendelea.

        3. Nipe Biblia nipate kuona, 
        hatari zilizo duniani;
        Nuru ya neno lake Bwana Yesu,
        itaangaza njia ya kweli.
               
        Chorus
        Nipe Biblia neno takatifu,
        Nuru yake itaniongoza;
        Sheria na ahadi na upendo,
        Hata mwisho vitaendelea.
                 
        4. Nipe Biblia taa ya maisha;
        Mfariji tunapofiliwa;
        Unionyeshe taa ya mbinguni,
        Nione utukufu wa Bwana.
                    
        Chorus
        Nipe Biblia neno takatifu,
        Nuru yake itaniongoza;
        Sheria na ahadi na upendo,
        Hata mwisho vitaendelea.
            
        ..`,
        53:`No. 53: Napenda Kuhubiri!
        1. Napenda kuhubiri habari ya Yesu,
        Ya Bwana wa fahari na pendo zake kuu.
        Huhubiri napenda kwa hali na mali;
        Mwenyewe Nimeonja najua ni kweli.
        
        Chorus
        Napenda kuhubiri kisa cha Bwana Yesu,
        Ya Bwana wa fahari na pendo Zake Kuu.
        
        2. Napenda kuhubiri mambo ya ajabu
        Na tukiyatafikiri yapita Dhahabu.
        Kuhubiri napenda ya yaliyonifaa;
        Nami sana napenda hayo kukwambia.
               
        Chorus
        Napenda kuhubiri kisa cha Bwana Yesu,
        Ya Bwana wa fahari na pendo Zake Kuu.
   
        3. Napenda kuhubiri, hunifurahisha
        Tamu yake habari haiwezi kwisha.
        Napenda kuhubiri wa gizani nao;
        hawana muhubiri wa kweleza chuo.
                
        Chorus
        Napenda kuhubiri kisa cha Bwana Yesu,
        Ya Bwana wa fahari na pendo Zake Kuu.
  
        4. Kuhubiri napenda hata wajuao;
        Kusikia hupenda kama wenzi wao.
        Nako kwenye fahari nikiimba wimbo
        Nitaimba habari ya Mwokozi huyo!
                
        Chorus
        Napenda kuhubiri kisa cha Bwana Yesu,
        Ya Bwana wa fahari na pendo Zake Kuu.
  
        ..`,
        54:`No. 54: Nataka Nimjue Yesu!
        1.  Nataka nimjue Yesu, na nizidi kumfahamu,
        Nijue pendo lake tu, wokovu wake kamili.
        
        Chorus
        Zaidi zaidi, nimfahamu Yesu,
        Nijue upendo wake, wokovu wake kamili.

        2. Nataka nimjue Yesu, na nizidi kusikia  
        Anenapo kitabuni, kunidhihirisha kwangu.
          
        Chorus
        Zaidi zaidi, nimfahamu Yesu,
        Nijue upendo wake, wokovu wake kamili.
      
        3. Nataka tena zaidi, daima kupambanua
        Mapenzi yake, nifanye yale yanayompendeza.
             
        Chorus
        Zaidi zaidi, nimfahamu Yesu,
        Nijue upendo wake, wokovu wake kamili.
   
        4. Nataka nikae, kwa mazungumzo matamu.
        Nizidi kuwaonyesha wengine wokovu wake!
                
        Chorus
        Zaidi zaidi, nimfahamu Yesu,
        Nijue upendo wake, wokovu wake kamili.

        ..`,
        55:`No. 55: Twapanda Mapema
        1. Twapanda mapema, na mchana kutwa
        Mbegu za fadhili hata jioni,
        Twangojea sasa siku za kuvuna;
        Tutashangilia wenye mavuno.

        Chorus
        Wenye mavuno, wenye mavuno,
        Tutashangilia wenye mavuno.
        Wenye mavuno, wenye mavuno,
        Tutashangilia wenye mavuno.
        
        2. Twapanda mwangani na kwenye kivuli;
        Tushindwe na baridi na pepo;
        Punde itakwisha kazi yetu hapa:
        Tutashangilia wenye mavuno.
        
        Chorus
        Wenye mavuno, wenye mavuno,
        Tutashangilia wenye mavuno.
        Wenye mavuno, wenye mavuno,
        Tutashangilia wenye mavuno.

        3.Twapanda kwa Bwana mbegu kila siku.
        Tujapoona taabu na huzuni;
        Tuishapo shinda atatupokea:
        Tutashangilia wenye mavuno.
        
        Chorus
        Wenye mavuno, wenye mavuno,
        Tutashangilia wenye mavuno.
        Wenye mavuno, wenye mavuno,
        Tutashangilia wenye mavuno.
        ..`,
        56:`No. 56: Waponyeni Watu
        1. Walio kifoni, nenda waponye.
        Uwatoe walio shimoni;
        Wanaoanguka uwainue;
        Habari njema uwajulishe.
        
        Chorus
        Walio kifoni waokoeni,
        Mwokozi yuko huwangojea.
         
        2. Wajapokawia anangojea,
        Awasubiri waje tobani;
        Mwokozi hawezi kuwadharau,
        Huwasamehe tangu zamani.
 
        Chorus
        Walio kifoni waokoeni,
        Mwokozi yuko huwangojea.
         
        3. Na ndani ya moyo wa wanadamu
        Hawamo shida, tena huzuni;
        Lakini kwa Yesu huna rehema   
        Kuwaponya na kuwaokoa.
 
        Chorus
        Walio kifoni waokoeni,
        Mwokozi yuko huwangojea.
         
        4. Walio kifoni, nenda waponye
        Kazi ni yetu, zawadi iko;
        Nguvu kuhubiri Bwana hutoa
        Kwa subira tuwavute sasa.
         
        Chorus
        Walio kifoni waokoeni,
        Mwokozi yuko huwangojea.
         
        ..`,
        57:`No. 57: Usikatae Kazi
        1. Usikatae Kazi yake Bwana; Ukae tayari Kuifanya kazi;  
        Uende po pote Mungu akwitapo, Nawe utaona Furaha kazini.

        Chorus
        Njoo, We! Usiikatae; Njoo, We! Uifanye kazi;
        Usiikatae Kazi yake Bwana, Ili hatimaye usikatazwe juu.
        
        2. Usiikatae Kazi yake Bwana; Kwa nini kawia? Fanya kazi leo.
        Mavuno meupe, Wachache Wavuni, Onyesha furaha Kwa kazi ya Bwana.

        Chorus
        Njoo, We! Usiikatae; Njoo, We! Uifanye kazi;
        Usiikatae Kazi yake Bwana, Ili hatimaye usikatazwe juu.

        3. Usiikatae Kazi yake Bwana, Kukataa pendo Kwako ni Hatari.   
        Saa ya rehema, Yesu akiomba, Ziungame dhambi, Zifutwe mbinguni.
        
        Chorus
        Njoo, We! Usiikatae; Njoo, We! Uifanye kazi;
        Usiikatae Kazi yake Bwana, Ili hatimaye usikatazwe juu.
        ..`,
        58:`No. 58: Zitakuwa Nyota Tajini?
        1. Leo ninafikiri ya nchi nzuri Ninayotaka kuiona;
        Nisimamapo karibu na Mwokozi, Tajini zitakuwa nyota?
        
        Chorus
        Sijui tajini mwangu kama nyota 
        Zitang'aa kila wakati! 
        Nitakapoamka katika majumba,  
        Zitakuwa nyota tajini?

        2. Kwa nguvu za Bwana nitafanya kazi, Nitavuta roho za watu,
        Ili niwe na nyota katika taji, Bwana anapotupa tunu.
        
        Chorus
        Sijui tajini mwangu kama nyota 
        Zitang'aa kila wakati! 
        Nitakapoamka katika majumba,  
        Zitakuwa nyota tajini?

        3. Nitakuwa na furaha nikimwona, Kuweka miguuni pake
        Watu waliovutwa kwa ajili ya Kazi yangu na Roho yake.
                
        Chorus
        Sijui tajini mwangu kama nyota 
        Zitang'aa kila wakati! 
        Nitakapoamka katika majumba,  
        Zitakuwa nyota tajini?
        ..`,
        59:`59. FANYENI KAZI ZENU
        1. Fanyeni kazi zenu, usiku si mbali;
        Kesheni saa zenu vumilieni;
        Kwa Yesu tumikeni na hiyo injili.
        Sana wahubirini watu wa mbali.
        
        2. Fanyeni kazi zenu, giza yasongea;
        Nawengi wenzi wenu wamo gizani.
        Msipoteze moja dakika ni hizi:
        Bwana atarejea mwisho wa kazi.
        
        3. Fanyeni kazi zenu, hivi jua lachwa;
        Wote walio kwenu apenda Mungu:
        Na sisi tumjuaye tuwafundishe
        Ili Yesu ajaye tumfurahishe.`,
        60:`No. 60: Nitakwenda Utakaponituma
        1. Pengine sio milimani Utakaponiita
        Pengine sio baharini Wala palipo vita;
        Lakini unaponiita, Na njia siijui.
        Bwana, nitajibu, ni tayari Kwanda uniagizapo.

        Chorus
        Ukiwa pamoja nami, Bwana, Mlimani, baharini,
        Niende utakaponiita; Na fuata uendako.

        2. Pengine leo kuna neno, Neno tamu la pendo,
        Ambalo Yesu anataka Ninene kwa upole;
        Ukiwa pamoja nami, Bwana, Nitamtafuta leo
        Yele aliyepotea mbali: Nitasema upendavyo

        Chorus
        Ukiwa pamoja nami, Bwana, Mlimani, baharini,
        Niende utakaponiita; Na fuata uendako.

        3. Pahali pako bila shaka Pa kuvuna shambnani,
        Kazi niwezayo kufanya Kwa Yesu Mkombozi;
        Hivi nikikutegemea, Kwa kuwa wanipenda,
        Mapenzi yako nitafanya, Na niwe upendavyo.

        Chorus
        Ukiwa pamoja nami, Bwana, Mlimani, baharini,
        Niende utakaponiita; Na fuata uendako.

        ..`,
        61:` 61. Bwana, Nami
        1. Nimemwona rafiki Wa thamani kubwa,
        Ana ni penda kwa 'pole, Kwa pendo amini:
        Kuishi kutengwa naye, La, huku siwezi,
        Tunakaa pamoja: Bwana nami.
        
        2. Pengine ninachoka, Mimi mdhaifu,
        Ndipo ninamtehemea, Alivyoalika;
        Huniongoza njiani Pahali pa nuru
        Twatembea pamoja Bwana nami.
        
        3. Namweleza huzuni Nafuraha yangu,
        Vile vinavyosumbua Vinavyopendeza;
        Huniagiza kutenda Yanayonipasa
        Twazungumza pamoja Bwana nami.
        
        4. Ajua natamani Kuwavuta watu,
        Hivyo ananipeleka Kutangaza neno;
        Nitangaze pendo lake, Kwa nini akafa;
        Twahubiri pamoja Bwana nami.`,
        62:`62. Napenda Kitabu Chake
        1. Napenda kitabu chake, Kilichotoka mbinguni,
        Barua kwangu ya Bwana Ujumbe wake wa upendo.
        
        2. Humo ndani ya Kitabu Sura ya yesu naona
        Karatasi zimekuwa, Wayo zake za Mwongozi.
        
        3. Neno Lake ni maonju, Kubwe la asali tamu;
        Natamani kuuonja Ule mkate wa uzima.
        
        4. Mapenzi Yake Mwumbaji, Yanafunuliwa humo;
        Hazina kuu ya hekima, Utajiri wa ajabu.
        
        5. Mwangaza wa ulimwengu Angaza humo moyoni!
        Uwe mwandamizi pote, Taa ya hatua zangu.
        `,
        63:`63. Niuonapo Msalaba
        1. Niuonapo Msalaba,
        Kristo aliponifia;
        Kwangu pato ni hasara.
        Kiburi nakichukia.
        
        2. Na nisijivune, Bwana,
        Ila kwa sadaka yako;
        Upuzi sitake tena,
        Zi chini ya damu yako.
        
        3. Tangu kichwa hata nyayo,
        Zamwangwa pendo na hamu.
        Ndako pweke hamu hiyo.
        Pendo zako zimetimu
        
        4. Vitu vyote vya dunia,
        Si sadaka ya kutosha;
        Pendo zako zaniwia,
        Nafsi, mali na maisha.`,
        64:`64. Piga Panda
        1. Piga panda ya Injili, onyesha watu wote;
        Ili anaye sikia Atubu aokoke.
        
        Chorus
        Piga panda ya Injili, uipige kwa nguvu;
        Mungu amekuagiza mateka wawe huru.
        
        2. Uipige vilimani, kwa kila tambarare;
        Pande zote, miji yote isikie Injili.
         
        Chorus
        Piga panda ya Injili, uipige kwa nguvu;
        Mungu amekuagiza mateka wawe huru.
               
        3. Uipige mipakani, barabarani pia;
        Iwatangazie wote, wanakwitwa na Baba.
            
        Chorus
        Piga panda ya Injili, uipige kwa nguvu;
        Mungu amekuagiza mateka wawe huru.
            
        4. Uipige! Watu wengi wataka wawe huru;
        Waanbie kwamba Yesu asema "Njoni Kwangu."
                
        Chorus
        Piga panda ya Injili, uipige kwa nguvu;
        Mungu amekuagiza mateka wawe huru.
        
        ..`,
        65:`65. Twendeni Askari
        1. Twendeni askari, watu wa Mungu; Yesu yuki mbele tumwandame juu
        Ame tangulia Bwana vitani, Twende mbele kwani ndiye amini.
        
        Chorus
        Twndeni askari watu wa Mungu
        Yesu yuko mbele, tumwandame juu.
        
        2. Jeshi la shetani, likisikia Jina la Mwokozi, litakimbia;
        Kelele za shangwe zivume pote; Ndugu, inueni zenu sauti.
           
        Chorus
        Twndeni askari watu wa Mungu
        Yesu yuko mbele, tumwandame juu.
             
        3. Kweli kundi dogo, watu wa Mungu, La mababa yetu ni letu fungu
        Hatutengwi nao, moja imani tumaini moja, na moja dini.
               
        Chorus
        Twndeni askari watu wa Mungu
        Yesu yuko mbele, tumwandame juu.
         
        4. Haya mbele watu nasi njiani, Inieni myoyo, nanyi sifuni;
        Heshima na sifa yake mfalme, Juu hata chini sana zivume.
                
        Chorus
        Twndeni askari watu wa Mungu
        Yesu yuko mbele, tumwandame juu.
        
        ..`,
        66:`66. Roho Yangu Amka Sasa
        1.Roho yangu amka sasa, mara jitahidi;
        Shindano ni lake Bwana, Zawadi ni taji.
        
        2.Sauti ni yake Mungu inayokuita;
        Ndiyo alitekirimu taji ya uzima.
        
        3.Mashahidi ndio wengi wanaokuoma;
        Ya nyuma usifikiri bali mwendo kaza.
        
        4.Bwana umetuanzisha katika shindano;
        Kwa vile tunaposhinda ushindi ni wako.`,
        67:` 67. Kesha Roho Yangu
        1. Kesha roho yangu, adui maelfu
        Hujaribu Kuangusha, Kuvuta dhambini.
        
        2. Ukeshe,uombe, ili usishindwe;
        Fanya vita kila siku, omba msaada.
        
        3. Kushinda ni bado: ulinde silaha;
        Usiache kupigana hata una taji.
        `,
        68:`Tusimame Imara Mwambani
        1. Umtetee Mungu duniani ijapo pepo kali zavuma;
        Mwanbani pekee pana nguvu Dhambi ikilemea.
        
        Chorus
        Tusimame imara katika mwamba,
        Mwamba wa Kristo pekee;
        Ndipo salameni tutasimama
        Kule kitini pa enzi.
        
        2. Itetee Haki kwa bidii, kwa moyo mnyofu wa imani;
        Mwambani pekee Utashinda wingi wa upotevu.
            
        Chorus
        Tusimame imara katika mwamba,
        Mwamba wa Kristo pekee;
        Ndipo salameni tutasimama
        Kule kitini pa enzi.
            
        3. Itetee kweli, itadumu, ijapokawia itashinda;
        Mwambani pekee pana raha yaishapo tufani.
               
        Chorus
        Tusimame imara katika mwamba,
        Mwamba wa Kristo pekee;
        Ndipo salameni tutasimama
        Kule kitini pa enzi.
         
        ..`,
        69:`69. Cha Kutumaini Sina
        1. Cha kutumaini sima ila damu yake Bwana,
        Sina wema wa kutosha Dhambi zangu kuziosha.
        
        Chorus
        Kwake yesu nasimama,
        Ndiye Mwamba: ni salama;
        Ndiye mwanba: ni salama;
        
        2. Njia yangu iwe ndefu yeye hunipa wokovu;
        Mawinbini yakinipoga nguvu zake ndio nanga.
            
        Chorus
        Kwake yesu nasimama,
        Ndiye Mwamba: ni salama;
        Ndiye mwanba: ni salama;
          
        3. Damu yake na sadaka nategemea daima,
        Yote chini yakiisha mwokozi atanitosha.
                
        Chorus
        Kwake yesu nasimama,
        Ndiye Mwamba: ni salama;
        Ndiye mwanba: ni salama;
      
        4. Nikiitwa hukumuni, rohoni nina amani;
        Nikivikwa haki yake sina hofu mbele zake.
                
        Chorus
        Kwake yesu nasimama,
        Ndiye Mwamba: ni salama;
        Ndiye mwanba: ni salama;
      
        ..`,
        70:`70. Wapenzi Wa Bwana
        1. Wapenzi wa Bwana ije raha yenu!
        Imbeni nyimbo za raha, Imbeni nyimbo a raha:
        Za ibada yenu. Za ibada yenu.
        Twenenda zayuni, mji mzuri zayuni!
        Twenenda juu zayuni,
        Ni maskani ya Mungu.
        
        2. Wasiimbe wao wasioamini,
        Watoto Mungu ndio, watoto wa Mungu ndio
        Waimbao chini, waimbao chini
        
        3. Twaona rohoni baraka za Mungu
        Tusijafika mbinguni, tusijafika mbinguni
        Kwenye utukufu, kwenye utukufu.
        
        4. Tutakapomwona masumbuko basi.
        Huwa maji ya uzima. Huwa maji ya uzima.
        Anasa halisi. Anasa halisi.`,
        71:`71. Kesheni Kaombeni
        1. Kesha ukaombe panapo mafasi; Wakati si mwingi. Kwa vile ukeshe
        Mwili ni dhaifu. Adui hodari karibu atakuja, Bwana wa arusi.
        
        Chorus
        Kesha, Omba, Kesha, Omba,
        Kesha Kaombe gizani, mchana,
        Daima kesha.
        
        2. Fukuza usingizi, fukuza mashaka; Ahadi ni yako, raha ya milele
        Bwana alkesha kwa ajili yako; Jasho yeke ikawa matone ya dame.
                
        Chorus
        Kesha, Omba, Kesha, Omba,
        Kesha Kaombe gizani, mchana,
        Daima kesha.
        
        3. Yesu umkubali awe nguvu zako; silaha uzivae; adui karibu.
        Sasa nafasi iko, isipite bure; Bila kukawia masihiya kesha.
                
        Chorus
        Kesha, Omba, Kesha, Omba,
        Kesha Kaombe gizani, mchana,
        Daima kesha.
        
        ..`,
        72:`Jenga Juu Ya Mwamba
        1. Tutajenga juu ya mwanba wa Yesu, Mwamba wa kale;
        Tutavumilia kishindo tufani ivumapo.
        
        Chorus
        Tutajenga juu, (Tutajenga juu ya mwamba mkuu)
        Tutajinga juu, (Tutajenga juu ya mwanba mkuu)
        Tuta jenga juu ya mwamba mkuu, juu yake Yesu.
        
        2. Wingine hujenga katika Mchanga wa ulimwengu;
        Wingine katika mawimbi ya anasa za dhambi.
               
        Chorus
        Tutajenga juu, (Tutajenga juu ya mwamba mkuu)
        Tutajinga juu, (Tutajenga juu ya mwanba mkuu)
        Tuta jenga juu ya mwamba mkuu, juu yake Yesu.
         
        3. Jenga nawe juu ya mwanba, Msing pekee wa kweli:
        Tumaini lake litadume, tumai la wokovu.
                
        Chorus
        Tutajenga juu, (Tutajenga juu ya mwamba mkuu)
        Tutajinga juu, (Tutajenga juu ya mwanba mkuu)
        Tuta jenga juu ya mwamba mkuu, juu yake Yesu.
        
        ..`,
        73:`73. "Bwana, Uniongoze Juu"
        1. Nakaza mwendo mbinguni, kila siku napanda juu;
        Naomba nikisafiri, "Bwana uniongoze juu.
        
        Chorus
        Bwana uniinue juu Kwa imani hata mbingu,
        Juu kuliko dunia; Bwana uniongoze juu.
        
        2. Moyo wangu hutaki Kukaa palipo shaka;
        Wengine wapenda chini nia yangu ni ku panda.
             
        Chorus
        Bwana uniinue juu Kwa imani hata mbingu,
        Juu kuliko dunia; Bwana uniongoze juu.
         
        3. Nataka kupanda juu Nisishindwe na adui;
        Kwa imani nasikia sauti ya washindaji.
                
        Chorus
        Bwana uniinue juu Kwa imani hata mbingu,
        Juu kuliko dunia; Bwana uniongoze juu.
      
        4. Kupanda juu nataka niuone utukufu;
        Hata mwisho nitaomba, "Bwana uniongoze juu."
                
        Chorus
        Bwana uniinue juu Kwa imani hata mbingu,
        Juu kuliko dunia; Bwana uniongoze juu.
      
        ..`,
        74:`74. Niambie, Ee Mlinzi
        1. Niambie, Ee mlinzi, Umepambazuka je!
        Utukufu wa Zayuni; Pana dalili zake?
        Msafiri uondoke, Utazame mbinguni,
        Kiunoni ujifunge, Ni kucha, alifajiri.
        
        2. Mlinzi, inamurika nuru njiani mwako,
        Dalili ya kuja kwake, Kwamba siku karibu;
        Panda itakapolia Itawaamsha wafu,
        Watakatifu wa Mungu, Kuwapa kutokufa.
        
        3. Mlinzi, ione nuru Ya mwaka wa Sabato;
        Sauti zina tangaza Ufalme ni karibu:
        Msafiri ninaona mlima wa Zayuini,
        Mji wa Yerusalemu nayo fahari yake.
        
        4. Kwenye mji wa dhahabu Anaketi Mfalme
        Katika kiti kizuri: Huku ana tawala.
        Pana amani po pote, Mashamba husitawi;
        Na srdhi ina rutuba; Mito ni mitulivu.
        
        5. Mlinzi, twakaribia Nchi iliyo nzuri;
        Twende mbele, tufurahi, Nchi inachangamka.
        Sikieni kuna wimbo Wa waliookoka;
        Kaza mwendo, Ujiunge na kundi kubwa hili.
        `,
        75:`75. Msingi Imara, Ninyi Wa Bwana
        1. Msingi imara, ninyi wa Bwana,
        Ume wekwa kwenu kwa neno lake?
        Nini zaidi atasema Bwana?
        Imani yenu ipate kuzidi?
        
        2. Wanbiwapo vuka maji ya giza,
        Mito ya mashaka haitazidi;
        'Takuwapo nawe, nikuwezeshe,
        Shida upatazo zisikutishe!
        
        3. Utakapopishwa Ndani ya moto
        Nguvu nitakupa, upate pato;
        Huteketezwi, ila taka zako.
        Na zitasalia dhahabu zako.
        
        4. Na mtu aliyenitegemea
        Nguvu za jehanamu zijapotisha,
        Kamwe kwa adui sitamtia;
        Mtu wangu kamwe sitamuacha.
        `,
        76:`76. Mrithi Ufalme
        1. Mrithi ufalme kwani walala?
        Karibu wokovu wasinzia?
        Amka simama uvae silaha
        Haraka sana saa zapita.
        
        2. Mrithi ufalme mbona 'kawia'?
        M-bona hupokei zawadi?
        Haya uvae, Mwokozi yuaja;
        Haraka, umlaki apitapo.
        
        3. Mataifa makuu ya dunia
        Yapigana na kujiangusha.
        Usiziofu dalili, Mrithi;
        Ishara zotte hazikawii.
        
        4. 'Sitazame anasa za dunia!
        Kwani hayo ya pita upesi.
        Zivunje kamba zinazokufunga.
        Mrithi ufalme, njoo'karudi.
        
        5. Inua kichwa, tazama mbele tu.
        M-falme aja na utukufu;
        Jua la onekana milimani,
        Warithi ufalme furahini.
        `,
        77:`77. Habari Za Usiku
        1. Je! Mkinzi ukutani
        Wa mji wa Zayuni,
        Habari zake usiku?
        Asubuhi karibu?
        Kuna dalili za kupambazuka?
        Kuna dalili za kupambazuka?
        
        2. Katika safari yetu
        Twaona nchi kavu?
        Tutalala baharini?
        Bandari bado mbali?
        Kweli, kweli tutaona ufalme?
        Kweli, kweli tutaona ufalme?
        
        3. Tunaona nuru yake
        Nyota ya asubuhi;
        Nyota, tukufu na safi
        Inang'aa mbinguni;
        Furahini, wokovu u karibu.
        Furahini, wokovu u karibu.
        
        4. Tumetazama ramani,
        Kweli pwani si mbali;
        Twende mbele, kwa upesi
        Tutaona bandari;
        Furahini, imbeni nyimbo zenu.
        Furahini, imbeni nyimbo zenu.
        `,
        78:`78.Mpaka Lini Bwana
        1. Mpaka lini Bwana, Utakaa mbali?
        Kumetuchosha moyo kukawia hivi.
        Utatujia lini, Ili tufurahi
        Katika ile nuru, kuja kutukufu?

        2. Mpaka lini Yesu, Utaacha watu
        Uliowakomboa, Wawe na mashaka?
        Wachache waamini, Kwamba utarudi;
        Wachache wa tayari, Bwana kukulaki.

        3. Waamshe watu wako, Tangaza kilio:
        "Mwe watakatifu, Bwanayu karibu!"
        Utatujia lini, Ili tufurahi
        Katika ile nuru, Kutukufu?`,
        79:`79. Nataka Imani Hii
        1. Nataka Imani hii: Imani imara
        Ambayo haitetemi Kitu chote Wakati wa shida,
        Wakati wa shida.
        
        2. Isiyonung'unika Huzuni, taabu;
        Lakini katika saa ya matata Humwamini Mungu,
        Humwamini Mungu.
        
        3. Imani inayo ng'aa katika tufani;
        Isiyoogopa giza, wala shida, Njaa na Hatari,
        Njaa na hatari.
        
        4. Haiogopi dunia, Kudharau kwake;
        Haiangushwi na hila, na uwongo Dhambi na ogofyo,
        Dhambi na ogofyo.
        
        5. Bwana, nipe imani hii, Hivi nita weza
        Kuonja hapa chini ulimwenguni, Kurithi furaha,
        Kurithi furaha.
        `,
        80:`80. Tupe Moto Wa Uhai
        1. Tupe moto wa uhai Uliowaka zamani,
        Uliowaongoza juu Wazee watakatifu.
        
        2. Wapi roho iliyokaa Moyoni mwa Ibrahimu?
        Kadhalika ndugu Paulo Aliwezeshwa na moto.
        
        3. Neema yako haina Nguvu siku hizi sawa
        Kama wakati wa Musa, Ayubu na wa Eliya?
        
        4. Zamani za kale, Bwana, Kumbuka na kwa rehema,
        Zihuishe roho zetu Kwa Roho Mtakatifu.`,
        81:`81. Siku Sita Zimepita
        1. Siku sita zime pita, Sabato tena karudi;
        Shangilie roho yangu, itukuze kwa busara.
        
        2. Msifuni awapaye pumziko tamu wachovu,
        Kwake roho yatulizwa, kupita siku nyingine.
        
        3. Moyo wetu ufurahi, na kutoa mashukuru;
        Ujalizwe raha ile, yasipitikwa kamwe.
        
        4. Raha hiyo ya rohoni, ni amana ya pumziko
        Ambalo limewekwa juu, kikomo cha masumbuko.
        `,
        82:`82. Ni Siku Ya Furaha
        1. Ni siku ya furaha, ni siku ya nuru;
        Nasi twaona raha, Kuja kushukuru;
        Leo watu wa Mungu, wadogo, wakubwa,
        Hukaribia mbingu, lilipo baraka.
        
        2. Leo, ndiyo bandari, nasi twawasili,
        Hiyo bustani nzuri, ya nyingi fadhili:
        Kijito cha baridi kimefanya ziwa,
        Na kiu ikizidi, twanywa maridhawa.
        
        3. Leo ngazi na iwe ifakayo juu,
        Mawazo na yasiwe ya duniani tu;
        Leo ni kujilisha chakula cha mbingu,
        Na kujifurahisha kwa mambo ya Mungu.
        `,
        83:`83. Ewe Skuli Ya Sabato
        1. Ewe skuli ya Sabato,
        U pazuri sana;
        Moyo wangu wanivuta,
        Nije kwako leo.
        
        Chorus
        Sabato . . . ni nzuri . . .
        Sabato . . . ni nzuri . . .
        Moyo wangu wanivuta,
        Nije kwako leo.
        
        2. Moyo wangu mpotovu,
        Hapa una raha;
        Ndipo nimwonapo Yesu,
        Nije kwako leo.
             
        Chorus
        Sabato . . . ni nzuri . . .
        Sabato . . . ni nzuri . . .
        Moyo wangu wanivuta,
        Nije kwako leo.
           
        3. Hapa Yesu mwenye pendo
        Aniita pole:
        Nimtolee moyo Yeye,
        Nije kwako leo.
             
        Chorus
        Sabato . . . ni nzuri . . .
        Sabato . . . ni nzuri . . .
        Moyo wangu wanivuta,
        Nije kwako leo.
           
        ...`,
        84:`84. Ikumbuke Sabato
        1. Ikumbuke kote Sabato ya Bwana,
        Siku tamu na bora, kupita nyingine;
        Yatuletea raha, na furaha kweli,
        Mwanga wake hungaza, urembo wa Yesu.
        
        Chorus
        Karibie, karibie, Sabato tamu;
        Karibie, Yesu pia, Bwana wa raha.
        
        2. Itakase kweli, ukamsifu leo,
        Yeye aliye sema "Mimi ndiye njia";
        Nasi tukimfuata mkombozi hapa.
        Atatunywesha tele maji ya uzima.
              
        Chorus
        Karibie, karibie, Sabato tamu;
        Karibie, Yesu pia, Bwana wa raha.
      
        3. Siku ya nderemo! Tupishe wakati,
        Tukimwimbia Yesu Rafiki Mpendwa;
        Mponya wetu leo, U mwema ajabu!
        Ukae kwetu, Bwana, moyoni daima.
                
        Chorus
        Karibie, karibie, Sabato tamu;
        Karibie, Yesu pia, Bwana wa raha.
    
        ...`,
        85:`85. Salama Tumepita
        1. Salama tumepita, safarini juma hii,
        Tumwendee Mwokozi, atubariki sasa:
        Siku hiyo ya raha, siku bora ya juma;
        Siku hiyo ya raha, siku bora ya juma.
        
        2. Utupe nuru leo toka hazina yako;
        Ondoa dhambi zetu, tupokee na pendo;
        Mikono yapumzika, tuishi ndani yako,
        Mikono yapumzika, tuishi ndani yako.
        
        3. Twakusanyika hapa, tusifu jina lako;
        Ukaribie kwetu, tupe neema Bwana;
        Utamu tusikize, wa raha ya milele:
        Utamu tusikize, wa raha ya milele:
        
        4. Injili yako leo, ishike wenye dhambi;
        Itupe nguvu nyingi, iponye wenye shida;
        Mioyo yetu shangaza, vyakula utulishe,
        Mioyo yetu shangaza, vyakula utulishe.
        `,
        86:`86. Ukaribie Tena
        1. Ukaribie tena, ewe siku ya raha;
        Roho yakusalimu kama mwanga wa mbingu.
        
        2. Raha yako tulivu, yafurahisha moyo;
        Yatuliza taabu, hata waisha mwendo.
        
        3. Ee siku takatifu, sifa na maombi,
        Na kutuhekimisha., baraka yako kubwa.
        `,
        87:`87. Siku Ya Sabato
        1. Siku ya Sabato, siku takatifu,
        Watu wako Mungu wetu, waipenda sana.
        
        2. Ulitakasa, uliibariki,
        Siku hiyo ya Sabato, siku yako Bwana.
        
        3. Nasi tubariki tukikuabudu,
        Katika siku ya raha, siku yako Bwana.
        
        4. Halafu mbinguni, pamoja na Wewe.
        Tunataka kuzishika Sabato za Bwana.
        `,
        88:`88. Siku Hii Ya Sabato
        1. Siku hii ya Sabato, Tamu kufikiri
        Juu ya Mungu na Mbingu Kuacha dunia.
        
        2. Tamu kusikia Neno Toka mhubiri
        Anayefundisha toba, Tupate uzima.
        
        3. Katika vita na dhambi, Ikiwa twashindwa,
        Yeye atatupa nguvu Aonaye moyo.`,
        89:`89. Asubuhi
        1. Bwana asubuhi kucha nitakuinua
        Sauti yangu kuomba, nipate baraka.
        
        2. Nakuomba roho yako niongozwe nayo;
        Nifanye yanipasayo, na mapenzi yako.
        
        3. Wanaokutegemea, U Mlinzi wao;
        Matumaini wanayo, utayatimiza.
        
        4. Na kwa wingi wa fadhili, Nyumbani mwako juu
        Nitaingia na wimbo, Pale kusujudu.`,
        90:`90. Mapya Ni Mapenzi
        1. Mapya ni mapenzi hayo, Asubuhi tuonayo;
        Saa za giza hulindwa, Kwa uzima kuamka.
        
        2. Kila saku, mapya pia, Rehema, wema na afya,
        Wokovu na msamaha, Mawazo mema, furaha.
        
        3. Tukijitahidi leo Na mwendo utupasao,
        Mungu atatueleza Yatakayompendeza.
        
        4. Mamboyetu ya dunia Bwana atayang'aria,
        Matata atageuza Yawe kwetu ya baraka.
        
        5. Yaliyo madogo, haya Bwana tukimfanyia,
        Yatosha: tutafaidi Huvuta kwake zaidi.
        
        6. Ewe Bwana, siku zote, Tusaidie kwa yote:
        Mwendo wetu wote vivyo, Uwe kama tuombavyo.`,
        91:`91. Kaa Nami
        1. Kaa nami, ni isiku tena;
        Isiniache gizani, Bwana.
        Msaada wako haukomi;
        Nili peke yangu, kaa nami.
        
        2. Siku zetu hazakawi kwisha;
        Sioni la kunifurahisha;
        Hakuna ambacho kakikomi,
        Isiye na mwisho kaa nami.
        
        3. Nina haja nawe kila saa;
        Sina mwingine wa kunifaa
        Mimi nitaongozwa na nani
        Ila wewe? Bwana, kaa nami.
        
        4. Sichi neno uwapo karibu;
        Nipatalo lote si taabu;
        Kifo na kaburi haviumi;
        Nitashinda kwako, kaa nami.
        
        5. Nilalapo nikuone wewe,
        Gizani mote nimulikiwe;
        Nuru za mbinguni hazikomi,
        Siku zangu zote; kaa nami.
        `,
        92:`92. Magharibi Jua
        1. Magharibi jua limekwisha kushuka,
        Mwezi na nyota sasa vinamsifu Muumba wa usiku.
        
        Chorus
        Mungu Mtukufu, Mungu Mkuu,
        Wote juu mbinguni, na wanadamu chini Twakusifu.
        
        2. Mpaji wa uhai, ukaaye mbinguni.
        Utuhifadhi sisi, tufahamu gizani, U karibu.
                
        Chorus
        Mungu Mtukufu, Mungu Mkuu,
        Wote juu mbinguni, na wanadamu chini Twakusifu.
      
        3. Mapenzi yako makuu yawe nasi usiku,
        Tuli usingizini, kucha vivyo roho Tushukuru.
                
        Chorus
        Mungu Mtukufu, Mungu Mkuu,
        Wote juu mbinguni, na wanadamu chini Twakusifu.
      
        4. Na utakapo kuja na nguvu kutawala,
        Mungu wangu kubali kunichikua mimi Uliko juu.
                
        Chorus
        Mungu Mtukufu, Mungu Mkuu,
        Wote juu mbinguni, na wanadamu chini Twakusifu.
      
        Baba, Mwana, Roho, Mungu wetu,
        Wote juu mbinguni, na wanadamu chini Twakusifu.
        `,
        93:`93. Jua La Rohoni Mwangu
        1. Jua la rohoni mwangu, mpendwa Mwokozi wangu;
        Usiku giza hapana, ukiwa karibu Bwana.
        
        2. Nikipata usingizi, nijaze fikara hizi,
        Ni tamu sana, nilale pendoni mwako milele.
        
        3. Kaa nami, ewe Bwana, Usiku kama mchana,
        Nisiishi mbali nawe; ni uhai kuwa nawe.
        
        4. Kama mtoto mnyonge ameshawisha atange,
        Mtafute Ewe Bwana, ujirudishie tena.
        
        5. Wagonjwa wape amani, waneemeshe maskini,
        Walio, Mtulizi, wape wote usingizi.
        
        6. Asubuhi tutokapo, tukaribishe tulipo;
        Twingiapo duniani tuwe mwako mkononi.
        `,
        94:`94. Po Pote Mashamba Yajaa
        1. Po pote mashamba yajaa, tele nafaka pevu,
        Po pote yang'aa meupe bondeni na nyandani.
        
        Chorus
        Mwenye mavuno, twasihi upeleke wavuni,
        Wayakusanye mazao, hata kazi yaishe.
        
        2. Wapeleke uchaoni, waende na jotoni,
        Hata jua lishukapo wakusanye ko kote.
          
        Chorus
        Mwenye mavuno, twasihi upeleke wavuni,
        Wayakusanye mazao, hata kazi yaishe.
        
        3. Enyi wakazi wa Bwana yaleteni mazao,
        Na jioni ingieni kwake na furaha kuu.
               
        Chorus
        Mwenye mavuno, twasihi upeleke wavuni,
        Wayakusanye mazao, hata kazi yaishe.
   
        ,,`
        ,
        95:`95. Zileteni Zaka Kwa Hazina
        1. Sikieni neno la Mungu Wetu, Zileteni zaka kwa hazina
        Leteni na mioyo yenu yote; mibaraka itakuja.
        
        Chorus
        Zileteni zaka kwa hazina, kanijaribu sasa nazo;
        Nitakupeni mibaraka, zaidi ya nafsi ya kupewa.
        
        2. Wataka Roho Mtakatifu kwako? Uzilete zaka kwa hazina
        Ukae karibu na Bwana wako, ndipo utakapo barikiwa.
            
        Chorus
        Zileteni zaka kwa hazina, kanijaribu sasa nazo;
        Nitakupeni mibaraka, zaidi ya nafsi ya kupewa.
           
        3. Je! Unakasoro na Bwana wako? Uzilete zaka kwa hazina
        Uzilete kama alivyosema, Ndipo utakapo barikiwa.
                
        Chorus
        Zileteni zaka kwa hazina, kanijaribu sasa nazo;
        Nitakupeni mibaraka, zaidi ya nafsi ya kupewa.
       
        4. Ushukuru Bwana na moyo wote, unapoleta zaka ghalani;
        Usadiki ahadi zake zote, ndipo utakapo barikiwa.
                
        Chorus
        Zileteni zaka kwa hazina, kanijaribu sasa nazo;
        Nitakupeni mibaraka, zaidi ya nafsi ya kupewa.
       
        5. Tuimbe sote nyimbo za furaha, tunapoleta zaka ghalani
        Twimbe kabisa na furaha kubwa, kwani tutabarikiwa.
                
        Chorus
        Zileteni zaka kwa hazina, kanijaribu sasa nazo;
        Nitakupeni mibaraka, zaidi ya nafsi ya kupewa.
       
        ..`,
        96:`96. Mali Yako Sasa
        1. Mali yako sasa, Bwana, tutatoa;
        Hatuna yaliyo yetu, Yote ni vipaji.
        
        2. Sisi watumishi, Twaungama deni;
        Tunge irudisha kwake, Iliyo ya Bwana.
        
        3. Utusaidie, Upendo kujua,
        Kwa ajili yao wote Walio gizani.
        
        4. Neno tumaini na kutegemea:
        Kwamba lote tufanyalo, Tulifanye kwako.
        `,
        97:`97. Sioshwi Dhambi Zangu
        1. Sioshwi dhambi zangu bila damu yake Yesu,
        Hapendezewi Mungu bila damu yake Yesu.
        
        Chorus
        Hakuna kabisa dawa ya makosa
        Ya Kututukasa ila damu yake Yesu.
        
        2. La kunisafi sina ila damu yake Yesu,
        Wala udhuru tena ila damu yake Yesu.
               
        Chorus
        Hakuna kabisa dawa ya makosa
        Ya Kututukasa ila damu yake Yesu.
         
        3. Sipati patanishwa bila damu yake Yesu,
        Hukumu yanitisha, bila damu yake Yesu.
                
        Chorus
        Hakuna kabisa dawa ya makosa
        Ya Kututukasa ila damu yake Yesu.
        
        4. Sipati tumaini bila damu yake Yesu,
        Wema wala amani bila damu yake Yesu.
                
        Chorus
        Hakuna kabisa dawa ya makosa
        Ya Kututukasa ila damu yake Yesu.
        
        5. Yashinda ulimwengu, iyo damu yake Yesu,
        Na kutufikisha juu, iyo, damu yake Yesu.
                
        Chorus
        Hakuna kabisa dawa ya makosa
        Ya Kututukasa ila damu yake Yesu.
        
        ...`,
        98:`98. Nilikupa Wewe
        1. Nilikupa wewe, damu ya moyoni,
        Ili wokolewe, winuke ufuni.
        
        Chorus
        Nimekunyima ni wewe? Umenipa nini?
        Nimekunyima ni wewe? Umenipa nini?
        
        2. Nilikupa myaka yangu duniani;
        Upate inuka, kuishi mbinguni.
             
        Chorus
        Nimekunyima ni wewe? Umenipa nini?
        Nimekunyima ni wewe? Umenipa nini?
         
        3. Nimekuletea, huku duniani;
        Pendo na wokovu, zatoka mbinguni.
               
        Chorus
        Nimekunyima ni wewe? Umenipa nini?
        Nimekunyima ni wewe? Umenipa nini?
       
        4. Nipe siku zako, Udumu mwangani;
        Na taabu yako, wingie rahani.
              
        Chorus
        Nimekunyima ni wewe? Umenipa nini?
        Nimekunyima ni wewe? Umenipa nini?
        
        Nafsi, nafsi, pendo, mali, twae Imanueli.
        Nafsi, nafsi, pendo, mali, twae Imanueli.
        `,
        99:`99. Twende kwa yesu
        1. Twende kwa Yesu mimi nawe, njia atuonya tuijue,
        Imo chuoni; na mwenyewe, hapa asema njoo!
        
        Chorus
        Na furaha tutaiona, myoyo iki takasa sana;
        Kwako mwokozi, kuonana, na milele kukaa.
        
        2. "Wana na waje," atwambia furahini kwa kusikia;
        Ndiye Mwokozi wetu hasa, na tumtii, njoni.
               
        Chorus
        Na furaha tutaiona, myoyo iki takasa sana;
        Kwako mwokozi, kuonana, na milele kukaa.
       
        3. Wangojeani? Leo yupo: sakiza sana asemapo;
        Huruma zake zitwitapo, ewe kijana, njoo.
                
        Chorus
        Na furaha tutaiona, myoyo iki takasa sana;
        Kwako mwokozi, kuonana, na milele kukaa.
      
        ..`,
        100:`100. Kuwatafuta
        1. Kuwatafuta wasioweza, kuomba wamrejee Yesu,
        Kuwaambia maneno yake "Njooni kwangu, nawapenda."
        
        Chorus
        Nitakwenda (Nitakwenda) niwatafute wapotevu (Wapotevu) wageuke,
        Waingie (Waingie) katika zizi la Mwokozi (la mwokozi) Yesu Kristo.
        
        2. Kuwatafuta wasioweza, waonyeshwe Mwokozi wetu,
        Kuwaongoza, wapate wote uzima ule milele.
               
        Chorus
        Nitakwenda (Nitakwenda) niwatafute wapotevu (Wapotevu) wageuke,
        Waingie (Waingie) katika zizi la Mwokozi (la mwokozi) Yesu Kristo.
         
        3. Kazi hiyo nataka kufanya, leo nimesikia mwito
        Kuwainua waangukao, waletwe kwake Yesu Njia.
                
        Chorus
        Nitakwenda (Nitakwenda) niwatafute wapotevu (Wapotevu) wageuke,
        Waingie (Waingie) katika zizi la Mwokozi (la mwokozi) Yesu Kristo.
        
        ..`,
        101:`101. Yesu Akwita
        1. Yesu akwita, akwita wewe, Uje leo, uje leo,
        Kwani kusita, akwita wewe Unatanga upeo;
        
        Chorus
        Msikie, msikie,
        Yesu akwita, ujitoe moyo sasa.
        
        2. Wliochoka, na wapumzike, Uje leo, uje leo,
        Wenye mizigo, wenye huzuni Wapate mapumziko.
             
        Chorus
        Msikie, msikie,
        Yesu akwita, ujitoe moyo sasa.
         
        3. Anakungoja uliye yote, Uje leo, Uje leo,
        Uliyekosa, usijifiche: Woshwe, uvikwe nguo.
              
        Chorus
        Msikie, msikie,
        Yesu akwita, ujitoe moyo sasa.
        
        4. Yesu asihi wakawiao, Waje leo, waje leo,
        Watafurahi waaminio; Amka, upesi, Njoo.
              
        Chorus
        Msikie, msikie,
        Yesu akwita, ujitoe moyo sasa.
        
        ..`,
        102:`102. Mlango Pa Moyo
        1. Mlangoni pa moyo; Mgeni! (Amesimama)
        Amesimama pale, Mgeni! (Amesimama)
        Umkaribishe sasa,
        Umkaribishe Mwana
        Wa Baba wa upendo: Mgeni! (Umkaribishe)
        
        2. Moyo wako kwa Bwana, Fungua. (Fungulieni)
        Asikuache mbali, Fungua. (Fungulieni)
        Umkubali Rafiki,
        Roho atafariji
        Naye atakutunza: Fungua. (Fungukieni)
        
        3. Usikie sauti Ya Bwana. (Uisikie)
        Uyachague mambo Ya Bwana. (Mambo ya Bwana)
        Ufungue mlango,
        Usimwambie bado:
        Jina lake tumai---- Yu Bwana. (Jina la Bwana)
        
        4. Na ufungue moyo, Kwa Bwana (Fungulieni)
        Utapewa msaada, Wa Bwana (Msaada wetu)
        Uzuri utavikwa
        Dhambi ataondoa,
        Ukifungua moyo. Kwa Bwana (Fungulieni)
        `,
        103:`103. Njoni Kwangu
        1. Yesu huita kwa upole mwingi, atwita wewe nami;
        Moyoni mwetu hungoja, hukesha, Hukungojea wewe.
        
        Chorus
        "Njoni kwangu, Mliochoka, njoni:
        Yesu huita kwa upole mwingi, Akwita, "uje kwangu"
        
        2. Atuombeapo usikawie, Hutuombea sisi;
        Usidharau wema ma huruma, Huruma kwetu sisi.
              
        Chorus
        "Njoni kwangu, Mliochoka, njoni:
        Yesu huita kwa upole mwingi, Akwita, "uje kwangu"
        
        3. Siku za maisha hupota hima, Hupita kwako, kwangu;
        Usiku waja, kifo kinakuja, Huja kwako na kwangu.
                
        Chorus
        "Njoni kwangu, Mliochoka, njoni:
        Yesu huita kwa upole mwingi, Akwita, "uje kwangu"
      
        4. Fikiri juu ya upendo wake, Upendo kwako, kwangu;
        Dhambi zetu amekwisha samehe. Masamaha ni yetu.
                
        Chorus
        "Njoni kwangu, Mliochoka, njoni:
        Yesu huita kwa upole mwingi, Akwita, "uje kwangu"
      
        ...`,
        104:`104. Yesu Aliniita "Njoo"
        1. Yesu aliniita, "Njoo Raha iko kwangu,
        Kichwha chko ukilaze Kifuani mwangu"
        Nilikwenda kwake mara, sana nilichoka;
        Nikapata kwake raha Na furaha tena.
        
        2. Yesu aliniita, "Njoo, Kwangu kuna maji;
        Maji ya Uzima, bure, Unywe uwe hai."
        Nilikwenda kwake mara na maji nikanywa;
        Naishi kwake na kiu Kamwe sina tena.
        
        3. Yesu aliniita, "Njoo, Dunia i giza,
        Ukinitazama, nuru Takung'arizia.'
        Nili kwenda kwake mara, Yeye jua langu,
        Ni kila wakati mwanga Safarini Mwangu.
        `,
        105:`105. Mchungaji Mpenzi
        1. Mchungaji mpenzi hukuita uje
        Katika zizi lake Panapo salama;
        Akina wanawake, waume vijana,
        Yesu aliye kweli, huwaita kwake
        
        Chorus
        Huita kwa moyo wa huruma, 'Uluyepotea uje kwangu';
        Hivi kukungoja anadumu Bwana Yesu Mchunga.
        
        2. Akatoa maisha kwa ajili yetu;
        Ataka wapotevu waje kwake sasa;
        Tusijihatirishe; Kwake tu salama;
        Sikia wito wake, Mchungaji wetu.
             
        Chorus
        Huita kwa moyo wa huruma, 'Uluyepotea uje kwangu';
        Hivi kukungoja anadumu Bwana Yesu Mchunga.
         
        3. Tusikawie tena, adui shetani,
        Kama Mbwa wa mwitu, atatuharibu;
        Tunaitwa na Yesu, Mkombozi wetu,
        Tuingie zizini, panapo nafasi.
               
        Chorus
        Huita kwa moyo wa huruma, 'Uluyepotea uje kwangu';
        Hivi kukungoja anadumu Bwana Yesu Mchunga.
       
        ..`,
        106:`106. Huna Kitu Kwa Yesu?
        1. Ukitafuta mali, Huna wasaa kwa Yesu?
        Kwa matendo ya haki Huna wasaa kwa Yesu?
        Ansa za kunia, Mambo yako ya raha
        Haya unatafuta; Huna wasaa kwa yesu?
        
        2. Mambo yanakusonga: Kwake huna nafasi?
        Watekwa na dunia, Kwake huna nafasi?
        Humwani m-langoni, Anapopiga hodi?
        Daima hukusihi: Kwake huna nafasi?
        
        3. Sa-a ni za thamani, Kwake huna nafasi?
        Wala hamfnyi bidii, Kwake hamnayo kazi?
        Hamkufika kwao Waliomo shimoni
        Na waliopotea? Kwake hamnayo kazi?
        
        4. Na wazaa majani tu? Huna tunda kwa Yesu?
        Mikono i mitupu, Huna tunda kwa Yesu?
        Huna chembe kwa ghala kazi yako kulipa;
        Wala huna furaha Unapomwona Yesu?`,
        107:`107. Nipo Bwana, Nitume
        1. Sauti ni yake Bwana, "Kwenda, nani tayari"
        Mavuno yanakawia, Nani atayavuna?
        Kwa kudumu amaita, Zawadi atatoa;
        Nani atakayejibu "Nipo Bwana, nitume."
        
        2. Kana huwezi safari Hata Nchi za mbali,
        Pana watu karibuni Wasio mjua Yesu;
        Kama huwezi kusema Jinsi ya malaika,
        Waweza kuutangaza Upendo wa mwokozi.
        
        3. Ingawa huwezi kuwa Mkesha mlangoni,
        Ukiwatolea watu Nafasi ya uzima;
        Kwa sala na kwa sadaka Watoa msaada,
        Kama Harun mwaminifu, Kuinua Mikono.
        
        4. Roho za watu zikifa, Bwana akikuita,
        Usiseme kwa uvivu, "Hakuna kazi kwangu."
        Kwa furaha anza kazi Ile akiyokupa,
        Ukajibu mara moja "nipo Bwana, nitume."`,
        108:`108. Tumesikia Mbiu
        1. Tumesikia mbiu: Yesu huokoa;
        Utangazeni kote, Yesu Huokoa.
        Tiini amri hiyo: nchimi baharini,
        Enezeni mbiu hii: Yesu huokoa.
        
        2. Imba nawe askari: Yesu huokoa;
        Kwa nguvu ya kombozi, Yesu huokoa;
        Imbeni wenye shida, unapounwa moyo,
        Na kaburini imba: Yesu huokoa.
        
        3. Mawimbini uenee. Yesu huokoa.
        Wenye dhambi jueni: Yesu huokoa;
        Visiwa na viimbe, vilindi itikeni,
        Na nchi shangilie: Yesu huokoa.
        
        4. Upepo utangaze: Yesu huokoa.
        Mataifa ya shangaa: Yesu huokoa;
        Milimani, bondeni, sauti isikike
        Ya winbo wa washindi: Yesu huokoa.`,
        109:`109. Anisikiaye
        1. Anisikiaye, aliye yote, sana litangae, wajue wote,
        Duniani kote neno wapate, atakye na aje!
        
        Chorus
        Ni "atakaye," Ni "atakaye";
        Pwani hata bara, na litangae:
        Ni Baba mpenzi alinganaye atakaye na aje.
        
        2. Anijiliaye, Yesu asema, asikawe, aje hima mapema
        Ndimi Njia, kweli, ndimi uzima: atakaye na aje!
               
        Chorus
        Ni "atakaye," Ni "atakaye";
        Pwani hata bara, na litangae:
        Ni Baba mpenzi alinganaye atakaye na aje.
      
        3. Atakaye aje, ndiyo ahadi; atakaye hiyo haitarudi!
        Atakaye lake, ni la ahadi! Atakaye na aje.
                
        Chorus
        Ni "atakaye," Ni "atakaye";
        Pwani hata bara, na litangae:
        Ni Baba mpenzi alinganaye atakaye na aje.
     
        ..`,
        110:`110. Mlango Wazi
        1. Mlango uko wa wema, Mlango wazi huo:
        Yesu aneufungua Na hakuna kufunga.
        
        Chorus
        Mlango wazi, ajabu, Uliachwa wazi kwangu?
        Kwangu, Kwangu? Wazi, wazi kwangu?
        
        2. Mlango hukaa wazi watu waokolewe:
        Maskini ma matajiri Wa mataifa yote.
             
        Chorus
        Mlango wazi, ajabu, Uliachwa wazi kwangu?
        Kwangu, Kwangu? Wazi, wazi kwangu?
         
        3. Maadanu mlango wazi, Rafiki kaza mwendo;
        Msalaba ukubali- Amana ya upendo.
             
        Chorus
        Mlango wazi, ajabu, Uliachwa wazi kwangu?
        Kwangu, Kwangu? Wazi, wazi kwangu?
         
        4. Msalaba tutabeba Daima, na furaha!
        'pendo la Yesu hushinda. Unainama kwake!
              
        Chorus
        Mlango wazi, ajabu, Uliachwa wazi kwangu?
        Kwangu, Kwangu? Wazi, wazi kwangu?
        
        ..`,
        111:`111. Tabibu Mkuu
        1. Tabibu mku-u huyu, Yesu mwenye huruma:
        Atuletaye faraja : Yesu mwokozi wetu.
        
        Chorus
        Imbeni, Malaika Sifa za bwana wetu;
        Jina la pekee kwetu, ni la Yesu Bwana.
        
        2. Mwana kondo-o msifuni Mwokozi:
        Hatia zote na dhambi Huziondoa Yesu.
              
        Chorus
        Imbeni, Malaika Sifa za bwana wetu;
        Jina la pekee kwetu, ni la Yesu Bwana.
        
        3. Hakuna jina jingine Linalofa-a sifa:
        A-u kutufurahisha, Isipo kuwa lake.
               
        Chorus
        Imbeni, Malaika Sifa za bwana wetu;
        Jina la pekee kwetu, ni la Yesu Bwana.
       
        4. Naye atakapokuja Na utukufu wake,
        Tutafurahi milele kuka-a kwake Bwana.
               
        Chorus
        Imbeni, Malaika Sifa za bwana wetu;
        Jina la pekee kwetu, ni la Yesu Bwana.
       
        ..`,
        112:`112. Wewe Umechoka Sana?

        1. Wewe umechoka sana? Wataka raha?
        Kwake Yesu utapata –Msaada.
        
        2. Alama anazo Yeye? Sana! Makovu
        Ya mikono, na miguu, Na mbavu.
        
        3. Naye amevikwa taji Kichwani mwake?
        Taji, kweli, alivikwa –Miiba!
        
        4. Huku nikimfuata, Nipate nini?
        Maonjo nje, na ndani—Amani.
        
        5. Kwamba namwandama Yeye, Mwisho ni nini?
        Kurithi futaha naye---Milele.`,
        113:`113. Bubujiko
        1. Damu imebubujika, Ni ya Imanweli,
        Wakioga wenye taka, Husafiwa kweli.
        
        2. Ilimpa kushukuru Mwivi mautini;
        Nami nisiye udhuru, Yanisafi ndani.
        
        3. Kondo-o wa kuuawa, Damu ina nguvu,
        Wako wote kuokoa kwa utimilivu.
        
        4. Bwana, tangu damu yako Kunisafi kale,
        Nimeimba sifa zako. 'taimba milele.
        
        5. Bwana, umenikirimu Nisiyestahili
        Kwa damu yako, sehemu Ya mali ya kweli.
        
        6. Nikubali kumwimbia Mbinguni milele.
        Mungu nitamsifia Jina lako pweke.`,
        114:`114. Yesu Nataka Kutakaswa Sana
        1.Yesu Mwokozi Ili nitakaswe, nataka mouo uwe enzi Yako.
        Ukiagnushe kilichoinuka unioshe sasa niwe mweupe.
        
        Chorus
        Mweupe tu, ndiyo mweupe,
        Ukiniosha nitakuwa safi.
        
        2. Bwana Yesu sasa unitazame, unifanye niwe dhabihu hai."
        Najitoa kwako, na moyo, vyote; unioshe sana niwe mweupe.
             
        Chorus
        Mweupe tu, ndiyo mweupe,
        Ukiniosha nitakuwa safi.
        
        3.Bwana kwa hiyo nakuomba sana, nakuongojea miguuni pako,
        Wanaokuja hutupi kamwe, unioshe sasa niwe mweupe.
             
        Chorus
        Mweupe tu, ndiyo mweupe,
        Ukiniosha nitakuwa safi.
        
        ...`,
        115:`115. Naendea Msalaba
        1. Naendea msalaba, Ni mnyonge, mpofu,
        Yapitayo naacha nipe msalaba tu.
        
        Chorus
        Nakutumaini tu, wee Mwana wa Mungu;
        Nainamia kwako; Niponye sasa, Bwana.
        
        1. Nakulilia sana: Nalemewa na dhambi;
        Pole Yesu asema: "Nitazifuta zote."
             
        Chorus
        Nakutumaini tu, wee Mwana wa Mungu;
        Nainamia kwako; Niponye sasa, Bwana.
       
        3. Natoa vyote kwako, nafasi nazo nguvu,
        Roho yangu na mwili viwe vyako milele.
               
        Chorus
        Nakutumaini tu, wee Mwana wa Mungu;
        Nainamia kwako; Niponye sasa, Bwana.
     
        4. Kwa damu yake sasa amenivuta sana,
        Upendo hubidisha, nimtafute Mwokozi.
                
        Chorus
        Nakutumaini tu, wee Mwana wa Mungu;
        Nainamia kwako; Niponye sasa, Bwana.
    
        ..`,
        116:`116. Moyo Safi
        1. Bwana ninataka hili, kwa kuwa nimechafuka,
        Kwa moto au kwa maji unisafishe kabisa.
        
        Chorus
        Unisafishe Mwokozi ndani, na nje, kwa moto—
        Utakavyo: ili dhambi ife kwangu, ife kwangu.
        
        2. Kupewa hekima yote, itakuwa tunu kubwa;
        Lakini moyo safi ni, bora kwangu, bora kwangu!
              
        Chorus
        Unisafishe Mwokozi ndani, na nje, kwa moto—
        Utakavyo: ili dhambi ife kwangu, ife kwangu.
        
        3. Mpaka moyo ni safi siwezi kuyafahamu
        Mambo mazuri ya mbingu, mambo mazuri ya mbingu.
        
        Chorus
        Unisafishe Mwokozi ndani, na nje, kwa moto—
        Utakavyo: ili dhambi ife kwangu, ife kwangu.
      
        ,,
        `,
        117:`117. Wamwendea Yesu
        1.Wamwendea Yesu kwa kusafiwa. Kuoshwa kwa damu ya kondoo?
        Je, neema yake yatumwagiwa? Waoshwa kwa damu ya Kondoo?
        
        Chorus
        Kuoshwa, kwa damu Itutakasayo ya Kondoo?
        Ziwe safi nguo nyeupe sana; waoshwa kwa damu ya Kondoo.
        
        2.Wamwandana daima Mkombozi.Waoshwa kwa damu ya Kondoo?
        Yako kwa Msulubiwa mavazi? Waoshwa kwa. Damu ya Kondoo?
              
        Chorus
        Kuoshwa, kwa damu Itutakasayo ya Kondoo?
        Ziwe safi nguo nyeupe sana; waoshwa kwa damu ya Kondoo.
          
        3.Atakapokuja Bwana-arusi Uwe safi katika damu!
        Yafae kwenda Mbinguni mavazi: Yaoshwa kwa damu ya kondoo?
                
        Chorus
        Kuoshwa, kwa damu Itutakasayo ya Kondoo?
        Ziwe safi nguo nyeupe sana; waoshwa kwa damu ya Kondoo.
        
        4.Yatupwe Yalipo na takataka; Uoshawe kwa damu ya Kondoo:
        Huoni kijito chatiririka Uoshwe kwa damu ya Kondoo?

        .        
        Chorus
        Kuoshwa, kwa damu Itutakasayo ya Kondoo?
        Ziwe safi nguo nyeupe sana; waoshwa kwa damu ya Kondoo.
        .
        `,
        118:`118. Nilipotoka Kabisa
        1.Nilipotoka kabisa, sasa narudi
        Nikakawia dhambini, Bwana narudi.
        
        Chorus
        Narudi nyumbani: daima kwako.
        Kwa upendo nipokee: Naja nyumbani.
        
        2.Nikasusurika sana, sasa narudi
        Mwenye uchungu natubu, Bwana narudi.
              
        Chorus
        Narudi nyumbani: daima kwako.
        Kwa upendo nipokee: Naja nyumbani.
      
        3.Nimechoka maovuni, sasa narudi;
        Pendo lako lanivuta, Bwana narudi.
                
        Chorus
        Narudi nyumbani: daima kwako.
        Kwa upendo nipokee: Naja nyumbani.
    
        4. Ndilo tumaini langu, sasa narudi;
        Yesu alinifilia, Bwana narudi.
                
        Chorus
        Narudi nyumbani: daima kwako.
        Kwa upendo nipokee: Naja nyumbani.
    
        5. Damu yake yanitosha, sasa narudi;
        Unioshe kenyekenye, bwana narudi.
                
        Chorus
        Narudi nyumbani: daima kwako.
        Kwa upendo nipokee: Naja nyumbani.
    
        ..`,
        119:`119. Alilipa Bei
        1.Yesu anasema, "Wewe huna nguvu
        Kesha ukaombe, Na uje, Mwanangu.
        
        Chorus
        Alilipa bei, Nawiwa naye;
        Dhambi ilitia waa, aliiondoa.
        
        2. Bwana, nimeona Uwezo wako tu
        Waweza 'takasa Mioyo michafu.
              
        Chorus
        Alilipa bei, Nawiwa naye;
        Dhambi ilitia waa, aliiondoa.
        
        3. Sina kitu chema Kudai Neema,
        Hivi nitafua Mavazi kwa damu.
              
        Chorus
        Alilipa bei, Nawiwa naye;
        Dhambi ilitia waa, aliiondoa.
        
        4. Ninaposimama Juu ya mawingu,
        Taji nitaweka Miguuni pa Yesu.
              
        Chorus
        Alilipa bei, Nawiwa naye;
        Dhambi ilitia waa, aliiondoa.
        
        ..`,
        120:`120. Msalaba wa Yesu
        1. Msalaba wa Yesu, Nikae karibu;
        Pale pana chemchemi Ya kuponya dhambi.
        
        Chorus
        Pale msalaba Msalaba wake,
        Huo ni sifa yangu Kwa maisha yote.
        
        2. karibu msalaba Nalitetemeka,
        Pendo likaniona Likanirenemu.
              
        Chorus
        Pale msalaba Msalaba wake,
        Huo ni sifa yangu Kwa maisha yote.
         
        3. Unikumbushe yesu, Nikuone pale;
        Niupate upendo Na kuvutwa nao.
                
        Chorus
        Pale msalaba Msalaba wake,
        Huo ni sifa yangu Kwa maisha yote.
       
        4. Karibu msalaba, Kwa kutegimea,
        Kukesha na kungoja, Nitakaa pale.
                
        Chorus
        Pale msalaba Msalaba wake,
        Huo ni sifa yangu Kwa maisha yote.
       
        ..`,
        121:`121. Katika Wenye Dhambi
        1.Katika wenye dhambi Ndimi mkuu wao—
        Ila yesu akaja, Kwa dhanbi alikufa,
        Akamimina damu Niupate uzima.
        
        2.Ajabu pendo lake! Pendo lililo kuu,
        Pendo lisilo mwisho, Lidumulo milele—
        Lililonitafuta Inawa sikupenda.
        
        3.Ingawa ni mbaya Kristo ni vyote kwangu;
        Ajua haja zangu; Huzuni zangu, zake;
        Hata katika vita, Akiwapo salama.`,
        122:`122. Yote Namtolea Yesu
        1.Yote namtolea Yesu, moyo wangu ni wake:
        Ninavutwa na upendo, kwa hivyo, najitoa.
        
        Chorus
        Yote kwa yesu, Yote kwa Yesu,
        Upendo wako hushinda; Yesu, natoa.
        
        2. Yote namtolea Yesu, Nainamia pake;
        Nimeacha na anasa, kwako Yesu nipokee.
               
        Chorus
        Yote kwa yesu, Yote kwa Yesu,
        Upendo wako hushinda; Yesu, natoa.
       
        3. Yote namtolea Yesu, Nifanye niwe wako;
        Nipe Roho yako, Bwana, anilinde daima.
                
        Chorus
        Yote kwa yesu, Yote kwa Yesu,
        Upendo wako hushinda; Yesu, natoa.
      
        4. Yote namtolea Yesu, nami naona sasa,
        Furaha ya ukombozi, nasifu jina lake.
                
        Chorus
        Yote kwa yesu, Yote kwa Yesu,
        Upendo wako hushinda; Yesu, natoa.
      
        ..`,
        123:`123. Yesu Kwa Imani
        1.Yesu kwa imani, nakutumaini, peke yako;
        Nisikie sasa, na kunitakasa, ni wako kabisa
        Tangu leo.
        
        2. Nipe nguvu pia za kusaidia moyo wangu;
        Ulikufa wewe, wokovu nipewe, nakupenda wewe,
        Bwana wangu.
        
        3.Hapa nazunguka katika mashaka, na matata;
        Palipo na giza utaniongoza, hivi nitaweza
        kufuata.`,
        124:`124. Umechoka Umesumbuka
        1. Umechoka, je, umesumbuka? mwambie Yesu sumbuko lako;
        Unayalilia yapitayo? mwambie Yesu pekee.
        
        Chorus
        Mwambie Yesu sumbuko lako, yu rafiki amini,
        Hakuna rafiki kama yeye, mwambie Yesu pekee.
        
        2. Je, machozi yakulengalenga? mwambie Yesu sumbuko lako;
        Walemewa na dhambi rohoni? mwambie Yesu pekee.
                
        Chorus
        Mwambie Yesu sumbuko lako, yu rafiki amini,
        Hakuna rafiki kama yeye, mwambie Yesu pekee.
       
        3. Waogopa shida na majonzi? mwambie Yesu sumbuko lako;
        Wasumbukia mambo yajayo? mwambie Yesu pekee.
                
        Chorus
        Mwambie Yesu sumbuko lako, yu rafiki amini,
        Hakuna rafiki kama yeye, mwambie Yesu pekee.
       
        4. Kuanzia kifo kukutisha? mwambie Yesu sumbuko lako;
        Watamania ufalme wake? mwambie Yesu pekee.
                
        Chorus
        Mwambie Yesu sumbuko lako, yu rafiki amini,
        Hakuna rafiki kama yeye, mwambie Yesu pekee.
       
        ..
        `,
        125:`125. Uniangalie
        1. 'Uniangalie' atwambia Yesu aliyetufia;
        Msalabani ni uzima, Hapa utaipata hazina.

        Chorus
        Kutazama Kalwari, Kutazama Kalwari,
        Ni kupewa kuishi Kuutazama mti.
        
        2. Ninapojaribiwa ghafla, Shetani hatanitenga;
        Nikitazama msalaba Nguzu nitaipata kwa Bwana.
        
        Chorus
        Kutazama Kalwari, Kutazama Kalwari,
        Ni kupewa kuishi Kuutazama mti.
       
        3. Msalaba nitautazama Kila wakati, daima.
        Ahadi nitategemea, Hovi kabisa sitaangukaa.
        
        Chorus
        Kutazama Kalwari, Kutazama Kalwari,
        Ni kupewa kuishi Kuutazama mti.
       
        ..`,
        126:`126. Nina Haja Nawe
        1. Nina haja nawe kila saa;
        Hawezi mwingine kunifaa.
        
        Chorus
        Yesu nakuhitaji vivyo kila saa!
        Niwezeshe Mwokozi, nkujia.
        
        2. Nina haja nawe; kaa nami,
        Na maonjo haya, hayaumi.
                
        Chorus
        Yesu nakuhitaji vivyo kila saa!
        Niwezeshe Mwokozi, nkujia.
      
        3. Nina haja nawe; kila hali,
        Maisha ni bure, uli mbali.
                
        Chorus
        Yesu nakuhitaji vivyo kila saa!
        Niwezeshe Mwokozi, nkujia.
      
        4. Nina haja nawe, Nifundishe,
        Na ahadi zako zifikishe.
                
        Chorus
        Yesu nakuhitaji vivyo kila saa!
        Niwezeshe Mwokozi, nkujia.
      
        5. Nina haja nawe; mweza yote,
        Ni wako kabisa siku zote.
                
        Chorus
        Yesu nakuhitaji vivyo kila saa!
        Niwezeshe Mwokozi, nkujia.
      
        ..`,
        127:`127. Nisalama Rohoni Mwangu
        1. Nionapo amni kama shwari, au nionapo shida;
        Kwa hali zote umenijulisha ni salama rohoni mwangu.
        
        Chorus
        Salama rohoni,
        Ni salama rohoni mwangu.
        
        2. Ingawa Shetani atanitesa, nitajipa moyo kwani,
        Kristo ameona unyonge mwangu; amekufa kwa roho yangu.
                
        Chorus
        Salama rohoni,
        Ni salama rohoni mwangu.
        
        3. Dhambi zangu zote, wala si nusu, huwekwa msalabani;
        Wala sichukui laana yake, ni salama rohoni mwangu.
                
        Chorus
        Salama rohoni,
        Ni salama rohoni mwangu.
        
        4. Ee Bwana himiza siku ya kuja, panda itakapolia:
        Utakaposhuka sitaogopa ni salama rohoni mwangu.
                
        Chorus
        Salama rohoni,
        Ni salama rohoni mwangu.
        
        ..`
        ,
        128:`128. Taamini Nitii Pia
        1. Namwandama Bwana kwa aliloneno,
        Njia zangu huning'azia;
        Na nikimridhisha atanirudisha,
        Taamini nitii pia.
        
        Chorus
        Kuamini, Njia pweke ni hii
        Ya furaha kwa Yesu: Amini ukatii.
        
        2. Giza sina kwangu wala hata wingu,
        Yeye mara huviondoa;
        Oga, wasiwasi, sononeko, basi;
        Huamini nitii pia.
                
        Chorus
        Kuamini, Njia pweke ni hii
        Ya furaha kwa Yesu: Amini ukatii.
    
        3. Masumbuko yote, sikitiko lote;
        Kwa mapenzi hunilipia;
        Baa, dhara, dhiki, vivyo hubariki.
        Taanimi nitii pia.
                
        Chorus
        Kuamini, Njia pweke ni hii
        Ya furaha kwa Yesu: Amini ukatii.
    
        4. Mimi sitajua raha sawasawa
        Ila yote Yesu kumtoa:
        Napata fadhili na radhi kamili,
        Taamani nitii pia.
                
        Chorus
        Kuamini, Njia pweke ni hii
        Ya furaha kwa Yesu: Amini ukatii.
    
        5. Nitamfurahia na kumtumaini,
        Majumbani na njia-njia;
        Agizo natenda; nikitumwa hwenda,
        Huamini, nitii pia.
                
        Chorus
        Kuamini, Njia pweke ni hii
        Ya furaha kwa Yesu: Amini ukatii.
    
        ..`,
        129:`129. Kumtegemea Mwokozi
        1. Kumtegemea Mwokozi, kwangu tamu kabisa;
        Kukubali neno lake nina raha moyoni.
        
        Chorus
        Yesu, Yesu namwamini, nimemwona thabiti;
        Yesu, Yesu yu thamani, ahadi zake kweli.
        
        2. Kumtegemea Mwokozi, kwangu tamu kabisa
        Kuamini damu yake nimeoshwa kamili.
                
        Chorus
        Yesu, Yesu namwamini, nimemwona thabiti;
        Yesu, Yesu yu thamani, ahadi zake kweli.
     
        3. Kumtegemea Mwokozi, kwangu tamu kabisa;
        Kwake daima napata, uzima na amani.
                
        Chorus
        Yesu, Yesu namwamini, nimemwona thabiti;
        Yesu, Yesu yu thamani, ahadi zake kweli.
     
        4. Nafurahi kwa sababu nimekutegema;
        Yesu, M-pendwa, Rafiki, uwe nami dawamu.
                
        Chorus
        Yesu, Yesu namwamini, nimemwona thabiti;
        Yesu, Yesu yu thamani, ahadi zake kweli.
     
        ..`,
        130:`130. Yesu Kwetu Ni Rafiki
        1. Yesu kwetu ni rafiki, hwambiwa haja pia;
        Tukiombawka Babaye, maombi asikia;
        Lakini twajikosesha, twajitweka vibaya;
        Kama tulimwomba Mungu, dua atasikia.
        
        2. Una dhiki na maonjo? Unamashaka pia?
        Haifai kufa moyo, dua atasikia.
        Hakuna mwingine Mwema, wa kutuhurumia:
        Atujua tu dhaifu: Maombi asikia.
        
        3. Je, hunayo hata nguvu, Huwezi kwendelea,
        Ujapodharauliwa. ujaporushwa pia.
        Watu wange kudharau, wapendao dunia.
        Hukwambata mikononi, dua atasikia.`,
        131:`131. Baba Anilinda
        1. Namtegemea Mungu niwapo
        Humo barani na baharini,
        Yeye wa mbinguni anilinda.
        Baba wa mbinguni anilinda.
        
        Chorus
        Namwamini, Mungu anitunza (anitunza)
        Milimani (milimani) au baharini (baharini) Baharini
        Moyo Wangu (moyo wangu.) aulinda (aulinda).
        Baba wa mbinguni anilinda.
        
        2. La waridi alinawirisha,
        Na huyo tai juu angani,
        Nami kweli ananilinda,
        Baba wa mbinguni anilinda.
             
        Chorus
        Namwamini, Mungu anitunza (anitunza)
        Milimani (milimani) au baharini (baharini) Baharini
        Moyo Wangu (moyo wangu.) aulinda (aulinda).
        Baba wa mbinguni anilinda.
      
        3. Tunduni mwa simba namwamini,
        Kwenye vita ama gerezani,
        Motoni na furikoni,
        Baba wa mbinguni anilinda.
                
        Chorus
        Namwamini, Mungu anitunza (anitunza)
        Milimani (milimani) au baharini (baharini) Baharini
        Moyo Wangu (moyo wangu.) aulinda (aulinda).
        Baba wa mbinguni anilinda.
   
        4. Bondeni mwa giza na upweke,
        Mchunga wangu yuanilinda,
        Kwa upole aniongoza.
        Baba wa mbinguni anilinda.
                
        Chorus
        Namwamini, Mungu anitunza (anitunza)
        Milimani (milimani) au baharini (baharini) Baharini
        Moyo Wangu (moyo wangu.) aulinda (aulinda).
        Baba wa mbinguni anilinda.
   
        ..`,
        132:`132. Bwana Ni Mchunga
        1. Bwana ni Mchunga, Sitahiji;
        Majani mabichi mlisho yangu.
        Ananinywesha maji Matulivu;
        Atanirudisha nikipotea.
        
        2. Nipitapo bondeni mwa mauti
        U mlinzi wangu—sitaogopa;
        Fimbo lako latoshakunilinda;
        Ukinifariji sina hasara.
        
        3. Kati ya mateso mea waandaa,
        Na kikombe changu kinafurika;
        Umenipaka kichwani mafuta;
        Nitaulizaje zaidi kwako?
        
        4. Wema na fadhili zinifuate
        Siku zangu zote hata milele;
        Nami nitakaa nyumbani mwa Bwana
        Katika ufalme wa pendo lake.
        `,
        133:`133. Po Pote Na Yesu
        1. Po Pote na Yesu nina furaha; Anitumako Yesu ndiyo raha.
        Asipokuwako hapanifai, Akiwapo Yesu, mimi sitishwi.
        
        Chorus
        Po pote, po pote, sina mashaka:
        Po pote na Yesu naweza kwenda.
        
        2. Akiwapo yesu, si peke yangu; Na nijapotupwa, akali wangu;
        Ajaponiongoza njia nbaya, Niwapo na Yesu nashukuria.
               
        Chorus
        Po pote, po pote, sina mashaka:
        Po pote na Yesu naweza kwenda.
      
        3. Akiwapo yesu naweza lala, naweza pumzika hata kiyama;
        Kisha nitakwenda kwake milele, akiwapo Yesu furaha tele.
                
        Chorus
        Po pote, po pote, sina mashaka:
        Po pote na Yesu naweza kwenda.
     
        `,
        134:`134. Tafuta Daima Utakatifu
        1. Tafuta daima utakatifu;
        Fanya urafiki na wakristo tu;
        Nena siku zote na Bwana wako,
        Baraka uombe kwa kila jambo.
        
        2. Tafuta saima utakatifu:
        Uwe peke yako ukimwabudu;
        Ukimwangalia Mwokozi wako,
        Utabadilishwa kama alivyo.
        
        3. Tafuta daima utakatifu;
        Kiongozi wako awe Yesu tu;
        Katika furaha au huzuni
        Dumu kumfuata Yesu Mwokozi.
        
        4. Tafuta daima utakatifu;
        Umtawaze Roho moyoni mwako,
        Akikuongoza katika haki,
        Hufanywa tayari kwa kazi yake.
        `,
        135:`135. Kwa Maombi Nachangamka
        1. Saa heri ya maombi, sasa kwako tunarudi,
        Sumbuku ya kuondoa, shida zitu na pungufu.
        Taabuni mara nyingi, roho zetu zimepona,
        Mashakani tumeshinda, wakati wa saa tamu.
        
        2. Saa heri ya maombi, Twapelika dhiki zetu
        Kwake aliyeahidi kubariki wenye haja.
        Huagiza tumwendee, tutegemee neno lake,
        Hivyo tumwekee yote, wakati wa saa tamu.
        
        3. Saa heri ya maombi, tutazidi kuingia
        Bomani mwetu na ngome, hata tuishapo mwendo.
        Yesu atatusikea, tutamtafuta daima,
        Na tutakapolutana tutamwona—saa tamu!`,
        136:`136. Niwe Kama Yesu
        1. Unifundishe, Baba; Ile njia ya sala;
        Uniendeshe sana, Niwe kama Yesu.
        
        Chorus
        Niwe kama Yesu, Niwe kama Yesu,
        Uniongoze, Baba; Niwe kama Yesu.
        
        2. Unipe pendo, Baba, Watu kuwaokoa;
        Nyumbani na mjini. Niwe kama Yesu.
                
        Chorus
        Niwe kama Yesu, Niwe kama Yesu,
        Uniongoze, Baba; Niwe kama Yesu.
    
        3. Na unifahamishe, Wakati ndio mfupi;
        Unibidishe, bwana, Niwe kama Yesu.
                
        Chorus
        Niwe kama Yesu, Niwe kama Yesu,
        Uniongoze, Baba; Niwe kama Yesu.
    
        ..`,
        137:`137. Saa Heri Ya Sala
        1. Saa heri ya sala tunapojidhili,
        Kama tukija kwake yesu rafiki.
        Tukiwa na imani kwamba yu mlinzi,
        Waliochoka sana watapata raha.
        
        Chorus
        Saa ya sala, iliyo heri;
        Waliochoka sana watapata raha.
        
        2. Saa heri ya sala, ajapo mwokozi,
        Ili awasikie watoto wake.
        Hutwambia tuweke miguuni pake
        Mizigo yetu yote: tutapata raha.
               
        Chorus
        Saa ya sala, iliyo heri;
        Waliochoka sana watapata raha.
       
        3. Saa heri ya sala, wawezapo kuja
        Kwa Bwana Yesu wanaojaribiwa;
        Moyo wake mpole, atawarehemu;
        Waliochoka sana watapata raha.
                
        Chorus
        Saa ya sala, iliyo heri;
        Waliochoka sana watapata raha.
      
        4. Saa heri ya sala tutakapopewa
        Mibaraka ya roho, tukimwamini;
        Kwa kuamini kweli hatutaogopa;
        Waliochoka sana watapata raha.
                
        Chorus
        Saa ya sala, iliyo heri;
        Waliochoka sana watapata raha.
      
        ..`,
        138:`138. Nitakuandama Kote
        1. Nitakuandama kote, nitakapoagizwa,
        Wewe ukiniongoza nami nitaandama.
        
        Chorus
        Nitakuandama Kote, naam, ulinifia;
        Kwa neema yako Bwana napenda kuandama.
        
        2. Njia ijapoparuza kwa miiba na fujo,
        Ulitangulia Mbele nami nitaandama.
                
        Chorus
        Nitakuandama Kote, naam, ulinifia;
        Kwa neema yako Bwana napenda kuandama.
     
        3. Nijapokuta taabu na majaribu kote,
        Nakumbuka shida yako, nami nitaandama.
                
        Chorus
        Nitakuandama Kote, naam, ulinifia;
        Kwa neema yako Bwana napenda kuandama.
     
        4. Nijapoona ukiwa na mateso makali,
        Wewe uliyatikiza nami nitaandama.
                
        Chorus
        Nitakuandama Kote, naam, ulinifia;
        Kwa neema yako Bwana napenda kuandama.
     
        5. ijapo wanipeleka vilindini mwa giza,
        Wewe uliyatikiza nami nitaandana.
                
        Chorus
        Nitakuandama Kote, naam, ulinifia;
        Kwa neema yako Bwana napenda kuandama.
     
        ..`,
        139:`139. Uliniimbie Tena
        1. Uliniimbie tena, Neno la uzima;
        Uzuri wake nione, Neno la uzima;
        Neno hili zuri, lafundisha kweli:
        
        Chorus
        Maneno ya uzima ni maneno mazuri,
        Manemo ya uzima ni naneno mazuri.
        
        2. Kristo anatupa sote, Neno la uzima:
        Mwenye dhambi asikie Neno la uzima:
        Latolewa bure, Tupate wokovu:
              
        Chorus
        Maneno ya uzima ni maneno mazuri,
        Manemo ya uzima ni naneno mazuri.
       
        3. Neno tamu la Injili, neno la uzima;
        Mwenye dhambi asikie Neno la uzima:
        Litatutakasa, kwa haki ya Mwana:
                
        Chorus
        Maneno ya uzima ni maneno mazuri,
        Manemo ya uzima ni naneno mazuri.
     
        ..`,
        140:`140. Hivi Nilivyo Unitwae
        1. Nitwae hivi nilivyo, umemwaga damu yako,
        Nawe ulinyoniita, Bwana Yesu, sasa naja.
        
        2. Hivi nilinyo; si langu kujiosha roho yangu;
        Nisamehe dhambi zangu, Bwana Yesu, sasa naja.
        
        3. Hivi nilivyo; sioni kamwe furaha moyoni,
        Daima ni mashakani, Bwana Yesu, sasa naja.
        
        4. Hivi nilivyo kipofu, maskini na mpungufu;
        Wewe ndiwe u tajiri, Bwana Yesu, sasa naja.
        
        5. Hivi nilivyo, mimi tu, siwezi kujiokoa;
        Na wewe hutanikataa, Bwana Yesu, sasa naja.
        
        6. Hivi nilivyo; mapenzi yamenipa njia wazi;
        Hali na mali sisazi, Bwana Yesu, sasa naja.`,
        141:`141. Chini Ya Msalaba
        1. Chini ya msalaba Nataka simama;
        Ndio mwamba safarini, Wa kivuli chema;
        Ni kweli kwa roho yangu Ni tuo kamili,
        Tatua mziho wangu Wakati wa hari.
        
        2. Hapa ni pema sana, Ni ngome kamili;
        Hapa yameonekana, Mapenzi ya kweli;
        Kama alivyoonyeshwa Yakobo zamani,
        Msalaba umekuwa ngazi ya mbinguni.
        
        3. Na Yesu Msalabani Walimkimea,
        Alikufa niokoke Niliyepotea:
        Naona ajabu sana Ya manbo mawili
        Jinsi alivyonipenda Nisiyestahili.
        
        4. Atakayeonana Na Yesu mbinguni,
        Njia yake aanzapo Ni Msalabani;
        Wokovu upo hapa tu, Mwingine hapana,
        Kisha kuna furaha kuu Pamoja na Bwana.`,
        142:`142. Nasikia Sauti Yako
        1. Nasikia mwito, Ni sauti yako;
        Nikasafiwe kwa damu Ya kwangikwa kwako.
        
        Chorus
        Nimesongea mtini pako,
        Unisafi kwa damu ya kwangikwa kwako.
        
        2. Ni mnyonge kweli, umenipa nguvu;
        Ulivyonisfi taka Ni utimilivu.
              
        Chorus
        Nimesongea mtini pako,
        Unisafi kwa damu ya kwangikwa kwako.
        
        3. Yesu hunijuvya: Mapenzi imani,
        Tumai, amani, rahi, hapa na mbinguni.
                
        Chorus
        Nimesongea mtini pako,
        Unisafi kwa damu ya kwangikwa kwako.
      
        4. Napata wokovu, Wema na neema;
        Kwako Bwana nina nguvu Na haki daima.
                
        Chorus
        Nimesongea mtini pako,
        Unisafi kwa damu ya kwangikwa kwako.
      
        ..`,
        143:`143. Naamini
        1. Baba sina msaada ila kwako pekee;
        Kama kwangu ungefichwa, Nifanyeji, Baba?
        
        Chorus
        Sasa hivi naamini Yesu alikufa,
        Aliimwaga damu yake, Nitoke dhambini.
        
        2. Naamini mwana wako Nipe nguvu zako;
        Nijazie mahitaji, katika saa hii.
                
        Chorus
        Sasa hivi naamini Yesu alikufa,
        Aliimwaga damu yake, Nitoke dhambini.
       
        3. Nifuraha gain kwangu kukuona uso!
        Nijue sauti yako, Nipate neema.
                
        Chorus
        Sasa hivi naamini Yesu alikufa,
        Aliimwaga damu yake, Nitoke dhambini.
       
        ..`,
        144:`144. Ni Wako Bwana
        1. Ni wako Bwana, ninasikia Unaponena nami;
        Lakini, kweli, nataka kwako Nizidi kusongea.
        
        Chorus
        Bwana vuta, (vuta) nije nisongee
        Sana kwako mtini.
        Bwana, vuta, vuta, nije nisongee
        Pa damu ya thamani.
        
        2. Niweke sasa nikatumike kwa nguvu za neema;
        Uyapendayo nami nipende Nizidi kukwandama.
             
        Chorus
        Bwana vuta, (vuta) nije nisongee
        Sana kwako mtini.
        Bwana, vuta, vuta, nije nisongee
        Pa damu ya thamani.
          
        3. Nina furaha tele kila saa nizungumzapo nawe;
        Ninanena kama kwa rafiki Nikipiga magoti.
                
        Chorus
        Bwana vuta, (vuta) nije nisongee
        Sana kwako mtini.
        Bwana, vuta, vuta, nije nisongee
        Pa damu ya thamani.
       
        ..`,
        145:`145. Namtaka Bwana Yesu
        1. Ulimwengu siutaki, Namtaka Bwana yesu;
        Dunia hunidanganya; yesu yu mwaminifu.
        
        Chorus
        Rehema ni ya ajabu! Pendo bila kipimo!
        Wokovu mkamilifu, Amana ya uzima.
        
        2. Ulimwengu siutaki, Namtaka Bwana yesu;
        Kati ya dhoruba kali Yeye wimbo mtamu.
             
        Chorus
        Rehema ni ya ajabu! Pendo bila kipimo!
        Wokovu mkamilifu, Amana ya uzima.
           
        3. Ulimwengu siutaki, namtaka Bwana yesu;
        Safarini duniani Yeye furaha yangu.
                
        Chorus
        Rehema ni ya ajabu! Pendo bila kipimo!
        Wokovu mkamilifu, Amana ya uzima.
        
        4. Ulimwengu siutaki, Namtaka Bwana yesu;
        Msalaba naamini, Hata Namwona Yesu.
               
        Chorus
        Rehema ni ya ajabu! Pendo bila kipimo!
        Wokovu mkamilifu, Amana ya uzima.
         
        ..`,
        146:`146. Twae Wangu Uzima
        1. Twae wangu uzima sadaka ya daima;
        Twae saa na usiku Zikutukuze huku.
        
        2. Twae mikono nayo, ifanye upendayo,
        Twae yangu miguu, Kwa wongozi wako tu.
        
        3. Twae sauti yangu, niimbe kwa Mungu tu;
        Itwae na midomo, Ijae neno lako.
        
        4. Twae dhahabu pia Na yote ya dunia;
        Twae yangu hekima, upendavyo tumia.
        
        5. Nia itwae, Mungu, haitakuwa yangu;
        Twae moyo; ni wako, uwe makazi yako.
        
        6. Twae mapenzi yangu, sifa za moyo wangu;
        Twae kabisa nafsi Niwe wako halisi.
        `,
        147:`147. Uishi Ndani Yangu
        1. Tawala ndani yangu, Ee Yesu, Mfalme.
        Uwe kwangu majibu kwa maswali yangu;
        Uishi ndani yangu, Wewe, mwongozi
        Utumishi ni wangu, Wako utukufu.
        
        2. Hekalu nimetoa, Umelisafisha;
        Sasa fahari yako Imulike ndani;
        Dunia iwe kumya, mwili sasa uwe
        Mtumwa mtulivu Wa kukutii tu.
        
        3. Viungo vyake mwili, Vyote vikungoja
        Tayari vikuutwa Kwenda, kusimama;
        Bila manumguniko au malaumu,
        Au kusumbuliwa, Pasipo majuto.
        
        4. Niwe na utulivu pasipo haraka;
        Tayari kungojea maagizo yako.
        Tawala ndani yangu, Ee Yesu, Mfalme,
        Uwe kwanfgu majibu kwa maswali yote.`,
        148:`148. Univute Karibu
        1. Univute karibu, Baba, Unikumbatie;
        Unisogeze kifuani, Nataka pumziko.
        
        Chorus
        Univute karibu(Vuta, univute karibu)
        Kwa kamba za upendo, Univute Karibu nawe.
        
        2. Univute Mwokozi wangu, Na tusiachane;
        Mikono yako juu yangu Leo nione.
                
        Chorus
        Univute karibu(Vuta, univute karibu)
        Kwa kamba za upendo, Univute Karibu nawe.
        
        3. Univute kwa Roho yako, Nifanane nawe;
        Unioshe, unihuishe, Niwe safi, huru.
                
        Chorus
        Univute karibu(Vuta, univute karibu)
        Kwa kamba za upendo, Univute Karibu nawe.
        
        ..`,
        149:`149. Kuwa Wake Yesu
        1. Kuwa wake Yesu, je! Ni kusudi lako?
        Ungeenda naye njia nyembamba?
        Unataka aubebe mzigo wako?
        Awe Mwongozi wako.
        
        Chorus
        Uwezo wake unakutosha
        Na danu yake itakusafi;
        Kwa vile ukubali ni bora
        Afanye mapenzi yake nawe
        
        2. Unataka kutika unapokwita?
        Kupata amani kwa kumpa vyote?
        Wataka uwezo usianguke kamwe?
        Awe Mwongozi wako.
              
        Chorus
        Uwezo wake unakutosha
        Na danu yake itakusafi;
        Kwa vile ukubali ni bora
        Afanye mapenzi yake nawe
      
        3. Wataka raha katiak ufalme wake?
        Ungeshinda kwa majaribu yote?
        Ungefanya kazi yake vizuri sana?
        Awe Mwongozi wako.
               
        Chorus
        Uwezo wake unakutosha
        Na danu yake itakusafi;
        Kwa vile ukubali ni bora
        Afanye mapenzi yake nawe
     
        ..`,
        150:`150. Hasha Maneno Mabaya Yasitoke
        1. Hasha, maneno mabaya yasitoke kinywani
        Moyo mwema uzuie Ndimi, zisichafuke.
        
        Chorus
        "Nanyi pendeni", Asema yesu,
        (Mpendane) (Mpendane)
        Kama mwanzo alivyotupenda:
        "Nanyi pendeni", alivyotupenda:
        (Mpendane) (Mpendane)
        Wana, tiini amri hii. (amri heri hii).
        
        2. Pendo ni mtakatifu; Urafiki; mzuri:
        Visiharibike mara kwa kunena vibaya.
               
        Chorus
        "Nanyi pendeni", Asema yesu,
        (Mpendane) (Mpendane)
        Kama mwanzo alivyotupenda:
        "Nanyi pendeni", alivyotupenda:
        (Mpendane) (Mpendane)
        Wana, tiini amri hii. (amri heri hii).
         
        3. Tusinene kwa hasira, inazaa huzuni,
        Pendo lako ee mwokozi, Inatosha tushindi.
                
        Chorus
        "Nanyi pendeni", Asema yesu,
        (Mpendane) (Mpendane)
        Kama mwanzo alivyotupenda:
        "Nanyi pendeni", alivyotupenda:
        (Mpendane) (Mpendane)
        Wana, tiini amri hii. (amri heri hii).
        
        ...`,
        151:`151. Huniongoza Mwokozi
        1. Huniongoza Mwokozi, ndipo nami hufurahi,
        Niendapo pote napo, ataniongoza papo.
        
        Chorus
        Kuongoza hunishika; kwa mkono wa hakika;
        Nitaandamana naye Kristo aniongozae.
        
        2. Pengine ni mashakani nami pengine rahani;
        Ni radhi, ijayo yote, yupo nami siku zote.
               
        Chorus
        Kuongoza hunishika; kwa mkono wa hakika;
        Nitaandamana naye Kristo aniongozae.
        
        3. Mkono akinishika kamwe sitanung'unika;
        Atakachoniletea ni tayari kupokea.
               
        Chorus
        Kuongoza hunishika; kwa mkono wa hakika;
        Nitaandamana naye Kristo aniongozae.
        
        4. Nikiisha kazi chini sita kimbia mauti;
        Kushinda ni ya hakika nikiongozwa na Baba.
               
        Chorus
        Kuongoza hunishika; kwa mkono wa hakika;
        Nitaandamana naye Kristo aniongozae.
        
        ..`,
        152:`152. Karibu Na Wewe, Mungu Wangu
        1. Karibu na wewe, Mungu wangu:
        Karibu zaidi Bwana wangu,
        Siku zote niwe karibu na Wewe,
        Karibu zaidi, Mungu wangu.
        
        2. Mimi nasafiri duniani,
        Pa kupumzika sipaoni,
        Nilalapo niwe karibu na Wewe,
        Karibu zaidi, Mungu wangu.
        
        3. Yote unipayo yanivuta;
        Pa kukaribia nitapata;
        Na nielekezwe, karibu na Wewe,
        Karibu zaidi, Mungu wangu.
        
        4. Na kwa nguvu zangu nikusifu;
        Mwamba, uwe maji ya wokovu
        Mashakani niwe kaaribu na Wewe;
        Karibu zaidi, Mungu wangu.
        
        5. Na nyumbani mwa juu, Baba yangu
        Nikinyakuliwa toka huko,
        Kwa furaha niwe pamoja na Wewe,
        Karibu zaidi, Mungu wangu.
        `,
        153:`153. Fikira Moja Tu
        1. Fikira moja tu
        Hurejea tena
        Nimekaribia mbingu
        Zaidi ya jana.
        
        Chorus
        Karibu na kwetu mbingu,
        Karibu na kwetu sasa,
        Nikwone karibu.
        
        2. Karibu na kwetu
        Na kwenye makao;
        Kiti cha enzi cha Mungu,
        Pahali pa mto.
              
        Chorus
        Karibu na kwetu mbingu,
        Karibu na kwetu sasa,
        Nikwone karibu.
        
        3. Kamilisha Yesu,
        Kuamini kwangu;
        Nikifika mwisho wangu,
        Nikwone karibu.
                
        Chorus
        Karibu na kwetu mbingu,
        Karibu na kwetu sasa,
        Nikwone karibu.
      
        `,
        154:`154. Yanipasa Kuwa Naye
        1. Yanipasa kuwa naye, Mwokozi Bwana wangu,
        Akiwa karibu nami, napata nguvu kweli.
        
        Chorus
        Moyo hauogopi, wala kitikisika.
        Nitakwenda apendapo. Kwa kuwa anilinda.
        
        2. Yanipasa kuwa naye, kwani nategemea;
        Anaweza kufariji na maneno matamu.
                
        Chorus
        Moyo hauogopi, wala kitikisika.
        Nitakwenda apendapo. Kwa kuwa anilinda.
     
        3. Yanipasa kuwa naye maisha yangu yote;
        Yakiwapo majaribu na mashaka yo yote.
                
        Chorus
        Moyo hauogopi, wala kitikisika.
        Nitakwenda apendapo. Kwa kuwa anilinda.
     
        4. Yanipasa kuwa naye katika njia zangu;
        Macho yake yaongoza hatua zangu zote.
         
        Chorus
        Moyo hauogopi, wala kitikisika.
        Nitakwenda apendapo. Kwa kuwa anilinda.
     
        ..`,
        155:`155. Njiani Huniongoza
        1. Njiani huniongoza. Yesu wangu, Mwokozi;
        Rehema hatapunguza, Milele Kiongozi.
        Ina raha kwandamana Duniani daima;
        Nijaposumbuka sana, Yeye hutenda vyema,
        
        2. Njiani huniongoza Hupunguza matata;
        Nikiugua hupoza, Na njaani nashiba.
        Lichokapo guu langu Nguvu zikapungua,
        Jiwe lilo mbele yangu Hunibubujikia.
        
        3. Njiani huniongoza Kwa pendo zilizo kuu,
        Mwisho atanituliza Kwake Baba yangu juu.
        Nikivikwa kutokufa, Nikae na Mwokozi,
        Nitamsifu sana; sifa: "Kweli ni Kiongozi."`,
        156:`156. Uniongoze, Yehova
        1. Uniongoze, Yehova, Ni msafiri chini;
        Ni mnyonge, u hodari, 'Nilinde kwa mkono.
        Unitunze, unilinde, Unionyeshe njia!
        
        2. Na kisima cha uzima, Maji ya utabibu,
        Fungua kwa moyo wangu, Ninywe na kuponyeka!
        Uninyweshe, unilishe, Hata nimetosheka.
        
        3. Wakati wa kuuvuka, Ule mto Yordani,
        Hofu yangu ufariji, 'Nione uso wako.
        Nyimbo shangwe, nyimbo shangwe, Nitaimba daima.
        `,
        157:`157. Mfalme Yu Mlangoni
        1. Mfalme yu mlangoni, Ndiye aliyetufia;
        Mara wote wampendao atawakusanya.
        
        Chorus
        Yuaja, yuaja, mlangoni anasimama;
        Anakuja, anakuja, Kuja kwake karibu.
        
        2. Dalili za kuja kwake Zinazidi kutimizwa;
        Karibu wateule watamlaki Bwana.
         
        Chorus
        Yuaja, yuaja, mlangoni anasimama;
        Anakuja, anakuja, Kuja kwake karibu.
            
        3. 'Sitafute duniani amani wala furaha,
        Mpaka Bwana arudi dhambi kuondoa.
                
        Chorus
        Yuaja, yuaja, mlangoni anasimama;
        Anakuja, anakuja, Kuja kwake karibu.
     
        4. Tutakaa na Mwokozi Makaoni ya milele;
        Daima tutafurahi kuwa watu wake.
                
        Chorus
        Yuaja, yuaja, mlangoni anasimama;
        Anakuja, anakuja, Kuja kwake karibu.  
        ..`,
        158:`158. U Mwendo Gani Nyumbani?
        1. U mwendo gani nyumbani? Mlinzi akanijibu,
        "Usiku sasa waisha,mahe kaibu."
        Usihuzunike tena, bali ulemee mwendo
        Hata ushike ufalme kule mwangani juu.
        
        2. Na tena niliuliza, nchi yote ikajibu:
        "Sasa mwendo watimika, milele karibu."
        Usihuzunike tena, ishara kuu zasonga
        Na viumbe vyangojea sauti ya Bwana.
        
        3. Nikamwuliza shujaa, ndivyo kanitia moyo:
        "Shikilia mapigano, kitambo yaisha."
        Usihuzunike tena, kazi ifanye kwa moyo;
        Tumeahidiwa tunu tuishapo shinda.
        
        4. Siyo mbali na nyumbani! Fikara tamu njiani,
        Latupoza roho, nalo lafuta machozi
        Usihuzunike tena, kitambo tutakutana
        Wenye furaha kamili nyumbani mwa Baba.`,
        159:`159. Anakuja Upesi
        1. Anakuja upesi, Yesu Bwana wetu, Msafiri mbali na kwao;
        Alisema dhahiri, "Nitakuja tena"; Amina; na uje, E Bwana.
        
        Chorus
        Yuaja, Yesu atarudi sasa; Anakuja duniani.
        Wasafiri wote watapumzika Yesu anaporudi tena.
        
        2. Makaburi yote wafu wanapolala Yatafunguliwa tena;
        Na mamilioni pale wataondoka tena, Wasione machozi kamwe.
                
        Chorus
        Yuaja, Yesu atarudi sasa; Anakuja duniani.
        Wasafiri wote watapumzika Yesu anaporudi tena.
       
        3. Hatutatengana na hao tena huko; Nyimbo nzuri tutaimba.
        Watakusanyika 'toka kila kabila, Miguuni pa Mwana-kondoo.
                
        Chorus
        Yuaja, Yesu atarudi sasa; Anakuja duniani.
        Wasafiri wote watapumzika Yesu anaporudi tena.
       
        4. Aleluya Amin! Aleluya tena! Upendo wake unashinda!
        Tutamsifu milele, hata tutashangaa, Jinsi alivyo tukomboa.
                
        Chorus
        Yuaja, Yesu atarudi sasa; Anakuja duniani.
        Wasafiri wote watapumzika Yesu anaporudi tena.
       
        ..`,
        160:`160. Watakatifu Kesheni
        1. Watakatifu kesheni, nguvu za mbingu zagonga;
        Washeni taa tayari kwa kurudi kwake Bwana.
        
        Chorus
        Yuaja, Yesu Mfalme, Yuaja myenye fahari,
        Yesu yuaja enzini. Karibu Yesu, uje.
        
        2. Piga mbiu, tangazeni habari ya ukombozi,
        Ya mponya wa upendo nayo nguzu za samaha.
                
        Chorus
        Yuaja, Yesu Mfalme, Yuaja myenye fahari,
        Yesu yuaja enzini. Karibu Yesu, uje.
       
        3. Falme nyingi zaangushwa, Panda ya saba hulia;
        Tangaza neema yake kabla ya kupita saa.
                
        Chorus
        Yuaja, Yesu Mfalme, Yuaja myenye fahari,
        Yesu yuaja enzini. Karibu Yesu, uje.
       
        4. Mataifa yapotea, nchi zajaa uchungu:
        Kistro anaharakisha, Unabii unatimizwa.
                
        Chorus
        Yuaja, Yesu Mfalme, Yuaja myenye fahari,
        Yesu yuaja enzini. Karibu Yesu, uje.
       
        5. Wenye dhambi njoni sasa, Kristo awapatanishe,
        Mbio twaeni neema, kitambo muda waisha.
                
        Chorus
        Yuaja, Yesu Mfalme, Yuaja myenye fahari,
        Yesu yuaja enzini. Karibu Yesu, uje.
       
        ...`,
        161:`161. Piga Panda
        1. Piga panda na ya makelele; Yesu yuaja tena!
        Ipate sauti, imba sana; Yesu yuaja tena!
        
        Chorus
        Anakuja, anakuja; Yesu yuaja tena!
        
        2. Itoe mwangi sana vilima; Yesu yuaja tena!
        Yuaja kwa utukufu mwingi, Yesu yuaja tena!
                
        Chorus
        Anakuja, anakuja; Yesu yuaja tena!
        
        3. Itangazwe mahali po pote; Yesu yuaja tena!
        Mwokozi aliye tufilia, Yesu yuaja tena!
                
        Chorus
        Anakuja, anakuja; Yesu yuaja tena!
        
        4. Kuona machafuko twajua Yesu yuaja tena!
        Mataifa ya kasiriana, Yesu yuaja tena!
                
        Chorus
        Anakuja, anakuja; Yesu yuaja tena!
        
        5. Maradhi, hofu hutuhubiri Yesu yuaja tena!
        Taabu, njaa hutulilia Yesu yuaja tena!
                
        Chorus
        Anakuja, anakuja; Yesu yuaja tena!
        
        ...`,
        162:`162. Tumaini Liko
        1. Tumaini liko La thamani kuu,
        Kupita anasa tupu zake ulimwengu.
        
        2. Pana nyota nzuri: Nuru itoayo
        Kwetu wakati wa kifo Ndio ufufuo.
        
        3. Zikiumwa roho Na hofu, mashaka,
        Sauti hutuambia Mungu hutupenda.
        
        4. Kutoka Kalwari Sauti hunena;
        Nyota ni nuru ya mbingu, Tumaini letu.
        `,
        163:`163. Anakuja, Bwana Yesu
        1. Pengine ni saa ya kupambazuka, Mishale ya jua ipenyapo giza,
        Kwamba atakuja Yesu mtukufu, Awapokee wake.
        
        Chorus
        Bwana itakuwa lini Tutapoimba
        "Anakuja, Bwana Yesu, Aleluya, Amin, Aleluya, Amin?"
        
        2. Pengine mchana, pengine jioni, Pengine usiku wa manane, giza
        Itatoweka kwa fahari akija, Awapokee wake.
                
        Chorus
        Bwana itakuwa lini Tutapoimba
        "Anakuja, Bwana Yesu, Aleluya, Amin, Aleluya, Amin?"
        
        3. Majeshi yake yataimba "Hosana," Na watakatifu waliotukuzwa
        Watamsifu kwa kuwa amekuja Awapokee wake.
                
        Chorus
        Bwana itakuwa lini Tutapoimba
        "Anakuja, Bwana Yesu, Aleluya, Amin, Aleluya, Amin?"
        
        4. Furaha tukiitwa pasipo kufa, Pasipo kuona maradhi, machozi;
        Kuchukuliwa winguni kwa fahari Akija kwa watu wake.
                
        Chorus
        Bwana itakuwa lini Tutapoimba
        "Anakuja, Bwana Yesu, Aleluya, Amin, Aleluya, Amin?"
        `,
        164:`164. Mishale Ya Nuru
        1. Unakaribia wakati wa Kuja kwa Yesu.
        Atawachukua watu wake Nyumbani juu.
        
        Chorus
        Tunaiona mishale ya nuru Inayopenya giza;
        Tunaiona mishale ya nuru Ya ufunuo.
        
        2. Injili inatangazwa pote kwa mataifa;
        Bwana wa Arusi atakuja Na tarumbeta.
                
        Chorus
        Tunaiona mishale ya nuru Inayopenya giza;
        Tunaiona mishale ya nuru Ya ufunuo.
      
        3. Pamoja na malaika zake Bwana arudi,
        Awapeleke waaminifu Wasife tena.
                
        Chorus
        Tunaiona mishale ya nuru Inayopenya giza;
        Tunaiona mishale ya nuru Ya ufunuo.
      
        4. Wapenzi waliotengwa kale Watakutana;
        Machozi yao wenye huzuni Yatafutika.
                
        Chorus
        Tunaiona mishale ya nuru Inayopenya giza;
        Tunaiona mishale ya nuru Ya ufunuo.
      
        ...`,
        165:`165. "Uwe Imara"
        1. Ahadi tamu kwa waamini, Tazama nakuja upesi sana.
        Uwe imara, hatari kubwa: Ndugu usilale, bali ukeshe.
        
        Chorus
        Uihifadhi imani yako,--Dunia mpya itatolewa
        Njoo ingia furaha yangu; Taji zinangoja; Uwe imara.
        
        2. Tatakesha na kutoa sala; Atakuja kama mwivi kwa wengi;
        Ya kwamba yu karibu twajua, Ila hatujui ni siku gani.
               
        Chorus
        Uihifadhi imani yako,--Dunia mpya itatolewa
        Njoo ingia furaha yangu; Taji zinangoja; Uwe imara.
       
        3. Tunategemea Neno lake, Ambalo latangaza kuja kwake,
        Tumaini letu ni ahadi: "naja karibuni, uwe imara."
                
        Chorus
        Uihifadhi imani yako,--Dunia mpya itatolewa
        Njoo ingia furaha yangu; Taji zinangoja; Uwe imara.`,
        166:`166. Furaha Kwa Ulimwengu
        1. Furaha kwa ulimwengu, Bwana atakuja!
        Kila moyo umpokee, Viumbe imbeni,
        Viumbe imbeni, Viumbe vyote imbeni.
        
        2. Na Bwana atatawala: Watu na waimbe;
        Mit, milima na mawe Kariri furaha,
        Kariri furaha, Kariri furaha kubwa.
        
        3. Atatawala kwa wema; Atawafundisha
        Mataifa haki yake, Ajabu za pendo,
        Ajabu za pendo, Ajabu za pendo lake.
        `,
        167:`167. Yu Hai, Yu Hai
        1. Yesu Bwana Mwokozi aishi milele,
        Najua kwamba Yupo pamoja na mimi;
        Sauti nasikia, Rehema naona;
        Wakati namhitaji, yupo nami.
        
        Chorus
        Yu hai, Yu hai,Yu hai Bwana Yesu!
        Atembea, azungumza nami siku zote.
        Yu hai, Yu hai, kutoa uzima!
        Hivi ndivyo nijuavyo,
        Yu hai ndani yangu!
        
        2. Ulinzi Wake upo naona dhahiri,
        Miguu ichokapo, sikati tamaa.
        Najua an'ongoza kupota dhoruba,
        Siku ya kuja kwake nitamwona.
              
        Chorus
        Yu hai, Yu hai,Yu hai Bwana Yesu!
        Atembea, azungumza nami siku zote.
        Yu hai, Yu hai, kutoa uzima!
        Hivi ndivyo nijuavyo,
        Yu hai ndani yangu!`,
        168:`168. Tarumbeta Ya Mwana
        1. Tarumbeta ya mwana itakapolia mara,
        Milele itakapopambazuka,
        Nao wa haki watakapokusanyika ng'ambo,
        Majina yaitwapo, lo!—niweko.
        
        Chorus
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—niweko.
        
        2. Siku ile watakatifu watakapoamka
        Na kuondoka huru kaburini
        Watakapokusanyika makaoni kule juu,
        Majina yaitwapo, lo—niweko.
                
        Chorus
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—niweko.
       
        3. Tutende kazi kwa yesu mchana kutwa kwa bidii,
        Tutangaze kote pendo lake kuu,
        Nayo kazi itakapotimika hap chini
        Majina yaitwapo, lo—niweko.
                
        Chorus
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—
        Majina yaitwapo, lo!—niweko.
       
        ..`,
        169:`169. Tutashindae Hukumuni?      
        1. Hapo Yesu atakapoita mataifa mbele yake,
        Tutashindaje kwenye hukumu mbele ya kiti cha enzi?
        
        Chorus
        Atakusanya ngano ghalani, atatupambali makapo;
        Tutashindaje hukumuni siku kuu ya kiyama?
        
        2. Je, tutasikua neno tamu: "vema, wewe mtumwa mwema,"
        Ama wenye uchunguna hofu tutakatazwa ufalme?
                
        Chorus
        Atakusanya ngano ghalani, atatupambali makapo;
        Tutashindaje hukumuni siku kuu ya kiyama?
      
        3. Atakubali tu kwa furaha watoto wake wapendwa,
        Atawapa mavazi meupe, wakea tayari kumlaki.
                
        Chorus
        Atakusanya ngano ghalani, atatupambali makapo;
        Tutashindaje hukumuni siku kuu ya kiyama?
      
        4. Hivyo tukeshe, nasi tungoje, wenye taa zinazo waka;
        Tutakapoitwa arusini tuwe tayari kumlaki.
                
        Chorus
        Atakusanya ngano ghalani, atatupambali makapo;
        Tutashindaje hukumuni siku kuu ya kiyama?
      
        5. Roho ikielekea mbingu twangoja wenye saburi,
        Hata safari yetu iishe, tukae kwake milele.
                
        Chorus
        Atakusanya ngano ghalani, atatupambali makapo;
        Tutashindaje hukumuni siku kuu ya kiyama?
      
        ..`,
        170:`170. Jina Langu Limeandikwa Je?     
        1. Siitafuti mali, wala utajiri;
        Nataka kwa yakini nipate Mwokozi.
        Chuoni mwa Ufalme, niambie Yesu,
        Jina langu yakini limeandikwa, Je?
        
        Chorus
        Limeandikwa, Je? Jina langu huko?
        Kitabuni mbinguni, limeandikwa je?
        
        2. Dhambi zangu ni nyingi, ni kama mchanga,
        Lakini damu yako, Mwokozi, Yatosha;
        Kwani umeahidi: zijapo nyekundu
        Zitakuwa nyeupe ilivyo theluji.
              
        Chorus
        Limeandikwa, Je? Jina langu huko?
        Kitabuni mbinguni, limeandikwa je?
          
        3. Mji mzuri sana, wa majumba makuu,
        Walipo malaika, mji bila ovu;
        Wakakapo walio na mavazi safi,
        Limeandikwa sasa, jina langu huko?
                
        Chorus
        Limeandikwa, Je? Jina langu huko?
        Kitabuni mbinguni, limeandikwa je?
        
        ..`,
        171:`171. Hukumu    
        1. Imeanzishwa hukumu mbinguni; Tutasimamaje pale
        Apomapo Mungu hakimu kula wazo na tendo?
        
        Chorus
        Tutasimamaje sote katika siku kuu ile?
        Dhambi zitu zitafutika ama zitatuangusha?
        
        2. Wametangulia wafu kupimwa, Kitambo ndipo wahai,
        Watapokea neno la mwisho, Vitabuni mwa Mungu.
                
        Chorus
        Tutasimamaje sote katika siku kuu ile?
        Dhambi zitu zitafutika ama zitatuangusha?
      
        3. Tutasimamaje usiku ule, Siri zetu, kila moja,
        Zafunuliwa toka vitabu; Yesu atusaidie!
                
        Chorus
        Tutasimamaje sote katika siku kuu ile?
        Dhambi zitu zitafutika ama zitatuangusha?`,
        172:`172. Mfalme Ajapo
        1. Mfalme wetu atuita tukae karamuni kwake;
        Itakuwaje nasi kule Bwana akija?
        
        Chorus
        Bwana ajapo, ndugu, Bwana ajapo!
        Itakuwaje na sisi, Bwana akija?
        
        2. Atavikwa vizuri sana,taji badala ya miiba;
        Kweli tokeo la fahari Bwana ajapo.
                
        Chorus
        Bwana ajapo, ndugu, Bwana ajapo!
        Itakuwaje na sisi, Bwana akija?
       
        3. Kwa fufaha awakubali wenye mavazi ya arusi;
        Tu wa heri tukimridhisha Bwana ajapo.
                
        Chorus
        Bwana ajapo, ndugu, Bwana ajapo!
        Itakuwaje na sisi, Bwana akija?
       
        4. Kutakuwako na utengo: watalia waliomwasi;
        Cha kutisha kitambo kile Kristo ajapo!
                
        Chorus
        Bwana ajapo, ndugu, Bwana ajapo!
        Itakuwaje na sisi, Bwana akija?
       
        5. Mfalme utupe neema sisi tunapokungojea
        Tusiogope kukuona ujapo Bwana.
                
        Chorus
        Bwana ajapo, ndugu, Bwana ajapo!
        Itakuwaje na sisi, Bwana akija?
       
        ..`,
        173:`173. Hatujui Saa
        1. Hatujui sa-a ya kuja kwwa Bwana, Lakini dakiki zasema karibu
        Atakporudi,--lakini kwa kweli Hatujui sa-a.
        
        Chorus
        Atakuja, kwa vile tukeshe;
        Atakuja Mwokozi, Aleluya!
        Atakuja kwa fahari yu Baba yake,--
        Hatujui sa-a.
        
        2. Pana nuru kwao wapendao haki, pana kweli katika chuo cha Mungu;
        Unabii hufundisha kuja kwake,--Hatujui saa.
             
        Chorus
        Atakuja, kwa vile tukeshe;
        Atakuja Mwokozi, Aleluya!
        Atakuja kwa fahari yu Baba yake,--
        Hatujui sa-a.
      
        3. Tutakesha na tutaomba daima, Tutafanya kazi mpaka akija,
        Tutaimba na tutasoma ishara,--Hatujui saa.
                
        Chorus
        Atakuja, kwa vile tukeshe;
        Atakuja Mwokozi, Aleluya!
        Atakuja kwa fahari yu Baba yake,--
        Hatujui sa-a.`,
        174:`174. TUKIMGOJEA
        1. Sijui atakapokuja, Mchana au usiku;
        Labda sa-a ya alasiri. Pengine ni alfajiri.
        Hutwambia tuwe tayari, Ta-a zetu tusizime;
        Ili ajapo atukute; Tuwe tukimngoja Yeye.
        
        Chorus
        Tu—kimngoje—a, (Kukesha, tunakungoja Wewe)
        Tu—kimngoja—a, (Kukesha, tunakungoja Wewe)
        Tu—kimngoja—a, (Kukesha, tunakungoja Wewe)
        Twakesha, twamngoja Yeye.
        
        2. Nakumbuka huruma zake, Bei ya wokovu wetu;
        Aliacha nyumba tukufu Awafilie wabaya.
        Ninadhani itampendeza, Kama sisi watu wake,
        Tukionyesha pendo letu, Tuwe tukimngoja Yeye.
              
        Chorus
        Tu—kimngoje—a, (Kukesha, tunakungoja Wewe)
        Tu—kimngoja—a, (Kukesha, tunakungoja Wewe)
        Tu—kimngoja—a, (Kukesha, tunakungoja Wewe)
        Twakesha, twamngoja Yeye.
    
        3. Ee Yesu, Mwokozi mpendwa, Wajua nalihifadhi
        Tumaini la kukuona. La kukaribishwa nawe.
        Ukija kwa watu wengine, Kama mhukumu wao,
        Kwangu utakuwa rafiki, Nakesha, nakungojea.
                
        Chorus
        Tu—kimngoje—a, (Kukesha, tunakungoja Wewe)
        Tu—kimngoja—a, (Kukesha, tunakungoja Wewe)
        Tu—kimngoja—a, (Kukesha, tunakungoja Wewe)
        Twakesha, twamngoja Yeye.`,
        175:`175. Uso Kwa Uso
        1. Nitaonana na Yesu, uso kwa uso kweli;
        Siku ile shangwe tele nitamwona Mwokozi.
        
        Chorus
        Tutaonana kwa macho, huko kwetu mbinguni;
        Na kwa utukufu wake, nitamwona milele.
        
        2. Sasa siwezi kujua jinso alivyo hasa,
        Bali atakapokuja, nitamwona halisi.
                
        Chorus
        Tutaonana kwa macho, huko kwetu mbinguni;
        Na kwa utukufu wake, nitamwona milele.
     
        3. Mbele yake yafukuzwa machozi na huzuni;
        Kipotovu kitanyoshwa, fumbo litafumbuka.
                
        Chorus
        Tutaonana kwa macho, huko kwetu mbinguni;
        Na kwa utukufu wake, nitamwona milele.
     
        4. Uso kwa uso! Hakika palepale furaha;
        Nitafurahi kabisa nikimwona Mwokozi.
                
        Chorus
        Tutaonana kwa macho, huko kwetu mbinguni;
        Na kwa utukufu wake, nitamwona milele.
     
        ...`,
        176:`176. Ati Tuonane Mtoni?
        1. Ati twonane mtoni? maji mazuri ya mbingu;
        Yanatokea mwangani, penye kiti cha Mungu.
        
        Chorus
        Naam, twonane mtoni! Watakatifu, kwenu ni mtoni!
        Tutakutanika kule mtoni penye kiti cha Mungu.
        
        2. Tukitembea mtoni na Yesu mchunga wetu,
        Daima tu ibadani usoni pake kwetu.
                
        Chorus
        Naam, twonane mtoni! Watakatifu, kwenu ni mtoni!
        Tutakutanika kule mtoni penye kiti cha Mungu.
      
        3. Tukisafiri mtoni tutue ulemeao,
        Wema wa Mungu yakini: una taji na vao!
                
        Chorus
        Naam, twonane mtoni! Watakatifu, kwenu ni mtoni!
        Tutakutanika kule mtoni penye kiti cha Mungu.
      
        4. Kwang'ara sana mtoni cha Mwokozi ni kioo,
        Milele hatuachani tumsifu kwa nyimbo.
                
        Chorus
        Naam, twonane mtoni! Watakatifu, kwenu ni mtoni!
        Tutakutanika kule mtoni penye kiti cha Mungu.
      
        5. Karibu sana mtoni, karibu tuatawasili,
        Mara huwa furahani na amani ya kweli.
                
        Chorus
        Naam, twonane mtoni! Watakatifu, kwenu ni mtoni!
        Tutakutanika kule mtoni penye kiti cha Mungu.`,
        177:`177. Kazi Yangu Ikiisha
        1. Kazi yangu ikisha, nami, nakiokoka,
        Na kuvaa kutokuharibika,
        Nitamjua Mwokozi; nivukapo ng'amboni
        Atakuwa wa kwanza kunilaki.
        
        Chorus
        Nitamjua, nitamjua,
        Nikimwona uso kwa uso;
        Nitamjua, nitamjua,
        Kwa alama za misumari.
        
        2. Kuona uso wake utanipa furaha,
        Furaha isiyo ya kukomesha;
        Nitamsifu Mwokozi kwa rehema na pendo
        Vilivyo nipa pahali mbingini.
                
        Chorus
        Nitamjua, nitamjua,
        Nikimwona uso kwa uso;
        Nitamjua, nitamjua,
        Kwa alama za misumari.
     
        3. Nao walio kufa katika Bwana Yesu,
        Nitawaona tena huko juu;
        Lakini nifikapo kwake huko mbinguni,
        Nataka kumwona Mwokozi kwanza.
                
        Chorus
        Nitamjua, nitamjua,
        Nikimwona uso kwa uso;
        Nitamjua, nitamjua,
        Kwa alama za misumari.
     
        4. Milangoni mwa mji Bwana atanipisha,
        Pasipo machozi awla huzuni.
        Nitauimba wimbo wa milele: lakini
        Nataka kumwona Mwokozi kwanza.
                
        Chorus
        Nitamjua, nitamjua,
        Nikimwona uso kwa uso;
        Nitamjua, nitamjua,
        Kwa alama za misumari.
     
        ...`,
        178:`178. Ukingoni Mwa Yordani       
        1. Ukingoni mwa Yordani ninaangalia
        Bara nzuri ya Kaanani, ninayotamani.
        
        Chorus
        Tutakaa pamoja na Yesu,
        Katika pwani yenye raha;
        Tutaimba wimbo wa Musa na Kondoo,
        Milele hata milele.
        
        2. Bara ile ina nuru, nuru ya milele;
        Kristo, Jua, hutawala, hufukuza giza.
                
        Chorus
        Tutakaa pamoja na Yesu,
        Katika pwani yenye raha;
        Tutaimba wimbo wa Musa na Kondoo,
        Milele hata milele.
       
        3. Nitapafikia lini na kubarikiwa,
        Penye ufalme wa Baba. Na kumwona uso?
                
        Chorus
        Tutakaa pamoja na Yesu,
        Katika pwani yenye raha;
        Tutaimba wimbo wa Musa na Kondoo,
        Milele hata milele.
       
        4. Furaha yangu rohoni ni kuchukuliwa;
        Siyaogopi mawimbi katika Yordani.
                
        Chorus
        Tutakaa pamoja na Yesu,
        Katika pwani yenye raha;
        Tutaimba wimbo wa Musa na Kondoo,
        Milele hata milele.`,
        179:`179. Watafurahi
        1. Wavunaji watafurahi, pale watakapo rudi,
        Wakiyaleta mavuno hata Yerusalemu.
        
        Chorua
        Furaha wataipata, furaha hata milele,
        Furaha, wataipata, wakati wa mavuno.
        
        2. Na siku ile tutaimba, kumshukuru na kumsifu
        Bwana Yesu Jumbe wetu, kule Yerusalemu.
                
        Chorua
        Furaha wataipata, furaha hata milele,
        Furaha, wataipata, wakati wa mavuno.
        
        3. Wavunaji watafurahi makaoni mwa milele
        Yaliyowekwa tayari kule Yerusalemi.
                
        Chorua
        Furaha wataipata, furaha hata milele,
        Furaha, wataipata, wakati wa mavuno.`,
        180:`180. Pana Mahali Pazuri Mno       
        1. Pana mahali pazuri mno,
        Twapaona kwa mbali sasa;
        Baba yetu angoja pale,
        Amepanga makao yetu.
        
        Chorus
        Kitambo tu bado,
        Tutakutana ng'ambo pale.
        Kitambo tu bado,
        Tutakutana ng'ambo pale.
        
        2. Tutaimba pale kwa moyo
        Nyimbo tamu za wenye heri.
        Na rohoni hatutaona
        Tena haja ya kupumzika.
                
        Chorus
        Kitambo tu bado,
        Tutakutana ng'ambo pale.
        Kitambo tu bado,
        Tutakutana ng'ambo pale.
    
        3. Kwa Baba yetu mkarimu
        Tutatoa shukrani sana,
        Kwa kipaji cha pendo lake
        Na baraka anazotupa.
                
        Chorus
        Kitambo tu bado,
        Tutakutana ng'ambo pale.
        Kitambo tu bado,
        Tutakutana ng'ambo pale.`,
        181:`181. TUTAKAA MAHALI PA MAJI
        1. Mahali pa maji mazuri maji ya uzima;
        Anapotungoja Yesu tutakaribishwa.
        
        Chorus
        Mahali pa maji mazuri, penye maji ya uzima;
        Tutakaa na Mwokozi, chemchemi ya uzima.
        
        2. Tunapochoka safarini, tamu kupumzika.
        Panapo maji ya uzima yatufurahisha.
              
        Chorus
        Mahali pa maji mazuri, penye maji ya uzima;
        Tutakaa na Mwokozi, chemchemi ya uzima.
          
        3. Una kiu? Uje kwa Yesu, utaburudishwa;
        Yesu yu maji ya uzima, unywe,uokoke.
                
        Chorus
        Mahali pa maji mazuri, penye maji ya uzima;
        Tutakaa na Mwokozi, chemchemi ya uzima.`,
        182:`182. HAPANA GIZA
        1. Mchana hauishi Mjini mzuri;
        Mji hautapita; Na hapana giza.
        
        Chorus
        Machozi yatafutwa, Kifo hapana pale;
        Hawahesabu siku, Na hapana giza.
        
        2. Milango ni ya lulu, Mjini mzuri;
        Dhahabu njia zake; Na hapana giza.
                
        Chorus
        Machozi yatafutwa, Kifo hapana pale;
        Hawahesabu siku, Na hapana giza.
        
        3. Milango haifungwi Mjini mzuri;
        Mto ni wa uzima Na hapana giza.
                
        Chorus
        Machozi yatafutwa, Kifo hapana pale;
        Hawahesabu siku, Na hapana giza.
        
        4. Hawahitaji jua Mjini mzuri,
        Mwana Kondoo nuru; Na hapana giza.
                
        Chorus
        Machozi yatafutwa, Kifo hapana pale;
        Hawahesabu siku, Na hapana giza.`,
        183:`183. YESU ANAPORUDI
        1. Furaha na raha tutapata, Furaha na raha tutapata,
        Furaha na raha tutapata Yesu anaporudi.
        
        Chorus
        Yesu anaporudi (rudi) Yesu anaporudi (rudi);
        Furaha na raha tutapata Yesu anaporudi.
        
        2. Tutaimba nyimbo za shangwe kuu, Tutaimba nyimbo za shangwe kuu,
        Tutaimba nyimbo za shangwe kuu Yesu anaporudi.
             
        Chorus
        Yesu anaporudi (rudi) Yesu anaporudi (rudi);
        Furaha na raha tutapata Yesu anaporudi.
         
        3. Hapana machozi arudipo, Hapana machozi arudipo,
        Hapana machozi arudipo, kwa wateule wake.
                
        Chorus
        Yesu anaporudi (rudi) Yesu anaporudi (rudi);
        Furaha na raha tutapata Yesu anaporudi.`,
        184:`184. PANAPO PENDO
        1. Vitu vyote ni sawa, panapo pendo:
        Kila sauti tamu, panapo pendo
        Pana amani pale, na furaha nyumbani,
        Siku zote salama panapo pendo.
        
        Chorus
        Panapo upendo - Siku zote salama
        Panapo pendo.
        
        2. Furaha I nyumbani, panapo pendo:
        Hapana machukizo, panapo pendo;
        Chakula ni kitamu, mashamba yasitawi,
        Maisha ni kamili, panapo pendo.
                
        Chorus
        Panapo upendo - Siku zote salama
        Panapo pendo.
   
        3. Hata mbinguni juu, pana furaha
        Wakiona upendo nyumbani mwetu.
        Macho yapendezwa na viumbe vya Mungu,
        Naye Mungu huona, panapo pendo.
                
        Chorus
        Panapo upendo - Siku zote salama
        Panapo pendo.
   
        4. Ee Yesu niwe wako, wako kabisa,
        Ndipo patakuwako Pendo nyumbani;
        Nitakaa salama, sitafanya dhambi:
        Nitabarikiwa tu panapo pendo.
                
        Chorus
        Panapo upendo - Siku zote salama
        Panapo pendo.`,
        185:`185. MUNGU, MAPENZI MAKAMILIFU
        1. Mungu u mapenzi mtakatifu Yapitayo fahamu za watu
        Twanyenyekea sisi wapungufu, Wape baraka wapenzi wetu.
        
        2. Ewe Mapenzi yasiyopimika Twawaombea kitini Mwako,
        Wape mapenzi yasiyotindika, Waliooana mbele yako.
        
        3. Ewe uhai, wewe u dhamana Ya imani na matumaini,
        Wape kuvumilia hapa sana Wasiche maumivu mwishoni.
        
        4. Wape furaha hiyo iwezayo kutia nuru kwenye huzuni,
        Wape amani hiyo itakwayo Katika matata duniani.
        
        5. Waende mbele kusaidiana Maisha yao ulimwenguni;
        Hata mwisho, ni kuja kwake Yesu, Wafurahi milele mbinguni.`,
        186:`186. HATUTAAGANA TENA
        1. Tuonanapo na rafiki sote twafurahi,
        Ila tumepaswa mwishowe kuagana tena.
        
        Chorus
        Hatutaagana tena nyumbani mbinguni,
        Kwenye nchi tamu juu, Hatutaagana.
        
        2. Twatumaini kwa furaha tutaonana juu
        Na rafiki tulioaga tuishapo shinda.
               
        Chorus
        Hatutaagana tena nyumbani mbinguni,
        Kwenye nchi tamu juu, Hatutaagana.
         
        3. Kule hatutatamka kamwe neno la kuaga,
        Tutaimba daima tena nyimbo za furaha.
                
        Chorus
        Hatutaagana tena nyumbani mbinguni,
        Kwenye nchi tamu juu, Hatutaagana.`,
        187:`187. KUFARIKI NAYE YESU
        1. Kufariki naye Yesu! Usingizi wewe heri;
        Raha isiyofujika kwa majozi na adui.
        
        2. Kufariki naye Yesu! Lo! Ya kubwaga simanzi
        Na kulala na amani hata Bwana awatuze.
        
        3. Kufariki naye Yesu! Heri watakaoamshwa,
        Wataona siku ile utukufu wake Bwana.
        
        4. Kufariki naye Yesu! Wataamka aitapo;
        Watapasua kaburi na kutoka watukufu.`,
        188:`188. WIMBI LITAKASALO
        1. Wimbi la damu ya Yesu Linatutakasa;
        Aliumia kusudi Tupate uzima.
        
        Chorus
        Wimbi la damu naona, Naingia, natakaswa!
        Bwana asifiwe sana, Hutakasa, hutakasa.
        
        2. Damu inasema kwangu, Nasikia mvuto;
        Inasema, moyo wangu Hutakaswa nayo.
                
        Chorus
        Wimbi la damu naona, Naingia, natakaswa!
        Bwana asifiwe sana, Hutakasa, hutakasa.
        
        3. Naondoka kutembea Kwa nuru ya mbingu;
        Mavazi yamesafishwa; Moyoni ni Yesu.
                
        Chorus
        Wimbi la damu naona, Naingia, natakaswa!
        Bwana asifiwe sana, Hutakasa, hutakasa.
        
        4. Neema ni ya ajabu, Kutakaswa ndani!
        Na kuwa naye Yesu tu, Aliye Mwokozi.
                
        Chorus
        Wimbi la damu naona, Naingia, natakaswa!
        Bwana asifiwe sana, Hutakasa, hutakasa.`,
        189:`189. TUBATIZE UPYA
        1. Mimina upya nguvu toka juu;
        Tupe pendo lako, ewe Mwokozi.
        
        Chorus
        Twakusihi sana Yesu Mwokozi,
        Tubatize upya, kwa Roho leo.
        
        2. Kwako twalia, wenye maovu,
        Osha moyo wetu, ututakase.
                
        Chorus
        Twakusihi sana Yesu Mwokozi,
        Tubatize upya, kwa Roho leo.
      
        3. Kipaji cha juu, kitume kwetu,
        Tubariki sasa, utufariji.
                
        Chorus
        Twakusihi sana Yesu Mwokozi,
        Tubatize upya, kwa Roho leo.
      
        4. Isikilize, kwa moyo wazi,
        Sauti ya Roho; ubarikiwe.
                
        Chorus
        Twakusihi sana Yesu Mwokozi,
        Tubatize upya, kwa Roho leo.`,
        190:`190. RAHA YANGU YOTE, BWANA
        1. Raha yangu yote, Bwana, I mbavuni pako;
        Mimi sina haja tena ila kifo chako.
        
        2. Mwokozi uliyekufa, nawe ndiwe Mungu,
        Kifo chako ni kwa dhambi, ziondoe zangu.
        
        3. Nioshe na niwe wako, nawe uwe wangu;
        Nioshe damuni mwako liwe fungu langu.
        
        4. Nioshe si miguu tu, osha tangu nyayo,
        Hata kichwa changu juu, na ndani ya moyo,
        
        5. Na iwe kafara damu nifanyapo kazi,
        Hata imani itimu, nikwone,Mwokozi.`,
        191:`191. MKATE WA MBINGU
        1. Mkate wa mbingu mega kwetu;
        Ulivyotoa kwa thenashara.
        Katika kitabu, twakuona.
        Moyo unatweta kukutana.
        
        2. Neno la ukweli libariki;
        Tusikie mwito wa upole.
        Vizuizi vyote vitakoma.
        Tena tutapata uungwana.
        
        3. Uzima na nguvu, utanena;
        Nakimbiliza tu kufuata.
        Lakini mnyonge ndiye mimi;
        Naye Mshindaji ndiye wewe!
        `,
        192:`192. MWAMBA WENYE IMARA
        1. Mwamba wenye imara,kwako nitajificha!
        Maji hayo na damu yaliyotoka humu,
        Hunisafi na dhambi,Hunifanya m-shindi.
        
        2. Kwa kazi zote pia sitimizi sheria,
        Nijapofanya bidii,nikilia na kudhii,
        Hayaishi makosa;ndiwe wa kuokoa.
        
        3. Sina cha mkononi,naja msalambani,
        Nili tupu,nivike;ni mnyonge,nishike;
        Nili mchafu,naja,nioshe nisijafa.
        
        4. Nikungojapo chini,na kwenda kaburini,
        Nipaapo mbinguni na kukwona enzini,
        Roho yangu na iwe rahani mwako wewe`,
        193:`193. SAUTI YAKE MCHUNGAJI
        1. Sauti ya Mchungaji, ninasikia jangwani,
        Kondoo waliopotea anwaita warudi.
        
        Chorus
        Leteni, leteni, leteni toka dhambini;
        Leteni, leteni, waleteni kwa Yesu.
        
        2. Nani atakeyekwenda amsaidie Mchungaji,
        Awarudishe zizini, wasife bure gizani?
                
        Chorus
        Leteni, leteni, leteni toka dhambini;
        Leteni, leteni, waleteni kwa Yesu.
  
        3. Usikose kusikis sauti ya Mchungaji,
        "Kondoo waliopotea nwnda na kuwatafuta."
                
        Chorus
        Leteni, leteni, leteni toka dhambini;
        Leteni, leteni, waleteni kwa Yesu.`,
        194:`194. TWAOMBA BARAKA ZAKO
        1. Twaomba, Bwana, umpokee Kama mhudumu;
        Ambaye anjitoa Kuwa mtumishi.
        
        2. Twaomba, Bwana, umpokee Kama mhudumu;
        Neno lako alitoe, Mwangaza kung'aa.
        
        3. Mwokozi wetu, twaomba, na umwandikie
        Kitabuni mwako juu Mjumbe wa injili.
        
        4. Silaha zake apewe Kumshinda adui;
        Vitabuni awe hohari, Mpaka mauti.
        
        5. Yeye ashindaye, Bwana, Kwa rehema yako,
        Ile taji ya dhahabu, Nawe utampa`,
        195:`195. MSINGI WA KANISA
        1. Msingi wa Kanisa Ndiye Yesu Bwana;
        Kiumbe chake kipya Akipenda sana;
        Kutaka ‘kitafuta Alishuka chini,
        Naye kwa haja yake, Akafa Mtini.
        
        2. Lina kila kabila Kisha ndiyo moja
        Wokovu wake una Mwokozi ndiyo moja;
        Uzazi ni umoja. Moja tumaini.
        Chakula ni kimoja. Moja tumaini.
        
        3. Watu hustaajabu Kwa mashaka yote.
        Yaipatayo nje Hata ndani mwote;
        Ila watakatifu Humwomba, wakikesha
        Usiku ni kilio. Asubuhi raha.
        
        4. Mashaka na taabu Hata vita vyake.
        Vyangoja matimizo Ya amani yake.
        Ndipo kwa macho yetu Twone utukufu
        Kanisa ya kushinda itastarehe juu.`,
        196:`196. VITO VYA THAMANI
        1. Kitambo Bwana yuaja, atafute kote
        Vito vya thamani kubwa: mali yake kuu.
        
        Chorus
        Kama nyota tajini vitangaa sana,
        Vito vizuri kweli vyenye thamani.
        
        2. Karibu atakusanya vito kwa ufalme,
        Vizuri vinavyongaa: mali yake kuu.
                
        Chorus
        Kama nyota tajini vitangaa sana,
        Vito vizuri kweli vyenye thamani.
        
        3. Watoto wote wadogo wampendao Yesu,
        Ndiyo vito ving,vyo: mali yake kuu.
                
        Chorus
        Kama nyota tajini vitangaa sana,
        Vito vizuri kweli vyenye thamani.`,
        197:`197. ANIPENDA NI KWELI
        1. Anipenda ni kweli: Mungu anena hili;
        Sisi wake watoto kutulinda si zito.
        
        Chorus
        Yesu Mwokozi ananipenda;
        Kweli hupenda, Mungu amesema.
        
        2. Kwa kupenda akafa niokoke na kufa:
        Atazisafi taka sana ataniweka.
                
        Chorus
        Yesu Mwokozi ananipenda;
        Kweli hupenda, Mungu amesema.
      
        3. Anipenda kabisa; niuguapo sasa,
        Anitunza mbinguni niliyelala chini.
                
        Chorus
        Yesu Mwokozi ananipenda;
        Kweli hupenda, Mungu amesema.
      
        4. Kunipenda haachi tu sote hapa chini,
        Baada ya mashaka kwake tanipeleka       
                
        Chorus
        Yesu Mwokozi ananipenda;
        Kweli hupenda, Mungu amesema.`,
        198:`198. KAZA SANA MACHO
        1. Nilinawa mikono safi asubuhi,
        Itende kazi kutwa kwa Yesu, Yesu Mwokozi.
        
        Chorus
        Kaza sana macho njiani kote,
        Utende kwa Yesu kazi njema tu.
        
        2. Natega masikio nitambue wasaa,
        Mikono na itende upole daima.
                
        Chorus
        Kaza sana macho njiani kote,
        Utende kwa Yesu kazi njema tu.
        
        3. Macho yangu yachunga mikono kazini;
        Ilindwe maovuni impendeze Yesu. 
                
        Chorus
        Kaza sana macho njiani kote,
        Utende kwa Yesu kazi njema tu.`,
        199:`199. UPENDO NI FURAHA
        1. Upendo ni furaha, ni kweli desturi;
        Yake kuzisahihisha, njia zetu zote.
        
        Chorus
        Yu pendo: tu watoto wake,
        Yu pendo, Mwana wa Mungu!
        
        2. Na sisi tupendane kama Baba Mungu,
        Amri yake ndiyo hii, kupendana sana.
                
        Chorus
        Yu pendo: tu watoto wake,
        Yu pendo, Mwana wa Mungu!
     
        3. Duniani huzuni, ugonjwa mauti;
        Kwa pendo tuwafariji, wenye mahitaji.
                
        Chorus
        Yu pendo: tu watoto wake,
        Yu pendo, Mwana wa Mungu!
     
        4. Na atakapokuja kutuchukua juu;
        Tutaimba milele pendo lake Yesu.
                
        Chorus
        Yu pendo: tu watoto wake,
        Yu pendo, Mwana wa Mungu!.`,
        200:`200. BABA YETU ALIYE MBUNGUNI
        1. Baba yetu aliye mbinguni,
        Amenifurahisha yakini.
        Kuniaambia mwake Chuoni,
        Ya kuwa name Yesu pendoni.
        
        Chorus
        Anipenda Mwokozi Yesu,
        Anipenda, Anipenda;
        Anipenda Mwokozi Yesu,
        Anipenda mimi.
        
        2. Nimuachapo kutanga mbali,
        Yeye yu vivyo, hupenda kweli:
        Hunirejea kwake moyoni,
        Kweli yu name Yesu pendoni.
                
        Chorus
        Anipenda Mwokozi Yesu,
        Anipenda, Anipenda;
        Anipenda Mwokozi Yesu,
        Anipenda mimi.
        
        3. Anipenda! Nami ninampenda,
        Kwa wokovu alionitenda;
        Alinifilia msalabani,
        Kwa kuwa name Yesu pendoni.
               
        Chorus
        Anipenda Mwokozi Yesu,
        Anipenda, Anipenda;
        Anipenda Mwokozi Yesu,
        Anipenda mimi.
        `,
        201:`201. Hunipenda Pia.
        1. Mungu huona videge wanaoanguka;
        Akiwapenda videge,vile hunipenda.
        
        Chorus
        Hunipenda, hunipenda, pia;
        Najua ananipenda niliye mdogo.
        
        2. Rangi ya namna nzuri upamba maua;
        Akiyapenda maua, vile unipenda.
                
        Chorus
        Hunipenda, hunipenda, pia;
        Najua ananipenda niliye mdogo.
        
        3. Mungu aliyeviumba videge, maua,
        Atasahau watoto kweli huwapenda.
                
        Chorus
        Hunipenda, hunipenda, pia;
        Najua ananipenda niliye mdogo.`,
        202:`202. Sikia Mlio
        1. Sikia mlio! Pesa koponi
        Zinalialia—zote kwa Yesu.

        Chorus
        Kuanguka kuanguka pesa koponi,
        Kila moja kwako, Yesu zipokee.
        
        2. Huanguka pesa toka mikononi:
        Sadaka kwa Yesu ya kundi dogo.
        
        Chorus
        Kuanguka kuanguka pesa koponi,
        Kila moja kwako, Yesu zipokee.
       
        3. Tulio wadogo tuna haba tu;
        Tuishapo kuwa Pendo 'tazidi.
        
        Chorus
        Kuanguka kuanguka pesa koponi,
        Kila moja kwako, Yesu zipokee.
       
        4. Wenye mali chache tumpe moyo;
        Kwa furaha tupu atakubali.
        
        Chorus
        Kuanguka kuanguka pesa koponi,
        Kila moja kwako, Yesu zipokee.`,
        203:`203. Ya Saba Ni Kwa Yesu
        1. Siku sita fanya kazi, Ya saba ni kwa Yesu.
        Hapo tunapo pumzika, kwani ni yake Yesu.
        
        Chorus
        Moja, mbili, tatu,nne, tano, sita, zote kwetu;
        Lakini tutakumbuka, Ya saba ni kwa Yesu.
        
        2. Huonyesha ya kufanya, Kwa kuwa ni ya Yesu,
        Na atuonyesha njia, tutamfuata Yesu.
                
        Chorus
        Moja, mbili, tatu,nne, tano, sita, zote kwetu;
        Lakini tutakumbuka, Ya saba ni kwa Yesu.
        
        3. Tuombe kila Sabato, Na kujifunza kwake;
        Tutamtii daima, tutakaa na Yesu.
                
        Chorus
        Moja, mbili, tatu,nne, tano, sita, zote kwetu;
        Lakini tutakumbuka, Ya saba ni kwa Yesu.`,
        204:``,
        205:`205. Msifu Mungu Ee Watoto
        1. Msifu Mungu, Ee watoto wote,
        Yu pendo, Yu pendo;
        Msifu, Msifu, Ee watoto wote
        Mungu ni upendo.
        
        2. Tunampenda, Ee watoto wote,
        Yu pendo, Yu pendo,
        Tunampenda, Ee watoto wote
        Mungu ni upendo.
        
        3. Timikeni, Ee watoto wote.
        Yu pendo, Yu pendo,
        Tumikeni, Ee watoto wote
        Mungu ni upendo.`,
        206:`206. Mwokozi Wangu Anipenda
        1. Mwokozi wangu alinipenda,
        Maovu ayanitengi naye,
        Alijitoa, kuniponya,
        Sasa mimi wake.
        
        Chorus
        Mimi wake kabisa,
        Naye Yesu wangu,
        Si kwa wakati huu tu,
        Bali na milele.
        
        2. Dhambi nilijidhili sana,
        Yesu akaja kunikomboa,
        Akanitoa sumbukoni,
        Sasa mimi wake.
                
        Chorus
        Mimi wake kabisa,
        Naye Yesu wangu,
        Si kwa wakati huu tu,
        Bali na milele.
        
        3. Furaha nyingi moyoni mwangu,
        Bwana Yesu kunifanya huru,
        Kunitwaa kwa damu yake,
        Sasa mimi wake.
                
        Chorus
        Mimi wake kabisa,
        Naye Yesu wangu,
        Si kwa wakati huu tu,
        Bali na milele.`,
        207:`207. Nani Afanya Maua
        1. Nani ayafanya maua, maua,
        Nani ayafanya—Mungu juu.
        
        2. Nani apambaye machweo, machweo,
        Nani ayapamba—Ni Mungu.
        
        3. Nani afanya theluji, theluji,
        Nani aifanya—ni Mungu.`,
        208:`208. Mungu Afanya Upinde
        1. Nani afanya upindi,
        Namjua, namjua
        Mungu afanya upindi
        Nampenda kwa hiyo.
        
        2. Mungu atuma upindi
        Ni bora mweupe,
        Mungu atuma upindi,
        Kwamba yu karibu.`,
        209:`209. Napenda Sana Kifika
        1. Napenda sana kufika, skuli ya Sabato
        Napenda sana kufika, siku ya Sabato  

        2. Napenda sana kuimba, habari za Yesu,
        Napenda sana kuimba, siku ya Sabato.
        
        3. Napenda sana kutoa, sadaka kwa Yesu,
        Napenda sana kutoa, siku ya Sabato.
        
        4. Napenda sana kuomba kwa Yesu, kwa Yesu,
        Napenda sana kuomba, siku ya Sabato.
        
        5. Napenda sana kujua, maneno ya Yesu,
        Napenda sana kujua, siku ya Sabato.
        
        6. Napenda sana kusema, Fungu la kukariri,
        Napenda sana kusema, Siku ya Sabato`,
        210:`210. MAITIKIO
        Roho Wa Mungu Wangu
        Roho wa Mungu wangu, Nakuhitaji!
        Roho wa Mungu wangu, Nakuhitaji!
        Unilinde na unijaze;
        Roho wa Mungu wangu, Nakuhitaji!
        `,
        211:`211. Moyoni
        Moyoni, moyoni; Ingia moyoni, Yesu.
        Njoo leo, njoo kukaa, Ingia moyoni Bwana.
        Moyoni, moyoni, Angaza moyoni Yesu,
        Ng'aa leo siku zote, Angaza moyoni Bwana.`,
        212:`212. Mtazame Mwokozi
        Mtazame Mwokozi,
        Usoni Mwake mzuri,
        Mambo ya dunia hugeuka,
        Usowake tukiuona.`,
        213:`213. Niwe Nao Uzuri Wa Mwokozi
        Niwe nao uzuri wa Mwokozi,
        Nazo huruma Zake na usafi,
        Roho Mtakatifu anibadilishe,
        Aonekane Yesu ndani yangu.`,
        214:`214. Nataka Niwe Tayari
        Nataka niwe tayari, Bwana,
        Nataka niwe tayari, Bwana,
        Furaha za ulimwengu ni bure;
        Nilinde hata uje!`,
        215:`215. Ulimwengu Wataka
        Ulimwengu wataka kumwona Yesu;
        Ulimwengu wataka kumwona Yesu.
        Analeta furaha, shangilio kutosha,
        Ulimwengu wataka kumwona Yesu.
        `,
        216:`216. Moyoni 'Nijaze       
        Moyoni 'nijaze,
        Na Roho wa Yesu;
        Nataka kujitoa,
        Moyoni 'nijaze.`,
        217:`217. Omba Sana Asubuhi
        Omba sana asubuhi,
        Omba sana mchana,
        Omba sana na jioni,
        Bwana hutusikia.
        
        Mungu hujibu maombi,
        Asubuhi na mchana,
        Hata hutungojea tena,
        Wakati wa jioni.
        
        Na tuimbe asubuhi.
        Tena saa za mchana.
        Hivi tutafurahi Naye.
        Pumziko la jioni.`,
        218:`218. Yesu Mwokozi Mpendwa
        Yesu Mwokozi Mpendwa.
        Hakuna mwingine!
        Yesu Mwokozi Mpendwa,
        Yesu Mwokozi Mpendwa,
        Nakutazama wewe pekee,
        Yesu Mwokozi Mpendwa,
        Ninakutafuta;
        Wewe u mali yangu.
        Sasa na milele.
        `,
        219:`219. Pambazuka Nuru
        Pambazuka nuru,
        Siku mpya yaja,
        Basi amkeni na kuimba,
        Ninyi nyote!
        Pambazuka nuru,
        Siku mpya yaja,
        Yesu atakaporudi kama Mfalme!`,
        220:`220. Kwa Heri
        Kwa heri, Mungu awalinde;
        Kwa heri, na awaongoze;
        Kwa heri, na kuwapa amani,
        Bwana awabariki.`,
};

let currentSongNumber = 1;
let currentLyrics = hymnalData[currentSongNumber].split('\n');
let currentIndex = 0;
function displayLyrics() {
    songTitleDisplay.textContent = currentLyrics[0];
    
    let displayedLyrics = '';
    let lineCount = 0;
    for (let i = currentIndex + 1; i < currentLyrics.length; i++) {
        if (currentLyrics[i].trim() !== '') {
            displayedLyrics += currentLyrics[i] + '\n';
            lineCount++;
        }
        if (lineCount >= 2) {
            break;
        }
    }
    
    lyricsDisplay.innerHTML = displayedLyrics.replace(/\n/g, '<br>');
    localStorage.setItem('displayedLyrics', displayedLyrics);
    localStorage.setItem('songTitle', currentLyrics[0]);
}

displayButton.addEventListener("click", function () {
    const songNumber = parseInt(songNumberInput.value);
    if (hymnalData[songNumber]) {
        currentSongNumber = songNumber;
        currentLyrics = hymnalData[currentSongNumber].split('\n');
        currentIndex = 0;
        displayLyrics();
    } else {
        lyricsDisplay.textContent = "Song not found.";
        localStorage.setItem('songTitle', "Song not found.");
    }
});

previousButton.addEventListener("click", function () {
    if (currentIndex > 0) {
        currentIndex -= 2;
        displayLyrics();
    }
});

nextButton.addEventListener("click", function () {
    if (currentIndex + 3 < currentLyrics.length) {
        currentIndex += 2;
        displayLyrics();
    }
});
displayLyrics();  
});


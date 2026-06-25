import React from 'react';
// Bitki Veri Seti, detaylı bilgiler eklendi o yüzden bu kadar uzun oldu hocam:)
const plantsData = [
  { 
    id: 1, 
    name: "Domates",
    emoji: "🍅", 
    growthTime: 80, // büyüme zamanı gün cinsinden
    info: "Bol güneş ve düzenli sulama ister.",  // Kısa bilgi hepsinde mevcut
    details: { // Detaylı bilgiler burada, her bitki için ayrı ayrı yazıldı
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px', lineHeight: '1.6' }}>
            <strong>1. HAZIRLIK AŞAMASI (TOHUM MU, FİDE Mİ?):</strong> Süreç mart ayında tohumların nemli torfa 1 cm derine ekilmesiyle başlar. Yeni başlayanlar için nisan-mayıs aylarında hazır fide almak daha garantidir. Günde en az 6-8 saat doğrudan güneş alan bir yer seçilmelidir.
          </p>
          <p style={{  color: '#000000', marginBottom: '15px', lineHeight: '1.6' }}>
            <strong>2. ADIM ADIM DİKİM SÜRECİ:</strong> Fideler dikilirken en alttaki iki yaprak koparılır ve gövdenin yarısına kadar toprağa gömülür (Derin Dikim). Bu, gövdeden ekstra kökler fışkırmasını ve bitkinin toprağa çok daha güçlü tutunmasını sağlar.
          </p>
          <p style={{  color: '#000000', marginBottom: '15px', lineHeight: '1.6' }}>
            <strong>3. BAKIM VE BÜYÜTME (ALTIN KURALLAR):</strong> Sulama yaparken yapraklara asla su değdirilmemeli, sadece kök bölgesi nemlendirilmelidir. Bitki büyüdükçe gövde ile ana dalların birleştiği yerden çıkan 'koltuk' filizleri parmakla koparılarak enerji meyveye yönlendirilir.
          </p>
          <p style={{  color: '#000000', marginBottom: '15px', lineHeight: '1.6' }}>
            <strong>4. DESTEKLEME (SIRIK ÇAKMA):</strong> Domates ağır bir bitkidir. Boyu 30 cm olunca yanına bir sırık dikilmeli ve bitki yumuşak bir iple bu sırığa bağlanarak meyvelerin yere değip çürümesi engellenmelidir.
          </p>
          <p style={{  color: '#000000', margin: 0, lineHeight: '1.6' }}>
            <strong>5. MUTLU SON (HASAT):</strong> Meyveler tamamen kızarıp o kendine has kokusunu yaymaya başladığında, dalından hafifçe döndürülerek koparılır ve süreç başarıyla tamamlanır.
          </p>
        </>
      ),
      iklim: "Günde en az 6-8 saat doğrudan güneş alan, sıcak ve ılıman hava (20-25°C).", 
      bolge: "Güneşin bol olduğu tüm bölgeler; saksıda, balkonda veya bahçede yetişebilir.", 
      gubre: "Başlangıçta azotlu organik gübre, çiçeklenme sonrası potasyum desteği verilmelidir. Ezilmiş yumurta kabukları kalsiyum ihtiyacını karşılar.", 
      riskler: "Yaprak bitleri ve kırmızı örümcekler en büyük düşmanıdır. Düzensiz sulama meyvelerin çatlamasına, kalsiyum eksikliği ise meyve tabanının siyahlaşarak çürümesine (çiçek burnu çürüklüğü) neden olur." 
    } 

},
  { 
    id: 2, 
    name: "Patates", 
    emoji: "🥔", 
    growthTime: 1, // SİSTEMDEKİ HASAT SÜRESİNE UYUM SAĞLAMASI İÇİN 1 GÜN OLARAK AYARLANDI, GERÇEKTE 90-120 GÜN ARASINDA DEĞİŞİR
    info: "Toprak altında büyüyen enerji deposu.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: "TOHUMLUK" PATATES SEÇİMİ:</strong> Bakkaldan aldığın rastgele patatesler bazen ilaçlı olduğu için filizlenmeyebilir. En iyisi, üzerinde "göz" dediğimiz küçük çıkıntıları olan, organik veya tohumluk olarak satılan patatesleri seçmektir.
            <br /><br />
            <strong>Çimlendirme (Chitting):</strong> Patatesleri dikmeden 2-3 hafta önce aydınlık ve serin bir yere koy. O küçük gözlerden sert, yeşilimsi filizler çıkmaya başladığında patatesin dikime hazır demektir.
            <br /><br />
            <strong>Kesme İşlemi:</strong> Eğer patatesin çok büyükse, her parçada en az 2 filiz (göz) kalacak şekilde kesebilirsin. Kestiğin parçaları dikmeden önce bir gün beklet ki kesik yüzey kurusun ve toprakta çürümesin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK VE YER SEÇİMİ:</strong> Patates "gevşek" toprak sever. Eğer toprak çok sertse patatesler büyüyemez ve yamuk olur.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 6 saat doğrudan güneş alan bir yer seçmelisin.
            <br /><br />
            <strong>Saksı mı Bahçe mi?</strong> Bahçen yoksa derin bir saksı, hatta büyük bir pazar çantası (çuval) bile iş görür. Önemli olan derinliğin en az 30-40 cm olmasıdır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Patatesleri dikerken onları toprağın en dibine değil, orta-alt seviyeye yerleştireceğiz.
            <br /><br />
            1. Toprağı 15-20 cm derinliğinde kaz.
            <br />
            2. Patatesleri filizleri yukarı bakacak şekilde yerleştir.
            <br />
            3. Aralarında yaklaşık 30 cm mesafe bırak (saksıda ise tek bir büyük patates yeterlidir).
            <br />
            4. Üzerini 10 cm kadar toprakla kapat ve ilk can suyunu ver.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BOĞAZ DOLDURMA (EN KRİTİK ADIM):</strong> Patatesler büyüdükçe gövdeleri toprağın üstüne çıkar. Eğer yeni oluşan patatesler güneş görürse yeşillenir ve zehirli hale gelir.
            <br /><br />
            Bitkinin boyu 15-20 cm olduğunda, çevredeki toprağı bitkinin gövdesine doğru teperek bir tümsek oluştur. Buna "boğaz doldurma" denir. Bu işlem hem patatesleri güneşten korur hem de gövdeden yeni patateslerin fışkırmasını sağlar.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BAKIM VE BESLEME:</strong> 
            <br /><br />
            <strong>Sulama:</strong> Patates suyu sever ama çamuru sevmez. Toprağın nemli kalması yeterlidir. Çiçek açtığı dönem, patateslerin yeraltında en çok büyüdüğü zamandır; bu dönemde susuz bırakma.
            <br /><br />
            <strong>Gübreleme:</strong> Yapraklar için azot, yeraltındaki yumrular için potasyum ağırlıklı gübreler (veya yanmış ahır gübresi) harikalar yaratır.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. MUTLU SON: HASAT:</strong> 
            <br /><br />
            <strong>Taze Patates:</strong> Çiçekler döküldükten birkaç hafta sonra küçük, ince kabuklu "bebek" patatesleri çalmak için toprağı hafifçe eşeleyebilirsin.
            <br /><br />
            <strong>Tam Hasat:</strong> Bitkinin üstündeki tüm yapraklar sararıp kuruduğunda (yaklaşık 100 gün sonra), artık yeraltındaki hazineyi kazma vaktidir. Patatesleri zarar vermeden çıkarmak için bir çatal bel yardımıyla toprağı nazikçe havalandır.
          </p>
        </>
      ),
      iklim: "Serin iklim bitkisidir. Çok yüksek sıcaklıklar yumru oluşumunu durdurur.",
      bolge: "İç Anadolu ve Karadeniz bölgeleri patates tarımı için oldukça uygundur.",
      gubre: "Azotlu gübreler yeşil aksamı, potasyumlu gübreler ise yumruyu büyütür. Hayvansal gübre sever.",
      riskler: "Patates böceği en büyük zararlısıdır. Ayrıca fazla sulama yumrularda çürümeye yol açar."
    }
  },
  { 
    id: 3, 
    name: "Mısır", 
    emoji: "🌽", 
    growthTime: 90, 
    info: "Yaz aylarının neşeli ve uzun boylu bitkisi.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU ZAMAN VE YER SEÇİMİ:</strong> Mısır tam bir yaz bitkisidir; sıcağı ve güneşi çok sever.
            <br /><br />
            <strong>Zamanlama:</strong> Toprak sıcaklığı en az 15-18°C olmalıdır. Genellikle nisan sonu veya mayıs başı dikim için en ideal zamandır. Don tehlikesi tamamen geçmiş olmalıdır.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 6-8 saat kesintisiz, doğrudan güneş alan bir yer seçmelisin.
            <br /><br />
            <strong>Rüzgar Koruması:</strong> Mısır çok uzadığı için sert rüzgarlarda devrilebilir. Rüzgar alan bir yerse destek gerekebilir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. KRİTİK KURAL: "BLOK" HALİNDE DİKİM:</strong> Mısır, domates veya biber gibi tek bir sıra halinde dikilmez. Mısır rüzgar yardımıyla tozlaşır (polenler bir bitkiden diğerine rüzgarla uçar). Eğer tek bir sıra dikersen polenler boşa gider ve koçanların içi boş kalır.
            <br /><br />
            <strong>Altın Kural:</strong> En az 3x3 veya 4x4'lük bir blok (kare) şeklinde dikim yapmalısın ki polenler birbirine ulaşabilsin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. TOPRAK HAZIRLIĞI E DİKİM:</strong> Mısır çok hızlı büyüdüğü için "aç" bir bitkidir; zengin toprak ister.
            <br /><br />
            <strong>Toprak:</strong> Dikimden önce toprağa bolca yanmış ahır gübresi veya kompost karıştır.
            <br /><br />
            <strong>Derinlik:</strong> Tohumları yaklaşık 2-3 cm derine göm.
            <br /><br />
            <strong>Mesafe:</strong> Tohumlar arası 25-30 cm, sıralar arası ise 60 cm olmalıdır.
            <br /><br />
            <strong>Can Suyu:</strong> Dikimden hemen sonra toprağı iyice nemlendir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM VE BESLEME (BÜYÜME SÜRECİ):</strong> 
            <br /><br />
            <strong>Sulama:</strong> Mısırın kökleri sığdır (yüzeye yakındır). Bu yüzden toprak yüzeyi kurudukça sulamalısın. Özellikle püskül çıkarma ve koçan bağlama döneminde susuz kalırsa mısırlar cılız kalır.
            <br /><br />
            <strong>Boğaz Doldurma:</strong> Mısır diz boyuna (yaklaşık 30-40 cm) geldiğinde, gövdenin dibine çevredeki toprağı yığarak destek yap. Bu, bitkinin rüzgarda devrilmesini önler ve gövdeden ek kökler çıkmasını sağlar.
            <br /><br />
            <strong>Azot Takviyesi:</strong> Mısır yapraklarının koyu yeşil kalması için azotlu gübreyi sever. Boyu 50-60 cm olduğunda ikinci bir gübreleme yapabilirsin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. TOZLAŞMA DÖNEMİ (PÜSKÜLLER):</strong> Bitkinin en tepesinde çiçekler (püsküller) çıktığında, rüzgarın polenleri koçanlara taşıması gerekir. Eğer rüzgar azsa, sabahları bitkileri hafifçe sallayarak polenlerin dökülmesine yardımcı olabilirsin.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "SÜT" TESTİ:</strong> Mısırın ne zaman toplandığını anlamak için koçanın ucundaki püsküllere bak:
            <br /><br />
            <strong>Görünüm:</strong> Püsküller tamamen kurumuş ve koyu kahverengi olmuşsa mısır olgunlaşmıştır.
            <br /><br />
            <strong>Dokunuş:</strong> Koçan dışarıdan dolgun hissedilmelidir.
            <br /><br />
            <strong>Süt Testi:</strong> Koçanın kabuğunu hafifçe arala ve bir tanesini tırnağınla patlat. Eğer içinden süt beyazı bir sıvı çıkıyorsa hasat vaktidir. Sıvı şeffafsa daha vakti vardır, eğer çok sertse geç kalmışsın demektir (nişastaya dönmüştür).
            <br /><br />
            Hasat ettiğin mısırı mümkünse topladıktan hemen sonra tüketmelisin; çünkü mısır dalından koptuğu andan itibaren içindeki şeker hızla nişastaya dönüşmeye başlar ve tadı değişir.
          </p>
        </>
      ),
      iklim: "Sıcak ve güneşli yaz aylarını sever.",
      bolge: "Mısır rüzgarlı ve açık alanlarda, özellikle blok dikimle her bölgede yetişebilir.",
      gubre: "Azot yönünden zengin toprak ve düzenli gübreleme gelişim için şarttır.",
      riskler: "Yetersiz tozlaşma (boş koçanlar) ve mısır kurdu en yaygın sorunlardır."
    } 
  },
  { 
    id: 4, 
    name: "Marul", 
    emoji: "🥬", 
    growthTime: 45, 
    info: "Serin havaları ve nemli toprakları sever.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU ZAMAN VE MARUL TÜRÜ SEÇİMİ:</strong> Marul, domates veya biber gibi sıcağı sevmez; o bir "serin hava" bitkisidir.
            <br /><br />
            <strong>Zamanlama:</strong> İlkbahar ve sonbahar ayları en ideal zamanlardır. Hava sıcaklığı 15-20°C arasındayken coşar. Eğer hava çok ısınırsa marul hızla boya kaçar, çiçek açar ve yaprakları acılaşır.
            <br /><br />
            <strong>Tür Seçimi:</strong> Yeni başlıyorsan "Yedikule" gibi göbek yapan türler yerine, yapraklarını tek tek koparıp tüketebileceğin "Kıvırcık" veya "Lolo Rosso" türlerini seçmek daha kolaydır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK VE KAP SEÇİMİ:</strong> Marulun kökleri çok derine gitmez, bu yüzden sığ kaplarda bile yetişebilir.
            <br /><br />
            <strong>Toprak:</strong> Suyu iyi süzen (drenajlı), torf bakımından zengin ve yumuşak bir toprak seçmelisin. Sert toprakta marulun narin kökleri ilerleyemez.
            <br /><br />
            <strong>Saksı/Bahçe:</strong> En az 15-20 cm derinliği olan her türlü kap uygundur. Altında mutlaka su tahliye delikleri olmalıdır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI (TOHUMDAN BAŞLAMA):</strong> Marul tohumları çok küçüktür ve çimlenmek için ışığa ihtiyaç duyarlar.
            <br /><br />
            1. Toprağın yüzeyini düzeltin ve hafifçe nemlendirin.
            <br />
            2. Tohumları toprağın üzerine seyrekçe serpiştirin (Sık dikerseniz ileride seyreltmeniz gerekir).
            <br />
            3. Üzerlerini en fazla 0.5 cm (yarım santim) kadar ince bir toprak tabakasıyla örtün. Sakın derine gömmeyin!
            <br />
            4. Fısfıs yardımıyla nazikçe sulayın.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU VE GÜNEŞ DENGESİ:</strong> Marulun %90'ından fazlası sudur, bu yüzden susuzluğa hiç gelemez.
            <br /><br />
            <strong>Sulama:</strong> Toprağın üst yüzeyi kurumaya başladığı an sulama yapmalısın. Toprak her zaman hafif nemli (sünger gibi) hissettirmelidir.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 4-6 saat güneş ister. Ancak çok sıcak bölgelerdeysen öğle güneşinden korumalı, yarı gölge bir yere koymalısın.
            <br /><br />
            <strong>Seyreltme:</strong> Fideler 3-4 yapraklı olduğunda, birbirine çok yakın olanları söküp aralarını açmalısın. Arada en az 15-20 cm boşluk kalması, marulun yayılması için gereklidir.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>5. HASAT: "KES VE TEKRAR BÜYÜSÜN":</strong> Marulu hasat etmek için bitkinin tamamen büyümesini beklemek zorunda değilsin.
            <br /><br />
            <strong>Yaprak Hasadı:</strong> Bitki 10-15 cm boya ulaştığında, dıştaki büyük yaprakları bir makasla dipten keserek toplayabilirsin. Sen dıştan topladıkça merkezden yeni yapraklar gelmeye devam eder.
            <br /><br />
            <strong>Tam Hasat:</strong> Eğer göbek yapmasını beklediysen, bitkinin tamamını toprak seviyesinden keserek alabilirsin.
            <br /><br />
            <strong>Küçük Bir İpucu:</strong> Salyangozlar marula bayılır! Eğer bahçede yetiştiriyorsan yaprakları sık mink kontrol etmeyi unutma.
          </p>
        </>
      ),
      iklim: "Serin ve nemli havaları sever (15-20°C).",
      bolge: "Tüm Türkiye'de ilkbahar ve sonbahar aylarında yetişebilir.",
      gubre: "Hızlı büyüme için azot yönünden zengin sıvı organik gübreler kullanılabilir.",
      riskler: "Yüksek sıcaklıkta acılaşma ve salyangoz istilası en yaygın risklerdir."
    }
  },
  { 
    id: 5, 
    name: "Patlıcan", 
    emoji: "🍆", 
    growthTime: 70, 
    info: "Sıcağı ve derin saksıları çok sever.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU ZAMAN VE TOHUM/FİDE SEÇİMİ:</strong> Patlıcanın en büyük düşmanı soğuktur. Toprak buz gibi güçlüyken dikilirse küser ve büyümez.
            <br /><br />
            <strong>Zamanlama:</strong> Dışarıya dikim için gece sıcaklıklarının sürekli olarak 15°C'nin üzerinde olduğundan emin olmalısın. Genellikle mayıs ayı ortası en güvenli zamandır.
            <br /><br />
            <strong>Fide mi Tohum mu?</strong> Patlıcanın tohumdan büyümesi çok yavaştır (yaklaşık 2-3 ay). Eğer ilk kez deniyorsan, mart-nisan aylarında bir seradan veya bahçeciden hazır "fide" alarak başlamak çok daha garantidir.
            <br /><br />
            <strong>Tür Seçimi:</strong> Balkonda yetiştireceksen saksıya uygun, daha küçük meyve veren "Pala" veya "Topan" türlerini seçebilirsin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK VE YER SEÇİMİ:</strong> Patlıcan, köklerini derinlere salmayı sever ve besin konusunda çok iştahlıdır.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 8 saat kesintisiz güneş görmelidir. Güneş ne kadar bolsa patlıcan o kadar tatlı olur.
            <br /><br />
            <strong>Saksı/Bahçe:</strong> Saksıda yetiştireceksen en az 15-20 litrelik derin bir saksı şarttır. Toprak olarak bol kompostlu veya yanmış ahır gübreli, zengin bir karışım hazırlanmalıdır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Fideleri toprağa yerleştirirken onları incitmemeye dikkat etmelisin.
            <br /><br />
            1. Toprağı güzelce havalandır ve her fide için 30-40 cm aralık bırakacak şekilde çukurlar kaz.
            <br />
            2. Fideyi saksısından çıkarırken köklerini dağıtmamaya çalış.
            <br />
            3. Fideyi, saksısındaki toprak seviyesiyle aynı derinlikte olacak şekilde dik. (Domates gibi gövdeyi gömme, patlıcan buna tepki verebilir).
            <br />
            4. Dikimden hemen sonra bolca "can suyu" ver.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, DESTEK VE BUDAMA:</strong> Patlıcan büyüdükçe "nazı" artar ama doğru bakımla çok verimli olur.
            <br /><br />
            <strong>Sulama:</strong> Patlıcanın toprağı hiçbir zaman tamamen kurumamalıdır. Susuz kalırsa meyveleri acılaşır. Sabah erkenden, yapraklara su değdirmeden sadece dibine su vermelisin.
            <br /><br />
            <strong>Destek (Kargı):</strong> Bitki 30 cm boya ulaştığında yanına bir çıta veya kargı dikip gövdeyi yumuşak bir iple bağla. Patlıcanlar ağırlaştığında bitkiyi devirebilir.
            <br /><br />
            <strong>Budama (Koltuk Alma):</strong> Gövdenin en altındaki, toprağa değen yaprakları kopar. Ayrıca bitkinin enerjisinin meyveye gitmesi için, ana gövde ile dalların birleştiği yerden çıkan küçük sürgünleri (koltuk altı filizlerini) temizleyebilirsin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BESLEME (GÜBRELEME):</strong> Patlıcan çok besin tüketir. Meyveler görünmeye başladığında 2 haftada bir organik sıvı gübre veya potasyum ağırlıklı gübre vermek meyvelerin büyümesini hızlandırır.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: PARLAKLIK TESTİ:</strong> Patlıcanın ne zaman toplandığını anlamak için rengine ve parlaklığına bakmalısın:
            <br /><br />
            <strong>Görünüm:</strong> Meyve tam rengine (mor veya siyah) ulaştığında ve kabuğu ayna gibi parladığında hasat vaktidir.
            <br /><br />
            <strong>Esneklik:</strong> Parmağınla hafifçe bastır; eğer çukur oluşup hemen geri düzeliyorsa tam kıvamındadır.
            <br /><br />
            <strong>Hata Payı:</strong> Eğer kabuk matlaşmaya ve rengi açılmaya başladıysa, meyve kartlaşmış ve içi çekirdek dolmuş demektir. O yüzden çok büyümesini beklemeden toplamak en iyisidir.
            <br /><br />
            Hasat yaparken patlıcanın sapı çok sert olduğu için elle asılma; mutlaka bir bahçe makasıyla keserek al.
          </p>
        </>
      ),
      iklim: "Sıcak ve güneşli iklimleri sever, soğuğa karşı çok hassastır.",
      bolge: "Akdeniz ve Ege bölgeleri en ideal üretim alanlarıdır.",
      gubre: "Potasyum ve fosfor ağırlıklı gübreler meyve kalitesini artırır.",
      riskler: "Kırmızı örümcek zararlısı ve düşük sıcaklıkta meyve dökülmesi en büyük risklerdir."
    }
  },
 { 
    id: 6, 
    name: "Kırmızı Pancar", 
    emoji: "🫜", 
    growthTime: 60, 
    info: "Toprağın içindeki kıpkırmızı sağlık.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: ZAMANLAMA VE YER SEÇİMİ:</strong> Pancar, aşırı sıcağı sevmeyen, serin hava koşullarında en iyi tadına ulaşan bir kök sebzesidir.
            <br /><br />
            <strong>Zamanlama:</strong> İlkbaharda donlar biter bitmez veya sonbahar hasadı için ağustos-eylül aylarında ekilebilir. Toprak sıcaklığı 10°C civarındayken çimlenmeye başlar.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 6 saat güneş alan bir yer seçmelisin. Yarı gölge alanlarda da yetişir ancak kökleri daha küçük kalabilir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI (BAŞARININ SIRRI):</strong> Pancar bir kök sebzesi olduğu için, yumrunun rahatça genişleyebileceği bir alana ihtiyaç duyar.
            <br /><br />
            <strong>Gevşek Toprak:</strong> Toprağı en az 20 cm derinliğe kadar belleyerek iyice havalandır. İçindeki taşları, dal parçalarını ve sert kesekleri mutlaka temizle; taşlar pancarın yamuk büyümesine neden olur.
            <br /><br />
            <strong>Besin:</strong> Dikimden önce toprağa biraz kompost ekle ancak aşırı taze gübreden kaçın. Fazla azot, kökten ziyade çok fazla yaprak büyümesine neden olabilir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Pancar tohumları aslında içinde 2-3 adet tohum barındıran küçük "küme"ler halindedir.
            <br /><br />
            <strong>Tohum Hazırlığı:</strong> Tohumları ekmeden önce 12 saat suda bekletirsen sert kabuğu yumuşar ve çok daha hızlı çimlenir.
            <br /><br />
            <strong>Derinlik:</strong> Tohumları 1-2 cm derinliğe ekin.
            <br /><br />
            <strong>Mesafe:</strong> Sıralar arası 30 cm, tohumlar arası ise 5-10 cm olmalıdır.
            <br /><br />
            <strong>Can Suyu:</strong> Ekimi yaptıktan sonra toprağı sarsmadan fısfısla nemlendir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SEYRELTME VE SULAMA:</strong> Pancar dikiminde en çok yapılan hata seyreltme yapmamaktır.
            <br /><br />
            <strong>Seyreltme:</strong> Tohum kümelerinden 2-3 filiz çıkacağı için, fideler 5 cm boya ulaştığında her kümeden en güçlü olanı bırakıp diğerlerini makasla kesmelisin. Arada 10 cm boşluk kalması şarttır, yoksa pancarlar büyümek için yer bulamaz.
            <br /><br />
            <strong>Sulama:</strong> Toprağın nemli kalması kritik önemdedir. Eğer toprak çok kurur ve sonra aniden çok sulanırsa pancarların içi odunsulaşır ve dışı çatlayabilir.
            <br /><br />
            <strong>Malçlama:</strong> Bitkilerin dibine saman veya kuru yaprak sermek toprağın nemini korur ve yabancı ot çıkmasını engeller.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>5. HASAT: BOYUT VE LEZZET DENGESİ:</strong> Pancarı ne zaman toplayacağın tamamen damak tadına bağlıdır:
            <br /><br />
            <strong>Yapraklar:</strong> Bitki büyürken dıştaki yapraklardan birkaç tanesini (bitkiyi öldürmeden) koparıp ıspanak gibi pişirebilirsin.
            <br /><br />
            <strong>Bebek Pancar:</strong> Daha tatlı ve körpe bir lezzet için tenis topundan biraz daha küçükken (yaklaşık 4-5 cm çap) toplayabilirsin.
            <br /><br />
            <strong>Tam Hasat:</strong> Yumrular toprağın üstünden hafifçe kafasını çıkarmaya başladığında hasat vakti gelmiştir. Genellikle ekimden 60 gün sonra hazırdır.
            <br /><br />
            Hasat ederken yaprakları kökün tam dibinden kesme; 2-3 cm sap bırakarak kesersen pancarın o meşhur kırmızı suyu haşlarken içinde kalır.
          </p>
        </>
      ),
      iklim: "Serin ve ılıman iklim bitkisidir, aşırı sıcağı sevmez.",
      bolge: "Yumru gelişimi için gevşek topraklı her bölgede yetiştirilebilir.",
      gubre: "Bor ve fosfor ağırlıklı gübreleme kök gelişimini destekler.",
      riskler: "Toprak sertliği nedeniyle yumru deformasyonu ve düzensiz sulama kaynaklı çatlamalar."
    }
  },
  { 
    id: 7, 
    name: "Havuç", 
    emoji: "🥕", 
    growthTime: 75, 
    info: "Gevşek toprakta hızla uzayıp gelişir.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU YER VE TOPRAK SEÇİMİ:</strong> Havuç bir kök sebzesidir, yani meyvesi yerin altındadır. Bu yüzden toprakta herhangi bir engel (taş, dal, sert tabaka) olmamalıdır.
            <br /><br />
            <strong>Toprak Yapısı:</strong> Kumlu, gevşek ve taşsız bir toprak havuç için hayati önem taşır. Eğer toprak sertse havuçlar ikiye bölünür veya yamuk büyür.
            <br /><br />
            <strong>Güneş:</strong> Havuçlar günde en az 6-8 saat güneş alan bir yeri severler.
            <br /><br />
            <strong>Zamanlama:</strong> Havuç serin havaları sever. İlkbaharda toprak işlenebilir hale geldiğinde veya sonbahar hasadı için yaz sonunda ekilebilir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. DİKİM: SABIR VE HASSASİYET:</strong> Havuç tohumları çok küçüktür, bu yüzden ekim yaparken biraz dikkat gerekir.
            <br /><br />
            <strong>Ekim Derinliği:</strong> Tohumları çok derine gömmeyin. Yaklaşık 0.5 cm (yarım santim) derinlik yeterlidir.
            <br /><br />
            <strong>Mesafe:</strong> Sıralar arası 20-30 cm olmalıdır. Tohumları yan yana çok sık atmamaya çalışın (ileride seyreltme yapacağımız için bu önemli).
            <br /><br />
            <strong>Ilık Su:</strong> Ekimi yaptıktan sonra tohumların yerinden oynamaması için fısfıs yardımıyla toprağı nemlendirin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. ÇİMLENME SÜRECİ (EN ZOR KISIM):</strong> Havuç tohumları nazlıdır; çimlenmesi 2 hatta 3 haftayı bulabilir. Bu süre zarfında "acaba çıkmayacak mı?" diye endişelenip sulamayı bırakmamalısın.
            <br /><br />
            <strong>Nemli Tutma:</strong> Toprağın üst tabakası kurumamalıdır. Çimlenme görene kadar her gün hafifçe nemlendirmek gerekebilir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SEYRELTME VE SULAMA:</strong> Havuçlar baş göstermeye başladığında onlara büyüyecekleri alanı tanımalısın.
            <br /><br />
            <strong>Seyreltme:</strong> Fideler 3-5 cm boya ulaştığında, her havuç arasında yaklaşık 5-10 cm boşluk kalacak şekilde fazla fideleri sökün. Eğer seyreltme yapmazsanız havuçlar birbirine dolanır ve cılız kalır.
            <br /><br />
            <strong>Boğaz Kapatma:</strong> Havucun turuncu omuzları toprağın üstünde görünmeye başlarsa, üzerini toprakla örtün. Güneş görürse o kısımlar yeşillenir ve tadı acılaşır.
            <br /><br />
            <strong>Düzenli Su:</strong> Toprağı kurumaya yakın sulayın ama sırılsıklam yapmayın. Çatlamaları önlemek için sulama düzeni sabit olmalıdır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BESLEME (GÜBRELEME):</strong> Havuç için taze hayvan gübresinden kaçınmalısınız! Çok fazla azot, havucun kökü yerine yapraklarının büyümesine ve köklerin çatallanmasına neden olur. Kompost veya potasyum ağırlıklı gübreler daha iyidir.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: HAZİNENİN ORTAYA ÇIKIŞI:</strong> Havuçlar ekimden yaklaşık 70-80 gün sonra hazır olur.
            <br /><br />
            <strong>Görünüm:</strong> Havucun tepesi (omuz kısmı) yaklaşık 2-3 cm çapına ulaştığında ve koyu turuncu göründüğünde hazırdır.
            <br /><br />
            <strong>Yöntem:</strong> Toprak kuruysa havucu çekmek zordur, kırılabilir. Önce toprağı hafifçe ıslatın, sonra havucu yanlara doğru sallayarak nazikçe yukarı çekin.
            <br /><br />
            Bahçen varsa doğrudan toprağa ekmeni öneririm ama saksıda deneyeceksen en az 30-40 cm derinliğinde, geniş bir saksı kullanman şart.
          </p>
        </>
      ),
      iklim: "Serin hava bitkisidir, 10-20°C arası idealdir.",
      bolge: "Gevşek ve taşsız toprağa sahip her bölgede yetişebilir.",
      gubre: "Potasyum ağırlıklı gübreler kök gelişimini ve şeker oranını artırır.",
      riskler: "Toprak sertliği nedeniyle çatallanma ve havuç sineği en büyük risklerdir."
    }
  },
  { 
    id: 8, 
    name: "Salatalık", 
    emoji: "🥒", 
    growthTime: 60, 
    info: "Hızlı büyüyen, su seven tırmanıcı bitki.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU ZAMAN VE TÜR SEÇİMİ:</strong> Salatalık soğuğa karşı çok hassastır, don olaylarının tamamen bittiği ve toprağın ısındığı zamanı beklemelisiniz.
            <br /><br />
            <strong>Zamanlama:</strong> Gece sıcaklıkları 12-15°C'nin altına düşmediğinde dikim yapılabilir. Genellikle Mayıs başı idealdir.
            <br /><br />
            <strong>Tür Seçimi:</strong> Bahçeniz varsa "Sırık" (tırmanıcı) salatalıklar çok verimlidir. Eğer balkonunuzda saksıda yetiştirecekseniz "Oturak" veya "Saksı tipi" kısa boylu türleri seçmelisiniz.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. YER VE TOPRAK SEÇİMİ:</strong> Salatalık %95 sudur, bu yüzden suyu tutabilen ama kökleri çürütmeyen zengin bir toprak ister.
            <br /><br />
            <strong>Güneş:</strong> En az 6-8 saat tam güneş alan bir yer şarttır.
            <br /><br />
            <strong>Toprak:</strong> Yanmış ahır gübresi veya kompost ile zenginleştirilmiş, süzek (gevşek) toprakları sever.
            <br /><br />
            <strong>Destek Sistemi:</strong> Salatalıklar tırmanıcıdır. Meyvelerin toprakla temas edip çürümemesi ve düzgün büyümesi için bir ağ, çit veya kargı hazırlamalısınız.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> İster tohumdan ister hazır fidelerden başlayabilirsiniz.
            <br /><br />
            <strong>Tohumdan:</strong> Tohumları 2 cm derinliğe ekin. Her çukura 2-3 tohum atın, en güçlü çıkanı bırakıp diğerlerini ileride makasla kesin.
            <br /><br />
            <strong>Fideden:</strong> Fideleri dikerken kök boğazını (gövdenin toprakla birleştiği yer) çok derine gömmeyin; hafif yukarıda kalması kök çürümesini önler.
            <br /><br />
            <strong>Mesafe:</strong> Bitkiler arası en az 40-50 cm boşluk bırakın ki hava alabilsinler.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, SU VE YİNE SU!:</strong> Salatalık yetiştirmenin en kritik noktası sulamadır.
            <br /><br />
            <strong>Sulama:</strong> Toprağı her zaman nemli tutun. Susuz kalan salatalık bitkisi strese girer ve meyveleri anında acılaşır.
            <br /><br />
            <strong>Yaprakları Islatmayın:</strong> Suyu sadece kök bölgesine verin. Yapraklara gelen su, mantar hastalıklarına (Külleme) davetiye çıkarır.
            <br /><br />
            <strong>Malçlama:</strong> Bitkinin dibine saman veya kuru ot sermek, toprağın nemini korumasına yardımcı olur.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BUDAMA VE TOZLAŞMA:</strong> 
            <br /><br />
            <strong>Koltuk Alma:</strong> Ana gövde ile yaprak sapı arasından çıkan yan sürgünleri temizleyerek enerjinin meyveye gitmesini sağlayabilirsiniz.
            <br /><br />
            <strong>Arılar:</strong> Salatalık meyve vermek için arılara ihtiyaç duyar. Eğer arı gelmiyorsa, erkek çiçekteki polenleri dişi çiçeğe (altında küçük bir salatalık taslağı olan çiçek) sürterek elinizle tozlaşma yapabilirsiniz.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "TOPLADIKÇA VERİR":</strong> Salatalıkları ne kadar sık hasat ederseniz, bitki o kadar çok yeni meyve verir.
            <br /><br />
            <strong>Boyut:</strong> Salatalıklar aşırı büyümeden (10-15 cm idealdir) toplanmalıdır. Çok büyürlerse içleri çekirdeklenir ve bitki "tohum yapma" moduna geçip verimi düşürür.
            <br /><br />
            <strong>Yöntem:</strong> Meyveyi elle çekip dalını koparmayın. Mutlaka bir makasla sapından keserek hasat edin.
          </p>
        </>
      ),
      iklim: "Sıcak ve nemli havaları sever, don olaylarına karşı çok hassastır.",
      bolge: "Güneş alan ve rüzgardan korunaklı her bölgede yetişebilir.",
      gubre: "Azot ve magnezyum ağırlıklı gübreleme gelişimi hızlandırır.",
      riskler: "Külleme hastalığı ve yaprak bitleri salatalığın en büyük düşmanıdır."
    }
  },
  { 
    id: 1, 
    name: "Biber", 
    emoji: "🫑", 
    growthTime: 80, 
    info: "Sıcağı seven, renkli ve bereketli bir bitki.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU ZAMAN VE BİBER TÜRÜ SEÇİMİ:</strong> Biberler "üşümeyi" hiç sevmezler. Onlar için hava ve toprak her zaman ılık olmalıdır.
            <br /><br />
            <strong>Zamanlama:</strong> Dışarıya dikim için gece sıcaklıklarının en az 15°C civarında sabitlendiği zamanı beklemelisin. Genellikle Mayıs ortası en güvenli zamandır.
            <br /><br />
            <strong>Tür Seçimi:</strong> Yeni başlıyorsan, saksıya ve bahçeye çok kolay uyum sağlayan "Çarliston", "Sivri Biber" veya küçük "Süs Biberleri" ile başlamak daha kolaydır. Dolmalık biberler biraz daha fazla bakım ve büyük saksı ister.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. YER VE TOPRAK SEÇİMİ:</strong> Biber, güneşin altında dans etmeyi sever. Güneş ne kadar çoksa, biberin tadı o kadar güzel olur.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 6-10 saat doğrudan güneş alan bir yer seçmelisin.
            <br /><br />
            <strong>Toprak:</strong> Biberler "ayaklarının ıslanmasını" (suyun birikmesini) sevmez. Bu yüzden suyun kolayca akıp gittiği (süzek), kompost veya organik gübreyle zenginleştirilmiş yumuşak toprakları tercih etmelisin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> İlk kez yetiştiriyorsan, tohum yerine hazır fide almak işini %80 kolaylaştırır.
            <br /><br />
            <strong>Fide Seçimi:</strong> Gövdesi kalın, yaprakları canlı yeşil ve üzerinde çiçek olmayan fideleri seçmeye çalış.
            <br /><br />
            <strong>Derinlik:</strong> Fideyi saksısından çıkardığında, toprak seviyesiyle aynı derinlikte dik. Gövdeyi çok derine gömme.
            <br /><br />
            <strong>Mesafe:</strong> Biber bitkileri büyüdüğünde yanlara doğru açılır. Aralarında en az 30-40 cm boşluk bırakmalısın.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, ISI VE DESTEK:</strong> Biber bitkisi biraz "dramatik" olabilir; susuz kaldığında hemen yapraklarını aşağı salar.
            <br /><br />
            <strong>Sulama:</strong> Toprağın üstü kuruduğunda sulama yap. Özellikle meyveler oluşmaya başladığında suyu ihmal etme. Suyu sadece kök dibine ver, yapraklara su değdirmemeye çalış.
            <br /><br />
            <strong>Destek (Çubuk):</strong> Biberler ağırlaştığında bitki yana yatabilir. Yanına ince bir çubuk dikip gövdeyi esnek bir iple hafifçe bağlamak bitkiyi rahatlatır.
            <br /><br />
            <strong>İlk Çiçek Kuralı:</strong> Bitki henüz çok küçükken üzerinde bir tane çiçek açarsa, onu kopar. Bu, bitkinin enerjisini boyuna vermesini ve ileride daha çok biber vermesini sağlar.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BESLEME (GÜBRELEME):</strong> Biberler çiçek açmaya başladığında besine ihtiyaç duyar. Potasyum ağırlıklı gübreler veya mutfaktaki yumurta kabuklarını ezip toprağa karıştırmak kalsiyum desteği sağlar, bu da biberlerin uçlarının çürümesini engeller.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "KOPARDIKÇA COŞAR":</strong> Biberlerin en güzel özelliği, sen topladıkça bitkinin yeni biberler üretmesidir.
            <br /><br />
            <strong>Görünüm:</strong> Biberler istediğin boyuta ulaştığında hasat edebilirsin. Eğer dalında çok bekletirsen çoğu tür kızarmaya başlar (bu da tadını tatlılaştırır).
            <br /><br />
            <strong>Yöntem:</strong> Biberi dalından elinle çekerek koparma, bitkinin ince dalları kırılabilir. Mutlaka bir makas veya bıçakla sapından kes.
          </p>
        </>
      ),
      iklim: "Sıcak ve ılıman iklimleri sever, don olaylarına karşı hassastır.",
      bolge: "Güneşli ve rüzgarsız her alanda, özellikle Ege ve Akdeniz'de çok verimlidir.",
      gubre: "Çiçeklenme döneminde potasyum ve kalsiyum desteği meyve verimini artırır.",
      riskler: "Yaprak bitleri ve aşırı sulama kaynaklı kök çürüklüğü en yaygın sorunlardır."
    }
  },
  { 
    id: 9, 
    name: "Limon", 
    emoji: "🍋", 
    growthTime: 365, // (Limon yetiştirmek yıllar alır, bu yüzden büyüme süresini sistemde 1 yıl olarak belirledim ama limon ağacı fidesi olmadan 5-7 yıl arasındadır.)
    info: "Mis kokulu çiçekleri ve ferahlatıcı meyvesiyle bir klasik.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU YÖNTEM VE TÜR SEÇİMİ:</strong> Limonu çekirdekten yetiştirebilirsin ama meyve alabilmek için bu süreç çok uzun (5-7 yıl) ve belirsiz olabilir.
            <br /><br />
            <strong>Fide (Fidan) Seçimi:</strong> En garantisi, bir fidanlıktan "yediveren" veya "Mayer" tipi aşılı bir fidan almaktır. Mayer limonları daha bodur kalır ve saksıda yetişmeye çok uygundur.
            <br /><br />
            <strong>Zamanlama:</strong> Dikim için en uygun zaman, havaların ısınmaya başladığı ilkbahar aylarıdır.
            <br /><br />
            <strong>Yer Seçimi:</strong> Limon tam bir güneş aşığıdır. Günde en az 6-8 saat doğrudan güneş ışığı alabileceği, rüzgardan korunaklı bir yere ihtiyaç duyar.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. SAKSI VE TOPRAK HAZIRLIĞI:</strong> Eğer bahçen yoksa limon saksıda da çok mutlu olabilir.
            <br /><br />
            <strong>Saksı:</strong> Fidanın kökünden biraz daha büyük, altında mutlaka su tahliye delikleri olan bir saksı seç. Limon köklerinin suyun içinde kalmasından nefret eder.
            <br /><br />
            <strong>Toprak:</strong> Hafif asidik, drenajı yüksek (suyu kolay süzen) toprakları sever. Torf, perlit ve az miktarda bahçe toprağı karışımı idealdir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Fidanını toprakla buluştururken köklere nazik davranmalısın.
            <br /><br />
            1. Saksının dibine suyun akıp gitmesi için biraz çakıl taşı koyabilirsin.
            <br />
            2. Fidanı saksının tam ortasına yerleştir.
            <br />
            3. <strong>Aşı Noktası Kuralı:</strong> Fidanın gövdesindeki o hafif şişkinlik (aşı yeri) mutlaka toprak seviyesinin üstünde kalmalıdır. Orayı gömersen ağaç çürüyebilir.
            <br />
            4. Toprağı elinle hafifçe bastır ve ilk can suyunu ver.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, NEM VE IŞIK:</strong> Limon "tropikal" bir hava ister. Yani hem güneş hem de doğru nem dengesi şarttır.
            <br /><br />
            <strong>Sulama:</strong> Toprağın üstündeki 2-3 cm'lik kısım kuruduğunda sulama yap. Kışın sulamayı azalt, yazın ise toprağı hep nemli tut.
            <br /><br />
            <strong>Yaprakları Nemlendirme:</strong> Eğer ev içinde yetiştiriyorsan, hava çok kuru olabilir. Arada bir yapraklarına fısfısla su sıkmak limonu çok mutlu eder.
            <br /><br />
            <strong>Besleme:</strong> Bahar ve yaz aylarında (büyüme dönemi) narenciye gübresi veya azot-potasyum dengeli bir gübre ile bitkiyi besle.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BUDAMA VE TOZLAŞMA:</strong> 
            <br /><br />
            <strong>Budama:</strong> Ağacın iç kısmına ışık girmesini engelleyen, birbirine dolanmış veya kurumuş dalları buda. Bu, ağacın hava almasını sağlar.
            <br /><br />
            <strong>Tozlaşma:</strong> Eğer limonun balkondaysa arılar işini yapar. Ama tamamen ev içindeyse, çiçekler açtığında bir kulak çubuğuyla çiçeklerin ortasındaki polenleri birbirine değdirerek "arıcılık" yapman gerekebilir.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: SABRIN SONU LEZZET:</strong> Limonlar genellikle çiçek açtıktan 6-9 ay sonra olgunlaşır.
            <br /><br />
            <strong>Görünüm:</strong> Rengi tamamen sarardığında ve kabuğu hafifçe parladığında hasat edebilirsin.
            <br /><br />
            <strong>Yöntem:</strong> Limonu çekerek koparma, dalına zarar verebilirsin. Bir makas yardımıyla sapından keserek al.
          </p>
        </>
      ),
      iklim: "Ilıman ve sıcak iklimleri sever, don olaylarına karşı çok hassastır.",
      bolge: "Akdeniz ve Ege kıyı şeridi en ideal bölgelerdir; soğuk bölgelerde iç mekanda bakılmalıdır.",
      gubre: "Narenciye özel gübreleri ve demir takviyesi yaprak sararmasını önler.",
      riskler: "Yaprak bitleri, unlu bit ve aşırı sulama kaynaklı kök çürümesi en yaygın sorunlardır."
    }
  },
  { 
    id: 10, 
    name: "Çilek", 
    emoji: "🍓", 
    growthTime: 30, // 30-60 GÜN ARASI DEĞİŞİR (fideden yetiştirilirse 30 gün, tohumdan yetiştirilirse 60 gün diyebiliriz.)
    info: "Güneşi seven, kırmızı ve lezzetli mutluluk taneleri.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU ZAMAN VE TÜR SEÇİMİ:</strong> Çilek çok yıllık bir bitkidir; yani doğru bakarsan her yıl aynı bitkiden meyve alabilirsin.
            <br /><br />
            <strong>Zamanlama:</strong> Dikim için en uygun zaman, havaların ne çok sıcak ne de çok soğuk olduğu ilkbahar veya sonbahar başıdır.
            <br /><br />
            <strong>Tür Seçimi:</strong> Yeni başlayanlar için "Yediveren" (Albion veya San Andreas gibi) türleri en iyisidir. Çünkü bu türler sadece baharda değil, tüm yaz boyunca meyve vermeye devam ederler.
            <br /><br />
            <strong>Fide mi Tohum mu?</strong> Tohumdan çilek yetiştirmek çok zordur ve sabır ister. İlk deneyiminse mutlaka hazır "fide" alarak başlamalısın.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. YER VE TOPRAK SEÇİMİ:</strong> Çilek "güneşin çocuğu"dur; güneş ne kadar çoksa meyveler o kadar kırmızı ve tatlı olur.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 6-10 saat doğrudan güneş alan bir yer seçmelisin.
            <br /><br />
            <strong>Toprak:</strong> Suyu çok hızlı süzen (drenajı iyi), hafif asidik ve bol kompostlu toprakları sever. Eğer toprak ağır ve killi olursa kökler hemen çürür.
            <br /><br />
            <strong>Saksı Seçimi:</strong> Çilek sığ köklü bir bitkidir. Askılı saksılarda veya "çilek saksısı" denilen çok delikli kaplarda harika yetişir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI: ALTIN KURAL (TAÇ KISMI):</strong> Çilek dikerken yapılan en büyük hata bitkiyi çok derine veya çok yüzeye dikmektir.
            <br /><br />
            <strong>Taç Çizgisi:</strong> Bitkinin gövdesindeki yaprakların çıktığı o hafif şişkin merkeze "taç" (crown) denir.
            <br /><br />
            <strong>Hizalama:</strong> Taç kısmının tam yarısı toprağın üstünde, yarısı ise toprakla hizalı olmalıdır. Tamamen gömersen bitki çürür, çok yukarıda bırakırsan kökler kurur.
            <br /><br />
            <strong>Mesafe:</strong> Fideler arasında en az 25-30 cm boşluk bırakmalısın; çünkü çilek "kollar" (stolonlar) atarak yayılmayı sever.
            <br /><br />
            <strong>Can Suyu:</strong> Dikimden hemen sonra köklerin toprakla bütünleşmesi için su ver.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, MALÇLAMA VE KOLLAR:</strong> 
            <br /><br />
            <strong>Sulama:</strong> Çilek toprağının kurumasına izin verme ama bitkiyi suyun içinde de yüzdürme. Meyvelere su değdirmeden sadece kök kısmından sulamak çürümeyi engeller.
            <br /><br />
            <strong>Malçlama (Saman):</strong> Çilek meyveleri toprağa değerse hemen çürür veya böceklenir. Bitkilerin altına saman veya kuru ot sermek meyveleri topraktan ayırır (İngilizcesi "Strawberry" ismi buradan gelir).
            <br /><br />
            <strong>Kolların Temizliği:</strong> Bitki uzandıkça "kol" denilen yeni kordonlar atar. İlk yıl meyve verimini artırmak için bu kolları makasla kesip ana bitkinin güçlenmesini sağla.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. İLK ÇİÇEK KURALI:</strong> Eğer fideni yeni diktiysen ve hemen çiçek açtıysa, o ilk çiçekleri koparmak kalbini kırsa da bitkin için en iyisidir. Bu sayede bitki enerjisini önce köklerine verir, bir sonraki ay sana çok daha büyük meyveler sunar.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: TAM KIRMIZILIK:</strong> Çilekler dalından koptuktan sonra olgunlaşmaya devam etmezler.
            <br /><br />
            <strong>Görünüm:</strong> Meyvenin her yeri (ucu dahil) tamamen kırmızı olduğunda hasat vakti gelmiştir.
            <br /><br />
            <strong>Yöntem:</strong> Meyveyi çekerek koparma, gövdeye zarar verebilirsin. Tırnağınla sapından keserek veya makasla al.
          </p>
        </>
      ),
      iklim: "Ilıman ve güneşli iklimleri sever, aşırı dondan korunmalıdır.",
      bolge: "Güneş alan balkonlar, askılı saksılar ve drenajı iyi olan bahçeler için uygundur.",
      gubre: "Çiçeklenme öncesi organik gübre ve meyve döneminde potasyum desteği verimi artırır.",
      riskler: "Botrytis (meyve çürümesi) ve kuşların meyveleri yemesi en yaygın risklerdir."
    }
  },
  { 
    id: 11, 
    name: "Kiraz", 
    emoji: "🍒", 
    growthTime: 1095, // 3 YIL (kiraz ağaçları ilk meyvesini 3-5 yıl sonra verir. Baharda çiçek açar, yaz sonunda meyve verir. Bu yüzden büyüme süresini 3 yıl olarak belirledim ama tam verim için 5 yıl beklemek gerekebilir.)
    info: "Bahçelerin asil ve sabır isteyen meyve ağacı.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU TÜR VE YER SEÇİMİ:</strong> Kiraz ağaçları iklim konusunda biraz seçicidir. En önemli ihtiyaçları "soğuklama süresi" ve "güneş"tir.
            <br /><br />
            <strong>Zamanlama:</strong> Fidan dikimi için en ideal zaman, ağacın uykuda olduğu geç sonbahar veya erken ilkbahar (donlar biter bitmez) dönemidir.
            <br /><br />
            <strong>Tür Seçimi:</strong> Kirazların çoğu "kendine verimsizdir". Yani meyve almak için yanına tozlayıcı başka bir kiraz türü daha dikmen gerekir. Eğer tek bir ağaç dikeceksen, mutlaka "kendine verimli" (örneğin: Stella veya Lapins türleri) bir fidan seçmelisin.
            <br /><br />
            <strong>Yer:</strong> Kirazlar suyu çok hızlı süzülen, havadar ve bol güneşli yerleri sever. Çukur ve su biriken bölgelerden kaçınmalısın; kökleri boğulursa ağaç hemen ölür.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. FİDAN SEÇİMİ VE TOPRAK HAZIRLIĞI:</strong>
            <br /><br />
            <strong>Aşılı Fidan:</strong> Çekirdekten kiraz yetiştirmek çok zordur ve meyvesi genellikle yabani (acı) olur. Bu yüzden mutlaka bir fidanlıktan aşılı ve sertifikalı bir fidan almalısın.
            <br /><br />
            <strong>Toprak:</strong> Kiraz, derin ve organik maddece zengin toprak ister. Dikimden önce toprağı kompost veya iyice yanmış ahır gübresiyle zenginleştirebilirsin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Fidanı dikerken onun gelecekteki devasa boyutlarını düşünerek hareket etmelisin.
            <br /><br />
            1. <strong>Çukur Kazma:</strong> Fidanın kök sisteminden iki kat daha geniş ve derin bir çukur kaz.
            <br />
            2. <strong>Kök Kontrolü:</strong> Varsa kırılmış veya kurumuş kökleri nazikçe buda.
            <br />
            3. <strong>Hizalama:</strong> Fidanın gövdesindeki aşı noktası mutlaka toprak seviyesinin 5-10 cm üzerinde kalmalıdır. Aşı yerini gömmek ağacın kurumasına neden olur.
            <br />
            4. <strong>Can Suyu:</strong> Toprağı doldurduktan sonra hava boşluğu kalmaması için ayağınla hafifçe bastır ve bolca su ver.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, GÜBRE VE BUDAMA:</strong> Genç bir kiraz ağacının ilk yılları, ömrünün geri kalanını belirler.
            <br /><br />
            <strong>Sulama:</strong> Özellikle ilk 2-3 yıl ağacın susuz kalmaması kritik önemdedir. Haftada bir (çok sıcaklarda iki) kez derinlemesine sulama yapmalısın.
            <br /><br />
            <strong>Budama:</strong> Kiraz ağacı budanmayı sever. İç kısımdaki dalları seyrelterek güneşin her yere girmesini ve hava akışını sağlamalısın. Budama genellikle ağaç uykudayken (kışın) yapılır.
            <br /><br />
            <strong>Döllenme (Arılar):</strong> Baharda çiçek açtığında arıların bahçene gelmesi çok önemlidir. Kiraz meyvesi arılar sayesinde oluşur.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. MEYVE DÖNEMİ VE SABIR:</strong> Kiraz ağaçları dikildikten sonra genellikle 3 ila 5 yıl içinde meyve vermeye başlar.
            <br /><br />
            <strong>Çiçeklenme:</strong> Baharda ağacın bembeyaz çiçeklerle kaplandığını göreceksin. Bu dönemde don olması meyve verimini düşürebilir.
            <br /><br />
            <strong>Kuşlar:</strong> Kirazın en büyük hayranları kuşlardır! Meyveler kızarmaya başladığında ağacın üzerine koruyucu bir file germek, hasadı kuşlarla paylaşmak istemiyorsan iyi bir fikirdir.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "RENK VE TAT":</strong> Kirazlar toplandıktan sonra olgunlaşmaya devam etmeyen meyvelerdir.
            <br /><br />
            <strong>Zamanlama:</strong> Meyveler tam rengine ulaştığında ve tadı tatlılaştığında hasat etmelisin.
            <br /><br />
            <strong>Yöntem:</strong> Kirazı meyveden tutarak çekme, sapıyla birlikte dalından ayır. Sapı üzerinde kalan kirazlar çok daha uzun süre taze kalır.
          </p>
        </>
      ),
      iklim: "Kışın soğuklama ihtiyacı duyan, yazın ise güneşli ve kuru hava seven bir iklim bitkisidir.",
      bolge: "Geçirgen topraklı bahçeler ve meyve bahçeleri için uygundur; saksıda bodur türler denenebilir.",
      gubre: "Erken baharda azotlu, meyve oluşumunda ise potasyum ağırlıklı gübreleme önerilir.",
      riskler: "Monilya hastalığı, kiraz sineği ve don vurması en yaygın risklerdir."
    }
  },
  { 
    id: 12, 
    name: "Karpuz", 
    emoji: "🍉", 
    growthTime: 90, 
    info: "Yaz aylarının vazgeçilmezi, bol güneş ve alan isteyen dev lezzet.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: ZAMANLAMA VE TÜR SEÇİMİ:</strong> Karpuz tam bir yaz meyvesidir; soğuktan ve dondan nefret eder.
            <br /><br />
            <strong>Zamanlama:</strong> Toprağın iyice ısındığı (en az 18-20°C), don tehlikesinin tamamen geçtiği zamanı beklemelisin. Genellikle nisan sonu veya mayıs başı idealdir.
            <br /><br />
            <strong>Yer Seçimi:</strong> Karpuz kollarını metrelerce uzağa salar. Bu yüzden bitki başına en az 1.5 - 2 metre boş alan ayırabileceğin bir yer seçmelisin.
            <br /><br />
            <strong>Güneş:</strong> Günde en az 8-10 saat kesintisiz, yakıcı güneş alan bir yer şarttır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI:</strong> Karpuz kökleri derine gitmeyi ve besini çok sever.
            <br /><br />
            <strong>Toprak Yapısı:</strong> Kumlu, hafif ve suyu iyi süzen toprakları sever. Ağır ve killi topraklarda meyveler küçük kalır ve çürüyebilir.
            <br /><br />
            <strong>Besleme:</strong> Dikim yapacağın bölgeye bolca yanmış ahır gübresi veya kompost karıştır. Karpuz "iştahlı" bir bitkidir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Karpuzu doğrudan tohumdan ekmek, kökleri çok hassas olduğu için genellikle daha iyi sonuç verir.
            <br /><br />
            1. <strong>Ocak Hazırlığı:</strong> Toprakta hafif yükseltiler (tepecikler) oluştur. Bu, suyun kök boğazında birikip bitkiyi çürütmesini engeller.
            <br />
            2. <strong>Ekim:</strong> Her tepeciğe 2-3 cm derinliğinde 3-4 adet tohum ekin.
            <br />
            3. <strong>Seyreltme:</strong> Fideler 10 cm boya ulaştığında, her tepecikteki en güçlü 1 veya 2 fideni bırakıp diğerlerini makasla (sökmeden) kesin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU VE DİKKAT EDİLMESİ GEREKENLER:</strong> Karpuzun %90'ı sudur ama sulama şekli meyvenin tadını belirler.
            <br /><br />
            <strong>Sulama:</strong> Meyveler yumurta büyüklüğüne gelene kadar düzenli sulayın. Suyu sadece kök dibine verin; yapraklara su değerse mantar hastalıkları başlar.
            <br /><br />
            <strong>Kritik Kural:</strong> Hasat zamanına 2 hafta kala sulamayı tamamen kesin veya çok azaltın. Bu, meyvenin içindeki şekerin yoğunlaşmasını ve karpuzun tatlanmasını sağlar.
            <br /><br />
            <strong>Meyve Desteği:</strong> Meyveler büyüdüğünde toprakla temasını kesmek için altına küçük bir tahta parçası veya saman koyabilirsin. Bu, nemden kaynaklı çürümeyi önler.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. TOZLAŞMA: ARILARIN ÖNEMİ:</strong> Karpuzun meyve verebilmesi için çiçeklerinin arılar tarafından ziyaret edilmesi gerekir. Eğer bahçende hiç arı yoksa, sabahın erken saatlerinde erkek çiçekleri koparıp polenlerini dişi çiçeklerin (altında küçük bir karpuz taslağı olan çiçekler) ortasına sürerek elinle tozlaşma yapabilirsin.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "O MEŞHUR SES":</strong> Karpuzun olup olmadığını anlamak biraz tecrübe ister ama şu ipuçları seni yanıltmaz:
            <br /><br />
            <strong>Kulakçık (Sülük) Testi:</strong> Karpuzun dala bağlandığı yerdeki o küçük kıvırcık uzantı (sülük) tamamen kurumuş ve kahverengiye dönmüşse karpuz olmuştur.
            <br /><br />
            <strong>Toprak Lekesi:</strong> Karpuzun yere değen kısmındaki beyaz leke, kremsi bir sarıya dönmüşse bu iyi bir işarettir.
            <br /><br />
            <strong>Tok Ses:</strong> Karpuza parmağınla vurduğunda "boğuk" ve dolgun bir ses gelmelidir. Tiz bir ses geliyorsa henüz hamdır.
            <br /><br />
            Hasat ederken karpuzu daldan çekerek koparma, köklere zarar verebilirsin. Bir bıçakla sapından keserek al.
          </p>
        </>
      ),
      iklim: "Yüksek sıcaklık ve düşük nemli yaz aylarını sever.",
      bolge: "Geniş alan kapladığı için büyük bahçeler ve tarlalar en uygunudur.",
      gubre: "Gelişim döneminde azot, meyve büyüme evresinde ise potasyum ağırlıklı gübreleme yapılmalıdır.",
      riskler: "Antraknoz hastalığı, yaprak bitleri ve aşırı sulama kaynaklı tatsızlaşma en büyük risklerdir."
    }
  },
  { 
    id: 13, 
    name: "Kavun", 
    emoji: "🍈", 
    growthTime: 100, 
    info: "Sıcağı ve kuru havayı seven, kokusuyla büyüleyen yaz meyvesi.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: ZAMANLAMA VE TÜR SEÇİMİ:</strong> Kavun, soğuğa karşı karpuzdan bile daha hassastır. Toprak tam olarak ısınmadan ekilmemelidir.
            <br /><br />
            <strong>Zamanlama:</strong> Gece sıcaklıkları 15-18°C'nin altına düşmediğinde dikim yapılmalıdır. Genellikle mayıs ayı ortaları en güvenli zamandır.
            <br /><br />
            <strong>Tür Seçimi:</strong> Yeni başlıyorsan "Kırkağaç" veya "Galia" gibi klasik ve dayanıklı türleri seçebilirsin. Balkonda deneyeceksen "Ananas kavun" gibi daha küçük meyveli türler uygun olabilir.
            <br /><br />
            <strong>Yer:</strong> Kavun, toprağa yayılmayı sever ancak salatalık gibi bir ipe veya çite tırmandırılmaya da müsaittir (sırık yöntemi).
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI:</strong> Kavun "ayaklarının kuru, başının sıcak" olmasını ister.
            <br /><br />
            <strong>Toprak Yapısı:</strong> Derin, süzek ve kumlu-tınlı toprakları sever. Su biriken ağır topraklarda kök çürüklüğü çok sık görülür.
            <br /><br />
            <strong>Zenginleştirme:</strong> Dikimden önce toprağa bolca yanmış ahır gübresi karıştırın. Kavun potasyum ve fosforu çok sever; bu meyvenin şeker oranını artırır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Tohumları doğrudan toprağa ekmek, köklerin zedelenmemesi için en iyisidir.
            <br /><br />
            1. <strong>Ocak Sistemi:</strong> Toprakta 1 metre arayla küçük tepecikler (ocaklar) oluşturun.
            <br />
            2. <strong>Ekim:</strong> Her tepeciğe 2-3 cm derinliğinde 3-4 adet tohum ekin.
            <br />
            3. <strong>Seyreltme:</strong> Fideler 2-3 gerçek yaprak çıkardığında, her ocakta sadece en güçlü görünen bir fidanı bırakın.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SULAMA VE BUDAMA (KRİTİK NOKTA):</strong> Kavunun tadı, sulama zamanlamasına bağlıdır.
            <br /><br />
            <strong>Sulama:</strong> Meyveler oluşana kadar düzenli sulayın. Ancak meyveler yumurta büyüklüğüne ulaştığında sulamayı azaltın. <strong>Hasada 10-15 gün kala sulamayı tamamen kesin.</strong> Eğer hasat öncesi çok sularsanız kavun tatsız olur ve çatlayabilir.
            <br /><br />
            <strong>Yaprak Koruması:</strong> Suyu asla yapraklara değdirmeyin; kavun külleme hastalığına (yapraklarda beyaz tozlanma) çok yatkındır.
            <br /><br />
            <strong>Budama (Uç Alma):</strong> Ana gövde 4-5 yapraklı olduğunda tepesini koparın. Bu, yan dalların çıkmasını sağlar. Meyveler bu yan dallarda oluşur. Her dalda en fazla 2-3 meyve bırakmak, meyvelerin daha büyük ve tatlı olmasını sağlar.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. TOZLAŞMA VE MEYVE DESTEĞİ:</strong> Kavun çiçekleri sabah erkenden açar ve arılar tarafından tozlaştırılır. Meyveler büyümeye başladığında, toprağın neminden etkilenmemeleri için altlarına birer kiremit veya kuru tahta parçası koymak çürümeyi önler.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "O KOKU VE ÇİZGİLER":</strong> Kavunun olup olmadığını anlamak karpuza göre daha kolaydır:
            <br /><br />
            <strong>Koku:</strong> Olgunlaşan kavun, sap kısmından dışarıya o meşhur tatlı kokusunu yaymaya başlar.
            <br /><br />
            <strong>Renk Değişimi:</strong> Kavunun kabuk rengi matlıktan parlaklığa geçer ve türüne göre sararma belirginleşir.
            <br /><br />
            <strong>Sapın Ayrılması:</strong> Kavun tam olgunlaştığında, meyve sapıyla birleştiği yerden hafif bir baskıyla kolayca ayrılır (buna "tam ayrılma" denir).
            <br /><br />
            <strong>Ağ Yapısı:</strong> Dışı pürüzlü (çıtır) kavunlarda, kabuk üzerindeki ağsı çizgiler belirginleşmiş ve sertleşmiş olmalıdır.
          </p>
        </>
      ),
      iklim: "Sıcak, kuru ve bol güneşli iklimlerden hoşlanır.",
      bolge: "Havadar bahçeler ve güneş alan balkonlar (bodur türler için) idealdir.",
      gubre: "Çiçeklenme öncesi fosfor, meyve tatlanma evresinde potasyum desteği önemlidir.",
      riskler: "Külleme hastalığı, kavun sineği ve aşırı nem kaynaklı çatlamalar başlıca risklerdir."
    }
  },
  { 
    id: 14, 
    name: "Portakal", 
    emoji: "🍊", 
    growthTime: 300, 
    info: "C vitamini deposu, mis kokulu ve güneş aşığı narenciye.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU TÜR VE FİDAN SEÇİMİ:</strong> Çekirdekten portakal yetiştirmek mümkündür ancak meyve vermesi 10 yılı bulabilir ve çıkan meyve acı olabilir. Bu yüzden en iyisi aşılı bir fidanla başlamaktır.
            <br /><br />
            <strong>Fidan Seçimi:</strong> Saksıda yetiştirecekseniz "Washington Navel" (en yaygın sofra portakalı) veya bodur türleri tercih etmelisiniz.
            <br /><br />
            <strong>Zamanlama:</strong> Dikim için en uygun zaman, don tehlikesinin bittiği ilkbahar aylarıdır.
            <br /><br />
            <strong>Yer:</strong> Portakal güneşsiz yapamaz. Günde en az 6-8 saat kesintisiz güneş ışığı alan, rüzgardan korunaklı bir köşe seçmelisiniz.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. SAKSI VE TOPRAK HAZIRLIĞI:</strong> Portakal "ayaklarının ıslak kalmasından" nefret eder; bu yüzden drenaj hayati önem taşır.
            <br /><br />
            <strong>Saksı:</strong> Altı mutlaka delik olan, derin ve geniş bir saksı kullanın. Hava alan killi saksılar (terrakota) kökler için çok sağlıklıdır.
            <br /><br />
            <strong>Toprak:</strong> Hafif asidik ve geçirgen toprakları sever. Torf, nehir kumu ve kompost karışımı portakal için zengin bir başlangıç sağlar.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Fidanı yeni yuvasına yerleştirirken şu kurala dikkat etmelisiniz:
            <br /><br />
            1. Saksının dibine suyun akması için bir miktar çakıl taşı dökün.
            <br />
            2. Fidanı yerleştirirken kökleri nazikçe açın.
            <br />
            3. <strong>Aşı Noktası:</strong> Gövdedeki hafif şişkinlik olan aşı yeri mutlaka toprağın dışında kalmalıdır. Eğer bu noktayı gömerseniz ağaç mantar kapabilir.
            <br />
            4. Toprağı doldurup elinizle hafifçe bastırın ve can suyunu verin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, NEM VE BESLEME:</strong> Portakal tropikal bir bitkidir, yani "ılıman ve nemli" bir yaşam tarzı sürer.
            <br /><br />
            <strong>Sulama:</strong> Toprağın üst kısmı kurudukça sulama yap. Yazın her gün, kışın ise daha seyrek sulayın. Sularken suyu saksının her yerine eşit dağıtın.
            <br /><br />
            <strong>Nem:</strong> Eğer bitki iç mekandaysa hava çok kuru gelebilir. Yapraklarına haftada birkaç kez su püskürtmek veya yanına bir su kabı koymak nem dengesini sağlar.
            <br /><br />
            <strong>Gübreleme:</strong> Bahar ve yaz aylarında narenciye özel gübreleri veya organik kompost ile 15 günde bir besleyin. Demir eksikliği olursa yapraklar sararabilir; bu durumda demir takviyesi yapın.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. BUDAMA VE TOZLAŞMA:</strong> 
            <br /><br />
            <strong>Budama:</strong> Ağacın iç kısmına ışık girmesini engelleyen sık dalları ve kurumuş uçları temizleyin. Çok sert budamadan kaçının.
            <br /><br />
            <strong>Tozlaşma:</strong> Dışarıdaki ağaçlar için arılar bu işi yapar. Ancak ev içindeki ağaçlarda çiçekler açtığında, bir fırça yardımıyla polenleri çiçeklerin arasında nazikçe gezdirerek meyve oluşumuna yardım edebilirsiniz.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: SABRIN ÖDÜLÜ:</strong> Portakallar genellikle çiçek açtıktan 7-12 ay sonra olgunlaşır.
            <br /><br />
            <strong>Görünüm:</strong> Meyve tamamen turuncu rengine ulaştığında hasat zamanı gelmiş demektir. Yeşil kısımlar kalmışsa henüz tam şekerlenmemiştir.
            <br /><br />
            <strong>Yöntem:</strong> Meyveyi dalından çekerek değil, bir makas yardımıyla sapından keserek koparın.
          </p>
        </>
      ),
      iklim: "Ilıman, sıcak ve nemli iklimleri sever; don olaylarına karşı direnci düşüktür.",
      bolge: "Güneş alan bahçeler, teraslar ve aydınlık iç mekanlar için uygundur.",
      gubre: "Narenciye gübresi ve düzenli demir takviyesi sağlıklı gelişim için şarttır.",
      riskler: "Kabuklu bit, kırmızı örümcek ve aşırı sulama kaynaklı kök çürümesi en sık görülen risklerdir."
    }
  },
  { 
    id: 15, 
    name: "Şeftali", 
    emoji: "🍑", 
    growthTime: 1095, // 3 yıl temsili
    info: "Yazın en sulu ve tatlı hediyesi, güneşin ve ilginin meyvesi.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU TÜR VE YER SEÇİMİ:</strong> Şeftali ağaçları "kendi kendine verimli" oldukları için (tek bir ağaç dikseniz bile meyve verirler) başlangıç için harikadırlar.
            <br /><br />
            <strong>Zamanlama:</strong> Fidan dikimi için en uygun zaman, ağacın uykuda olduğu geç sonbahar veya donların bittiği erken ilkbahar dönemidir.
            <br /><br />
            <strong>Fidan Seçimi:</strong> Çekirdekten şeftali yetişebilir ama meyvesi orijinali gibi olmayabilir. Bu yüzden bir fidanlıktan "tüplü" (poşetli) veya çıplak köklü, ikliminize uygun aşılı bir fidan almalısınız.
            <br /><br />
            <strong>Yer Seçimi:</strong> Şeftali güneş aşığıdır. Günde en az 6-8 saat tam güneş görmeli ve hava akımı olan (ama sert rüzgardan korunaklı) bir yerde olmalıdır. Kapalı, havasız köşelerde mantar hastalıkları çok olur.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI VE DİKİM:</strong> Şeftali kökleri "boğulmaya" gelmez, bu yüzden drenaj çok önemlidir.
            <br /><br />
            <strong>Toprak:</strong> Suyu iyi süzen, kumlu-tınlı ve hafif asidik toprakları sever. Dikimden önce toprağa bolca kompost veya yanmış ahır gübresi eklemek fidanı canlandırır.
            <br /><br />
            <strong>Dikim Çukuru:</strong> Fidanın kökünden biraz daha geniş ve derin bir çukur kazın.
            <br /><br />
            <strong>Aşı Noktası:</strong> En önemli kural budur: Fidanın gövdesindeki aşı yerini (hafif şişkinlik) asla toprak altında bırakmayın. Toprak seviyesinden 5-10 cm yukarıda olmalıdır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. BAKIM: SU VE BESLEME:</strong> Şeftali meyve yaparken çok fazla enerji harcar, bu yüzden desteğe ihtiyaç duyar.
            <br /><br />
            <strong>Sulama:</strong> Özellikle ilk yıllarda toprak kurudukça derinlemesine sulama yapın. Meyveler olgunlaşırken susuz kalırsa meyveler küçük ve tatsız olur. Suyu gövdeye değil, ağacın izdüşümüne (dalların ulaştığı hizadaki toprağa) verin.
            <br /><br />
            <strong>Gübreleme:</strong> Bahar başında ağacın etrafına organik gübre serpmek büyümeyi hızlandırır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BUDAMA: "KASE" FORMU:</strong> Şeftali ağacını diğerlerinden ayıran en önemli bakım budamadır.
            <br /><br />
            <strong>Form Verme:</strong> Ağacın ortasını açık bırakacak şekilde "kase" veya "vazo" formu verilmelidir. Bu sayede güneş her dalın arasına girer ve meyveler eşit şekilde kızarır.
            <br /><br />
            <strong>Kış Budaması:</strong> Her yıl kış sonunda, dikine büyüyen "obur" dalları ve kurumuş uçları kesmelisiniz. Şeftali meyvesini geçen yılın sürgünleri üzerinde verir, bu yüzden budama verimi artırır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. SEYRELTME: "AZ OLSUN, ÖZ OLSUN":</strong> Şeftali ağacı bazen taşıyabileceğinden çok daha fazla meyve verir. Eğer dallarda çok fazla küçük meyve varsa, bunların bir kısmını (aralarında 10-15 cm kalacak şekilde) elle koparmalısınız. Bu, kalan meyvelerın çok daha iri ve sulu olmasını sağlar.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "YUMUŞAKLIK VE KOKU":</strong> Şeftali, dalında tam olgunlaştığında en lezzetli halini alır.
            <br /><br />
            <strong>Görünüm:</strong> Meyvenin yeşil kısımları tamamen sarı veya turuncuya döndüğünde (türüne göre kırmızılaşma da artar) olgunlaşmıştır.
            <br /><br />
            <strong>Dokunuş:</strong> Meyveyi avucunuzla hafifçe sıktığınızda (parmaklarınızla değil, ezilmesin) hafif bir esneklik varsa hazırdır.
            <br /><br />
            <strong>Yöntem:</strong> Meyveyi yukarı doğru hafifçe döndürerek koparın. Eğer zorlanıyorsanız henüz tam olgunlaşmamıştır.
          </p>
        </>
      ),
      iklim: "Kışın soğuklama ihtiyacı olan, yazın ise sıcak ve kuru hava seven bir meyve ağacıdır.",
      bolge: "Güneş alan bahçeler için uygundur; vazo tipi budama ile her bölgede verim alınabilir.",
      gubre: "Erken baharda azotlu, meyve büyüme evresinde ise dengeli organik gübreler kullanılmalıdır.",
      riskler: "Yaprak kıvırcıklığı hastalığı, şeftali güvesi ve aşırı nem kaynaklı mantar sorunları görülebilir."
    }
  },
  { 
    id: 16, 
    name: "Üzüm", 
    emoji: "🍇", 
    growthTime: 1085, // Hasat süresi değişkenlik gösterebilir
    info: "İnsanlık tarihinin en eski yadigarı, sabrın ve bereketin simgesi.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU TÜR VE YER SEÇİMİ:</strong> Üzüm asması "güneşin ve rüzgarın" çocuğudur. Havadar olmayan yerlerde çabuk hastalanır.
            <br /><br />
            <strong>Zamanlama:</strong> Fidan dikimi için en ideal zaman, asmanın uykuda olduğu geç sonbahar veya don tehlikesinin geçtiği erken ilkbahar dönemidir.
            <br /><br />
            <strong>Tür Seçimi:</strong> Bölgenizin iklimine uygun türü seçmek çok kritiktir. Sofralık (çekirdekli/çekirdeksiz), şıralık veya kurutmalık türlerden birine karar verin. "Sultaniye" veya "İzabella" (kokulu üzüm) gibi dayanıklı türler yeni başlayanlar için idealdir.
            <br /><br />
            <strong>Yer Seçimi:</strong> Günde en az 7-8 saat doğrudan güneş alan, güneye bakan yamaçlar veya açık alanlar en iyisidir. Hava akımının olması mantar hastalıklarını önler.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI VE DİKİM:</strong> Üzüm asması çok seçici değildir ama köklerini derine salmayı sever.
            <br /><br />
            <strong>Toprak Yapısı:</strong> Suyu iyi süzen (drenajı yüksek), taşlı ve kireçli toprakları bile sever. Ancak çok ağır killi topraklarda kökleri boğulabilir.
            <br /><br />
            <strong>Dikim Çukuru:</strong> Yaklaşık 50-60 cm derinliğinde ve genişliğinde çukurlar kazın. Çukurun dibine yanmış ahır gübresi veya kompost karıştırılmış toprak ekleyin.
            <br /><br />
            <strong>Dikim:</strong> Fidanı çukura yerleştirirken köklerin kıvrılmamasına dikkat edin. Aşı noktası toprak seviyesinden birkaç parmak yukarıda kalmalıdır. Can suyunu vermeyi ihmal etmeyin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DESTEK SİSTEMİ (TERBİYE):</strong> Asma, doğası gereği tırmanıcı bir bitkidir; kendi başına ayakta duramaz.
            <br /><br />
            <strong>Çardak mı, Sıra mı?</strong> Eğer bahçeniz küçükse bir çardak sistemi kurarak gölgesinden de yararlanabilirsiniz. Eğer üretim odaklıysanız, kazıklar arasına gerilmiş tellerden oluşan bir sistem kurmalısınız.
            <br /><br />
            <strong>Bağlama:</strong> Genç sürgünleri nazikçe bu desteklere bağlayarak yukarı doğru yönlendirin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, GÜBRE VE EN ÖNEMLİ KURAL: BUDAMA:</strong> Üzüm yetiştiriciliğinin %80'i doğru budamadır. "Asma, budandıkça ağlar, ağladıkça coşar."
            <br /><br />
            <strong>Sulama:</strong> Genç fidanlar ilk yıllarda düzenli su ister. Olgun asmalar ise çok derin köklere sahip oldukları için kuraklığa dayanıklıdır. Meyveler tatlanmaya başladığında (ben düşme dönemi) sulamayı azaltın.
            <br /><br />
            <strong>Kış Budaması:</strong> Her yıl kış sonunda (şubat-mart gibi) asma uykudayken yapılır. Geçen yıl meyve veren dallar budanarak asmanın enerjisinin yeni sürgünlere gitmesi sağlanır.
            <br /><br />
            <strong>Yaz Budaması (Uç Alma):</strong> Yazın asmanın çok fazla yapraklanıp meyveleri gölgede bırakmasını engellemek için fazla sürgünler ve yapraklar seyreltilir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. HASTALIKLARLA MÜCADELE:</strong> Üzümün en büyük düşmanı nemli havalarda ortaya çıkan "Külleme" ve "Mildiyö" (mantar) hastalıklarıdır.
            <br /><br />
            <strong>Kükürt ve Bakır:</strong> Geleneksel ve etkili bir yöntem olarak, asmalara çiçeklenme öncesi ve sonrası toz kükürt veya "bordo bulamacı" (göztaşı) uygulamak hastalıklardan korur.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "TAM ZAMANI":</strong> Üzüm toplandıktan sonra tatlanmaya devam etmez, bu yüzden dalında olgunlaşmalıdır.
            <br /><br />
            <strong>Görünüm:</strong> Üzümler tam rengine ulaştığında ve taneleri hafifçe yumuşadığında olgunlaşmıştır.
            <br /><br />
            <strong>Tat Testi:</strong> Salkımın en altındaki taneyi tadın; eğer o tatlıysa salkımın tamamı olmuştur.
            <br /><br />
            <strong>Yöntem:</strong> Salkımları elinizle asılarak koparmayın, asmanın "gözlerine" zarar verebilirsiniz. Mutlaka bir bağ makasıyla sapından kesin.
          </p>
        </>
      ),
      iklim: "Bol güneşli, rüzgarlı ve nemin düşük olduğu karasal veya Akdeniz iklimlerini sever.",
      bolge: "Bağlar, çardaklı bahçeler ve güneş alan yamaçlar en uygun yaşam alanlarıdır.",
      gubre: "Kış sonunda yanmış çiftlik gübresi, gelişim döneminde ise potasyum desteği meyve kalitesini artırır.",
      riskler: "Külleme, mildiyö ve salkım güvesi asma yetiştiriciliğinde en sık karşılaşılan sorunlardır."
    }
  },
  { 
    id: 17, 
    name: "Mango", 
    emoji: "🥭", 
    growthTime: 150, // Çiçeklenmeden hasada kadar geçen ortalama süre
    info: "Meyvelerin kralı, tropikal iklimin en görkemli hediyesi.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: TOHUM MU, FİDAN MI?</strong> Mango çekirdekten kolayca filizlenir ancak meyve vermesi 6-10 yılı bulabilir.
            <br /><br />
            <strong>Fidan Seçimi:</strong> Eğer amacın 2-3 yıl içinde meyve yemekse, mutlaka bir fidanlıktan iklimine uygun, aşılı ve sertifikalı bir fidan (örneğin: Keitt, Kent veya Maya türleri) almalısın.
            <br /><br />
            <strong>Tohumdan Başlama:</strong> Eğer "benim için hobi önemli" diyorsan, yediğin olgun bir mangonun çekirdeğini çıkarıp, dış kabuğunu nazikçe açarak içindeki "fasulye" benzeri çekirdeği nemli kağıt havlu içinde çimlendirebilirsin.
            <br /><br />
            <strong>Zamanlama:</strong> Dikim için en uygun zaman, havaların istikrarlı şekilde ısındığı bahar sonu veya yaz başıdır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. YER VE TOPRAK SEÇİMİ:</strong> Mango, "soğuk" kelimesinden nefret eder.
            <br /><br />
            <strong>Güneş:</strong> Mango tam bir güneş aşığıdır. Günde en az 8-10 saat doğrudan ve dik güneş ışığı almalıdır.
            <br /><br />
            <strong>Toprak:</strong> Zengin, derin ve suyu çok iyi süzen (drenajı yüksek) toprakları sever. Kumlu-tınlı topraklar idealdir. Ağır killi toprakları sevmez; kökleri hemen çürüyebilir.
            <br /><br />
            <strong>Rüzgar Koruması:</strong> Genç mango fidanları rüzgara karşı hassastır. Rüzgar almayan ama havadar bir köşe seçmelisin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. DİKİM ADIMLARI:</strong> Fidanını toprakla buluştururken kök sağlığına odaklanmalısın.
            <br /><br />
            1. <strong>Çukur:</strong> Fidanın kök topunun iki katı genişliğinde bir çukur kaz.
            <br />
            2. <strong>Zenginleştirme:</strong> Çukurun dibindeki toprağı bir miktar kompost veya yanmış organik gübre ile karıştır.
            <br />
            3. <strong>Hizalama:</strong> Fidanı çukura yerleştirirken, fidanlıktaki saksı seviyesinden daha derine gömme. Kök boğazı toprakla aynı hizada olmalıdır.
            <br />
            4. <strong>Can Suyu:</strong> Dikimden hemen sonra bolca su vererek topraktaki hava boşluklarını kapat.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BAKIM: SU, NEM VE BESLEME:</strong> Mango büyürken tam bir "tropikal" bakım ister.
            <br /><br />
            <strong>Sulama:</strong> İlk 1-2 yıl toprak kurudukça düzenli sulanmalıdır. Ağaç yaşlandıkça kuraklığa direnci artar. Ancak çiçeklenme ve meyve bağlama döneminde su hayati önem taşır.
            <br /><br />
            <strong>Nem:</strong> Mango nemli havayı sever. Kuru iklimlerde veya ev içinde, yapraklarına su püskürtmek gelişimi destekler.
            <br /><br />
            <strong>Gübreleme:</strong> Bahar başından sonbahara kadar narenciye gübresine benzer, potasyum ve magnezyum içeren gübrelerle beslenmelidir. Fazla azot, meyve yerine sadece yaprak yapmasına neden olur.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. SOĞUKTAN KORUMA (KRİTİK UYARI):</strong> Mango ağacı için en büyük risk dondur. Sıcaklık 4-5°C'nin altına düştüğünde ağaç stres altına girer, 0°C ve altında ise ölebilir.
            <br /><br />
            <strong>Kış Bakımı:</strong> Eğer bahçedeyse, kışın gövdesini hasırla sarmak veya üzerine koruyucu örtü örtmek gerekir. Saksıdaysa mutlaka içeriye, güneş alan bir yere alınmalıdır.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "SABRIN ÖDÜLÜ":</strong> Mango meyveleri genellikle çiçek açtıktan 4-5 ay sonra olgunlaşır.
            <br /><br />
            <strong>Görünüm:</strong> Meyvenin rengi türüne göre yeşilden sarıya veya kırmızıya döner. Ayrıca meyvenin sap kısmında hafif bir dolgunluk oluşur.
            <br /><br />
            <strong>Koku:</strong> Olgunlaşan mango, sap kısmından buram buram tatlı bir tropikal koku yaymaya başlar.
            <br /><br />
            <strong>Dokunuş:</strong> Avucunla hafifçe sıktığında hafif bir esneklik hissediyorsan hasat edebilirsin.
          </p>
        </>
      ),
      iklim: "Don olayının görülmediği tropikal ve subtropikal iklimleri sever.",
      bolge: "Sıcak kıyı şeridi bahçeleri veya kışın korunabileceği geniş kapalı alanlar uygundur.",
      gubre: "Potasyum, magnezyum ve mikro besin elementleri içeren narenciye tipi gübreleme önerilir.",
      riskler: "Don vurması, antraknoz hastalığı ve aşırı azot kaynaklı meyve dökümü başlıca risklerdir."
    }
  },
  { 
    id: 18, 
    name: "Trabzon Hurması", 
    emoji: "🍅", 
    growthTime: 1095, // Ortalama 3 yıl
    info: "Cennet hurması olarak da bilinen, sonbaharın turuncu incisi.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU TÜR VE ZAMANLAMA:</strong> Trabzon hurması iki ana kategoriye ayrılır: Sertken yenen (elma gibi) ve yumuşadıktan sonra yenen (bal gibi olan).
            <br /><br />
            <strong>Tür Seçimi:</strong> 
            <br />• <strong>Fuyu/Jiro:</strong> Sertken yenebilen, ağzı burmayan türlerdir.
            <br />• <strong>Hachiya:</strong> Tamamen yumuşayıp jöle kıvamına gelmeden yenirse ağzı çok fena burar. Yeni başlıyorsanız "Fuyu" gibi sert yenen türler daha zahmetsizdir.
            <br /><br />
            <strong>Zamanlama:</strong> En ideal dikim zamanı, ağacın uykuda olduğu geç sonbahar veya erken ilkbahar (mart ayı gibi) dönemidir.
            <br /><br />
            <strong>Yer Seçimi:</strong> Günde en az 6-8 saat doğrudan güneş alan, rüzgardan korunaklı bir yer seçmelisiniz. Genç dalları meyve ağırlığıyla kırılabilir, bu yüzden sert rüzgar almaması önemlidir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI VE DİKİM:</strong> Trabzon hurması toprak konusunda çok seçici değildir ama "mutlu" olması için drenaj şarttır.
            <br /><br />
            <strong>Toprak:</strong> Derin, organik maddece zengin ve suyu iyi süzen toprakları sever. Kireçli topraklara karşı da oldukça toleranslıdır.
            <br /><br />
            <strong>Dikim Adımları:</strong>
            <br />1. Fidanın kök yapısından biraz daha geniş bir çukur kazın.
            <br />2. <strong>Aşı Noktası:</strong> En kritik kural; fidanın gövdesindeki aşı yeri mutlaka toprak seviyesinin üzerinde kalmalıdır.
            <br />3. <strong>Can Suyu:</strong> Toprağı doldurduktan sonra köklerin hava almaması için bolca su verin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. BAKIM: SU, GÜBRE VE SABIR:</strong> Bu ağaç "kendi halindeyken" bile güzel büyür ama kaliteli meyve için ilgi ister.
            <br /><br />
            <strong>Sulama:</strong> Genç fidanlar kök salana kadar (ilk 2 yıl) düzenli sulanmalıdır. Yaz sıcaklarında toprağın tamamen kurumasına izin vermeyin. Susuz kalırsa ağaç meyvelerini dökebilir.
            <br /><br />
            <strong>Gübreleme:</strong> Çok fazla azotlu gübre vermekten kaçının; aksi halde ağaç meyve vermek yerine sadece boya gider. Bahar başında dengeli bir organik gübre yeterli olacaktır.
            <br /><br />
            <strong>Meyve Dökümü:</strong> Genç ağaçlar bazen haziran ayında meyvelerinin bir kısmını döker. Bu normaldir, ağaç taşıyabileceği kadarını kendine ayırır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BUDAMA: GÜÇLÜ İSKELET:</strong> Trabzon hurmasının dalları oldukça kırılgandır.
            <br /><br />
            <strong>Şekil Verme:</strong> Ağaca ilk yıllarda güçlü bir ana gövde ve dengeli yan dallar oluşturacak şekilde budama yapılmalıdır.
            <br /><br />
            <strong>Temizlik:</strong> Her kış, birbirine sürtünen, içe doğru büyüyen veya kurumuş dalları temizleyerek ağacın hava almasını sağlayın.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. SOĞUKLAMA İHTİYACI:</strong> Trabzon hurması kışın yapraklarını döker ve dinlenmek için soğuğa ihtiyaç duyar. Türkiye'nin birçok bölgesinde yetişebilir ancak çok sert ve uzun süreli don olaylarından (-15°C altı) genç fidanları korumak gerekebilir.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "RENK VE OLGUNLUK":</strong> Meyveler genellikle ekim ve kasım aylarında olgunlaşır.
            <br /><br />
            <strong>Zamanlama:</strong> Meyveler tamamen turuncu veya kırmızımsı bir renk aldığında hasat edilebilir.
            <br /><br />
            <strong>Yöntem:</strong> Meyveyi dalından asılarak koparmayın. Bir makas yardımıyla meyvenin tepesindeki yeşil çanak yaprakları üzerinde kalacak şekilde sapından kesin.
            <br /><br />
            <strong>Olgunlaştırma:</strong> Eğer ağzı buran bir tür (Hachiya gibi) yetiştiriyorsanız ve sertken topladıysanız; bir poşetin içine elma veya muz koyarak yanına hurmaları dizin. Birkaç gün içinde yumuşayıp bal kıvamına geleceklerdir.
          </p>
        </>
      ),
      iklim: "Ilıman iklimleri sever; kışın soğuklama ihtiyacı vardır ancak aşırı dondan korunmalıdır.",
      bolge: "Güneşli bahçeler ve kuytu köşeler için idealdir; rüzgar almayan yerler tercih edilmelidir.",
      gubre: "Bahar başında dengeli kompoze gübre veya organik kompost kullanımı verimi artırır.",
      riskler: "Meyve dökümü, dal kırılmaları ve aşırı azot kaynaklı vejetatif büyüme (meyvesizlik) başlıca risklerdir."
    }
  },
  { 
    id: 19, 
    name: "Yeşil Elma", 
    emoji: "🍏", 
    growthTime: 1085, // Ortalama 3 yıl
    info: "Mayhoş tadı ve kıtır dokusuyla bahçelerin en sevilen klasiği.", 
    details: {
      yetistirme: (
        <>
          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>1. HAZIRLIK: DOĞRU TÜR VE YER SEÇİMİ:</strong> Yeşil elmaların çoğu (Granny Smith gibi) meyvelerini olgunlaştırmak için uzun ve güneşli bir yaz mevsimine ihtiyaç duyar.
            <br /><br />
            <strong>Tür Seçimi:</strong> En popüler yeşil elma türü <strong>Granny Smith</strong>'tir. Ancak elmaların çoğu "kendine verimsizdir". Yani meyve almak için yakınlarda tozlayıcı başka bir elma türünün (örneğin Golden Delicious) bulunması verimi ciddi oranda artırır.
            <br /><br />
            <strong>Zamanlama:</strong> Fidan dikimi için en ideal zaman, ağacın uykuda olduğu geç sonbahar veya donların bittiği erken ilkbahar dönemidir.
            <br /><br />
            <strong>Yer Seçimi:</strong> Elma ağacı güneş aşığıdır. Günde en az 6-8 saat tam güneş almalıdır. Ayrıca sabah güneşini erken alan yerler, yapraklardaki çiği kurutarak mantar hastalıklarını önlediği için tercih edilmelidir.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>2. TOPRAK HAZIRLIĞI VE DİKİM:</strong> Elma ağaçları "ıslak ayaklardan" (su biriken toprak) hoşlanmaz.
            <br /><br />
            <strong>Toprak:</strong> Tınlı, humuslu ve iyi süzülen toprakları sever. Dikimden önce toprağa organik kompost karıştırmak ağacın kök gelişimini hızlandırır.
            <br /><br />
            <strong>Dikim Çukuru:</strong> Fidanın köklerinden iki kat daha geniş ve derin bir çukur kazın.
            <br /><br />
            <strong>Aşı Noktası:</strong> En önemli kural: Fidanın gövdesindeki aşı yeri (şişkin kısım) toprak seviyesinden 5-10 cm yukarıda kalmalıdır. Eğer gömerseniz ağaç gerçek performansını gösteremez.
            <br /><br />
            <strong>Can Suyu:</strong> Dikimden hemen sonra köklerin toprakla tam temas etmesi için bolca su verin.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>3. BAKIM: SU, GÜBRE VE SABIR:</strong> Elma ağacı ilk yıllarında güçlü bir kök sistemi kurmak için düzenli ilgi bekler.
            <br /><br />
            <strong>Sulama:</strong> Özellikle ilk 2 yıl, yaz aylarında haftada 1-2 kez derinlemesine sulama yapın. Toprağın sadece yüzeyini değil, kök derinliğini ıslattığınızdan emin olun.
            <br /><br />
            <strong>Gübreleme:</strong> Her bahar başında, ağacın gövdesinden biraz uzağa, dallarının izdüşümüne gelecek şekilde dengeli bir gübre serpin.
            <br /><br />
            <strong>Meyve Seyreltme:</strong> Ağacınız çok fazla meyve tutarsa, haziran ayında küçük meyveleri elinizle seyreltin (her hüzmede 1-2 meyve kalsın). Bu, kalan elmaların daha iri ve lezzetli olmasını sağlar.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>4. BUDAMA: GÜNEŞ İÇERİ GİRSİN:</strong> Elma ağacında budama, hem ağacın sağlığı hem de meyve kalitesi için hayati önem taşır.
            <br /><br />
            <strong>Kış Budaması:</strong> Her yıl kış sonunda, ağaç uykudayken yapılır. "Üç K" kuralını uygulayın: <strong>K</strong>ırık, <strong>K</strong>urumuş ve <strong>K</strong>arışık (birbirine sürten) dalları kesin.
            <br /><br />
            <strong>Işık Yönetimi:</strong> Ağacın merkezini bir kuşun içinden uçabileceği kadar açık tutmaya çalışın. Güneş ışığı ağacın içine ne kadar çok girerse, elmalar o kadar güzel kızarır/yeşerir ve tatlanır.
          </p>

          <p style={{  color: '#000000', marginBottom: '15px' }}>
            <strong>5. HASTALIK VE ZARARLILAR:</strong> Yeşil elmalar "Karaleke" ve "Elma İçkurdu" gibi sorunlara karşı hassas olabilir.
            <br /><br />
            <strong>Takip:</strong> Yapraklarda lekeler veya meyvelerde delikler görürseniz erkenden müdahale etmelisiniz.
            <br /><br />
            <strong>Temizlik:</strong> Sonbaharda ağacın altına dökülen yaprakları ve çürük meyveleri mutlaka toplayıp uzaklaştırın. Bu, mikropların kışı orada geçirmesini engeller.
          </p>

          <p style={{  color: '#000000', margin: 0 }}>
            <strong>6. HASAT: "O KÜTÜRDETİ":</strong> Yeşil elmaların hasat zamanı genellikle eylül sonu ile ekim aylarıdır.
            <br /><br />
            <strong>Görünüm:</strong> Meyvenin zemin rengi parlak yeşile döndüğünde ve üzerindeki noktalar (lentisel) belirginleştiğinde hazırdır.
            <br /><br />
            <strong>Test:</strong> Bir elmayı avucunuza alın ve hafifçe yukarı doğru döndürerek kaldırın. Eğer sapı daldan kolayca ayrılıyorsa olgunlaşmış demektir.
            <br /><br />
            <strong>Tadına Bak:</strong> Yeşil elma mayhoş olur ama çekirdekleri kahverengiye dönmüşse tam olgunluğa erişmiş demektir.
          </p>
        </>
      ),
      iklim: "Uzun, güneşli yazlar ve kışın yeterli soğuklama süresi ister.",
      bolge: "Bol güneş alan bahçeler ve hava sirkülasyonu olan açık alanlar en iyisidir.",
      gubre: "Erken baharda dengeli NPK gübresi ve ihtiyaç halinde kalsiyum takviyesi önerilir.",
      riskler: "Elma iç kurdu, karaleke hastalığı ve tozlayıcı eksikliği nedeniyle düşük verim başlıca risklerdir."
    }
  },
];
export default plantsData;
import React, { useState } from 'react';

// Bölge verilerini içeren statik bir dizi oluşturuyoruz. Her bölge için id, isim, iklim türü, yetişen başlıca bitkiler ve özel bir öneri içerir.
const regionsData = [
  {
    id: "marmara",
    name: "Marmara Bölgesi",
    icon: "🌻",
    description: "Geçiş ikliminin sunduğu avantajla Türkiye'nin en çeşitli tarım havzalarından biridir. Nem dengesi ve toprak zenginliği sayesinde özellikle meyvecilikte dünya standartlarında sonuçlar verir.",
    climate: "Geçiş İklimi",
    mainPlants: "Ayçiçeği, Şeftali, Pirinç, Zeytin, Mısır",
    recommendation: { name: "Şeftali", reason: "Bursa ve çevresindeki alüvyonlu topraklar, şeftalinin hem o meşhur sulu yapısı hem de aroması için eşsizdir.", icon: "🍑" }
  },
  {
    id: "ege",
    name: "Ege Bölgesi",
    icon: "🌿",
    description: "Dağların denize dik uzanması, Akdeniz esintisinin iç kısımlara kadar girmesini sağlar. Bu durum, yüksek şeker oranı isteyen meyveler için doğal bir laboratuvar ortamı oluşturur.",
    climate: "Akdeniz İklimi",
    mainPlants: "Zeytin, Üzüm, Pamuk, Tütün, Kestane",
    recommendation: { name: "Sultaniye Üzüm", reason: "Ege'nin düşük nemli ve bol güneşli yaz günleri, üzümün şeker yoğunluğunu zirveye taşıyarak onu dünyanın en iyisi yapar.", icon: "🍇" }
  },
  {
    id: "karadeniz",
    name: "Karadeniz Bölgesi",
    icon: "🌧️",
    description: "Her mevsim yağış alan bu coğrafya, güneşten ziyade nem ve bulutlu havayı seven, asidik toprak yapısına uyumlu bitkiler için cennet niteliğindedir.",
    climate: "Karadeniz İklimi",
    mainPlants: "Fındık, Mısır, Kestane, Karalahana",
    recommendation: { name: "Fındık", reason: "Karadeniz'in dik yamaçları ve sürekli nemli havası, fındık ağaçlarının köklenmesi ve meyve dolgunluğu için dünyadaki en uygun yerdir.", icon: "🌰" }
  },
  {
    id: "akdeniz",
    name: "Akdeniz Bölgesi",
    icon: "🌊",
    description: "Kış ılıklığının merkezi. Türkiye'nin narenciye deposu olan bu bölge, yıl boyu bitki yetiştirmeye izin veren sıcak bir yapıya sahiptir.",
    climate: "Akdeniz İklimi",
    mainPlants: "Portakal, Limon, Muz, Pamuk, Yer Fıstığı",
    recommendation: { name: "Portakal", reason: "Antalya ve Mersin'in killi-kireçli toprak yapısı ve don olmayan kışları, portakalın vitamin değerini ve suyunu artırır.", icon: "🍊" }
  },
  {
    id: "icanadolu",
    name: "İç Anadolu Bölgesi",
    icon: "🌾",
    description: "Geniş düzlükleri ve karasal iklimiyle Türkiye'nin tahıl ambarıdır. Volkanik toprakların olduğu alanlar ise özellikle toprak altı bitkileri için idealdir.",
    climate: "Karasal İklim",
    mainPlants: "Buğday, Şeker Pancarı, Patates, Nohut, Elma",
    recommendation: { name: "Patates", reason: "Niğde ve Nevşehir çevresindeki volkanik tüflü topraklar, patatesin toprak altında rahatça büyümesini ve lezzetli olmasını sağlar.", icon: "🥔" }
  },
  {
    id: "doguanadolu",
    name: "Doğu Anadolu Bölgesi",
    icon: "🏔️",
    description: "Yüksek rakım ve sert kışlar nedeniyle tarım sezonu kısadır ancak güneşin etkili geldiği vadilerde dünyanın en tatlı meyveleri yetişir.",
    climate: "Sert Karasal",
    mainPlants: "Elma, Arpa, Buğday, Ceviz",
    recommendation: { name: "Elma", reason: "Yüksek rakımın sağladığı gece-gündüz sıcaklık farkı, elmaların daha sert, sulu ve dayanıklı olmasını sağlar.", icon: "🍏" }
  },
  {
    id: "guneydogu",
    name: "Güneydoğu Anadolu",
    icon: "☀️",
    description: "Yaz sıcaklığının en yüksek olduğu bölgemizdir. GAP projesi ile suyun toprağa kavuşmasıyla ürün verimliliği katlanmıştır.",
    climate: "Karasal / Step",
    mainPlants: "Domates, Pamuk, Kırmızı Mercimek, Karpuz",
    recommendation: { name: "Domates", reason: "GAP ile gelen sulama imkanı ve bölgenin yoğun güneş enerjisi birleşince, domatesler en kırmızı ve en lezzetli haline ulaşır.", icon: "🍅" }
  }
];

  const Bolgeler = () => {
  // Kullanıcının butonlara basarak detayını veya tarım tavsiyesini görmek istediği aktif bölge nesnesini hafızada tutar.
  // NEDEN NULL: İlk başta hiçbir bölge seçilmediği için boş/seçilmemiş anlamında başlangıç değeri null olarak tanımlanır
  const [selectedRegion, setSelectedRegion] = useState(null);

  return (
    <div className="region-page" style={{ padding: '30px 20px', maxWidth: '1000px', margin: '0 auto', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* 1. BÖLÜM: BİLGİLENDİRME */}
      <header style={{ textAlign: 'left', marginBottom: '50px', borderLeft: '6px solid #2e7d32', paddingLeft: '20px' }}>
        <h1 style={{ color: '#1b5e20', fontSize: '32px', fontWeight: '800', marginBottom: '8px' }}>Türkiye Tarım Atlası</h1>
        <p style={{ color: '#666', fontSize: '15px' }}>Toprağımızı tanıyalım: Bölgelere göre iklim ve bitki çeşitliliği.</p>
      </header>

      <div className="regions-info-list" style={{ display: 'grid', gap: '20px' }}>
        {regionsData.map((region) => ( // Her bölge için ayrı bir kart oluşturuyoruz. Kartta bölgenin ikonu, adı, iklim türü, açıklaması ve yetişen başlıca bitkiler yer alır. Ayrıca her kartın sağ üst köşesinde iklim türünü belirten küçük bir etiket bulunur. */
          <div key={region.id} style={{ 
            background: '#fff', 
            borderRadius: '16px', 
            padding: '25px', 
            border: '1px solid #e8f5e9', 
            boxShadow: '0 2px 10px rgba(0,0,0,0.03)' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
              <span style={{ fontSize: '24px' }}>{region.icon}</span>
              <h3 style={{ color: '#2e7d32', margin: 0, fontSize: '19px', fontWeight: '700' }}>{region.name}</h3>
              <div style={{ marginLeft: 'auto' }}>
                 <span style={{ fontSize: '10px', background: '#e8f5e9', color: '#2e7d32', padding: '4px 12px', borderRadius: '20px', fontWeight: 'bold' }}>
                   {region.climate}
                 </span>
              </div>
            </div>
            <p style={{ fontSize: '14px', color: '#444', lineHeight: '1.6', marginBottom: '12px' }}>{region.description}</p>
            <div style={{ padding: '10px 15px', background: '#f9fcf9', borderRadius: '10px', fontSize: '13px', color: '#555' }}>
              <strong>Önemli Ürünler:</strong> {region.mainPlants}
            </div>
          </div>
        ))}
      </div>

      {/* 2. BÖLÜM: ÖNERİ SİSTEMİ */}
      <section style={{ 
        marginTop: '60px', 
        textAlign: 'center', 
        background: '#f1f8e9', 
        padding: '45px 20px', 
        borderRadius: '32px',
        border: '1px solid #c8e6c9'
      }}>
        <h2 style={{ color: '#1b5e20', marginBottom: '10px', fontSize: '24px' }}>FarmFlow Tavsiyesi</h2>
        <p style={{ color: '#555', fontSize: '14px', marginBottom: '30px' }}>Yaşadığın bölgeye göre ne yetiştirmelisin? Öğrenmek için seç.</p>
        
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', marginBottom: '40px' }}>
          {regionsData.map((region) => (
            <button 
              key={region.id} // Her bölge için bir buton oluşturuyoruz. Butona tıklandığında o bölge seçilmiş olur alt kısımda o bölgeye özel tarım tavsiyesi gösterilir. Seçili olan bölgenin butonu yeşil arka planlı ve beyaz yazılı olur, diğerleri ise beyaz arka planlı ve yeşil yazılı kalır.
              onClick={() => setSelectedRegion(region)}
              style={{
                padding: '10px 18px',
                borderRadius: '50px',
                border: '1px solid #c8e6c9',
                // DİNAMİK STİL (TERNARY OPERATOR): Eğer butonun temsil ettiği bölge id'si ile seçilen state id'si aynıysa buton yeşil renk olur, değilse beyaz kalır.
                background: selectedRegion?.id === region.id ? '#2e7d32' : 'white',
                color: selectedRegion?.id === region.id ? 'white' : '#2e7d32',
                cursor: 'pointer',
                fontSize: '13px',
                fontWeight: '600',
                transition: 'all 0.3s ease'
              }}>
              {region.name.replace(" Bölgesi", "")} {/* Buton üzerindeki yazı, bölge adından "Bölgesi" kelimesi çıkarılarak oluşturulur */}
            </button>
          ))}
        </div>
        {/* Seçilen bölge varsa, o bölgeye özel tarım tavsiyesi gösterilir. Tavsiye kartı, bölgenin önerdiği bitki hakkında bilgi verir ve neden o bitkinin o bölge için ideal olduğunu açıklar. Kartın sol tarafında bitkinin simgesi büyük bir şekilde yer alır. */}
        {selectedRegion && (
          <div className="recommendation-result" style={{ 
            background: 'white', 
            padding: '30px', 
            borderRadius: '24px', 
            boxShadow: '0 15px 35px rgba(0,0,0,0.08)',
            display: 'flex',
            alignItems: 'center',
            gap: '25px',
            textAlign: 'left',
            maxWidth: '650px',
            margin: '0 auto',
            borderLeft: '8px solid #2e7d32',
            animation: 'fadeInUp 0.5s ease'
          }}>
            {/* State içindeki seçili bölgeye ait özel tavsiye ikonunu ekrana basar */}
            <span style={{ fontSize: '60px' }}>{selectedRegion.recommendation.icon}</span>
            <div>
              <span style={{ fontSize: '10px', color: '#2e7d32', fontWeight: 'bold' }}>BİZİM TAVSİYEMİZ</span>
              <h3 style={{ color: '#1b5e20', margin: '5px 0', fontSize: '20px' }}>{selectedRegion.recommendation.name}</h3>
              <p style={{ fontSize: '14px', color: '#666', lineHeight: '1.5', margin: 0 }}>{selectedRegion.recommendation.reason}</p>
            </div>
          </div>
        )}
      </section>
        {/* Tavsiye kartına fadeInUp animasyonu eklendi böylece kullanıcı bir bölge seçtiğinde kart yumuşak bir şekilde ortaya çıkar. */}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Bolgeler;
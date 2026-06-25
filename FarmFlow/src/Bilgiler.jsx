import React from 'react';

// Bu bileşen, bitki besleme ve gübreleme hakkında kapsamlı bir rehber sunar. Organik ve inorganik gübrelerin ne olduğunu, nasıl kullanıldığını, hangi bitkilere ne zaman verilmesi gerektiğini detaylı bir şekilde açıklar. Ayrıca uzman çiftçilerin altın kurallarını ve ipuçlarını paylaşarak kullanıcıların başarılı bir hasat elde etmelerine yardımcı olur. Görsel olarak zenginleştirilmiş bu rehber, tarım meraklıları için hem bilgilendirici hem de ilham verici bir kaynak niteliğindedir.
const Bilgiler = () => {
  return (
    <div style={{ padding: '40px 20px', maxWidth: '1100px', margin: '0 auto', fontFamily: "'Poppins', sans-serif" }}>
      
      {/* HEADER */}
      <header style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ color: '#1b5e20', fontSize: '38px', fontWeight: '700', letterSpacing: '-0.5px', marginBottom: '10px' }}>
          Bitki Besleme ve Gübreleme Rehberi
        </h1>
        <p style={{ color: '#555', fontSize: '18px', fontStyle: 'italic', maxWidth: '600px', margin: '0 auto', lineHeight: '1.6' }}>
          Hangi bitkiye, ne zaman, hangi besini vermelisiniz? Doğal ve modern tarım yöntemleriyle kusursuz hasadın sırları.
        </p>
        <div style={{ height: '3px', background: 'linear-gradient(90deg, transparent, #2e7d32, transparent)', width: '60%', margin: '30px auto 0' }}></div>
      </header>

      {/* 1.BÖLÜM ORGANİK GÜBRELER */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <span style={{ fontSize: '30px', background: '#f1f8e9', padding: '10px', borderRadius: '12px' }}>🍂</span>
          <h2 style={{ color: '#2e7d32', fontSize: '28px', margin: 0 }}>Organik Gübreler (Toprağın Yatırımı)</h2>
        </div>
        <p style={{ lineHeight: '1.9', color: '#333', fontSize: '16px', marginBottom: '30px', textAlign: 'justify' }}>
          Organik gübreler doğadaki canlı kalıntılarından elde edilir. Temel amaçları sadece bitkiyi beslemek değil, toprağın fiziksel yapısını iyileştirmek, su tutma kapasitesini artırmak ve topraktaki faydalı mikroorganizmaları canlandırmaktır. Etkileri yavaştır ama kalıcıdır.
        </p>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
          <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', borderTop: '4px solid #8bc34a' }}>
            <h4 style={{ color: '#1b5e20', fontSize: '20px', marginBottom: '15px' }}>🐄 Hayvan Gübresi</h4>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', textAlign: 'justify' }}>
              İnek, koyun veya tavuk dışkısının fermente edilmesiyle (yanmasıyla) elde edilir. Azot ve organik madde açısından çok zengindir. <br/><br/>
              <strong>Ne Zaman Kullanılır?</strong> Fide dikiminden 1-2 ay önce toprağı hazırlarken (kış sonu veya erken ilkbahar) toprağa karıştırılarak kullanılır. Tohumla direkt temasından kaçınılmalıdır.
            </p>
          </div>
          
          <div style={{ background: '#ffffff', padding: '30px', borderRadius: '16px', boxShadow: '0 10px 30px rgba(0,0,0,0.04)', borderTop: '4px solid #8bc34a' }}>
            <h4 style={{ color: '#1b5e20', fontSize: '20px', marginBottom: '15px' }}>🍏 Kompost & Solucan</h4>
            <p style={{ fontSize: '15px', color: '#555', lineHeight: '1.7', textAlign: 'justify' }}>
              Mutfak ve bahçe atıklarının çürütülmesiyle oluşan kompost ile solucanların dışkısından elde edilen gübrelerdir. Bitkiler için doğal bir doping etkisi yaratır.<br/><br/>
              <strong>Ne Zaman Kullanılır?</strong> Fide dikimi sırasında kök çukuruna bir avuç eklenerek veya büyüme dönemi boyunca ayda bir kez toprağın üst yüzeyine serpilerek kullanılır.
            </p>
          </div>
        </div>
      </section>

      {/* 2.BÖLÜM KİMYASAL (İNORGANİK) GÜBRELER */}
      <section style={{ marginBottom: '60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '25px' }}>
          <span style={{ fontSize: '30px', background: '#ffebee', padding: '10px', borderRadius: '12px' }}>🧪</span>
          <h2 style={{ color: '#c62828', fontSize: '28px', margin: 0 }}>İnorganik Gübreler (Hızlı Müdahale)</h2>
        </div>
        <p style={{ lineHeight: '1.9', color: '#333', fontSize: '16px', marginBottom: '20px', textAlign: 'justify' }}>
          Laboratuvar ortamında üretilen bu gübreler, bitkinin doğrudan emebileceği formda mineraller içerir. Organik gübrelerin aksine toprağı iyileştirmezler, sadece bitkiyi hedeflerler. Tıpkı bir hastaya bağlanan serum gibi anında etki ederler. Ambalajların üzerindeki <strong>N-P-K</strong> harfleri formüllerini belirtir.
        </p>

        <div style={{ background: '#fafafa', borderRadius: '20px', padding: '30px', border: '1px solid #eeeeee' }}>
          
          {/* Azot */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', paddingLeft: '20px', borderLeft: '6px solid #4caf50' }}>
            <h4 style={{ margin: 0, fontSize: '20px', color: '#2e7d32' }}>N (Azot) - "Sürgün ve Yaprak Yapıcı"</h4>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7', textAlign: 'justify' }}>
              Bitkinin gövde yapmasını, boyunun uzamasını ve yapraklarının koyu yeşil bir renk almasını sağlar. Fotosentez için en temel elementtir.
            </p>
            <div style={{ background: '#e8f5e9', padding: '12px 15px', borderRadius: '8px', fontSize: '14px', color: '#1b5e20', display: 'inline-block', marginTop: '5px' }}>
              <strong>Ne Zaman Kullanılır?</strong> Bitki henüz fideyken, büyümenin en hızlı olduğu ilkbahar aylarında ve çiçeklenme öncesinde verilir. <em>(Meyve verme dönemine geçildiğinde azot kesilmelidir, aksi takdirde bitki meyve yapmak yerine sürekli boya gider ve yaprak çıkarır.)</em>
            </div>
          </div>

          {/* Fosfor */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '30px', paddingLeft: '20px', borderLeft: '6px solid #ff9800' }}>
            <h4 style={{ margin: 0, fontSize: '20px', color: '#e65100' }}>P (Fosfor) - "Kök ve Çiçek Yapıcı"</h4>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7', textAlign: 'justify' }}>
              Bitkinin toprağa sağlam tutunmasını sağlayan kök ağını geliştirir. Ayrıca tomurcuklanma, çiçek açma ve çekirdek oluşumunu tetikler.
            </p>
            <div style={{ background: '#fff3e0', padding: '12px 15px', borderRadius: '8px', fontSize: '14px', color: '#e65100', display: 'inline-block', marginTop: '5px' }}>
              <strong>Ne Zaman Kullanılır?</strong> Tohum ekiminde veya fide dikimi sırasında (kök gelişimi için) ve bitki çiçek açmaya hazırlanırken tomurcukların dökülmesini engellemek için kullanılır.
            </div>
          </div>

          {/* Potasyum */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', paddingLeft: '20px', borderLeft: '6px solid #2196f3' }}>
            <h4 style={{ margin: 0, fontSize: '20px', color: '#1565c0' }}>K (Potasyum) - "Kalite ve Direnç Artırıcı"</h4>
            <p style={{ margin: 0, color: '#444', lineHeight: '1.7', textAlign: 'justify' }}>
              Meyvelerin irileşmesini, tatlanmasını (şeker oranının artmasını) ve renklenmesini sağlar. Ayrıca bitkiyi soğuğa, kuraklığa ve hastalıklara karşı dayanıklı hale getirir.
            </p>
            <div style={{ background: '#e3f2fd', padding: '12px 15px', borderRadius: '8px', fontSize: '14px', color: '#1565c0', display: 'inline-block', marginTop: '5px' }}>
              <strong>Ne Zaman Kullanılır?</strong> Çiçekler dökülüp meyveler belirmeye (çağla formuna) başladığı andan itibaren hasada kadar olan süreçte kullanılır. Yaz ortası ve sonbahar başı en ideal zamanlardır.
            </div>
          </div>

        </div>
      </section>

      {/* 3.BÖLÜM ALTIN KURALLAR, İPUÇLARI */}
      <section style={{ background: 'linear-gradient(135deg, #3fba45c4 0%, #1f8427 100%)', padding: '40px', borderRadius: '24px', color: 'white', boxShadow: '0 15px 40px rgba(46,125,50,0.2)' }}>
        <h3 style={{ margin: '0 0 20px 0', fontSize: '24px', display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>💡</span> Uzman Çiftçi Kuralları
        </h3>
        <ul style={{ margin: 0, paddingLeft: '20px', lineHeight: '2.2', fontSize: '16px' }}>
          <li><strong>Zamanlama Liderliği:</strong> Organik gübreler toprağı hazırlamak için ekimden <em>önce</em>, inorganik (N-P-K) gübreler ise bitki büyürken ihtiyaca göre o an verilir.</li>
          <li><strong>Önce Su, Sonra Gübre:</strong> Asla kupkuru toprağa gübre (özellikle kimyasal) uygulamayın. Kökler yanar. Önce toprağı hafifçe sulayıp nemlendirin.</li>
          <li><strong>Güneş Kuralı:</strong> Sıvı formdaki gübreleri yapraklara fısfısla sıkacaksanız, bunu asla öğle güneşinde yapmayın. Su damlacıkları mercek görevi görüp yaprağı yakar. Sabah serinliği veya akşamüzeri en doğrusudur.</li>
          <li><strong>Dozaj Kontrolü:</strong> Kimyasal gübrelerde "Ne kadar çok verirsem o kadar büyür" mantığı bitkiyi öldürür. Pakette yazan oranın dışına kesinlikle çıkılmamalıdır.</li>
        </ul>
      </section>
</div>
  );
};

export default Bilgiler;
import React from 'react';

// Bu bileşen, bitki besleme ve gübreleme hakkında kapsamlı bir rehber sunar. Organik ve inorganik gübrelerin ne olduğunu, nasıl kullanıldığını,
// hangi bitkilere ne zaman verilmesi gerektiğini detaylı bir şekilde açıklar.
const Hakkimizda = () => {
  return (
    <div className="detail-page-container" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
      {/* BAŞLIK */}
      <div className="garden-header" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h2 style={{ color: '#2e7d32', fontSize: '2.5rem' }}>🌱 Neden FarmFlow?</h2>
        <p style={{ fontStyle: 'italic', color: '#666' }}>"Akıllı Tarım Takip Sistemi: Bitki Sulama ve Hasat Yönetimi"</p>
      </div>

      <div style={{ background: 'white', padding: '40px', borderRadius: '24px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', lineHeight: '1.8' }}>
        
        {/* BU SAYFAYI NEDEN OLUŞTURDUM-PROJENİN AMACI */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#388e3c', borderBottom: '2px solid #e8f5e9', paddingBottom: '10px' }}>🎯 Projenin Amacı ve Hikayesi</h3>
          <p>
            Günümüzde bahçıvanlık ve bitki yetiştiriciliği, doğayla bağ kurmak isteyen birçok kişi için önemli bir ilgi alanı hâline gelmiştir.
            Ancak özellikle tarım bilgisi sınırlı olan yeni başlayanlar için bitkilerin gelişim süreleri, sulama ihtiyaçları ve uygun iklim koşulları takip edilmesi zor, karmaşık süreçlerdir.
            Piyasadaki profesyonel sistemlerin yüksek maliyetli olması, basit araçların ise bütüncül bilgiler sunmaması büyük bir eksiklik yaratmaktadır.
          </p>
          <p>
            <strong>FarmFlow</strong>, tam da bu problemi ortadan kaldırmak; hobi bahçıvanlarının ve küçük ölçekli üreticilerin tarımsal süreçlerini dijitalleştirmek amacıyla web tabanlı, herkes için tamamen ücretsiz ve erişilebilir bir rehber olarak geliştirilmiştir.
          </p>
        </section>

        {/* VİZYON */}
        <section style={{ marginBottom: '30px' }}>
          <h3 style={{ color: '#388e3c', borderBottom: '2px solid #e8f5e9', paddingBottom: '10px' }}>⚜️Vizyonumuz</h3>
          <p>
            Vizyonumuz; karmaşık ve bütçe gerektiren tarım teknolojilerini sadeleştirerek, tarımsal bilgi ile dijital pratiği herkesin kullanabileceği tek bir platformda bir araya getirmektir. 
            Geleneksel, hataya açık ve zaman alıcı yöntemlerin yerine; güncel meteorolojik verilerle entegre çalışan akıllı bir sistem sunarak tarımsal verimliliği artırmayı hedefliyoruz. 
            Gelecekte insanların doğayla iç içe, huzurlu bir hobi edinmelerine destek olurken, aynı zamanda bilinçli bakım yöntemleriyle bitki ve ürün kayıplarının önüne geçmeyi vizyon ediniyoruz.
          </p>
        </section>

        {/* SÜRDÜREBİLİRLİK VE TEKNOLOJİ KOSMI */}
        <section style={{ marginBottom: '30px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          <div style={{ background: '#f1f8e9', padding: '20px', borderRadius: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#1b5e20' }}>🌿 Sürdürülebilirlik</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>Gereksiz su ve gübre kullanımını engelleyerek doğayı korumayı ve en verimli hasadı almayı hedefliyoruz.</p>
          </div>
          <div style={{ background: '#e3f2fd', padding: '20px', borderRadius: '15px' }}>
            <h4 style={{ margin: '0 0 10px 0', color: '#0d47a1' }}>📱 Teknoloji</h4>
            <p style={{ fontSize: '14px', margin: 0 }}>Karmaşık tarım bilgilerini, herkesin kullanabileceği kadar sade ve şık bir arayüzle sunuyoruz.</p>
          </div>
        </section>

        {/*KAPANIŞ CÜMLEMİZ */}
        <section style={{ textAlign: 'center', marginTop: '40px', padding: '20px', borderTop: '1px solid #eee' }}>
          <p style={{ color: '#2e7d32', fontWeight: 'bold' }}>
            Bu proje, insanlara doğayla iç içe sakin ve huzurlu bir hobi edinmeleri için bir fırsat niteliğinde olup
            onlara destek olmayı amaçlamakta ve onlara yol göstermektedir.
          </p>
          <div style={{ fontSize: '30px', marginTop: '10px' }}>🍇🫑🍋🍒</div>
        </section>
      </div>
    </div>
  );
};

export default Hakkimizda;
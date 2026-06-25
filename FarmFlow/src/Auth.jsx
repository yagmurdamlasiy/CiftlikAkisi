import React, { useState } from 'react';
import Swal from 'sweetalert2';

const Auth = ({ onLoginSuccess }) => { // Giriş başarılı olduğunda App bileşenine bilgi göndermek için onLoginSuccess prop'u alıyoruz
  const [isLogin, setIsLogin] = useState(false); // NEDEN FALSE: Uygulama ilk açıldığında yeni kullanıcıların doğrudan kayıt formunu (Register) görüp sisteme hesap açmalarını teşvik etmek amacıyla varsayılan olarak 'false' başlatılmıştır.
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [isReadyToGo, setIsReadyToGo] = useState(false); // NEDEN FALSE: Kullanıcı henüz kullanıcı adı ve şifresini doğrulatmadığı için bu karşılama ekranı varsayılan olarak kapalı (`false`) gelmek zorundadır.

// ÇOKLU KULLANICI DESTEKLİ KAYIT
  const handleRegister = (e) => {
    e.preventDefault(); // Form gönderildiğinde tarayıcının sayfayı baştan aşağı yenileme (refresh) şeklindeki varsayılan davranışını engelliyoruz
    if (name && password) {
      // Mevcut kullanıcılar listesini al, yoksa boş dizi oluştur
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];// existingUsers: localStorage'da 'users' anahtarı altında saklanan kullanıcı listesini temsil eder

      // Bu isimde kullanıcı daha önce kayıt olmuş mu kontrol et
      const userExists = existingUsers.some(u => u.name.toLowerCase() === name.toLowerCase()); // Kullanıcı adlarının büyük/küçük harf kontrol edilmesi için toLowerCase() kullanıyoruz. Böylece "Yağmur" ve "yağmur" aynı kullanıcı olarak kabul edilir.

      if (userExists) { // Eğer kullanıcı adı zaten varsa, kullanıcıya hata mesajı gösteririz ve kayıt işlemini durdururuz
        Swal.fire({
          title: 'Hata!',
          text: 'Bu kullanıcı adı zaten alınmış!',
          icon: 'error',
          confirmButtonColor: '#d32f2f'
        });
        return; // Kayıt işlemini durdururuz, böylece aynı kullanıcı adıyla birden fazla hesap oluşturulmaz
      }

      // Yeni kullanıcıyı listeye ekle
      existingUsers.push({ name, password }); // Yeni kullanıcıyı mevcut kullanıcılar listesine ekliyoruz. Bu sayede birden fazla kullanıcı kaydedilebilir hale geliyor.
      localStorage.setItem('users', JSON.stringify(existingUsers)); // Güncellenmiş kullanıcı listesini localStorage'a kaydediyoruz. JSON.stringify ile diziyi string formatına çeviriyoruz

      Swal.fire({
        title: 'Kayıt Başarılı!',
        text: 'Hesabın oluşturuldu. Şimdi giriş yapabilirsin.',
        icon: 'success',
        confirmButtonColor: '#2e7d32'
      });
      // Kayıt bitince girdi kutularının içini temizliyoruz ve kullanıcı vakit kaybetmeden giriş yapabilsin diye formu otomatik olarak "Giriş Yap" (`isLogin: true`) moduna kaydırıyoruz.
      setName('');
      setPassword('');
      setIsLogin(true); 
    }
  };

  // DOĞRU KULLANICIYI BULAN GİRİŞ FONKSİYONU
  const handleLogin = (e) => {
    e.preventDefault(); // Sayfanın tarayıcı tarafından yeniden yüklenmesini engelliyoruz.
    
    // Kayıtlı kullanıcıları localStorage'den alıyoruz eğer hiç kullanıcı yoksa boş bir dizi oluşturuyoruz
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Kullanıcı adını ve şifreyi eşleştir
    const foundUser = existingUsers.find(u => u.name.toLowerCase() === name.toLowerCase() && u.password === password);

    if (foundUser) {// Eğer kullanıcı adı ve şifre eşleşen bir kullanıcı bulunursa, o zaman giriş başarılı demektir.
      // O an giriş yapan aktif kullanıcıyı kaydet (Örn: Yağmur veya Azra)
      localStorage.setItem('currentUserId', foundUser.name);
      // Giriş başarılı olduğunda kullanıcıya hoş geldin mesajı gösteriyoruz ve ardından uygulamanın ana ekranına geçiş yapmasını sağlıyoruz.
      Swal.fire({
        title: 'Giriş Başarılı!',
        text: `Hoş geldin ${foundUser.name}! Tarım maceran kaldığı yerden devam ediyor.`,
        icon: 'success',
        confirmButtonColor: '#2e7d32'
      });
      setIsReadyToGo(true); // Giriş başarılı olduğunda karşılama ekranını göstermek için isReadyToGo durumunu true yapıyoruz. Bu sayede kullanıcı adı ve şifre doğrulandıktan sonra hoş geldin ekranı açılır.
    } else {
      Swal.fire({
        title: 'Hata!',
        text: 'Kullanıcı adı veya şifre hatalı ya da böyle bir hesap yok!',
        icon: 'error',
        confirmButtonColor: '#d32f2f'
      });
    }
  };

  // HOŞ GELDİN ARA EKRANI
  if (isReadyToGo) {
    return (
      <div className="auth-wrapper">
        <div className="auth-card"> {/* Burada kullanıcı adıyla kişiselleştirilmiş bir mesaj ve uygulamanın ana ekranına geçiş yapacak bir buton bulunuyor. */}
          <div style={{ fontSize: '60px', marginBottom: '20px' }}>🌿</div>
          <h2 style={{ color: '#2e7d32', marginBottom: '10px' }}>Hoş Geldin, {name}!</h2>
          <p style={{ color: '#666', marginBottom: '30px' }}>Bahçen seni bekliyor, bitkilerin büyümeye hazır.</p>
          <button onClick={onLoginSuccess} className="auth-submit-btn">
             Haydi Başlayalım!
          </button>
        </div>
      </div>
    );
  }

  // KULLANICI KAYIT VE GİRİŞ FORMU 
  return (
    <div className="auth-wrapper">
      <div className="auth-card">{/* Cam efekti (Glassmorphic) verilmiş modern, oval form kartı */}
        <div className="auth-header">
          <div style={{ fontSize: '45px', marginBottom: '10px', animation: 'bounce 2s infinite' }}>🍓</div>
          <h2 className="auth-logo">Farm<span>Flow</span></h2>
          <p className="auth-subtitle">Akıllı Tarım Takip Sistemi</p>
        </div>

        <div className="auth-tab-container">
          {/* Kayıt Ol Sekmesi: Tıklanınca isLogin durumunu false yapar ve form girdilerini temizler. Eğer aktifse 'active' sınıfını alır. */}
          <button 
            className={`auth-tab-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(false); setName(''); setPassword(''); }}>
            Kayıt Ol
          </button>
          {/* Giriş Yap Sekmesi: Tıklanınca isLogin durumunu true yapar ve form girdilerini temizler. Eğer aktifse 'active' sınıfını alır. */}
          <button 
            className={`auth-tab-btn ${isLogin ? 'active' : ''}`}
            onClick={() => { setIsLogin(true); setName(''); setPassword(''); }}>
            Giriş Yap
          </button>
        </div>
        
        {/* Form isLogin durumuna göre handleLogin veya handleRegister fonksiyonunu çağırır. İki input alanı var biri ad soyad için, diğeri şifre için. Her iki input da required olarak işaretlenmiştir, böylece kullanıcı boş bırakamaz. */}
        <form onSubmit={isLogin ? handleLogin : handleRegister} className="auth-form">
          <div className="auth-input-group">
            <label className="auth-label">Ad Soyad</label>
            <input 
              type="text"
              placeholder="Adınızı Soyadınızı girin" 
              className="auth-input" 
              value={name}
              onChange={(e) => setName(e.target.value)} // Kullanıcı klavyede tuşa bastığı an harfi yakalayıp state'e yazar
              required // Bu inputun boş bırakılamayacağını belirtir, böylece kullanıcı adını girmeden formu gönderemez
            />
          </div>

          <div className="auth-input-group">
            <label className="auth-label">Şifre</label>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="auth-input" 
              value={password}
              onChange={(e) => setPassword(e.target.value)} // Girilen şifre karakterlerini anlık state'e aktarır.
              required 
            />
          </div>
          
          {/* Formun gönderilmesini sağlayan buton. isLogin durumuna göre butonun metni "Giriş Yap" veya "Kayıt Ol" olarak değişir. */}
          <button type="submit" className="auth-submit-btn">
            {isLogin ? "Giriş Yap" : "Kayıt Ol"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Auth;

import React, { useState, useEffect } from 'react'; // hook olarak sadece useState ve UseEffect kullandım
import Auth from './Auth';
import './App.css';
import plantsData from './PlantsData';
import Bilgiler from './Bilgiler';
import Bolgeler from './Bolgeler';
import Hakkimizda from './Hakkimizda'; 
import Swal from 'sweetalert2';


export default function App() {// state'lerimiz
  const [isMenuOpen, setIsMenuOpen] = useState(false);// Neden false Uygulama ilk açıldığında sol menünün kapalı gelmesini, kullanıcının ana içeriği (bitki kartlarını) tam ekran rahatça görebilmesini istiyoruz.
  const [currentPage, setCurrentPage] = useState('home'); // neden home Kullanıcı giriş yaptığında ilk olarak bitkilerin listelendiği ana sayfayı görsün diye
  const [weather, setWeather] = useState("Güneşli");   // neden Güneşli API'den veri çekilirken internet yavaşlığı veya gecikme olursa arayüzde boş ya da tanımsız bir yazı kalmasın diye.
  const [selectedPlant, setSelectedPlant] = useState(null); // neden null Proje ilk açıldığında kullanıcı henüz hiçbir bitki kartına tıklamamıştır 
  const [readyCount, setReadyCount] = useState(0); // neden 0 matematiksel işlemlere uygun olarak başlangıç değeri sıfır (0) olarak atanmıştır. 
  const [temp, setTemp] = useState(null); // neden null Sıcaklık sayısal bir veridir ancak internetten fetch edilip gerçek veri gelene kadar sistemde henüz bir derece bilgisi mevcut değildir (bilinmeyen sayısal değer yerine null kullanılır).
  const [isAuthenticated, setIsAuthenticated] = useState(false); // neden false Güvenlik amacıyla site ilk açıldığında herkes varsayılan olarak "giriş yapmamış" kabul edilir
  const [currentUser, setCurrentUser] = useState(''); // neden boş string Henüz giriş yapılmadığı için aktif kullanıcı adı mevcut değildir
  const [myGarden, setMyGarden] = useState([]); // neden boş dizi Kullanıcı henüz hiçbir bitki eklemediği için 
  const [harvestedItems, setHarvestedItems] = useState([]); // neden boş dizi Kullanıcı henüz hiçbir ürün hasat etmediği için
  const [notes, setNotes] = useState([]); // neden boş dizi Kullanıcı henüz hiçbir not eklemediği için notlar bölümünde gösterilecek bir içerik yoktur. "Boş notlar" durumunu simgelemek için başlangıçta boş bir dizi atanmıştır.
  const [noteInput, setNoteInput] = useState(""); // neden boş string Kullanıcı not girmeye başlamadan önce not giriş alanı boş ve temiz olmalıdır

  // O ANKİ AKTİF KULLANICININ VE VERİLERİNİ YÜKLEME
  useEffect(() => {
    const activeUser = localStorage.getItem('currentUserId'); // Tarayıcının yerel kalıcı hafızasından (localStorage) en son giriş yapmış olan kullanıcının kimlik bilgisini sorguluyoruz.
    if (activeUser) { // Eğer böyle bir bilgi varsa (yani daha önce giriş yapılmış ve kullanıcı bilgisi kaydedilmişse) o zaman bu kullanıcıyı aktif kullanıcı olarak tanımlıyoruz.
      setIsAuthenticated(true); // Güvenlik kilidini açıyoruz, kullanıcının direkt uygulamaya girmesini sağlıyoruz.
      setCurrentUser(activeUser);// Giriş yapan kullanıcının adını navbar ve hoş geldin başlıklarında kullanmak üzere state'e yazıyoruz.
      
      // Kullanıcının Canlı Bahçesini Yükle
      const allGardens = JSON.parse(localStorage.getItem('gardens')) || {}; // Tüm kullanıcıların canlı bahçe verilerini kalıcı hafızadan metin (JSON) formatında çekip JavaScript nesnesine dönüştürüyoruz. Eğer veri yoksa boş obje `{}` kabul ediyoruz.
      if (allGardens[activeUser]) setMyGarden(allGardens[activeUser]);// Eğer bu giriş yapan kullanıcıya ait geçmişte ekilmiş bitkiler bulunuyorsa, onları çekip sadece onun bahçe ekranına (`myGarden`) yüklüyoruz.

      // Kullanıcının Ambarını Yükle
      const allWarehouses = JSON.parse(localStorage.getItem('warehouses')) || {};// Giriş yapan kişiye ait hasat edilmiş eski ürünler varsa, onları kullanıcının ambar listesine (`harvestedItems`) aktarıyoruz.
      if (allWarehouses[activeUser]) setHarvestedItems(allWarehouses[activeUser]);

      // Kullanıcının Notlarını Yükle
      const allNotes = JSON.parse(localStorage.getItem('userNotes')) || {};// Giriş yapan kullanıcıya ait eski günlük notları arşivde mevcutsa, onları ekranın notlar listesine (`notes`) basıyoruz.
      if (allNotes[activeUser]) setNotes(allNotes[activeUser]);
    }
  }, [isAuthenticated]); // Giriş durumu değiştiğinde tetiklenir

  // CANLI HAVA DURUMU SİSTEMİ ( GEOLOCATİON VE OPEN METEO API)
  useEffect(() => {
    if ("geolocation" in navigator) { // Eğer kullanıcının tarayıcısı veya cihazı konum servislerini (GPS koordinat bulma) destekliyorsa:
      navigator.geolocation.getCurrentPosition( // Konum izni istenir ve kullanıcı izin verirse şu işlemler yapılır:
        (position) => { // Kullanıcının konum bilgisi başarıyla alındığında çalışacak fonksiyon

          const lat = position.coords.latitude; // Kullanıcının bulunduğu anlık enlem derecesini değişkene alıyoruz.
          const lon = position.coords.longitude; // Kullanıcının bulunduğu anlık boylam derecesini değişkene alıyoruz.

          fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`)
            .then((res) => res.json())// Hava durumunu anlamlandırmak için API'den gelen veriyi JavaScript nesnesine çeviriyoruz
            .then((data) => {// API'den gelen sıcaklık ve hava kodunu state'lere kaydet

              const currentTemp = data.current_weather.temperature; // Gelen verinin içinden anlık termometre sıcaklığını (örn: 24.8) ayıklıyoruz.
              const weatherCode = data.current_weather.weathercode; // Havanın durumunu belirten uluslararası standart meteoroloji kodunu çekiyoruz.

              setTemp(currentTemp);// Sayısal sıcaklık state'imizi güncelliyoruz, böylece navbar'daki derece anlık güncelleniyor.

              if (weatherCode === 0) setWeather("Güneşli ☀️"); // "===" İki veri birbirine tam olarak eşit mi diye kontrol eder, hem değeri hem de türü aynı mı diye bakar. 
              else if ([1, 2, 3].includes(weatherCode)) setWeather("Bulutlu ☁️");
              else if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(weatherCode)) setWeather("Yağmurlu 🌧️");
              else if ([71, 73, 75, 77, 85, 86].includes(weatherCode)) setWeather("Karlı ❄️");
              else if ([95, 96, 99].includes(weatherCode)) setWeather("Fırtınalı ⛈️");
              else setWeather("Bilinmiyor");// Hata durumunda kullanıcıya bilgi ver
            })
            .catch((err) => { // İnternet kesintisi, sunucu çökmesi veya API hatası gibi olumsuz durumlarda tetiklenen blok:
              console.log(err);// Hata durumunda hava durumunu "Bilinmiyor" yap
              setWeather("Hata oluştu");// Hata durumunda sıcaklığı null yap
            });
        },
        () => { setWeather("Konum izni verilmedi"); } // "=>" bir fonksiyon tanımlamak için kullanırız.
      );
    }
  }, []);

  // VERİLERİ KALICI HALE GETİRME FONKSİYONLARI 
  // Bahçe değiştikçe kaydet
  const saveGardenToStorage = (updatedGarden) => { // "=" Veriyi hafızaya kaydetmek için kullanılr.
    setMyGarden(updatedGarden);
    const allGardens = JSON.parse(localStorage.getItem('gardens')) || {};// Hafızadaki tüm kayıtlı bahçeleri çeker.
    allGardens[currentUser] = updatedGarden; // Güncellenmiş bahçe verisini sadece aktif kullanıcıya ait olan kısmı güncelleyerek kaydeder. Diğer kullanıcıların bahçeleri etkilenmez.
    localStorage.setItem('gardens', JSON.stringify(allGardens));// Tüm bahçe verilerini (güncellenmiş haliyle) tekrar metin formatında (JSON) kaydeder. Böylece sayfa yenilense bile kullanıcıların bahçeleri korunmuş olur.
  };

  // Ambar değiştikçe kaydet
  const saveWarehouseToStorage = (updatedWarehouse) => {
    setHarvestedItems(updatedWarehouse);// Ekrandaki Ambarım tablosunu hemen yeni hasat verileriyle yeniler.
    const allWarehouses = JSON.parse(localStorage.getItem('warehouses')) || {};
    allWarehouses[currentUser] = updatedWarehouse; // Sadece giriş yapmış kişinin ambar odasını günceller.
    localStorage.setItem('warehouses', JSON.stringify(allWarehouses));// Veriyi tarayıcı belleğine kalıcı kaydeder.
  };

  // Notlar değiştikçe kaydet
  const saveNotesToStorage = (updatedNotes) => {
    setNotes(updatedNotes);// Ekrandaki not listesi görünümünü anında günceller.
    const allNotes = JSON.parse(localStorage.getItem('userNotes')) || {}; // Sistemdeki tüm eski not havuzunu çağırır.
    allNotes[currentUser] = updatedNotes;// Sadece aktif bahçıvanın günlük sayfasına yeni not listesini yazar
    localStorage.setItem('userNotes', JSON.stringify(allNotes)); // Güncellenmiş not listesini tarayıcıda kalıcı hale getirir, böylece sayfa yenilense bile notlar kaybolmaz.
  };

  //  FONKSİYONLAR 

  // Ana sayfadaki bitki kartından "Yetiştir" butonuna basıldığında ekim sürecini başlatan fonksiyon.
    const startGrowing = (plant) => {
    const simdikiZaman = new Date(); // Bitkinin tam olarak hangi gün ve saniyede ekildiğini saptamak için sistem saatini alıyoruz.
    const benzersizId = crypto.getRandomValues(new Uint32Array(1))[0]; // Her bitki ekiminde ona özel benzersiz bir kimlik (ID) atamak için rastgele sayı üreteci fonksiyonunu kullanıyoruz. Bu sayede aynı bitkiden birden fazla ekilse bile her biri ayrı ayrı takip edilebilecekk.

    const newPlanting = { // Yeni ekilen bitkinin tüm özelliklerini içeren nesne oluşturuyoruz. Bu nesne, bitkinin temel bilgilerini (isim, emoji, büyüme süresi vb.) ve ekim tarihini içerir.
      ...plant, // Ana sayfadaki bitki kartından gelen temel bilgileri (id, name, emoji, growthTime vb.) bu yeni nesneye kopyalıyoruz.
      plantingDate: simdikiZaman.toISOString(), // LocalStorage için string'e çevirdik
      id: benzersizId // Her ekilen bitkiye özel benzersiz ID atıyoruz, böylece aynı türden birden fazla bitki ekilse bile her biri ayrı ayrı tanımlanabilir ve yönetilebilir. Bu ID, hasat veya silme işlemlerinde hangi bitkinin hedeflendiğini belirlemek için kullanılır.
    };
  
    const updatedGarden = [...myGarden, newPlanting] // Mevcut canlı bahçe listemizin arkasına bu yeni ektiğimiz tohum nesnesini ekliyoruz.
    saveGardenToStorage(updatedGarden); // Yazdığımız güvenli kayıt fonksiyonuyla veriyi diske yazıyoruz. Böylece sayfa yenilense bile canlı bahçemizdeki bitkiler kaybolmaz.

    setCurrentPage('garden');  // Ekim işlemi tamamlandıktan sonra kullanıcıyı otomatik olarak canlı bahçe sayfasına yönlendiriyoruz, böylece yeni ekilen bitkisini hemen görebilir ve gelişimini takip etmeye başlayabilir.
    setIsMenuOpen(false); // Kullanıcı menüyü kapatmayı unutmuş olabilir, bu yüzden ekim işlemi sonrası menünün otomatik kapanmasını sağlıyoruz. Böylece ekim sonrası odak tamamen canlı bahçede olr.
  };
  
  // Canlı bahçede büyüme yüzdesi %100 olmuş bir ekinin toplanıp ambar tablosuna aktarılmasını sağlayan fonksiyon.
  const harvestPlant = (plant) => {
    Swal.fire({ // Hasat işlemi öncesi kullanıcıya onay sormak için güzel bir pop-up açıyoruz. Böylece yanlışlıkla hasat edilmesi engellenir.
      title: 'Hasat Edilsin mi?',
      html: `<span style="font-size: 50px">${plant.emoji}</span><br><b>${plant.name}</b> ambarınıza taşınacak.`,
      icon: 'question',
      showCancelButton: true, // "Vazgeç" butonunun ekranda belirmesini sağlar.
      confirmButtonColor: '#2e7d32',
      confirmButtonText: 'Evet, Topla!',
      cancelButtonText: 'Vazgeç'
    }).then((result) => {
      if (result.isConfirmed) {// Eğer kullanıcı "Evet, Topla!" butonuna tıklayarak işlemi onayladıysa:

        const updatedGarden = myGarden.filter(item => item.id !== plant.id); // Bahçedeki bitkileri süzerek hasat edilen bitkinin ID'sini canlı bahçe listesinden çıkartıyoruz (Bahçeden siliniyor).
        saveGardenToStorage(updatedGarden);// Güncel yeni bahçe durumunu hafızaya kaydediyoruz.
        
        const newItem = {// Ambar deposuna kaldırılacak olan ürünün geçmiş kartını hazırlıyoruz.
          ...plant,// Hasat edilen bitkinin temel bilgilerini (isim, emoji, büyüme süresi vb.) bu yeni nesneye kopyalıyoruz.
          harvestDate: new Date().toLocaleDateString('tr-TR'), // Ürünün tam olarak hangi takvim gününde hasat edildiğini Türkiye formatında rapora işliyoruz.
          status: 'Tamamlandı' // Ürünün durumunu bitti/başarıldı olarak damgalıyoruz.
        };
        const updatedWarehouse = [...harvestedItems, newItem]; // Eski ambar listesinin üzerine bu yeni hasat edilen taze ürünü ekliyoruz.
        saveWarehouseToStorage(updatedWarehouse); // Güncel ambar listesini kullanıcı için diske kaydediyoruz.

        Swal.fire({
          title: 'Başarılı!',
          text: `${plant.name} başarıyla hasat edildi.`,
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

// Ekin böceklendiğinde, kuruduğunda veya bozulduğunda bahçeden kalıcı olarak çöpe atılmasını sağlayan silme fonksiyonu.
  const removePlant = (plant) => {
    Swal.fire({
      title: 'Bitkiyi Kaldır?',
      text: `${plant.emoji} ${plant.name} bahçeden kalıcı olarak silinecek.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Evet, Sil',
      cancelButtonText: 'Vazgeç'
    }).then((result) => {
      if (result.isConfirmed) {// Bahçıvan "Evet, Sil" diyerek silme kararını onaylarsa:

        // Kaldırılacak bitkinin benzersiz kimliğini (ID) bularak onu `myGarden` dizisinden ayıklıyoruz.
        const updatedGarden = myGarden.filter(item => item.id !== plant.id); //Silinmesi istenen bitki hariç tüm diğer bitkileri içerir. Böylece silinecek bitki bahçeden kalıcı olarak kaldırılmış olur.
        saveGardenToStorage(updatedGarden); // Ayıklanmış temiz bahçe listesini diske kaydediyoruz.
        Swal.fire({
          title: 'Silindi',
          text: 'Bitki bahçeden temizlendi.',
          icon: 'success',
          timer: 1500,
          showConfirmButton: false
        });
      }
    });
  };

// Ana sayfadaki kartların üzerinde yer alan "Detaylı Bilgi" butonuna basıldığında çalışan fonksiyon.
  const viewDetails = (plant) => {
    setSelectedPlant(plant); // Tıklanan bitkinin tüm detay objesini (gübreleme, sulama, riskler) `selectedPlant` durumuna yükler.
    setCurrentPage('detail'); // Uygulamanın aktif ekran görünümünü "Detay Sayfası" moduna geçirir.
  };
// Canlı bahçedeki bitkilerin hasat zamanını kontrol eden ve bildirim simgesindeki sayıyı güncelleyen fonksiyon.
  useEffect(() => {
    const checkHarvest = () => {
      const today = new Date(); // Bugünün tarihini alır, böylece her bitkinin ekim tarihinden itibaren kaç gün geçtiğini hesaplayabiliriz.
      let count = 0; // Döngü başlangıcında hasat zamanı gelmiş bitki sayısını sıfırlayıp baştan saymaya başlıyoruz. Her bitki kontrol edildiğinde, hasat zamanı gelmişse bu sayacı bir artıracağız.
      
      myGarden.forEach(plant => { // Canlı bahçedeki her bir bitki için tek tek kontrol yapıyoruz.
        const diffTime = Math.abs(today - new Date(plant.plantingDate)); // Her bitkinin ekim tarihinden bugüne kadar geçen süreyi milisaniye cinsinden hesaplıyoruz.
        const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1;// Geçen süreyi gün cinsine çeviriyoruz. +1 ekleyerek ekim gününü de tam gün olarak sayıyoruz (yani ekilen gün de büyüme süresine dahil oluyor).

        if (daysPassed >= plant.growthTime) { // Eğer bitkinin toprakta geçirdiği gün sayısı, onun paketindeki orijinal büyüme süresine ulaştıysa veya geçtiyse:
          count++; // Bu bitki hasat zamanına gelmiş demektir, sayacı bir artırıyoruz.
        }
      });
      setReadyCount(count); // Döngü bittiğinde toplam olgunlaşan ekin sayısını `readyCount` state'ine yazıyoruz (Navbar'daki bildirim çanının üzerindeki kırmızı rakamı besler).
    };
    checkHarvest(); // Canlı bahçedeki bitkilerin hasat durumunu uygulama ilk yüklendiğinde ve `myGarden` her değiştiğinde kontrol eder. Böylece yeni ekilen bitkiler veya hasat edilen bitkiler anında bildirim sayısına yansır.
  }, [myGarden]); // Bahçeme yeni bir ekin eklendiğinde veya bahçemden bir ekin hasat edilip eksildiğinde bu hesaplamayı otomatik olarak baştan yapar.

  // Bildirim simgesine tıklandığında hasat zamanı gelmiş bitkilerin listesini gösteren fonksiyon.
      const handleNotificationClick = () => { 
  // Bahçedeki bitkileri süzerek sadece büyüme süresi dolmuş, toplanmaya hazır olanları ayıklayıp bir listeye topluyoruz.
      const readyPlants = myGarden.filter((plant) => { 
      const diffTime = Math.abs(new Date() - new Date(plant.plantingDate)); // Her bitkinin ekim tarihinden bugüne kadar geçen süreyi milisaniye cinsinden hesaplıyoruz.
      const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // Geçen süreyi gün cinsine çeviriyoruz. +1 ekleyerek ekim gününü de tam gün olarak sayıyoruz (yani ekilen gün de büyüme süresine dahil oluyor).
      return daysPassed >= plant.growthTime; // Eğer bitkinin toprakta geçirdiği gün sayısı, onun paketindeki orijinal büyüme süresine ulaştıysa veya geçtiyse bu bitki hasat zamanına gelmiş demektir, filtreleme sonucuna dahil edilir.
    });
  
    if (readyPlants.length > 0) { // Eğer hasat edilmeyi bekleyen en az bir tane bile bitki bulunduysa:
      const list = readyPlants.map(p => `${p.emoji} ${p.name}`).join(', '); // Bulunan hazır bitkilerin emoji ve isimlerini aralarına virgül koyarak yan yana tek bir cümle metni haline getiriyoruz (Örn: 🍓 Çilek, 🍅 Domates gibi).
      Swal.fire({
        title: 'Hasat Zamanı!',
        text: `${list} için toplama vakti geldi. Hemen bahçene git!`,
        icon: 'info',
        confirmButtonColor: '#2e7d32'
      });
    }
  };

  // Bahçıvan günlüğüne yeni bir yazılı not ekleme fonksiyonu.
  const addNote = () => {
    if (noteInput.trim() !== "") { // Eğer kullanıcının yazdığı not alanı tamamen boşluklardan ibaret değilse, yani gerçekten anlamlı bir kelime yazdıysa
      const newNote = { // Yeni bir not kayıt kartı objesi oluşturuyoruz.
        id: Date.now(), // Notların listelenirken karışmaması için o anki zaman damgasını (milisaniye cinsinden benzersiz sayı) benzersiz ID yapıyoruz
        text: noteInput, // Kullanıcının textarea kutusuna yazdığı esas günlük cümlesini buraya koyuyoruz.
        date: new Date().toLocaleDateString('tr-TR'), // Notun yazıldığı o anki takvim tarihini Türkiye formatında nota iliştiriyoruz.
      };
      const updatedNotes = [newNote, ...notes]; // Yeni yazılan taze notu listenin en üstüne koyup eski notları altına dizecek şekilde yapıyoruz
      saveNotesToStorage(updatedNotes); // Güncellenmiş not listesini güvenli bir şekilde diske kaydediyoruz, böylece sayfa yenilense bile notlar kaybolmuyo
      setNoteInput(""); // Not eklendikten sonra not giriş alanını temizleyerek yeni bir not yazmaya hazır hale getiriyoruz.
    }
  };

  // Bahçıvan günlüğünden not silme fonksiyonu.
  const deleteNote = (id) => { // Silinecek notun benzersiz ID'sini alarak, notlar listesinden bu ID'ye sahip olanı süzüp atıyoruz.
    const updatedNotes = notes.filter(note => note.id !== id);
    saveNotesToStorage(updatedNotes); // Güncellenmiş not listesini güvenli bir şekilde diske kaydediyoruz, böylece sayfa yenilense bile silinen not geri gelmiyoor
  };

  // Hesap çıkış yapma fonksiyonu, kullanıcıya onay sorar ve onaylanırsa aktif kullanıcı bilgisini siler, giriş durumunu sıfırlar ve uygulamayı başlangıç durumuna getirir.
  const handleLogout = () => { 
    Swal.fire({
      title: 'Çıkış Yapılsın mı?',
      text: "Bahçeniz güvenli bir şekilde saklanacaktır.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#2e7d32',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Evet, Çıkış Yap',
      cancelButtonText: 'İptal'
    }).then((result) => {// Eğer kullanıcı "Evet, Çıkış Yap" butonuna tıklayarak çıkış kararını onayladıysa:
      if (result.isConfirmed) {// Tarayıcının kalıcı hafızasından (localStorageden) aktif kullanıcı bilgisi silinir, böylece uygulamaya yapmamış gibi davranır.
        localStorage.removeItem('currentUserId'); // Aktif kullanıcı adını siler
        setIsAuthenticated(false);// Giriş durumunu sıfırlar, böylece uygulama tekrar giriş ekranına döner
        setCurrentUser(''); // Aktif kullanıcı adını boş string yapar

        // Ekranda eski kullanıcının bilgileri kalmasın diye state'leri sıfırlıyoruz
        setMyGarden([]);
        setHarvestedItems([]);
        setNotes([]);
        setCurrentPage('home');
        setIsMenuOpen(false); // hatta yan menü açıksa onu da kapatıyoruz
      }
    });
  };

  // Güvenlik Kontrol ısmı
  if (!isAuthenticated) { // Eğer kullanıcının kimliği doğrulanmadıysa (`isAuthenticated` durumu false ise):
    // Sistem ana uygulamayı çalıştırmayı burada keser ve ekrana sadece login/register formunu içeren `Auth` bileşenini basar.
    return <Auth onLoginSuccess={() => setIsAuthenticated(true)} />;
  }


  return (
    <div className="app-container"> {/* Tüm projeyi saran, arka plan düzenini ve CSS grid yapısını kuran en dıştaki kapsayıcı div kutusu */}
  
      {/* NAVBAR KISMI */}
      <nav className="farm-navbar">
        <div className="nav-left">
           <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center' ,gap: '20px'}}>
            {/* Menüyü açmaya yarayan Hamburger Menü Butonu. Tıklanınca menü durumunu `true` (Açık) yapar */}
                <button onClick={() => setIsMenuOpen(true)} style={{ background: '#3b933f', color: 'white', border: 'none', padding: '12px', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }} className="menu-btn">☰ Menü</button>
           <div> 
            <h2 className="brand-logo">Farm<span>Flow</span></h2>
            </div>  
            </div>
        </div>

        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '20px',  marginLeft: 'auto' }}>
          {/* Giriş yapan aktif kullanıcının adı navbar'da küçük hoş bir detay olarak gözükür */}
          <span style={{fontWeight: '600', color: '#2e7d32', background: '#e8f5e9', padding: '5px 12px', borderRadius: '15px', fontSize: '14px'}}>👤 {currentUser}</span>
          {/* Canlı hava durumunu gösteren küçük bir bilgi kutucuğu. Sıcaklık ve hava durumunu anlık olarak gösterir. API'den veri gelene kadar güvenli varsayılan değerler gösterilir. */}
          <div className="weather-pill">

            {/* Eğer sıcaklık verisi API'den geldiyse yanına °C koyup yazar, gelmediyse veri yükleniyor anlamında iki adet tire işareti "--" basar */}
            <span className="temp-val">{temp !== null ? `${temp}°C` : "--"}</span>
            {/* API'den analiz edilip çıkartılan metinsel hava durumunu (Güneşli, Yağmurlu vb.) ve emojisini yazar */}
            <span className="weather-status"> {weather} </span>
          </div>

          {/* Bildirim Alanı: Üzerine tıklandığında olgunlaşan ürünlerin özet SweetAlert listesini tetikler */}
          <div className="notification-wrapper" style={{ cursor: 'pointer'}} onClick={handleNotificationClick}>
            <div className="bell-icon">🔔</div>
          {/* Eğer hasata hazır bitki sayısı sıfırdan büyükse, çanın sağ üstünde kırmızı renkli bi yuvarlak sayaç baloncuğu açar ve adedi yazar */}
            {readyCount > 0 && <span className="dot-badge">{readyCount}</span>} 
          {/* && operatörü, solundaki koşul doğruysa sağındaki jsx öğesini ekrana basar yanlışsa bi şey göstermez */}
          </div>
        </div>
      </nav>

      {/* SIDEBAR (YANDAKİ MENÜ) */}

      {/* Eğer `isMenuOpen` durumu true ise CSS'teki 'active' sınıfını da yanına ekleyerek menünün soldan ekrana kayarak girmesini sağlar */}
      <aside className={`sidebar-glass ${isMenuOpen ? 'active' : ''}`}>
        <div className="sidebar-header">
          <h3>Menü</h3>
          {/* Menüyü kapatmaya yarayan çarpı (X) butonu. Tıklanınca menü açık kalma durumunu false (Kapalı) yapar */}
          <button className="close-btn" onClick={() => setIsMenuOpen(false)}>×</button>
        </div>
        <ul className="sidebar-list"> {/* Menü elemanlarının alt alta dizildiği liste */}
          <li className={currentPage === 'home' ? 'active' : ''} onClick={() => {setCurrentPage('home'); setIsMenuOpen(false);}}>
            <span className="icon">🏠</span> Ana Sayfa
          </li>
          <li className={currentPage === 'garden' ? 'active' : ''} onClick={() => {setCurrentPage('garden'); setIsMenuOpen(false);}}>
            <span className="icon">🌱</span> Canlı Bahçem
          </li>
          <li className={currentPage === 'warehouse' ? 'active' : ''} onClick={() => {setCurrentPage('warehouse'); setIsMenuOpen(false);}}>
            <span className="icon">📦</span> Ambarım
          </li>
          <li className={currentPage === 'info' ? 'active' : ''} onClick={() => {setCurrentPage('info'); setIsMenuOpen(false);}}>
            <span className="icon">📖</span> Gübre Rehberi
          </li>
          <li className={currentPage === 'regions' ? 'active' : ''} onClick={() => {setCurrentPage('regions'); setIsMenuOpen(false);}}>
            <span className="icon">🌍</span> Bölge Rehberi
          </li>
          <li className={currentPage === 'notes' ? 'active' : ''} onClick={() => {setCurrentPage('notes'); setIsMenuOpen(false);}}>
            <span className="icon">📝</span> Bahçe Notlarım
          </li>
          <li className={currentPage === 'about' ? 'active' : ''} onClick={() => {setCurrentPage('about'); setIsMenuOpen(false);}}>
            <span className="icon">ℹ</span> Hakkımızda
          </li>

          {/* Hesaptan çıkış yapmayı saglayan kırmızı vurgulu buton. */}
          <li onClick={handleLogout} style={{ marginTop: '30px', color: '#d32f2f', borderTop: '1px solid #eee', paddingTop: '15px', fontWeight: 'bold' }}>
            <span className="icon">🚪</span> Hesaptan Çıkış Yap
          </li>
        </ul>
      </aside>

      <main>
        {/* ANA SAYFAM */}
        {currentPage === 'home' && (
          <div className="plant-grid"> {/* Kartların yan yana düzgünce sıralanmasını sağlayan CSS Grid ızgara kutusu */}
            {plantsData.map((plant) => ( // plantsData dizisindeki her bir bitki için bir kart yapıyoruz. Her kartın benzersiz olması için bitkinin ID'sini kullanıyoruz.
              <div key={plant.id} className="plant-card"> 
                <div className="plant-image">{plant.emoji}</div> 
                <h4>{plant.name}</h4>
                <p className="short-desc">{plant.info}</p>
                <div className="card-actions">
                  <button className="grow-btn" onClick={() => startGrowing(plant)}>Yetiştir</button> {/*Kartın içindeki "Yetiştir" butonu, tıklandığında `startGrowing` fonksiyonunu çağırarak o bitkinin ekim sürecini başlatır.*/}
                  <button onClick={() => viewDetails(plant)} className="detail-link" style={{ background: 'none', border: 'none', color: '#2e7d32', textDecoration: 'underline', cursor: 'pointer' }}>
                    Detaylı Bilgi
                  </button> {/*tıklayınca o bitkinin detay sayfasına geçiş yapar.*/}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* DETAY SAYFAM */}
        {currentPage === 'detail' && selectedPlant && ( //selectedPlant durumunda geçerli bir bitki objesi varsa detay sayfasını gösteririz. Bu sayfa kullanıcının ana sayfadaki herhangi bir bitkinin Detaylı bilgi butonuna tıklamasıyla açılır ve o bitkinin tüm detaylarını gösterir
          <div className="detail-page-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <button onClick={() => setCurrentPage('home')} style={{ marginBottom: '20px', padding: '10px', background: '#7bbbf4', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              ⬅ Ana Sayfaya Dön
            </button>
            <div style={{ background: 'white', padding: '30px', borderRadius: '15px', boxShadow: '0 4px 10px rgba(0,0,0,0.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderBottom: '2px solid #edea4f', paddingBottom: '20px', marginBottom: '20px' }}>
                <span style={{ fontSize: '80px' }}>{selectedPlant.emoji}</span>{/* Dev boyutta bitki emojisi */}
                <div>
                  <h2 style={{ fontSize: '2rem', margin: 0, color: '#2e7d32' }}>{selectedPlant.name}</h2>
                  <p style={{ margin: '5px 0', color: 'gray' }}>Hasat Süresi: Ortalama {selectedPlant.growthTime} Gün</p>{/* Bitkinin olgunlaşması için gereken gün sayısı */}
                </div>
                {/* Detay sayfasında da "Hemen Yetiştir" butonu, kullanıcıyı ekim sürecini başlatmaya teşvik eder. */}
                <button onClick={() => startGrowing(selectedPlant)} className="grow-btn" style={{ marginLeft: 'auto', padding: '15px 30px', fontSize: '1.1rem' }}>Hemen Yetiştir</button>
              </div>
               {/* Bitkinin detaylı bilgilerini bölümlere ayırarak gösteren kartlarımız. */}
              <div style={{ display: 'grid', gap: '20px', lineHeight: '1.6' }}>
                <div style={{ background: '#f1f8e9', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#2e7d32' }}>🌱 Nasıl Yetiştirilir?</strong>
                  <p>{selectedPlant.details.yetistirme}</p>
                </div>
                <div style={{ background: '#fff3e0', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#e65100' }}>☀️ İklim Koşulları:</strong>
                  <p>{selectedPlant.details.iklim}</p>
                </div>
                <div style={{ background: '#e3f2fd', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#1565c0' }}>🌍 Yetiştiği Bölgeler:</strong>
                  <p>{selectedPlant.details.bolge}</p>
                </div>
                <div style={{ background: '#efebe9', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#5d4037' }}>🪹 Gübre Kullanımı:</strong>
                  <p>{selectedPlant.details.gubre}</p>
                </div>
                <div style={{ background: '#ffebee', padding: '15px', borderRadius: '8px' }}>
                  <strong style={{ color: '#c62828' }}>🐛 Hastalık ve Riskler:</strong>
                  <p>{selectedPlant.details.riskler}</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CANLI BAHÇEM */}
        {currentPage === 'garden' && ( 
          <div className="garden-page">
            <div className="garden-header">
              {/* Canlı Bahçe sayfasının başlığı, aktif kullanıcının adıyla kişiselleştirilmiş bir şekilde gözüküraynı zamanda o günün tarihini de gösterir. */}
              <h2 style={{ justifyContent: 'space-between', color: '#058600' }}>🌱 {currentUser}'ın Canlı Bahçesi</h2>
              <p>Bugün: {new Date().toLocaleDateString('tr-TR')}</p> {/* Bugünün tarihini Türkiye formatında gösterir */}
              <img src="ElmaBahcesi.jpeg" alt="Elma Bahçesi" style={{ width: '50%', height: 'auto', borderRadius: '10px' }} /> {/* Tatlış duruyo diye eklediğim resim */}
            </div>
            <button onClick={() => setCurrentPage('home')} style={{ marginBottom: '20px', padding: '10px', background: '#61c373f5', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>
              ⬅ Ana Sayfaya Dön
            </button>
            {myGarden.length === 0 ? ( // Eğer canlı bahçede hiç bitki yoksa, kullanıcıya henüz bir tohum ekmediğini söyleyen ve onu ana sayfaya yönlendiren bir mesaj gösterir.
              <div className="empty-garden" style={{ textAlign: 'center', marginTop: '50px' }}>
                <p>Henüz bir tohum ekmedin.</p> {/* Kullanıcıya henüz bir tohum ekmediğini söyleyen bilgilendirme */}
                <button onClick={() => setCurrentPage('home')} className="grow-btn" style={{ padding: '10px 20px', marginTop: '10px' }}>Tohum Seç</button>
              </div>
            ) : ( 
              // Canlı bahçede ekili bitkiler varsa, onları gösteren ızgara düzeni açılır.
              <div className="garden-grid">
                {myGarden.map((plant) => {// map: liste halindeki bitkileri ekrana basar.
                  const today = new Date(); // Her bitkinin ekim tarihinden bugüne kadar geçen süreyi hesaplamak için bugünün tarihini alıyoruz.
                  const diffTime = Math.abs(today - new Date(plant.plantingDate)); // Her bitkinin ekim tarihinden bugüne kadar geçen süreyi milisaniye cinsinden hesaplıyoruz.
                  const daysPassed = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // Geçen süreyi gün cinsine çeviriyoruz. +1 ekleyerek ekim gününü de tam gün olarak sayıyoruz (yani ekilen gün de büyüme süresine dahil oluyor).
                  const progress = Math.min(Math.round((daysPassed / plant.growthTime) * 100), 100); // Bitkinin büyüme süresine göre ne kadar büyüdüğünü yüzde olarak hesaplıyoruz. Eğer geçen gün sayısı büyüme süresini aşarsa yüzdeyi 100 ile sınırlandırıyoruz.
                  const isReady = daysPassed >= plant.growthTime;// Eğer bitkinin toprakta geçirdiği gün sayısı, onun büyüme süresine ulaştıysa veya geçtiyse bu bitki hasat zamanına gelmiş demektir.

                  return (
                    // Eğer bitki hasat zamanına ulaştıysa kartın etrafına yeşil parıltılı efekt vermesi için ready-to-harvest CSS'ini ekledik
                    <div key={plant.id} className={`garden-card ${isReady ? 'ready-to-harvest' : ''}`}>
                      <div className="card-badge">
                        {/* Eğer bitki hasat zamanına gelmişse "HASAT ZAMANI" yazısı ve yeşil tik emojisi gösterir, değilse geçen gün sayısını ve toplam büyüme süresini gösterir. */}
                        {isReady ? "✅ HASAT ZAMANI" : `Gün: ${daysPassed} / ${plant.growthTime}`}
                      </div>
                      <button 
                      // SAĞ ÜSTTEKİ ACİL KALDIRMA (ÇÖP) BUTONU: Ekin kurursa bahçeden kalıcı olarak silmeye yarar 
                        onClick={() => removePlant(plant)}
                        title="Bozulmuşsa Kaldır"
                        style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(255, 0, 0, 0.1)', border: 'none', borderRadius: '50%', width: '25px', height: '25px', color: '#d32f2f', cursor: 'pointer', fontSize: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                      >×</button>
                      <div className="plant-emoji-large">{plant.emoji}</div>
                      <h3>{plant.name}</h3>
                      {/* Büyüme durumunu gösteren ilerleyen çubuk */}
                      <div className="progress-container">
                        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
                        <span className="progress-text">%{progress} Büyüdü</span>
                      </div>
                       {/* Hava durumuna göre bitkinin durumunu anlatan bilgilendirme mesajı. Eğer hava yağmurluysa toprağın sulandığını ve bitkinin rahatladığını söyler,
                       değilse toprağı kontrol etmeyi hatırlatır.*/}
                      <div className="garden-alert">
                        {weather.includes("Yağmurlu") 
                          ? "🌧️ Doğa bitkini suluyor, rahatla!" 
                          : isReady ? "🧺 Hasat vakti geldi!" : "💧 Toprağı kontrol etmeyi unutma."}
                      </div>

                      {isReady && (// Eğer bitki hasat zamanına gelmişse, "Hemen Hasat Et!" butonu gösterilir.
                          <button className="harvest-action-btn" onClick={() => harvestPlant(plant)}> 
                            Hemen Hasat Et!
                          </button>
                      )}
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        )}

        {/* AMBARIM */}
        {currentPage === 'warehouse' && (
          <div className="warehouse-page" style={{ padding: '20px', maxWidth: '900px', margin: '0 auto' }}>
            <div className="garden-header">
              <h2 style={{ textAlign: 'center', color: '#292929' }}>📦 {currentUser}'ın Ambarı</h2>
              <p>Depolanan Ürün Sayısı: {harvestedItems.length}</p>{/* Ambardaki toplam mahsul sayısını yazar */}
            </div>

            {harvestedItems.length === 0 ? ( // Ambar boş mu dolu mu kontrolü 
              <div style={{ textAlign: 'center', marginTop: '50px', padding: '40px', background: '#f5f5f5', borderRadius: '15px' }}>
                <p>Ambarın henüz boş. Hasat ettiğin ürünler burada saklanacak.</p>
                <button onClick={() => setCurrentPage('garden')} className="grow-btn">Bahçeme Git</button>
              </div>
            ) : ( // Ambar doluysa, hasat edilen ürünleri gösteren bir tablo açılır.
              <div style={{ overflowX: 'auto', background: 'white', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.1)' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                  <thead>
                    <tr style={{ background: '#83e38e', color: 'black' }}>
                      <th style={{ padding: '15px', textAlign: 'center' }}>Bitki</th>
                      <th style={{ padding: '15px', textAlign: 'center' }}>İsim</th>
                      <th style={{ padding: '15px', textAlign: 'center' }}>Hasat Tarihi</th>
                      <th style={{ padding: '15px', textAlign: 'center' }}>Durum</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* Ambarda saklanan her bir hasat edilmiş ürün için tablo satırı oluşturulur. Her satırda ürünün emojisi, ismi, hasat tarihi ve durumu gösterilir. */}
                    {harvestedItems.map((item, index) => ( // index: her bir ürünün benzersiz sırasını verir, item: ürünün detaylarını içeren obje
                      <tr key={index} style={{ borderBottom: '1px solid #eee' }}>
                        <td style={{ padding: '15px', textAlign: 'center', fontSize: '35px' }}>{item.emoji}</td>
                        <td style={{ padding: '15px', fontWeight: 'bold', color: '#2e7d32' }}>{item.name}</td>
                        <td style={{ padding: '15px' }}>{item.harvestDate}</td>{/* Bitkinin ambara giriş yaptığı hasat takvim tarihi */}
                        <td style={{ padding: '15px' }}>
                          <span style={{ background: '#c8e6c9', color: '#1b5e20', padding: '6px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 'bold' }}>
                            ✅ {item.status}{/* hasat edilen ürünün durumu */}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* NOTLARIM */}
        {currentPage === 'notes' && (
          <div className="notes-container" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <div className="garden-header" style={{ textAlign: 'center', marginBottom: '30px' }}>
              <h2 style={{ color: '#2e7d32' }}>📝 {currentUser}'ın Günlüğü</h2>
              <p>Toprağın fısıltılarını buraya not et...</p>
            </div>
          {/* Not Yazma Alanının Kutusunun Tasarımı */}
            <div style={{ background: 'white', padding: '20px', borderRadius: '15px', boxShadow: '0 4px 15px rgba(0,0,0,0.05)', marginBottom: '30px' }}>
              <textarea 
                value={noteInput} // Kullanıcı not giriş alanına yazdıkça `noteInput` durumunu günceller,
                onChange={(e) => setNoteInput(e.target.value)} // böylece ekle butonuna basıldığında en güncel yazı alınır.
                placeholder="Örn: Bugün domateslere kalsiyum gübresi verdim..."
                style={{ width: '100%', border: '1px solid #ddd', borderRadius: '10px', padding: '15px', minHeight: '100px', fontSize: '15px', outline: 'none', resize: 'none', boxSizing: 'border-box' }}
              />
              {/* Tıklanınca metni günlüğe ekler */}
              <button onClick={addNote} style={{ width: '100%', marginTop: '10px', padding: '12px', background: '#2e7d32', color: 'white', border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold' }}>
              Notu Kaydet
              </button>
            </div>
            {/* Yazılan notların sıralandığı alan. Not yoksa kullanıcıya not tutulmadığını söyleyen bir mesaj gösterir (her notu kart şeklinde gösterir9 */}
            <div className="notes-grid" style={{ display: 'grid', gap: '15px' }}>
              {notes.length === 0 ? ( // Eğer not yoksa gösterilecek mesaj
                <p style={{ textAlign: 'center', color: '#888' }}>Henüz bir not tutulmamış.</p>
              ) : (
                notes.map(note => (// Her kartta notun yazıldığı tarih, notun içeriği ve sağ üst köşede o notu silmeye yarayan bir çarpı (X) butonu bulunur. */}
                  <div key={note.id} style={{ background: '#f1f8e9', padding: '20px', borderRadius: '12px', borderLeft: '5px solid #2e7d32', position: 'relative' }}>
                    <span style={{ fontSize: '12px', color: '#666', display: 'block', marginBottom: '10px' }}>📅 {note.date}</span>
                    <p style={{ margin: 0, color: '#333', lineHeight: '1.5' }}>{note.text}</p>
                    <button 
                      onClick={() => deleteNote(note.id)}
                      style={{ position: 'absolute', top: '10px', right: '10px', background: 'none', border: 'none', color: '#c62828', cursor: 'pointer', fontSize: '18px' }}>
                      ×
                    </button>
                  </div>
                ))
              )}
            </div>
          </div>
        )}

       {/* STATİK REHBER BİLEŞENLERİ KONTROLÜ */}
        {currentPage === 'info' && <Bilgiler />} {/* Sayfa durumu 'info' ise Gübre Bilgileri rehber bileşenini render eder */}
        {currentPage === 'regions' && <Bolgeler />} {/* Sayfa durumu 'regions' ise Bölge Rehberi bileşenini render eder */}
        {currentPage === 'about' && <Hakkimizda />} {/* Sayfa durumu 'about' ise Hakkımızda bileşenini render eder */}
      </main>

      <footer className="farm-footer">
        <div className="footer-container">
          <div className="footer-brand-area">
            <h2 className="footer-logo">Farm<span>Flow</span></h2>
            <p className="footer-motto">Doğa ve Teknolojinin Dijital Dengesi</p>
          </div>
          
          <div className="footer-content-wrapper">
            <div className="footer-contact-info">
              <div className="contact-row">
                <span className="label">KONUM:</span>
                <span className="value">İstanbul Gelişim Üniversitesi</span>
              </div>
              <div className="contact-row">
                <span className="label">E-POSTA:</span>
                <span className="value">yagmur.dogan1@ogr.gelisim.edu.tr</span>
              </div>
            </div>
             {/* Sosyal medya bağlantıları: GitHub ve LinkedIn profillerime yönlendiren linkler. */}
            <div className="footer-socials">
              <a href="https://github.com/yagmurdamlasiy" target="_blank" rel="noreferrer" className="social-icon github">
                <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" />
                <span>GitHub</span>
              </a>
              <a href="https://www.linkedin.com/in/yağmur-doğan-0809213a9" target="_blank" rel="noreferrer" className="social-icon linkedin">
                <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>

          <div className="footer-bottom-bar" style={{ color: 'gray', padding: '20px', textAlign: 'center' }}>
            <p>© 2026 FarmFlow Dönem Sonu Projesi | Geliştiren: <strong>Yağmur Doğan</strong></p>
          </div>
        </div>
      </footer>
    </div>
  );
}

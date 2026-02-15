# 📝 Task Planner

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![License](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)

**Modern, minimalist ve kullanıcı dostu görev yönetim uygulaması.**

React 19 ve Tailwind CSS kullanılarak geliştirilen bu proje, kullanıcıların günlük görevlerini organize etmelerine yardımcı olur.


## Özellikler

Bu proje, modern web geliştirme standartlarına uygun olarak aşağıdaki yeteneklere sahiptir:
* **Tam CRUD Desteği:** Görev Ekleme, Listeleme, Güncelleme ve Silme işlemleri.
* **Akıllı Filtreleme:** Görevleri "Tümü", "Aktif" ve "Tamamlanan" olarak filtreleyebilme.
* **Kalıcı Veri (Persistence):** `LocalStorage` entegrasyonu sayesinde sayfa yenilense bile veriler kaybolmaz.
* **Soft UI Tasarım:** Pastel renkler ve yumuşak gölgelerle modern görünüm.
* **Responsive Yapı:** Mobil ve masaüstü cihazlarla tam uyumlu.
* **Durum Yönetimi:** React Hooks (`useState`, `useEffect`) ile optimize edilmiş state yönetimi.

---

## Teknolojiler ve Kütüphaneler

Proje geliştirilirken kullanılan teknoloji yığını:

* **Framework:** [React.js](https://reactjs.org/) (Vite ile oluşturuldu)
* **Stil & Tasarım:** [Tailwind CSS](https://tailwindcss.com/)
* **İkon Seti:** [React Icons](https://react-icons.github.io/react-icons/)
* **Dil:** JavaScript (ES6+)
* **Paket Yöneticisi:** NPM

---

## Kurulum ve Çalıştırma

Projeyi yerel makinenizde çalıştırmak için aşağıdaki adımları izleyin:

1.  **Projeyi Klonlayın**
    ```bash
    git clone [https://github.com/KULLANICI_ADINIZ/task-planner.git](https://github.com/KULLANICI_ADINIZ/task-planner.git)
    cd task-planner
    ```

2.  **Gerekli Paketleri Yükleyin**
    ```bash
    npm install
    ```

3.  **Uygulamayı Başlatın**
    ```bash
    npm run dev
    ```

4.  **Tarayıcıda Görüntüleyin**
    Terminalde verilen linke (genellikle `http://localhost:5173`) tıklayarak uygulamayı açın.

---

## Dosya Yapısı

Proje, sürdürülebilirlik ve ölçeklenebilirlik için modüler bir yapıda tasarlanmıştır:

```text
src/
├── Components/       # Yeniden kullanılabilir UI bileşenleri
│   ├── TaskForm.jsx  # Görev ekleme ve filtreleme alanı
│   └── TaskList.jsx  # Görev listesi ve düzenleme işlemleri
├── Interfaces/       # Veri modelleri ve yardımcı fonksiyonlar
│   └── Task.js       # Görev objesi oluşturucu (Factory Pattern)
├── Pages/            # Sayfa düzenleri
│   └── Main.jsx      # Ana sayfa ve state yönetimi
├── App.jsx           # Ana uygulama konteyneri
└── main.jsx          # Uygulama giriş noktası
```

Netlify linki: task-planner-ennur.netlify.app

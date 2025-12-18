# TravelTrucks - Karavan Kiralama Platformu

🚐 Modern React uygulaması ile karavan kiralama hizmetleri sunan e-ticaret platformu.

![TravelTrucks](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7.3-blueviolet)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Proje Hakkında

TravelTrucks, kullanıcıların çeşitli karavan türlerini keşfetmesine, filtrelemesine ve rezervasyon yapmasına olanak sağlayan tam özellikli web uygulamasıdır. Figma tasarımına %100 uygun şekilde geliştirilmiştir.

**Canlı Demo**: [TravelTrucks Netlify](https://traveltruck-demo.netlify.app)

## ✨ Temel Özellikler

### 🏠 Ana Sayfa
- Hero banner ile etkileyici başlık
- Arka plan görseli
- CTA "View Now" butonu
- Katalog sayfasına yönlendirme

### 🔍 Gelişmiş Filtreler
- **Konum Filtrelemesi**: Şehir bazında arama
- **Araç Tipi Seçimi**: 
  - Van
  - Fully Integrated
  - Alcove
- **Ekipman Filtreleri**:
  - AC (Klima)
  - Automatic (Otomatik Vites)
  - Kitchen (Mutfak)
  - TV
  - Bathroom (Banyo)
  - Refrigerator (Buzdolabı)
  - Microwave (Mikrodalga)
  - Gas (Gaz)
  - Water (Su)

### 📱 Karavan Kartları
- Horizontal layout (resim sol, bilgiler sağ)
- Yüksek kaliteli resimler
- Fiyat gösterimi (€8000.00 formatı)
- ⭐ Değerlendirme ve yorum sayısı
- 📍 Konum bilgisi
- 🏷️ Özellikler badges
- ❤️ Favoriye ekle toggle
- "Show more" detay butonu

### 🔍 Detay Sayfası
- **Galeri**:
  - Ana resim (full-width)
  - 4 adet thumbnail seçimi
  - Tıklanabilir thumbnail gösterimi
  
- **Bilgiler Tabs**:
  - **Features Tab**:
    - Özellikler badge'leri
    - Vehicle specifications tablosu (Form, Length, Width, Height, Tank, Consumption)
  - **Reviews Tab**:
    - Average rating gösterimi
    - Kullanıcı yorumları (ad, rating, comment)
    - Avatar ile yorum gösterimi

### 📝 Rezervasyon Formu
- Form Validasyonu:
  - Ad (zorunlu)
  - Email (zorunlu)
  - Booking Date (zorunlu)
  - Comment (opsiyonel)
- Success Notification
- Form Reset

### ❤️ Favoriler Sistemi
- localStorage ile persistent veri saklama
- ❤️/🤍 toggle
- Header'da favoriler counter
- Sayfa yenilemede veri korunma

### 📊 Sayfalandırma
- Initial 8 karavan gösterimi
- "Load more" butonu ile 4'er 4'er yükleme
- Smooth loading indicator

### 🎨 Responsive Design
- Mobile-first yaklaşım
- Tablet uyumlu layout
- Desktop optimizasyonu
- Figma tasarımına %100 uyum

## 🛠️ Teknoloji Stack

| Teknoloji | Versiyon | Kullanım |
|-----------|----------|----------|
| React | 18+ | UI Framework |
| Vite | 7.3+ | Build Tool |
| Redux Toolkit | - | State Management |
| React Router | v6 | Routing |
| Tailwind CSS | - | Styling |
| Axios | - | API İstekleri (opsiyonel) |

## 📦 Kurulum

### Gereksinimler
- Node.js 16+
- npm 7+ veya yarn

### Adım Adım Kurulum

```bash
# 1. Projeyi klonla
git clone https://github.com/YOUR-USERNAME/traveltrucks.git
cd traveltrucks

# 2. Bağımlılıkları yükle
npm install

# 3. Development sunucuyu başlat
npm run dev

# 4. Tarayıcıda aç
# http://localhost:5173 otomatik açılacak
```

## 🚀 Production Build

```bash
# Build oluştur (dist/ klasörü oluşturulur)
npm run build

# Production preview
npm run preview

# Netlify'a deploy et
# dist/ klasörünü Netlify'a sürükle veya connect et
```

## 📁 Proje Yapısı

```
traveltrucks/
├── public/
│   └── images/
│       ├── 1.png          # Karavan resmi
│       ├── 2.png          # Karavan iç mekan
│       ├── 3.png          # Karavan iç mekan
│       ├── 4.png          # Karavan dış mekan (Mavericks)
│       ├── 5.png          # Mighty Class C
│       ├── 6.png          # Road Bear
│       ├── 7.png          # Kuga Camper
│       └── 8.png          # Mavericks alternatif
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Ana sayfa - Hero banner
│   │   ├── Catalog.jsx        # Katalog - Filtreler + Kartlar
│   │   └── CamperDetail.jsx   # Detay - Galeri + Tabs + Form
│   │
│   ├── components/
│   │   ├── Header.jsx         # Navigation + Logo + Favorites
│   │   ├── FilterPanel.jsx    # Filtreler (Konum, Tip, Ekipman)
│   │   ├── CamperCard.jsx     # Horizontal Karavan Kartı
│   │   ├── ReservationForm.jsx # Rezervasyon Formu
│   │   └── ReviewSection.jsx  # Yorumlar + Rating
│   │
│   ├── store/
│   │   ├── store.js           # Redux Store Konfigurasyonu
│   │   └── slices/
│   │       ├── campersSlice.js      # Karavan State + API
│   │       ├── filtersSlice.js      # Filter State
│   │       └── favoritesSlice.js    # Favoriler State
│   │
│   ├── App.jsx                # Main Component + Routing
│   ├── App.css                # Global Styles
│   ├── index.css              # Tailwind + Global CSS
│   └── main.jsx               # React Entry Point
│
├── index.html                 # HTML + Meta Tags
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind Configuration
├── postcss.config.js          # PostCSS Configuration
├── vite.config.js             # Vite Configuration
├── .gitignore                 # Git Ignore Rules
└── README.md                  # Bu Dosya
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary**: `#E1644E` (Kırmızı)
- **Dark Text**: `#101010`
- **Light Gray**: `#F2F4F7`, `#F7F7F7`
- **Border**: `#DADDE1`

### Typography
- **Başlıklar**: Bold, Large (text-4xl, text-3xl)
- **Body Text**: Regular, Medium (text-base, text-sm)
- **Buttons**: Bold, Rounded

### Components
- **Input Fields**: bg-gray-100, rounded-lg, border
- **Buttons**: bg-[#E1644E], rounded-full, cursor: pointer
- **Cards**: Rounded-2xl, shadow-md, hover:shadow-lg
- **Tabs**: Border-bottom underline, active border-[#E1644E]

## 🔄 State Management (Redux)

### Slices

#### `campersSlice.js`
```javascript
{
  list: [],           // Karavan listesi
  selectedCamper: {}, // Seçili karavan detayı
  loading: false,     // Loading state
  error: null         // Hata mesajı
}
```

#### `filtersSlice.js`
```javascript
{
  location: '',       // Konum filtresi
  type: '',          // Araç tipi filtresi
  features: {        // Ekipman filtreleri
    ac: false,
    automatic: false,
    kitchen: false,
    // ... diğer özellikler
  }
}
```

#### `favoritesSlice.js`
```javascript
{
  items: []          // Favori karavanlar (localStorage'da persist)
}
```

## 📡 API Entegrasyonu

Şu an mock data kullanılmaktadır. Backend API bağlantısı için:

```javascript
// campersSlice.js içinde fetchCampers thunk'ını güncelleyin
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters) => {
    const response = await axios.get('YOUR_API_URL/campers', {
      params: filters
    });
    return response.data;
  }
);
```

## 🔐 Çevre Değişkenleri

`.env.local` dosyası oluştur (opsiyonel):

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=TravelTrucks
```

## 📊 Loading Indicator

- Karavan listesi yüklenirken spinner gösterilir
- Detay sayfası yüklenirken loading spinner görülür
- Smooth transitions ve user feedback

## ♿ Accessibility

- Semantik HTML5 elementleri
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text tüm görsellerde

## 🧪 Testing (Gelecek)

```bash
# Unit tests (TODO)
npm run test

# E2E tests (TODO)
npm run test:e2e
```

## 📝 Git Commit Mesajları

Proje anlamlı commit mesajları içermektedir:

```
feat: add home page with hero banner
feat: implement catalog with filters
feat: add camper detail page with gallery
feat: implement reservation form
feat: add favorites with localStorage
docs: add README.md
style: improve code quality
fix: resolve filter bugs
```

## 🚀 Deployment

### Netlify Deploy

1. GitHub reposuna push et
2. https://app.netlify.com'a git
3. "New site from Git" seç
4. GitHub authorize et
5. Repository seç
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy et

### Vercel Deploy

```bash
npm install -g vercel
vercel
```

## 🤝 Katkıda Bulunma

1. Fork repo
2. Feature branch oluştur (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit et (`git commit -m 'feat: add amazing feature'`)
4. Branch'e push et (`git push origin feature/AmazingFeature`)
5. Pull Request aç

## 📄 Lisans

Bu proje MIT Lisansı altında dağıtılmaktadır. Detaylar için [LICENSE](LICENSE) dosyasını görüntüleyin.

## 👤 Yazar

**Furkan** - Full Stack Developer
- GitHub: [@furkan-username](https://github.com/furkan-username)
- Email: furkan@example.com
- Portfolio: [Portfolio Link](https://portfolio.com)

## 📞 İletişim & Destek

Sorular veya öneriler için lütfen:
- GitHub Issues açın
- Email gönder: furkan@example.com
- Twitter: [@furkan](https://twitter.com/furkan)

## 📚 Kaynaklar

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

## 🎓 Eğitim Projesi

Bu proje GOIT Education Full Stack Developer programı kapsamında geliştirilmiştir.

---

<div align="center">

**⭐ Eğer bu proje faydalı olduysa yıldız vermeyi unutmayın!**

[GitHub](https://github.com/furkan-username/traveltrucks) • [Canlı Demo](https://traveltruck-demo.netlify.app) • [Portfolio](https://portfolio.com)

**Last Updated**: December 2025

</div>
EOF
cat /mnt/user-data/outputs/README.md
Output

# TravelTrucks - Karavan Kiralama Platformu

🚐 Modern React uygulaması ile karavan kiralama hizmetleri sunan e-ticaret platformu.

![TravelTrucks](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-7.3-blueviolet)
![Redux](https://img.shields.io/badge/Redux-Toolkit-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4)
![License](https://img.shields.io/badge/License-MIT-green)

## 📋 Proje Hakkında

TravelTrucks, kullanıcıların çeşitli karavan türlerini keşfetmesine, filtrelemesine ve rezervasyon yapmasına olanak sağlayan tam özellikli web uygulamasıdır. Figma tasarımına %100 uygun şekilde geliştirilmiştir.

**Canlı Demo**: [TravelTrucks Netlify](https://traveltruck-demo.netlify.app)

## ✨ Temel Özellikler

### 🏠 Ana Sayfa
- Hero banner ile etkileyici başlık
- Arka plan görseli
- CTA "View Now" butonu
- Katalog sayfasına yönlendirme

### 🔍 Gelişmiş Filtreler
- **Konum Filtrelemesi**: Şehir bazında arama
- **Araç Tipi Seçimi**: 
  - Van
  - Fully Integrated
  - Alcove
- **Ekipman Filtreleri**:
  - AC (Klima)
  - Automatic (Otomatik Vites)
  - Kitchen (Mutfak)
  - TV
  - Bathroom (Banyo)
  - Refrigerator (Buzdolabı)
  - Microwave (Mikrodalga)
  - Gas (Gaz)
  - Water (Su)

### 📱 Karavan Kartları
- Horizontal layout (resim sol, bilgiler sağ)
- Yüksek kaliteli resimler
- Fiyat gösterimi (€8000.00 formatı)
- ⭐ Değerlendirme ve yorum sayısı
- 📍 Konum bilgisi
- 🏷️ Özellikler badges
- ❤️ Favoriye ekle toggle
- "Show more" detay butonu

### 🔍 Detay Sayfası
- **Galeri**:
  - Ana resim (full-width)
  - 4 adet thumbnail seçimi
  - Tıklanabilir thumbnail gösterimi
  
- **Bilgiler Tabs**:
  - **Features Tab**:
    - Özellikler badge'leri
    - Vehicle specifications tablosu (Form, Length, Width, Height, Tank, Consumption)
  - **Reviews Tab**:
    - Average rating gösterimi
    - Kullanıcı yorumları (ad, rating, comment)
    - Avatar ile yorum gösterimi

### 📝 Rezervasyon Formu
- Form Validasyonu:
  - Ad (zorunlu)
  - Email (zorunlu)
  - Booking Date (zorunlu)
  - Comment (opsiyonel)
- Success Notification
- Form Reset

### ❤️ Favoriler Sistemi
- localStorage ile persistent veri saklama
- ❤️/🤍 toggle
- Header'da favoriler counter
- Sayfa yenilemede veri korunma

### 📊 Sayfalandırma
- Initial 8 karavan gösterimi
- "Load more" butonu ile 4'er 4'er yükleme
- Smooth loading indicator

### 🎨 Responsive Design
- Mobile-first yaklaşım
- Tablet uyumlu layout
- Desktop optimizasyonu
- Figma tasarımına %100 uyum

## 🛠️ Teknoloji Stack

| Teknoloji | Versiyon | Kullanım |
|-----------|----------|----------|
| React | 18+ | UI Framework |
| Vite | 7.3+ | Build Tool |
| Redux Toolkit | - | State Management |
| React Router | v6 | Routing |
| Tailwind CSS | - | Styling |
| Axios | - | API İstekleri (opsiyonel) |

## 📦 Kurulum

### Gereksinimler
- Node.js 16+
- npm 7+ veya yarn

### Adım Adım Kurulum

```bash
# 1. Projeyi klonla
git clone https://github.com/YOUR-USERNAME/traveltrucks.git
cd traveltrucks

# 2. Bağımlılıkları yükle
npm install

# 3. Development sunucuyu başlat
npm run dev

# 4. Tarayıcıda aç
# http://localhost:5173 otomatik açılacak
```

## 🚀 Production Build

```bash
# Build oluştur (dist/ klasörü oluşturulur)
npm run build

# Production preview
npm run preview

# Netlify'a deploy et
# dist/ klasörünü Netlify'a sürükle veya connect et
```

## 📁 Proje Yapısı

```
traveltrucks/
├── public/
│   └── images/
│       ├── 1.png          # Karavan resmi
│       ├── 2.png          # Karavan iç mekan
│       ├── 3.png          # Karavan iç mekan
│       ├── 4.png          # Karavan dış mekan (Mavericks)
│       ├── 5.png          # Mighty Class C
│       ├── 6.png          # Road Bear
│       ├── 7.png          # Kuga Camper
│       └── 8.png          # Mavericks alternatif
│
├── src/
│   ├── pages/
│   │   ├── Home.jsx           # Ana sayfa - Hero banner
│   │   ├── Catalog.jsx        # Katalog - Filtreler + Kartlar
│   │   └── CamperDetail.jsx   # Detay - Galeri + Tabs + Form
│   │
│   ├── components/
│   │   ├── Header.jsx         # Navigation + Logo + Favorites
│   │   ├── FilterPanel.jsx    # Filtreler (Konum, Tip, Ekipman)
│   │   ├── CamperCard.jsx     # Horizontal Karavan Kartı
│   │   ├── ReservationForm.jsx # Rezervasyon Formu
│   │   └── ReviewSection.jsx  # Yorumlar + Rating
│   │
│   ├── store/
│   │   ├── store.js           # Redux Store Konfigurasyonu
│   │   └── slices/
│   │       ├── campersSlice.js      # Karavan State + API
│   │       ├── filtersSlice.js      # Filter State
│   │       └── favoritesSlice.js    # Favoriler State
│   │
│   ├── App.jsx                # Main Component + Routing
│   ├── App.css                # Global Styles
│   ├── index.css              # Tailwind + Global CSS
│   └── main.jsx               # React Entry Point
│
├── index.html                 # HTML + Meta Tags
├── package.json               # Dependencies
├── tailwind.config.js         # Tailwind Configuration
├── postcss.config.js          # PostCSS Configuration
├── vite.config.js             # Vite Configuration
├── .gitignore                 # Git Ignore Rules
└── README.md                  # Bu Dosya
```

## 🎨 Tasarım Özellikleri

### Renk Paleti
- **Primary**: `#E1644E` (Kırmızı)
- **Dark Text**: `#101010`
- **Light Gray**: `#F2F4F7`, `#F7F7F7`
- **Border**: `#DADDE1`

### Typography
- **Başlıklar**: Bold, Large (text-4xl, text-3xl)
- **Body Text**: Regular, Medium (text-base, text-sm)
- **Buttons**: Bold, Rounded

### Components
- **Input Fields**: bg-gray-100, rounded-lg, border
- **Buttons**: bg-[#E1644E], rounded-full, cursor: pointer
- **Cards**: Rounded-2xl, shadow-md, hover:shadow-lg
- **Tabs**: Border-bottom underline, active border-[#E1644E]

## 🔄 State Management (Redux)

### Slices

#### `campersSlice.js`
```javascript
{
  list: [],           // Karavan listesi
  selectedCamper: {}, // Seçili karavan detayı
  loading: false,     // Loading state
  error: null         // Hata mesajı
}
```

#### `filtersSlice.js`
```javascript
{
  location: '',       // Konum filtresi
  type: '',          // Araç tipi filtresi
  features: {        // Ekipman filtreleri
    ac: false,
    automatic: false,
    kitchen: false,
    // ... diğer özellikler
  }
}
```

#### `favoritesSlice.js`
```javascript
{
  items: []          // Favori karavanlar (localStorage'da persist)
}
```

## 📡 API Entegrasyonu

Şu an mock data kullanılmaktadır. Backend API bağlantısı için:

```javascript
// campersSlice.js içinde fetchCampers thunk'ını güncelleyin
export const fetchCampers = createAsyncThunk(
  'campers/fetchCampers',
  async (filters) => {
    const response = await axios.get('YOUR_API_URL/campers', {
      params: filters
    });
    return response.data;
  }
);
```

## 🔐 Çevre Değişkenleri

`.env.local` dosyası oluştur (opsiyonel):

```env
VITE_API_URL=https://api.example.com
VITE_APP_NAME=TravelTrucks
```

## 📊 Loading Indicator

- Karavan listesi yüklenirken spinner gösterilir
- Detay sayfası yüklenirken loading spinner görülür
- Smooth transitions ve user feedback

## ♿ Accessibility

- Semantik HTML5 elementleri
- ARIA labels
- Keyboard navigation
- Focus states
- Alt text tüm görsellerde

## 🧪 Testing (Gelecek)

```bash
# Unit tests (TODO)
npm run test

# E2E tests (TODO)
npm run test:e2e
```

## 📝 Git Commit Mesajları

Proje anlamlı commit mesajları içermektedir:

```
feat: add home page with hero banner
feat: implement catalog with filters
feat: add camper detail page with gallery
feat: implement reservation form
feat: add favorites with localStorage
docs: add README.md
style: improve code quality
fix: resolve filter bugs
```

## 🚀 Deployment

### Netlify Deploy

1. GitHub reposuna push et
2. https://app.netlify.com'a git
3. "New site from Git" seç
4. GitHub authorize et
5. Repository seç
6. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
7. Deploy et

### Vercel Deploy

```bash
npm install -g vercel
vercel
```

## 🤝 Katkıda Bulunma

1. Fork repo
2. Feature branch oluştur (`git checkout -b feature/AmazingFeature`)
3. Değişiklikleri commit et (`git commit -m 'feat: add amazing feature'`)
4. Branch'e push et (`git push origin feature/AmazingFeature`)
5. Pull Request aç

## 📄 Lisans

Bu proje MIT Lisansı altında dağıtılmaktadır. Detaylar için [LICENSE](LICENSE) dosyasını görüntüleyin.

## 👤 Yazar

**Furkan** - Full Stack Developer
- GitHub: [@furkan-username](https://github.com/furkangoit)
- Email: furkan.celik35@outlook.com

## 📞 İletişim & Destek

Sorular veya öneriler için lütfen:
- GitHub Issues açın
- Email gönder: furkan@example.com
- Twitter: [@furkan](https://twitter.com/furkan)

## 📚 Kaynaklar

- [React Documentation](https://react.dev)
- [Redux Toolkit](https://redux-toolkit.js.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Vite](https://vitejs.dev)
- [React Router](https://reactrouter.com)

## 🎓 Eğitim Projesi

Bu proje GOIT Education Full Stack Developer programı kapsamında geliştirilmiştir.

---

<div align="center">

**⭐ Eğer bu proje faydalı olduysa yıldız vermeyi unutmayın!**

[GitHub](https://github.com/furkangoit/traveltrucks) • [Canlı Demo](https://traveltruck-demo.netlify.app) 

**Last Updated**: December 2025

</div>
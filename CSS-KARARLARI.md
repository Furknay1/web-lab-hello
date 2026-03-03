# CSS Kararlari

## 1. Breakpoint Secimi
- **Neden 640px ve 1024px sectim?** Bu değerler endüstride mobil-tablet ve tablet-masaüstü geçişleri için standart kabul edilen değerlerdir.
- **Icerigim bu noktalarda nasil degisiyor?** 640px'de dikey olan navigasyon ve hakkımda alanı yatay düzene geçer; 1024px'de ise içerik 1200px ile sınırlandırılarak sayfada ortalanır.

## 2. Layout Tercihleri
- **Header icin neden Flexbox sectim?** Navigasyon elemanlarını tek bir eksende (yatayda) kolayca hizalamak ve iki uca yaslamak (`space-between`) için en verimli araç Flexbox'tır.
- **Proje kartlari icin neden Grid sectim?** Kartları iki boyutlu bir düzende (ızgara) tutmak ve farklı ekranlarda hizalamayı bozmadan otomatik sıralamak için Grid tercih edilmiştir.
- **auto-fit mi auto-fill mi kullandim, neden?** `auto-fit` kullandım; bu sayede az sayıda kart olduğunda bile kartlar mevcut alanı kaplayacak şekilde genişleyerek boşluk kalmasını engeller.

## 3. Design Tokens
- **Hangi renk paletini sectim ve neden?** Profesyonel ve ciddi bir görünüm için ana renk olarak koyu lacivert (`#231E3A`) ve temiz bir kontrast için beyaz arka plan seçtim.
- **Spacing skalasini nasil belirledim?** `rem` birimini kullanarak göreceli bir skala oluşturdum; bu sayede kullanıcı tarayıcı fontunu büyüttüğünde boşluklar da orantılı şekilde ölçeklenir.
- **Fluid typography icin clamp degerlerini nasil ayarladim?** `clamp(minimum, ideal, maksimum)` yapısını kullanarak yazı boyutlarının mobil ve masaüstü arasında ekran genişliğine göre akıcı bir şekilde büyümesini sağladım.

## 4. Responsive Stratejiler
- **Mobile-first yaklasimini nasil uyguladim?** CSS dosyamda tüm kuralları önce en küçük ekranlar için yazdım; daha sonra `@media (min-width: ...)` bloklarıyla büyük ekranlara özel geliştirmeler ekledim.
- **Hangi elemanlar breakpoint'lerde degisiyor?** Header'ın dizilimi, hakkımda bölümündeki fotoğrafın konumu ve proje kartlarının bir satırdaki sayısı breakpoint'lerde değişir.
- **Gorsel boyutlari nasil yonettim?** Görsellerin taşmasını önlemek için `max-width: 100%` kullandım ve profil fotoğrafını `aspect-ratio` ile kare tutup `border-radius` ile yuvarlak hale getirdim.
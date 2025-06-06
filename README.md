# RoamiaSIM - eSIM Satış Platformu

Bu proje, Avusturya ve diğer Avrupa ülkeleri için eSIM satışı yapan bir web platformudur.

## Özellikler

- Modern ve kullanıcı dostu arayüz
- Ürün listeleme ve sipariş sistemi
- Admin paneli ile sipariş yönetimi
- Responsive tasarım
- Güvenli ödeme sistemi

## Teknolojiler

- Next.js 14
- TypeScript
- Tailwind CSS
- React
- NextAuth.js (Kimlik doğrulama için)

## Kurulum

1. Projeyi klonlayın:
```bash
git clone https://github.com/yourusername/roamiasim.git
cd roamiasim
```

2. Bağımlılıkları yükleyin:
```bash
npm install
```

3. Geliştirme sunucusunu başlatın:
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

## Admin Paneli

Admin paneline erişmek için:
- URL: [http://localhost:3000/admin/login](http://localhost:3000/admin/login)
- Kullanıcı adı: admin
- Şifre: 450671Me

## Proje Yapısı

```
roamiasim/
├── src/
│   ├── app/
│   │   ├── admin/
│   │   │   ├── dashboard/
│   │   │   └── login/
│   │   ├── api/
│   │   ├── order/
│   │   └── products/
│   ├── components/
│   └── styles/
├── public/
└── package.json
```

## Katkıda Bulunma

1. Bu depoyu fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/amazing-feature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some amazing feature'`)
4. Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. Bir Pull Request oluşturun

## Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Daha fazla bilgi için `LICENSE` dosyasına bakın.

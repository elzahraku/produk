// ============================================
//  CONFIG.JS - Edit semua produk di sini!
// ============================================

const CONFIG = {

  // ── TOKO INFO ──────────────────────────────
  store: {
    name: "ElZ STORE",
    tagline: "Solusi Bot Telegram Terbaik & Terpercaya",
    telegram: "https://t.me/bukan_founder", // Ganti username Telegram kamu
    telegramUsername: "@bukan_founder",       // Ganti username Telegram kamu
    currency: "Rp",
    badge: "⚡ TRUSTED SELLER",
  },

  // ── PRODUK ─────────────────────────────────
  products: [
    {
      id: 1,
      name: "Userbot",
      icon: "🤖",
      category: "Bot",
      description: "Userbot Telegram canggih dengan fitur lengkap. Auto-reply, anti-spam, dan banyak plugin siap pakai.",
      features: ["Auto Reply", "Anti Spam", "Anti gcast, " Auto rep json", "Suppot music bot", "Multi Plugin", "Support 24/7"],
      price: 10000,
      priceLabel: "10.000",
      badge: "POPULER",
      badgeColor: "#ff6b35",
      orderMessage: "Halo, saya ingin order Userbot. Tolong info lebih lanjut!",
    },
    {
      id: 2,
      name: "Force Sub Bot",
      icon: "🔒",
      category: "Bot",
      description: "Bot wajib subscribe sebelum bisa mengakses grup/channel. Efektif tingkatkan member.",
      features: ["Multi Channel", "Custom Pesan", "Auto Kick", "Log Admin"],
      price: 20000,
      priceLabel: "20.000",
      badge: "HOT",
      badgeColor: "#e63946",
      orderMessage: "Halo, saya ingin order Force Sub Bot. Tolong info lebih lanjut!",
    },
    {
      id: 3,
      name: "Ankes Bot",
      icon: "📋",
      category: "Bot",
      description: "Bot ankes & kuesioner otomatis untuk Telegram. Kumpulkan data dengan mudah dan cepat.",
      features: ["Form Custom", "Export Data", "Auto Notif", "Multi Pertanyaan"],
      price: 15000,
      priceLabel: "15.000",
      badge: null,
      badgeColor: null,
      orderMessage: "Halo, saya ingin order Ankes Bot. Tolong info lebih lanjut!",
    },
    {
      id: 4,
      name: "Bot Music",
      icon: "🎵",
      category: "Bot",
      description: "Bot pemutar musik berkualitas tinggi untuk grup Telegram. Support YouTube & Spotify.",
      features: ["YouTube & Spotify", "Queue System", "Lyric Support", "HD Audio"],
      price: 180000,
      priceLabel: "180.000",
      badge: "NEW",
      badgeColor: "#2ec4b6",
      orderMessage: "Halo, saya ingin order Bot Music. Tolong info lebih lanjut!",
    },
    {
      id: 5,
      name: "Tagall Partner",
      icon: "📢",
      category: "Tools",
      description: "Bot tag semua member grup sekaligus. Cocok untuk pengumuman penting dan promosi.",
      features: ["Tag Semua Member", "Cooldown Anti-Ban", "Custom Pesan", "Jadwal Kirim"],
      price: 10000,
      priceLabel: "10.000",
      badge: "POPULER",
      badgeColor: "#ff6b35",
      orderMessage: "Halo, saya ingin order Tagall Partner. Tolong info lebih lanjut!",
    },
    {
      id: 6,
      name: "VIP Payment Gateway",
      icon: "💳",
      category: "Payment",
      description: "Gateway pembayaran otomatis untuk bisnis digital kamu. Support QRIS, Transfer Bank & e-Wallet, Cashify, saweria",
      features: ["QRIS Otomatis", "Transfer Bank", "GoPay & OVO", "Dashboard Laporan"],
      price: 50000,
      priceLabel: "50.000",
      badge: "VIP",
      badgeColor: "#ffd700",
      orderMessage: "Halo, saya ingin order VIP Payment Gateway. Tolong info lebih lanjut!",
    },
    {
      id: 7,
      name: "Push Member",
      icon: "🚀",
      category: "Tools",
      description: "Layanan tambah member Telegram grup/channel secara organik dan aman dari ban.",
      features: ["Member Real", "Anti Ban", "Proses Cepat", "Garansi Refill"],
      price: 30000,
      priceLabel: "30.000",
      badge: "BEST SELLER",
      badgeColor: "#8338ec",
      orderMessage: "Halo, saya ingin order Push Member. Tolong info lebih lanjut!",
    },
    {
      id: 8,
      name: "VPS",
      icon: "🖥️",
      category: "Hosting",
      description: "Virtual Private Server kencang dan stabil untuk hosting bot Telegram kamu 24/7.",
      features: ["Uptime 99.9%", "SSD NVMe", "Bandwidth Unlimited", "IP Dedicated"],
      price: 180000,
      priceLabel: "180.000",
      badge: "STABIL",
      badgeColor: "#06d6a0",
      orderMessage: "Halo, saya ingin order VPS. Tolong info lebih lanjut!",
    },
  ],

  // ── KATEGORI FILTER ────────────────────────
  categories: ["Semua", "Bot", "Tools", "Payment", "Hosting"],

  // ── TAMBAH PRODUK (Template) ───────────────
  // Salin blok di bawah dan tambahkan ke array products di atas:
  /*
  {
    id: 9,                          // ID unik (naikkan angkanya)
    name: "Nama Produk",
    icon: "🔥",                     // Emoji ikon
    category: "Bot",                // Bot | Tools | Payment | Hosting
    description: "Deskripsi produk kamu di sini.",
    features: ["Fitur 1", "Fitur 2", "Fitur 3", "Fitur 4"],
    price: 50000,                   // Harga angka (untuk sorting)
    priceLabel: "50.000",           // Harga tampilan
    badge: "NEW",                   // null jika tidak ada badge
    badgeColor: "#ff6b35",          // null jika tidak ada badge
    orderMessage: "Halo, saya ingin order Nama Produk. Tolong info lebih lanjut!",
  },
  */

};

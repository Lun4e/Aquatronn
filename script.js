/* ==========================================================================
   AQUATRON — Interactive Script & iPhone App Simulator
   Inspired by Orionguide.id Architecture
   ========================================================================== */

// ---------- Screen Metadata for Simulator ----------
const screensData = [
  {
    id: 'home',
    image: 'assets/img/home-v2.png',
    titleId: 'Dashboard Utama & Telemetri Real-time',
    titleEn: 'Main Dashboard & Real-Time Telemetry',
    category: 'telemetry',
    metaId: 'Layar 01 / Dashboard Utama',
    metaEn: 'Screen 01 / Main Dashboard',
    descId: 'Pusat komando terintegrasi yang menampilkan status operasional kapal AquaTron #01 untuk User. Dilengkapi tombol "AI Assistent" di pojok kanan atas untuk membuka asisten cerdas, serta tombol "Detail Status Kapal" untuk melihat telemetri kelistrikan dan baterai LiFePO4 84% dengan solar charging 308 Wp.',
    descEn: 'Integrated command center displaying operational status of vessel AquaTron #01 for User. Features the "AI Assistent" button at the top-right to consult the copilot, and "Detail Status Kapal" button to inspect 84% LiFePO4 battery diagnostics with 308 Wp solar array.',
    highlights: [
      { id: '👉 Klik "AI Assistent" di pojok kanan', en: '👉 Tap "AI Assistent" in top-right' },
      { id: '👉 Klik "Detail Status Kapal" di card', en: '👉 Tap "Detail Status Kapal" on card' },
      { id: 'Total Sampah: 130.6 kg Hari Ini', en: 'Total Waste: 130.6 kg Today' },
      { id: '4 Sensor Kualitas Air Real-time', en: '4 Real-time Water Quality Sensors' }
    ],
    hotspotIndex: 0
  },
  {
    id: 'status',
    image: 'assets/img/status-v2.png',
    titleId: 'Detail Telemetri & Status Hardware Kapal',
    titleEn: 'Vessel Telemetry & Hardware Diagnostics',
    category: 'telemetry',
    metaId: 'Layar 02 / Telemetri Kapal',
    metaEn: 'Screen 02 / Vessel Telemetry',
    descId: 'Memantau metrik kelistrikan dan navigasi armada secara presisi untuk User. Mencakup efisiensi solar array 308 Wp, status koneksi IoT & GPS, radar rute patroli Sungai Musi Sektor 03 - Ilir, dan tombol Back di pojok kiri atas untuk kembali ke Dashboard.',
    descEn: 'Precision monitoring of electrical and navigation metrics for User. Features 308 Wp solar panel array efficiency, GPS & IoT telemetry link, Musi River patrol radar (Sector 03 - Ilir), and a top-left Back button returning to the Dashboard.',
    highlights: [
      { id: '⬅️ Klik tombol Back untuk ke Beranda', en: '⬅️ Tap Back button to return Home' },
      { id: '🗺️ Klik tombol "Peta" ke Waypoint', en: '🗺️ Tap "Peta" button to Waypoint' },
      { id: 'Baterai LiFePO4 84% (308 Wp Solar)', en: 'LiFePO4 Battery 84% (308 Wp Solar)' },
      { id: 'Kecepatan Patroli: 3 km/jam', en: 'Patrol Speed: 3 km/h' }
    ],
    hotspotIndex: 0
  },
  {
    id: 'map',
    image: 'assets/img/map-v2.png',
    titleId: 'Peta Operasional & Waypoint Tracking',
    titleEn: 'Operational Map & Autonomous Waypoints',
    category: 'navigation',
    metaId: 'Layar 03 / Navigasi Otonom',
    metaEn: 'Screen 03 / Autonomous Navigation',
    descId: 'Visualisasi live peta navigasi otonom kapal pembersih di sepanjang Sungai Musi - Palembang. Dilengkapi kontrol kendali patroli (Start, Pause, Dock), serta zonasi geospasial pintar untuk mendeteksi area sampah tinggi (merah), sedang (kuning), dan perairan bersih (hijau).',
    descEn: 'Live GIS mapping for the autonomous cleaning vessel patrol along the Musi River, Palembang. Includes mission controls (Start, Pause, Dock), and smart heat-zone markers for high trash density (red), moderate (yellow), and clean water (green).',
    highlights: [
      { id: 'Kontrol: Start / Pause / Dock', en: 'Controls: Start / Pause / Dock' },
      { id: 'Waypoint Navigasi Otonom', en: 'Autonomous Waypoint Path' },
      { id: 'Zonasi Kerapatan Sampah', en: 'Trash Density Heatmap' },
      { id: 'Pelacakan GPS Akurasi Tinggi', en: 'High Precision GPS Tracking' }
    ],
    hotspotIndex: 1
  },
  {
    id: 'camera',
    image: 'assets/img/camera-v2.png',
    titleId: 'AI Computer Vision: Deteksi Sampah Real-time',
    titleEn: 'AI Computer Vision: Real-Time Trash Detection',
    category: 'ai',
    metaId: 'Layar 04 / Kamera AI YOLOv8',
    metaEn: 'Screen 04 / YOLOv8 AI Camera',
    descId: 'Streaming kamera HD onboard kapal dengan inferensi model YOLOv8 langsung di perangkat edge. Mengidentifikasi, mengklasifikasikan, dan menghitung objek sampah terapung secara otomatis (Plastic 85%, Debris detected, Organic 15%) serta mengarahkan conveyor penampung sampah.',
    descEn: 'Onboard HD camera live stream powered by edge-accelerated YOLOv8 model inference. Instantly identifies, categorizes, and tracks floating river waste (Plastic 85%, Debris detected, Organic 15%) to steer the robotic cleaning conveyors.',
    highlights: [
      { id: 'Edge AI YOLOv8 Model', en: 'Edge AI YOLOv8 Model' },
      { id: 'Klasifikasi: Plastik / Logam / Organik', en: 'Classes: Plastic / Metal / Organic' },
      { id: 'FPS Tinggi & Latensi Rendah', en: 'High FPS & Ultra-Low Latency' },
      { id: 'Tombol "Uji Scanner Kamera AI"', en: 'Toggle "AI Scanner Test" Button' }
    ],
    hotspotIndex: 2
  },
  {
    id: 'analytics',
    image: 'assets/img/analytics-v2.png',
    titleId: 'AI Analytics & Komposisi Sampah Sungai',
    titleEn: 'AI Analytics & River Waste Composition',
    category: 'analytics',
    metaId: 'Layar 05 / Big Data DLH',
    metaEn: 'Screen 05 / Environmental Big Data',
    descId: 'Analisis statistik dan tren pembersihan sampah per jam untuk User. Menyajikan komposisi jenis limbah (Plastik 55% / 71.8 kg, Logam 25% / 32.7 kg, Organik 20% / 26.1 kg), tingkat efisiensi pembersihan hingga 92%, dan pemetaan titik paling tercemar (Area A) untuk laporan instansi DLH.',
    descEn: 'Hourly statistical analysis and river cleanup trend reporting for User. Visualizes waste type breakdown (Plastic 55% / 71.8kg, Metal 25% / 32.7kg, Organic 20% / 26.1kg), cleaning efficiency up to 92%, and hotspot identification (Area A) for environmental agencies.',
    highlights: [
      { id: 'Tren Pembersihan Jam ke Jam', en: 'Hourly Cleanup Trends' },
      { id: 'Porsi Limbah Plastik 55%', en: '55% Plastic Waste Share' },
      { id: 'Efisiensi Pembersihan 92%', en: '92% Cleaning Efficiency' },
      { id: 'Ekspor Data SI-Sungai DLH', en: 'SI-Sungai DLH Data Export' }
    ],
    hotspotIndex: 3
  },
  {
    id: 'ai',
    image: 'assets/img/ai-v2.png',
    titleId: 'AquaTron AI Assistant: Copilot Operasional',
    titleEn: 'AquaTron AI Assistant: Operational Copilot',
    category: 'ai',
    metaId: 'Layar 06 / Asisten AI Cerdas',
    metaEn: 'Screen 06 / Smart AI Assistant',
    descId: 'Asisten virtual berbasis LLM cerdas yang diakses dari tombol kanan atas Dashboard. Menjawab pertanyaan operasional User mengenai sektor Jembatan Ampera, kapasitas tangki sampah (62% / 130.6 kg), status baku mutu pH 7.2, dan rekomendasi rute patroli optimal.',
    descEn: 'Smart LLM-powered virtual assistant accessed via top-right Dashboard button. Answers User questions regarding Ampera Bridge sector, trash capacity (62%), water pH safety standards, and optimal cleaning paths.',
    highlights: [
      { id: '⬅️ Tombol Back ke Dashboard', en: '⬅️ Back button to Dashboard' },
      { id: '📊 Chip Cek Status Baterai & Kapal', en: '📊 Chip: Check Battery & Vessel' },
      { id: '💧 Chip Analisis Kualitas Air', en: '💧 Chip: Water Quality Analytics' },
      { id: 'Dialog Bahasa Alami Cerdas', en: 'Natural Language Interaction' }
    ],
    hotspotIndex: 0
  },
  {
    id: 'auth',
    image: 'assets/img/auth-v2.png',
    titleId: 'Autentikasi Aman & Akses Akun User',
    titleEn: 'Secure Authentication & User Portal',
    category: 'system',
    metaId: 'Layar 07 / Keamanan Sistem',
    metaEn: 'Screen 07 / System Security',
    descId: 'Gerbang otentikasi bertingkat untuk memastikan hanya User terverifikasi dan dinas terkait yang memiliki otoritas mengendalikan kapal otonom. Klik "Masuk" atau "Masuk dengan Google" untuk langsung membuka Dashboard.',
    descEn: 'Multi-level authentication gateway ensuring only authorized Users and city environmental officials can access and control autonomous river vessels. Tap "Masuk" or "Google" to enter the Dashboard.',
    highlights: [
      { id: '👉 Klik "Masuk" untuk membuka Dashboard', en: '👉 Tap "Masuk" to open Dashboard' },
      { id: 'Google One-Tap SSO Terintegrasi', en: 'Integrated Google One-Tap SSO' },
      { id: 'Proteksi Command & Telemetri', en: 'Command & Telemetry Defense' },
      { id: 'Log Audit Keamanan Penuh', en: 'Comprehensive Audit Logs' }
    ],
    hotspotIndex: 4
  },
  {
    id: 'profile',
    image: 'assets/img/profile-v2.png',
    titleId: 'Profil User & Integrasi SI-Sungai DLH',
    titleEn: 'User Profile & Municipal Integration',
    category: 'system',
    metaId: 'Layar 08 / Profil User & Akun',
    metaEn: 'Screen 08 / User Profile & Account',
    descId: 'Profil resmi akun User (Operator Lapangan & Teknisi Drone AI) yang terhubung langsung dengan sistem informasi SI-Sungai Dinas Lingkungan Hidup (DLH) Kota Palembang (AquaTron Smart River System v2.4.1). Menyediakan manajemen kredensial dan tombol keluar sesi.',
    descEn: 'Certified User account profile (Field Operator & AI Drone Technician) directly integrated into Palembang Municipal Environmental Agency (DLH) SI-Sungai cloud (AquaTron Smart River System v2.4.1). Includes account management and sign-out.',
    highlights: [
      { id: 'Integrasi SI-Sungai DLH v2.4.1', en: 'DLH SI-Sungai v2.4.1 Sync' },
      { id: 'Identitas Resmi Akun User', en: 'Certified User Account' },
      { id: 'Tombol "Keluar dari Sesi Operator"', en: 'Sign out button to Login screen' },
      { id: 'Riwayat Log Operasional Lengkap', en: 'Comprehensive History Logs' }
    ],
    hotspotIndex: 4
  }
];

// Current State
let currentScreenIndex = 0;
let currentLang = 'id';
let isAutoPlaying = false;
let autoPlayProgress = 0;
let progressInterval = null;
const AUTO_PLAY_DELAY = 4500;

// ---------- Initialize Simulator ----------
function initSimulator() {
  updateScreen(0);
  renderThumbnails();
  updateClock();
  setInterval(updateClock, 1000);
  
  // Attach Dynamic Island Click
  const island = document.getElementById('dynamicIsland');
  if (island) {
    island.addEventListener('click', () => {
      island.classList.toggle('expanded');
    });
  }
}

// ---------- Update Screen Function ----------
function updateScreen(index) {
  currentScreenIndex = (index + screensData.length) % screensData.length;
  const screen = screensData[currentScreenIndex];

  // Update Slides in iPhone
  document.querySelectorAll('.iphone-slide').forEach((slide, idx) => {
    slide.classList.toggle('active', idx === currentScreenIndex);
  });

  // Update Scanner Overlay for Camera Screen
  const scannerOverlay = document.getElementById('aiScannerOverlay');
  if (scannerOverlay) {
    if (screen.id === 'camera') {
      scannerOverlay.classList.add('active');
    } else {
      scannerOverlay.classList.remove('active');
    }
  }

  // Update Panel Text
  const titleEl = document.getElementById('screenTitle');
  const metaEl = document.getElementById('screenMeta');
  const descEl = document.getElementById('screenDesc');
  const highlightsContainer = document.getElementById('screenHighlights');

  if (titleEl) titleEl.textContent = currentLang === 'en' ? screen.titleEn : screen.titleId;
  if (metaEl) metaEl.textContent = currentLang === 'en' ? screen.metaEn : screen.metaId;
  if (descEl) descEl.textContent = currentLang === 'en' ? screen.descEn : screen.descId;

  // Render highlights
  if (highlightsContainer) {
    highlightsContainer.innerHTML = screen.highlights.map(item => `
      <div class="screen-highlight-chip">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
        <span>${currentLang === 'en' ? item.en : item.id}</span>
      </div>
    `).join('');
  }

  // Update Flow Shortcut Active Status
  updateFlowButtons();

  // Update Thumbnails active class
  document.querySelectorAll('.thumb-card').forEach((thumb, idx) => {
    thumb.classList.toggle('active', idx === currentScreenIndex);
  });
}

function updateFlowButtons() {
  const btnHome = document.getElementById('flowBtnHome');
  const btnAi = document.getElementById('flowBtnAi');
  const btnStatus = document.getElementById('flowBtnStatus');
  const btnMap = document.getElementById('flowBtnMap');

  if (btnHome) btnHome.classList.toggle('active', currentScreenIndex === 0);
  if (btnStatus) btnStatus.classList.toggle('active', currentScreenIndex === 1);
  if (btnMap) btnMap.classList.toggle('active', currentScreenIndex === 2);
  if (btnAi) btnAi.classList.toggle('active', currentScreenIndex === 5);
}

function nextScreen() {
  resetAutoPlayProgress();
  updateScreen(currentScreenIndex + 1);
}

function prevScreen() {
  resetAutoPlayProgress();
  updateScreen(currentScreenIndex - 1);
}

function goToScreen(index) {
  resetAutoPlayProgress();
  updateScreen(index);
}

// ---------- Render Thumbnails ----------
function renderThumbnails() {
  const container = document.getElementById('thumbsList');
  if (!container) return;

  container.innerHTML = screensData.map((screen, idx) => {
    const title = currentLang === 'en' ? screen.titleEn : screen.titleId;
    const shortTitle = title.split(' ')[0] + ' ' + (title.split(' ')[1] || '');
    return `
      <div class="thumb-card ${idx === currentScreenIndex ? 'active' : ''}" onclick="goToScreen(${idx})">
        <div class="thumb-preview-box">
          <img src="${screen.image}" alt="${title}" loading="lazy" />
        </div>
        <span class="thumb-card-name">${shortTitle}</span>
      </div>
    `;
  }).join('');
}

// ---------- Auto-Play Tour ----------
function toggleAutoPlay() {
  isAutoPlaying = !isAutoPlaying;
  const toggleBtn = document.getElementById('autoPlayToggle');
  const toggleText = document.getElementById('autoPlayText');

  if (isAutoPlaying) {
    if (toggleBtn) toggleBtn.classList.add('active');
    if (toggleText) toggleText.textContent = currentLang === 'en' ? 'Pause Tour' : 'Jeda Tour';
    startAutoPlayTimer();
  } else {
    if (toggleBtn) toggleBtn.classList.remove('active');
    if (toggleText) toggleText.textContent = currentLang === 'en' ? 'Auto-Tour' : 'Mulai Auto-Tour';
    stopAutoPlayTimer();
  }
}

function startAutoPlayTimer() {
  stopAutoPlayTimer();
  autoPlayProgress = 0;
  const progressFill = document.getElementById('tourProgressFill');

  progressInterval = setInterval(() => {
    autoPlayProgress += 100 / (AUTO_PLAY_DELAY / 100);
    if (progressFill) progressFill.style.width = `${Math.min(100, autoPlayProgress)}%`;

    if (autoPlayProgress >= 100) {
      autoPlayProgress = 0;
      updateScreen(currentScreenIndex + 1);
    }
  }, 100);
}

function stopAutoPlayTimer() {
  if (progressInterval) clearInterval(progressInterval);
  const progressFill = document.getElementById('tourProgressFill');
  if (progressFill) progressFill.style.width = '0%';
}

function resetAutoPlayProgress() {
  if (isAutoPlaying) {
    startAutoPlayTimer();
  }
}

// ---------- Real-time Clock for iPhone Status Bar ----------
function updateClock() {
  const timeElements = document.querySelectorAll('.status-time');
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
  const timeStr = `${hours}:${minutes}`;

  timeElements.forEach(el => {
    el.textContent = timeStr;
  });
}

// ---------- Language System (Inspired by Orion) ----------
function setLanguage(lang) {
  currentLang = lang;

  // Update all elements with data-lang attributes
  document.querySelectorAll('[data-lang-en]').forEach(el => {
    const text = el.getAttribute(`data-lang-${lang}`);
    if (text) {
      el.innerHTML = text;
    }
  });

  // Update active buttons
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.querySelectorAll('.mobile-lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });

  // Re-render simulator content with new language
  updateScreen(currentScreenIndex);
  renderThumbnails();

  // Save to LocalStorage
  localStorage.setItem('aquatron-lang', lang);
}

// ---------- Interactive AI Copilot Chat Demo in Section ----------
const copilotResponses = {
  id: {
    baterai: "⚡ <b>Status Baterai & Daya:</b> Kapasitas saat ini 84% (Baterai LiFePO4). Pengisian solar panel aktif 308 Wp di bawah sinar matahari optimal. Estimasi durasi operasional tersisa: 5 jam 40 menit.",
    sampah: "🗑️ <b>Status Tangki Sampah:</b> Total sampah terkumpul hari ini 130.6 kg (Kapasitas tangki 62% terisi). Komposisi dominan: 55% limbah botol plastik & 25% kaleng logam. Tangki masih mampu menampung hingga 210 kg sebelum perlu discharge di dermaga.",
    air: "💧 <b>Analisis Sensor Kualitas Air:</b> pH 7.2 (Normal), Kekeruhan 18.4 NTU (Sedang/Aman), TDS 142 ppm, Suhu 28.4 °C. Kondisi Sungai Musi sektor ini tergolong Baku Mutu Kelas II (Aman untuk biota perairan).",
    patroli: "🚢 <b>Rute & Navigasi Otonom:</b> Kapal sedang berpatroli otonom di Sektor 03 - Ilir menuju Waypoint P-04 Pasar 16 (sisa 320m). Jalur aman tanpa rintangan karam dengan kecepatan 3.2 km/jam."
  },
  en: {
    baterai: "⚡ <b>Battery & Solar Status:</b> Current capacity is 84% (LiFePO4 battery). Solar array charging active at 308 Wp under clear sky. Estimated remaining mission runtime: 5 hours 40 minutes.",
    sampah: "🗑️ <b>Trash Storage Status:</b> 130.6 kg collected today (62% bin full). Dominant composition: 55% plastic bottles & 25% metal cans. Vessel can collect up to 210 kg before requiring docking discharge.",
    air: "💧 <b>Water Quality Sensor Analysis:</b> pH 7.2 (Normal), Turbidity 18.4 NTU (Moderate/Safe), TDS 142 ppm, Water Temp 28.4 °C. Musi River Sector meets Class II environmental standard.",
    patroli: "🚢 <b>Autonomous Navigation Path:</b> Vessel is patrolling Sector 03 - Ilir towards Waypoint P-04 Pasar 16 (320m remaining). Optimal route active at speed 3.2 km/h."
  }
};

function askCopilot(queryKey) {
  const chatContainer = document.getElementById('copilotChatBox');
  if (!chatContainer) return;

  const userQueries = {
    baterai: currentLang === 'en' ? 'Check battery and solar charge status' : 'Cek status baterai & solar charging',
    sampah: currentLang === 'en' ? 'How much trash has been collected?' : 'Berapa total sampah yang terkumpul?',
    air: currentLang === 'en' ? 'Analyze current water quality condition' : 'Analisis kualitas air sungai saat ini',
    patroli: currentLang === 'en' ? 'What is the current patrol waypoint?' : 'Bagaimana posisi patroli & rute kapal?'
  };

  const userMsg = userQueries[queryKey] || 'Status kapal?';
  const botMsg = copilotResponses[currentLang][queryKey] || 'Sistem siap membantu operasional kapal.';

  // Append user bubble
  const userEl = document.createElement('div');
  userEl.className = 'chat-bubble user';
  userEl.textContent = userMsg;
  chatContainer.appendChild(userEl);

  // Bot typing simulation
  const botEl = document.createElement('div');
  botEl.className = 'chat-bubble bot';
  botEl.innerHTML = '<i>Memproses data telemetri...</i>';
  chatContainer.appendChild(botEl);

  setTimeout(() => {
    botEl.innerHTML = botMsg;
    chatContainer.scrollTop = chatContainer.scrollHeight;
  }, 450);

  chatContainer.scrollTop = chatContainer.scrollHeight;
}

// ---------- Live Sensor Data Jitter Simulator ----------
let isSimulatingSensors = false;
let sensorInterval = null;

function toggleSensorSimulation() {
  const btn = document.getElementById('btnSimulateSensors');
  isSimulatingSensors = !isSimulatingSensors;

  if (isSimulatingSensors) {
    if (btn) {
      btn.classList.add('active');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><path d="M18.36 6.64a9 9 0 1 1-12.73 0"></path><line x1="12" y1="2" x2="12" y2="12"></line></svg>
        <span>${currentLang === 'en' ? 'Live Telemetry Active' : 'Simulasi Live Aktif'}</span>
      `;
    }
    sensorInterval = setInterval(() => {
      // Dynamic Island text updates
      const islandText = document.getElementById('islandStatusText');
      if (islandText) {
        const randSpeed = (3.0 + Math.random() * 0.5).toFixed(1);
        const randSolar = Math.floor(300 + Math.random() * 15);
        islandText.textContent = `AquaTron #01 • ${randSpeed} km/h • ${randSolar}Wp`;
      }
    }, 2000);
  } else {
    if (btn) {
      btn.classList.remove('active');
      btn.innerHTML = `
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>
        <span>${currentLang === 'en' ? 'Simulate Live Telemetry' : 'Simulasikan Telemetri Live'}</span>
      `;
    }
    if (sensorInterval) clearInterval(sensorInterval);
  }
}

// ---------- Toggle Scanner Overlay on Camera ----------
function toggleScannerEffect() {
  const scannerOverlay = document.getElementById('aiScannerOverlay');
  const btn = document.getElementById('btnToggleScanner');
  if (!scannerOverlay) return;

  // Jump to camera slide if not on camera
  if (currentScreenIndex !== 3) {
    goToScreen(3);
  }

  scannerOverlay.classList.toggle('active');
  const isActive = scannerOverlay.classList.contains('active');
  if (btn) {
    btn.classList.toggle('active', isActive);
  }
}

// ---------- Navbar & Mobile Nav Listeners ----------
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 40) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const hamburger = document.getElementById('navHamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileOverlay = document.getElementById('mobileOverlay');

function toggleMobileNav() {
  hamburger.classList.toggle('active');
  mobileNav.classList.toggle('active');
  mobileOverlay.classList.toggle('active');
  document.body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : '';
}

function closeMobileNav() {
  hamburger.classList.remove('active');
  mobileNav.classList.remove('active');
  mobileOverlay.classList.remove('active');
  document.body.style.overflow = '';
}

if (hamburger) hamburger.addEventListener('click', toggleMobileNav);
if (mobileOverlay) mobileOverlay.addEventListener('click', closeMobileNav);
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMobileNav);
  });
}

// ---------- DOM Ready Boot ----------
document.addEventListener('DOMContentLoaded', () => {
  initSimulator();

  // Load saved language
  const savedLang = localStorage.getItem('aquatron-lang') || 'id';
  setLanguage(savedLang);
});

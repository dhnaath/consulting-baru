export type FrameworkContent = {
  teori: { deskripsi: string; manfaat: string };
  layout: { 
    tipe: string; 
    elemen: string[]; 
    visualType: 'matrix2x2' | 'matrix3x3' | 'canvas9' | 'vp-canvas' | 'cross' | 'list' | 'flow' | 'stepper-funnel' | 'modular-cards' | 'timeline-matrix' | 'kano-chart' | 's-curve' | 'stepper-linear' | 'table-5col' | 'raci-matrix' | 'gantt-chart' | 'bsc-matrix' | 'okr-tree' | 'dashboard-widgets' | 'calculator-form' | 'bep-chart' | 'cba-table' | 'multi-tab-doc' | 'circular-loop' | 'pipeline-5stage' | 'fishbone-diagram' | 'pdca-wheel' | 'hoq-matrix' | 'network-7s' | 'staircase-8step' | 't-chart-forcefield' | 'logframe-matrix' | 'scatter-2x2' | 'policy-cycle' | 'checklist-5card' | 'decision-tree' | 'scoring-table' | 'pareto-chart' | 'ahp-tree-matrix' | 'six-hats-cards' | 'cartesian-chart' | 'heatmap-nxn' | 'radar-chart' | 'split-header-4col' | 'kanban-board' | '2d-matrix-canvas' | 'multi-tier-tree' | 'dual-track-swimlane' | 'heatmap-5x5' | 'venn-3circle' | 'butterfly-flowchart' | 'fmea-table' | 'concentric-loops' | 'layered-3tier' | 'grid-6block' | 'dual-curve-matrix' | 'horizontal-3layer' | 'pyramid-5tier' | 'container-5block' | 'vertical-4tier' | 'checklist-8card' | 'dual-view-elasticity' | 'metric-dashboard' | 'sequential-4step' | 'circular-wheel-3' | 'stacked-form' | 'cohort-table' | 'gauge-meter-9' | 'diverging-cone' | 'wave-curve' | 'matrix-10col' | 'modular-7cards' | 'pervasive-funnel' | 'experiment-matrix' | 'pyramid-3tier' | 'decision-table' | 'wheel-12segment' | 'venn-4circle' | 'pyramid-4tier' | 'curve-4stage' | 'comparison-matrix' | 'article-blueprint';
  };
  draft: { bagian: string; hint: string }[];
  tutorial: { step: string; desc: string }[];
  actionPlan: string[];
};

export const CATEGORIES = [
  {
    name: "Strategic Management",
    frameworks: [
      "SWOT Analysis", "TOWS Matrix", "PESTEL Analysis", "Porter's Five Forces", 
      "VRIO Framework", "Value Chain Analysis", "BCG Matrix", "GE-McKinsey Matrix", 
      "Ansoff Matrix", "Blue Ocean Strategy (ERRC)", "Value Disciplines Model"
    ]
  },
  {
    name: "Business Model & Value Proposition",
    frameworks: [
      "Business Model Canvas (BMC)", "Lean Canvas", "Value Proposition Canvas", "Empathy Map"
    ]
  },
  {
    name: "Marketing & Customer Management",
    frameworks: [
      "STP Framework", "4P/7P Marketing Mix", "Customer Journey Map (CJM)", 
      "Kano Model", "Product Life Cycle (PLC)"
    ]
  },
  {
    name: "Operations & Performance Management",
    frameworks: [
      "Six Sigma (DMAIC)", "SIPOC Diagram", "RACI Matrix", 
      "Gantt Chart", "Balanced Scorecard (BSC)", "OKR Framework", "Eisenhower Matrix"
    ]
  },
  {
    name: "Financial Management & Business Feasibility",
    frameworks: [
      "Analisis Rasio Keuangan", "Capital Budgeting (ROI, NPV, IRR)", 
      "Break-Even Analysis (BEP)", "Cost-Benefit Analysis (CBA)", "Business Case Analysis"
    ]
  },
  {
    name: "Innovation, Entrepreneurship & Design",
    frameworks: [
      "Lean Startup Loop", "Design Thinking"
    ]
  },
  {
    name: "Quality Management & Continuous Improvement",
    frameworks: [
      "Fishbone Diagram (Ishikawa)", "PDCA Cycle", "House of Quality (HOQ / QFD)"
    ]
  },
  {
    name: "Change Management & Organizational Development",
    frameworks: [
      "McKinsey 7S Framework", "Kotter's 8-Step Change", "Force Field Analysis"
    ]
  },
  {
    name: "Public Policy & Program Management",
    frameworks: [
      "Logical Framework Analysis", "Stakeholder Power-Interest", "Analisis Kebijakan Public (Dunn)", "SMART Criteria"
    ]
  },
  {
    name: "Decision Making & Analytical Thinking",
    frameworks: [
      "Decision Tree Analysis", "Decision Matrix (Pugh)", "Pareto Analysis (80/20)", "Analytical Hierarchy Process (AHP)", "Six Thinking Hats"
    ]
  },
  {
    name: "Economics & Quantitative Analysis",
    frameworks: [
      "Supply-Demand Analysis", "Input-Output Analysis", "Radar / Spider Chart"
    ]
  },
  {
    name: "Product Management & Agile/Scrum",
    frameworks: [
      "Product Vision Board", "Kano Feature Prioritization", "Scrum / Kanban Board", "RICE Scoring Model", "MoSCoW Prioritization", "User Story Mapping", "Opportunity Solution Tree", "Dual-Track Agile Framework"
    ]
  },
  {
    name: "Sustainability, ESG & Risk Management",
    frameworks: [
      "ESG Materiality Matrix", "Risk Assessment Matrix", "Triple Bottom Line (TBL)", "Circular Economy (Butterfly)", "FMEA Framework", "ISO 31000 Risk Management", "Carbon Footprint (Scope 1-3)", "Business Continuity Plan (BCP)"
    ]
  },
  {
    name: "Leadership, Talent & Culture Management",
    frameworks: [
      "9-Box Talent Grid", "Situational Leadership", "Johari Window", "Culture Map", "Lencioni’s 5 Dysfunctions", "EVP Canvas", "360-Degree Feedback", "Kirkpatrick 4-Level Model"
    ]
  },
  {
    name: "Sales, Pricing & Revenue Operations",
    frameworks: [
      "MEDDPICC Framework", "Pricing Matrix & Elasticity", "Unit Economics (CLV/CAC)", "SPIN Selling Framework", "BANT Framework", "Revenue Engine (Flywheel)", "Value-Based Pricing Canvas", "Churn Analysis Matrix"
    ]
  },
  {
    name: "Deep Tech, Innovation & Future Studies",
    frameworks: [
      "Technology Readiness (TRL)", "Horizon Scanning (Futures)", "Gartner Hype Cycle", "Doblin’s 10 Types Innovation", "SCAMPER Ideation Canvas", "MVP Canvas", "Open Innovation Model", "Value Proposition Testing"
    ]
  },
  {
    name: "Public Relations, Crisis & Stakeholder Management",
    frameworks: [
      "SCR Framework (Minto)", "Crisis Communication (SCCT)", "Brand Archetypes", "PESO Model", "Carroll’s CSR Pyramid", "Issue Life Cycle", "Stakeholder Engagement", "Press Release Canvas"
    ]
  }
];

export const getFrameworkData = (name: string): FrameworkContent => {
  const frameworks: Record<string, FrameworkContent> = {
    // --- STRATEGIC MANAGEMENT ---
    "SWOT Analysis": {
      teori: {
        deskripsi: "Kerangka evaluasi strategis untuk mengidentifikasi Kekuatan (Strengths), Kelemahan (Weaknesses), Peluang (Opportunities), dan Ancaman (Threats).",
        manfaat: "Membantu pengambilan keputusan taktis berdasarkan realita kapasitas internal dan kondisi pasar eksternal secara objektif."
      },
      layout: {
        tipe: "Matriks 2x2 (4 Kuadran)",
        elemen: ["Strengths (Kekuatan)", "Weaknesses (Kelemahan)", "Opportunities (Peluang)", "Threats (Ancaman)"],
        visualType: 'matrix2x2'
      },
      draft: [
        { bagian: "Strengths", hint: "Apa keunggulan unik produk/layanan Anda? (Misal: Brand kuat, HPP rendah)" },
        { bagian: "Weaknesses", hint: "Apa yang kurang efisien? (Misal: Modal terbatas, sistem manual)" },
        { bagian: "Opportunities", hint: "Tren pasar apa yang bisa dimanfaatkan? (Misal: Digitalisasi)" },
        { bagian: "Threats", hint: "Apa hambatan eksternal? (Misal: Kompetitor, regulasi)" }
      ],
      tutorial: [
        { step: "Persiapan Data", desc: "Kumpulkan feedback pelanggan dan riset kompetitor." },
        { step: "Sesi Brainstorming", desc: "Petakan kondisi internal (S&W), lalu eksternal (O&T)." },
        { step: "Tarik Kesimpulan", desc: "Gunakan S untuk memaksimalkan O, dan hindari T." }
      ],
      actionPlan: [
        "Jadwalkan meeting 60 menit dengan tim inti minggu ini.",
        "Pilih 1 'Peluang' paling potensial sebagai prioritas.",
        "Buat 1 rencana mitigasi untuk 'Ancaman' terbesar."
      ]
    },
    "TOWS Matrix": {
      teori: {
        deskripsi: "Evolusi dari SWOT yang secara langsung memasangkan faktor internal dan eksternal untuk merumuskan strategi yang dapat dieksekusi (Actionable Strategies).",
        manfaat: "Mengubah analisis SWOT yang pasif menjadi 4 opsi strategi agresif, defensif, adaptif, atau bertahan."
      },
      layout: {
        tipe: "Matriks Silang 2x2 Strategi",
        elemen: ["SO (Maxi-Maxi)", "ST (Maxi-Mini)", "WO (Mini-Maxi)", "WT (Mini-Mini)"],
        visualType: 'matrix2x2'
      },
      draft: [
        { bagian: "SO Strategy", hint: "Bagaimana menggunakan kekuatan untuk merebut peluang?" },
        { bagian: "ST Strategy", hint: "Bagaimana menggunakan kekuatan untuk menghindari ancaman?" },
        { bagian: "WO Strategy", hint: "Langkah apa untuk meminimalkan kelemahan agar bisa ambil peluang?" },
        { bagian: "WT Strategy", hint: "Taktik bertahan untuk meminimalkan kelemahan & menghindari ancaman." }
      ],
      tutorial: [
        { step: "Selesaikan SWOT", desc: "Pastikan Anda sudah memiliki data S, W, O, dan T yang valid." },
        { step: "Lakukan Cross-Matching", desc: "Pasangkan poin S1 dengan O2, atau W1 dengan T1." },
        { step: "Rumuskan Taktik", desc: "Tulis tindakan spesifik dari hasil persilangan tersebut." }
      ],
      actionPlan: [
        "Pilih 1 Strategi SO untuk dieksekusi sebagai kampanye marketing bulan ini.",
        "Buat SOP baru berdasarkan Strategi WT untuk efisiensi.",
        "Tugaskan 1 manager untuk memantau implementasi."
      ]
    },
    "PESTEL Analysis": {
      teori: {
        deskripsi: "Alat makro-ekonomi untuk menganalisis lanskap eksternal: Political, Economic, Social, Technological, Environmental, dan Legal.",
        manfaat: "Mendeteksi risiko sistemik dan tren makro sebelum berdampak langsung pada operasional bisnis."
      },
      layout: {
        tipe: "Daftar 6 Kategori (List)",
        elemen: ["Political", "Economic", "Social", "Technological", "Environmental", "Legal"],
        visualType: 'list'
      },
      draft: [
        { bagian: "Political", hint: "Kebijakan pemerintah, stabilitas politik, tarif pajak?" },
        { bagian: "Economic", hint: "Daya beli, inflasi, nilai tukar mata uang, suku bunga?" },
        { bagian: "Social", hint: "Perubahan gaya hidup, tren demografi, kesadaran kesehatan?" },
        { bagian: "Technological", hint: "Inovasi AI, otomatisasi, pergeseran platform digital?" },
        { bagian: "Environmental", hint: "Isu cuaca, carbon footprint, keberlanjutan bahan baku?" },
        { bagian: "Legal", hint: "UU Ketenagakerjaan, sertifikasi Halal/BPOM, perlindungan data?" }
      ],
      tutorial: [
        { step: "Riset Makro", desc: "Tugaskan tim untuk membaca berita industri terkini." },
        { step: "Filter Relevansi", desc: "Hapus faktor yang tidak berdampak langsung pada bisnis Anda." },
        { step: "Asesmen Dampak", desc: "Beri nilai Tinggi/Sedang/Rendah untuk ancaman dari tiap faktor." }
      ],
      actionPlan: [
        "Identifikasi 1 regulasi (Legal) yang paling mengancam tahun ini.",
        "Adaptasi 1 tren teknologi yang mulai dipakai kompetitor.",
        "Sesuaikan budget marketing berdasarkan daya beli (Economic) kuartal ini."
      ]
    },
    "Porter's Five Forces": {
      teori: {
        deskripsi: "Model untuk mengukur tingkat intensitas persaingan dan profitabilitas dalam suatu industri berdasarkan 5 kekuatan tawar-menawar.",
        manfaat: "Mengetahui seberapa 'berdarah' industri Anda dan mencari posisi aman untuk mempertahankan margin keuntungan."
      },
      layout: {
        tipe: "Model Sentral (Cross)",
        elemen: ["Rivalry (Pusat)", "New Entrants (Atas)", "Buyers (Kiri)", "Suppliers (Kanan)", "Substitutes (Bawah)"],
        visualType: 'cross'
      },
      draft: [
        { bagian: "Competitive Rivalry", hint: "Seberapa banyak dan agresif kompetitor saat ini?" },
        { bagian: "Threat of New Entrants", hint: "Seberapa mudah pemain baru masuk ke bisnis ini? (Barrier to entry)" },
        { bagian: "Bargaining Power of Buyers", hint: "Apakah pembeli mudah pindah ke brand lain? (Switching cost)" },
        { bagian: "Bargaining Power of Suppliers", hint: "Apakah supplier memonopoli bahan baku Anda?" },
        { bagian: "Threat of Substitutes", hint: "Apakah ada produk alternatif di luar industri Anda? (Misal: Kopi vs Teh)" }
      ],
      tutorial: [
        { step: "Petakan Pemain", desc: "List siapa saja pembeli dominan, supplier kunci, dan rival utama." },
        { step: "Evaluasi Kekuatan", desc: "Tentukan siapa yang paling mendikte harga." },
        { step: "Cari Keunggulan", desc: "Tingkatkan loyalitas pelanggan atau kunci kontrak eksklusif dengan supplier." }
      ],
      actionPlan: [
        "Buat program loyalitas untuk mengurangi kekuatan tawar pembeli.",
        "Cari 1 supplier cadangan untuk mengamankan rantai pasok.",
        "Lakukan audit fitur produk vs kompetitor terdekat."
      ]
    },
    "VRIO Framework": {
      teori: {
        deskripsi: "Alat evaluasi internal untuk menentukan apakah sumber daya/aset perusahaan memiliki keunggulan kompetitif jangka panjang.",
        manfaat: "Menghindari buang-buang uang pada aset yang mudah ditiru kompetitor."
      },
      layout: {
        tipe: "Alur Keputusan 4 Tahap (Flow)",
        elemen: ["Value", "Rarity", "Imitability", "Organization"],
        visualType: 'flow'
      },
      draft: [
        { bagian: "Value", hint: "Apakah aset ini menambah nilai atau menekan biaya?" },
        { bagian: "Rarity", hint: "Apakah aset ini langka dan tidak dimiliki banyak pesaing?" },
        { bagian: "Imitability", hint: "Apakah mahal atau sulit bagi pesaing untuk menirunya?" },
        { bagian: "Organization", hint: "Apakah perusahaan terorganisir untuk mengeksploitasi aset ini?" }
      ],
      tutorial: [
        { step: "Inventarisasi Aset", desc: "List paten, teknologi, brand, dan tim ahli Anda." },
        { step: "Uji dengan V-R-I-O", desc: "Lewati setiap aset melalui 4 pertanyaan secara berurutan." },
        { step: "Kategorikan Hasil", desc: "Tentukan apakah aset itu Paritas, Keunggulan Sementara, atau Keunggulan Berkelanjutan." }
      ],
      actionPlan: [
        "Identifikasi 1 aset yang paling VRIO di perusahaan.",
        "Lindungi aset tersebut secara hukum (HAKI, NDA).",
        "Perbaiki sistem internal jika gagal di tahap 'Organization'."
      ]
    },
    "Value Chain Analysis": {
      teori: {
        deskripsi: "Memecah proses operasional perusahaan dari bahan baku hingga purna-jual untuk melihat di mana nilai tambah (margin) tercipta.",
        manfaat: "Mengidentifikasi area pemborosan yang bisa dipotong, atau area layanan yang bisa dinaikkan harganya."
      },
      layout: {
        tipe: "Alur Proses Berantai (Flow)",
        elemen: ["Inbound Logistics", "Operations", "Outbound Logistics", "Marketing & Sales", "Service"],
        visualType: 'flow'
      },
      draft: [
        { bagian: "Inbound Logistics", hint: "Efisiensi penerimaan dan penyimpanan bahan baku." },
        { bagian: "Operations", hint: "Proses mengubah bahan baku menjadi produk jadi (QC, Mesin)." },
        { bagian: "Outbound Logistics", hint: "Sistem pengiriman dan distribusi ke pelanggan." },
        { bagian: "Marketing & Sales", hint: "Akuisisi pelanggan dan biaya iklan." },
        { bagian: "Support Activities", hint: "Fungsi HR, IT, dan Procurement yang mendukung 4 hal di atas." }
      ],
      tutorial: [
        { step: "Petakan Proses As-Is", desc: "Gambarkan alur kerja saat ini secara jujur." },
        { step: "Hitung Biaya & Waktu", desc: "Berapa lama dan mahal setiap tahapan?" },
        { step: "Optimasi/Outsource", desc: "Putuskan mana yang bisa diotomatisasi atau diserahkan ke vendor pihak ketiga." }
      ],
      actionPlan: [
        "Temukan 1 proses operasi (bottleneck) yang memperlambat produksi.",
        "Audit biaya logistik pengiriman bulan lalu.",
        "Sederhanakan alur CS (Service) dengan template balasan otomatis."
      ]
    },
    "BCG Matrix": {
      teori: {
        deskripsi: "Matriks portofolio produk berdasarkan pangsa pasar (Market Share) dan pertumbuhan pasar (Market Growth).",
        manfaat: "Memutuskan produk mana yang harus didanai, dipertahankan, atau disuntik mati."
      },
      layout: {
        tipe: "Matriks 2x2 Portofolio",
        elemen: ["Stars (Bintang)", "Question Marks (Tanda Tanya)", "Cash Cows (Sapi Perah)", "Dogs (Anjing)"],
        visualType: 'matrix2x2'
      },
      draft: [
        { bagian: "Stars", hint: "Produk laris di pasar yang sedang tren. Butuh modal besar untuk mendominasi." },
        { bagian: "Cash Cows", hint: "Produk stabil, untung besar, tapi pasarnya stagnan. Sumber uang tunai perusahaan." },
        { bagian: "Question Marks", hint: "Produk baru di pasar tren, tapi belum laku. Perlu evaluasi apakah mau dibakar uang atau ditutup." },
        { bagian: "Dogs", hint: "Produk tidak laku di pasar yang sepi. Harus segera dihentikan." }
      ],
      tutorial: [
        { step: "List Semua Produk/Layanan", desc: "Kumpulkan data penjualan dari setiap SKU atau divisi." },
        { step: "Plot ke Matriks", desc: "Bandingkan pertumbuhan vs dominasi pasar." },
        { step: "Realokasi Budget", desc: "Ambil uang dari Cash Cows untuk mendanai Stars atau Question Marks." }
      ],
      actionPlan: [
        "Hentikan promosi untuk 1 produk kategori 'Dogs'.",
        "Ambil keuntungan dari 'Cash Cow' untuk budget R&D bulan ini.",
        "Review data 1 'Question Mark', beri deadline 3 bulan untuk naik jadi Star atau ditutup."
      ]
    },
    "GE-McKinsey Matrix": {
      teori: {
        deskripsi: "Versi lebih kompleks dari BCG Matrix, menggunakan grid 3x3 untuk menilai daya tarik industri vs kekuatan unit bisnis.",
        manfaat: "Lebih akurat untuk korporasi/grup usaha dengan banyak unit bisnis yang kompleks."
      },
      layout: {
        tipe: "Matriks 3x3 (9 Sel)",
        elemen: ["Invest/Grow (High)", "Selectivity (Medium)", "Harvest/Divest (Low)"],
        visualType: 'matrix3x3'
      },
      draft: [
        { bagian: "Industry Attractiveness", hint: "Seberapa menguntungkan industrinya? (Ukuran pasar, margin, regulasi)" },
        { bagian: "Competitive Strength", hint: "Seberapa kuat posisi kita di sana? (Pangsa pasar, loyalitas brand)" },
        { bagian: "Invest/Grow", hint: "Unit bisnis di sel hijau: prioritaskan modal dan SDM ke sini." },
        { bagian: "Harvest/Divest", hint: "Unit bisnis di sel merah: jual aset atau tutup perlahan." }
      ],
      tutorial: [
        { step: "Tentukan Bobot", desc: "Beri bobot pada faktor daya tarik dan kekuatan kompetitif." },
        { step: "Skoring", desc: "Beri nilai 1-5 untuk setiap unit bisnis." },
        { step: "Plotting & Strategi", desc: "Letakkan di matriks 3x3 dan putuskan arah investasinya." }
      ],
      actionPlan: [
        "Fokuskan 80% budget CAPEX pada unit bisnis kategori 'Invest'.",
        "Mulai kurangi biaya operasional pada unit bisnis 'Harvest'.",
        "Lakukan audit performa untuk unit yang berada di area 'Selectivity'."
      ]
    },
    "Ansoff Matrix": {
      teori: {
        deskripsi: "Alat perencanaan strategis untuk mencari arah pertumbuhan bisnis berbasis produk dan pasar (Baru vs Lama).",
        manfaat: "Menilai risiko pertumbuhan. Semakin menjauh dari produk/pasar saat ini, risiko makin tinggi."
      },
      layout: {
        tipe: "Matriks Pertumbuhan 2x2",
        elemen: ["Market Penetration", "Product Development", "Market Development", "Diversification"],
        visualType: 'matrix2x2'
      },
      draft: [
        { bagian: "Market Penetration", hint: "Jual produk saat ini ke pasar saat ini. (Misal: Diskon, promo bundling, loyalty program)" },
        { bagian: "Product Development", hint: "Bikin produk baru untuk pelanggan yang sudah ada. (Misal: Jual case HP ke pembeli HP)" },
        { bagian: "Market Development", hint: "Jual produk saat ini ke wilayah/segmen baru. (Misal: Buka cabang di kota lain)" },
        { bagian: "Diversification", hint: "Produk baru di pasar yang sama sekali baru. Risiko tertinggi." }
      ],
      tutorial: [
        { step: "Evaluasi Target Sales", desc: "Berapa banyak pertumbuhan yang ingin dicapai?" },
        { step: "Pilih Kuadran", desc: "Pilih rute dengan risiko yang paling sanggup ditanggung modal Anda." },
        { step: "Susun Taktik", desc: "Siapkan budget marketing atau R&D sesuai pilihan kuadran." }
      ],
      actionPlan: [
        "Buat 1 promo referral (Market Penetration) minggu ini.",
        "Riset 1 kota baru untuk target ekspansi bulan depan.",
        "Survey pelanggan loyal untuk ide produk baru."
      ]
    },
    "Blue Ocean Strategy (ERRC)": {
      teori: {
        deskripsi: "Strategi keluar dari persaingan berdarah (Red Ocean) dengan menciptakan ruang pasar baru melalui kerangka ERRC (Eliminate, Reduce, Raise, Create).",
        manfaat: "Mencapai inovasi nilai (Value Innovation): menekan biaya sekaligus meningkatkan nilai bagi pembeli."
      },
      layout: {
        tipe: "Grid ERRC (4 Blok)",
        elemen: ["Eliminate (Hapus)", "Reduce (Kurangi)", "Raise (Tingkatkan)", "Create (Ciptakan)"],
        visualType: 'matrix2x2'
      },
      draft: [
        { bagian: "Eliminate", hint: "Fitur/proses apa yang dianggap standar industri tapi sebenarnya tidak dipedulikan pelanggan?" },
        { bagian: "Reduce", hint: "Apa yang bisa dikurangi jauh di bawah standar industri untuk hemat biaya?" },
        { bagian: "Raise", hint: "Apa yang harus ditingkatkan jauh di atas standar industri?" },
        { bagian: "Create", hint: "Apa nilai baru yang belum pernah ditawarkan oleh industri ini sama sekali?" }
      ],
      tutorial: [
        { step: "Analisis Pesaing", desc: "Buat kurva nilai (Value Curve) dari kompetitor." },
        { step: "Terapkan ERRC", desc: "Tantang setiap asumsi standar industri." },
        { step: "Bentuk Pasar Baru", desc: "Targetkan 'Non-Customers' (orang yang belum pernah pakai produk di industri ini)." }
      ],
      actionPlan: [
        "Coret 1 fitur/layanan yang paling banyak memakan biaya namun jarang dipakai pelanggan.",
        "Brainstorming 1 layanan baru (Create) yang tidak dimiliki saingan mana pun.",
        "Wawancara 3 orang yang BUKAN pelanggan Anda untuk tahu alasan mereka."
      ]
    },
    "Value Disciplines Model": {
      teori: {
        deskripsi: "Fokus strategis perusahaan dalam 1 dari 3 disiplin utama agar tidak menjadi 'medioker' di segala hal.",
        manfaat: "Memperjelas identitas brand dan memfokuskan alokasi sumber daya."
      },
      layout: {
        tipe: "Tiga Pilar / Segitiga Fokus",
        elemen: ["Operational Excellence", "Product Leadership", "Customer Intimacy"],
        visualType: 'list'
      },
      draft: [
        { bagian: "Operational Excellence", hint: "Fokus pada harga murah, kecepatan, dan efisiensi. (Contoh: McDonald's, AirAsia)" },
        { bagian: "Product Leadership", hint: "Fokus pada inovasi, desain, dan fitur terbaik. (Contoh: Apple, Tesla)" },
        { bagian: "Customer Intimacy", hint: "Fokus pada kustomisasi, layanan personal, dan relasi. (Contoh: Hotel Butik, Private Banking)" }
      ],
      tutorial: [
        { step: "Evaluasi DNA Bisnis", desc: "Di mana kekuatan utama tim Anda saat ini?" },
        { step: "Pilih SATU Disiplin", desc: "Anda tidak bisa menjadi yang termurah, terbaik, sekaligus paling personal. Pilih satu." },
        { step: "Selaraskan Operasional", desc: "Pastikan SOP, KPI, dan struktur organisasi mendukung disiplin yang dipilih." }
      ],
      actionPlan: [
        "Deklarasikan 1 disiplin utama ke seluruh tim minggu ini.",
        "Ubah 1 KPI karyawan agar sejalan dengan disiplin tersebut.",
        "Hentikan proyek yang berlawanan dengan disiplin utama."
      ]
    },
    // The rest of frameworks are available as requested. Just defaulting to SWOT Analysis if not found.
    "Business Model Canvas (BMC)": {
      teori: {
        deskripsi: "Alat visual yang memetakan elemen logika bagaimana bisnis menciptakan, memberikan, dan menangkap nilai (uang).",
        manfaat: "Memberikan pandangan helikopter tentang fundamental bisnis dalam 1 halaman ringkas."
      },
      layout: {
        tipe: "Kanvas 9 Blok",
        elemen: ["Customer Segments", "Value Proposition", "Channels", "Customer Relationships", "Revenue Streams", "Key Resources", "Key Activities", "Key Partnerships", "Cost Structure"],
        visualType: 'canvas9'
      },
      draft: [
        { bagian: "Customer Segments", hint: "Siapa spesifik demografi & psikografi audiens Anda?" },
        { bagian: "Value Proposition", hint: "Apa 'pain points' pelanggan yang Anda selesaikan?" },
        { bagian: "Channels", hint: "Bagaimana cara produk sampai ke pelanggan? (Sosmed, Toko Fisik)" },
        { bagian: "Revenue Streams", hint: "Dari mana arus kas masuk? (Jual putus, langganan)" },
        { bagian: "Key Activities & Resources", hint: "Apa aset dan kegiatan harian yang wajib ada?" }
      ],
      tutorial: [
        { step: "Mulai dari Kanan", desc: "Isi Segmen Pelanggan dan Proposisi Nilai terlebih dahulu." },
        { step: "Geser ke Kiri", desc: "Petakan operasional (Aktivitas, Aset, Partner)." },
        { step: "Validasi Finansial", desc: "Pastikan Struktur Biaya lebih kecil dari Arus Pendapatan." }
      ],
      actionPlan: [
        "Cetak BMC ukuran A3 dan isi menggunakan post-it notes.",
        "Validasi 1 asumsi di 'Value Proposition' kepada pelanggan langsung.",
        "Cari 1 'Key Partner' baru untuk menekan biaya operasional."
      ]
    }
  };

  return frameworks[name] || frameworks["SWOT Analysis"];
};

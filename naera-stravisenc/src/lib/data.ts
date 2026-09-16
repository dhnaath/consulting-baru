import { queryOptions } from "@tanstack/react-query";

export type Client = {
  id: string;
  nama: string;
  industri: string;
  kbli: string | null;
  pic: string | null;
  email: string | null;
  telepon: string | null;
  kota: string | null;
  status: string;
  nilai_kontrak: number;
  catatan: string | null;
};

export type Project = {
  id: string;
  client_id: string | null;
  nama: string;
  ringkasan: string | null;
  status: string;
  prioritas: string;
  tanggal_mulai: string | null;
  tanggal_selesai: string | null;
  progres: number;
  nilai: number;
  konsultan: string | null;
};

export type Task = {
  id: string;
  project_id: string | null;
  judul: string;
  deskripsi: string | null;
  status: string;
  prioritas: string;
  tenggat: string | null;
  penanggung_jawab: string | null;
  estimasi_jam: number;
};

export type Deliverable = {
  id: string;
  project_id: string | null;
  judul: string;
  jenis: string;
  status: string;
  jatuh_tempo: string | null;
  versi: string | null;
};

export type Note = {
  id: string;
  client_id: string | null;
  project_id: string | null;
  judul: string;
  isi: string | null;
  kategori: string;
  tags: string[];
  dipin: boolean;
  updated_at: string;
};

export type Activity = {
  id: string;
  client_id: string | null;
  project_id: string | null;
  jenis: string;
  judul: string;
  deskripsi: string | null;
  waktu: string;
};

// --- STATIC MOCK DATA ---
const MOCK_CLIENTS: Client[] = [
  {
    id: "c1",
    nama: "PT Maju Bersama",
    industri: "Teknologi",
    kbli: "6201",
    pic: "Budi Santoso",
    email: "budi@majubersama.co.id",
    telepon: "081234567890",
    kota: "Jakarta",
    status: "aktif",
    nilai_kontrak: 500000000,
    catatan: "Klien prioritas untuk digitalisasi.",
  },
  {
    id: "c2",
    nama: "CV Makmur Jaya",
    industri: "Ritel",
    kbli: "4711",
    pic: "Siti Rahma",
    email: "siti@makmurjaya.com",
    telepon: "081987654321",
    kota: "Surabaya",
    status: "prospek",
    nilai_kontrak: 150000000,
    catatan: "Follow up proposal optimasi supply chain.",
  },
  {
    id: "c3",
    nama: "Nusantara Group",
    industri: "Keuangan",
    kbli: "6419",
    pic: "Andi Wijaya",
    email: "andi@nusantaragroup.id",
    telepon: "082123123123",
    kota: "Bandung",
    status: "selesai",
    nilai_kontrak: 850000000,
    catatan: "Due diligence M&A selesai bulan lalu.",
  },
];
const MOCK_PROJECTS: Project[] = [
  {
    id: "p1",
    client_id: "c1",
    nama: "IT Transformation Strategy",
    ringkasan: "Perumusan strategi transformasi digital dan roadmap implementasi ERP.",
    status: "berjalan",
    prioritas: "tinggi",
    tanggal_mulai: "2026-05-01",
    tanggal_selesai: "2026-11-30",
    progres: 60,
    nilai: 350000000,
    konsultan: "Wira & Team",
  },
  {
    id: "p2",
    client_id: "c2",
    nama: "Supply Chain Optimization",
    ringkasan: "Analisis dan optimasi rantai pasok untuk mengurangi bottleneck operasional.",
    status: "perencanaan",
    prioritas: "sedang",
    tanggal_mulai: "2026-10-01",
    tanggal_selesai: "2027-02-28",
    progres: 15,
    nilai: 150000000,
    konsultan: "Andika",
  },
  {
    id: "p3",
    client_id: "c3",
    nama: "M&A Due Diligence",
    ringkasan: "Uji tuntas finansial dan operasional untuk akuisisi startup fintech.",
    status: "selesai",
    prioritas: "tinggi",
    tanggal_mulai: "2026-01-15",
    tanggal_selesai: "2026-04-15",
    progres: 100,
    nilai: 850000000,
    konsultan: "Wira",
  },
  {
    id: "p4",
    client_id: null,
    nama: "Internal Knowledge Base",
    ringkasan: "Penyusunan standar operasi (SOP) dan knowledge base internal konsultan.",
    status: "berjalan",
    prioritas: "rendah",
    tanggal_mulai: "2026-07-01",
    tanggal_selesai: "2026-12-31",
    progres: 45,
    nilai: 0,
    konsultan: "Internal Team",
  },
];
const MOCK_TASKS: Task[] = [
  {
    id: "t1",
    project_id: "p1",
    judul: "As-Is Architecture Review",
    deskripsi: "Review arsitektur sistem yang berjalan saat ini.",
    status: "selesai",
    prioritas: "tinggi",
    tenggat: "2026-06-15",
    penanggung_jawab: "Wira",
    estimasi_jam: 40,
  },
  {
    id: "t2",
    project_id: "p1",
    judul: "To-Be Roadmap Design",
    deskripsi: "Penyusunan peta jalan untuk 3 tahun ke depan.",
    status: "in_progress",
    prioritas: "tinggi",
    tenggat: "2026-09-30",
    penanggung_jawab: "Team A",
    estimasi_jam: 80,
  },
  {
    id: "t3",
    project_id: "p2",
    judul: "Data Gathering",
    deskripsi: "Kumpulkan data logistik dan pergudangan.",
    status: "todo",
    prioritas: "sedang",
    tenggat: "2026-10-15",
    penanggung_jawab: "Andika",
    estimasi_jam: 30,
  },
  {
    id: "t4",
    project_id: "p3",
    judul: "Financial Auditing",
    deskripsi: "Audit keuangan kuartal 4.",
    status: "selesai",
    prioritas: "tinggi",
    tenggat: "2026-03-01",
    penanggung_jawab: "Wira",
    estimasi_jam: 120,
  },
];
const MOCK_DELIVERABLES: Deliverable[] = [
  {
    id: "d1",
    project_id: "p1",
    judul: "As-Is Analysis Report",
    jenis: "Dokumen",
    status: "selesai",
    jatuh_tempo: "2026-07-01",
    versi: "v1.0",
  },
  {
    id: "d2",
    project_id: "p1",
    judul: "ERP Roadmap",
    jenis: "Presentasi",
    status: "draft",
    jatuh_tempo: "2026-11-01",
    versi: "v0.5",
  },
  {
    id: "d3",
    project_id: "p3",
    judul: "Final Due Diligence Report",
    jenis: "Dokumen",
    status: "selesai",
    jatuh_tempo: "2026-04-10",
    versi: "v2.0",
  },
];

const MOCK_NOTES: Note[] = [];
const MOCK_ACTIVITIES: Activity[] = [];

const MOCK_MESSAGES: Message[] = [];
const MOCK_DOCUMENTS: Document[] = [];
const MOCK_MEETINGS: Meeting[] = [];

async function fetchAll<T>(table: string, order: string, asc = true): Promise<T[]> {
  switch (table) {
    case "clients":
      return MOCK_CLIENTS as unknown as T[];
    case "projects":
      return MOCK_PROJECTS as unknown as T[];
    case "tasks":
      return MOCK_TASKS as unknown as T[];
    case "deliverables":
      return MOCK_DELIVERABLES as unknown as T[];
    case "notes":
      return MOCK_NOTES as unknown as T[];
    case "activities":
      return MOCK_ACTIVITIES as unknown as T[];
    case "messages":
      return MOCK_MESSAGES as unknown as T[];
    case "documents":
      return MOCK_DOCUMENTS as unknown as T[];
    case "meetings":
      return MOCK_MEETINGS as unknown as T[];
    default:
      return [];
  }
}

export const clientsQuery = queryOptions({
  queryKey: ["clients"],
  queryFn: () => fetchAll<Client>("clients", "nama"),
});

export const projectsQuery = queryOptions({
  queryKey: ["projects"],
  queryFn: () => fetchAll<Project>("projects", "tanggal_selesai"),
});

export const tasksQuery = queryOptions({
  queryKey: ["tasks"],
  queryFn: () => fetchAll<Task>("tasks", "tenggat"),
});

export const deliverablesQuery = queryOptions({
  queryKey: ["deliverables"],
  queryFn: () => fetchAll<Deliverable>("deliverables", "jatuh_tempo"),
});

export const notesQuery = queryOptions({
  queryKey: ["notes"],
  queryFn: () => fetchAll<Note>("notes", "updated_at", false),
});

export const activitiesQuery = queryOptions({
  queryKey: ["activities"],
  queryFn: () => fetchAll<Activity>("activities", "waktu", false),
});

export const rupiah = (n: number) =>
  new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(n ?? 0);

export const rupiahRingkas = (n: number) => {
  if (n >= 1_000_000_000) return `Rp ${(n / 1_000_000_000).toFixed(1)} M`;
  if (n >= 1_000_000) return `Rp ${(n / 1_000_000).toFixed(0)} jt`;
  return rupiah(n);
};

export const tanggal = (d: string | null) =>
  d
    ? new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" })
    : "—";

export const tanggalPendek = (d: string | null) =>
  d ? new Date(d).toLocaleDateString("id-ID", { day: "numeric", month: "short" }) : "—";

export const waktuRelatif = (d: string) => {
  const diff = Date.now() - new Date(d).getTime();
  const hari = Math.floor(diff / 86400000);
  if (hari <= 0) return "hari ini";
  if (hari === 1) return "kemarin";
  if (hari < 30) return `${hari} hari lalu`;
  return tanggal(d);
};

export const statusTugas: Record<string, string> = {
  todo: "Belum mulai",
  berjalan: "Dikerjakan",
  review: "Review",
  selesai: "Selesai",
};

export const statusProyek: Record<string, string> = {
  perencanaan: "Perencanaan",
  berjalan: "Berjalan",
  tertahan: "Tertahan",
  selesai: "Selesai",
};

export const sisaHari = (d: string | null) => {
  if (!d) return null;
  const target = new Date(d + "T23:59:59");
  return Math.ceil((target.getTime() - Date.now()) / 86400000);
};

/* ---------------- Sisi klien ---------------- */

export type Message = {
  id: string;
  client_id: string | null;
  project_id: string | null;
  pengirim: string;
  nama_pengirim: string;
  isi: string;
  dibaca: boolean;
  created_at: string;
};

export type Document = {
  id: string;
  client_id: string | null;
  project_id: string | null;
  nama: string;
  jenis: string;
  ukuran: string | null;
  versi: string | null;
  tautan: string | null;
  diunggah_oleh: string | null;
  dibagikan_ke_klien: boolean;
  created_at: string;
};

export type Meeting = {
  id: string;
  client_id: string | null;
  project_id: string | null;
  judul: string;
  agenda: string | null;
  mulai: string;
  durasi_menit: number;
  lokasi: string | null;
  tipe: string;
  status: string;
  created_at: string;
};

export const messagesQuery = queryOptions({
  queryKey: ["messages"],
  queryFn: () => fetchAll<Message>("messages", "created_at"),
});

export const documentsQuery = queryOptions({
  queryKey: ["documents"],
  queryFn: () => fetchAll<Document>("documents", "created_at", false),
});

export const meetingsQuery = queryOptions({
  queryKey: ["meetings"],
  queryFn: () => fetchAll<Meeting>("meetings", "mulai"),
});

export const jamMenit = (d: string) =>
  new Date(d).toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" });

export const tanggalJam = (d: string) => `${tanggal(d)} · ${jamMenit(d)}`;

export const hariPendek = (d: string) =>
  new Date(d).toLocaleDateString("id-ID", { weekday: "short" });

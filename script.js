// =======================================================
// Pemecahan Masalah: Sistem Persyaratan Kursus
// =======================================================

/**
 * Menghitung kelayakan untuk Matematika Diskrit Lanjutan (L)
 * Persyaratan: Lulus Logika (P) AND Lulus Kalkulus (C).
 * L ↔ (P ∧ C)
 * @param {boolean} p - Lulus Logika
 * @param {boolean} c - Lulus Kalkulus
 * @returns {boolean} - True jika memenuhi syarat
 */
function cekMatematikaDiskritLanjutan(p, c) {
    return p && c; // Konjungsi (AND)
}

/**
 * Menghitung kelayakan untuk Struktur Data (S)
 * Persyaratan: Lulus Pemrograman Dasar (D) OR Lulus Algoritma (A).
 * S ↔ (D ∨ A)
 * @param {boolean} d - Lulus Pemrograman Dasar
 * @param {boolean} a - Lulus Algoritma
 * @returns {boolean} - True jika memenuhi syarat
 */
function cekStrukturData(d, a) {
    return d || a; // Disjungsi Inklusif (OR)
}

// Fungsi pembantu untuk menampilkan status kelayakan
const getStatusText = (isEligible) => isEligible ? 
    '<span style="color: green; font-weight: bold;">✅ MEMENUHI SYARAT</span>' : 
    '<span style="color: red; font-weight: bold;">❌ BELUM MEMENUHI SYARAT</span>';

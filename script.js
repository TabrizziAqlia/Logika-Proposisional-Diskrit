// =======================================================
// Data Logika Proposisional
// =======================================================

const OPERATORS = [
    {
        id: 'negasi',
        nama: '1. Negasi (Negation)',
        simbol: '$\\neg p$',
        deskripsi: 'Membalik nilai kebenaran. Hanya membutuhkan satu proposisi.',
        kalkulasi: (p, q) => !p,
        header: ['p', '$\\neg p$'],
        inputs: [[true], [false]]
    },
    {
        id: 'konjungsi',
        nama: '2. Konjungsi (Conjunction)',
        simbol: '$p \\land q$',
        deskripsi: 'Hanya **Benar** jika **kedua** proposisi Benar.',
        kalkulasi: (p, q) => p && q,
        header: ['p', 'q', '$p \\land q$'],
        inputs: [[true, true], [true, false], [false, true], [false, false]]
    },
    {
        id: 'disjungsi-inklusif',
        nama: '3. Disjungsi Inklusif (Inclusive Disjunction)',
        simbol: '$p \\lor q$',
        deskripsi: 'Benar jika **setidaknya satu** proposisi Benar (termasuk keduanya).',
        kalkulasi: (p, q) => p || q,
        header: ['p', 'q', '$p \\lor q$'],
        inputs: [[true, true], [true, false], [false, true], [false, false]]
    },
    {
        id: 'disjungsi-eksklusif',
        nama: '4. Disjungsi Eksklusif (Exclusive Disjunction / XOR)',
        simbol: '$p \\oplus q$',
        deskripsi: 'Benar jika **tepat satu** proposisi Benar.',
        kalkulasi: (p, q) => p !== q,
        header: ['p', 'q', '$p \\oplus q$'],
        inputs: [[true, true], [true, false], [false, true], [false, false]]
    },
    {
        id: 'implikasi',
        nama: '5. Implikasi (Conditional)',
        simbol: '$p \\to q$',
        deskripsi: 'Hanya **Salah** jika sebab ($p$) Benar dan akibat ($q$) Salah.',
        kalkulasi: (p, q) => !p || q, // Setara dengan: NOT p OR q
        header: ['p', 'q', '$p \\to q$'],
        inputs: [[true, true], [true, false], [false, true], [false, false]]
    },
    {
        id: 'biimplikasi',
        nama: '6. Biimplikasi (Biconditional)',
        simbol: '$p \\leftrightarrow q$',
        deskripsi: 'Benar jika $p$ dan $q$ memiliki **nilai kebenaran yang sama**.',
        kalkulasi: (p, q) => p === q,
        header: ['p', 'q', '$p \\leftrightarrow q$'],
        inputs: [[true, true], [true, false], [false, true], [false, false]]
    }
];

// Fungsi Pembantu untuk mengubah Boolean ke String (B/S)
const toStr = (val) => val ? 'B' : 'S';

// Fungsi untuk membuat Tabel Kebenaran (HTML String)
function generateTruthTable(operator) {
    let tableHTML = '<table class="truth-table">';
    
    // Header
    tableHTML += '<thead><tr>';
    operator.header.forEach(h => {
        tableHTML += `<th>${h}</th>`;
    });
    tableHTML += '</tr></thead>';

    // Body (Baris Data)
    tableHTML += '<tbody>';
    operator.inputs.forEach(input => {
        const p = input[0];
        const q = input.length > 1 ? input[1] : null;
        
        // Hasil Kalkulasi
        const result = operator.kalkulasi(p, q);

        tableHTML += '<tr>';
        // Input P
        tableHTML += `<td>${toStr(p)}</td>`;
        
        // Input Q (jika ada)
        if (q !== null) {
            tableHTML += `<td>${toStr(q)}</td>`;
        }
        
        // Hasil
        tableHTML += `<td>${toStr(result)}</td>`;
        tableHTML += '</tr>';
    });
    tableHTML += '</tbody></table>';
    
    return tableHTML;
}

// Fungsi Utama untuk merender semua konten
document.addEventListener('DOMContentLoaded', () => {
    OPERATORS.forEach(op => {
        const container = document.getElementById(op.id);
        
        if (container) {
            container.innerHTML = `
                <h2>${op.nama}</h2>
                <p><strong>Notasi:</strong> ${op.simbol}</p>
                <p><strong>Definisi:</strong> ${op.deskripsi}</p>
                ${generateTruthTable(op)}
            `;
        }
    });

    // Ini diperlukan agar MathJax me-render notasi LaTeX setelah DOM selesai dibuat
    if (window.MathJax) {
        window.MathJax.typeset();
    }
});

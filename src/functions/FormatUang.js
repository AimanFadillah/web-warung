export default function FormatUang (angka) {
    const uang = Number(angka).toLocaleString("id-ID",{style:"currency",currency:"IDR", minimumFractionDigits: 0})
    return uang;
}
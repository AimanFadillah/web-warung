const data = [
    {
        nama:"Cham Safe Malam",
        src:"https://img.lazcdn.com/g/p/59ffdac6a2c0d06d0cad1be644c16840.png_720x720q80.png",
        harga:3000
    },
    {
        nama:"Stop Cold",
        src:"https://d2qjkwm11akmwu.cloudfront.net/products/405425_18-6-2020_13-46-56-1665761186.webp",
        harga:1500
    },
    {
        nama:"Adem Sari",
        src:"https://images.tokopedia.net/img/cache/700/attachment/2019/10/22/157172972913990/157172972913990_eb713e35-4b20-4209-895d-ab3fa0307264.png",
        harga:2500
    },
    {
        nama:"komix",
        src:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/7/22/17586137-3eeb-4a69-850d-e59b42993fe4.jpg",
        harga:2000
    },
    {
        nama:"Paramex",
        src:"https://d2qjkwm11akmwu.cloudfront.net/products/9490-1665779892.webp",
        harga:1500
    },
    {
        nama:"Tolak Angin",
        src:"https://images.tokopedia.net/img/cache/700/hDjmkQ/2024/2/23/6e5a61ac-99e9-4b3c-93a6-382ddbdcf5ce.jpg",
        harga:4000
    },
    {
        nama:"Panadol",
        src:"https://storage.googleapis.com/rxstorage/Product/Photos/farmaku_panadol-extra-strip-10-tablet-03.jpg",
        harga:2000
    },
    {
        nama:"Cap kaki tiga Botol",
        src:"https://d2qjkwm11akmwu.cloudfront.net/products/24932_17-10-2019_11-26-21-1665781852.webp",
        harga:4000
    },
    {
        nama:"Cap kaki tiga Kaleng",
        src:"https://d3bbrrd0qs69m4.cloudfront.net/images/product/large/apotek_online_k24klik_201811120330084677_larutan-kaki-tiga-jeruk.jpeg",
        harga:7000
    },
    {
        nama:"Adem Sari Ching Ku",
        src:"https://d2qjkwm11akmwu.cloudfront.net/products/334484_29-5-2022_21-22-22-1665780057.webp",
        harga:8000
    },
    {
        nama:"Ciptadent",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//95/MTA-25912625/ciptadent_ciptadent-pasta-gigi-fresh-mint-225-g_full01.jpg",
        harga:4500
    },
    {
        nama:"Dancow",
        src:"https://balihorecadistributor.com/wp-content/uploads/2021/12/Dancow-Instant-Sich-Vanila-27-gr.jpg",
        harga:4000
    },
    {
        nama:"Top Gula Aren",
        src:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/3/9/c68e058f-5e99-4ecd-b8a5-df7415e46798.jpg",
        harga:1500
    },
    {
        nama:"Teh Tarik",
        src:"https://images.tokopedia.net/img/cache/700/VqbcmM/2022/9/1/bb86992b-6d84-4a0b-bdeb-d6a4301a488b.jpg",
        harga:3000
    },
    {
        nama:"Indocafe",
        src:"https://images.tokopedia.net/img/cache/700/product-1/2020/5/4/58243785/58243785_6eaa77f3-2a97-45fa-b64f-e36e55efd6c2_700_700",
        harga:2000
    },
    {
        nama:"Fanta Kecil",
        src:"https://down-id.img.susercontent.com/file/sg-11134201-23010-5qzjna2nqxlv2b",
        harga:3500
    },
    // ROKOK
    {
        nama:"Magnum",
        src:"https://images.tokopedia.net/img/cache/700/VqbcmM/2021/1/24/661b1919-51d1-4261-934c-c3483c1c2572.jpg",
        harga:26000
    },
    {
        nama:"Gudang Garam",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-9355434/gudang_garam_rokok_gudang_garam_filter_full02_nqbhq59o.jpg",
        harga:27000
    },
    {
        nama:"Sampoerna Mild",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//104/MTA-28564727/sampoerna_rokok_sampoerna_mild_16_full01_ix94s02m.jpg",
        harga:35000
    },
    {
        nama:"Djarum Super",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-48905061/djarum_rokok_djarum_super_12_full01_n3i8k5z0.jpg",
        harga:26000
    },
    {
        nama:"Djarum Coklat",
        src:"https://assets.klikindomaret.com/share/10010083_1.jpg",
        harga:17000
    },
    {
        nama:"Essa Change Double",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//96/MTA-29723442/esse_change_rokok_esse_change_double_full01_gj2kdr6m.jpg",
        harga:40000
    },
    {
        nama:"Juara",
        src:"https://image1ws.indotrading.com/s3/productimages/webp/co37129/p1290587/w425-h425/d5acfa8f-57c1-4dc4-873b-cda4705c2bc1.png",
        harga:16000
    },
    {
        nama:"Juara Jambu",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/91/MTA-104107309/juara_rokok_juara_kretek_jambu_full01_uj1zxodz.jpg",
        harga:16000
    },
    {
        nama:"Brown Coffe",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/99/MTA-154017845/mr_brown_rokok_mr-_brown_-_coffee_full01_637c9477.jpg",
        harga:17000
    },
    {
        nama:"Sampoerna Kretek",
        src:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2020/7/4/06d8877f-6c92-43f4-82cb-69879efd7138.jpg",
        harga:15000
    },
    {
        nama:"Dji Sam Soe",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//106/MTA-29789520/dji_sam_soe_rokok_djisamsoe_16_full01_cc97fd8a.jpg",
        harga:21000
    },
    {
        nama:"Signature",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//98/MTA-2947382/gudang-garam-signature-black_gudang-garam-signature-black-rokok-filter--12-batang-per-bungkus-_full02.jpg",
        harga:26000
    },
    {
        nama:"Neslite",
        src:"https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//catalog-image/107/MTA-45751958/_neslite_rokok_neslite_full02_ad1c5025.jpg",
        harga:24000
    },
    {
        nama:"Climax",
        src:"https://images.tokopedia.net/img/cache/500-square/VqbcmM/2024/3/4/7911afd9-6192-4ab5-8027-b612d9405c1d.jpg",
        harga:24000
    },
]

export default data;

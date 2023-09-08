const dataPenjualanPakBudi = [
  {
    namaProduct: "Sepatu Adidas Ultraboost 21",
    hargaSatuan: 1300000,
    kategori: "Sepatu Sport",
    totalTerjual: 50,
  },
  {
    namaProduct: "Sepatu Puma RS-Fast",
    hargaSatuan: 1100000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 25,
  },
  {
    namaProduct: "Sepatu New Balance 990v5",
    hargaSatuan: 950000,
    kategori: "Sepatu Sport",
    totalTerjual: 40,
  },
  {
    namaProduct: "Sepatu Vans Old Skool",
    hargaSatuan: 700000,
    kategori: "Sepatu Sneaker",
    totalTerjual: 60,
  },
];

const hitungTotalPenjualanBudi = (dataPenjualan) => {
  let totalPenjualan = 0;
  dataPenjualan.filter((value) => {
    totalPenjualan = totalPenjualan + value.totalTerjual;
  });
  return totalPenjualan;
};

console.log(hitungTotalPenjualanBudi(dataPenjualanPakBudi));

<script setup>
    import Navbar from '@/components/Navbar.vue'
    import Card from "@/components/Card.vue"
    import DataBarangs from "@/data/Barangs.js"
    import { ref } from 'vue';

    const Barangs = ref(DataBarangs)

    function searchBarang (text){
        Barangs.value = DataBarangs.filter((barang) => barang.nama.toLowerCase().includes(text));
    }

</script>

<template>
    <Navbar />
    <div class="container mt-4">
        <div class="row">
            <div class="col-md-12 mb-3 input-group">
                <input @keyup="(e) => searchBarang(e.target.value)" type="text" placeholder="Cari Produk" autofocus class="form-control fs-3 border-end-0"  >
                <button class="btn border rounded-end border-start-0 fs-3" ><i class="bi bi-search"></i></button>
            </div>
            <div v-if="Barangs.length != 0" v-for="barang of Barangs" class="col-md-3 col-6">
                <Card :barang="barang"  />
            </div>
            <div v-else class="col-md-12">
                <h3 class="text-center" >Barang tidak ditemukan</h3>
            </div>
        </div>
    </div>
</template>
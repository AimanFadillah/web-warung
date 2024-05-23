<script setup>
    import FormatUang from '@/functions/FormatUang';
    defineProps(["barang"])
</script>

<template>
    <div class="card mb-3">
        <img :src="barang.src || 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg'" loading="lazy" class="h-image-card card-img-top img-fluid" :alt="barang.nama">
        <div class="card-body">
            <h4 class="card-title">{{ barang.nama }}</h4>
            <h6 class="bg-primary badge ">{{ FormatUang(barang.harga) }}</h6>
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue';
    const theme = ref(localStorage.getItem("theme") || "light");
    document.body.setAttribute("data-bs-theme",theme.value);

    function changeTheme (){
        theme.value = theme.value === "dark" ? "light" : "dark"
        document.body.setAttribute("data-bs-theme",theme.value);
        localStorage.setItem("theme",theme.value);
    }
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-primary">
        <div class="container-fluid d-flex justify-content-between">
            <div class="navbar-brand text-white fw-bold fs-4">Warung</div>
            <div @click="changeTheme" class="navbar-brand text-white fw-bold fs-4 pointer">
                <i v-if="theme === 'light'" class="bi bi-brightness-high-fill"></i>
                <i v-else class="bi bi-moon-stars-fill"></i>
            </div>
            <!-- <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Features</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Pricing</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link disabled" aria-disabled="true">Disabled</a>
                    </li>
                </ul>
            </div> -->
        </div>
    </nav>
</template>
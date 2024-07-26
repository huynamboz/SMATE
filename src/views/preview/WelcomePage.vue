<template>
    <ion-page class="welcom-page-container">
        <h1 class="welcom-page-welcom">Welcome</h1>
        <span class="welcom-page-content">CHỌN CHỦ ĐỀ BẠN YÊU THÍCH!</span>
        <div class="welcom-page-cards">
            <hero-card v-for="item in themes" :key="item.id" :hero-card="item" @click="addFavoritTheme(item.id)"
                :class="{ 'activeTheme': isFavoriteTheme(item.id) }" />
        </div>
        <ion-button href="type-travel" color="#007AFF" expand="block" class="welcom-page-button">Tiếp tục</ion-button>
    </ion-page>
</template>

<script setup lang="ts">
import HeroCard from '@/components/Welcom/HeroCard.vue';
import {  IonButton, IonPage } from '@ionic/vue';
import { ref } from 'vue';
import themes from "@/data/addressListData"

const favoriteTheme = ref<number[]>([])

function isFavoriteTheme(id: number) {
    return favoriteTheme.value.includes(id)
}

function addFavoritTheme(id: number) {
    if (isFavoriteTheme(id))
        favoriteTheme.value = favoriteTheme.value.filter(item => item !== id)
    else
        favoriteTheme.value.push(id)
}
</script>

<style scoped scss>
.ion-page {
    justify-content: flex-start;
}

.welcom-page-welcom {
    font-size: 32px;
    font-weight: 600;
    margin: 20px auto 10px auto;
    color: #007AFF;
}

.welcom-page-content {
    font-size: 14px;
    font-weight: 400;
    margin: 0 auto;
    color: #007AFF;
    letter-spacing: 3px;
}

.welcom-page-cards {
    display: flex;
    flex-wrap: wrap;
    margin: 16px;
    justify-content: center;
    gap: 24px;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .activeTheme {
        opacity: 1;
        transform: scale(1.02);
        transition: all 0.3s;
    }
}

.welcom-page-button {
    position: absolute;
    left: 46%;
    bottom: 20px;
    transform: translate(-50%, 0);
    width: calc(100% - 32px);
    margin: 0 16px;
    color: #fff;
    height: 50px;
    background-color: #007AFF;
    border-radius: 8px;
}
</style>
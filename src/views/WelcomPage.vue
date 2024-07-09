<template>
    <ion-page class="welcom-page-container">
        <h1 class="welcom-page-welcom">Welcom</h1>
        <span class="welcom-page-content">CHỌN CHỦ ĐỀ BẠN YÊU THÍCH!</span>
        <div class="welcom-page-cards">
            <hero-card v-for="item in data" :key="item.id" :hero-card="item" />
        </div>
        <ion-button color="#007AFF" expand="block" class="welcom-page-button">Tiếp tục</ion-button>
    </ion-page>
</template>

<script setup lang="ts">
import HeroCard from '@/components/Welcom/HeroCard.vue';
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonButton, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { ref } from 'vue';

const data = ref([
    {
        id: 1,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
    {
        id: 2,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
    {
        id: 3,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
    {
        id: 12,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    }, {
        id: 11,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
    {
        id: 14,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    }, {
        id: 15,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
    {
        id: 16,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    }, {
        id: 17,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
    {
        id: 18,
        urlImage: "https://danatravel.vn/data/images/369906538_637609305177560_672558242768429966_n.jpg",
        title: "Item 1"
    },
]
)
</script>

<style scoped scss>
.welcom-page-container {
    /* position: relative; */
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
    margin: auto;
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
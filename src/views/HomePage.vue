<template>
    <ion-page class="home-page-container">
        <ion-searchbar :debounce="500" class="home-page-search-bar" placeholder="Bạn muốn đi đâu?"></ion-searchbar>
        <div class="home-page-address-cards">
            <address-card class="home-page-address-cards-item" v-for="item in data" :key="item.id" :address-card="item" />
        </div>
        <div class="home-page-tour-cards">
            <tour-card v-for="item in data" :key="item.id" />
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonSearchbar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
import { ref } from 'vue';
import AddressCard from '@/components/Base/AddressCard.vue';
import TourCard from '@/components/Base/TourCard.vue';

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
.home-page-container {
    margin: 16px;
}
ion-searchbar.home-page-search-bar {
    background-color: #fff;
    border-radius: 18px;
}

.home-page-content {
    font-size: 14px;
    font-weight: 400;
    margin: auto;
    color: #007AFF;
    letter-spacing: 3px;
}

.home-page-address-cards {
    display: flex;
    margin: 16px;
    padding-left: 60px;
    justify-content: center;
    gap: 12px;
    overflow: auto;

    &::-webkit-scrollbar {
        display: none;
    }

    .home-page-address-cards-item {
        flex: 0 0 auto;
        margin-right: 10px;
        width: 100px;
        text-align: center;
        padding: 4px;
        /* height: 100px; */
    }
}

.home-page-tour-cards {

}
</style>
<template>
    <ion-page class="home-page-container">
        <ion-searchbar :debounce="500" color="#fff" class="home-page-search-bar" placeholder="Bạn muốn đi đâu?"></ion-searchbar>
        <div class="home-page-address-cards">
            <address-card class="home-page-address-cards-item" v-for="item in data" :key="item.id" :address-card="item"  @click="chooseAdrress(item.title)" />
        </div>
        <div class="home-page-tour-cards">
            <tour-card class="home-page-tour-cards-item" v-for="item in data" :key="item.id" :href="`detail/${item.id}`" />
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonSearchbar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
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

const address = ref<string>('')

function chooseAdrress(title: string) {
    address.value = title
}
</script>

<style scoped scss>
.home-page-container {
    margin: 16px;
}
ion-searchbar.home-page-search-bar {
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 18px;
    padding: 0 10px;
    min-height: 40px;
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
    padding-left: 150px;
    justify-content: center;
    gap: 12px;
    overflow: auto;
    min-height: 120px;

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
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: auto;

    .home-page-tour-cards-item {
        flex: 0 0 auto;
        margin-right: 10px;
        text-align: center;
        padding: 4px;
        /* height: 100px; */
    }
}
</style>
<template>
    <ion-page class="home-page-container bg-white">
        <InputGroup class="w-full px-2">
            <InputGroupAddon>
                <Icon icon="solar:magnifer-linear" />
            </InputGroupAddon>
            <InputText placeholder="Bạn muốn đi đâu?" />
        </InputGroup>
        <div class="home-page-address-cards">
            <address-card class="home-page-address-cards-item" v-for="item in addresses" :key="item.id"
                :address-card="item" @click="chooseAdrress(item.title)" />
        </div>
        <div class="home-page-tour-cards">
            <div class="home-page-tour-cards-item">
                <img class="rounded-md" src="/ads.jpg" alt="">
            </div>
            <router-link class="home-page-tour-cards-item" v-for="(item, index) in timelineList" :key="item._id"
                :to="`/detail/${item._id}`">
                <tour-card :tour-item="item"
                    :heart-icon="!activeFavoriteIcon[index] ? 'solar:heart-linear' : 'mdi:heart-circle-outline'"
                    @add-to-favorites="addToFavoriteTours(index)" />
            </router-link>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { onBeforeMount, ref, watch } from 'vue';
import AddressCard from '@/components/Base/AddressCard.vue';
import TourCard from '@/components/Base/TourCard.vue';
import addresses from '@/data/addressListData';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import { useRoute } from 'vue-router';
import { getAllTimelines } from '@/services/timeline';
import { Timeline } from './_id/DetailPage.vue';

const route = useRoute()
const address = ref<string>('')
const favoriteTours = ref<any[]>([])
const activeId = ref<number>(1)
const activeFavoriteIcon = ref<boolean[]>([])
const searchValue = ref<string>('')
const timelineList = ref<Timeline[]>([])

function chooseAdrress(title: string) {
    address.value = title
}

function filterActiveFavoriteTour() {
    activeFavoriteIcon.value = activeFavoriteIcon.value.map(() => false)
    favoriteTours.value.forEach(item => activeFavoriteIcon.value[item] = true)
    console.log(activeFavoriteIcon.value);
}

function addToFavoriteTours(id: number) {
    activeId.value = id
    if (favoriteTours.value.includes(activeId.value)) {
        activeFavoriteIcon.value[id] = false
        favoriteTours.value = favoriteTours.value.filter(item => item !== id)
    } else {
        favoriteTours.value.push(id)
        activeFavoriteIcon.value[id] = true
    }
    localStorage.setItem('favoriteTours', JSON.stringify(favoriteTours.value))
}

async function getAllTimelinesData() {
    try {
        const data = await getAllTimelines()
        timelineList.value = data.data
    } catch (error) {
        console.error(error)
    }
}

watch(() => route.fullPath, () => {
    const favoriteToursJson = localStorage.getItem("favoriteTours");
    if (favoriteToursJson !== null) {
        const tours = JSON.parse(favoriteToursJson);
        if (Array.isArray(tours)) {
            favoriteTours.value = tours
        }
    }
    filterActiveFavoriteTour()
})

onBeforeMount(async () => {
    const favoriteToursJson = localStorage.getItem("favoriteTours");
    if (favoriteToursJson !== null) {
        const tours = JSON.parse(favoriteToursJson);
        if (Array.isArray(tours)) {
            favoriteTours.value = tours
        }
    }
    filterActiveFavoriteTour()
    await getAllTimelinesData()
})
</script>

<style scoped scss>
.ion-page {
    justify-content: flex-start;
}

.home-page-container {
    padding: 16px;
}

.home-page-search-bar {
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
    margin: 16px 0;
    align-items: center;
    ;
    gap: 12px;
    overflow: auto;
    min-height: 120px;

    &::-webkit-scrollbar {
        display: none;
    }

    .home-page-address-cards-item {
        flex: 0 0 auto;
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
        text-align: center;
        padding: 4px 0px;
        /* height: 100px; */
    }
}
</style>
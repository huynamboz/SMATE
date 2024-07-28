<template>
    <ion-page class="home-page-container">
        <InputGroup class="w-full px-2">
            <InputGroupAddon>
                <Icon icon="solar:magnifer-linear" />
            </InputGroupAddon>
            <InputText placeholder="Bạn muốn đi đâu?" />
        </InputGroup>
        <div v-if="favoriteToursList.length" class="home-page-tour-cards">
            <tour-card class="home-page-tour-cards-item" v-for="(item, index) in favoriteToursList" :key="item._id"
                :heart-icon="activeFavoriteIcon[index] ? 'mdi:heart-circle-outline' : 'solar:heart-linear'"
                :href="`detail/${item._id}`" :tour-item="item" @add-to-favorites="addToFavoriteTours(index)" />
        </div>
        <div v-else class="text-center m-auto px-6">
            <img src="//icons.veryicon.com/png/o/business/financial-category/no-data-6.png" class="opacity-50"
                alt="empty">
            <span class="text-gray-500">Hãy thêm lịch trình yêu thích của bạn để có thể nhanh chóng trải nghiệm
                nhé!</span>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { computed, onBeforeMount, ref, watch } from 'vue';
import TourCard from '@/components/Base/TourCard.vue';
import tours from '@/data/tourListData';
import { useRoute } from 'vue-router';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import { getAllTimelines } from '@/services/timeline';
import { Timeline } from './_id/DetailPage.vue';

const route = useRoute()
const favoriteTours = ref<any[]>([])
const timelineList = ref<Timeline[]>([])
const favoriteToursList = computed(() => {
    return timelineList.value.filter((item, index) => favoriteTours.value.includes(index))
})

const activeId = ref<number>(1)
const activeFavoriteIcon = ref<boolean[]>([])

function filterActiveFavoriteTour() {
    favoriteTours.value.forEach((item, index) => activeFavoriteIcon.value[index] = true)
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
            // debugger
            console.log(tours);

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
            console.log(tours);

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

.home-page-tour-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: auto;
    margin-top: 16px;

    .home-page-tour-cards-item {
        flex: 0 0 auto;
        margin-right: 10px;
        text-align: center;
        padding: 4px;
        /* height: 100px; */
    }
}
</style>
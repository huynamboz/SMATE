<template>
    <ion-page class="home-page-container">
        <ion-searchbar :debounce="500" color="#fff" class="home-page-search-bar"
            placeholder="Bạn muốn đi đâu?"></ion-searchbar>
        <div class="home-page-tour-cards">
            <tour-card class="home-page-tour-cards-item" v-for="item in favoriteToursList" :key="item.id"
                :heart-icon="activeFavoriteIcon[item.id] ? heartCircleOutline : heartOutline" :href="`detail/${item.id}`"
                :tour-item="item" @add-to-favorites="addToFavoriteTours(item.id)" />
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonSearchbar, IonPage } from '@ionic/vue';
import { computed, onMounted, ref } from 'vue';
import TourCard from '@/components/Base/TourCard.vue';
import tours from '@/data/tourListData'
import { heartOutline, heartCircleOutline } from 'ionicons/icons';

const favoriteTours = ref<any[]>([])
const favoriteToursList = computed(() => {
    return tours.filter(item => favoriteTours.value.includes(item.id))
})

const activeId = ref<number>(1)
const activeFavoriteIcon = ref<boolean[]>([])

function filterActiveFavoriteTour() {
    favoriteTours.value.forEach(item => activeFavoriteIcon.value[item] = true )
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

onMounted(() => {
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
    console.log('kkkkk', activeFavoriteIcon.value);
    
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

    &::-webkit-scrollbar {
        display: none;
    }
}
</style>
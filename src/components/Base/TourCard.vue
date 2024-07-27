<template>
    <ion-card class="tour-card-container">
        <!-- <ion-card-header> -->
            <img class="w-full h-[200px] rounded-lg object-cover" v-image="imageUrl"
                alt=""/>
        <!-- </ion-card-header> -->
        <ion-card-content class="tour-card-content">
            <div class="tour-card-infor">
                <div class="flex items-center gap-1">
                    <Icon icon="material-symbols:location-on-outline" class="text-base tour-card-adress-icon" color="#007AFF"/>
                    <p class="tour-card-address w-auto min-w-[90px]">{{ getTextBeforeDash(tourItem.destination) }}</p>
                </div>
                <div class="min-w-[140px]">
                    <p>{{ `${getDaysDifference(tourItem.fromDate, tourItem.toDate) + 1} ngày ${getDaysDifference(tourItem.fromDate, tourItem.toDate)} đêm ` }}</p>
                    <p>{{ getHalfBudget(tourItem.budget, tourItem.numberOfPeople) }} VNĐ/người</p>
                </div>
            </div>
            <Icon :icon="heartIcon" class="text-3xl" color="#007AFF" @click.prevent="$emit('addToFavorites', tourItem.id)"/>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts" setup>
import { IonCard, IonCardContent } from '@ionic/vue';
import { defineEmits, onBeforeMount, onMounted, ref } from 'vue';
import { getTextBeforeDash, getDaysDifference, getHalfBudget } from '@/utils/timeline';
import { getImageFromDestination } from '@/services/timeline';
const prop = defineProps(['tourItem', 'heartIcon'])
defineEmits(['addToFavorites'])

const imageUrl = ref<string>('')

const getImage = async () => {
    const url = await getImageFromDestination(prop.tourItem.destination.split('-')[0]?.trim())
    console.log("hehe",url)
    imageUrl.value = url.results[0].urls.regular
}

onBeforeMount(() => {
    getImage()
})
</script>

<style scoped scss>

.tour-card-container {
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: pointer;
}

.tour-card-image {
    border-radius: 16px;
    border: 1px solid #ebebeb;
    height: 192px;
    object-fit: cover;
}

.tour-card-content {
    border-radius: 16px;
    border: 1px solid #ebebeb;
    margin: 13px 0px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 16px;

    .tour-card-infor {
        display: flex;
        justify-content: space-between;
        align-items: center;
        gap: 10px;
        width: 67%;

        .tour-card-address {
            font-size: 14px;
            font-weight: 600;
            text-align: left;
        }
    }

    .tour-card-adress-icon {
        flex: 0 0 auto;
    }

    .tour-card-time {
        font-size: 14px;
        font-weight: 400;
    }

}
</style>
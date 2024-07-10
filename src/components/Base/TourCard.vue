<template>
    <ion-card class="tour-card-container">
        <ion-card-header>
            <img class="tour-card-image" :src="tourItem.urlImage"
                alt=""/>
        </ion-card-header>
        <ion-card-content class="tour-card-content">
            <div class="tour-card-infor">
                <span class="tour-card-address">{{ tourItem.address }}</span>
                <div>
                    <p>{{ tourItem.time }}</p>
                    <p>{{ tourItem.cost }}/người</p>
                </div>
            </div>
            <ion-icon :icon="heartIcon" size="large" @click.prevent="$emit('addToFavorites', tourItem.id)"></ion-icon>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts" setup>
import { IonCard, IonCardContent, IonCardHeader } from '@ionic/vue';
import { defineEmits } from 'vue';
import { IonIcon } from '@ionic/vue';

defineProps(['tourItem', 'heartIcon'])
defineEmits(['addToFavorites'])
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
        }
    }



    .tour-card-time {
        font-size: 14px;
        font-weight: 400;
    }

}
</style>
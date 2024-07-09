<template>
    <ion-card class="tour-card-container">
        <ion-card-header>
            <img class="tour-card-image" src="https://cdn.pixabay.com/photo/2020/05/10/00/53/hue-city-5151869_1280.jpg"
                alt=""/>
        </ion-card-header>
        <ion-card-content class="tour-card-content">
            <div class="tour-card-infor">
                <span class="tour-card-address">Huế</span>
                <div>
                    <p> 2 ngày 1 đêm</p>
                    <p> 1000k/người</p>
                </div>
            </div>
            <ion-icon :icon="heartOutline" size="large" @click.prevent="addFavoriteTour(id)"></ion-icon>
        </ion-card-content>
    </ion-card>
</template>

<script lang="ts">
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/vue';
import { defineComponent } from 'vue';
import { IonIcon } from '@ionic/vue';
import { heartOutline } from 'ionicons/icons';

export default defineComponent({
    components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonIcon },
    emits: ['addFavoriteTour'],
    setup() {
        return { heartOutline };
    },
});
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
<template>
    <ion-card class="address-card-container">
        <img class="address-card-image" :src="addressCard.urlImage" alt="" />
        <p class="address-card-title">{{ addressCard.title }}</p>
    </ion-card>
</template>

<script lang="ts">
import { IonCard } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: { IonCard },
    props: {
        addressCard: {
            type: Object,
            required: true
        }
    }
});
</script>

<style scoped scss>
.address-card-container {
    box-shadow: none;
    padding: 0;
    margin: 0;
    position: relative;
    width: 100%;
    border-radius: 16px;
    cursor: pointer;
    /* border: 1px solid #ebebeb; */
    cursor: pointer;

    .address-card-image {
        border-radius: 16px;
        width: 90px;
        height: 80px;
        object-fit: cover;
        padding: 4px;

        img {
            border-radius: 16px;
            width: 100%;
            height: auto;
            object-fit: cover;
        }
    }

    .address-card-title {
        font-size: 12px;
        text-align: center;
        width: 100%;
        font-weight: 550;
    }
}
</style>
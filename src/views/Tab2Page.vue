<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Tab 24 3</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Tab 2</ion-title>
        </ion-toolbar>
      </ion-header>
      <tour-card />
      <hero-card />
      <!-- <ExploreContainer name="Tab 2 page" /> -->
      <ion-button @click="openModal">Open Modal</ion-button>
      <Button @click="openModal">Open Modal</Button>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import Button from '@/components/Base/Button.vue';
import TourCard from '@/components/Base/TourCard.vue';
import HeroCard from '@/components/Welcom/HeroCard.vue';
</script>

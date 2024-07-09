<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar class="tabbar-custom" slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
        </ion-tab-button>
        <ion-tab-button tab="create1" href="/tabs/chart">
          <ion-icon aria-hidden="true" :icon="analytics" />
        </ion-tab-button>
        <ion-tab-button tab="create" href="/tabs/create">
          <div class="add-btn">
            <ion-icon aria-hidden="true" :icon="addOutline" />
          </div>
        </ion-tab-button>
        <ion-tab-button tab="tab2" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="heart" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab3">
          <ion-icon aria-hidden="true" :icon="person" />
        </ion-tab-button>

        
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, home, addOutline, analytics, heart, person } from 'ionicons/icons';
</script>

<style>
.tabbar-custom {
  --background: #ffffff;
  --border-color: #cbcbcb;
  --border-style: solid;
  --border-width: 1px;
  border: 1px solid #cbcbcb;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  overflow: hidden;
}

.add-btn {
  --background: #cbcbcb;
  border-radius: 10px;
  width: 40px;
  max-width: 40px;
  height: 40px;
  overflow: hidden;
  color: #000000;
  background-color: #cbcbcb;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2.5em;
  font-weight: 800;
}
.tab-selected .add-btn {
  color: #007aff;
}
</style>
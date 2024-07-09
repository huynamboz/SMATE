<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>TravelMate!</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="page-container" :fullscreen="true">
      <div class="wrapper">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title class="title" size="large">TravelMate!</ion-title>
          </ion-toolbar>
        </ion-header>
      </div>

      <!-- <ExploreContainer name="a" /> -->
      <ion-grid class="wrapper">
        <ion-row>
          <ion-col>
            <ion-label>Tạo lịch cho riêng bạn</ion-label>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col><ion-input :autocapitalize="'on'" aria-label="Custom input" placeholder="Tìm kiếm địa điểm"
              class="custom"></ion-input></ion-col>
        </ion-row>
      </ion-grid>
      <div class="time-container">
        <div class="time-travel">
          <div class="time-travel__header">
            <p>Thời gian</p>
            <p>5 ngày</p>
          </div>
          <div class="time-travel__main">
            <div class="time-travel__main__item">
              <p>Ngày đi</p>
              <p>20/10/2021</p>
            </div>
            <div class="time-travel__main__item">
              <p>Ngày về</p>
              <p>
                25/10/2021
              </p>
            </div>
          </div>
        </div>

        <!-- range -->
        <div class="field">
          <p>
            Ngân sách
          </p>
          <ion-range :dual-knobs="true" :value="{ lower: 20, upper: 80 }">
            <ion-label slot="start">500k</ion-label>
            <ion-label slot="end">100.000k</ion-label>
          </ion-range>
        </div>

        <div class="field customer">
          <p>
            Khách
          </p>
          <div>
            <ion-icon class="icon" @click="removeCustomer" aria-hidden="true" :icon="removeCircle" />
            <p>{{ customer }}</p>
            <ion-icon class="icon" @click="addCustomer" aria-hidden="true" :icon="addCircle" />
          </div>
        </div>

        <div class="field">
          <div class="row">
            <div>
              <ion-select class="select-custom" placeholder="Favorite Fruit">
                <ion-select-option value="apple">Apple</ion-select-option>
                <ion-select-option value="banana">Banana</ion-select-option>
                <ion-select-option value="orange">Orange</ion-select-option>
              </ion-select>
            </div>
            <div>
              <ion-input aria-label="Custom input" placeholder="Địa điểm muốn ghé" class="custom"></ion-input>
            </div>
          </div>
        </div>
        <div class="field">
              <ion-input aria-label="Custom input" placeholder="Yêu cầu đặc biệt" class="custom"></ion-input>
        </div>

        <div class="field">
          <ion-button expand="block" class="btn-custom">Tạo timeline bằng AI</ion-button>
        </div>
      </div>

    </ion-content>
  </ion-page>
</template>

<style>
ion-input.custom {
  --background: #ffffff;
  --placeholder-color: #868686;
  --placeholder-opacity: 0.8;

  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  --border-color: #cbcbcb;
  --border-style: solid;
  --border-width: 1px;
  border: 1px solid #cbcbcb;
  border-radius: 20px;
  overflow: hidden;
}

ion-input.custom.ios .input-bottom .helper-text,
ion-input.custom.ios .input-bottom .counter,
ion-input.custom.md .input-bottom .helper-text,
ion-input.custom.md .input-bottom .counter {
  color: #2b2b2d;
}
</style>
<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRange } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { addCircle, removeCircle } from 'ionicons/icons';
import { ref } from 'vue';
import { IonInput, IonGrid, IonRow, IonCol, IonLabel, IonIcon } from '@ionic/vue';

const customer = ref(1);
function addCustomer() {
  customer.value++;
}

function removeCustomer() {
  if (customer.value > 1) {
    customer.value--;
  }
}
</script>
<style scoped>
.wrapper {
  padding: 0 20px;
}

.title {
  font-size: 2em;
  padding: 0 0;
  color: #007aff;
  font-weight: 800;
}

.grid-container {
  margin-top: 30px;
}

.page-container {
  padding: 0 20px !important;
}

.time-container {
  padding: 20px;
}

.time-travel {
  border: 1px solid #cbcbcb;
  border-radius: 10px;
}

.time-travel__header {
  display: flex;
  justify-content: space-between;
  padding: 0 20px;
  border-bottom: 1px solid #cbcbcb;
}

.time-travel__main {
  display: flex;
}

.time-travel__main__item {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  padding: 10px 20px;
}

.time-travel__main__item p:nth-child(1) {
  font-weight: 800;
}

.field {
  margin-top: 20px;
}

.customer {
  display: flex;
  justify-content: space-between;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  padding: 0 10px;
  border-radius: 10px;
}

.customer>div {
  display: flex;
  align-items: center;
  gap: 10px;
}

.icon {
  font-size: 1.5em;
  color: #007aff;
}

.row {
  display: flex;
  gap: 10px;
  justify-content: space-between;
}

.row div {
  flex: 1;
}

.select-custom {
  --background: #ffffff;
  --placeholder-color: #868686;
  --placeholder-opacity: 0.8;

  --padding-bottom: 10px;
  --padding-end: 10px;
  --padding-start: 10px;
  --padding-top: 10px;
  --border-color: #cbcbcb;
  --border-style: solid;
  --border-width: 1px;
  border: 1px solid #cbcbcb;
  border-radius: 20px;
  overflow: hidden;
}

.btn-custom {
  --background: #007aff;
  --color: #ffffff;
  border-radius: 14px;
}
</style>
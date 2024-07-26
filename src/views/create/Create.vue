<template>
  <ion-page>
    <div class="loading" v-if="isLoading">
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="#000000" d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" opacity=".25"/><path fill="#000000" d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
      <p>Đang tạo...</p>
    </div>
    <ion-content class="page-container" :fullscreen="true">
      <!-- <ExploreContainer name="a" /> -->
      <div class="p-5">
        <p>Tìm kiếm địa điểm</p>
      </div>
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
              <ion-input aria-label="Custom input" placeholder="Địa điểm muốn ghé" class="custom"></ion-input>
            </div>
          </div>
          <div class="row" style="margin-top: 20px;">
              <ion-select class="select-custom" placeholder="Chế độ tạo AI">
                <ion-select-option value="banana">Tạo timeline tổng quan</ion-select-option>
                <ion-select-option value="apple">Tạo timeline chi tiết</ion-select-option>
                <ion-select-option value="orange">Tạo timeline cực chi tiết (premium)</ion-select-option>
              </ion-select>
          </div>
        </div>
        <div class="field">
              <ion-input aria-label="Custom input" placeholder="Yêu cầu đặc biệt" class="custom"></ion-input>
        </div>

        <div class="field">
          <ion-button @click="onSubmited" expand="block" class="btn-custom">Tạo timeline bằng AI</ion-button>
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
import { IonPage, IonHeader,IonButton, IonToolbar, IonTitle, IonContent, IonRange, IonSelect, IonSelectOption } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { addCircle, removeCircle } from 'ionicons/icons';
import { ref } from 'vue';
import { IonInput, IonGrid, IonRow, IonCol, IonLabel, IonIcon } from '@ionic/vue';
import { useRouter } from 'vue-router';

const customer = ref(1);
function addCustomer() {
  customer.value++;
}

function removeCustomer() {
  if (customer.value > 1) {
    customer.value--;
  }
}

const isLoading = ref(false);
const router = useRouter();
const onSubmited = () => {
  isLoading.value = true;
  setTimeout(() => {
    router.push('/detail/4');
    isLoading.value = false;

  }, 2000);
}
</script>
<style scoped>
.wrapper {
  padding: 0 20px;
  padding-top: 40px;
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
  padding: 10px 20px;
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
  padding: 10px 10px;
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
  width: 100%;
}

.btn-custom {
  --background: #007aff;
  --color: #ffffff;
  border-radius: 14px;
}

.loading {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
  flex-direction: column;
  color: #fff;
}
</style>
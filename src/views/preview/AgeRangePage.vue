<template>
  <ion-page class="welcom-page-age-range-container">
    <h1 class="welcom-page-age-range-welcom">Welcome</h1>
    <span class="welcom-page-age-range-content">SỐ TUỔI CỦA BẠN BAO NHIÊU?</span>
    <div class="welcom-page-age-range-cards mt-10">
      <div v-for="category in ageRange" :key="category.id"
        class="flex items-center px-2 py-4 border text-center rounded-2xl"
        :class="{ 'activeTheme': selectedAgeRange === category.value }">
        <RadioButton class="hidden" v-model="selectedAgeRange" :inputId="category.value" name="dynamic"
          :value="category.value" />
        <label :for="category.value" class="ml-2 w-full">{{ category.title }}</label>
      </div>
    </div>
    <div class="flex items-center justify-between welcom-page-age-range-button-group">
      <ion-button href="type-travel" color="#007AFF" expand="block" class="welcom-page-age-range-button text-[#007AFF]">Quay
        lại</ion-button>
      <ion-button href="home" color="#007AFF" expand="block" class="welcom-page-age-range-button bg-[#007AFF] text-white">Tiếp
        tục</ion-button>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonButton, IonPage } from '@ionic/vue';
import { ref } from 'vue';
import ageRange from "@/data/ageRangeData"
import RadioButton from 'primevue/radiobutton';

const selectedAgeRange = ref<string>(ageRange[0].value)

</script>

<style scoped scss>
.ion-page {
  justify-content: flex-start;
}

.welcom-page-age-range-welcom {
  font-size: 32px;
  font-weight: 600;
  margin: 20px auto 10px auto;
  color: #007AFF;
}

.welcom-page-age-range-content {
  font-size: 14px;
  font-weight: 400;
  margin: 20px auto;
  color: #007AFF;
  letter-spacing: 3px;
}

.welcom-page-age-range-cards {
  display: flex;
  flex-direction: column;
  margin: 16px;
  margin-top: 70px;
  justify-content: center;
  gap: 24px;
  padding: 0 16px;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  .activeTheme {
    opacity: 1;
    transform: scaleX(1.05);
    transition: all 0.3s;
    background-color: #6fb5ff;
    color: #fff;
  }
}

.welcom-page-age-range-button-group {
  position: absolute;
  left: 50%;
  bottom: 20px;
  transform: translate(-50%, 15%);
  width: 100%;

  .welcom-page-age-range-button {
    width: calc(100% - 32px);
    margin: 0 16px;
    height: 50px;
    border-radius: 8px;
  }
}
</style>

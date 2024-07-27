<template>
  <ion-page>
    <div class="w-full h-screen" v-if="!isLogged">
      <router-link :to="{ name: 'home'}" class="bg-white w-10 h-10 rounded-xl opacity-80 flex justify-center items-center fixed top-10 left-10 z-10">
        <Icon class="text-xl" icon="solar-alt-arrow-left-outline" />
      </router-link>
      <div class="fixed top-[50%] w-full flex flex-col gap-5 items-center">
        <router-link class="w-full flex justify-center" to="/auth/login">
          <Button class="w-[90%] rounded-full h-16" label="Đăng nhập" />
        </router-link>
        <router-link class="w-full flex justify-center" to="/auth/register">
          <Button class="w-[90%] rounded-full h-16" severity="secondary"  label="Đăng Ký" />
        </router-link>
      </div>
      <img class="h-full w-full object-cover" src="@/assets/img/bg1.avif" alt="">
    </div>
    <div class="p-5 flex flex-col overflow-hidden">
      <div>
        <!-- user -->
         <p class="text-xl font-bold">Lịch trình đã tạo</p>
      </div>
      <div class="overflow-y-auto mt-5">
        <router-link class="home-page-tour-cards-item" v-for="item in timelineList" :key="item._id"
            :to="`/detail/${item._id}`">
            <tour-card :tour-item="item"
                :heart-icon="'mdi:heart-circle-outline'"
                />
        </router-link>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

import Button from 'primevue/button';
import { RouterLink } from 'vue-router';
import { onMounted, ref } from 'vue';
import { getAllTimelines } from '@/services/timeline';
import TourCard from '@/components/Base/TourCard.vue';
const isLogged = ref(localStorage.getItem('token') ? true : false);
const timelineList = ref<any[]>([])
  async function getAllTimelinesData() {
    try {
        const data = await getAllTimelines()
        console.log(data, 'hiiiiiiiiiiiiiiiii');

        timelineList.value = data.data
    } catch (error) {
        console.log(error);
    }
  }
  onMounted(() => {
    getAllTimelinesData()
  })
</script>

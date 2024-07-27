<template>
  <ion-page>
    <div class="w-full h-screen">
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
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

import Button from 'primevue/button';
import { RouterLink } from 'vue-router';

</script>

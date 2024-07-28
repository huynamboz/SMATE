<template>
  <ion-page>
    <div class="address-detail h-screen flex flex-col pb-8">
      <div class="border-b flex items-center py-2 mt-4">
        <RouterLink :to="{ name: 'home' }" class="btn-back" @click="onBack">
          <ion-icon :icon="chevronBackOutline" style="font-size: 26px; color: #007AFF;"></ion-icon>
        </RouterLink>
        <span class="inline-block w-full text-center text-base font-semibold">Chi tiết địa điểm</span>
      </div>
      <div class="px-4 mt-6 overflow-y-auto flex flex-col">
        <p class="font-bold text-2xl text-gray-500">{{ currentStop?.name }}</p>
        <div class="my-4">
          <p class="flex gap-2 items-center py-1">
            <Icon icon="material-symbols:timer-outline" class="icon-review text-lg" color="#007aff" />
            <span class="text-[#007aff]">{{ currentStop?.time_range }}</span>
          </p>
          <p class="flex gap-2 items-center py-1">
            <Icon icon="material-symbols:location-on-outline-rounded" class="icon-review text-lg" color="#007aff" />
            <span class="text-[#007aff]">{{ currentStop?.address }}</span>
          </p>
        </div>
        <a :href="currentStop?.google_map_link" class="w-full border text-center py-2 mb-6 rounded-xl text-white bg-[#007aff]">Đi đến Google Map</a>
        <div>
          <Carousel :value="vungTauImages" :numVisible="3" :numScroll="1" :responsiveOptions="responsiveOptions"
            circular :autoplayInterval="3000" class="color: #007aff">
            <template #item="slotProps">
              <div>
                <img :src="slotProps.data" alt="adrress" class="w-full h-[160px] rounded-xl">
              </div>
            </template>
          </Carousel>
          <div>
            <p class="text-xl font-semibold py-4 mt-2">Review summary</p>
            <div>
              <div class="flex gap-2 items-center">
                <span class="text-xl font-bold">{{ currentStop?.rating }}</span>
                <Rating v-if="currentStop?.rating" v-model="currentStop.rating" color="#FBBC05" disabled />
                <span>({{ currentStop?.reviews?.length ?? 0 + 8 }})</span>
              </div>
            </div>
            <div class="mt-4 py-3 border-t">
              <div v-for="item in currentStop?.reviews" :key="item.time" class="reivew-ratting flex flex-col gap-1 pb-6">
                <div class="flex gap-2 items-center">
                  <img :src="item.profile_photo_url" alt="avatar" class="w-[40px] h-[40px] rounded-full">
                  <div>
                    <span class="font-bold">{{ item.author_name }}</span>
                  </div>
                </div>

                <Rating v-model="item.rating" color="#FBBC05" disabled class="mt-2" />
                <div class="summary">
                  <p>{{
                    isShowFullText ? item.text : item.text.slice(0, 80) + '...'
                    }}</p>
                  <button class=" text-blue-600" @click="isShowFullText = !isShowFullText">
                    {{ isShowFullText ? 'Thu gọn' : 'Xem thêm' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ion-page>

</template>

<script setup lang="ts">
import { useRouter, useRoute } from 'vue-router';
import { chevronBackOutline } from 'ionicons/icons';
import Carousel from 'primevue/carousel';
import { onBeforeMount, ref } from "vue";
import { Icon } from '@iconify/vue';
import Rating from 'primevue/rating';
import { IonPage } from '@ionic/vue';
import type { Stop } from '../DetailPage.vue';

const vungTauImages = [
  "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
  "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
  "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg",
  "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
  "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
  "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg",
];
const currentStop = ref<Stop>();

const responsiveOptions = ref([
  {
    breakpoint: '1400px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '1199px',
    numVisible: 3,
    numScroll: 1
  },
  {
    breakpoint: '767px',
    numVisible: 2,
    numScroll: 1
  },
  {
    breakpoint: '575px',
    numVisible: 1,
    numScroll: 1
  }
]);
const route = useRoute();
const router = useRouter();
const onBack = () => {
  router.push(`/detail/${route.params.id}`)
}
const isShowFullText = ref<boolean>(false);

onBeforeMount(() => {
  currentStop.value = JSON.parse(localStorage.getItem('addressReview') as string);
})
</script>

<style scoped>
.review-images {
  &::-webkit-scrollbar {
    display: none;
  }
}

.icon-review {
  flex: 0 0 auto;
}
</style>

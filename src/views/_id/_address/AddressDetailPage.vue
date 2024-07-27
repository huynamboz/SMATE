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
        <p class="font-bold text-2xl text-gray-500">Biển Vũng tàu</p>
        <div class="my-4">
          <div class="pb-2">
            <span class="font-bold text-gray-500">Detail</span>
            <div class="summary">
              <p>{{
                isShowFullText ? detail : detail.slice(0, 80) + '...'
                }}</p>
              <button class=" text-blue-600" @click="isShowFullText = !isShowFullText">
                {{ isShowFullText ? 'Thu gọn' : 'Xem thêm' }}
              </button>
            </div>
          </div>
          <p class="flex gap-2 items-center py-1">
            <Icon icon="material-symbols:timer-outline" color="#007aff" />
            <span class="text-[#007aff]">10h00 - 11h00</span>
          </p>
          <p class="flex gap-2 items-center py-1">
            <Icon icon="material-symbols:location-on-outline-rounded" color="#007aff" />
            <span class="text-[#007aff]">08 Bàu Vàng</span>
          </p>
        </div>
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
                <span class="text-xl font-bold">{{ value }}</span>
                <Rating v-model="value" color="#FBBC05" disabled />
                <span>(19)</span>
              </div>
            </div>
            <div class="mt-4 py-3 border-t">
              <div v-for="item in reviews" :key="item.id" class="reivew-ratting flex flex-col gap-1 pb-4">
                <div class="flex gap-2 items-center">
                  <img :src="item.user?.avtUrl" alt="" class="w-[40px] h-[40px] rounded-full">
                  <div>
                    <span class="font-bold">{{ item.user?.user_name }}</span>
                  </div>
                </div>

                <Rating v-model="item.rating" color="#FBBC05" disabled class="mt-2" />
                <p>{{ item.content }}</p>
                <div class="flex gap-2 flex-nowrap overflow-y-auto py-1 review-images">
                  <template v-for="(url, index) in item.images" :key="index">
                    <img :src="url" alt="review" class="w-[50px] h-[50px] rounded-xl">
                    <img :src="url" alt="review" class="w-[50px] h-[50px] rounded-xl">
                    <img :src="url" alt="review" class="w-[50px] h-[50px] rounded-xl">
                    <img :src="url" alt="review" class="w-[50px] h-[50px] rounded-xl">
                  </template>
                </div>
                <!-- <div class="flex gap-2 flex-wrap w-full">
                      <div v-for="(image, index) in item.images" :key="index">
                        <img :src="image" alt="review" class="w-[60px] h-[60px] rounded-xl">
                        <img :src="image" alt="review" class="w-[60px] h-[60px] rounded-xl">
                        <img :src="image" alt="review" class="w-[60px] h-[60px] rounded-xl">

                      </div>
                    </div> -->
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
import { ref } from "vue";
import { Icon } from '@iconify/vue';
import Rating from 'primevue/rating';
import { IonPage } from '@ionic/vue';
import VirtualScroller from 'primevue/virtualscroller';

const detail = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus. Nulla nec purus feugiat, molestie ipsum et, ultricies metus.";
// import { ProductService } from '@/service/ProductService';
const vungTauImages = [
  "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
  "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhieutour.com.vn%2Fcan-tho-vung-tau-2-ngay-1-dem&psig=AOvVaw1ntDgdvSCeBnMxOwO8ENmf&ust=1722134457114000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCX0PaYxocDFQAAAAAdAAAAABAf",
  "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg",
  "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
  "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
  "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg",
];

const value = ref<number>(4)

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
const reviews = [
  {
    id: 1,
    content: "very good",
    user: {
      user_id: 1,
      user_name: "Nhan cute",
      avtUrl: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fOpN9UKqC2MQ7kNvgHz9q4B&_nc_ht=scontent.fdad2-1.fna&oh=00_AYAKnDgP_8s_P89-fC-XUFTI6_XPabIGQKj3aczggT6TMw&oe=66AA2BD0",
    },
    rating: 4.5,
    images: [
      "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
      "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhieutour.com.vn%2Fcan-tho-vung-tau-2-ngay-1-dem&psig=AOvVaw1ntDgdvSCeBnMxOwO8ENmf&ust=1722134457114000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCX0PaYxocDFQAAAAAdAAAAABAf",
      "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg"
    ]
  },
  {
    id: 2,
    content: "very good",
    user: {
      user_id: 1,
      user_name: "Nhan cute",
      avtUrl: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fOpN9UKqC2MQ7kNvgHz9q4B&_nc_ht=scontent.fdad2-1.fna&oh=00_AYAKnDgP_8s_P89-fC-XUFTI6_XPabIGQKj3aczggT6TMw&oe=66AA2BD0",
    },
    rating: 4.5,
    images: [
      "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
      "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhieutour.com.vn%2Fcan-tho-vung-tau-2-ngay-1-dem&psig=AOvVaw1ntDgdvSCeBnMxOwO8ENmf&ust=1722134457114000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCX0PaYxocDFQAAAAAdAAAAABAf",
      "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg"
    ]
  },
  {
    id: 3,
    content: "very good",
    user: {
      user_id: 1,
      user_name: "Nhan cute",
      avtUrl: "https://scontent.fdad2-1.fna.fbcdn.net/v/t39.30808-6/426587256_1430509044210042_7946706195478323343_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=fOpN9UKqC2MQ7kNvgHz9q4B&_nc_ht=scontent.fdad2-1.fna&oh=00_AYAKnDgP_8s_P89-fC-XUFTI6_XPabIGQKj3aczggT6TMw&oe=66AA2BD0",
    },
    rating: 4.5,
    images: [
      "https://sodl.baria-vungtau.gov.vn/portal/widget/widget_133366762102229738.jpg",
      "https://charmlonghai.vn/upload/media/bariavungtauthuchiendongbonhieugiaiphapphattrien-1304.jpg",
      "https://www.google.com/url?sa=i&url=https%3A%2F%2Fhieutour.com.vn%2Fcan-tho-vung-tau-2-ngay-1-dem&psig=AOvVaw1ntDgdvSCeBnMxOwO8ENmf&ust=1722134457114000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKCX0PaYxocDFQAAAAAdAAAAABAf",
      "https://cdn3.ivivu.com/2014/10/Du-lich-vung-tau-cam-nang-tu-a-den-z-iVIVU.com-1-370x215.jpg"
    ]
  },
]
const isShowFullText = ref<boolean>(false);
</script>

<style scoped>
.review-images {
  &::-webkit-scrollbar {
    display: none;
  }
}
</style>
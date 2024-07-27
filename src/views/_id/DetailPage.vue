<template>
  <ion-page>
    <div v-if="detail" class="detail-wrapper" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <RouterLink :to="{ name: 'home' }" class="btn-back" @click="onBack">
        <ion-icon :icon="chevronBackOutline" style="font-size: 26px"></ion-icon>
      </RouterLink>
      <div class="fixed bottom-5 left-0 z-10 w-full flex items-center gap-5 px-5">
        <div class="flex items-center">
          <div class="item bg-white" @click="isFavorite = !isFavorite">
            <Icon :icon="isFavorite ? 'mdi:heart-circle-outline' : 'solar:heart-linear'" color="#007AFF"
              style="font-size: 38px"></Icon>
          </div>
        </div>
        <button class="btn">Thay đổi timeline</button>
      </div>
      <div class="detail-main py-20">

        <!-- header -->
        <div class="main-title">
          <!-- <h1>{{ detail?.title }}</h1> -->
          <div class="location">
            <ion-icon :icon="location" style="font-size: 20px"></ion-icon>
            {{ detail?.destination }}
          </div>
        </div>

        <!-- content -->
        <div class="main-content">
          <div class="content-infor">
            <h2 class="text-2xl mb-1">Thông tin chung</h2>
            <div class="summary">
              <p>{{
                isShowFullText ? detail?.description : detail?.description.slice(0, 80) + '...'
              }}</p>
              <button class=" text-blue-600" @click="isShowFullText = !isShowFullText">
                {{ isShowFullText ? 'Thu gọn' : 'Xem thêm' }}
              </button>
            </div>

            <div class="flex justify-around mt-5 mb-5 px-4 py-2 bg-gray-100 rounded-2xl">
              <div class="flex flex-col items-center">
                <p class=" font-bold">Kinh phí</p>
                <p>{{ detail.budget }}</p>
              </div>
              <div class="flex flex-col items-center">
                <p class=" font-bold">Thời gian</p>
                <p>2 ngày</p>
              </div>
            </div>

            <h2>Lịch trình</h2>
            <Tabs value="0">
              <TabList>
                <Tab v-for="tab in tabs" :key="tab.title" :value="tab.value">{{ tab.title }}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel v-for="tab in tabs" :key="tab.content" :value="tab.value">
                  <img v-image="backgroundImage" alt="">
                  <VerticalTimeLine :timelines="detail.stops" />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonIcon } from '@ionic/vue';
import { location, heart, heartOutline, chevronBackOutline } from 'ionicons/icons';
import { onBeforeMount, ref } from 'vue';
import VerticalTimeLine from '@/components/Detail/VerticalTimeLine.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
const isFavorite = ref(false);

import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const tabs = ref([
  { title: 'Ngày 1', content: 'Ngày 1 Content', value: '0' },
  { title: 'Ngày 2', content: 'Ngày 2 Content', value: '1' },
  { title: 'Ngày 3', content: 'Ngày 3 Content', value: '2' }
]);
const route = useRoute();
const onBack = () => {
  // router.push('/tabs/home')
}

const isShowFullText = ref(false);


const detail = ref<Timeline>();
const id = route.params.id;

import tours from '@/data/tourListData';
import { getImageFromDestination, getTimeLine } from '@/services/timeline';

const backgroundImage = ref<string>('');
const fetchDetail = async () => {
  const res = await getTimeLine(id);
  detail.value = res;
  await getImageFromDestination(detail.value.destination).then((url) => {
    console.log(url);
    // detail.value.urlImage = url;
    backgroundImage.value = url.results[0].urls.regular;
  });
}

onBeforeMount(async () => {
  console.log(id);
  await fetchDetail();
  console.log(detail.value, id);
})

export interface Timeline {
  _id: string
  user_id: UserId
  destination: string
  fromDate: string
  toDate: string
  numberOfPeople: number
  budget: string
  description: string
  stops: Stop[]
  google_map_link: string
  is_public: boolean
  upvotes: number
  downvotes: number
  is_advertisement: boolean
  created_at: string
  updated_at: string
  __v: number
}

export interface UserId {
  _id: string
  email: string
}

export interface Stop {
  _id: string
  place_id: string
  name: string
  activity: string
  address: string
  photos: any[]
  phone: string
  reviews: any[]
  rating: any
  time_range: string
  website: string
  google_map_link: string
  opening_hours: string[]
  date: string
  created_at: string
  updated_at: string
  __v: number
}

</script>
<style scoped>
.detail-wrapper {
  min-height: 100vh;
  background-position: center;
  background-size: cover;
  overflow-y: auto;
  background-image: url('https://vanhoadoisong.vn/wp-content/uploads/2022/05/50-hinh-nen-anh-ve-hue-mong-mo-dep-nhat-cho-dien-thoai-may-tinh-10.jpg');
}

.btn-back {
  position: fixed;
  top: 20px;
  left: 20px;
  background-color: #ffffff71;
  border-radius: 14px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
}

.btn {
  background-color: #007aff;
  border-radius: 10px;
  padding: 10px 20px;
  display: block;
  width: 100%;
  text-align: center;
  height: 50px;
  cursor: pointer;
  transition: all 0.3s;
  color: #fff;
  z-index: 99;
}

.detail-main {
  height: 70vh;
  width: 100%;
  margin-top: 400px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  background-color: #fff;
  position: relative;
  padding: 40px 26px;
  padding-bottom: 100px;
  padding-top: 20px;
}

.main-content {
  width: 100%;
  height: 100%;
  overflow-y: auto;
}

.main-title {
  position: absolute;
  top: -120px;
  font-size: 12px;
  color: #fff;
}

.main-title h1 {
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 10px;
  color: #fff;
}

.main-title .location {
  display: flex;
  align-items: center;
}

.main-actions {
  display: flex;
  align-items: center;
  gap: 20px;
  position: absolute;
  top: -30px;
  right: 20px;
}

.main-actions .item {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 0 20px rgb(0 0 0 / 18%);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
}

.main-content h2 {
  font-weight: 700;
}

.travel-infor {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
}

.travel-infor .item {
  text-align: center;
}

.travel-infor .item p:nth-child(1) {
  color: #c6c6c6;
}
</style>
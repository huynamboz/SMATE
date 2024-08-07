<template>
  <ion-page>
    <Teleport to="body" v-if="isLoading">
      <div class="flex justify-center items-center fixed z-50 w-full h-full bg-[rgba(0,0,0,0.4)]">
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 24 24"><path fill="#fff" d="M2,12A10.94,10.94,0,0,1,5,4.65c-.21-.19-.42-.36-.62-.55h0A11,11,0,0,0,12,23c.34,0,.67,0,1-.05C6,23,2,17.74,2,12Z"><animateTransform attributeName="transform" dur="0.6s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path></svg>
        </div>
      </div>
    </Teleport>
    <div class="detail-wrapper" :style="{ backgroundImage: `url(${backgroundImage})` }">
      <RouterLink :to="{ name: 'home' }" class="btn-back" @click="onBack">
        <ion-icon :icon="chevronBackOutline" style="font-size: 26px"></ion-icon>
      </RouterLink>
      <div class="fixed bottom-0 py-5 left-0 z-10 w-full flex items-center gap-5 px-5 bg-white">
        <div class="flex gap-2 items-center min-w-[100px]">
          <Icon class="text-2xl" color="#007aff" @click="handleVoteTimeline(EVote.UP)"
            :icon="voteValue === EVote.UP ? 'solar:map-arrow-up-bold' : 'solar:map-arrow-up-linear'" />
            <span class="text-lg">{{ (detail?.upvotes ?? 0 - (detail?.downvotes ?? 0)) > 0 ? '+' : '' }} {{ detail?.upvotes ?? 0 -
            (detail?.downvotes ?? 0) }}</span>
          <Icon class="text-2xl" color="#007aff" @click="handleVoteTimeline(EVote.DOWN)"
            :icon="voteValue === EVote.DOWN ? 'solar:map-arrow-down-bold' : 'solar:map-arrow-down-linear'" />
        </div>
        <a :href="detail?.google_map_link" class="btn">Đi đến Google Map</a>
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
              <p v-if="detail">{{
                isShowFullText ? detail?.description : detail?.description.slice(0, 80) + '...'
              }}</p>
              <button class=" text-blue-600" @click="isShowFullText = !isShowFullText">
                {{ isShowFullText ? 'Thu gọn' : 'Xem thêm' }}
              </button>
            </div>

            <div class="flex justify-around mt-5 mb-5 px-4 py-2 bg-gray-100 rounded-2xl">
              <div class="flex flex-col items-center">
                <p class=" font-bold">Kinh phí</p>
                <p v-if="detail">{{ getHalfBudget(detail?.budget ?? '', detail?.numberOfPeople ?? 1)|| '' }} VNĐ/người</p>
              </div>
              <div v-if="detail && detail.fromDate && detail.fromDate" class="flex flex-col items-center">
                <p class=" font-bold">Thời gian</p>
                <p>{{ calculateDaysBetween(detail.fromDate, detail.toDate) + 1 }} ngày</p>
              </div>
            </div>

            <h2>Lịch trình</h2>
            <Tabs value="0">
              <TabList>
                <Tab v-for="(tab, index) in stopList" :key="index" :value="index.toString()">Ngày {{ index + 1 }}</Tab>
              </TabList>
              <TabPanels>
                <TabPanel v-for="(tab, index) in stopList" :key="index" :value="index.toString()">
                  <VerticalTimeLine :timelines="tab" />
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
import { location, chevronBackOutline } from 'ionicons/icons';
import { onBeforeMount, ref } from 'vue';
import { calculateDaysBetween } from '@/utils/time';
import VerticalTimeLine from '@/components/Detail/VerticalTimeLine.vue';
import Tabs from 'primevue/tabs';
import TabList from 'primevue/tablist';
import Tab from 'primevue/tab';
import TabPanels from 'primevue/tabpanels';
import TabPanel from 'primevue/tabpanel';
import { splitArrayByTimeRange, getHalfBudget } from '@/utils/timeline';

enum EVote {
  UP = 'up',
  DOWN = 'down',
  UNVOTE = 'unvote'
}

const isLoading = ref(false);
const voteValue = ref<EVote>(EVote.UNVOTE);
const stopList = ref<Stop[] | any[]>([]);

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

import { getImageFromDestination, getTimeLine, voteTimeline } from '@/services/timeline';

const backgroundImage = ref<string>('');
const fetchDetail = async () => {
  isLoading.value = true;
  const res = await getTimeLine(String(id));
  stopList.value = splitArrayByTimeRange(res.stops ?? []) ?? [];
  detail.value = res;

  if (!detail.value) return;
  await getImageFromDestination(detail.value.destination.split(' - ')[0]).then((url) => {
    console.log(url);
    // detail.value.urlImage = url;
    backgroundImage.value = url.results[0].urls.regular;
  });
  isLoading.value = false;
}
async function handleVoteTimeline(vote: EVote) {
  try {
    voteValue.value = vote
    if(detail?.value) {
      if (vote === EVote.DOWN) {
        detail.value.upvotes -= 1;
      } else {
        detail.value.upvotes += 1;
      }
    }
    await voteTimeline(String(id), vote)
  } catch (error) {
    console.error(error);

  }
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
  height: 80vh;
  width: 100%;
  margin-top: 300px;
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
  top: -36px;
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
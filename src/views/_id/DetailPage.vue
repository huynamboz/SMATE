<template>
  <ion-page>
    <div class="detail-wrapper" :style="{backgroundImage: `url(${detail.urlImage})`}">
      <div class="btn-back" @click="onBack">
        <ion-icon :icon="chevronBackOutline" style="font-size: 26px"></ion-icon>
      </div>
      <button class="btn">Thay đổi timeline</button>
      <div class="detail-main">

        <!-- header -->
        <div class="main-actions">
          <div class="item">
            <ion-icon :icon="shareSocial" style="font-size: 26px"></ion-icon>
          </div>
          <div class="item">
            <ion-icon :icon="analytics" style="font-size: 26px"></ion-icon>
          </div>
          <div class="item" @click="isFavorite = !isFavorite">
            <ion-icon :icon="isFavorite ? heart : heartOutline" style="font-size: 26px"></ion-icon>
          </div>
        </div>
        <div class="main-title">
          <h1>{{ detail.title }}</h1>
          <div class="location">
            <ion-icon :icon="location" style="font-size: 20px"></ion-icon>
            {{detail.address}}
          </div>
        </div>

        <!-- content -->
        <div class="main-content">
          <div class="content-infor">
            <h2>Thông tin chung</h2>
            <div v-html="detail.summaryInfor" class="summary"> 
            </div>

            <div class="travel-infor">
              <div class="item">
                <p>Giá cả</p>
                <p>1500k/ người</p>
              </div>
              <div class="item">
                <p>Đánh giá</p>
                <p>8.9/10</p>
              </div>
              <div class="item">
                <p>Thời gian</p>
                <p>24 giờ</p>
              </div>
            </div>

            <h2>Lịch trình</h2>

            <p>
              {{ detail.timeLine }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/vue';
import { location, shareSocial, analytics, heart, heartOutline, chevronBackOutline } from 'ionicons/icons';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { onBeforeMount, ref } from 'vue';
const isFavorite = ref(false);

import { useRouter } from 'vue-router';
const router = useRouter();

import { useRoute } from 'vue-router';
const route = useRoute();
const onBack = () => {
  router.push('/tabs/home')
}

const detail = ref();
const id = Number(route.params.id);

import tours from '@/data/tourListData';

onBeforeMount(() => {
  detail.value = tours.find((item) => item.id === id);
  console.log(detail.value, id);
})
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
  width: 93%;
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
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
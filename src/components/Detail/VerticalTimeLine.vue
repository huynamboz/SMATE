<script setup lang="ts">
import { ref } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import Checkbox from 'primevue/checkbox';
import type { Stop, Timeline } from '@/views/_id/DetailPage.vue';

defineProps({
  timelines: Array as () => Stop[]
})
// const timelines = ref([
//   {
//     time: '10:00 Am',
//     title: 'Tham quan kinh thành Huế',
//     detail: 'Tham quan kinh thành Huế, điểm đến đầu tiên của chúng ta',
//     isDone: true
//   },
//   {
//     time: '11:00 Am',
//     title: 'Tham quan chùa Thiên Mụ',
//     detail: 'Tham quan chùa Thiên Mụ, điểm đến thứ 2 của chúng ta',
//     isDone: false
//   },
//   {
//     time: '12:00 Pm',
//     title: 'Tham quan đồi Vọng Cảnh',
//     detail: 'Tham quan đồi Vọng Cảnh, điểm đến thứ 3 của chúng ta',
//     isDone: false
//   },
//   {
//     time: '01:00 Pm',
//     title: 'Tham quan đồi Vọng Cảnh',
//     detail: 'Tham quan đồi Vọng Cảnh, điểm đến thứ 4 của chúng ta',
//     isDone: false
//   },
//   {
//     time: '02:00 Pm',
//     title: 'Tham quan đồi Vọng Cảnh',
//     detail: 'Tham quan đồi Vọng Cảnh, điểm đến thứ 5 của chúng ta',
//     isDone: false
//   },
// ]);
const router = useRouter()
const route = useRoute()
const goToAddressDetail = (index: number, item: Stop) => {
  localStorage.setItem('addressReview', JSON.stringify(item));
  router.push({
    name: 'address-detail',
    params: {
      id: route.params.id,
      addressId: index
    }
  });
}
</script>
<template>
  <div class="timeline-wrapper mt-5">
    <ul class="StepProgress">
      <li v-for="(item, index) in timelines" :key="item.name" class="StepProgress-item">
        <div class="bold time w-[64px] -top-4">{{ item.time_range.split(" - ").join("\n") }}</div>
        <div class="bold" @click="goToAddressDetail(index, item)">{{ item.name }}</div>
        <div>{{ item.activity }}</div>
        <!-- <div class="flex items-center mt-1">
          <Checkbox v-model="timelines[index].isDone" size="small" inputId="ingredient1" name="pizza" :binary="true"/>
          <label for="ingredient1" class="ml-2"> Đã đi </label>
        </div> -->
      </li>
    </ul>
  </div>
</template>
<style scoped>
.bold {
  font-weight: bold;
}

.time {
  position: absolute;
  left: -110px;
}

.timeline-wrapper {
  padding-left: 66px;
  /* min-width: 400px; */
  font-family: 'Helvetica';
  font-size: 14px;
  /*border: 1px solid #CCC;*/
}

.StepProgress {
  position: relative;
  padding-left: 45px;
  list-style: none;
}

.StepProgress::before {
  display: inline-block;
  content: '';
  position: absolute;
  top: 0;
  left: 13px;
  width: 10px;
  height: 100%;
  border-left: 2px solid #CCC;
}

.StepProgress-item {
  position: relative;
  counter-increment: list;
}

.StepProgress-item:not(:last-child) {
  padding-bottom: 20px;
}

.StepProgress-item::before {
  display: inline-block;
  content: '';
  position: absolute;
  left: -32px;
  height: 100%;
  min-height: 50px;
  width: 10px;
}

.StepProgress-item::after {
  content: '';
  display: inline-block;
  position: absolute;
  top: 0;
  left: -37px;
  width: 12px;
  height: 12px;
  border: 2px solid #CCC;
  border-radius: 50%;
  background-color: #FFF;
}

.StepProgress-item.is-done::before {
  border-left: 2px solid #007AFF;
}

.StepProgress-item.is-done::after {
  /*content: "?";*/
  font-size: 10px;
  color: #FFF;
  text-align: center;
  border: 2px solid #007AFF;
  background-color: #007AFF;
}

/*.StepProgress-item.current::before { 
border-left: 2px solid green;
}
.StepProgress-item.current::after {
content: counter(list);
padding-top: 1px;
width: 19px;
height: 18px;
top: -4px;
left: -40px;
font-size: 14px;
text-align: center;
color: green;
border: 2px solid green;
background-color: white;
}*/
.StepProgress strong {
  display: block;
}
</style>
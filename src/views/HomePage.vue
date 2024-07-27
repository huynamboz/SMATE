<template>
    <ion-page class="home-page-container bg-white">
        <InputGroup class="w-full px-2">
            <InputGroupAddon>
                <Icon icon="solar:magnifer-linear" />
            </InputGroupAddon>
            <InputText placeholder="Bạn muốn đi đâu?" />
        </InputGroup>
        <div class="home-page-address-cards">
            <address-card class="home-page-address-cards-item" v-for="item in addresses" :key="item.id"
                :address-card="item" @click="chooseAdrress(item.title)" />
        </div>
        <div class="home-page-tour-cards">
            <router-link class="home-page-tour-cards-item" v-for="item in timelineList" :key="item._id"
                :to="`/detail/${item._id}`">
                <tour-card :tour-item="item"
                    :heart-icon="!activeFavoriteIcon[item._id] ? 'solar:heart-linear' : 'mdi:heart-circle-outline'"
                    @add-to-favorites="addToFavoriteTours(item.id)" />
            </router-link>
        </div>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage } from '@ionic/vue';
import { onBeforeMount, ref, watch } from 'vue';
import AddressCard from '@/components/Base/AddressCard.vue';
import TourCard from '@/components/Base/TourCard.vue';
import addresses from '@/data/addressListData';
import InputGroupAddon from 'primevue/inputgroupaddon';
import InputGroup from 'primevue/inputgroup';
import InputText from 'primevue/inputtext';
import { useRoute } from 'vue-router';
import { getAllTimelines } from '@/services/timeline';

const route = useRoute()
const address = ref<string>('')
const favoriteTours = ref<any[]>([])
const activeId = ref<number>(1)
const activeFavoriteIcon = ref<boolean[]>([])
const searchValue = ref<string>('')
const timelineList = ref<any[]>([])

function chooseAdrress(title: string) {
    address.value = title
}

function filterActiveFavoriteTour() {
    activeFavoriteIcon.value = activeFavoriteIcon.value.map(() => false)
    favoriteTours.value.forEach(item => activeFavoriteIcon.value[item] = true)
    console.log(activeFavoriteIcon.value);
}

function addToFavoriteTours(id: number) {
    activeId.value = id
    if (favoriteTours.value.includes(activeId.value)) {
        activeFavoriteIcon.value[id] = false
        favoriteTours.value = favoriteTours.value.filter(item => item !== id)
    } else {
        favoriteTours.value.push(id)
        activeFavoriteIcon.value[id] = true
    }
    localStorage.setItem('favoriteTours', JSON.stringify(favoriteTours.value))
}

async function getAllTimelinesData() {
    try {
        const data = await getAllTimelines()
        console.log(data, 'hiiiiiiiiiiiiiiiii');

        timelineList.value = data.data
        // const data = `[
        //     {
        //         "_id": "66a4fc3d86890b5200653f70",
        //         "user_id": {
        //             "_id": "66a4f9c331831a0d98839268",
        //             "email": "anhaanh2003@gmail.com"
        //         },
        //         "destination": "Hà Nội - Việt Nam",
        //         "fromDate": "2024-09-01",
        //         "toDate": "2024-09-02",
        //         "numberOfPeople": 2,
        //         "budget": "10.000.000 VND",
        //         "description": "Lịch trình du lịch Hà Nội 2 ngày 1 đêm dành cho 2 người, tập trung vào văn hóa với ngân sách 10.000.000 VND, yêu thích bảo tàng và tour đi bộ, ẩm thực Pháp và bánh ngọt, cần gợi ý nhà hàng thân thiện với người ăn chay.",
        //         "stops": [
        //             "66a4fc3d86890b5200653f66",
        //             "66a4fc3d86890b5200653f5e",
        //             "66a4fc3d86890b5200653f5a",
        //             "66a4fc3d86890b5200653f68",
        //             "66a4fc3d86890b5200653f64",
        //             "66a4fc3d86890b5200653f6a",
        //             "66a4fc3d86890b5200653f60",
        //             "66a4fc3d86890b5200653f6e",
        //             "66a4fc3d86890b5200653f5c",
        //             "66a4fc3d86890b5200653f58",
        //             "66a4fc3d86890b5200653f62",
        //             "66a4fc3d86890b5200653f56",
        //             "66a4fc3d86890b5200653f6c"
        //         ],
        //         "google_map_link": "https://www.google.com/maps/dir/?api=1&origin=Kh%C3%A1ch%20s%E1%BA%A1n%2FQu%C3%A1n%20b%C3%BAn%20ch%E1%BA%A3&destination=S%C3%A2n%20bay%2FGa%20t%C3%A0u%2FB%E1%BA%BFn%20xe&waypoints=V%C4%83n%20Mi%E1%BA%BFu%20-%20Qu%E1%BB%91c%20T%E1%BB%AD%20Gi%C3%A1m%2C%20Qu%E1%BB%91c%20T%E1%BB%AD%20Gi%C3%A1m%2C%20V%C4%83n%20Mi%E1%BA%BFu%2C%20%C4%90%E1%BB%91ng%20%C4%90a%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam|Nh%C3%A0%20h%C3%A0ng%20b%C3%BAn%20ch%E1%BA%A3|B%E1%BA%A3o%20t%C3%A0ng%20Ph%E1%BB%A5%20n%E1%BB%AF%20Vi%E1%BB%87t%20Nam%2C%2036%20L%C3%BD%20Th%C6%B0%E1%BB%9Dng%20Ki%E1%BB%87t%2C%20H%C3%A0ng%20Bu%E1%BB%93m%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam|Qu%C3%A1n%20c%C3%A0%20ph%C3%AA|H%E1%BB%93%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam|Nh%C3%A0%20h%C3%A0ng%20Ph%C3%A1p|Ti%E1%BB%87m%20b%C3%A1nh|Kh%C3%A1ch%20s%E1%BA%A1n|L%C4%83ng%20Ch%E1%BB%A7%20t%E1%BB%8Bch%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20H%C3%B9ng%20V%C6%B0%C6%A1ng%2C%20%C4%90i%E1%BB%87n%20Bi%C3%AAn%2C%20Ba%20%C4%90%C3%ACnh%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam|Ph%E1%BB%91%20H%C3%A0ng%20Ngang%2C%20H%C3%A0ng%20%C4%90%C3%A0o%2C%20Ho%C3%A0n%20Ki%E1%BA%BFm%2C%20H%C3%A0%20N%E1%BB%99i%2C%20Vi%E1%BB%87t%20Nam|Nh%C3%A0%20h%C3%A0ng",
        //         "is_public": false,
        //         "upvotes": 0,
        //         "downvotes": 0,
        //         "is_advertisement": false,
        //         "created_at": "2024-07-27T13:55:09.941Z",
        //         "updated_at": "2024-07-27T13:55:09.941Z",
        //         "__v": 0
        //     },
        //     {
        //         "_id": "66a4fc6986890b5200653f8a",
        //         "user_id": {
        //             "_id": "66a4f9c331831a0d98839268",
        //             "email": "anhaanh2003@gmail.com"
        //         },
        //         "destination": "Thành Phố Hồ Chí Minh - Việt Nam",
        //         "fromDate": "2024-09-01",
        //         "toDate": "2024-09-02",
        //         "numberOfPeople": 2,
        //         "budget": "10.000.000 VND",
        //         "description": "Lịch trình du lịch văn hóa tại Thành Phố Hồ Chí Minh",
        //         "stops": [
        //             "66a4fc6886890b5200653f84",
        //             "66a4fc6886890b5200653f76",
        //             "66a4fc6886890b5200653f82",
        //             "66a4fc6886890b5200653f7a",
        //             "66a4fc6886890b5200653f80",
        //             "66a4fc6886890b5200653f78",
        //             "66a4fc6886890b5200653f72",
        //             "66a4fc6886890b5200653f86",
        //             "66a4fc6886890b5200653f74",
        //             "66a4fc6886890b5200653f7c",
        //             "66a4fc6886890b5200653f88",
        //             "66a4fc6886890b5200653f7e"
        //         ],
        //         "google_map_link": "https://www.google.com/maps/dir/?api=1&origin=53%20%C4%90%C6%B0%E1%BB%9Dng%20s%E1%BB%91%201%2C%20Ph%C6%B0%E1%BB%9Dng%2010%2C%20Qu%E1%BA%ADn%2010%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&destination=151%2F5%20%C4%90%E1%BB%93ng%20Kh%E1%BB%9Fi%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh&waypoints=28%20V%C3%B5%20V%C4%83n%20T%E1%BA%A7n%2C%20Ph%C6%B0%E1%BB%9Dng%206%2C%20Qu%E1%BA%ADn%203%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|52%20Hai%20B%C3%A0%20Tr%C6%B0ng%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|%C4%90i%E1%BB%83m%20h%E1%BA%B9n%20ph%E1%BB%95%20bi%E1%BA%BFn%20l%C3%A0%20Nh%C3%A0%20h%C3%A1t%20l%E1%BB%9Bn%20Th%C3%A0nh%20ph%E1%BB%91%20(%C4%91%E1%BB%8Ba%20ch%E1%BB%89%3A%207%20C%C3%B4ng%20Tr%C6%B0%E1%BB%9Dng%20Lam%20S%C6%A1n%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh)|27%20Ng%C3%B4%20%C4%90%E1%BB%A9c%20K%E1%BA%BF%2C%20B%E1%BA%BFn%20Ngh%C3%A9%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|12%20Nguy%E1%BB%85n%20H%E1%BB%AFu%20C%E1%BA%A7u%2C%20Ph%C6%B0%E1%BB%9Dng%20T%C3%A2n%20%C4%90%E1%BB%8Bnh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|L%C3%AA%20L%E1%BB%A3i%2C%20B%E1%BA%BFn%20Th%C3%A0nh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|135%20Nam%20K%E1%BB%B3%20Kh%E1%BB%9Fi%20Ngh%C4%A9a%2C%20B%E1%BA%BFn%20Th%C3%A0nh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|34%2F6%20C%C3%B4%20B%E1%BA%AFc%2C%20Ph%C6%B0%E1%BB%9Dng%20C%E1%BA%A7u%20%C3%94ng%20L%C3%A3nh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh|202%20V%C3%B5%20Th%E1%BB%8B%20S%C3%A1u%2C%20Ph%C6%B0%E1%BB%9Dng%20Nguy%E1%BB%85n%20Th%C3%A1i%20B%C3%ACnh%2C%20Qu%E1%BA%ADn%201%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh",
        //         "is_public": false,
        //         "upvotes": 0,
        //         "downvotes": 0,
        //         "is_advertisement": false,
        //         "created_at": "2024-07-27T13:55:53.227Z",
        //         "updated_at": "2024-07-27T13:55:53.227Z",
        //         "__v": 0
        //     }
        // ]`
        // timelineList.value = JSON.parse(data)
        console.log(timelineList.value, 'hhhhhhhhhhhhhhhh');

    } catch (error) {
        console.error(error)
    }
}

watch(() => route.fullPath, () => {
    const favoriteToursJson = localStorage.getItem("favoriteTours");
    if (favoriteToursJson !== null) {
        const tours = JSON.parse(favoriteToursJson);
        if (Array.isArray(tours)) {
            favoriteTours.value = tours
        }
    }
    filterActiveFavoriteTour()
})

onBeforeMount(async () => {
    const favoriteToursJson = localStorage.getItem("favoriteTours");
    if (favoriteToursJson !== null) {
        const tours = JSON.parse(favoriteToursJson);
        if (Array.isArray(tours)) {
            favoriteTours.value = tours
        }
    }
    filterActiveFavoriteTour()
    await getAllTimelinesData()
})
</script>

<style scoped scss>
.ion-page {
    justify-content: flex-start;
}

.home-page-container {
    padding: 16px;
}

.home-page-search-bar {
    background-color: #fff;
    border: 1px solid #ebebeb;
    border-radius: 18px;
    padding: 0 10px;
    min-height: 40px;
}

.home-page-content {
    font-size: 14px;
    font-weight: 400;
    margin: auto;
    color: #007AFF;
    letter-spacing: 3px;
}

.home-page-address-cards {
    display: flex;
    margin: 16px 0;
    align-items: center;
    ;
    gap: 12px;
    overflow: auto;
    min-height: 120px;

    &::-webkit-scrollbar {
        display: none;
    }

    .home-page-address-cards-item {
        flex: 0 0 auto;
        width: 100px;
        text-align: center;
        padding: 4px;
        /* height: 100px; */
    }
}

.home-page-tour-cards {
    display: flex;
    flex-direction: column;
    gap: 16px;
    overflow: auto;

    .home-page-tour-cards-item {
        flex: 0 0 auto;
        text-align: center;
        padding: 4px 0px;
        /* height: 100px; */
    }
}
</style>
<script setup lang="ts">
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';
import { IonPage } from '@ionic/vue';
import { notify } from '@/utils/toast';
import { useRouter } from 'vue-router';
import { loginApi } from '@/services/auth';
import { ref } from 'vue';
const router = useRouter();
const email = ref('');
const password = ref('');

const handleLogin = async () => {
  console.log('Login');
  try {
    loading.value = true;
    // const data = await loginApi({
    //   email: email.value,
    //   password: password.value
    // })
    notify.success('Đăng nhập thành công');
    await new Promise((resolve) => setTimeout(() => {
      router.push('/tabs');
      resolve(true);
    }, 1000));
    localStorage.setItem('token', "data.access_token");
  } catch (error) {
    notify.error('Đăng nhập thất bại'); 
  } finally {
    loading.value = false;
  }
};

const loading = ref(false);
</script>
<template>
  <ion-page>
    <div class="relative w-full h-screen">
      <img class="absolute z-[-1] top-0 left-0" src="@/assets/img/bg2.avif" alt="">
      <div class="absolute p-8 z-10 h-[70vh] bottom-0 bg-white w-full left-0 rounded-tl-[36px] rounded-tr-[36px]">
        <div class="relative">
          <p class="-top-32 left-0 z-10 absolute font-semibold text-white text-2xl w-[80%]">Thưởng thức chuyến đi của
            bạn</p>
          <p class="text-3xl font-bold text-[#191919]">Đăng nhập</p>
          <div class="mt-10">
            <div class="flex flex-col gap-2">
              <label for="username">Email</label>
              <InputGroup class="w-full">
                <InputGroupAddon>
                  <Icon icon="solar-user-bold-duotone" />
                </InputGroupAddon>
                <InputText v-model="email" placeholder="Example@gmail.com" />
              </InputGroup>
            </div>

            <div class="flex flex-col gap-2 mt-8">
              <label for="username">Mật khẩu</label>
              <InputGroup class="w-full">
                <InputGroupAddon>
                  <Icon icon="solar-lock-keyhole-minimalistic-unlocked-bold-duotone" />
                </InputGroupAddon>
                <InputText v-model="password" type="password" placeholder="******" />
              </InputGroup>
            </div>
            <Button :loading="loading" class="mt-10 h-14 w-full rounded-full" @click="handleLogin" label="Đăng nhập" />
            <p class="text-center mt-5">Chưa có tài khoản?
              <router-link to="/auth/register" class=" text-blue-700">Đăng ký</router-link>
            </p>
            <router-link to="/tabs" class="text-center w-full block mt-5 text-blue-700">Tiếp tục với tư cách khách</router-link>
          </div>
        </div>
      </div>
    </div>
  </ion-page>
</template>

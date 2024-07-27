<script setup lang="ts">
import InputText from 'primevue/inputtext';
import InputGroup from 'primevue/inputgroup';
import InputGroupAddon from 'primevue/inputgroupaddon';
import Button from 'primevue/button';

</script>
<template>
  <div class="relative w-full h-screen">
    <img class="absolute z-[-1] top-0 left-0"
      src="https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="">
    <div class="absolute p-8 z-10 h-[70vh] bottom-0 bg-white w-full left-0 rounded-tl-[36px] rounded-tr-[36px]">
      <div class="relative">
        <p class="-top-32 left-0 z-10 absolute font-semibold text-white text-2xl w-[80%]">Thưởng thức chuyến đi của bạn</p>
        <p class="text-3xl font-bold text-[#191919]">Đăng nhập</p>
        <div class="mt-10">
          <div class="flex flex-col gap-2">
            <label for="username">Email</label>
            <InputGroup class="w-full">
              <InputGroupAddon>
                <Icon icon="solar-user-bold-duotone" />
              </InputGroupAddon>
              <InputText placeholder="Example@gmail.com" />
            </InputGroup>
          </div>

          <div class="flex flex-col gap-2 mt-8">
            <label for="username">Mật khẩu</label>
            <InputGroup class="w-full">
              <InputGroupAddon>
                <Icon icon="solar-lock-keyhole-minimalistic-unlocked-bold-duotone" />
              </InputGroupAddon>
              <InputText placeholder="******" />
            </InputGroup>
          </div>
          <Button class="mt-10 h-14 w-full rounded-full" label="Đăng nhập" />
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div>
    <div
      class="min-h-screen flex flex-col items-center pt-24 bg-[url('/paper-bg.jpg')] bg-cover bg-center"
    >
      <h1
        class="text-[3.5rem] md:text-[5rem] p-2 text-center font-[cursive] text-[#b01257] mb-[5rem] font-semibold tracking-wide"
        data-aos="fade-up"
        style="
          font-family:
            Great Vibes,
            cursive;
        "
      >
        Your Surprise Menu, Love <span>💖</span>
      </h1>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10 mb-20 px-6"
      >
        <NuxtLink
          to="/letter"
          class="card_menu w-[260px] h-[260px] border-[10px] border-[#c2006f] rounded-[35px] bg-[#faf7f7] flex items-center justify-center overflow-hidden hover:-translate-y-3 hover:scale-[1.04] mx-auto"
        >
          <img src="/img/letter.png" class="inner w-[80%]" />
        </NuxtLink>

        <NuxtLink
          to="/album"
          class="card_menu w-[260px] h-[260px] border-[10px] border-[#c2006f] rounded-[35px] bg-[#faf7f7] flex items-center justify-center overflow-hidden hover:-translate-y-3 hover:scale-[1.04] mx-auto"
        >
          <img src="/img/camera.png" class="inner w-[80%]" />
        </NuxtLink>

        <NuxtLink
          to="/video"
          class="card_menu w-[260px] h-[260px] border-[10px] border-[#c2006f] rounded-[35px] bg-[#faf7f7] flex items-center justify-center overflow-hidden hover:-translate-y-3 hover:scale-[1.04] mx-auto"
        >
          <img src="/img/music.png" class="inner w-[80%]" />
        </NuxtLink>
      </div>
    </div>
    <NuxtLink
      to="/"
      class="card_menu fixed w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl bg-[#c2006f] hover:scale-110 transition"
      aria-label="back"
      style="left: 50%; transform: translateX(-50%); bottom: 30px"
    >
      <Icon icon="mdi:arrow-left" width="32" height="32" />
    </NuxtLink>
  </div>
</template>

<script setup>
import { Icon } from "@iconify/vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
</style>

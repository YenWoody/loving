<template>
  <div
    class="home bg-cover bg-center min-h-screen flex items-center justify-center text-center"
    :style="{ backgroundImage: `url('${bg}')` }"
  >
    <div ref="wrapper" class="wrapper">
      <!-- Icon cute -->
      <img src="" alt="cute-cat" class="mx-auto w-20 mb-5" />

      <h1
        class="title text-[10rem] font-[cursive] text-[#b01257] mb-[5px] font-semibold tracking-wide"
      >
        Happy Monthsary
      </h1>

      <p
        class="subtitle text-[2rem] text-gray-800 mt-5 flex items-center justify-center gap-2"
      >
        Do you want to see the surprise that might make you blush?
        <span>🥺</span>
      </p>

      <!-- Buttons -->
      <div class="mt-12 flex justify-center">
        <NuxtLink to="/yes" class="btn sm:mx-[20px] mx-[50px] w-full"
          >Yes, Love!</NuxtLink
        >
        <NuxtLink to="/no" class="btn sm:mx-[20px] mx-[50px] w-full"
          >No!</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const bg = "/img/bg.jpg";

const wrapper = ref(null);

// Animation vào trang
onMounted(() => {
  gsap.from(wrapper.value, {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

.home {
  background-size: cover;
  background-position: center;
}
.title {
  font-family: "Great Vibes", "Playfair Display", serif;
}
.btn {
  background: #b01257;
  color: rgb(245, 208, 203);
  padding: 14px 45px;
  font-size: 2.5rem;
  border-color: unset;
  border-radius: 50px;
  font-weight: 600;
  transition: 0.3s;
}
.btn:hover {
  transform: scale(1.08);
}

/* Responsive for mobile */
@media (max-width: 600px) {
  .title {
    font-size: 2.5rem !important;
  }
  .subtitle {
    font-size: 1rem !important;
  }
  .btn {
    font-size: 1rem;
    padding: 10px 20px;
  }
  .wrapper img {
    width: 60px;
    margin-bottom: 1rem;
  }
  .mt-12 {
    margin-top: 2rem !important;
  }
  .flex {
    flex-direction: column;
    gap: 1rem !important;
  }
}
</style>

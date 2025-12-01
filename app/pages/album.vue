<template>
  <div>
    <div
      class="album-page relative w-full min-h-screen bg-[#fdf6e3] overflow-hidden"
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
        A Gallery of Love <span>💖</span>
      </h1>

      <!-- Render các ảnh -->
      <div
        v-for="(photo, index) in photos"
        :key="index"
        ref="photoRefs"
        class="photo absolute rounded-lg shadow-lg cursor-pointer"
        :style="{ width: photo.width + 'px', zIndex: 10 + index }"
      >
        <img :src="photo.src" class="w-full h-auto rounded-lg" />
      </div>
    </div>
    <NuxtLink
      to="/yes"
      class="card_menu absolute w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl bg-[#c2006f] hover:scale-110 transition"
      aria-label="back"
      style="left: 50%; transform: translateX(-50%); bottom: 30px"
    >
      ↩
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import { gsap } from "gsap";

// Danh sách ảnh
const photos = ref([
  { src: "/img/letter.png", width: 120 },
  { src: "/img/letter.png", width: 140 },
  { src: "/img/letter.png", width: 100 },
  { src: "/img/letter.png", width: 160 },
  { src: "/img/letter.png", width: 130 },
]);

// Refs cho v-for
const photoRefs = ref([]);

onMounted(async () => {
  await nextTick(); // chắc chắn DOM render xong
  if (photoRefs.value.length > 0) {
    photoRefs.value.forEach((el, i) => {
      // Vị trí ngẫu nhiên trên tường
      const finalX = Math.random() * (window.innerWidth - el.offsetWidth);
      const finalY =
        Math.random() * (window.innerHeight - el.offsetHeight - 100);

      // Anim bay từ ngoài màn hình vào
      gsap.fromTo(
        el,
        {
          x: Math.random() < 0.5 ? -200 : window.innerWidth + 200, // từ trái hoặc phải
          y: -200, // từ trên
          rotation: Math.random() * 360 - 180,
          scale: 0.5,
          opacity: 0,
        },
        {
          duration: 1.5 + Math.random(), // thời gian ngẫu nhiên
          x: finalX,
          y: finalY,
          rotation: Math.random() * 20 - 10, // nghiêng nhẹ khi dừng
          scale: 1,
          opacity: 1,
          ease: "power2.out",
          delay: i * 0.2, // stagger nhỏ
        }
      );
    });
  }
});
</script>

<style scoped>
.album-page {
  background-image: url("/img/wallpaper.jpg"); /* tường */
  background-size: cover;
  background-position: center;
}

/* Ảnh bay */
.photo img {
  display: block;
  object-fit: cover;
  transition: transform 0.2s ease;
}

/* Hover effect nhẹ */
.photo:hover {
  transform: scale(1.05) rotate(2deg);
}
</style>

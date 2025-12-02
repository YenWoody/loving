<template>
  <div class="album-container bg-[url('/paper-bg.jpg')] bg-cover bg-center">
    <h1 class="title relative z-30">A Gallery of Love ❤️</h1>

    <div
      ref="albumWrapper"
      class="album-wrapper grid gap-4 px-4 md:grid-cols-4 grid-cols-1 auto-rows-auto"
    >
      <div
        v-for="(img, index) in photos"
        :key="index"
        class="relative w-full h-[240px] md:h-[300px] flex items-center justify-center"
      >
        <img ref="photoRefs" class="photo" :src="img" />
      </div>
    </div>
    <NuxtLink
      to="/yes"
      class="card_menu fixed w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl bg-[#c2006f] hover:scale-110 transition"
      aria-label="back"
      style="left: 50%; transform: translateX(-50%); bottom: 30px"
    >
      ↩
    </NuxtLink>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

const albumWrapper = ref(null);
const photoRefs = ref([]);

const photos = [
  "/img/1.png",
  "/img/2.png",
  "/img/3.png",
  "/img/4.png",
  "/img/5.png",
  "/img/6.png",
  "/img/7.png",
  "/img/8.png",
];

// ⭐ Random trong từng ô grid
const randomPositionInsideCell = (box, img) => {
  const bw = box.clientWidth;
  const bh = box.clientHeight;
  const iw = img.offsetWidth;
  const ih = img.offsetHeight;

  const x = gsap.utils.random((bw - iw) * 0.15, (bw - iw) * 0.85);
  const y = gsap.utils.random((bh - ih) * 0.15, (bh - ih) * 0.85);

  return { x, y };
};

onMounted(async () => {
  await nextTick();

  const photosEl = photoRefs.value;
  const cells = albumWrapper.value.children;

  if (!photosEl.length) return;

  photosEl.forEach((el, i) => {
    const box = cells[i];
    const finalPos = randomPositionInsideCell(box, el);

    // Tạo draggable TRƯỚC nhưng bị disable
    const drag = Draggable.create(el, {
      type: "x,y",
      inertia: true,
      edgeResistance: 0.5,
      activeCursor: "grabbing",
      zIndexBoost: false,
      bounds: albumWrapper.value,
      onDragStart() {
        gsap.to(el, {
          scale: 1.15,
          rotation: 0,
          duration: 0.2,
        });
        el.style.zIndex = 999;
      },
      onRelease() {
        gsap.to(el, {
          scale: 1,
          rotation: gsap.utils.random(-10, 10),
          duration: 0.35,
          ease: "elastic.out(1, 0.4)",
        });
        el.style.zIndex = i + 10;
      },
    })[0];

    drag.disable(); // ⚠ Disable ban đầu → không gây giật

    // Animation xuất hiện
    gsap.fromTo(
      el,
      {
        opacity: 0,
        scale: 0.2,
        x: gsap.utils.random(-200, 200),
        y: gsap.utils.random(-300, -150),
        rotation: gsap.utils.random(-180, 180),
      },
      {
        opacity: 1,
        scale: 1,
        x: finalPos.x,
        y: finalPos.y,
        rotation: gsap.utils.random(-15, 15),
        duration: 2,
        ease: "elastic.out(0.6, 0.35)",
        delay: i * 0.25,
        onComplete: () => {
          drag.enable(); // ⭐ DRAGGABLE ENABLE SAU ANIMATION
        },
      }
    );
  });
});
</script>

<style scoped>
.album-container {
  width: 100vw;
  min-height: 100vh; /* 🔥 Sửa để mobile scroll được */
  overflow-y: auto; /* 🔥 Cho phép scroll */
  position: relative;
  padding-bottom: 100px; /* Để tránh che nút back */
}

.album-wrapper {
  width: 100%;
  padding-bottom: 40px;
}

.title {
  text-align: center;
  margin: 16px 0;
  font-size: 38px;
  font-weight: bold;
  font-family: "Great Vibes", cursive;
  color: #c71585;
}

.photo {
  width: 80%;
  max-width: 260px;
  position: absolute;
  opacity: 0;
  cursor: grab;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.18));
  transition: transform 0.2s;
}

.photo:active {
  cursor: grabbing;
}
</style>

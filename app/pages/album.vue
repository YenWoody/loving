<template>
  <div class="album-container bg-[url('/paper-bg.jpg')] bg-cover bg-center">
    <h1 class="title">A Gallery of Love ❤️</h1>

    <div ref="albumWrapper" class="album-wrapper">
      <img
        v-for="(img, index) in photos"
        :key="index"
        ref="photoRefs"
        class="photo"
        :src="img"
      />
    </div>

    <button class="back-btn" @click="goBack">↩</button>
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

// ⭐ Random trong safe zone 70%
const randomPosition = (W, H, el) => {
  const imgW = el.offsetWidth;
  const imgH = el.offsetHeight;

  const minX = W * 0.15;
  const maxX = W * 0.85 - imgW;

  const minY = H * 0.15;
  const maxY = H * 0.85 - imgH;

  return {
    x: gsap.utils.random(minX, maxX),
    y: gsap.utils.random(minY, maxY),
  };
};

onMounted(async () => {
  await nextTick();

  const items = photoRefs.value;
  if (!items.length) return;

  const W = window.innerWidth;
  const H = window.innerHeight;

  items.forEach((el, i) => {
    const pos = randomPosition(W, H, el);

    // ⭐ Animation bay vào (phiên bản đẹp hơn)
    gsap.fromTo(
      el,
      {
        opacity: 0,
        scale: 0.2,
        x: gsap.utils.random(-400, 400),
        y: gsap.utils.random(-400, -200),
        rotation: gsap.utils.random(-180, 180),
      },
      {
        opacity: 1,
        scale: 1,
        x: pos.x,
        y: pos.y,
        rotation: gsap.utils.random(-25, 25),
        duration: 8,
        delay: i * 0.5,
        ease: "elastic.out(0.5, 0.3)", // 🌟 bay vào mềm mịn
        onComplete: () => {
          // ⭐ Cho phép kéo
          Draggable.create(el, {
            type: "x,y",
            bounds: albumWrapper.value,
            inertia: true,
            edgeResistance: 0.8,

            onDragStart() {
              // nâng scale khi kéo
              gsap.to(el, {
                scale: 1.18,
                rotation: 0,
                duration: 0.2,
                ease: "power2.out",
              });
              el.style.zIndex = 999;
            },

            onRelease() {
              // ⭐ hiệu ứng thả xuống tự nhiên
              gsap.to(el, {
                scale: 1,
                rotation: gsap.utils.random(-20, 20),
                duration: 0.4,
                ease: "elastic.out(1, 0.5)",
              });
              el.style.zIndex = i + 10;
            },
          });
        },
      }
    );
  });
});

const goBack = () => window.history.back();
</script>

<style scoped>
.album-container {
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
}

.album-wrapper {
  width: 100%;
  height: 100%;
  position: relative;
}

.title {
  text-align: center;
  margin-top: 20px;
  font-size: 45px;
  font-weight: bold;
  font-family: "Great Vibes", cursive;
  color: #c71585;
}

.photo {
  width: 250px;
  position: absolute;
  opacity: 0;
  cursor: grab;
  filter: drop-shadow(0px 4px 6px rgba(0, 0, 0, 0.18));
  transition: transform 0.2s;
}

.photo:active {
  cursor: grabbing;
}

.back-btn {
  position: fixed;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 60px;
  border-radius: 50%;
  font-size: 24px;
  border: none;
  cursor: pointer;
  color: #fff;
  background: #c71585;
}
</style>

<template>
  <NuxtLayout>
    <div class="app-wrapper relative overflow-hidden min-h-screen">
      <!-- Floating hearts container -->
      <div
        ref="heartContainer"
        class="heart-container fixed top-0 left-0 w-full h-full pointer-events-none z-0"
      />

      <!-- Player -->
      <audio ref="bgm" loop preload="auto" src="/july.mp3" />

      <!-- Nút mute/unmute -->
      <button class="music-btn" @click="toggleMusic">
        {{ isPlaying ? "🔊" : "🔇" }}
      </button>

      <!-- Page transition -->
      <Transition name="fade-page" mode="out-in">
        <NuxtPage class="relative z-10" />
      </Transition>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";

const bgm = ref(null);
const isPlaying = ref(false);
const heartContainer = ref(null);

// Toggle nhạc
const toggleMusic = async () => {
  if (!bgm.value) return;
  if (isPlaying.value) {
    bgm.value.pause();
    isPlaying.value = false;
  } else {
    await bgm.value.play().catch(() => {});
    isPlaying.value = true;
  }
};
useHead({
  title: "Happy Birthday Mehra ❤️",
  meta: [
    {
      name: "description",
      content: "A gift for my love",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
  ],
});
// Auto play nhạc khi user click/touch
onMounted(() => {
  const unlock = async () => {
    if (!bgm.value) return;
    await bgm.value.play().catch(() => {});
    bgm.value.muted = false;
    isPlaying.value = true;
    window.removeEventListener("click", unlock);
    window.removeEventListener("touchstart", unlock);
  };
  window.addEventListener("click", unlock);
  window.addEventListener("touchstart", unlock);

  if (bgm.value) {
    bgm.value.muted = true;
    bgm.value.play().catch(() => {});
  }

  // ============================
  // Hearts animation full page
  // ============================
  const createHeart = () => {
    const heart = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    heart.setAttribute("viewBox", "0 0 24 24");
    const size = gsap.utils.random(20, 40);
    heart.setAttribute("width", size);
    heart.setAttribute("height", size);
    heart.style.position = "fixed";
    heart.style.bottom = "-50px";
    heart.style.left = `${Math.random() * window.innerWidth}px`;
    heart.style.zIndex = 0;
    heart.style.pointerEvents = "none";
    heart.innerHTML = `<path fill="#FF0066" d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 
        4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 
        22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>`;
    heartContainer.value.appendChild(heart);

    gsap.to(heart, {
      y: -window.innerHeight - 50,
      x: "+=" + gsap.utils.random(-100, 100),
      rotation: gsap.utils.random(-180, 180),
      scale: gsap.utils.random(0.5, 1.5),
      opacity: gsap.utils.random(0.6, 1),
      duration: gsap.utils.random(4, 8),
      ease: "power1.out",
      onComplete: () => heart.remove(),
    });
  };

  gsap.to({}, { repeat: -1, duration: 0.3, onRepeat: createHeart });
});
</script>

<style>
html,
body {
  margin: 0;
  padding: 0;
  background: #ffe9f2;
  scroll-behavior: smooth;
}

/* Page wrapper */
.app-wrapper {
  min-height: 100vh;
  overflow: hidden;
}

/* Hearts container */
.heart-container {
  pointer-events: none;
  z-index: 0;
}
.floating-heart {
  bottom: -50px;
  position: fixed;
}

/* Button góc phải */
.music-btn {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: white;
  border: 2px solid #ff69b4;
  padding: 12px 14px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 20px;
  z-index: 9999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  transition: transform 0.2s;
}
.music-btn:hover {
  transform: scale(1.12);
}

/* Page transitions */
.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.fade-page-enter-from,
.fade-page-leave-to {
  opacity: 0;
}
</style>

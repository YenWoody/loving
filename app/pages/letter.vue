<template>
  <div>
    <div
      class="wrap relative min-h-[100vh] flex items-center justify-around gap-10 bg-[url('/paper-bg.jpg')] overflow-hidden bg-cover scale-[0.90]"
    >
      <div
        id="envelope"
        ref="envelope"
        class="relative"
        style="
          width: 370px;
          position: relative;
          height: 300px;
          background-color: #c43f81;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          z-index: 99;
          transform: translateX(-15%);
        "
      >
        <div
          ref="topBorder"
          style="
            position: absolute;
            top: -140px;
            left: 0;
            width: 100%;
            height: 140px;
            background: white; /* Màu viền */
            clip-path: polygon(50% 0%, 100% 100%, 0 100%);
            z-index: 1; /* Dưới nắp chính (z-index: 30) */
            transform: scale(1.03); /* Tạo độ dày viền */
          "
        />

        <div
          ref="leftBorder"
          style="
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50%;
            height: 100%;
            background: white; /* Màu viền */
            clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
            z-index: 19; /* Dưới cánh chính (z-index: 20) */
            transform: scale(1.02); /* Tạo độ dày viền */
          "
        />

        <div
          ref="rightBorder"
          style="
            position: absolute;
            right: 0;
            bottom: 0;
            width: 50%;
            height: 100%;
            background: white; /* Màu viền */
            clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
            z-index: 19; /* Dưới cánh chính (z-index: 20) */
            transform: scale(1.02); /* Tạo độ dày viền */
          "
        />

        <div
          ref="bottomBorder"
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 65%;
            background: white; /* Màu viền */
            clip-path: polygon(50% 0%, 100% 100%, 0 100%);
            z-index: 29; /* Dưới cánh chính (z-index: 30) */
            transform: scale(1.03); /* Tạo độ dày viền */
          "
        />

        <div
          id="top"
          ref="topFlap"
          style="
            position: absolute;
            top: -140px;
            left: 0;
            width: 100%;
            height: 140px;
            background: #c21755;
            clip-path: polygon(50% 0%, 100% 100%, 0 100%);
            z-index: 1;
          "
        />

        <div
          id="left"
          ref="leftFlap"
          style="
            position: absolute;
            left: 0;
            bottom: 0;
            width: 50%;
            height: 100%;
            background: #c21755;
            clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
            z-index: 20;
          "
        />

        <div
          id="right"
          ref="rightFlap"
          style="
            position: absolute;
            right: 0;
            bottom: 0;
            width: 50%;
            height: 100%;
            background: #c21755;
            clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
            z-index: 20;
          "
        />

        <div
          id="bottom"
          ref="bottomFlap"
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 65%;
            background: #c21755;
            clip-path: polygon(50% 0%, 100% 100%, 0 100%);
            z-index: 30;
          "
        />

        <img
          ref="photo"
          src="/img/envelop_1.jpg"
          class="rounded-xl shadow-xl rotate-[-4deg]"
          style="
            position: absolute;
            top: -30%;
            left: 50%;
            transform: translateX(-50%) rotate(-4deg);
            width: 250px;
            z-index: 3;
          "
        />
      </div>

      <div
        id="letter"
        ref="letter"
        class="opacity-0 w-[480px] min-h-[600px] rounded-xl shadow-xl p-12 pe-20 leading-loose text-[1.2rem]"
        style="
          background-image: url(/img/letter_bg.png);
          background-size: cover;
          background-position: center center;
          background-repeat: no-repeat;
          position: absolute;
          z-index: 120;
          translate: none;
          border: unset;
          width: 40%;
          height: 500px;
          rotate: none;
          scale: none;
          opacity: 1;
          transform: rotate(10deg) translateX(10%);
          font-family:
            Great Vibes,
            cursive;
        "
      >
        <p>hey love, 💌</p>
        <span class="line-clamp-12"
          >Hey Love, Happy Monthsary! 🎉 Can you believe we’ve survived another
          month of your [insert funny thing about them — like “endless corny
          jokes” or “late- night food cravings”]? Honestly, I wouldn’t have it
          any other way. Every day with you is like my favorite adventure —
          sometimes crazy, sometimes sweet, but always worth it. Thank you for
          making me laugh, for putting up with my [insert your funny trait —
          like “weird mood swings” or “constant food cravings”], and for loving
          me just the same. Here’s to more months of silly selfies, random
          fights over food, and memories that we’ll laugh about forever. You’re
          my favorite person — and yes, even when you annoy me, you’re still my
          favorite. 💕 Love,
        </span>
      </div>

      <div
        id="film-card"
        ref="filmCard"
        class="w-[260px] border-[12px] border-[#c21755] shadow-2xl p-2 z-50 bg-white"
        style="
          z-index: 120;
          font-family:
            Great Vibes,
            cursive;
          transform: rotate(1deg) translateX(20%);
        "
      >
        <img src="/img/letter_pic_1.jpg" class="mb-3 rounded-sm" />
        <img src="/img/letter_pic_2.jpg" class="rounded-sm" />
      </div>
      <!-- Back Button -->
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
import { onMounted, ref } from "vue";
import { gsap } from "gsap";

const envelope = ref(null);
const photo = ref(null);
const letter = ref(null);
const filmCard = ref(null);

// Refs cho 4 mảnh chính
const topFlap = ref(null);
const leftFlap = ref(null);
const rightFlap = ref(null);
const bottomFlap = ref(null);

// Refs cho 4 mảnh viền (border)
const topBorder = ref(null);
const leftBorder = ref(null);
const rightBorder = ref(null);
const bottomBorder = ref(null);

onMounted(() => {
  if (envelope.value && photo.value && letter.value && filmCard.value) {
    const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

    // ✉ GIỮ ENVELOPE Ở TRẠNG THÁI HIỂN THỊ
    tl.from(envelope.value, { duration: 0.01 });

    // Các thành phần khác animation TỪ trạng thái ẩn ĐẾN trạng thái hiện tại (opacity: 1)
    tl.from(photo.value, { y: 320, opacity: 1, duration: 1.4 }, "-=.2")
      .from(letter.value, { y: -120, opacity: 0, duration: 1.2 }, "-=.5")
      .from(filmCard.value, { x: 150, opacity: 0, duration: 1 }, "-=.6");
  }
});
</script>

<style>
/* Nếu bạn dùng Google Fonts, import Great Vibes ở đây (hoặc import vào app.vue/layout) */
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");
/* PC giữ nguyên */

@media (max-width: 768px) {
  .wrap {
    flex-direction: column !important; /* ⬇ 3 thằng xuống 1 cột */
    justify-content: flex-start;
    gap: 50px;
  }

  /* Reset transform tránh lệch, đè lên nhau */
  #letter {
    position: relative !important; /* bay màu absolute */
    transform: none !important;
    margin-top: 20px;
    width: 100% !important;
  }

  /* cho cả envelope và filmCard cũng đứng đúng flow */
  #envelope {
    top: 25vh !important;
  }
  #envelope,
  #film-card {
    position: relative !important;
    transform: none !important;
    width: 90% !important;
    margin: 0 auto;
  }

  /* Thu ảnh nếu to quá */
  img[ref="photo"] {
    width: 60% !important;
    top: -30% !important;
  }

  /* Letter auto scale */
  .letter {
    height: auto;
    font-size: 18px;
  }
}

/* Một ít CSS tùy chỉnh (không dùng @apply) */
</style>

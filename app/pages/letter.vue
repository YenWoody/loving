<template>
  <div>
    <div
      class="wrap relative min-h-[100vh] flex items-center justify-center gap-10 bg-[url('/paper-bg.jpg')] overflow-hidden bg-cover scale-[0.90]"
    >
      <div
        id="envelope"
        ref="envelope"
        class="relative cursor-pointer"
        style="
          width: 370px;
          height: 300px;
          background-color: #c43f81;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          z-index: 99;
          transform: translateX(-15%);
        "
        @click="openEnvelope"
      >
        <!-- Borders -->
        <div
          ref="topBorder"
          style="
            position: absolute;
            top: -140px;
            left: 0;
            width: 100%;
            height: 140px;
            background: white;
            clip-path: polygon(50% 0%, 100% 100%, 0 100%);
            z-index: 1;
            transform: scale(1.03);
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
            background: white;
            clip-path: polygon(0 0, 100% 50%, 100% 100%, 0 100%);
            z-index: 19;
            transform: scale(1.02);
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
            background: white;
            clip-path: polygon(0 50%, 100% 0, 100% 100%, 0 100%);
            z-index: 19;
            transform: scale(1.02);
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
            background: white;
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
            z-index: 29;
            transform: scale(1.03);
          "
        />
        <div
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
          ref="bottomFlap"
          style="
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 65%;
            background: #c21755;
            clip-path: polygon(50% 0, 100% 100%, 0 100%);
            z-index: 30;
          "
        />
        <div
          ref="letterInside"
          class="rounded-xl shadow-xl p-6 text-[1.1rem]"
          style="
            position: absolute;
            top: -30%;
            left: 50%;
            transform: translateX(-50%) scale(0.55) rotate(-4deg);
            width: 100%;
            background-image: url(&quot;/img/letter_bg.png&quot;);
            background-size: cover;
            background-position: center;
            z-index: 3;
            pointer-events: none;
            font-family:
              Great Vibes,
              cursive;
          "
        >
          <p>hey love, 💌</p>
          <div class="relative overflow-hidden h-[220px] line-clamp-4">
            Dear Mehra! We met when I was about to turn 30, and it’s been nearly
            4 years now. It might not seem like a long time to those around you,
            but for me, it has been an incredibly meaningful journey. Through
            the happiness and the sadness, the days of silence, or the
            arguments, this remains the most precious time of my life. I know
            you’ll be running around and doing so much, but don’t forget I’m
            always thinking about you. I have imagined a thousand times what it
            would be like for us to be together. And every single day, that
            thought is my motivation. The desire to see you, to be with you,
            drives me to work relentlessly—something I have never done before. I
            always think about that one day, about the day we wake up next to
            each other. No calls, no distance, just you and me. I imagine
            opening my eyes and seeing your face right there, calm and safe.
            Holding your hand in the morning and knowing we actually made it. No
            overthinking, no fear, just us.
          </div>
        </div>
      </div>
      <div
        id="letter"
        ref="letter"
        class="opacity-0 hidden pointer-events-none top-0 w-[80vh] h-[90vh] rounded-xl p-12 leading-loose text-[1.2rem] z-[1000]"
        style="
          background-image: url(/img/letter_bg.png);
          background-size: cover;
          background-position: center;
          position: absolute;

          transform: rotate(10deg) translateX(10%);
          font-family:
            Great Vibes,
            cursive;
        "
      >
        <p class="text-[1.5rem]">hey love, 💌</p>
        <div class="relative overflow-auto h-[90%] text-[1.5rem] top-0">
          Dear Mehra! We met when I was about to turn 30, and it’s been nearly 4
          years now. It might not seem like a long time to those around you, but
          for me, it has been an incredibly meaningful journey. Through the
          happiness and the sadness, the days of silence, or the arguments, this
          remains the most precious time of my life. I know you’ll be running
          around and doing so much, but don’t forget I’m always thinking about
          you. I have imagined a thousand times what it would be like for us to
          be together. And every single day, that thought is my motivation. The
          desire to see you, to be with you, drives me to work
          relentlessly—something I have never done before. I always think about
          that one day, about the day we wake up next to each other. No calls,
          no distance, just you and me. I imagine opening my eyes and seeing
          your face right there, calm and safe. Holding your hand in the morning
          and knowing we actually made it. No overthinking, no fear, just us. I
          know that morning will feel like the world finally got it right. Until
          then, I'll keep dreaming about our first real morning together… When I
          found you, everything changed. When I started falling for you, I
          realized I had never loved anyone like this before. You brought a new
          light into my life, a warmth I never thought I needed. And I never
          imagined that out of 8 billion people in this world, the one I love
          would be you. I hope that next year, when you turn 30, I will be by
          your side just as you were there for me when I turned 30. Wishing you
          a happy birthday, a happy birthday month, and a year full of joy
          ahead. I love you for three days: yesterday, today, and tomorrow. 💕
          Love,
        </div>
      </div>
      <div
        id="film-card"
        ref="filmCard"
        class="w-[260px] border-[12px] border-[#c21755] shadow-2xl p-2 z-50 bg-white"
        style="
          font-family:
            Great Vibes,
            cursive;
          transform: rotate(5deg) translateX(20%);
          z-index: 120;
        "
      >
        <img src="/img/letter_pic_1.jpg" class="mb-3 rounded-sm" />
        <img src="/img/letter_pic_2.jpg" class="rounded-sm" />
      </div>
    </div>

    <NuxtLink
      to="/yes"
      class="card_menu fixed w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl bg-[#c2006f] hover:scale-110 transition"
      style="left: 50%; transform: translateX(-50%); bottom: 30px"
    >
      <Icon icon="mdi:arrow-left" width="32" height="32" />
    </NuxtLink>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { gsap } from "gsap";
import { Icon } from "@iconify/vue";

const envelope = ref(null);
const letter = ref(null);
const letterInside = ref(null);
const filmCard = ref(null);

const topFlap = ref(null);
const leftFlap = ref(null);
const rightFlap = ref(null);
const bottomFlap = ref(null);

const topBorder = ref(null);
const leftBorder = ref(null);
const rightBorder = ref(null);
const bottomBorder = ref(null);

onMounted(() => {
  if (window.location.hash.includes("&")) {
    history.replaceState(null, "", window.location.pathname);
  }
  gsap.set(letter.value, { opacity: 0, scale: 0.9 });
  gsap.fromTo(
    letterInside.value,
    {
      y: 140,
      opacity: 1,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    }
  );
});
const openEnvelope = () => {
  const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

  tl.to(letterInside.value, {
    y: -300,
    opacity: 0,
    duration: 1,
  }).to(
    letter.value,
    {
      opacity: 1,
      scale: 1,
      x: 0,
      y: 0,
      display: "block",
      rotate: 0,
      duration: 1.2,
      pointerEvents: "auto",
    },
    "-=0.6"
  );
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

@media (max-width: 768px) {
  .wrap {
    flex-direction: column !important;
    justify-content: flex-start;
    gap: 50px;
  }

  #letter {
    transform: none !important;
    width: 100% !important;
    margin-top: 20px;
  }

  #envelope {
    position: relative !important;
    transform: translateY(50%) !important;
    width: 90% !important;
  }
  #film-card {
    position: relative !important;
    width: 90% !important;
    transform: rotate(5deg) translateX(5%) !important;
  }
}
</style>

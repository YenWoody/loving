<template>
  <div
    class="home bg-cover bg-center min-h-screen flex items-center justify-center text-center"
  >
    <div ref="wrapper" class="wrapper">
      <!-- Icon cute -->
      <img
        id="heart"
        src="/img/heart.png"
        alt="heart"
        class="mx-auto w-20 mb-5"
      />

      <h1
        ref="title"
        class="title text-[10rem] font-[cursive] text-[#b01257] mb-[5px] font-semibold tracking-wide"
      >
        Happy Birthday! <span>❤️</span>
      </h1>

      <p
        ref="subtitle"
        class="subtitle text-[2rem] text-gray-800 mt-5 flex items-center justify-center gap-2"
      >
        Do you want to see the surprise that might make you blush?
        <span>😍</span>
      </p>

      <!-- Buttons -->
      <div ref="buttons" class="mt-12 flex justify-center">
        <NuxtLink to="/yes" class="btn md:mx-[20px] mx-[5px] w-auto sm:w-full"
          >Yes, Love!</NuxtLink
        >
        <NuxtLink to="/no" class="btn md:mx-[20px] mx-[5px] w-auto sm:w-full"
          >No!</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import gsap from "gsap";
const wrapper = ref(null);
const title = ref(null);
const subtitle = ref(null);
const buttons = ref(null);

onMounted(() => {
  gsap.from(wrapper.value, {
    opacity: 0,
    duration: 1,
    ease: "power2.out",
  });

  const text = title.value.innerText;
  const chars = text.split("");

  title.value.innerHTML = chars
    .map((c) => {
      if (c === " ") {
        return `<span class="char inline-block space">&nbsp;</span>`;
      }
      return `<span class="char inline-block">${c}</span>`;
    })
    .join("");

  const charEls = title.value.querySelectorAll(".char");

  gsap.set(charEls, {
    opacity: 0,
    x: () => gsap.utils.random(-300, 300),
    y: () => gsap.utils.random(-200, 200),
    rotation: () => gsap.utils.random(-180, 180),
  });

  gsap.to(charEls, {
    opacity: 1,
    x: 0,
    y: 0,
    rotation: 0,
    duration: 4.5,
    ease: "elastic.out(1, 0.6)",
    stagger: 0.05,
  });

  gsap.from(subtitle.value, {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1.3,
    ease: "power3.out",
  });
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Great+Vibes&display=swap");

#heart {
  animation: beat 1s infinite;
  scale: 2;
}

.home {
  background-size: cover;
  background-position: center;
}

.title {
  font-family: "Great Vibes", "Playfair Display", serif;
}
.space {
  width: 1.2em; /* giữ khoảng cách khi animate */
}

.btn {
  background: #b01257;
  color: rgb(245, 208, 203);
  padding: 14px 45px;
  font-size: 2.5rem;
  border-radius: 50px;
  font-weight: 600;
  transition: 0.3s;
}

.btn:hover {
  transform: scale(1.08);
}

/* Mobile */
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

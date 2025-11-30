<template>
  <div
    class="no-page min-h-screen flex flex-col items-center justify-center bg-cover bg-center text-center"
    :style="{ backgroundImage: `url('/img/bg.jpg')` }"
  >
    <div class="face flex items-center justify-center mb-8">
      <!-- Left Eye -->
      <svg
        width="180"
        height="200"
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-4"
      >
        <ellipse cx="90" cy="100" rx="80" ry="90" fill="black" />
        <ellipse cx="60" cy="70" rx="30" ry="35" fill="white" />
        <ellipse cx="110" cy="120" rx="15" ry="10" fill="#B3E6FF" />
        <ellipse cx="80" cy="110" rx="8" ry="10" fill="white" />
        <ellipse cx="120" cy="60" rx="10" ry="12" fill="white" />
      </svg>
      <!-- Mouth -->
      <svg
        width="180"
        height="80"
        viewBox="0 0 180 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-4"
      >
        <path
          d="M30 60 Q90 10 150 60"
          stroke="black"
          stroke-width="10"
          fill="none"
          stroke-linecap="round"
        />
      </svg>
      <!-- Right Eye -->
      <svg
        width="180"
        height="200"
        viewBox="0 0 180 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        class="mx-4"
      >
        <ellipse cx="90" cy="100" rx="80" ry="90" fill="black" />
        <ellipse cx="120" cy="70" rx="30" ry="35" fill="white" />
        <ellipse cx="70" cy="120" rx="15" ry="10" fill="#B3E6FF" />
        <ellipse cx="100" cy="110" rx="8" ry="10" fill="white" />
        <ellipse cx="60" cy="60" rx="10" ry="12" fill="white" />
      </svg>
    </div>
    <div
      class="desc text-xl md:text-2xl text-gray-800 mb-10 flex items-center justify-center gap-2 flex-wrap"
    >
      Ouch... my heart just broke into tiny pieces
      <span class="text-2xl">💔</span>
      Click yes before I cry...
    </div>
    <div
      class="flex flex-col md:flex-row justify-center gap-6 w-full max-w-xl px-4"
    >
      <button class="btn w-full md:w-auto" @click="goYes">
        Wait!! Yes, Love.
      </button>
      <button class="btn w-full md:w-auto" @click="goNo">Still No!</button>
    </div>
  </div>
</template>

<script setup>
const goYes = () => navigateTo("/yes");
const goNo = () => navigateTo("/no");
</script>

<style scoped>
.no-page {
  background-image: url("/img/bg.jpg");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
}
.face {
  margin-bottom: 2rem;
}
.btn {
  background: #b01257;
  color: white;
  padding: 16px 48px;
  font-size: 1.25rem;
  border: none;
  border-radius: 2rem;
  font-weight: 600;
  transition: 0.3s;
  cursor: pointer;
}
.btn:hover {
  transform: scale(1.08);
  background: #a0104e;
}
@media (max-width: 600px) {
  .face svg {
    width: 90px !important;
    height: 100px !important;
  }
  .desc {
    font-size: 1rem !important;
  }
  .btn {
    font-size: 1rem;
    padding: 12px 10px;
  }
}
</style>

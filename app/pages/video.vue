<script setup></script>

<template>
  <div>
    <div
      class="min-h-screen w-full bg-[url('/paper-bg.jpg')] bg-cover bg-fixed p-6 flex flex-col items-center"
    >
      <!-- VIDEO WRAPPER -->
      <div
        class="w-full max-w-4xl bg-white/0 border-[12px] border-[#d62878] rounded-2xl shadow-2xl overflow-hidden mb-10"
      >
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/kH8TTMg-kS8"
          title="YouTube video"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          allowfullscreen
        />
      </div>
      <div
        class="w-full max-w-4xl bg-white/0 border-[12px] border-[#d62878] rounded-2xl shadow-2xl overflow-hidden mb-10"
      >
        <iframe
          class="w-full aspect-video"
          src="https://www.youtube.com/embed/kH8TTMg-kS8"
          title="YouTube video"
          allow="
            accelerometer;
            autoplay;
            clipboard-write;
            encrypted-media;
            gyroscope;
            picture-in-picture;
            web-share;
          "
          allowfullscreen
        />
      </div>
      <!-- TITLE -->
      <h2 class="text-3xl font-bold text-[#c21755] mb-2 text-center">
        A Song That Reminds Me of Us ✨✨
      </h2>

      <!-- SUBTEXT -->
      <p class="text-lg text-center text-[#4a3655] mb-4">
        Press play and let the music tell our story.
      </p>

      <!-- Decorative sparkles -->
      <div class="text-2xl">✨✨</div>
    </div>
    <NuxtLink
      to="/yes"
      class="card_menu absolute w-14 h-14 flex items-center justify-center rounded-full text-white text-2xl bg-[#c2006f] hover:scale-110 transition"
      aria-label="back"
      style="left: 10%; transform: translateX(-50%); bottom: 30px"
    >
      ↩
    </NuxtLink>
  </div>
</template>

<style scoped>
/* Optional – dùng để tạo font chữ đáng yêu hơn */
h2 {
  font-family: "Comic Neue", "Quicksand", "Poppins", sans-serif;
}
p {
  font-family: "Quicksand", "Poppins", sans-serif;
}
</style>

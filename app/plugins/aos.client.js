import AOS from "aos";
import "aos/dist/aos.css";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("page:finish", () => {
    AOS.init({
      duration: 900,
      easing: "ease-out-quart",
      once: false,
    });
    AOS.refreshHard();
  });
});

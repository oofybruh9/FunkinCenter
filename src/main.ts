import { createApp } from "vue";
import { platform } from "@tauri-apps/plugin-os";
import App from "./App.vue";
import router from "./router";
import { createI18n } from "vue-i18n"

/*i18n imports*/
import en from "./i18n/en.json";
import esMX from "./i18n/es-MX.json";
import funny from "./i18n/funny.json";

const i18n = createI18n({
  locale: localStorage.getItem("user-locale") || "en",
  fallbackLocale: "en",
  messages: {
    en,
    esMX,
    funny
  }
});

createApp(App).use(router).use(i18n).mount("#app");

const currentPlatform = await platform();

console.log(`Current platform: ${currentPlatform}`);
if (currentPlatform === "windows" || currentPlatform === "macos" || currentPlatform === "linux") {
    document.getElementById("bodyy")?.classList.add("desktop");
    console.log("Hiding Android-exclusive mods section");
}
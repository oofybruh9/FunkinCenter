<template>
  <div class="flex flex-row h-full w-full">
    <aside class="hidden sm:block border-r border-gray-300 p-4 w-64">
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo" />
      </div>
      <nav>
        <ul class="flex flex-col gap-4 mt-4">
          <li>
            <RouterLink to="/" class="flex flex-row gap-1"><svg width="24" height="24" fill="none" stroke="currentColor"
                stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#home" />
              </svg>{{ $t('nav.home') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/explore" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#compass" />
              </svg>{{ $t('nav.explore') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/library" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#book" />
              </svg>{{ $t('nav.library') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/download" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#download" />
              </svg>{{ $t('nav.downloads') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/update" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#refresh-cw" />
              </svg>{{ $t('nav.update') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/stats" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#bar-chart-2" />
              </svg>{{ $t('nav.stats') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/engines" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#cpu" />
              </svg>{{ $t('nav.engines') }}</RouterLink>
          </li>
          <li>
            <RouterLink to="/settings" class="flex flex-row gap-1"><svg width="24" height="24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <use href="./assets/feather-sprite.svg#settings" />
              </svg>{{ $t('nav.settings') }}</RouterLink>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="h-full w-full p-4 overflow-y-auto">
      <router-view v-slot="{ Component, route }">
        <transition name="fade">
          <component :is="Component" :key="route.path" />
        </transition>
      </router-view>
    </main>
  </div>
  <div id="mobile-bar" class="sm:hidden border-t border-gray-300 p-4 sticky bottom-0 bg-white">
    <nav>
      <ul class="flex flex-row justify-around">
        <li>
          <RouterLink to="/"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#home" />
            </svg>{{ $t('nav.home') }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/explore"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#compass" />
            </svg>{{ $t('nav.explore') }}</RouterLink>
        </li>
        <li>
          <RouterLink to="/library"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#book" />
            </svg>{{ $t('nav.library') }}</RouterLink>
        </li>
        <li><button id="open-modal-button"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#more-horizontal" />
            </svg>{{ $t('nav.more') }}</button></li>
      </ul>
    </nav>
  </div>

  <!--<div class="fixed inset-0 bg-black/50 z-40" id="backdrop"></div>-->

  <!-- Bottom Modal Container -->
  <!--
  <div
    class="fixed bottom-0 left-0 right-0 z-50 bg-white rounded-t-2xl shadow-xl max-w-2xl mx-auto p-6 transform transition-transform duration-300 w-full"
    id="bottom-modal">
    <div class="text-center">
      <div class="w-16 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
      <h2 class="text-xl font-semibold text-gray-900 mb-2">Subscribe to our Newsletter</h2>
      <p class="text-gray-600 mb-6">Get the latest updates delivered directly to your inbox.</p>
      <input type="email" placeholder="you@example.com"
        class="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-blue-500 outline-none">
      <button class="w-full bg-blue-600 text-white font-medium py-2.5 rounded-lg hover:bg-blue-700 transition">
        Sign Up
      </button>
    </div>
  </div>
  -->
</template>

<script setup>
// WILL BE BUILT IN THE FUTURE, im js lazy asf

//const modal = document.getElementById('bottom-modal');
//const backdrop = document.getElementById('backdrop');
//const open = document.getElementById('open-modal-button');

// Hide modal initially
//modal.classList.add('translate-y-full');

// Function to open the modal
//function openModal() {
//  modal.classList.remove('translate-y-full');
//  backdrop.classList.remove('hidden');
//}

// Function to close the modal
//function closeModal() {
//  modal.classList.add('translate-y-full');
//  backdrop.classList.add('hidden');
//}

// Close when clicking the backdrop
//backdrop.addEventListener('click', closeModal);
//open.addEventListener('click', openModal);
</script>

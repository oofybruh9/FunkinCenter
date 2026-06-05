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
    <main class="h-full w-full p-4">
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
            </svg>Home</RouterLink>
        </li>
        <li>
          <RouterLink to="/explore"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#compass" />
            </svg>Explore</RouterLink>
        </li>
        <li>
          <RouterLink to="/library"><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#book" />
            </svg>Library</RouterLink>
        </li>
        <li><button><svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
              stroke-linecap="round" stroke-linejoin="round">
              <use href="./assets/feather-sprite.svg#more-horizontal" />
            </svg>More</button></li>
      </ul>
    </nav>
  </div>
</template>


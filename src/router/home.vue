<template>
    <div class="flex flex-col gap-2 w-full h-full">
        <div>
            <h1 class="text-2xl font-bold">{{ $t("nav.home") }}</h1>
        </div>
        <div>
            <p class="block sm:hidden">xs</p>
            <p class="hidden sm:block md:hidden">sm</p>
            <p class="hidden md:block lg:hidden">md</p>
            <p class="hidden lg:block xl:hidden">lg</p>
            <p class="hidden xl:block 2xl:hidden">xl</p>
            <p class="hidden 2xl:block">2xl</p>
        </div>
        <div class="w-full relative" id="featured">
            <div class="h-120 w-full bg-gray-200 rounded-xl overflow-hidden">
                <img src="//placehold.co/1280x720" alt="cover"
                    class="w-full h-full object-cover object-center rounded-xl">
            </div>
            <div class="absolute inset-0 flex z-9 w-full h-full p-4 justify-between">
                <h2 class="text-xl font-semibold mt-2">{{ $t("shared.featured") }}</h2>
                <button class="flex font-medium bg-gray-800 text-white px-4 py-2 rounded-lg h-10 gap-1">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <use href="../assets/feather-sprite.svg#star" />
                    </svg>
                    {{ $t("shared.bestweek") }}
                </button>
            </div>
            <div class="absolute inset-0 flex z-9 w-full items-end h-full p-4">
                <h3 class="text-lg font-medium">Game Title</h3>
                <p class="text-sm text-gray-500 ml-2">Game Author</p>
            </div>
            <div>
                <div class="absolute inset-0 flex z-10 w-full h-full items-center justify-start">
                    <button class="flex font-medium bg-gray-800 text-white px-4 py-2 rounded-lg">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <use href="../assets/feather-sprite.svg#chevron-left" />
                        </svg>
                    </button>
                </div>
                <div class="absolute inset-0 flex z-10 w-full h-full items-center justify-end">
                    <button class="flex font-medium bg-gray-800 text-white px-4 py-2 rounded-lg">
                        <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <use href="../assets/feather-sprite.svg#chevron-right" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
        <div>
            <h2>{{ $t("shared.overview") }}</h2>
            <div class="gap-4 mt-4 flex-row justify-start grid grid-cols-3">
                <span class="flex flex-col gap-1 border-gray-300 border p-4">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <use href="../assets/feather-sprite.svg#box" />
                    </svg>
                    <p>{{ $t("home.gameinstall", { count: 1 }) }}</p>
                </span>
                <span class="flex flex-col gap-1 border-gray-300 border p-4">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <use href="../assets/feather-sprite.svg#cpu" />
                    </svg>
                    <p>{{ $t("home.engineinstall", { count: 1 }) }}</p>
                </span>
                <span class="flex flex-col gap-1 border-gray-300 border p-4">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <use href="../assets/feather-sprite.svg#refresh-cw" />
                    </svg>
                    <p>{{ $t("home.pendingupdates", { count: 1 }) }}</p>
                </span>
            </div>
        </div>
    </div>
</template>
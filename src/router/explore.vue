<template>
    <div>
        <div class="w-full flex border-b border-gray-300 mb-4 pb-4 justify-between">
            <h1 class="text-xl font-bold">{{ $t("nav.explore") }}</h1>
            <p class="font-medium">{{ $t("explore.result", { count: 1 }) }}</p>
        </div>
        <div class="w-full my-4">
            <input type="text" class="w-full" :placeholder="$t('explore.search')" />
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
            <h2>{{ $t("explore.trending") }}</h2>
            <div class="gap-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/640x360" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <h3>Developer</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
    </div>
</template>
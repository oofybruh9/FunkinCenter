<template>
    <div>
        <div class="w-full flex border-b border-gray-300 mb-4 pb-4 justify-between">
            <h1 class="text-xl font-bold">{{ $t("nav.explore") }}</h1>
            <p class="font-medium">{{ $t("explore.result", { count: 1 }) }}</p>
        </div>
        <div class="w-full my-4">
            <input type="text" class="w-full" placeholder="Search for games, mods, etc.">
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
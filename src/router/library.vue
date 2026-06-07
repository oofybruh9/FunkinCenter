<template>
    <div class="flex flex-col h-full w-full">
        <h1 class="text-2xl font-bold">{{ $t("nav.library") }}</h1>
        <div id="content" class="flex flex-row gap-4 mt-4 w-full h-full">
            <div id="games" class="w-64 gap-2">
                <div class="mb-3 gap-2 w-full">
                    <input type="text" class="w-full mb-2" :placeholder="$t('nav.search')">
                    <div class="flex flex-row w-full justify-between">
                        <select name="sort by" id="sort" class="w-full">
                            <option value="newest">{{ $t("sort.newest") }}</option>
                            <option value="oldest">{{ $t("sort.oldest") }}</option>
                            <option value="atoz">{{ $t("sort.atoz") }}</option>
                            <option value="ztoa">{{ $t("sort.ztoa") }}</option>
                            <option value="mostplay">{{ $t("sort.mostplay") }}</option>
                            <option value="recentplay">{{ $t("sort.recent") }}</option>
                        </select>
                        <button class="p-2">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <use href="../assets/feather-sprite.svg#package" />
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/426x240" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <p>Base Game</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/426x240" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <p>Psych</p>
                </div>
                <div class="bg-gray-200 rounded-xl">
                    <img src="//placehold.co/426x240" alt="" class="w-full">
                    <h2>Game Title</h2>
                    <p>Executable</p>
                </div>
            </div>
            <div id="gameinfo" class="flex-1 bg-gray-200 rounded-xl p-4 w-full">
                <div class="w-full bg-gray-200 rounded-xl h-64 overflow-hidden">
                    <img src="//placehold.co/640x360" alt=""
                        class="w-full h-full object-cover object-center rounded-xl">
                </div>
                <div class="flex flex-row gap-4 mt-4 justify-between">
                    <div class="flex flex-col gap-2">
                        <h2>Game Title</h2>
                        <h3>Developer</h3>
                    </div>
                    <div class="flex flex-row gap-2">
                        <button class="flex font-medium">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <use href="../assets/feather-sprite.svg#play" />
                            </svg>{{ $t("shared.launch") }}
                        </button>
                        <button class="flex" id="afsd">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <use href="../assets/feather-sprite.svg#external-link" />
                            </svg>
                        </button>
                        <button class="flex">
                            <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <use href="../assets/feather-sprite.svg#settings" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
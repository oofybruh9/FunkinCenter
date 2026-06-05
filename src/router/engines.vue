<template>
    <div>
        <div class="w-full flex border-b border-gray-300 mb-4 pb-4 justify-between">
            <h1 class="text-2xl font-bold">{{ $t("nav.engines") }}</h1>
            <div class="flex gap-2 justify-end">
                <button class="justify-end flex font-medium">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round">
                        <use href="../assets/feather-sprite.svg#plus" />
                    </svg>Add Engine
                </button>
            </div>
        </div>
        <div>
            <h2>Installed Engines</h2>
            <div class="gap-4 mt-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
                <div class="bg-gray-200 rounded-xl p-4 flex flex-row">
                    <div class="bg-gray-300 rounded-lg mb-4 h-15 w-15 mr-4">
                        <img src="//placehold.co/100x100" alt="" class=" h-15 w-15 object-cover rounded-lg">
                    </div>
                    <div>
                        <h2>Codename Engine</h2>
                        <h3>nightly</h3>
                        <p>Description</p>
                        <div class="flex flex-row gap-2">
                            <button class="mt-2 flex">
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <use href="../assets/feather-sprite.svg#play" />
                                </svg>
                                Play
                            </button>
                            <button class="mt-2 flex">
                                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" stroke-linejoin="round">
                                    <use href="../assets/feather-sprite.svg#settings" />
                                </svg>
                                Manage
                            </button>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-200 rounded-xl p-4">
                    <h2>Psych Engine</h2>
                    <h3>v1.0.4</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl p-4">
                    <h2>FPS Plus</h2>
                    <h3>Version</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl p-4">
                    <h2>Psych Engine Online</h2>
                    <h3>v0.14.3</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl p-4">
                    <h2>Base Engine</h2>
                    <h3>v0.8.4</h3>
                    <p>Description</p>
                </div>
                <div class="bg-gray-200 rounded-xl p-4">
                    <h2>P-Slice Engine</h2>
                    <h3>Version</h3>
                    <p>Description</p>
                </div>
            </div>
        </div>
        <div class="mx-auto mt-8 text-center text-gray-500">
            nothing to see here...
        </div>
    </div>
</template>
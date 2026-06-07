<template>
    <div>
        <h1 class="text-2xl font-bold pb-2">{{ $t("nav.update") }}</h1>
        <div class="flex flex-row border border-gray-300 rounded-xl p-4 gap-4 w-full">
            <div class="border border-gray-300 rounded-4xl p-4 bg-blue-300 justify-center items-center flex">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="stroke-blue-100">
                    <use href="../assets/feather-sprite.svg#refresh-cw" />
                </svg>
            </div>
            <div class="flex flex-col gap-4 w-full">
                <h2>Mod Name</h2>
                <p>old_ver to new_ver</p>
                <button class="">
                    <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round" class="stroke-blue-100">
                        <use href="../assets/feather-sprite.svg#download-cloud" />
                    </svg>
                    Download+Install Update
                </button>
            </div>
        </div>
    </div>
</template>
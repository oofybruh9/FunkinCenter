<template>
    <div class="flex flex-col h-screen align-items-center" >
        <div class="text-center">
            <h1 class="text-4xl font-bold m-4">{{ $t("nav.downloads") }}</h1>
        </div>
        <div class="flex flex-row border border-gray-300 rounded-xl p-4 gap-4 w-full">
            <div class="border border-gray-300 rounded-4xl p-4 bg-blue-300 justify-center items-center flex">
                <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round" class="stroke-blue-100">
                    <use href="../assets/feather-sprite.svg#download-cloud" />
                </svg>
            </div>
            <div class="flex flex-col gap-4 w-full">
                <h2>Mod Name.zip</h2>
                <p>{{ $t("shared.downloading") }}</p>
                <progress value="50" max="100" class="bg-gray-200 rounded-full dark:bg-gray-700 w-full [&::-webkit-progress-bar]:w-full [&::-webkit-progress-bar]:bg-gray-200 [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-value]:bg-purple-600 [&::-webkit-progress-value]:rounded-full [&::-moz-progress-bar]:bg-purple-600 dark:[&::-webkit-progress-bar]:bg-gray-700">Intermediate</progress>
            </div>
        </div>
    </div>
</template>
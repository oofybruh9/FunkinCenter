<template class="justify-center">
    <div class="flex flex-col h-screen align-items-center">
        <div class="text-center">
            <h1 class="text-4xl font-bold mb-4">{{ $t('nav.settings') }}</h1>
            <p class="text-lg text-gray-600">{{ $t('settings.description') }}</p>
        </div>
        <div class="w-full">
            <h2 class="text-2xl font-semibold mb-4">{{ $t('settings.theme+lang') }}</h2>
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="theme">{{ $t('settings.theme') }}</label>
                <select id="theme" class="w-full p-2 border border-gray-300 rounded">
                    <option value="light">{{ $t('settings.light') }}</option>
                    <option value="dark">{{ $t('settings.dark') }}</option>
                </select>
                <select id="look" class="w-full p-2 border border-gray-300 rounded">
                    <option value="cat">{{ $t('settings.catppuccin') }}</option>
                    <option value="ter">{{ $t('settings.terminal') }}</option>
                    <option value="base">{{ $t('settings.liquidahh') }}</option>
                </select>
            </div>
            <div class="mb-4">
                <label class="block text-gray-700 mb-2" for="language">{{ $t('settings.language') }}</label>
                <select id="language" class="w-full p-2 border border-gray-300 rounded" v-model="$i18n.locale" @change="localeChange">
                    <option value="en">English (US)</option>
                    <option value="esMX">Español (México)</option>
                    <option value="ja">日本語 (Japan)</option>
                </select>
            </div>
            <h2 class="text-2xl font-semibold mb-4">{{ $t('settings.directories') }}</h2>
            <div id="desktop-exclusive">
                <div class="mb-4 w-full">
                    <label class="block text-gray-700 mb-2" for="notifications">{{ $t('settings.enginedirs') }}</label>
                    <div class="flex flex-col lg:flex-row gap-2">
                        <input type="text" placeholder=""
                            class="w-full p-2 border border-gray-300 rounded" />
                        <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                        this should not show up if in android
                    </div>
                    <br>
                    <div class="flex flex-col lg:flex-row gap-2">
                        <input type="text" placeholder="" class="w-full p-2 border border-gray-300 rounded" />
                        <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                        this should not show up if in android
                    </div>
                </div>
            </div>
            <div id="android-exclusive" class="mb-4 w-full">
                <div class="mb-4 w-full">
                    <div class="flex flex-col lg:flex-row gap-2">
                        <input type="text" placeholder="" class="w-full p-2 border border-gray-300 rounded" />
                        <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                        this should not show up if in desktop
                    </div>
                    <br>
                    <input type="text" placeholder="" class="w-full p-2 border border-gray-300 rounded" />
                    <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                    this should not show up if in desktop
                </div>
                <br>
                <div class="mb-4 w-full flex flex-col lg:flex-row gap-2">
                    <input type="text" placeholder="" class="w-full p-2 border border-gray-300 rounded" />
                    <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                    this should not show up if in desktop
                </div>
                <br>
                <div class="mb-4 w-full flex flex-col lg:flex-row gap-2">
                    <input type="text" placeholder="" class="w-full p-2 border border-gray-300 rounded" />
                    <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                    this should not show up if in desktop
                </div>
                <br>
                <div class="mb-4 w-full flex flex-col lg:flex-row gap-2">
                    <input type="text" placeholder="" class="w-full p-2 border border-gray-300 rounded" />
                    <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                    this should not show up if in desktop
                </div>
                <br>
                <div class="mb-4 w-full flex flex-col lg:flex-row gap-2">
                    <input type="text" placeholder="somewhere to put p-slice mods"
                        class="w-full p-2 border border-gray-300 rounded" />
                    <button class="p-2 bg-gray-200 rounded lg:w-1/12">Browse</button>
                    this should not show up if in desktop
                </div>
            </div>
        </div>
        <h2 class="text-2xl font-semibold mb-4">Other Settings</h2>
        <div class="mb-4">
            <label class="block text-gray-700 mb-2" for="default-engine">{{ $t('settings.defaultengine') }}</label>
            <select id="default-engine" class="w-full p-2 border border-gray-300 rounded">
                <option>{{ $t('shared.base') }}</option>
                <option>{{ $t('shared.psych') }}</option>
                <option>{{ $t('shared.codename') }}</option>
            </select>
            <label class="block text-gray-700 mb-2" for="max-dl">{{ $t('settings.maxdl') }}</label>
            <input type="number" id="max-dl" class="w-full p-2 border border-gray-300 rounded" min="1" max="10" />
        </div>
    </div>
</template>
<script>
const handleLanguageChange = (event) => {
  const selectedLang = event.target.value
  localStorage.setItem('user-locale', selectedLang)
}
</script>
import { createMemoryHistory, createRouter } from 'vue-router'

import HomeView from './router/home.vue'
import ExploreView from './router/explore.vue'
import SettingsView from './router/settings.vue'
import DownloadView from './router/download.vue'
import LibraryView from './router/library.vue'
import StatsView from './router/stats.vue'
import UpdateView from './router/update.vue'
import EnginesView from './router/engines.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/explore', component: ExploreView },
  { path: '/settings', component: SettingsView },
  { path: '/download', component: DownloadView },
  { path: '/library', component: LibraryView },
  { path: '/stats', component: StatsView },
  { path: '/update', component: UpdateView },
  { path: '/engines', component: EnginesView }
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
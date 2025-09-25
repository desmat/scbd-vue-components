# SCBD Vue Components

Custom Vue components suitable to use in a Vue/Nuxt project with CoreUI

## Installation

Install libs:
- The github project directly: `yarn add GIT_REPO_URL`
- Coreui peer dependencies: `yarn add @coreui/coreui @coreui/icons @coreui/icons-vue @coreui/utils @coreui/vue`

Import component and style
```
// a-page-or-component.vue

import { DateInput } from '@scbd/vue-components'
import '@scbd/vue-components/style.css'

const date = '1999-12-31'

...

<Template>
  <DateInput v-model="date" label="Party like it's" />
  ...
```

Or configure `main.ts` in a Vue project to use with auto-import
```
// main.ts

import ...
import VueComponents from '@scbd/vue-components'
import '@scbd/vue-components/style.css'
...

createApp(App)
  ...
  .use(VueComponents)
  ...
  .mount('#app')
```

Or add a plugin in a Nuxt project to use with auto-import
```
// app/plugins/scbd-vue-components.ts

import { defineNuxtPlugin } from '#app'
import VueComponents from '@scbd/vue-components'
import '@scbd/vue-components/style.css'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueComponents)
})
```

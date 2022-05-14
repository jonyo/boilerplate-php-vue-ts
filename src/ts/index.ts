import app from './app'

// components used in root level
import NiceTitle from '@components/NiceTitle.vue'

app.component('NiceTitle', NiceTitle)
    .mount('#app')

import App from './App'
import uviewPlus from '@/uni_modules/uview-plus'
import {
    createSSRApp
} from 'vue'

uni.$zp = {

    config: {
        'default-page-size': 20,
        'auto-clean-list-when-reload': false,
        'hide-no-more-by-limit': 10
    }
}
export function createApp() {
    const app = createSSRApp(App)
    app.use(uviewPlus)
    return {
        app
    }
}
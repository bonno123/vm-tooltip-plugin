import { createApp } from 'vue';
import { createTooltipPlugin } from './tootip-plugin';
import App from './App.vue'

const app = createApp(App);

app.use(createTooltipPlugin({
    arrow: false,
    placement: 'right'
}));

app.mount('#app');

import { App, defineAsyncComponent } from 'vue';
import { defu } from 'defu'
import { hideAll } from 'tippy.js';
import { PluginOptions } from './types';
// import type { Props } from 'tippy.js';

// interface PluginOptions extends Partial<Props> { }

export const tooltipOptionsInject = Symbol();

export function createTooltipPlugin(options: PluginOptions = {}) {
    return (app: App) => {
        options = defu(options, {
            // arrow: false,
            ...options
        });
        //Add a Global Instance Method with a Vue.js Plugin
        app.config.globalProperties.$hideAllTooltips = hideAll;


        app.provide(tooltipOptionsInject, options);
        app.component(
            'VmToolTip',
            defineAsyncComponent(() => import('../tootip-plugin/TooltipComp.vue'))
        );
        console.log('hello plugin', options);
    }
}

// export function tooltipPlugin(app: any, options: any) {


// }
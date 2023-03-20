import type { HideAll, Props } from 'tippy.js';
import type VmToolTip from "./TooltipComp.vue"


export type PluginOptions = Partial<Props>;

export * from './index'

declare module "vue" {
    interface ComponentCustomProperties {
        $hideAllTooltips: HideAll
    }
    interface GlobalComponents {
        VmToolTip: typeof VmToolTip
    }
}

// "env.d.ts",
// "src/tootip-plugin/**/*.ts",
// "src/tootip-plugin/**/*.d.ts",
// "src/tootip-plugin/**/*.tsx",
// "src/tootip-plugin/**/*.vue"
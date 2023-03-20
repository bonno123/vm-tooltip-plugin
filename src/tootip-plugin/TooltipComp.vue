<template>
  <span ref="tooltip"></span>
</template>

<script lang="ts" setup>
import tippy, { Instance, Props } from 'tippy.js';

import { onMounted, onUnmounted, onUpdated, ref, inject } from 'vue';
import { tooltipOptionsInject } from '../tootip-plugin';

import 'tippy.js/dist/tippy.css';  // optional for styling

const props = defineProps<{
  label?: string;
  options?:any
}>();

const tooltip = ref<HTMLSpanElement | null>(null)

let tippyInstance: Instance<Props> | null = null

function initTippy(){
  if(tippyInstance) tippyInstance.destroy();
  tippyInstance = tippy(tooltip.value?.parentNode as HTMLSpanElement, {
    ...inject(tooltipOptionsInject),
    content: props.label,
    ...(props.options ?? {})
  })
}

onMounted(initTippy)

onUpdated(initTippy)

onUnmounted(() => tippyInstance?.destroy())

// const emit = defineEmits<{ 
//   (e: 'update:should-issue-in-one-atom', value?: boolean): void 
// }>();

</script>
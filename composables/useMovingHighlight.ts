import { nextTick, onMounted, ref, watch, type Ref } from 'vue'

export interface HighlightState {
  top: Ref<number>
  height: Ref<number>
  visible: Ref<boolean>
  ready: Ref<boolean>
  itemEls: Ref<HTMLElement[]>
}

/**
 * Animates an absolutely-positioned highlight pill that slides between
 * items in a static list. Designed for layouts/components where ALL items
 * are always rendered and one is "active" at a time (e.g. Agenda).
 *
 * NOT suitable for v-click components where items appear/disappear
 * progressively (Stepper, Timeline) — those use CSS-based animations instead.
 *
 * @param activeIndex - reactive index of the currently active item (0-based, -1 = none)
 * @param enabled     - when false, no pill is rendered (static mode)
 */
export function useMovingHighlight(
  activeIndex: Ref<number>,
  enabled: Ref<boolean>,
) {
  const top = ref(0)
  const height = ref(0)
  const visible = ref(false)
  const ready = ref(false)   // true once the first placement has painted — enables transition
  const itemEls = ref<HTMLElement[]>([])

  async function place(index: number, instant: boolean) {
    if (!enabled.value || index < 0) {
      visible.value = false
      return
    }

    const el = itemEls.value[index]
    if (!el) return

    await nextTick()

    if (instant) {
      // Set position silently, then reveal — prevents jump from top:0 on first click
      ready.value = false
      top.value = el.offsetTop
      height.value = el.offsetHeight
      await nextTick()
      visible.value = true
      requestAnimationFrame(() => { ready.value = true })
    } else {
      top.value = el.offsetTop
      height.value = el.offsetHeight
      visible.value = true
    }
  }

  watch(activeIndex, idx => place(idx, false))
  onMounted(() => place(activeIndex.value, true))

  return { top, height, visible, ready, itemEls }
}

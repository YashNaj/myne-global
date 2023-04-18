import { QueryClient } from '@tanstack/svelte-query'
import { browser } from '$app/environment'
import type { LayoutLoad } from './$types'

export const load:LayoutLoad = ({ url }) => {
    const { pathname } = url
    return {
      pathname,
    }
  }
  
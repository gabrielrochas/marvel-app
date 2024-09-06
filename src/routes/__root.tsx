import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'

import { Header } from '@/components/header'
import { SettingsWidget } from '@/components/settings-widget'

export const Route = createRootRoute({
  component: () => (
    <>
      <Header />
      <SettingsWidget />
      <ScrollRestoration getKey={location => location.pathname} />
      <Outlet />
    </>
  ),
})

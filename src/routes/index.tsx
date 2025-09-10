import { Shop } from '@pages/Shop'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: () => <Shop/>
})
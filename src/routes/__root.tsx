import { createRootRoute, Link, Outlet } from '@tanstack/react-router'

const RootLayout = () => ( // Where you are supposed to put navbars, providers etc
  <>
    <div className="p-2 flex gap-2">
      <Link to="/" className="[&.active]:font-bold">
        Home
      </Link>{' '}
      <Link to="/products" className="[&.active]:font-bold">
        Products
      </Link>
    </div>
    <hr />
    <Outlet />
  </>
)

export const Route = createRootRoute({ component: RootLayout })
import { createRouter, RouterProvider, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import ValentineLanding from './pages/ValentineLanding';
import CouponPage from './pages/CouponPage';
import { CopyProvider } from './content/CopyContext';

const rootRoute = createRootRoute({
  component: () => (
    <CopyProvider>
      <Outlet />
    </CopyProvider>
  )
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: ValentineLanding
});

const couponRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/coupon',
  component: CouponPage
});

const routeTree = rootRoute.addChildren([indexRoute, couponRoute]);

const router = createRouter({ routeTree });

function App() {
  return <RouterProvider router={router} />;
}

export default App;

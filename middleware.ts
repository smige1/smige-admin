import { authMiddleware } from "@clerk/nextjs";
export default authMiddleware({
  publicRoutes: [
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc", 
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/categories",
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/billboards",
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/sizes",
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/colors",
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/products",
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/billboards/eec34c19-8361-420c-b92f-9e82d0c77f15",
    "/api/a4cdf241-45b8-4309-9126-cec6707574fc/billboards/5c312999-360d-4a8a-9c7d-32bec45ac764"
  ]
    
});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
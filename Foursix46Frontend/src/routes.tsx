// src/routes.tsx
import type { RouteRecord } from "vite-react-ssg";

export const routes: RouteRecord[] = [
  {
    path: "/",
    lazy: async () => ({
      Component: (await import("./pages/HomePage")).default,
    }),
  },
  {
    path: "/services",
    lazy: async () => ({
      Component: (await import("./pages/ServicesPage")).default,
    }),
  },
  {
    path: "/services/:slug",
    lazy: async () => {
      const mod = await import("./pages/ServiceDetailPage");
      return { Component: mod.default, loader: mod.loader };
    },
  },
  {
    path: "/sectors",
    lazy: async () => ({
      Component: (await import("./pages/SectorsPage")).default,
    }),
  },
  {
    path: "/sectors/:slug",
    lazy: async () => {
      const mod = await import("./pages/SectorDetailPage");
      return { Component: mod.default, loader: mod.loader };
    },
  },
  {
    path: "/locations",
    lazy: async () => ({
      Component: (await import("./pages/LocationsPage")).default,
    }),
  },
  {
    path: "/locations/:slug",
    lazy: async () => {
      const mod = await import("./pages/LocationDetailPage");
      return { Component: mod.default, loader: mod.loader };
    },
  },
  {
    path: "/locations/:locationSlug/:serviceSlug",
    lazy: async () => {
      const mod = await import("./pages/LocationServicePage");
      return { Component: mod.default, loader: mod.loader };
    },
  },
  {
    path: "/blog",
    lazy: async () => ({
      Component: (await import("./pages/BlogsPage")).default,
    }),
  },
  {
    path: "/blog/:slug",
    lazy: async () => {
      const mod = await import("./pages/BlogPostPage");
      return { Component: mod.default, loader: mod.loader };
    },
  },
  {
    path: "/contact",
    lazy: async () => ({
      Component: (await import("./pages/ContactPage")).default,
    }),
  },
  {
    path: "/about",
    lazy: async () => ({
      Component: (await import("./pages/AboutPage")).default,
    }),
  },
];

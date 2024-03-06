import express from "express";

const router = express.Router();

const test = express.Router();
const moduleRoutes = [
  // ... routes
  {
    path: "/test",
    route: test,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));
export default router;

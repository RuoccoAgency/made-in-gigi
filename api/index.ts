import { appWithRoutes } from "../dist/index.cjs";

export default async (req: any, res: any) => {
    const app = await appWithRoutes;
    return app(req, res);
};


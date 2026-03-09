import { appWithRoutes } from "../server/index";

export default async (req: any, res: any) => {
    const app = await appWithRoutes;
    return app(req, res);
};


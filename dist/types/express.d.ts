export type PublicFilterValue = string | number | boolean | Array<string | number | boolean>;
export type PublicFilters = Record<string, PublicFilterValue>;
export type AuthUser = {
    id: string;
    username: string;
};
declare global {
    namespace Express {
        interface Request {
            filters: PublicFilters;
            user?: AuthUser;
        }
    }
}
//# sourceMappingURL=express.d.ts.map
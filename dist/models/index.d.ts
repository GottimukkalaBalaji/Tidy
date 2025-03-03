import { Sequelize } from 'sequelize';
declare const sequelize: Sequelize;
export declare const User: typeof import("./User.js").User;
export declare const Space: typeof import("./Space.js").Space;
export declare const Product: import("sequelize").ModelStatic<import("./Product.js").ProductModel>;
declare const syncDatabase: () => Promise<void>;
export { sequelize, syncDatabase };

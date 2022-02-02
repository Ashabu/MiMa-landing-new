export interface IConfigConstants {
    api_URL: string;
    base_URL: string;
}
declare const globalConfig: IConfigConstants;

const _globalConfig = globalConfig;

export { _globalConfig as globalConfig }
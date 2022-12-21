import { Base } from "./Base";

export interface Device extends Base{
    uid: number;
    vendor: string;
    dateCreated: string;
    status: string;
    gatewayId?: number;
}

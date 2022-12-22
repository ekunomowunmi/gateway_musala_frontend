import { Base } from "./Base";
import { Device } from "./Device";

export interface Gateway extends Base{
  serialNumber: string;
  name: string;
  ipAddress: string;
  devices: Device[];

}

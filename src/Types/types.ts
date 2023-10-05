import { StaticImageData } from "next/image";

export type Alert = {
  id: number;
  allReadStatus: boolean;
  username: string;
  img: StaticImageData;
  description: string;
  timestamp: string;
  message?: string;
  group?: string;
  post?: string;
};

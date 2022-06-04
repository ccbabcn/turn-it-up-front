import { toast } from "react-toastify";

export const correctAction = (message: string) => toast.success(message);
export const wrongAction = (message: string) => toast.warning(message);

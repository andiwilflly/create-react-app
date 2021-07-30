import axios from "axios";
import { toast } from "react-toastify";

export async function fetch(options: IOptions): Promise<void> {
    try {
        await axios(options);
    } catch (e) {
        toast.error(e);
    } finally {
    }
}

type TMethod = "get" | "post" | "patch" | "put" | "delete";
interface IOptions {
    url: string;
    method?: TMethod;
    data?: Object;
    headers?: Object;
}

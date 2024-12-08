import { injectable } from "inversiland";
import { toast } from "react-toastify";

@injectable()
export class ToastService {
  public success(message: string) {
    toast.success(message);
  }

  public info(message: string) {
    toast.info(message);
  }

  public warn(message: string) {
    toast.warn(message);
  }

  public error(message: string) {
    toast.error(message);
  }
}

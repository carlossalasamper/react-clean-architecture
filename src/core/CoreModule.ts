import EnvToken from "./domain/EnvToken";
import HttpClient from "./infrastructure/implementations/HttpClient";
import { IHttpClientToken } from "./domain/specifications/IHttpClient";
import { module } from "inversiland";
import { ToastService } from "./presentation/services/ToastService";

@module({
  providers: [
    {
      isGlobal: true,
      provide: EnvToken,
      useValue: import.meta.env,
    },
    {
      isGlobal: true,
      provide: IHttpClientToken,
      useClass: HttpClient,
    },
    {
      useClass: ToastService,
      isGlobal: true,
    },
  ],
})
export default class CoreModule {}

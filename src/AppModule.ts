import { module } from "inversify-sugar";
import CoreModule from "./core/CoreModule";

@module({
  imports: [CoreModule],
})
export default class AppModule {}

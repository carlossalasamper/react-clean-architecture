import { module } from "inversify-sugar";
import CoreModule from "./core/CoreModule";
import { PostModule } from "./post/PostModule";

@module({
  imports: [CoreModule, PostModule],
})
export default class AppModule {}

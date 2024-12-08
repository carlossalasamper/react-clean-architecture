import { module } from "inversiland";
import CoreModule from "./core/CoreModule";
import { PostModule } from "./post/PostModule";

@module({
  imports: [CoreModule, PostModule],
})
export default class AppModule {}

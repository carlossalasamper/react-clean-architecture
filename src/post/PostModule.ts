import { getModuleContainer, module } from "inversify-sugar";
import FindPostUseCase from "./application/useCases/FindPostUseCase";
import GetPostsUseCase from "./application/useCases/GetPostsUseCase";
import { IPostRepositoryToken } from "./domain/specifications/IPostRepository";
import PostRepository from "./infrastructure/implementations/PostRepository";
import { FindPostStore } from "./presentation/stores/FindPostStore/FindPostStore";
import { GetPostsStore } from "./presentation/stores/GetPostsStore/GetPostsStore";

@module({
  providers: [
    {
      provide: IPostRepositoryToken,
      useClass: PostRepository,
    },
    FindPostUseCase,
    GetPostsUseCase,
    {
      useClass: GetPostsStore,
      scope: "Transient",
    },
    {
      useClass: FindPostStore,
      scope: "Transient",
    },
  ],
})
export class PostModule {}

export const postModuleContainer = getModuleContainer(PostModule);

import { useNavigate } from "react-router-dom";
import PostEntity from "@/post/domain/entities/PostEntity";

interface PostItemProps {
  post: PostEntity;
}

const PostItem = ({ post }: PostItemProps) => {
  const { title, body } = post;
  const navigate = useNavigate();
  const onClick = () => {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <div className="p-4 border-b border-gray-300 group-hover:bg-gray-100">
        <span className="text-lg font-bold mb-2">{title}</span>
        <span className="text-base">{body}</span>
      </div>
    </div>
  );
};

export default PostItem;

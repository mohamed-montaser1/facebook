import Post from "./Post";

interface Props {
  utilType?: string;
}
export default function PostsContainer({ utilType }: Props) {
  return (
    <>
      <Post utilType={utilType} />
      <Post utilType={utilType} />
    </>
  );
}

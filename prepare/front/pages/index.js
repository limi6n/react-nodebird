import React from "react";
import { useSelector } from "react-redux";
import AppLayout from "../components/AppLayout";

import PostForm from "../components/PostForm";
import PostCard from "../components/PostCard";

const Home = () => {
  const { isLoggedIn} = useSelector((state) => state.user);
  const { mainPosts } = useSelector((state) => state.post);

  // map 사용 시 바뀔 가능성이 있는 경우 key 는 index 로 사용하지 않는다. 
  return (
    <AppLayout>
      { isLoggedIn && <PostForm /> }
      { mainPosts.map((post) => <PostCard key={post.id} post={post} /> )}
    </AppLayout>
  );
};

export default Home;

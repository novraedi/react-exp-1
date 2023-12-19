import CategoryList from "../components/category/CategoryList";
import ThreadList from "../components/thread/ThreadList";
import LeaderboardList from "../components/leaderboard/LeaderboardList";
import { useEffect } from "react";
import { asyncPopulateUserAndThread } from "../states/shared/action";
import { useDispatch, useSelector } from "react-redux";
import CreateThread from "../components/thread/CreateThread";
import { asyncCreateThread } from "../states/thread/action";

export default function HomePage(params) {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUserAndThread());
  }, [dispatch]);

  const onCreateThread = ({ title, body, category }) => {
    dispatch(asyncCreateThread({ title, body, category }));
  };

  const threadList = threads.map((thread) => ({
    ...thread,
    user: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));
  return (
    <div className="content__container container mt-4 mx-auto grid grid-cols-10 gap-6">
      <CategoryList />
      <div className="content__main col-span-6">
        <div className="content__main-article">
          <CreateThread onCreateThread={onCreateThread} />
          <ThreadList threadList={threadList} />
        </div>
      </div>
      <LeaderboardList />
    </div>
  );
}

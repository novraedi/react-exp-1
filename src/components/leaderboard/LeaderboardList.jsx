import LeaderboardItem from "./LeaderboardItem";

export default function LeaderboardList(params) {
  return (
    <aside className="content__top col-span-2 h-max">
      <div className="content__top-title font-extrabold">Topik Populer</div>
      <LeaderboardItem />
    </aside>
  );
}

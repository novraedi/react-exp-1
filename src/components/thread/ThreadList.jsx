import ThreadItem from "./ThreadItem";

export default function ThreadList({ threadList }) {
  return (
    <>
      {threadList.map((thread, index) => (
        <ThreadItem key={index} {...thread} />
      ))}
    </>
  );
}

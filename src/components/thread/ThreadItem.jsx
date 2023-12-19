import { BiLike } from "react-icons/bi";
import { BiSolidLike } from "react-icons/bi";
import { BiDislike } from "react-icons/bi";
import { BiComment } from "react-icons/bi";
import parse from "html-react-parser";
import formatDate from "../../utils/index";
import { useDispatch } from "react-redux";
import {
  asyncToggleUpThread,
  asyncToggleDownThread,
} from "../../states/thread/action";
export default function ThreadItem({
  id,
  body,
  title,
  category,
  createdAt,
  totalComments,
  upVotesBy,
  downVotesBy,
}) {
  let sliceBody = body.slice(0, 120);
  const dispatch = useDispatch();

  const onUpvoteThread = () => {
    dispatch(asyncToggleUpThread(id));
  };

  const onDownVoteThread = () => {
    dispatch(asyncToggleDownThread(id));
  };
  return (
    <div className="content__thread-item">
      <div className="content__main-article-title font-extrabold">{title}</div>
      <div className="content__main-article-subtitle">{parse(sliceBody)}</div>
      <div className="content__main-article-category">{category}</div>
      <div className="content__main-article-author flex gap-2">
        <div className="content__main-article-icon flex gap-2">
          <button onClick={onUpvoteThread}>
            <BiLike size={24} />
          </button>
          <span className="content__main-article-icon-text">
            {upVotesBy.length}
          </span>
        </div>
        <div className="content__main-article-icon flex gap-2">
          <button onClick={onDownVoteThread}>
            <BiDislike size={24} />
          </button>
          <span className="content__main-article-icon-text">
            {downVotesBy.length}
          </span>
        </div>
        <div className="content__main-article-icon flex gap-2">
          <BiComment size={24} />
          <span className="content__main-article-icon-text">
            {totalComments} -
          </span>
        </div>
        <div className="content__main-article-author-days">
          {formatDate(createdAt)}
        </div>
        <div className="content__main-article-author-name">
          Dibuat oleh <span className="font-bold">Dicoding</span>
        </div>
      </div>
    </div>
  );
}

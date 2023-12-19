import useInput from "../../hooks/useInput";
import React from "react";
import "../../styles/style.css";

export default function CreateThread({ onCreateThread }) {
  const [title, setTitle] = useInput("");
  const [category, setCategory] = useInput("");
  const [body, setBody] = useInput("");

  return (
    <div className="content__thread-item">
      <div className="content__main-article-title font-extrabold text-center">
        Create New Thread
      </div>
      <div className="content__main-article-subtitle">
        <form action="" className="w-full flex flex-col gap-4 form__thread">
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Title"
            value={title}
            onChange={setTitle}
          />
          <input
            type="text"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Category"
            value={category}
            onChange={setCategory}
          />
          <textarea
            cols="30"
            rows="10"
            className="border border-gray-300 rounded-md p-2"
            placeholder="Body"
            value={body}
            onChange={setBody}
          ></textarea>
          <button
            className="button-red"
            onClick={() => onCreateThread({ title, category, body })}
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
}

import "./Post.css";

export default function Post() {
  return (
    <div className="box-start-a-post">
      <div className="box-input-buton">
        <input
          className="start-a-post"
          type="text"
          placeholder="Start a post"
        />
        <button className="buton-post-start-a-post">Post</button>
      </div>
      <div className="butoane-start-a-post">
        <div className="box-buton-start-a-post">
          <button className="media-button-start-a-post">
            <i class="fa-solid fa-image"></i>Media
          </button>
        </div>
        <div className="box-buton-start-a-post">
          <button className="event-button-start-a-post">
            <i class="fa-solid fa-calendar-days"></i>Event
          </button>
        </div>
        <div className="box-buton-start-a-post">
          <button className="write-button-start-a-post">
            <i class="fa-solid fa-newspaper"></i>Write article
          </button>
        </div>
      </div>
    </div>
  );
}

import Post from "../../card-start-a-post/Post";
import Cardmijloc from "../Card-mijloc";
import { Products } from "../../../../data/Products";
import "./Mijloc.css";

export default function Mijloc() {
  return (
    <div className="mijloc">
      <Post />
      {Products.map((product) => (
        <Cardmijloc
          key={product.id}
          image={product.image}
          name={product.name}
          description={product.description}
          views={product.views}
          likes={product.likes}
        />
      ))}
    </div>
  );
}

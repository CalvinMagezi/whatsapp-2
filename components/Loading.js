import Image from "next/image";
import { Code } from "react-content-loader";

function Loading() {
  return (
    <center
      style={{
        display: "grid",
        placeItems: "center",
        height: "100vh",
        background: "black",
      }}
    >
      <div>
        <img
          src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c543.png"
          alt=""
          style={{ marginBottom: 10 }}
          height={200}
        />

        <Code
          width={200}
          height={100}
          viewBox="0 0 100 100"
          style={{ width: "100%" }}
        />
      </div>
    </center>
  );
}

export default Loading;

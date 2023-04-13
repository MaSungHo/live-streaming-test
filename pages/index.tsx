import Link from "next/link";
import style from "./home.module.css";

export default function Home() {
  const streamingTitles = [
    "BJ 마브 첫방송 ~"
  ];

  const rendering = () => {
    const result = [];
    for (let i = 0; i < streamingTitles.length; i++) {
      result.push(
        <Link href="/streaming">
          <div key={i} className={style.title}>
            <span className={style.highlight}>[생방송] </span>
            {streamingTitles[i]}
            <span className={style.arrow}>>></span>
          </div>
        </Link>
      );
    }
    return result;
  };

  return (
    <div>
      <h1>Switch</h1>
      {rendering()}

      <style jsx>{`
        h1 {
          font-size: 60px;
          font-weight: 800;
          margin-bottom: 10px;
        }

        div {
          margin-top: 10px;
          margin-left: 5%;
        }
      `}</style>
    </div>
  )
}

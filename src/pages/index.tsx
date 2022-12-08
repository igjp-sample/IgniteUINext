import Link from "next/link";

export default function Home() {
  return (
    <>
      <div>
        <Link href={"./data-grid"}>データグリッド（IgniteWrapper）</Link>
      </div>

      <div>
        <Link href={"./data-grid-dynamic"}>
          データグリッド（dynamic import）
        </Link>
      </div>

      <div>
        <Link href={"./chart"}>チャート</Link>
      </div>
    </>
  );
}

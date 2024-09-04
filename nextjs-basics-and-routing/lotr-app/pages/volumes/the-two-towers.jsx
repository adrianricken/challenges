import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

const volume = volumes.find(({ slug }) => slug === "the-two-towers");

export default function TheTwoTowers() {
  return (
    <>
      <Link href={"/volumes"}>← All Volumes</Link>
      <h1>{volume.title}</h1>
      <p>{volume.description}</p>
      <ul>
        {volume.books.map((book, index) => (
          <li key={index}>
            {book.ordinal}: {book.title}
          </li>
        ))}
      </ul>
      <Image
        src={"/../../resources/public/the-two-towers.png"}
        alt="the-two-towers-cover"
        width={140}
        height={230}
      />
      <footer
        style={{
          display: "flex",
          justifyContent: "space-between",
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "center",
          padding: "1rem",
        }}
      >
        <Link href={"/volumes/the-fellowship-of-the-ring"}>
          ← Previous Volume
        </Link>
        <Link href={"/volumes/the-return-of-the-king"}>Next Volume →</Link>
      </footer>
    </>
  );
}

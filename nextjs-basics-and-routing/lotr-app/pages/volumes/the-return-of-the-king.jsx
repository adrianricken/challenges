import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

const volume = volumes.find(({ slug }) => slug === "the-return-of-the-king");

export default function TheReturnOfTheKing() {
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
        src={"/../../resources/images/the-return-of-the-king.png"}
        alt="the-return-of-the-king-cover"
        width={140}
        height={230}
      />
      <footer
        style={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          width: "100%",
          textAlign: "left",
          padding: "1rem",
        }}
      >
        <Link href={"/volumes/the-two-towers"}>← Previous Volume</Link>
      </footer>
    </>
  );
}

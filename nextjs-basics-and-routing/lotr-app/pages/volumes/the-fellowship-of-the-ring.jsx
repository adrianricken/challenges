import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

const volume = volumes.find(
  ({ slug }) => slug === "the-fellowship-of-the-ring"
);

export default function TheFellowshipOfTheRing() {
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
        src={"/../../resources/public/the-fellowship-of-the-ring.png"}
        alt="the-fellowship-of-the-ring-cover"
        width={140}
        height={230}
      />
      <footer
        style={{
          display: "flex",
          position: "fixed",
          bottom: 0,
          right: 0,
          padding: "1rem",
        }}
      >
        <Link href={"/volumes/the-two-towers"}>Next Volume →</Link>
      </footer>
    </>
  );
}

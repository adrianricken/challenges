import Link from "next/link";
import { volumes } from "../../resources/lib/data";
import Image from "next/image";

const TheReturnOfTheKing = () => {
  const { title, description, cover, books } = volumes.find(
    (volume) => volume.slug === "the-return-of-the-king"
  );

  return (
    <>
      <Link href={"/volumes"}>← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => {
          return (
            <li key={ordinal}>
              <p>
                {ordinal}: {title}
              </p>
            </li>
          );
        })}
      </ul>
      <Image src={cover} alt={title} width={140} height={230} />
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
};

export default TheReturnOfTheKing;

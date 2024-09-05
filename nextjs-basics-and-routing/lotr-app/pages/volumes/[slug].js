import { volumes } from "../../resources/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;
  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }
  const { title, description, cover, books } = volumes.find(
    (volume) => volume.slug === slug
  );
  return (
    <>
      <Link href="../volumes">← All Volumes</Link>
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
      <hr />
      <Link href={"/volumes"}>← Previous Volume</Link>
      <br />
      <Link href={"/volumes"}>Next Volume →</Link>
    </>
  );
}

// <footer
//   style={{
//     display: "flex",
//     position: "fixed",
//     bottom: 0,
//     right: 0,
//     padding: "1rem",
//   }}
// >
//   <Link href={"/volumes"}>← Previous Volume</Link>
//   <Link href={"/volumes"}>Next Volume →</Link>
// </footer>

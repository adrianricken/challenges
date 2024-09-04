import Link from "next/link";
import { introduction } from "../../resources/lib/data";
import { volumes } from "../../resources/lib/data";

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

export default function Volumes() {
  return (
    <>
      <Link href={".."}>← Home</Link>
      <h1>Lord of the Rings</h1>
      <p>{introduction}</p>
      <h2>All Volumes</h2>
      <ul>
        {volumes.map(({ slug, title }) => (
          <li key={slug}>
            <Link href={`/volumes/${slug}`}>{title}</Link>
          </li>
        ))}
      </ul>
      <button onClick={<Link href={`/volumes`}></Link>}>
        See random volume
      </button>
    </>
  );
}

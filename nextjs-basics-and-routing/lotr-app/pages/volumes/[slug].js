import { volumes } from "../../resources/lib/data";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export default function VolumeDetail() {
  const router = useRouter();
  const { slug } = router.query;

  const StyledBackground = styled.div`
    background-color: ${({ $color }) => $color};
  `;

  const currentVolume = volumes.find((volume) => volume.slug === slug);

  if (!currentVolume) {
    return null;
  }

  const currentIndex = volumes.findIndex((volume) => volume.slug === slug);
  const nextVolume = volumes[currentIndex + 1];
  const previousVolume = volumes[currentIndex - 1];

  const { title, description, cover, books, color } = currentVolume;

  return (
    <StyledBackground $color={color}>
      <Link href="../volumes">← All Volumes</Link>
      <h1>{title}</h1>
      <p>{description}</p>
      <ul>
        {books.map(({ ordinal, title }) => {
          return (
            <li key={ordinal}>
              <p>
                {ordinal}: <strong>{title}</strong>
              </p>
            </li>
          );
        })}
      </ul>
      <Image src={cover} alt={title} width={280} height={460} />
      <div>
        {previousVolume && (
          <Link href={`/volumes/${previousVolume.slug}`}>
            ← Previous: {previousVolume.title}
          </Link>
        )}
        {nextVolume && (
          <Link href={`/volumes/${nextVolume.slug}`}>
            Next: {nextVolume.title} →
          </Link>
        )}
      </div>
    </StyledBackground>
  );
}

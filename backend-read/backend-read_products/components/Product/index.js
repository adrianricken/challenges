import useSWR from "swr";
import { useRouter } from "next/router";
import { ProductCard } from "./Product.styled";
import { StyledLink } from "../Link/Link.styled";

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <div>
        <br />
        {data.reviews.length === 0 ? (
          <>
            <p style={{ fontStyle: "italic" }}>No reviews yet</p>
            <br />
          </>
        ) : (
          data.reviews.map((review, index) => (
            <>
              <p key={index}>
                <strong>{review.title}</strong>
                <br />
                {review.text}
                <br />
                Rating: {review.rating} / 5
              </p>{" "}
              <br />
            </>
          ))
        )}
      </div>
      <StyledLink href="/">Back to all</StyledLink>
    </ProductCard>
  );
}

import useSWR from "swr";
import { useRouter } from "next/router";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DetailsPage(res, req) {
  const router = useRouter();
  const { id } = router.query;

  const { data, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);

  if (error) return <div>Product not found.</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div>
      <h1>{data.name}</h1>
      <ul>
        <li>{data.description}</li>
        <li>
          price: {data.price}
          {data.currency}
        </li>
        <li>category: {data.category}</li>
      </ul>
    </div>
  );
}

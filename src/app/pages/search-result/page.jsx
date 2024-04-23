import { useRouter } from 'next/router';

export default function SearchResults() {
  const router = useRouter();
  const { location, category } = router.query;

  if (!location || !category) {
    return <div>No search parameters provided</div>;
  }

  return (
    <div>
      <h2>Search Results</h2>
      <p>Location: {location}</p>
      <p>Category: {category}</p>
      {/* Implement your search logic or display relevant data based on location and category */}
    </div>
  );
}

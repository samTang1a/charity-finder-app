
interface Charity {
  id: number;
  name: string;
}

interface FavoriteCharitiesProps {
  favoriteCharities: Charity[];
}

function FavoriteCharities({ favoriteCharities }: FavoriteCharitiesProps) {
  return (
    <div>
      <h2>Favorite Charities</h2>
      <ul>
        {favoriteCharities.map((charity) => (
          <li key={charity.id}>
            <a href={`/charity/${charity.id}`}>{charity.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FavoriteCharities;

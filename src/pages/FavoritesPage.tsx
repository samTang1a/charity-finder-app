import Charity from "../charity"
import CharityList from "../components/CharityList";

interface FavoritesPageProps {
  favorites: Charity[];
}

export default function FavoritesPage(prop: FavoritesPageProps) {
  return (
    <div className="container">
      <h6>Favorite</h6>
      <CharityList charityItems={prop.favorites}/>
    </div>
  )

}
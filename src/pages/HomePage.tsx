import CharityList from "../components/CharityList"
import Charity from "../charity";

interface HomePageProps {
  search: string;
  charityItems: Charity[];
  handleSearch:(match: string) => void
}

export default function HomePage(prop: HomePageProps) {
  return (
    <div className="container">
      {/* <Search handleSearch={prop.handleSearch}/> */}
      {prop.search ? <h4>Search results for: {prop.search}</h4> : null}
      <CharityList charityItems={prop.charityItems}/>
    </div>
  )
}
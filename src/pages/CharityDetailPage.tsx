// import Search from "../components/Search"
// import CharityDetail from "../components/CharityDetail"
import Charity from "../charity"
import { useParams } from "react-router-dom";


interface CharityDetailPageProps {
  charityItems: Charity[];
  favorites: Charity[];
  addFavorite: (item:Charity) => void;
  removeFavorite: (id: string) => void;
}

export default function CharityDetailPage(prop: CharityDetailPageProps) {

  const { id } = useParams();
  console.log('prop.charityItems', prop.charityItems)
  const charityDetail = prop.charityItems.find(item => item?.ein == id) as Charity
  console.log('charityDetail', charityDetail)
  const isFavorite =   prop.favorites.find(f => f?.ein == charityDetail?.ein )

  if (!charityDetail) {
    return (
      <>
        Loading
      </>
    )
  } else {
    return (
      <div className="container">
        <div className="card" >
          <img src={charityDetail.coverImageUrl} className="card-img-top" />
          <div className="card-body">
            <div>
              <img src={charityDetail.logoUrl ?? '../assets/avatar.svg'} className="bg-info rounded-circle" style={{ display: 'inline-block' }} />
              <h6 className="card-title ps-2" style={{ display: 'inline-block' }}>{charityDetail.name}</h6>
            </div>
            <p className="card-text">{charityDetail.location}</p>
            <p className="card-text">{charityDetail.description}</p>
            {
              !isFavorite ? <button className="btn btn-danger" onClick={() => {prop.addFavorite(charityDetail)}}>Add to favorites</button> :
              <button className="btn btn-secondary" onClick={() => {prop.removeFavorite(charityDetail.ein)}}>Remove from favorites</button>
            }
          </div>
        </div>
      </div>
    )
  }
}
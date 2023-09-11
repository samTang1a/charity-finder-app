import Charity from "../charity";

interface CharityListProps {
  charityItems: Charity[];
}

export default function CharityList(prop: CharityListProps) {

  if (prop.charityItems.length <= 0) {
    return (
      <>
        No items
      </>
    )
  }
  else {
    return (
      <>
        <div>You May Interest!!</div>
        <div className="row row-cols-1 row-cols-md-3 g-3">
          {prop.charityItems.map(charityItem => {
            return (
              <div key={charityItem.ein} className="col">
                <a href={`charity/${charityItem.ein}`} style={{ textDecoration: 'none' }}>
                  <div className="card h-100" style={{ width: "18rem" }}>
                    <div className="card-body">
                      <div>
                        <img src={charityItem.logoUrl ?? '../assets/avatar.svg'} className="bg-info rounded-circle" style={{ display: 'inline-block' }} />
                        <h6 className="card-title ps-2" style={{ display: 'inline-block' }}>{charityItem.name}</h6>
                      </div>
                      <hr />
                      <p className="card-text">{charityItem.location}</p>
                    </div>
                  </div>
                </a>
              </div>
            )
          })}
        </div>
      </>
    )
  }

}
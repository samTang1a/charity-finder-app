import { FormEvent } from 'react'

interface SearchProp{
  handleSearch:(match:string) => void
}

export default function Search(prop: SearchProp) {
  const sumbit = (e: FormEvent) => {
    e.preventDefault()
    const formData = new FormData(e.target as HTMLFormElement);
    prop.handleSearch(formData.get('search') as string)
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">Charity Finder</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/favorites">Favourites</a>
              </li>
            </ul>
            <form className="d-flex" role="search" onSubmit={sumbit}>
              <input className="form-control me-2" type="search" name="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
              {/* <input type="submit" className="btn btn-primary" /> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  )
}
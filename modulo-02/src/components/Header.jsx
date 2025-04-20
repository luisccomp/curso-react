import './Header.scss';

function Header(props) {

    return (
      <>
        <div className="header">
            <div className="container">
                <div className="header-side">
                    <h1>
                        {props.appName}
                    </h1>
                </div>
                <div className="header-side">
                    <button className="btn secondary">+ Add To-Do</button>
                </div>
            </div>
        </div>
      </>
    )
  }
  
  export default Header
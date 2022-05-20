import {Link} from "react-router-dom"

function Header() {
    return (
        <header>
            <div className="grid-element container-contact">
                <span className="location">CDMX Roma Sur</span>
                <svg
                    className="icon icon-WA"
                    version="1.1"
                    id="Capa_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px" y="0px"
                    viewBox="0 0 58 58"
                    style={{ enableBackground: "new 0 0 58 58" }}
                /*xml:space="preserve"*/
                >
                    <g>
                        <path className="header__icon-background" d="M0,58l4.988-14.963C2.457,38.78,1,33.812,1,28.5C1,12.76,13.76,0,29.5,0S58,12.76,58,28.5
		S45.24,57,29.5,57c-4.789,0-9.299-1.187-13.26-3.273L0,58z"/>
                        <path className="header__icon-foreground" d="M47.683,37.985c-1.316-2.487-6.169-5.331-6.169-5.331c-1.098-0.626-2.423-0.696-3.049,0.42
		c0,0-1.577,1.891-1.978,2.163c-1.832,1.241-3.529,1.193-5.242-0.52l-3.981-3.981l-3.981-3.981c-1.713-1.713-1.761-3.41-0.52-5.242
		c0.272-0.401,2.163-1.978,2.163-1.978c1.116-0.627,1.046-1.951,0.42-3.049c0,0-2.844-4.853-5.331-6.169
		c-1.058-0.56-2.357-0.364-3.203,0.482l-1.758,1.758c-5.577,5.577-2.831,11.873,2.746,17.45l5.097,5.097l5.097,5.097
		c5.577,5.577,11.873,8.323,17.45,2.746l1.758-1.758C48.048,40.341,48.243,39.042,47.683,37.985z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>

                <span className="phone1">55-3774-6078</span>
                <span className="phone2">55-1030-4245</span>
            </div>
            <Link className="link" to="/">
                <div className="grid-element">
                    <h1>Bois</h1>
                    <p className="subtitle">vintage furniture</p>
                </div>
            </Link>
            <div className="grid-element container-insta">
                <a href="https://www.instagram.com/bois_vintage/" rel="noreferrer" target="_blank">
                <svg
                    className="icon icon-insta"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 291.319 291.319"
                    style={{ enableBackground: "new 0 0 291.319 291.319" }}
                /*xml:space="preserve"*/
                >
                    <g>
                        <path className="header__icon-background" d="M145.659,0c80.44,0,145.66,65.219,145.66,145.66S226.1,291.319,145.66,291.319S0,226.1,0,145.66
		S65.21,0,145.659,0z"/>
                        <path className="header__icon-foreground" d="M195.93,63.708H95.38c-17.47,0-31.672,14.211-31.672,31.672v100.56
		c0,17.47,14.211,31.672,31.672,31.672h100.56c17.47,0,31.672-14.211,31.672-31.672V95.38
		C227.611,77.919,213.4,63.708,195.93,63.708z M205.908,82.034l3.587-0.009v27.202l-27.402,0.091l-0.091-27.202
		C182.002,82.116,205.908,82.034,205.908,82.034z M145.66,118.239c22.732,0,27.42,21.339,27.42,27.429
		c0,15.103-12.308,27.411-27.42,27.411c-15.121,0-27.42-12.308-27.42-27.411C118.23,139.578,122.928,118.239,145.66,118.239z
		 M209.65,193.955c0,8.658-7.037,15.704-15.713,15.704H97.073c-8.667,0-15.713-7.037-15.713-15.704v-66.539h22.759
		c-2.112,5.198-3.305,12.299-3.305,18.253c0,24.708,20.101,44.818,44.818,44.818s44.808-20.11,44.808-44.818
		c0-5.954-1.193-13.055-3.296-18.253h22.486v66.539L209.65,193.955z"/>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                    <g>
                    </g>
                </svg>
                </a>

            </div>

        </header>
    )
}

export default Header
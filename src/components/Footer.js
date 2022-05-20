function Footer() {
    return (
        <footer>
            <div className="footer-flex-container">
                <div className="footer-flex-item">
                    <div >
                        <h2>bois</h2>
                        <span className="subtitle">vintage furniture</span>
                    </div>
                    <p className="footer-para">Rescatamos muebles antiguos y les damos nueva vida. 
                    Si te interesa alguno de nuestros productos escríbenos un DM.
                    </p>
                    <p className="middle-footer-para">
                        <span className="footer-uppercase">Dirección</span><br></br>
                        <span className="footer-contact-info">Insurgentes Sur 420, CDMX, México</span>
                    </p>
                    <div className="footer-flex-container2">
                        <p><span className="footer-uppercase">Teléfono</span><br></br>
                            <span className="footer-contact-info">+(52)55-3774-6078</span>
                        </p>
                    </div>
                </div>
                <div className="footer-flex-item">
                    <h5 className="hours-title">Opening hours</h5>
                    <h6 className="hours-subtitle">Walk-ins are welcome. Arrange a meeting to avoid excessive waiting times</h6>
                    <div className="hours-flex-container">
                        <div>
                            <p className="day">Mon:</p>
                            <p className="day">Tue:</p>
                            <p className="day">Wed:</p>
                            <p className="day">Thur:</p>
                            <p className="day">Fri:</p>
                        </div>
                        <div>
                            <p className="bold hours">09-17</p>
                            <p className="bold hours">08-17</p>
                            <p className="bold hours">08-18</p>
                            <p className="bold hours">09-16</p>
                            <p className="bold hours">09-13</p>
                        </div>
                    </div>
                </div>
            </div>
            <h5 className="credit">Website by:
                <a className="link-footer" rel="noreferrer" target="_blank" href="https://ubiquitous-frangipane-e02795.netlify.app/">Alfonso Anaya</a>
            </h5>

            <span>Icons by <a classNameName="link" href="https://www.svgrepo.com/">svgrepo</a>.</span>
        </footer>
    )
}

export default Footer
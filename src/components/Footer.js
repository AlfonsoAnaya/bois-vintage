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
                    <div className="footer-flex-container2">
                    <p className="middle-footer-para">
                        <span className="footer-uppercase">Dirección</span><br></br>
                        <span className="footer-contact-info">Insurgentes Sur 420, CDMX, México</span>
                    </p>
                    <p><span className="footer-uppercase">Teléfono</span><br></br>
                        <span className="footer-contact-info">+(52)55-3774-6078</span>
                        </p>
                    </div>
                </div>
                <div className="footer-flex-item">
                    <h5 className="hours-title">Horario</h5>
                    <p className="hours-subtitle">Antes de visitarnos, solicita una cita por Whatsapp o llámanos por teléfono</p>
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
            <p className="credits">Website by <a className="footer-link" rel="noreferrer" target="_blank" href="https://ubiquitous-frangipane-e02795.netlify.app/">Alfonso Anaya</a>
            </p>

            <p className="credits">Icons by <a className="footer-link" rel="noreferrer" target="_blank" href="https://www.svgrepo.com/">svgrepo</a></p>
        </footer>
    )
}

export default Footer
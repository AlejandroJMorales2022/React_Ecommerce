import './Footer.css'
import imgInstagram from '../../../assets/img/icons/instagram.png'
import imgFacebook from '../../../assets/img/icons/facebook.png'
import logoLepen from '../../../assets/img/icons/lepen_blanco.png'

const Footer = () => {

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center footer pt-1 mt-4">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-9 col-12">
                    <p>CASA CENTRAL</p>
                    <div className='row d-flex'>
                        <span className='col-12'>Av. del valle 3054 (7400) Olavarría, Buenos Aires.Argentina</span>
                        <span className='col-12'>Email: lepencalefactores@hotmail.com</span>
                    </div>
                    <div className="col-12">
                        <span>CONTACTO VENTAS De 8 a 16 hs: 02284 15624663 / 02284 15611939 </span>
                    </div>
                </div>
                <div className="col-md-3 col-12 text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img className='imgLogoLepen m-2' src={logoLepen} alt="logo instagram" />
                    </div>
                    <div>
                        <a href="https://www.instagram.com/lepencalefactores_/"><img className='imgInst' src={imgInstagram} alt="logo instagram" /></a>
                        <a href="https://www.facebook.com/calefactoreslepen/"><img className='imgFace' src={imgFacebook} alt="logo facebook" /></a>
                    </div>
                </div>

            </div>
        </div>

    )
}
export { Footer }
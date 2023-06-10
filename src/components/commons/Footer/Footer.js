import './Footer.css';
import logoLepen from '../../../assets/img/icons/lepen_blanco.png';

const Footer = () => {

    return (
        <div className="container-fluid d-flex justify-content-center align-items-center footer pt-1 mt-4">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-9 col-12">
                    <p>CASA CENTRAL</p>
                    <div className='row d-flex'>
                        <span className='col-12'>Av. Dellepiane 4304 (519400) Los Reartes, Buenos Aires.Argentina</span>
                        <span className='col-12'>Email: calefactores@hotmail.com</span>
                    </div>
                    <div className="col-12">
                        <span>CONTACTO VENTAS De 8 a 16 hs: 03546 15654694 / 03546 15786373 </span>
                    </div>
                </div>
                <div className="col-md-3 col-12 text-center d-flex flex-column justify-content-center align-items-center">
                    <div>
                        <img className='imgLogoLepen m-2' src={logoLepen} alt="logo instagram" />
                    </div>
                </div>

            </div>
        </div>

    )
}
export { Footer }
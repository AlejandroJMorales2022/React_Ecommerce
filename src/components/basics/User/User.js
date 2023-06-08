import './User.css';
import { FileUpload } from '../../commons/FileUpload/FileUpload';
import imgEditIcon from '../../../assets/img/icons/edit.png';
import { useEffect } from 'react';
import { useClientContext } from '../../../hooks/useClientContext/useClientContext';
import { useProductsContext } from '../../../hooks/useProductsContext/useProductsContext';

const User = ({ client }) => {

    const { editImg, setEditImg } = useClientContext();
    const { setPageIndex, page } = useProductsContext();
    
    
    
    const handleEditProfile = () => {
        setPageIndex('FormUserProfile');
    }

    const handleEditProfileImage = (e) => {
        e.preventDefault();
        setEditImg(!editImg);
    }

    useEffect(() => {
        page === 'FileUpload' && setEditImg(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <div>
            {
                (<>

                    <div className="userCard card mb-5">
                        <div className="userImgContainer mt-4 mb-4">

                            <img src={client?.img} className="userImg border" alt="foto de perfil" />
                            <img src={imgEditIcon} onClick={(e) => handleEditProfileImage(e)} className="imgProfileEditIcon ms-2" style={{ width: 20 }} alt="editar foto de perfil" data-toggle="tooltip" title="Editar Imagen de Perfil" />
                        </div>
                        {editImg && <FileUpload />}

                        <div className='d-flex justify-content-center'>
                            <div><p>{client?.name}</p></div>
                            <div>
                                <img onClick={(e) => handleEditProfile(e)} src={imgEditIcon} className="img-fluid imgUserProfile ms-3" alt="icono editar perfil de usuario" style={{ width: 30 }} data-toggle="tooltip" title="Editar Datos Personales" />
                            </div>
                        </div>


                        <div className='container-fluid d-flex justify-content-start align-items-center text-start profileData'>
                            <div className='row d-flex justify-content-start align-items-center '>
                                <div className=''><b>DNI: </b><span>{client?.dni}</span></div>
                                <div className=''><b>Teléfono: </b><span></span>{client?.phone}</div>
                                <div className='pt-3 pb-1'><span>DOMICILIO</span></div>
                                <div className=''><b>Calle </b><span className='ps-2 pe-2' >{client?.residence?.street}</span><b>No.</b><span>{client?.residence?.number}</span></div>
                                <div className=''><b>Ciudad</b><span className='ps-2'>{client?.residence?.city}</span></div>
                                <div className=''><b>Provincia </b><span className='ps-2'>{client?.residence?.state}</span></div>
                                <div className='pt-3 pb-3'><b>Observaciones </b><p>{client?.obs}</p></div>
                            </div>
                        </div>
                    </div>

                </>)
            }
        </div >

    )

}
export { User }
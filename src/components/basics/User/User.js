import './User.css'
import { useEffect } from "react"
import imgEditUserProfile from '../../../assets/img/icons/user-edit.png'


const User = ({ client }) => {


const handleEditProfile = ()=>{
    console.log('Editar Perfil de Usuario')
}

    return (
        <div>
            {
                (<>

                    <div className="userCard card">
                        <div className="userImgContainer">
                            <img src="" className="userImg border" alt="foto de perfil" />
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div><p>{client?.name}</p></div>
                            <div>
                                <img onClick={(e) => handleEditProfile(e)} src={imgEditUserProfile} className="img-fluid imgUserProfile" alt="icono editar perfil de usuario" style={{ width: 40 }} data-toggle="tooltip" title="Editar Perfil de Usuario" />
                            </div>
                        </div>

                        <div><b>DNI: </b><span>{client?.dni}</span></div>
                        <div><b>Teléfono: </b><span></span>{client?.phone}</div>
                        <div><b>Calle </b><span>{client?.residence?.street}</span><b>No.</b><span>{client?.residence?.number}</span></div>
                        <div><b>Ciudad</b><span>{client?.residence?.city}</span></div>
                        <div><b>Provincia </b><span>{client?.residence?.state}</span></div>
                        <div><b>Observaciones </b><p>{client?.obs}</p></div>
                    </div>

                </>)
            }
        </div>

    )

}
export { User }
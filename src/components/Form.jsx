import React, { useState } from 'react'
import '../styles/style.css';
export const Form = () => {
    const [valores, setvalores] = useState({
        comprasCentral: 0,
        comprasCityClub:0,
        compras3B: 0,
        comprasRanchito:0,
        Ventas:0,
        salarios:4800,
    })
    const {salarios, comprasCentral, comprasCityClub, compras3B, comprasRanchito,Ventas}=valores
    const OnChangeValue=({target})=>{
        if(target.value===""){
            setvalores({...valores,[target.name]: 0});
        }else{
        setvalores({...valores,[target.name]: parseInt(target.value)});
        }
    }
    let ganancia=Ventas-(comprasCentral+comprasCityClub+compras3B+comprasRanchito+salarios);
    return (
        <div>
            <h1 className="display-1 titles">Formulario de datos</h1>
            <form className="form_imput">
                <label>
                    <p>Compras Central:</p>
                    <input className="imputs_datos" type='number' 
                    autoComplete='off' name='comprasCentral' required
                     value={comprasCentral} onChange={OnChangeValue}/>
                </label>
                <label>
                    <p>Compras CityClub:</p>
                    <input className="imputs_datos" type='number'
                     autoComplete='off' name='comprasCityClub' required
                      value={comprasCityClub} onChange={OnChangeValue}/>
                </label>
                <label>
                    <p>Compras tiendas 3B:</p>
                    <input className="imputs_datos" type='number' 
                    autoComplete='off' name='compras3B' required
                    value={compras3B} onChange={OnChangeValue}/>
                </label>
                <label>
                    <p>Compras Ranchito:</p>
                    <input className="imputs_datos" type='number' autoComplete='off'
                     name="comprasRanchito" required
                     value={comprasRanchito} onChange={OnChangeValue}/>
                </label>
                <label>
                    <p>Ventas realizadas:</p>
                    <input className="imputs_datos" type='number' autoComplete='off'
                     name="Ventas"required
                     value={Ventas} onChange={OnChangeValue}/>
                </label>
            </form>
            <div className="wrapper-sale">
                <h2 className="display-1 titles">Ganancias</h2>
            <p className="display-4 text-ganancias">{ganancia}</p>
            </div>
        </div>
    )
}

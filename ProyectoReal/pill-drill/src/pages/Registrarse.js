 import React from 'react'
import Layout from '../components/Layout'
 import Link from 'next/link';


 const Registrarse = () => {
   return (
        <main className="form-signin">
        <form>
          <h1 className="title">INGRESE DATOS</h1>

          <div className="form-floating">
          <label htmlFor="floatingInput">EMAIL </label>
            <input type="email" className="form-control" id="floatingInput" placeholder="nombre@ejemplo.com" />
    
          </div>
            <div className="form-floating">
            <label htmlFor="floatingPassword">CONTRASEÑA </label>
            <input type="password" className="form-control" id="floatingPassword" placeholder="contraseña" />
          </div>

          <div>
            <label>
              <input type="checkbox" value="remember-me" /> RECORDAR
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">REGISTARSE</button>
        </form>
      </main>
   )
 }
 
 export default Registrarse
 
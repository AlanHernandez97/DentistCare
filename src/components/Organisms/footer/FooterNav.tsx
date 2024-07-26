import React from 'react'
import DentistLogo from '../../Atoms/DentistLogo'

export default function FooterNav() {
  return (
    <footer className='w-full bg-[#1A1927] text-white'>
      <div className='w-auto flex flex-wrap-reverse gap-5 justify-around items-center h-full'>
        <div className='flex flex-col justify-center items-center gap-3 xl:gap-10 '>
          <h2 className='text-3xl font-bold text-center'>Clínica Odontológica Profesional</h2>
          <span>Todos los derechos reservados 2024 &copy;</span>
        </div>
        <div className='flex flex-col py-5 justify-center items-center gap-3 xl:gap-10'>
          <div>
            <DentistLogo />
          </div>
          <div className='w-auto flex flex-wrap justify-center items-center gap-10'>
            <div className='flex flex-col items-center gap-3'>
              <p className='text-[#FFB84F] text-xl'>Servicios</p>
              <p>Diagnósticos</p>
              <p>Consultas</p>
              <p>Tratamientos</p>
            </div>
            <div className='flex flex-col justify-center items-center gap-3' >
              <p className='text-[#FFB84F] text-xl'>Soporte</p>
              <p>Correo</p>
              <p>Servicio al cliente</p>
              <p>Políticas de privacidad</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

import React, { ReactElement } from 'react'
import ValuesComponent from '../components/about/ValuesComponent'
import ListComponent from '../components/share/ListComponent';
const values:string[] = [
    'Trabajo en equipo',
    'Servicio con calidez',
    'Innovación',
    'Respeto',
    'Compromiso',
    'Confianza',
    'Flexibilidad',
    'Honradez',
];
const story = () => {
  return (
    <div className='p-12'>
        <h1 className='text-3xl font-bold mb-8'>Sobre Nosotros</h1>
    <p>
      Somos una agencia ecoturística comunitaria originaria del estado de Yucatán, México conformada por jóvenes de origen maya. Ofrecemos servicios especializados como recorridos de interpretación ambiental, observación de aves, turismo rural y turismo holístico.
    </p>
    <p className='mb-4'>
      El diseño de las rutas y la calidad de nuestros servicios se ofrecen para todo aquel que busca alternativas de recreación a través del contacto con la naturaleza y pueblos autóctonos de la península de Yucatán, México.
    </p>
    <h2 className='text-xl font-bold mb-4'>Misión</h2>
    <p className='mb-4'>
      Consolidar la península de Yucatán como destino de observación de aves a través de rutas turísticas de naturaleza y cultura Maya, sumando esfuerzos con proyectos ecoturísticos comunitarios y guías locales.
    </p>
    <h2 className='text-xl font-bold mb-4'>Visión</h2>
    <p className='mb-4'>
      En 2026 ser una empresa consolidada con reconocimiento internacional y de primer nivel dedicada al eco-turismo y turismo comunitario, con certificación en el máximo reconocimiento que otorga la Secretaría de Turismo.
    </p>
    <h2 className='text-xl font-bold mb-4 '>Valores</h2>    

        <ListComponent items={values} wrapperCss='mb-4 flex gap-4 flex-wrap' Component={ValuesComponent} /> 

    <h2 className='text-xl font-bold mb-4'>Qué hacemos</h2>
    <p className='mb-4'>
      Ofrecemos rutas turísticas personalizadas de Naturaleza y Cultura Maya, con guías certificados por la Secretaría de Turismo (SECTUR) en la modalidad de Turismo Orientado hacia la Naturaleza. La observación de aves e inmersión en la cultura Maya son nuestras especialidades.
    </p>
    <p>
      Somos una empresa socialmente responsable y comprometida con el cuidado y conservación de los recursos naturales y
       culturales, tangibles e intangibles.</p>
       <p>
        Resaltar la importancia de los pueblos autóctonos en México, difundir su gran legado y la importancia de sumar esfuerzos con organismos de ámbito nacional e internacional para difundir y promover el desarrollo de capacidades locales. Contribuimos al desarrollo sostenible de las comunidades receptoras de turismo 
        a través del comercio justo y actividades de bajo impacto.
       </p> 
       <p>
        Ofrecemos equipo para observación de aves: binoculares, telescopios y guías de campo y artesanías.
       </p>
    </div>
  )
}

export default story
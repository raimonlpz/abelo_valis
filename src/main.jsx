import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TourProvider } from '@reactour/tour'

import 'uno.css'


const steps = [
  {
    selector: '#statusBar',
    content: 'Hey! Aquí una pequeña guía para navegar por mi fuckin web. Haz click en  para ver la navegación general o reiniciar mi PC. Te recomiendo usar PC para disfrutar la experiencia completa.'
  },
  // {
  //   selector: '#clock',
  //   content: 'Aquí puedes ver la hora actual (España), una hora menos en Canarias :p'
  // },
  {
    selector: '#folder',
    content: 'Esto es la Carpeta de Documentos, o Finder. Puedes acceder a ella haciendo Doble Click. También puedes arrastrarla por el escritorio jejeje'
  },
  {
    selector: '#finder', 
    content: 'También pueder acceder desde aquí, con un solo Click bastará. ¡A mi lado tienes el resto de Apps!'
  },
  {
    selector: '#settings',
    content: 'Aquí puedes cambiar algunos Ajustes de Sistema, ves con cuidado porqué se te pueden ir de las manos !%$$%$!'
  },
  {
    selector: '#store',
    content: '¿Quieres ser millonario? Haz Doble Click para visitar mi Tienda, ¡compra algo y te lo cuento!'
  },
  {
    selector: '#games',
    content: 'Haz Click aquí para descubir mi mejor selección de Minijuegos...'
  },
  {
    selector: '#press',
    content: '¡ABELO VALIS por el mundo! Descubre qué dicen de mi...'
  },
  {
    selector: '#projects',
    content: '¿Vas a lo que vas? Aquí una selección de mis trabajos, divididos por Cine, TV, Publi...¿lo pillas no?'
  },
  {
    selector: '#reel',
    content: '¿Algo más visual? Abre mi Reel, ¡Cinéma vérité!'
  },
  {
    selector: '#ctas',
    content: 'Y recuerda. Botón 🔴 para Cerrar. Botón 🟡 para Minimizar. El 🟢 no hace nada. ¡Ya puedes cerrarme! :) '
  }
]

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TourProvider steps={steps}>
      <App />
    </TourProvider>
  </React.StrictMode>,
)


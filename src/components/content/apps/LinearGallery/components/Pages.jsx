import { useThree } from '@react-three/fiber'
import React from 'react'
import Page from './Page'
import { Float } from '@react-three/drei'

export default function Pages() {
    const { width } = useThree((state) => state.viewport)

    return (
        <Float
        speed={1.15} // Animation speed, defaults to 1
        rotationIntensity={.1} // XYZ rotation intensity, defaults to 1
        floatIntensity={.15} // Up/down float intensity, defaults to 1
    >

        <Page position={[width * 5, 0, 0]} urls={['abelo/img10.webp', 'abelo/img20.webp', 'abelo/img3.webp']}  />
        <Page position={[width * 7, 0, 0]} urls={['abelo/img1.webp', 'abelo/img22.webp', 'abelo/img21.webp']} />
        <Page position={[width * 8, 0, 0]} urls={['abelo/img4.webp', 'abelo/img17.webp', 'abelo/img18.webp']} />
        <Page position={[width * 6, 0, 0]} urls={['abelo/img11.webp', 'abelo/img7.webp', 'abelo/img24.webp']} />
        <Page position={[width * 4, 0, 0]} urls={['abelo/img16.webp', 'abelo/img17.webp', 'abelo/img18.webp']} />
        <Page position={[width * 2, 0, 0]} urls={['abelo/img23.webp', 'abelo/img22.webp', 'abelo/img12.webp']} />
        <Page position={[-width * 1, 0, 0]} urls={['abelo/img1.webp', 'abelo/img2.webp', 'abelo/img3.webp']} />
        <Page position={[width * 0, 0, 0]} urls={['abelo/img19.webp', 'abelo/img2.webp', 'abelo/img24.webp']} />
        <Page position={[width * 1, 0, 0]} urls={['abelo/img23.webp', 'abelo/img8.webp', 'abelo/img9.webp']} />
      
        <Page position={[width * 3, 0, 0]} urls={['abelo/img13.webp', 'abelo/img14.webp', 'abelo/img15.webp']} />

      </Float>
    )
}

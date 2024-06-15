import { useScroll } from "@react-three/drei"
import { useRef, useState } from "react"
import ActiveCard from "./ActiveCard"
import Cards from "./Cards"
import { easing, geometry } from "maath"
import { extend, useFrame } from "@react-three/fiber"

extend(geometry)

export default function Scene({ children, ...props }) {
    const ref = useRef()
    const scroll = useScroll()
    const [hovered, hover] = useState(null)
  
    useFrame((state, delta) => {
        ref.current.rotation.y = -scroll.offset * (Math.PI * 2) // Rotate contents
        state.events.update() // Raycasts every frame rather than on pointer-move
        easing.damp3(state.camera.position, [-state.pointer.x * 2, state.pointer.y * 2 + 4.5, 9], 0.3, delta)
        state.camera.lookAt(0, 0, 0)
    })
  
    return (
      <group ref={ref} {...props}>
          <Cards category="2021" from={0} len={Math.PI / 4} onPointerOver={hover} onPointerOut={hover} />
          <Cards category="2022" from={Math.PI / 4} len={Math.PI / 2} position={[0, 0.4, 0]} onPointerOver={hover} onPointerOut={hover} />
          <Cards category="2023" from={Math.PI / 4 + Math.PI / 2} len={Math.PI / 2} onPointerOver={hover} onPointerOut={hover} />
          <Cards category="2024" from={Math.PI * 1.25} len={Math.PI * 2 - Math.PI * 1.25} position={[0, -0.4, 0]} onPointerOver={hover} onPointerOut={hover} />
          <ActiveCard hovered={hovered} />
      </group>
    )
  }
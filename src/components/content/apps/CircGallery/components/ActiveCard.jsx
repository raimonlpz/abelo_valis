import { Billboard, Image } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";


export default function ActiveCard({ hovered, ...props }) {
    const ref = useRef()
    useLayoutEffect(() => void (ref.current.material.zoom = 0.8), [hovered])
    useFrame((state, delta) => {
        easing.damp(ref.current.material, 'zoom', 1, 0.5, delta)
        easing.damp(ref.current.material, 'opacity', hovered !== null, 0.3, delta)
    })
  return (
    <Billboard {...props}>
      {/* <Text font={suspend(inter).default} fontSize={0.5} position={[3.15, 3.85, 0]} anchorX="left" color="white">
        {hovered !== null && `${name}\n${hovered}`}
      </Text> */}
      <Image ref={ref} transparent radius={0.3} position={[0, -.35, 0]} scale={[5.5, 1.618 * 5.5, 0.2, 1]} url={`/abelo/img${Math.floor(hovered % 20) + 1}.webp`} />
    </Billboard>
  )
}


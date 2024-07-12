import { Billboard, Text } from "@react-three/drei"
import { useState } from "react"
import Card from "./Card"


export default function Cards({ category, data, from = 0, len = Math.PI * 2, radius = 5.25, onPointerOver, onPointerOut, ...props }) {

    const [hovered, hover] = useState(null)
    const amount = Math.round(len * 22)
    const textPosition = from + (amount / 2 / amount) * len

    return (
      <group {...props}>
        <Billboard
            position={[Math.sin(textPosition) * radius * 1.4, 0.5, Math.cos(textPosition) * radius * 1.4]}
        >
        </Billboard>
        { Array.from({ length: amount - 3 /* minus 3 images at the end, creates a gap */ }, (_, i) => {
            const angle = from + (i / amount) * len
                return (
                <Card
                    key={angle}
                    onPointerOver={(e) => (e.stopPropagation(), hover(i), onPointerOver(i))}
                    onPointerOut={() => (hover(null), onPointerOut(null))}
                    position={[Math.sin(angle) * radius, 0, Math.cos(angle) * radius]}
                    rotation={[0, Math.PI / 2 + angle, 0]}
                    active={hovered !== null}
                    hovered={hovered === i}
                    url={`/abelo/img${Math.floor(i % 20) + 1}.webp`}
                />
                )
        })}
      </group>
    )
}
  
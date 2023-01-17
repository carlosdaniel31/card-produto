import { useState } from "react"
import { Container, DivText, Button } from "./App.styles"


export default function App() {
  const [hasImage360, setHasImage360] = useState(false)

  return (
    <Container>
      <div>
        <img src={hasImage360 ? "./exit.png" : "./icon_360.png"} 
            onClick={()=>setHasImage360(!hasImage360)} 
            alt={hasImage360 ? "Imagem de um x" : "Imagem de um 360 graus"} />
        <img src={hasImage360 ? "./sofa_360.gif" : "./sofa.png"}
            alt={hasImage360 ? "Gif de um sofá" : "Imagem estática de um sofá"} />
      </div>
      <DivText>
        <small>CÓDIGO: 42404</small>
        <h1>Sofá Margot II - Rosé</h1>
        <span>R$ 4.000</span>
        <Button>ADICIONAR À CESTA</Button>
      </DivText>
    </Container>
  )
}
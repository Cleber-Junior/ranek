import React from 'react'
import Head from './Head'
import { Container, Img, Lista, Li, Dados, ContainerAnimation } from './css/StyleContato'
import fotoContato from './img/contato.jpg'

const Contato = () => {
  return (
    <div>
      <Head title="Ranek | Contato" />
      
        <Container>
          <Img src={fotoContato} alt="" />
          <Dados>
            <h2>Entre em Contato</h2>
            <Lista>
              <Li>cleber@gmail.com</Li>
              <Li>999999-999</Li>
              <Li>Rua La Longe, 123</Li>
            </Lista>
          </Dados>
        </Container>

    </div>
  )
}

export default Contato

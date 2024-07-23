import React from 'react'
import Head from '../Head'
import { Container, Content, Img } from '../css/StyleProdutos'
import { Link } from 'react-router-dom';

const Produtos = () => {
  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/')
      .then(r => r.json())
      .then(json => setProdutos(json))
  }, [])
  
  console.log(produtos)

  if (produtos === null) return null;
  return (
    <Container>
      <Head title="Ranek" />
      {produtos.map(produto => (
        <Content key={produto.id}>
          <Link style={{color: '#000',textDecoration: 'none'}} to={`produto/${produto.id}`}>
            <Img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
            <h2>{produto.nome}</h2>
          </Link>
        </Content>
      ))}
    </Container>
  )
}

export default Produtos

import React from 'react'
import { Container, Fotos, Preco, Foto, Loading } from '../css/StyledProduto'
import Head from '../Head';
import { useParams } from 'react-router-dom';

const Produto = () => {
  const [produto, setproduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();

  const Url = document.location.href.split('/').pop();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try{
        setLoading(true);
        const r = await fetch(url);
        const json = await r.json();
        setproduto(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      }
      finally{
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id])

  console.log(produto);

  if(loading) return <Loading></Loading>
  if(error) return <p>{error}</p>
  if(produto === null) return null;
  return (
    <div>
      {produto && (
        <Container>
          <div>
            {
              produto.fotos && (
                <Fotos>
                  {produto.fotos.map(foto => (
                    <Foto key={foto.titulo} src={foto.src} alt={foto.titulo} />
                  ))}
                </Fotos>
              )
            }
          </div>
          <div>
            <Head title={`Ranek | ${produto.nome}`} />
            <h1>{produto.nome}</h1>
            <Preco>R$ {produto.preco}</Preco>
            <p>{produto.descricao}</p>
          </div>
        </Container>
      )}
    </div>
  )
}

export default Produto

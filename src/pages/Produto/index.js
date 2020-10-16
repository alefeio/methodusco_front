import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '~/services/api';

import { Container, Barra, Banner, Prod } from './styles';

export default function Produto(props) {
  const [produto, setProduto] = useState({});
  const [imagem, setImagem] = useState();

  const id = props.match.params.id;

  useEffect(() => {
    async function loadProduto() {
      const response = await api.get(`produtos/${id}`);

      setProduto(response.data);
      setImagem(response.data.imagem.url);
    }

    loadProduto();
  }, []);

  return (
    <Container>
      <Banner />
      <Barra>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>/</li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>/</li>
          <li>{produto && produto.nome}</li>
        </ul>
      </Barra>
      <Prod>
        <div>
          <img src={imagem} alt="Produto" />
        </div>
        <div>
          <span>
            <h1>{produto.nome}</h1>
            <h2>Sobre o Produto</h2>
            <h3>Descrição</h3>
            <p>{produto.descricao}</p>
          </span>
          <ul>
            <li>
              <h3>Ficha Técnica</h3>
            </li>
            <li>
              <strong>Código:</strong> {produto.codigo}
            </li>
            <li>
              <strong>Marca:</strong> {produto.marca}
            </li>
            <li>
              <strong>Conteúdo da Embalagem:</strong> {produto.embalagem}
            </li>
            <li>
              <strong>Peso:</strong> {produto.peso}
            </li>
            <li>
              <strong>Informação alérgica:</strong> {produto.informacaoalergica}
            </li>
            <li>
              <strong>Garantia:</strong> {produto.garantia}
            </li>
            <li>
              <strong>País de origem:</strong> {produto.paisorigem}
            </li>
          </ul>
        </div>
      </Prod>
    </Container>
  );
}

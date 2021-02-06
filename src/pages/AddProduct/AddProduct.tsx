import { FormEvent } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import useValue from './hooks/useValue';
import { Form } from './styled-components';
import notEmpty from './utils/notEmpty';

const AddProduct = () => {
  const [produto, handleProduto, produtoValidacao] = useValue('', notEmpty, 'Preencha o nome do produto');
  const [preco, handlePreco, precoValidacao] = useValue('', notEmpty, 'Insira o preço do produto');
  const [imagem, handleImagem, imagemValidacao] = useValue('', notEmpty, 'Insira a URL do produto');
  const [descricao, handleDescricao, descricaoValidacao] = useValue('', notEmpty, 'Insira a descrição do produto');
  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault();
    const payload = {
      produto,
      preco,
      imagem,
      descricao,
    }
    console.log(payload);
  }

  return (
    <Form onSubmit={handleOnSubmit}>
      <Input
        label="Nome do produto"
        value={produto}
        onChange={handleProduto}
        error={produtoValidacao[0] ? undefined : produtoValidacao[1]}
      />
      <Input
        label="Preço"
        value={preco}
        onChange={handlePreco}
        error={precoValidacao[0] ? undefined : precoValidacao[1]}
      />
      <Input
        label="Imagem"
        value={imagem} onChange={handleImagem}
        error={imagem[0] ? undefined : imagemValidacao[1]}
      />
      <Input
        label="Descrição"
        value={descricao}
        onChange={handleDescricao}
        error={descricao[0] ? undefined : descricaoValidacao[1]}
      />
      <div className="actions">
        <Button>Adicionar</Button>
      </div>
    </Form>
  );
}

export default AddProduct;

import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useCliente";

export default function Home() {

  const { 
    cliente, clientes, 
    selecionarCliente, excluirCliente, salvarCliente, novoCliente, 
    tabelaVisivel, exibirTabela 
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-pink-200 to-blue-300
    `}>
      <Layout titulo="Cadastro de clientes">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4" cor="green"
                onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela 
              clientes={clientes} 
              clienteSelecionado={selecionarCliente} 
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
          <Formulario 
            cliente={cliente} 
            clienteChange={salvarCliente}
            cancelado={exibirTabela}
          />
        )}
      </Layout>
    </div>
  )
}

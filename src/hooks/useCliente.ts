import { useEffect, useState } from "react"
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente"
import ClienteRepositorio from "../core/ClienteRepositorio"
import useTabelaOuForm from "./useTabelaOuForm";

export default function useClientes() {
    const clienteRepo: ClienteRepositorio = new ColecaoCliente()

    const {
        tabelaVisivel,
        formularioVisivel,
        exibirTabela,
        exibirFormulario
    } = useTabelaOuForm()

    const [cliente, setCliente] = useState<Cliente>(Cliente.vazio())
    const [clientes, setClientes] = useState<Cliente[]>()
  
    useEffect(() => {
      obterTodos()
    }, [])
  
    function obterTodos() {
      clienteRepo.obterTodos().then(clientes => {
        setClientes(clientes)
        exibirTabela()
      })
    }
  
    function selecionarCliente(cliente: Cliente) {
      setCliente(cliente)
      exibirFormulario()
    }
  
    async function excluirCliente(cliente: Cliente) {
      await clienteRepo.excluir(cliente)
      obterTodos()
    }
  
    async function salvarCliente(cliente: Cliente) {
      await clienteRepo.salvar(cliente)
      obterTodos()
    }
  
    function novoCliente() {
      setCliente(Cliente.vazio())
      exibirFormulario()
    }
    
    return {
        cliente,
        clientes,
        novoCliente,
        salvarCliente,
        excluirCliente,
        selecionarCliente,
        obterTodos,
        tabelaVisivel,
        formularioVisivel,
        exibirTabela
    }
}
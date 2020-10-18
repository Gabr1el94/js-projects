import './TblProdutos.css'

import React from 'react'
import produtos from '../../data/produtos'

export default (props) => {
    const listProdutos = produtos.map((produto, i) =>{
        return (
            <tr key={produto.id} className={i % 2 === 0 ? 'Par' : 'Impar'}>
                <td>{produto.id}</td>
                <td>{produto.nome}</td>
                <td>R$ {produto.preco.toFixed(2).substring('.',',')}</td>
            </tr>
        );
    });

    return (<div>
              <table className="TblProdutos" border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Produto</th>
                        <th>Preço</th>
                    </tr>
                </thead>
                <tbody>
                    {listProdutos}
                </tbody>
              </table>
        </div>
    );
}
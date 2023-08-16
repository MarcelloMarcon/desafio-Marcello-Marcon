class CaixaDaLanchonete {

    calcularValorDaCompra(metodoDePagamento, itens) {
        let total = 0;
        let flagCafe = false;
        let flagSanduiche = false;
        let flagChantily = false;
        let flagQueijo = false;

        if (itens.length === 0 ) {
            return "Não há itens no carrinho de compra!"
        }

        for (let i = 0;i < itens.length;i++){
            const comanda = itens[i].split(',');
            let codigo = comanda[0];
            let quantidade = comanda[1];
            let precoProduto;

            if (quantidade == 0){
               return "Quantidade inválida!";
            }
            
            switch (codigo){
                case "cafe":
                    precoProduto = 3;
                    flagCafe = true;
                    break;
                
                case "chantily":
                    precoProduto = 1.5;
                    flagChantily = true;
                    break;
            
                case "suco":
                    precoProduto = 6.2;
                    
                    break;

                case "sanduiche": 
                    precoProduto = 6.5;
                    flagSanduiche = true;
                    break;

                case "queijo": 
                    precoProduto = 2;
                    flagQueijo = true;
                    break;

                case "salgado": 
                    precoProduto = 7.25;

                    break;

                case "combo1": 
                    precoProduto = 9.5;

                    break;
                case "combo2":
                    precoProduto = 7.5;

                    break;

                default:
                    return "Item inválido!";
            }
            total += quantidade * precoProduto;
        }

        if(flagChantily && !flagCafe){
            return  "Item extra não pode ser pedido sem o principal";
        }

        if(flagQueijo && !flagSanduiche){
            return  "Item extra não pode ser pedido sem o principal";
        }

        switch(metodoDePagamento){
            case "dinheiro":
                total = total * 0.95;
                break;

            case "credito":
                total = total * 1.03;
                break;

            case "debito":
                break;

            default:
                return "Forma de pagamento inválida!";
        }
        
        return `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

}

export { CaixaDaLanchonete };

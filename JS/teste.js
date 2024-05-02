function finCompra() {
    // Aqui ele pega todas as infos que o cliente passou para confirmar a compra
    let in_nome = document.getElementById("inp_nome").value;
    let in_tel = document.getElementById("inp_tel").value;
    let in_email = document.getElementById("inp_email").value;
    let in_cidade = document.getElementById("inp_cidade").value;
    let in_bairro = document.getElementById("inp_bairo").value;
    let in_log = document.getElementById("inp_log").value;
    // console.log(in_nome + in_tel + in_email + in_cidade + in_bairro + in_log);

    var conf = confirm("Deseja finalizar esta compra?");

    if (conf == true) {
        alert("Compra finalizada com sucesso. \nProdutos comprados:\n   - 2Un Centro de Salgado Misto; Total R$150,00\n   - 3Un Centro de Brigadeiro Misto; Total R$300,00\n"
        + "\nInformações de entrega:\nNome: " + in_nome + "\nTelefone: " + in_tel + "\nEmail: " + in_email
        + "\nCidade: " + in_cidade + "\nBairro: " + in_bairro + "\nLogradouro/N°: " + in_log
        + "\n\nObrigado pela Preferencia!! :D");
    }

}
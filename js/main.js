function consultaCEP() {
    $(".progress").show();
    var cep = document.getElementById('cep').value;
    var CepSemPontos = tirarPontos(cep)
    var url = "https://viacep.com.br/ws/" + CepSemPontos + "/json/";

    $.ajax({
        url: url,
        type: "GET",
        success: function(response) {
            if (response.erro != true) {
                $(".alert").hide();
                $("#logradouro").html(response.logradouro)
                $("#bairro").html(response.bairro)
                $("#cidade").html(response.localidade)
                $("#UF").html(response.uf)
                $("#CEP").html(response.cep)
                $(".progress").hide();
            } else {
                $(".alert").show()
                $(".alert").html("O CEP " + cep + " não foi encontrado! Informe outro CEP")
                $(".progress").hide();
            }
        }
    })
}

function tirarPontos(cep) {
    var novoCep = cep.replace(/[^\d]+/g, '');
    return novoCep;
}

$(function() {
    $(".alert").hide();
    $(".progress").hide();
})
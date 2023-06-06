$(document).ready(function () {
  $("#contact-form").submit(function (event) {
    event.preventDefault();

    $.ajax({
      url: "https://formsubmit.co/ajax/diego.mathais@gmail",
      method: "POST",
      data: {
        name: $("#name").val(),
        email: $("#email").val(),
        phone: $("#phone").val(),
        message: $("#message").val(),
      },
      dataType: "json",
      success: function (response) {
        console.log("Mensagem enviada com sucesso!");
        // Adicione qualquer lógica adicional que você deseje executar após o envio do formulário bem-sucedido.
      },
      error: function (xhr, status, error) {
        console.log("Ocorreu um erro ao enviar a mensagem: " + error);
        // Adicione qualquer tratamento de erro adicional aqui, se necessário.
      },
    });
  });
});


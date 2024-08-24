document.addEventListener('DOMContentLoaded', function () {
    var form = document.getElementById('myForm');
    var emailInput = document.getElementById('email');
    var output = document.getElementById('output');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        var email = emailInput.value.trim();
        if (!isValidEmail(email)) {
            output.textContent = 'E-mail inválido. Preencha corretamente.';
            return;
        }
        // Aqui você pode enviar os dados para o servidor ou fazer outras ações necessárias
        output.textContent = 'Formulário enviado com sucesso!';
    });
    function isValidEmail(email) {
        var regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm') as HTMLFormElement;
    const emailInput = document.getElementById('email') as HTMLInputElement;
    const output = document.getElementById('output') as HTMLDivElement;

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = emailInput.value.trim();

        if (!isValidEmail(email)) {
            output.textContent = 'E-mail inválido. Preencha corretamente.';
            return;
        }

        // Aqui você pode enviar os dados para o servidor ou fazer outras ações necessárias
        output.textContent = 'Formulário enviado com sucesso!';
    });

    function isValidEmail(email: string): boolean {
        const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return regex.test(email);
    }
});

// Aguarda o HTML carregar completamente
document.addEventListener('DOMContentLoaded', () => {

    // Selecionar elementos do DOM
    const inputSenha = document.getElementById('senha');
    const btnSubmit = document.getElementById('btn-submit');
    const form = document.getElementById('formCadastro');

    // Selecionar os itens da lista de requisitos de senha
    const reqLength = document.getElementById('req-length');   // mínimo 8 caracteres
    const reqUpper = document.getElementById('req-upper');     // letra maiúscula
    const reqNumber = document.getElementById('req-number');   // número
    const reqSpecial = document.getElementById('req-special'); // caractere especial

    // Função que verifica a senha a cada tecla digitada
    inputSenha.addEventListener('input', () => {
        const valor = inputSenha.value;

        // Validar tamanho mínimo
        const hasLength = valor.length >= 8;
        alternarClasse(reqLength, hasLength);

        // Validar letra maiúscula
        const hasUpper = /[A-Z]/.test(valor);
        alternarClasse(reqUpper, hasUpper);

        // Validar número
        const hasNumber = /[0-9]/.test(valor);
        alternarClasse(reqNumber, hasNumber);

        // Validar caractere especial
        const hasSpecial = /[!@#$%^&*(),.?":{}|<>]/.test(valor);
        alternarClasse(reqSpecial, hasSpecial);

        // Ativar ou desativar botão submit
        if(hasLength && hasUpper && hasNumber && hasSpecial){
            btnSubmit.removeAttribute('disabled');
            btnSubmit.style.cursor = "pointer";
        } else {
            btnSubmit.setAttribute('disabled','true');
            btnSubmit.style.cursor = "not-allowed";
        }
    });

    // Função para trocar a cor do texto e o ícone
    function alternarClasse(elemento, estaValido) {
        const icone = elemento.querySelector('i');

        if (estaValido) {
            elemento.classList.add('valid');
            elemento.classList.remove('invalid');
            if (icone) { // <-- VERIFICAÇÃO ADICIONADA
                icone.classList.remove('ph-circle');
                icone.classList.add('ph-check-circle');
            }
        } else {
            elemento.classList.remove('valid');
            elemento.classList.add('invalid');
            if (icone) { // <-- VERIFICAÇÃO ADICIONADA
                icone.classList.remove('ph-check-circle');
                icone.classList.add('ph-circle');
            }
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulário enviado com sucesso!');
    });
});
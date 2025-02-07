// Navegação suave entre seções
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Formulário de contato - alerta de envio
document.querySelector('form').addEventListener('submit', function (e) {
    alert('Mensagem enviada com sucesso!');
});

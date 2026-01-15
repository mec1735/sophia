document.addEventListener('DOMContentLoaded', () => {

    const audio = document.getElementById('background-music');
    audio.volume = 0.3;
    audio.muted = true;
    audio.play().catch(() => {});

    document.addEventListener('click', () => {
        audio.muted = false;
        audio.play();
    }, { once: true });

    let eventoInfo = {
        data: '24/01/2026',
        hora: '19:00',
        local: 'Chacara do Adilson e Eliane',
        aniversariante: 'Sophia Emanuelly'
    };

    function atualizar() {
        dataEvento.textContent = eventoInfo.data;
        horaEvento.textContent = eventoInfo.hora;
        localEvento.textContent = eventoInfo.local;
        aniversarianteNome.textContent = eventoInfo.aniversariante;
    }

    const dataEvento = document.getElementById('data-evento');
    const horaEvento = document.getElementById('hora-evento');
    const localEvento = document.getElementById('local-evento');
    const aniversarianteNome = document.getElementById('aniversariante-nome');

    function editar(el, chave) {
        el.addEventListener('click', () => {
            const v = prompt(`Editar ${chave}`, eventoInfo[chave]);
            if (v) {
                eventoInfo[chave] = v;
                salvar();
                atualizar();
            }
        });
    }

    function salvar() {
        localStorage.setItem('eventoInfo', JSON.stringify(eventoInfo));
    }

    function carregar() {
        const d = localStorage.getItem('eventoInfo');
        if (d) eventoInfo = JSON.parse(d);
    }

    editar(dataEvento, 'data');
    editar(horaEvento, 'hora');
    editar(localEvento, 'local');
    editar(aniversarianteNome, 'aniversariante');

    carregar();
    atualizar();

    /* >>>>> AQUI ESTÁ A MUDANÇA QUE VOCÊ PEDIU <<<<< */
    

    document.querySelector('.location-button').href =
        'https://maps.google.com/?q=-15.995706,-49.128273';
});

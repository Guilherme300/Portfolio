const renders = {
    myProfile: 
    {
        head: { title: 'Hello World!' },
        body: ` \\f{\\ 
             \\s'\\skNome\\': 'Guilherme Amorim',\\
             \\s'\\skInformações\\':\\ 
             \\s{\\ 
                \\t'\\skWeb\\':\\ 
                \\t{\\ 
                    \\ft'\\skFrontEnd\\': ['Html', 'Css', 'Javascript'],\\ \\ft'\\skBackEnd\\': ['NodeJS', 'Php', 'Sql']\\
                \\t},\\
                \\t'\\skMobile\\': 'React Native',\\
                \\t'\\skDesktop\\': '['C', 'Python']',\\
                \\t'\\skPlus\\': '['Padrões de Projeto, 'Figma']'\\
              \\s}\\
          \\f}\\ `
    },   
    
    infoDiario:
    {
        head: { title: 'InfoDiário' },
        body:` \\f{\\
            \\im./assets/infoDiario/01.png\\
            \\s'\\skTecnologias\\': ['NodeJS', 'React', 'React Native'],\\
            \\s'\\skDescrição\\': 'O infodiário é sistema de pagamento mensal para se ter acesso ao conteúdo do serviço. Implementado com a api do pagarme.'\\
        \\f}\\ `
    },
    
    metaPomodoro:
    {
        head: { title: 'Meta Pomodoro' },
        body: `\\f{\\
            \\im./assets/metaPomodoro/01.png\\
            \\s'\\skTecnologias\\': ['Html', 'Css', 'Javascript'],\\         
            \\s'\\skDescrição\\': 'Meta-Pomodoro é um web-site desenvolvido para desempenhar a lógica do pomodoro na web.'\\    
            \\f}\\        
        `  
    },
    
    randomImageDraw:
    {
        head: { title: 'Random Image Draw' },
        body: `\\f{\\
        \\im.//assets/randomImageDraw/01.png\\
        \\s'\\skTecnologias\\': ['Html, Css, 'Javascript'],\\
        \\s'\\skDescrição\\': 'Randomiza as imagens e as mostra na tela a cada x segundos para à pratica do desenho.'\\
        \\f}\\
        `    
    }
}
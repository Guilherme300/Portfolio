class Render{
    constructor(titleElm = null, renderElm){
        this.titleElm = titleElm
        this.renderElm = renderElm
    }
    
    updateContent(render){
        let [title, content] = this._parseContent(render)
        this.titleElm.innerHTML = title
        this.titleElm.setAttribute('text', title)
        this.renderElm.innerHTML = content
    }
    
    _parseContent(render){
        let title = render.head.title
        let content = render.body

        let oS = this._findCommands(content)
        
        let newContent = content        

        let commands = oS[0]
        let commands1 = oS[1]
        
        
        for (let i = 0; i < commands.length; i++)
        {
            let string = content.slice(commands[i].start - 1, commands[i].end)
            let string_change = '\\' + commands[i].type + string + '\\'
            switch(commands[i].type)
            {
                case 'f':
                    newContent = newContent.replace(string_change, ` <p class='first-appear'>${string}</p>`)
                case 's':
                    newContent = newContent.replace(string_change, ` <p style="margin-left: 40px;" class='second-appear'>${string}</p>`)
                case 't':
                    newContent = newContent.replace(string_change, ` <p style="margin-left: 80px;" class='thirth-appear'>${string}</p>`)
                case 'ft':
                    newContent = newContent.replace(string_change, ` <p style="margin-left: 120px;" class='fourth-appear'>${string}</p>`)
                case 'sk':
                    newContent = newContent.replace(string_change, `<span class='keys'>${string}</span>`) 
                case 'im':
                    newContent = newContent.replace(string_change, `<img class='img' src=${string}>`)          
            }
        }
        
        for (let i = 0; i < commands1.length; i++)
        {
            let string = content.slice(commands1[i].start - 1, commands1[i].end)
            let string_change = '\\' + commands1[i].type + string + '\\'
            switch(commands1[i].type)
            {
                case 'f':
                    newContent = newContent.replace(string_change, ` <p class='first-appear'>${string}</p>`)
                case 's':
                    newContent = newContent.replace(string_change, ` <p style="text-indent: 40px;" class='second-appear'>${string}</p>`)
                case 't':
                    newContent = newContent.replace(string_change, ` <p style="text-indent: 80px;" class='thirth-appear'>${string}</p>`)
                case 'ft':
                    newContent = newContent.replace(string_change, ` <p style="text-indent: 120px;" class='fourth-appear'>${string}</p>`)
                case 'sk':
                    newContent = newContent.replace(string_change, `<span class='keys'>${string}</span>`)  
                case 'im':
                    newContent = newContent.replace(string_change, `<img class='img' src=${string}>`)                      
            }
        }
        
        content = newContent
            
       return [title, content]
    }
    
    _findCommands(content){
        
        let actualCommand = ''        
        let secondCommand = ''        
        
        let commands = [[], []]
        
        let atCommand = false
        let atSecond = false
        
        let possibleCommands = ['f', 's', 't', 'i']
        
        for(let i = 0; i < content.length; i++)
        {
            let char = content[i]
            let char1 = content[i+1]
            if (char == '\\' && char1)
            {
                if (!atCommand)
                {
                    // Checkar se o próximo caractere após a chamada é um comando
                    if (this._hasChar(possibleCommands, char1))
                    {
                        actualCommand = char1
                        atCommand = i+3                   
                        
                        let excludeLen = i+3
                        if (char1 == 'f' && content[i+2] == 't')
                        {
                            actualCommand = 'ft'
                            atCommand = i+4
                        }

                        else if (char1 == 's' && content[i+2] == 'k')
                        {
                            actualCommand = 'sk'       
                            atCommand = i+4                     
                        }
                        
                        else if (char1 == 'i' && content[i+2] == 'm'){
                            actualCommand = 'im'       
                            atCommand = i+4 
                        }
                        
                    }
                }
                // Se houver um comando
                else
                {
                    if(!atSecond)
                    {
                        // Checkar se o próximo caractere após a chamada é um segundo comando
                        // Se for, começar a buscar o seu fim; Se não for, armazenar o fim do comando.
                        if (this._hasChar(possibleCommands, char1))
                        {
                            let excludeLen = i+3
                            if (char1 == 'f' && content[i+2] == 't')
                            {
                                char1 = 'ft'
                                excludeLen = i+4
                            }

                            else if (char1 == 's' && content[i+2] == 'k')
                            {
                                char1 = 'sk'       
                                excludeLen = i+4                     
                            }
                            
                            else if (char1 == 'i' && content[i+2] == 'm'){
                                actualCommand = 'im'       
                                excludeLen = i+4 
                            }
                            
                            secondCommand = char1
                            atSecond = excludeLen
                        }
                        else 
                        {
                            commands[0].push({ type: actualCommand, start: atCommand, end: i })
                            atCommand = false
                        }
                    }
                    else 
                    {
                        commands[1].push({ type: secondCommand, start: atSecond, end: i  })
                        atSecond = false
                    }
                }
            }

        }
        
        return commands
    }
    
    _hasChar(chars, char)
    {
        for (let i = 0; i < chars.length; i++)
        {
            if (char == chars[i])
            {
                return true       
            }   
        }
        return false
    }
    
}
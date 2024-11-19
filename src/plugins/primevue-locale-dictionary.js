const dictionary = {
    pt: {
        startsWith: 'Começa com',
        contains: 'Contém',
        notContains: 'Não contém',
        endsWith: 'Termina com',
        equals: 'Igual',
        notEquals: 'Diferente de',
        noFilter: 'Sem Filtros',
        lt: 'Menor que',
        lte: 'Menor ou igual a',
        gt: 'Maior que',
        gte: 'Maior ou igual a',
        dateIs: 'Data igual a',
        dateIsNot: 'Data diferente de',
        dateBefore: 'Data anterior a',
        dateAfter: 'Data posterior a',
        clear: 'Limpar',
        apply: 'Aplicar',
        matchAll: 'Corresponde a todos',
        matchAny: 'Corresponde a algum',
        addRule: 'Adicionar regra',
        removeRule: 'Remover regra',
        accept: 'Sim',
        reject: 'Não',
        choose: 'Selecione',
        upload: 'Upload',
        cancel: 'Cancelar',
        dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'],
        dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        dayNamesMin: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        monthNames: [
            'Janeiro',
            'Fevereiro',
            'Março',
            'Abriu',
            'Maio',
            'Junho',
            'Julho',
            'Agosto',
            'Setembro',
            'Outubro',
            'Novembro',
            'Dezembro',
        ],
        monthNamesShort: [
            'Jan',
            'Fev',
            'Mar',
            'Abr',
            'Mai',
            'Jun',
            'Jul',
            'Ago',
            'Set',
            'Out',
            'Nov',
            'Dez',
        ],
        today: 'Hoje',
        weekHeader: 'Wk',
        firstDayOfWeek: 1,
        dateFormat: 'dd/MM/yyyy',
        weak: 'Fraco',
        medium: 'Médio',
        strong: 'Forte',
        passwordPrompt: 'Informe a Senha',
        emptyFilterMessage: 'Nenhum resultado encontrado',
        emptyMessage: 'Não há informações',
    }
}

export const getLocale = (lang = 'pt') => dictionary[lang] || dictionary['pt'];
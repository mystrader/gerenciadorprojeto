// Conteúdo do site

new Vue({
    el: '#app',

    data: {
        titulo: 'Manual Sistemas',
        descricao: 'UX, UI e Padrão de Código de Sistemas Internos',
        host: 'http://localhost:3000/',

        // LAYOUT
        //layout_cores.html
        layout_cores: {
            secao_pai: 'Layout',
            secao_filha: 'Cores'
        },        
        //layout_form.html
        layout_form: {
            secao_pai: 'Layout',
            secao_filha: 'Form'
        },
        //layout_grid.html
        layout_grid: {
            secao_pai: 'Layout',
            secao_filha: 'Sistema de Grid'
        },
        //layout_tipografia.html
        layout_tipografia: {
            secao_pai: 'Layout',
            secao_filha: 'Tipografia'
        },
        // EXEMPLO
        //exemplo_login.html
        exemplo_login: {
            secao_pai: 'Exemplos',
            secao_filha: 'Login'
        },
        //exemplo_usuarios.html
        exemplo_usuarios: {
            secao_pai: 'Exemplos',
            secao_filha: 'Usuários'
        },
        // COMPONENTES
        //componentes_table.html    
        componentes_table: {
            secao_pai: 'Componentes',
            secao_filha: 'Tabela'
        },
        //componentes_painel.html    
        componentes_painel: {
            secao_pai: 'Componentes',
            secao_filha: 'Painel'
        },
        //componentes_button.html    
        componentes_button: {
            secao_pai: 'Componentes',
            secao_filha: 'Botão'
        },
        //componentes_alert.html    
        componentes_alert: {
            secao_pai: 'Componentes',
            secao_filha: 'Alertas'
        },
        //componentes_grafico.html    
        componentes_grafico: {
            secao_pai: 'Componentes',
            secao_filha: 'Gráfico'
        }        
       

        


    }
});
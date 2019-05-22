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
window.onload = function() {
    function a(a, b) { var c = /^(?:file):/,
            d = new XMLHttpRequest,
            e = 0;
        d.onreadystatechange = function() { 4 == d.readyState && (e = d.status), c.test(location.href) && d.responseText && (e = 200), 4 == d.readyState && 200 == e && (a.outerHTML = d.responseText) }; try { d.open("GET", b, !0), d.send() } catch (f) {} } var b, c = document.getElementsByTagName("*"); for (b in c) c[b].hasAttribute && c[b].hasAttribute("data-include") && a(c[b], c[b].getAttribute("data-include")) };
new Vue({el:"#app",data:{titulo:"Manual Sistemas",descricao:"UX, UI e Padrão de Código de Sistemas Internos",host:"http://localhost:3000/",layout_cores:{secao_pai:"Layout",secao_filha:"Cores"},layout_form:{secao_pai:"Layout",secao_filha:"Form"},layout_grid:{secao_pai:"Layout",secao_filha:"Sistema de Grid"},layout_tipografia:{secao_pai:"Layout",secao_filha:"Tipografia"},exemplo_login:{secao_pai:"Exemplos",secao_filha:"Login"},exemplo_usuarios:{secao_pai:"Exemplos",secao_filha:"Usuários"},componentes_table:{secao_pai:"Componentes",secao_filha:"Tabela"},componentes_painel:{secao_pai:"Componentes",secao_filha:"Painel"},componentes_button:{secao_pai:"Componentes",secao_filha:"Botão"},componentes_alert:{secao_pai:"Componentes",secao_filha:"Alertas"},componentes_grafico:{secao_pai:"Componentes",secao_filha:"Gráfico"}}}),window.onload=function(){function e(e,a){var o=/^(?:file):/,t=new XMLHttpRequest,s=0;t.onreadystatechange=function(){4==t.readyState&&(s=t.status),o.test(location.href)&&t.responseText&&(s=200),4==t.readyState&&200==s&&(e.outerHTML=t.responseText)};try{t.open("GET",a,!0),t.send()}catch(i){}}var a,o=document.getElementsByTagName("*");for(a in o)o[a].hasAttribute&&o[a].hasAttribute("data-include")&&e(o[a],o[a].getAttribute("data-include"))};
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
window.onload = function() {
    function a(a, b) { var c = /^(?:file):/,
            d = new XMLHttpRequest,
            e = 0;
        d.onreadystatechange = function() { 4 == d.readyState && (e = d.status), c.test(location.href) && d.responseText && (e = 200), 4 == d.readyState && 200 == e && (a.outerHTML = d.responseText) }; try { d.open("GET", b, !0), d.send() } catch (f) {} } var b, c = document.getElementsByTagName("*"); for (b in c) c[b].hasAttribute && c[b].hasAttribute("data-include") && a(c[b], c[b].getAttribute("data-include")) };
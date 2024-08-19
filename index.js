

const puppeteer = require('puppeteer');
const readLineSync = require('readline-sync');

console.log('Bem-vindo(a), eu sou um robo para tocar musicas');

(async () => {
    
    // Inicia o navegador
    const browser = await puppeteer.launch({ headless: false }); // 'headless: true' significa que o navegador será iniciado sem a interface gráfica

    console.log('Qual musica você quer ouvir?');

    const Musica = readLineSync.question('');

    // Abre uma nova página
    const page = await browser.newPage();

    // Navega até a URL desejada
    await page.goto('https://www.youtube.com/');
  
    // vai ate a barra de pesquisa e digita 
    await page.type('[name="search_query"]', Musica);

    //clica no botao de pesquisar
    await page.click('#search-icon-legacy');

    // espera o seletor do youtube carrega para fazer algo
    await page.waitForSelector('ytd-item-section-renderer', {timeout:10000});

   
    // clica no link do video para rodar
    await page.click('#video-title');
  
    // Fecha o navegador
    //await browser.close();
  })();
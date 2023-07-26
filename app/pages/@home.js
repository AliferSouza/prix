 async function Home() {

  return ` 
         
      <div class="flex center column bg w-full h-full text-white "> 
        <h1 class="m-1">Prix</h1>
        <h4 class="m-1">Toda a lib mimificada, baixe e use como quiser</h4>
        <img class="m-1 rounded-2" src="/img/code.png" alt="Imagem de como importa a LIB ">
        <a class="text-white "  href="https://github.com/AliferSouza/" target="_black">
        <h4>Alifer</h4>
        </a>
        <div>
        <h3 class="bg-white text-black fs-2 rounded-1 p-5 m-1" style="white-space: pre-line;">
         Na imagem você tem acesso global as funções da <span class="text-red">LIB.</span>
         Dê um <span class="text-red">console.log(prix)</span> e verá as funções disponíveis...
         Exemplo de uso:  <span class="text-red">Router</span>
        </h3>
        </div> 
        <a class="text-white hover:text-red" style="color: #000" href="/#/documentacao/">Documentação</a>
     
    </div> 
    <br>
    <br>
    <br>
    <comp-menu></comp-menu>
 
  
      `;
}

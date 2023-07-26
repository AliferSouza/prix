async function Home(props) {
  const { Data } = props;
  let dados = Data[0];


  const state = () => {

    const selected = document.querySelector("#container-doc");
    const imgMain = document.querySelector(`#img-${Data[0].id}`);
    const render = document.querySelector("#render");
    const compContenteRender = document.querySelector("#compContente");

    selected.addEventListener("click", (e) => {
      if (e.target.tagName === "H6" || e.target.tagName === "SPAN") {
        const identificador = e.target.id;

        const result = Data.find(
          (item) => item.id.toString() === identificador
        );
        dados = result;
        compContenteRender.innerHTML = compContente();
      }

      if (e.target.tagName === "IMG") {
        if (!document.fullscreenElement) {
          // Se o documento não estiver em tela cheia, entre em tela cheia
          e.target.requestFullscreen();
        } else {
          // Se o documento estiver em tela cheia, saia do modo de tela cheia
          document.exitFullscreen();
        }
      }
    });
  };

  const compContente = () => {
    return `            
       <div id="render" class="flex column center p-5 w-4" id="render">   
         <h2>${dados.title}</h2> 
         <img id="img-${dados.id}" class="m-2 p5 pointer" src="${props.Data[0].img}" alt="Imagem de como importa a LIB" >
         <h5 class="p-5 ">${dados.content}</h5>
         <h6 id ="Contribuidores">${dados.autor}</h6> 
       </div>
     `;
  };

  const html = () => ` 
     <div  id="container-doc" class="flex w-full h-full">

        <div class="flex column center w-px-14 bg-white lateral"> 
            <div id="Main" class="pointer" >
              <h4>Documetação</h4> 
           
                <h5>
                <h6 id="Main">Main</h6>
                <span id="Main">M</span>

                <h6 id="Pages">Pages</h6>
                <span id="Pages">P</span>

                <h6  id="Components">Components</h6>
                <span  id="Components">C</span>

                <h6 id="Mais">Mais</h6>
                <span  id="Mais">+</span>
                </h5>          
              </div>
            </div> 

            <div id="compContente" class=" flex column center bg-black text-white w-full"> 
            ${compContente()}
            </div> 

    </div> 
  
      `;

  return {
    html,
    state,
  };
}

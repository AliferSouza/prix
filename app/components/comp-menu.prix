 async function Menu(props) {
    
      let counter = 0;
    
      $("comp-menu").on("click",e => {   
                  
            if(e.target.id === "+"){
                  e.target.nextElementSibling.innerText = counter += 1 
            }
            if(e.target.id === "-"){
                  e.target.previousElementSibling.innerText = counter -= 1
            }
      })
          
    
      return `
            <div>
            <button id="+">+</button>
            <span class="bg-red p-5 pointer" id="counter">${counter}</span>
            <button id="-">-</button>
            Prix.js
      </div>
      `;
    }
    
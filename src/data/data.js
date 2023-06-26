const data = [
 
  {
    id: "useApi",
    title: "useAPI",
    Descricao: `
      <span> A função 'useApi' é uma função assíncrona que recebe dois parâmetros: 'url' e 'method'. Ela utiliza a API Fetch para fazer uma requisição assíncrona para a URL especificada, utilizando o método HTTP especificado.
      Aqui está uma descrição passo a passo do que acontece dentro da função 'useApi': </span>

      <span>1. A função é declarada como assíncrona, o que permite o uso do operador 'await' dentro dela.</span>

      <span> 2. É feita uma chamada à função 'fetch' passando a 'url' e o 'method' como argumentos. O 'fetch' retorna uma Promise que representa a resposta HTTP.</span>

      <span>3. A resposta HTTP é armazenada na variável 'res'.</span>

      <span> 4. É chamado o método 'json()' na resposta HTTP ('res.json()'), que retorna outra Promise que representa os dados da resposta em formato JSON.</span>

      <span>5. Os dados JSON são armazenados na variável 'data'.</span>

      <span>  6.Em seguida, os dados são armazenados na variável 'valorDta'. No entanto, esse passo parece ser desnecessário, pois 'valorDta' é definido como 'await data', o que basicamente mantém os dados inalterados.</span>

      <span>7. Finalmente, o valor de 'valorDta' é retornado como resultado da função.</span>

      <span> 8. Se ocorrer algum erro durante o processo (por exemplo, um erro na requisição ou uma falha ao converter os dados JSON), o bloco 'catch' será executado e a função retornará 'null'.</span> 

      <span> função 'useApi' é projetada para facilitar a utilização da API Fetch para fazer requisições assíncronas e obter dados em formato JSON. No entanto, é importante ressaltar que o uso correto dessa função depende da correta utilização dos parâmetros 'url' e 'method' ao chamá-la
      Certifique-se de passar a URL correta para a API desejada e um método HTTP adequado, como ''GET'', ''POST'', ''PUT'', ''DELETE'', etc. Além disso, tenha em mente que essa função retorna uma Promise, então você pode usar o 'await' ao chamá-la ou tratá-la como uma Promise com 'then()' e 'catch()' para manipular o resultado ou lidar com erros. </span>
      <img src='/src/img/useapi.png' class='img-descricao'>
         `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useLocation",
    title: "useLocation",
    Descricao: `
       <span> A função'useLocation' é uma função assíncrona que retorna a latitude e a longitude do usuário, utilizando a API de Geolocalização do navegador.
        Aqui está uma descrição passo a passo do que acontece dentro da função'useLocation':</span>

        <span>1. A função'useLocation' é declarada como uma função assíncrona.</span>

        <span>2. Dentro da função'useLocation', há outra função assíncrona chamada'getLocation'. Essa função retorna uma nova Promise que envolve a obtenção da localização atual do usuário.</span>

        <span>3. Dentro da Promise, é verificado se o navegador suporta a geolocalização usando'navigator.geolocation'.</span>

        <span>4. Se o suporte à geolocalização estiver disponível,'navigator.geolocation.getCurrentPosition' é chamado para obter a posição atual do usuário.</span>

        <span>5. Quando a posição é obtida com sucesso, os valores de latitude e longitude são extraídos do objeto'position.coords' e são resolvidos na Promise usando'resolve({ latitude, longitude })'.</span>

        <span>6. Se ocorrer um erro ao obter a posição, o erro é rejeitado na Promise usando'reject(error)'</span>

        <span>7. Se o navegador não suportar a geolocalização, um novo erro é criado usando'new Error("Geolocation is not supported by this browser.")' e é rejeitado na Promise usando'reject(error)'.</span>

        <span>8. De volta à função'useLocation', é feito um'try' para executar o código dentro dele</span>

        <span>9. A função'getLocation' é chamada usando'await' para aguardar a resolução da Promise.</span>

        <span>10. A partir do resultado obtido, a latitude e a longitude são extraídas usando a desestruturação e são retornadas em um array'[latitude, longitude]'.</span>

        <span>11. Se ocorrer algum erro durante o processo (por exemplo, o navegador não suporta a geolocalização ou houve um erro ao obter a posição), o bloco'catch' será executado. Nesse caso, o erro é capturado, e a mensagem de erro é exibida no console usando'console.log', e'[null, null]' é retornado para indicar que a localização não pôde ser obtida.</span>

        <span>Essa função'useLocation' pode ser usada para obter a localização atual do usuário. No entanto, é importante notar que o sucesso da obtenção da localização depende do consentimento do usuário e das configurações de privacidade do navegador. Além disso, essa função retorna uma Promise, então você pode usar o'await' ao chamá-la ou tratá-la como uma Promise com'then()' e'catch()' para manipular o resultado ou lidar com erros.</span>
        <img src='/src/img/uselocation.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useSearch",
    title: "useSearch",
    Descricao: `
      <span>  A função useSearch parece ser uma função simples que recebe um parâmetro props e retorna um valor relacionado à URL de pesquisa (query string).
        Aqui está uma descrição do que a função faz:</span>
        
        <span> A função useSearch é declarada sem o uso da palavra-chave async, o que indica que é uma função síncrona.</span>
        
        <span> Dentro da função, a variável location é atribuída ao objeto window.location, que contém informações sobre a URL atual.</span>
        
        <span> Em seguida, a variável prop é definida como location[props]. Isso indica que a função espera receber uma string como argumento props para acessar uma propriedade específica da URL de pesquisa.</span>
        
        <span> É feito um retorno usando decodeURIComponent(prop) || location. Aqui, a função decodeURIComponent() é usada para decodificar o valor da propriedade obtida da URL de pesquisa, caso exista. Se o valor decodificado for um valor vazio ou falso, é retornado o próprio objeto location.</span>
        
        <span> Se ocorrer algum erro durante o processo, o bloco catch será executado e o erro será lançado novamente usando throw error.</span>
        
        <span> Essa função parece ter como objetivo fornecer um método conveniente para acessar os valores da URL de pesquisa, decodificando-os se necessário. No entanto, é importante notar que o código fornecido é sucinto e não lida com todas as possíveis situações de erro ou validações necessárias ao acessar as propriedades da URL de pesquisa.</span>
        
        <span>  Recomenda-se verificar a documentação e considerar a implementação de validações adicionais, manipulação de erros e garantia de que as propriedades da URL de pesquisa estejam corretamente tratadas para atender aos requisitos do seu projeto.</span>
                 
    
       <img src='/src/img/usesearch.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useNavigate",
    title: "useNavigate",
    Descricao: `
    <span>The code you provided seems to be defining an asynchronous function called 'useNavigate' that takes a parameter 'rota'. Here's a breakdown of what the code does: </span>

    <span>1. It calls the 'useGetModules' function, passing '"../pages/index.js"' as an argument. The 'await' keyword indicates that the function call will wait for the promise returned by 'useGetModules' to resolve before proceeding.</span>
    
    <span> 2. Once the promise from 'useGetModules' is resolved, the result is assigned to the variable 'Pages'. The 'await' keyword ensures that the execution of the function pauses until the promise is resolved.</span>
    
    <span>3. The 'history.pushState(null, null, rota)' line updates the browser's history state by pushing a new entry with the specified 'rota' value. This allows for manipulating the browser's history without triggering a full page reload.</span>
    
    <span>4. Finally, the 'Router' function is called, passing the 'Pages' variable as an argument. The purpose of this function is not clear from the provided code snippet.</span>
    
    <span> It's worth noting that this code assumes the existence of the 'useGetModules' and 'Router' functions, which are not defined in the provided code. Additionally, the code snippet appears to be using JavaScript with modern syntax, such as 'async/await' and 'history.pushState', so it should be executed in an environment that supports these features (e.g., a modern web browser).</span>
       <img src='/src/img/usenavigate.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "$",
    title: "$",
    Descricao: `
    <span>  A função'$' é um exemplo simplificado de uma função que pode ser usada para selecionar elementos no DOM e aplicar atributos a eles. Aqui está uma descrição da função'$'  </span>

    <span>- A função'$' aceita dois argumentos:'arg1' e'arg2'.</span>

    <span>- Primeira condição:</span>

    <span>- Se o tipo de'arg1' for uma string, o código verifica se'arg2' está presente.</span>
    <span>- Se'arg2' estiver presente, o código seleciona o elemento no DOM usando'document.querySelector(arg1)' e define o conteúdo interno desse elemento como o valor de'arg2'.</span>
    <span>- Em seguida, retorna o elemento selecionado usando'document.querySelector(arg1)''.</span>
    <span> - Segunda condição:</span>
    <span> - Se'arg1' for um array, o código itera sobre cada elemento do array usando'arg1.forEach((element, index) => { ... })'.</span>
    <span>- Para cada elemento do array, o código extrai o seletor e os atributos usando'Object.keys(element)[0]' e'Object.values(element)[0]'.</span>
    <span>- Em seguida, o código usa'document.querySelectorAll(selector)' para obter uma NodeList de elementos correspondentes ao seletor especificado.</span>
    <span>- O código itera sobre cada elemento do NodeList usando'targetElements.forEach((targetElement) => { ... })'.</span>
    <span> - Dentro do loop, o código itera sobre os pares chave-valor de atributos usando'Object.entries(attributes)'.</span>
    <span>- Para cada atributo, o código verifica se é "innerHTML" e, se for o caso, define o conteúdo interno do elemento como o valor correspondente. Caso contrário, define o atributo no elemento usando'setAttribute()'.</span>
    <span>- Se a condição'Array.isArray(arg1)' for satisfeita, a função retorna uma NodeList de elementos selecionados por'arg1.map(element => Object.keys(element)[0]).join(', ')', que é o resultado de mapear os seletores de cada elemento do array e juntá-los com uma vírgula.</span>
    <span>- Se houver vários elementos correspondentes, a função retorna uma NodeList. Caso contrário, se houver apenas um elemento correspondente, a função retorna esse elemento diretamente.</span>

    <span>Lembre-se de que a função'$' fornecida é um exemplo simplificado e pode não abranger todos os casos de uso e considerações de erro. É importante ter o código completo e lidar com casos específicos de forma adequada ao usá-lo em seu projeto.</span>
     <span>Como usar: prix.$([{'#render': {'innerHTML': 'Alifer'}}]);</span>
    <img src='/src/img/$util.png' class='img-descricao'>
                      `,
  },  
   {
    id: "useLocalStorage",
    title: "useLocalStorage",
    Descricao: `
    <span>A função 'useLocalStorage' é uma função que permite realizar operações de leitura e gravação de dados no armazenamento local do navegador, também conhecido como localStorage. Ela oferece três operações distintas: 'getItem', 'setItem' e 'setItems'.</span>

    <span><h3 style="color: red">1. getItem:</h3>
   - Descrição: Retorna o valor de um item específico armazenado no localStorage.
   - Parâmetros:
     - 'name' (string): O nome do item a ser recuperado.
   - Retorno:
     - O valor do item do localStorage correspondente ao nome fornecido, convertido de volta para seu tipo de dado original usando JSON.parse().</span>

     <span><h3 style="color: red">2. setItem:</h3>
   - Descrição: Define o valor de um item específico no localStorage.
   - Parâmetros:
     - 'name' (string): O nome do item a ser definido.
     - 'props' (qualquer tipo de dado): O valor a ser armazenado no item.
   - Retorno:
     - Nenhum retorno explícito.</span>

     <span><h3 style="color: red">3. setItems:</h3>
   - Descrição: Adiciona um valor a um array armazenado no localStorage.
   - Parâmetros:
     - 'name' (string): O nome do array a ser atualizado.
     - 'props' (qualquer tipo de dado): O valor a ser adicionado ao array.
   - Retorno:
     - Nenhum retorno explícito.</span>

     <span>A função 'useLocalStorage' permite manipular os dados no localStorage de forma flexível, dependendo da operação selecionada. Ela pode ser usada para obter valores específicos, definir valores ou adicionar valores a arrays armazenados localmente.</span>
   

     <img src='/src/img/useLocalStorage.png' class='img-descricao'>
                `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useId",
    title: "useId",
    Descricao: `
          <span>A função 'useId' é uma função assíncrona que recebe uma senha como argumento e retorna uma Promise que resolve para a representação hexadecimal do hash SHA-256 da senha fornecida.  </span>

          <span>Aqui está uma descrição da função 'useId':  </span>


          <span>- A função 'useId' é definida como uma função assíncrona, indicada pela palavra-chave 'async' antes de sua declaração. </span>
          <span>- A função recebe um parâmetro chamado 'senha', que representa a senha a ser criptografada. </span>
          <span>- Dentro da função, a senha é convertida para um ArrayBuffer usando o objeto 'TextEncoder' e o método 'encode'. Isso garante que a senha seja tratada como uma sequência de bytes. </span>
          <span>- Em seguida, é usado o método 'crypto.subtle.digest("SHA-256", senhaBytes)' para calcular o hash SHA-256 da senha. Esse método é assíncrono e retorna uma Promise que resolve para um ArrayBuffer contendo o hash calculado. </span>
          <span>- O operador 'await' é usado para aguardar a resolução da Promise retornada pelo 'crypto.subtle.digest()'. Isso permite que o código aguarde a conclusão do cálculo do hash antes de prosseguir. </span>
          <span>- O hash resultante é convertido para uma representação hexadecimal. </span>
          <span> - Primeiro, o ArrayBuffer é convertido em um Array usando 'Array.from(new Uint8Array(hashBuffer))'. Isso cria um array contendo os bytes do hash. </span>
          <span> - Em seguida, o método 'map' é usado para iterar sobre cada byte do array e converter cada byte em uma string hexadecimal de duas letras, usando 'byte.toString(16).padStart(2, "0")'. Isso garante que cada byte seja representado por dois caracteres hexadecimais. </span>
          <span> - Por fim, o método 'join' é usado para juntar todos os caracteres hexadecimais em uma única string. </span>
          <span>- A função retorna a representação hexadecimal do hash calculado. </span>
          <span> - Se ocorrer algum erro durante o processamento, um erro é lançado usando 'throw new Error("Erro ao criptografar a senha: " + error)'. Isso garante que qualquer erro seja capturado por um bloco 'try...catch' ao chamar a função 'useId'. </span>

          <span>É importante observar que a função 'useId' faz uso da API de Criptografia Web (Web Cryptography API) do JavaScript para calcular o hash SHA-256. Essa API fornece recursos de criptografia seguros no navegador e é suportada pela maioria dos navegadores modernos. Certifique-se de verificar se o ambiente de execução suporta a API de Criptografia Web antes de usar essa função. </span>
            <img src='/src/img/useid.png' class='img-descricao'>
                          `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useCSS",
    title: "useCss",
    Descricao: `
     <span>A função 'useCSS' é uma função que recebe um seletor CSS e um objeto contendo estilos como argumentos. A função é responsável por aplicar os estilos especificados a todos os elementos no DOM que correspondem ao seletor fornecido. Aqui está uma descrição da função:  </span>

     <span>- A função 'useCSS' recebe dois parâmetros: 'selector' e 'styles'. </span>
     <span>- Dentro da função, a primeira linha de código utiliza 'document.querySelectorAll(selector)' para selecionar todos os elementos no DOM que correspondem ao seletor fornecido. Esses elementos são armazenados em uma NodeList na variável 'elements'. </span>
     <span>- Em seguida, é utilizado o método 'forEach' para iterar sobre cada elemento na NodeList. </span>
     <span> - Dentro do loop, é utilizado 'Object.keys(styles).forEach((property) => { ... })' para iterar sobre as propriedades do objeto 'styles'. </span>
     <span>- Para cada propriedade, 'element.style[property]' é usado para acessar a propriedade de estilo do elemento e atribuir o valor correspondente do objeto 'styles'. </span>
     <span>- Dessa forma, os estilos são aplicados a cada elemento no DOM que corresponde ao seletor fornecido. </span>
     <span> - Não há retorno explícito na função, portanto, a função não retorna um valor específico. </span>

     <span>No geral, a função 'useCSS' é útil quando você deseja aplicar estilos em massa a vários elementos no DOM com base em um seletor CSS específico. Certifique-se de que o código que define a função 'useCSS' esteja incluído e seja executado antes de chamar a função com os argumentos apropriados. </span>
            
                <img src='/src/img/usecss.png' class='img-descricao'>
                          `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useCSVToJSON",
    title: "CSVToJSON",
    Descricao: `
   <span> A função 'JSONToCSV' é uma função que converte um array de objetos JSON em uma string CSV. Ela recebe dois parâmetros: 'objArray' (array de objetos JSON) e 'keys' (array de chaves que representam as propriedades dos objetos JSON a serem incluídas no CSV). Aqui está uma descrição da função: </span> 

   <span> - A função 'JSONToCSV' retorna uma string CSV convertida a partir do array de objetos JSON fornecido.</span> 
   <span>  - A primeira linha do retorno é gerada usando 'keys.join(",")', que une todas as chaves do array 'keys' com uma vírgula. Isso cria a linha de cabeçalho do CSV, contendo os nomes das colunas.</span> 
   <span> - O operador spread ('...') é usado em conjunto com 'objArray.map()' para gerar as linhas de dados do CSV.</span> 
   <span> - Para cada objeto no array 'objArray', 'objArray.map((row) => keys.map((k) => row[k] || "").join(","))' é utilizado para mapear as chaves do objeto para os valores correspondentes.</span> 
   <span> - A função 'map()' é usada tanto para o array 'objArray' quanto para o array 'keys'.</span> 
   <span> - Dentro da função de mapeamento para 'keys', 'row[k] || ""' é usado para acessar o valor da propriedade correspondente ('k') no objeto 'row'. Se o valor for 'undefined' ou 'null', uma string vazia é usada como valor.</span> 
   <span>  - Os valores das propriedades são unidos com uma vírgula usando 'join(",")' para formar uma linha de dados do CSV.</span> 
   <span>  - Todas as linhas de cabeçalho e dados são unidas em uma única string usando 'join("\n")', onde '\n' representa uma quebra de linha, garantindo que cada linha esteja em uma nova linha no CSV.</span> 
   <span> - O resultado final é a string CSV que representa os dados convertidos.</span> 

   <span> Certifique-se de que o código que define a função 'JSONToCSV' esteja incluído e seja executado antes de chamá-la com os argumentos adequados.     </span>  
                  <img src='/src/img/csvtojson.png' class='img-descricao'>
                          `,
    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useJSONToCSV",
    title: "JSONToCSV",
    Descricao: `
   <span> A função 'JSONToCSV' converte um array de objetos JSON em uma string CSV. Aqui está uma descrição da função:</span>

   <span>- A função 'JSONToCSV' recebe dois parâmetros: 'objArray' e 'keys'.</span>
   <span> - A primeira linha do retorno é gerada usando 'keys.join(",")'. Isso une todas as chaves do array 'keys' com uma vírgula para formar o cabeçalho do CSV.</span>
   <span>- Em seguida, o operador spread ('...') é usado juntamente com 'objArray.map()' para iterar sobre cada objeto no array 'objArray'.</span>
   <span>- Para cada objeto, a função de mapeamento 'objArray.map((row) => keys.map((k) => row[k] || "").join(","))' é aplicada. Isso mapeia cada chave ('k') do array 'keys' para o valor correspondente ('row[k]') no objeto 'row'.</span>
   <span> - Dentro da função de mapeamento para 'keys', 'row[k] || ""' é usado para acessar o valor da propriedade correspondente ('k') no objeto 'row'. Se o valor for 'undefined' ou 'null', uma string vazia é usada como valor.</span>
   <span> - Os valores das propriedades são unidos com uma vírgula usando 'join(",")' para formar uma linha de dados do CSV.</span>
   <span> - Todas as linhas do cabeçalho e de dados são unidas em uma única string usando 'join("\n")', onde '\n' representa uma quebra de linha. Isso garante que cada linha esteja em uma nova linha no CSV.</span>
   <span> - O resultado final é a string CSV que representa os dados convertidos.</span>

   <span>Certifique-se de que o código que define a função 'JSONToCSV' esteja incluído e seja executado antes de chamar a função com os argumentos adequados. 
     <img src='/src/img/jsontocsv.png' class='img-descricao'>
                              `,

    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useExeFucTemp",
    title: "useExeFucTemp",
    Descricao: `
   <span> A função 'useExeFucTemp' é uma função que executa uma função especificada após um determinado período de tempo. Aqui está uma descrição da função: </span>

   <span>- A função 'useExeFucTemp' recebe dois parâmetros: 'func' e 'time'. </span>
   <span> - Dentro da função, é usado o método 'setTimeout' para agendar a execução da função 'func' após um período de tempo especificado. </span>
   <span>- O primeiro argumento do 'setTimeout' é uma função anônima que chama a função 'func'. </span>
   <span>- O segundo argumento do 'setTimeout' é o valor 'time' que representa o período de tempo em milissegundos após o qual a função 'func' será executada. </span>
   <span>  - Se nenhum valor for fornecido para 'time' (ou seja, 'time' é avaliado como falso, como 'undefined', 'null' ou '0'), o valor padrão de 1 é usado como período de tempo. </span>
   <span> - Isso significa que se 'time' não for especificado ou for um valor falsy, a função 'func' será executada após 1 milissegundo. </span>
   <span> - O uso do método 'setTimeout' garante que a função 'func' seja executada após o período de tempo especificado, permitindo a execução assíncrona. </span>

    <span>Certifique-se de que o código que define a função 'useExeFucTemp' esteja incluído e seja executado antes de chamar a função com os argumentos adequados. </span>
        <img src='/src/img/useexefuctemp.png' class='img-descricao'>
                              `,

    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "useGetModules",
    title: "useGetModules",
    Descricao: `
        <span >Aqui está uma descrição das duas funções:</span >

        <span > -'useGetModules' é uma função assíncrona que importa um módulo dinamicamente a partir de um caminho especificado. Aqui está uma descrição dos passos realizados pela função:

        - A função 'useGetModules' recebe um parâmetro 'caminho' que representa o caminho do módulo a ser importado.
        - Uma variável 'result' é declarada para armazenar o resultado da importação do módulo.
        - Dentro de um bloco 'try', é utilizado o operador 'await' juntamente com 'import()' para importar o módulo dinamicamente a partir do 'caminho' especificado. O método 'then()' é encadeado para acessar a exportação padrão do módulo importado.
        - O valor exportado do módulo é atribuído à variável 'result'.
        - Se ocorrer um erro durante o processo de importação, o bloco 'catch' é executado. Dentro do bloco 'catch', o erro é tratado, uma mensagem de erro é exibida no console e um valor padrão é definido para 'result' ou qualquer outra ação apropriada é executada.
        - Finalmente, o valor de 'result' é retornado.</span >

        <img src='/src/img/usegetmodule.png' class='img-descricao'>
                              `,

    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
  {
    id: "Router",
    title: "Router",
    Descricao: `
        
        <h2></h2>
        <img src='/src/img/router2.png' class='img-descricao'>   
  
        <span>A função 'Router' é responsável por controlar a navegação em um aplicativo web utilizando o conceito de roteamento. Ela recebe um objeto 'Pages' como parâmetro, que contém as definições das páginas do aplicativo.
        
        A função 'Router' possui várias subfunções e é usada para realizar as seguintes tarefas:  </span>
        
        <h2>CUSTOMTAGS</h2><span> Essa função é responsável por processar os elementos HTML personalizados (tags) presentes nas páginas. Ela substitui os elementos personalizados por suas respectivas implementações e adiciona os atributos correspondentes.</span>
        <img src='/src/img/customtag.png' class='img-descricao'  >  
        <h2>DEBOUNCE</h2> <span>Essa função é um utilitário para criar uma versão "debounce" de uma função, ou seja, ela limita a frequência com que a função é executada, evitando chamadas excessivas.</span>
        <img src='/src/img/debounce.png' class='img-descricao'  >  
        <h2>ERRO-PAGE</h2> <span>Essa função gera o conteúdo HTML para exibir a página de erro, caso uma página inválida seja solicitada. Ela cria links para todas as páginas disponíveis no objeto 'Pages'.</span>
        <img src='/src/img/erropage.png' class='img-descricao'  >  
        <h2>ROUTER-STATE</h2> <span>Essa função extrai o nome da página atual da URL e retorna o nome da página correspondente com base no objeto 'Pages'. Se a URL não corresponder a nenhuma página existente, a página de erro será retornada, 
        depois verificar o estado atual do roteamento e chamar a função 'customtag' para exibir a página correspondente. 
        </span>
        <img src='/src/img/routerState.png' class='img-descricao'  >  
        <h2>HANDLECLCK</h2> <span>Essa função lida com os cliques nos links do aplicativo. Ela intercepta o evento de clique, impede o comportamento padrão do link, atualiza a URL utilizando o histórico de navegação e chama a função 'routerState' para renderizar a página correspondente.</span>
        <img src='/src/img/handleClick.png' class='img-descricao' >  
        <h2>RESUMO</h2> <span>A função 'Router' é configurada para responder aos eventos de popstate (quando ocorre uma alteração no histórico de navegação) e cliques nos links do aplicativo. Ela é chamada inicialmente para configurar o estado inicial do aplicativo com base na URL atual e também é chamada sempre que ocorre uma alteração na URL.
        
       Em resumo, a função 'Router' é responsável por controlar a navegação entre as páginas do aplicativo, atualizando dinamicamente o conteúdo da página com base na URL e nos links clicados pelo usuário.</span>`,

    contribuidores: [
      {
        Alifer: "https://github.com/AliferSouza/",
      },
    ],
  },
];

export { data };

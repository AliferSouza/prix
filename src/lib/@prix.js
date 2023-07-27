function useLocalStorage(operation, name, props) {
  if (operation === "getItem") {
    return JSON.parse(window.localStorage.getItem(name));
  } else if (operation === "setItem") {
    window.localStorage.setItem(name, JSON.stringify(props));
  } else if (operation === "setItems") {
    const items = JSON.parse(localStorage.getItem(name) || "[]");
    items.push(props);
    localStorage.setItem(name, JSON.stringify(items));
  }
}

async function useLocation() {
  async function getLocation() {
    return new Promise((resolve, reject) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            resolve({ latitude, longitude });
          },
          (error) => {
            reject(error);
          }
        );
      } else {
        const error = new Error(
          "Geolocation is not supported by this browser."
        );
        reject(error);
      }
    });
  }

  try {
    const { latitude, longitude } = await getLocation();
    return [latitude, longitude];
  } catch (error) {
    console.log("Erro ao obter localização:", error.message);
    return [null, null];
  }
}

async function useNavigate(Rota, Pages) {
  history.pushState(null, null, Rota);
  Router(Pages);
}

async function useId(senha) {
  try {
    // Converte a senha para um ArrayBuffer
    const encoder = new TextEncoder();
    const senhaBytes = encoder.encode(senha);

    // Calcula o hash SHA-256 da senha
    const hashBuffer = await crypto.subtle.digest("SHA-256", senhaBytes);

    // Converte o hash para uma string hexadecimal
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
      .map((byte) => byte.toString(16).padStart(2, "0"))
      .join("");

    return hashHex;
  } catch (error) {
    throw new Error("Erro ao criptografar a senha: " + error);
  }
}

async function useCSVToJSON(url, type) {
  const typeSelect = type || ",";

  const response = await fetch(url);
  const data = await response.text();

  const lines = data.split("\n");
  const keys = lines[0].split(typeSelect);

  return lines.slice(1).map((line) => {
    return line.split(typeSelect).reduce((acc, cur, i) => {
      const toAdd = {};
      toAdd[keys[i]] = cur;
      return { ...acc, ...toAdd };
    }, {});
  });
}

function useJSONToCSV(objArray, keys) {
  return [
    keys.join(","),
    ...objArray.map((row) => keys.map((k) => row[k] || "").join(",")),
  ].join("\n");
}

const $ = (selector) => {
  const elements = document.querySelectorAll(selector);

  if (elements.length === 0) {
    return selector;
  }

  const obj = {
    addClass: (className) => {
      elements.forEach((element) => {
        element.classList.add(className);
      });
      return obj;
    },
    removeClass: (className) => {
      elements.forEach((element) => {
        element.classList.remove(className);
      });
      return obj;
    },
    text: (textContent) => {
      elements.forEach((element) => {
        element.textContent = textContent;
      });
      return obj;
    },
    css: (styleObject) => {
      elements.forEach((element) => {
        Object.assign(element.style, styleObject);
      });
      return obj;
    },
    on: (event, handler) => {
      elements.forEach((element) => {
        element.addEventListener(event, handler);
      });
      return obj;
    },
    appendImage: (imageUrl) => {
      elements.forEach((element) => {
        const img = document.createElement("img");
        img.src = imageUrl;
        element.appendChild(img);
      });
      return obj;
    },
    hide: () => {
      elements.forEach((element) => {
        element.style.originalDisplay = element.style.display;
        element.style.display = "none";
      });
      return obj;
    },
    show: () => {
      elements.forEach((element) => {
        element.style.display = element.style.originalDisplay || "";
        delete element.style.originalDisplay;
      });
      return obj;
    },
    tag: () => {
      return elements[0];
    },
    tags: () => {
      return elements;
    },
  };

  return obj;
};

const Router = async (PagesComponentsData = {}, Config = {}) => {
  const root = document.querySelector("#app");
  const { Pages = {},  Data = {} } = PagesComponentsData;


  const locationUrlPage = () => {
    const dataUrl = location.hash.replace("#", "") || location.pathname;

    const currentPage =
      dataUrl === "/"
        ? Object.keys(Pages)[0]
        : dataUrl.split("#")[0].split("/").filter(Boolean).pop();
    return currentPage;
  };

  async function customTags() {
    let stateFunctionsComponetLocal = [];


    const processElement = async (elem) => {
      const attributes = Array.from(elem.getAttributeNames()).reduce(
        (obj, attrName) =>
          !attrName.startsWith("data-")
            ? { ...obj, [attrName]: elem.getAttribute(attrName) }
            : obj,
        {}
      );

      const componentKey = elem.tagName.toLowerCase();
      const dataApp = {
        componentKey,
        attributes,
        parameter: Object.fromEntries(
          new URLSearchParams(location.href.split("?")[1]).entries()
        ),
        Data,
        tag: elem,
      };

      try {
        if (componentKey) {
          const response = await fetch(
            `${location.origin}/app/components/${componentKey}.js`
          );
          const pegarPaginaOculta = await response.text();



   
          const retonarPaginaOcultaEmFunção = Function(
            "return " + pegarPaginaOculta
          )();

          const componentResult = await retonarPaginaOcultaEmFunção(dataApp);
          if (typeof componentResult === "string") {
            elem.innerHTML += componentResult;
          }

          if (
            typeof componentResult === "object" &&
            typeof componentResult.html === "function"
          ) {
            {
              elem.innerHTML += componentResult.html();
            }
          }

          if (
            typeof componentResult === "object" &&
            typeof componentResult.state === "function"
          ) {
            stateFunctionsComponetLocal.push(componentResult.state);
          }
        } else {
          throw new Error(
            `Componente não encontrado para a tag: ${componentKey}`
          );
        }
      } catch (error) {
        console.error("Erro ao processar componente:", error);
        // Tratar o erro adequadamente, como exibir uma mensagem de erro
      }

      await identifyAndAddInnerComponents(elem);
    };

    const identifyAndAddInnerComponents = async (parentElement) => {
      const tagElements = Array.from(
        parentElement.querySelectorAll("*")
      ).filter((element) => element.tagName.toLowerCase().match(/^comp-/i));

      for (let i = 0; i < tagElements.length; i++) {
        const elem = tagElements[i];
        await processElement(elem);
      }
    };

    const tagElements = Array.from(document.querySelectorAll("*")).filter(
      (element) => element.tagName.toLowerCase().match("-")
    );

    const observer = new IntersectionObserver(async function (
      entries,
      observer
    ) {
      entries.forEach(async function (entry) {
        if (entry.isIntersecting) {
          await processElement(entry.target);
          observer.unobserve(entry.target); // Deixa de observar o elemento após o processamento
        }
      });
    });

    Array.from(tagElements).forEach(function (tag) {
      observer.observe(tag);
    });

    stateFunctionsComponetLocal.forEach((func) => func());
  }

  async function routerPages() {
    const currentUrlPage = locationUrlPage(); 
    const resultUrl =
      currentUrlPage && Pages[currentUrlPage] ? currentUrlPage : "erro";

    if (resultUrl === "erro") {
      erroPage(currentUrlPage);
    } else {
      const paginasData = { Data: Data };

      const response = await fetch(
        `${location.origin}/app/pages/@${currentUrlPage}.js`
      );
      let pegarPaginaOculta
      pegarPaginaOculta = await response.text();
  


      if(Config.Base64 === "true"){        
        pegarPaginaOculta = atob(pegarPaginaOculta);
      }
   
      const retonarPaginaOcultaEmFunção = Function(
        "return " + pegarPaginaOculta
      )();


      const page = await retonarPaginaOcultaEmFunção(paginasData);

      if (typeof page === "string") {
        root.innerHTML = page;
      }

     if (typeof page === "object" && typeof page.html === "function" && typeof page.state ) {
        {
          root.innerHTML = page.html();
          page.state()
        }
      }

   

      customTags();
    }
  }

  function debounce(fn, delay) {
    let timeoutId;
    return function (...args) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        fn.apply(this, args);
      }, delay);
    };
  }

  function erroPage(Pages) {
    root.innerHTML = `
    <div class="erroPages">
      ${Object.keys(Pages)
        .map(
          (page, index) =>
            `<a class="pagina-erro" id="${index}"  data-href="/#/${page}/">${page.toUpperCase()}</a>`
        )
        .join("")}
    </div>
  `;
  }

  function handleClick(e) {
    if (e.target.matches("[data-href]")) {
      e.preventDefault();
      const href = e.target.dataset.href;
      history.pushState(null, null, href);
      routerPages();
    }
  }

  window.addEventListener("popstate", routerPages);
  document.body.addEventListener("click", debounce(handleClick, 200));
  routerPages();
};



export {
  useLocalStorage,
  useId,
  useLocation,
  useCSVToJSON,
  useJSONToCSV,
  useNavigate,
  Router,
  $,
  };

function toggleMode(){
    const html = document.documentElement
    // if(html.classList.contains('light')){
    //     html.classList.remove('light')
  
    //   }
    //   else {
    //     html.classList.add('light')
    //   }
    html.classList.toggle("light")
    
    //Pegar um Atributo, no caso imagem
    const img = document.querySelector("#profile img")
    // Se o Html estiver com light  
    if(html.classList.contains('light')){
      // Utiliza essa imagem
      img.setAttribute("src", "./assets/avatar-light.jpeg")
  
      }
      // Se não 
      else {
        //Esta
        img.setAttribute("src", "./assets/avatar.jpeg")
      }
  }
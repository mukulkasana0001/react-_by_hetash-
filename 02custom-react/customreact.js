function customreact(reactelement,container) {
 
    /*
    // const dom_element = document.createElement(reactelement.type)

    // dom_element.innerHTML = reactelement.children

    // dom_element.setAttribute('href',reactelement.props.href)
    // dom_element.setAttribute('target',reactelement.props.target)
    
    // // setAttribute method helps to add attributes like -> class , id , title, style etc
   
    // container.appendChild(dom_element)
*/

    const dom_element = document.createElement(reactelement.type)

    dom_element.innerHTML = reactelement.children

    // for egnoring repetation we use for loop
    for(const prop in reactelement.props ){
        if(prop ==='children') continue;
        dom_element.setAttribute(prop,reactelement.props[prop]) 
    }

    container.appendChild(dom_element)
   }


  const reactelement ={
 type: 'a',
 props : {
    href : 'https://google.com',
    target : '_blank'
 },
 children : 'all these are tarmanoliges '
  }


 const maincontainer = document.getElementById("root")


 customreact(reactelement,maincontainer)






 
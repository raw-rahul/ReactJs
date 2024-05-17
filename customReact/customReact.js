
function customRender(reactElemet, container){
    const domElement = document.createElement(reactElemet.type);
    domElement.innerHTML = reactElemet.children;
    // domElement.setAttribute('href', reactElemet.props.href);
    // domElement.setAttribute('target', reactElemet.props.target);
    
    for(const prop in reactElemet.props){
        if(prop === 'children') continue;
        domElement.setAttribute(prop, reactElemet.props[prop])
    }
    container.appendChild(domElement); 
    
}

const reactElemet = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google!'
}

const mainContainer = document.querySelector('#root');

customRender(reactElemet, mainContainer);
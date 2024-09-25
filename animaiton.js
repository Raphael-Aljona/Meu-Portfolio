
// Animação para fazer ao scrollar a página

const elements = document.querySelectorAll('.hidden');

const myObserver = new IntersectionObserver((elements) => { 
    elements.forEach(( entry ) => {
        if (entry.isIntersecting){
            entry.target.classList.add('show')
        } else{
            entry.target.classList.remove('show')
        }
        
        })
})

elements.forEach((element) => myObserver.observe(element))




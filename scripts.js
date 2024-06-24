function loadContent(page) {
    let content = document.getElementById('content');
    
    switch(page) {
        case 'home':
            content.innerHTML = '<h1>Inicio</h1><p>Bienvenido a la página de inicio. Aquí encontrarás las últimas noticias y actualizaciones.</p>';
            break;
        case 'about':
            content.innerHTML = '<h1>Acerca de</h1><p>Somos una empresa dedicada a brindar soluciones innovadoras. Nuestra misión es mejorar la vida de las personas a través de la tecnología.</p>';
            break;
        case 'services':
            content.innerHTML = '<h1>Servicios</h1><p>Ofrecemos una amplia gama de servicios para satisfacer tus necesidades. Desde consultoría hasta desarrollo de software, estamos aquí para ayudarte.</p>';
            break;
        case 'contact':
            content.innerHTML = '<h1>Contacto</h1><p>Puedes contactarnos a través de nuestro correo electrónico: contacto@empresa.com o llamarnos al (555) 123-4567.</p>';
            break;
        default:
            content.innerHTML = '<h1>Error</h1><p>Página no encontrada.</p>';
            break;
    }
}

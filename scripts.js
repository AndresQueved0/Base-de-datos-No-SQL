document.addEventListener('DOMContentLoaded', function() {
    var sidebar = document.getElementById('sidebar');
    var toggleSidebarBtn = document.getElementById('toggleSidebarBtn');
    var closeSidebarBtn = document.getElementById('closeSidebarBtn');

    // Función para abrir el sidebar
    function openSidebar() {
        sidebar.classList.add('active');
        toggleSidebarBtn.style.display = 'none'; // Oculta el botón de abrir inmediatamente
    }

    // Función para cerrar el sidebar
    function closeSidebar() {
        sidebar.classList.remove('active');
        // Retrasa la aparición del botón de abrir hasta que la transición del sidebar haya terminado
        setTimeout(function() {
            toggleSidebarBtn.style.display = 'block';
        }, 150); // Ajusta este valor al tiempo de duración de la transición del sidebar
    }

    // Evento para abrir el sidebar
    toggleSidebarBtn.addEventListener('click', function() {
        openSidebar();
    });

    // Evento para cerrar el sidebar
    closeSidebarBtn.addEventListener('click', function() {
        closeSidebar();
    });

    // Verifica el estado inicial del sidebar al cargar la página
    if (sidebar.classList.contains('active')) {
        toggleSidebarBtn.style.display = 'none';
    } else {
        toggleSidebarBtn.style.display = 'block';
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const light = document.getElementById('light');
    const dark = document.getElementById('dark');
    const message = document.querySelectorAll('.message')
    
    function darkMode() {
        message.style.opacity
    }
    
    
    dark.addEventListener('click', () =>{
        darkMode
        alert('dark mode')
    })
    light.addEventListener('click', () =>{
        // document.body.style.backgroundImage = null;
        document.body.style.background = white;
        alert('light mode');
    })
    
    
})
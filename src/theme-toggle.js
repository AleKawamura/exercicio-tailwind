function initThemeToggle(){
    const themeToggle = document.getElementById("theme-toggle");
    const html = document.documentElement;
    themeToggle.addEventListener('click', () => {
        if (html.classList.contains('light')){
            html.classList.remove('light');
            html.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else{
            html.classList.remove('dark');
            html.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    });
    const savedTheme = localStorage.getItem('theme');
    if(savedTheme){
        html.className = savedTheme;
    }
}
if(document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initThemeToggle);
} else {
    initThemeToggle();
}
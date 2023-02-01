window.onload = (event) => {
    const buttons = document.querySelectorAll(".mode-changer");

    buttons.forEach(button => {
        button.addEventListener('click', ()=> {
            const root = document.querySelector(":root");

            const computedStyle = getComputedStyle(root);

            const dark = computedStyle.getPropertyValue('--dark');
            const light = computedStyle.getPropertyValue('--light');

            root.style.setProperty("--dark", light);
            root.style.setProperty("--light", dark);
        })
    })
}
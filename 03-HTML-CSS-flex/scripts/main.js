const centeredBoxes = document.getElementsByClassName('centered-box');
for (let i = 0; i < centeredBoxes.length; i++) {
    const element = centeredBoxes[i];
    element.onclick = () => {
        element.parentElement.remove();
    };
}

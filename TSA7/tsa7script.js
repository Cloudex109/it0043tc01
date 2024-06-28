const flexContainer = document.getElementById('flexContainer');

function resetFlexbox() {
    flexContainer.style.flexDirection = 'row';
    flexContainer.style.justifyContent = 'flex-start';
    flexContainer.style.alignItems = 'flex-start';
    flexContainer.style.gap = '0px';
    document.getElementById('gap').value = 0;
    resetGrow();
}

function updateFlexbox() {
    const gap = document.getElementById('gap').value;
    flexContainer.style.gap = `${gap}px`;
}

function setFlexDirection(direction) {
    flexContainer.style.flexDirection = direction;
}

function setJustifyContent(value) {
    flexContainer.style.justifyContent = value;
}

function setAlignItems(value) {
    flexContainer.style.alignItems = value;
}

function resetGrow() {
    const items = flexContainer.children;
    for (let i = 0; i < items.length; i++) {
        items[i].style.flexGrow = 0;
        document.getElementById(`box${i+1}`).value = 0;
    }
}

function growAll() {
    const items = flexContainer.children;
    for (let i = 0; i < items.length; i++) {
        items[i].style.flexGrow = 1;
        document.getElementById(`box${i+1}`).value = 1;
    }
}

function updateFlexGrow(boxNumber, value) {
    flexContainer.children[boxNumber-1].style.flexGrow = value;
}

// Initialize
resetFlexbox();
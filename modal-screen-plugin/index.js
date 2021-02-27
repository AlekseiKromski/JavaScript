let createBackgroundLayer = function () {
    let backgroundLayerNode = document.createElement('div')
    backgroundLayerNode.classList.add('modal')
    return backgroundLayerNode
}
let setEscListener = function(previewScreen, backgroundLayer) {
    document.addEventListener('keydown', function(e){
        if(e.code === 'Escape'){
            previewScreen.style.display = 'none';
            backgroundLayer.remove()
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {

    let buttons = document.querySelectorAll('button');
    buttons.forEach(button => {
        button.addEventListener('click', function(e){
            let previewScreenId = e.currentTarget.dataset.modalPreviewId; 
            let previewScreen = document.querySelector('[data-modal-screen-preview-id="' + previewScreenId + '"]')
            if(previewScreen){
                if(previewScreen.style.display == 'block'){
                    previewScreen.style.display = 'none';
                }else{
                    let backgroundLayer = createBackgroundLayer();
                    document.querySelector('body').appendChild(backgroundLayer)
                    previewScreen.classList.add('modal-preview')
                    previewScreen.style.display = 'block';  
                    setEscListener(previewScreen, backgroundLayer)
                }
            }else{
                console.error('Cant find data screen preview id = ' + previewScreenId);
            }
        })
    })
})
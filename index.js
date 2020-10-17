const vshadowizard = (options) => {
    let images = document.querySelectorAll('.vshadowizard');

    if(options.shadow_type === 'hard')
        options.shadow_type = '0px'
    else
        optiotns.shadow_type = '15px'
    
    images.forEach(images => {
        images.style.boxShadow = `10px 10px ${options.shadow_type} 1px rgba(0,0,0,0.12)`;

        if(options.padding) {
            images.style.padding = '1em'
        }
    })
}

module.exports.vshadowizard = vshadowizard;
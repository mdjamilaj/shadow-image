function shadow(options) {
    let images = document.querySelectorAll('.shadow')

    if(options.shadow_type == 'hard')
        options_type = '0px';
    else
        options_type = '15px';

    images.forEach(image => {
        image.style.boxShadow = `10px 10px ${options_type} 1px rgba(0, 0, 0, 0.12)`;

        if(options.padding)
        {
            image.style.padding = '1rem';
        }
    })
}


module.exports.shadow = shadow;
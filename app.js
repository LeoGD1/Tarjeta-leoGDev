const $ulHeader = document.querySelector('.header__ul');


socialMedia.forEach(li => {
    //creacion de estructura HTML
    let pillMedia = `
        <li class="header__li">
            <a href="${li.link}" target="_blank" class="header__a">
                <i class="${li.iconClass}"></i>
                <span class="header__icon-name">${li.iconName}</span>
            </a>
        </li>
    `;
    //se coloca en el DOM antes del cierre de la etiqueta ul
    $ulHeader.insertAdjacentHTML('beforeend', pillMedia);
});
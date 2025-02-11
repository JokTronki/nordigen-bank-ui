const obInstitutionSbAnchor = document.createElement('a');
const obInstitutionSbModalContent = document.getElementsByClassName(
    'institution-modal-content'
)[0];
const obInstitutionSbHeading = document.getElementsByTagName('head')[0];
const obInstitutionModalHeader = document.getElementsByClassName(
    'institution-modal-header'
)[0];
const obStyleEnum = {
    FontSize: 'FontSize',
    TextColor: 'TextColor',
};
includeCssFile('https://unpkg.com/flag-icons@6.1.1/css/flag-icons.min.css');

const _obInstitutionSbcreateHTMLNode = (element, className, node) => {
    // check if node exists before creating it
    const nodeElement = document.querySelector(`.${className}`);
    if (nodeElement) return nodeElement;

    const htmlEntity = document.createElement(element);
    htmlEntity.classList.add(className);
    document.body.appendChild(htmlEntity);
    return document.querySelector(`.${className}`);
};

const _obInstitutionSbcreateImgNode = ({url, className, alt}) => {
    const img = document.createElement('img');
    img.src = url;
    img.alt = alt;
    img.className = className;
    return img;
};

const _createInstitutionContainer = () => {
    const institutionContainer = _obInstitutionSbcreateHTMLNode(
        'div',
        'institution-container',
        obInstitutionSbModalContent
    );
    institutionContainer.classList.add('institution-search-bx-body');
    return institutionContainer;
};

function _institutionSbSetSearchBox(searchBox, config) {
    let input = document.createElement('input');
    let search = obInstitutionSbAnchor.cloneNode(true);

    const searchImg = _obInstitutionSbcreateImgNode({
        url: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHZpZXdCb3g9IjAgMCAxOCAxOCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xLjggOC4xMDAwMUMxLjggNC42MjA2MSA0LjYyMDYxIDEuOCA4LjEwMDAxIDEuOEMxMS41Nzk0IDEuOCAxNC40IDQuNjIwNjEgMTQuNCA4LjEwMDAxQzE0LjQgOS43OTczNyAxMy43Mjg4IDExLjMzOCAxMi42MzcyIDEyLjQ3MDhDMTIuNjA2NCAxMi40OTQ1IDEyLjU3NjggMTIuNTIwNCAxMi41NDg2IDEyLjU0ODZDMTIuNTIwNCAxMi41NzY4IDEyLjQ5NDQgMTIuNjA2NSAxMi40NzA4IDEyLjYzNzJDMTEuMzM3OSAxMy43Mjg4IDkuNzk3MzYgMTQuNCA4LjEwMDAxIDE0LjRDNC42MjA2MSAxNC40IDEuOCAxMS41Nzk0IDEuOCA4LjEwMDAxWk0xMy4xNTU5IDE0LjQyODdDMTEuNzcwMiAxNS41MzcyIDEwLjAxMjUgMTYuMiA4LjEwMDAxIDE2LjJDMy42MjY1IDE2LjIgMCAxMi41NzM1IDAgOC4xMDAwMUMwIDMuNjI2NSAzLjYyNjUgMCA4LjEwMDAxIDBDMTIuNTczNSAwIDE2LjIgMy42MjY1IDE2LjIgOC4xMDAwMUMxNi4yIDEwLjAxMjUgMTUuNTM3MiAxMS43NzAyIDE0LjQyODcgMTMuMTU1OUwxNy43MzY0IDE2LjQ2MzZDMTguMDg3OSAxNi44MTUxIDE4LjA4NzkgMTcuMzg1IDE3LjczNjQgMTcuNzM2NEMxNy4zODQ5IDE4LjA4NzkgMTYuODE1MSAxOC4wODc5IDE2LjQ2MzYgMTcuNzM2NEwxMy4xNTU5IDE0LjQyODdaIiBmaWxsPSIjQjZCNkI2Ii8+Cjwvc3ZnPgo=',
        className: 'institution-search-icon',
        alt: 'search icon',
    });

    searchBox.className += 'institution-search-container';
    input.className += 'institution-search-input';

    // Set attributes
    search.href = '#';
    input.setAttribute('placeholder', 'Search...');
    input.setAttribute('onkeyup', '_institutionSbSearchAspsp(config)');

    searchBox.appendChild(input);
    searchBox.appendChild(searchImg);
    return searchBox;
}

function includeCssFile(filename) {
    const style = document.createElement('link');
    style.href = filename;
    style.type = 'text/css';
    style.rel = 'stylesheet';
    obInstitutionSbHeading.append(style);
}

function includeFont(url) {
    // Google fonts hrefs
    const font = new URL(url).searchParams.get('family');
    const hrefs = [
        'https://fonts.googleapis.com',
        'https://fonts.gstatic.com',
        url,
    ];
    hrefs.forEach((href) => {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        obInstitutionSbHeading.append(link);
    });
    const body = document.getElementsByTagName('body')[0];
    body.style.fontFamily = `${font}, sans-serif`;
}

function _createInstitutionBankListView(body, institutionLogos, config) {
    if (config.countryFilter) _addBackArrow({visible: true});
    _changeHeading('Select your bank');
    _clearSearchFormInput();
    const institutionContainer = _createInstitutionContainer();

    institutionLogos.forEach((el) => {
        const institutionList = document.createElement('div');
        institutionList.className = 'ob-institution ';
        institutionList.className += 'ob-list-institution';

        let institutionRow = obInstitutionSbAnchor.cloneNode(true);
        let institutionImg = document.createElement('img');
        let instituionSpan = document.createElement('span');
        instituionSpan.className = 'ob-span-text';
        instituionSpan.innerText = el.name;
        institutionList.appendChild(institutionRow);

        institutionImg.src = el.logo;
        institutionImg.className = 'ob-institution-logo';
        institutionRow.className += `institution-${el.id}`;
        institutionRow.href = el.id;

        institutionRow.dataset.institution = el.id;
        institutionRow.appendChild(institutionImg);
        institutionRow.appendChild(instituionSpan);
        _appendArrowRight(institutionRow);

        institutionContainer.appendChild(institutionList);
        institutionList.appendChild(institutionRow);
    });

    setOBModalStyles(config);
    obInstitutionSbModalContent.appendChild(institutionContainer);
}

function createCountryListView(body, institutionLogos, config) {
    _changeHeading('Select your country');
    const arrow = _addBackArrow({visible: false});
    const countries = _getAllUniqueCountries(institutionLogos);
    const institutionContainer = _createInstitutionContainer();

    countries.forEach((country) => {
        const institutionList = document.createElement('div');
        institutionList.className = 'ob-institution';
        institutionList.className += ' ob-country-list';

        let institutionRow = obInstitutionSbAnchor.cloneNode(true);
        let institutionImg = document.createElement('span');
        let instituionSpan = document.createElement('span');
        instituionSpan.className = 'ob-span-text';
        instituionSpan.innerText = _getCountryFromISO(country);
        institutionList.appendChild(institutionRow);

        institutionImg.className = `fi fi-${country.toLowerCase()}`;
        institutionRow.href = '#!';
        institutionRow.setAttribute('data-country', country);
        institutionRow.appendChild(institutionImg);
        institutionRow.appendChild(instituionSpan);

        _appendArrowRight(institutionRow);

        institutionContainer.appendChild(institutionList);
        institutionList.appendChild(institutionRow);
    });

    setOBModalStyles(config);
    obInstitutionSbModalContent.appendChild(institutionContainer);

    const institutionList = document.querySelectorAll('.ob-institution > a');

    Array.from(institutionList).forEach((el) =>
        el.addEventListener('click', (e) => {
            const country = e.currentTarget.getAttribute('data-country');
            const institutions = _filterByCountry(institutionLogos, country);
            _clearAllInnerNodes();
            _createInstitutionBankListView(body, institutions, config);
        })
    );

    const arrowLink = arrow.getElementsByTagName('a')[0];
    arrowLink.addEventListener('click', () => {
        _clearAllInnerNodes();
        createCountryListView(body, institutionLogos, config);
        arrow.style.display = 'none';
        _clearSearchFormInput();
    });
}

function _institutionSbSearchAspsp(config) {
    const isCountryFilterActive = config.countryFilter;
    const input = document.querySelector('.institution-search-input');
    const filter = input.value.toUpperCase();
    const institutionList = document.querySelectorAll('.ob-institution');
    const countryList = document.querySelectorAll('.ob-country-list > a');

    if (isCountryFilterActive && countryList.length > 0) {
        institutionList.forEach((cn) => {
            const country = cn.textContent.toUpperCase();
            const countryIso = cn
                .getElementsByTagName('a')[0]
                .getAttribute('data-country');
            if (
                country.indexOf(filter) > -1 ||
                countryIso.toUpperCase().indexOf(filter) > -1
            ) {
                cn.style.display = '';
            } else {
                cn.style.display = 'none';
            }
        });
    } else {
        institutionList.forEach((inst) => {
            const institution = inst.textContent;
            if (institution.toUpperCase().indexOf(filter) > -1) {
                inst.style.display = '';
            } else {
                inst.style.display = 'none';
            }
        });
    }
}

function setOBModalStyles(config) {
    const styleConfig = config.styles;
    const institutionList = Array.from(
        document.querySelectorAll('.ob-institution > a')
    );

    if (styleConfig?.modalBackgroundColor) {
        obInstitutionSbModalContent.style.backgroundColor =
            styleConfig.modalBackgroundColor;
    }

    if (styleConfig?.backgroundColor) {
        document.body.style.background = styleConfig.backgroundColor;
    }

    if (styleConfig?.fontFamily) {
        includeFont(styleConfig.fontFamily);
    }

    if (styleConfig?.modalTextColor) {
        changeTextStyles(
            obStyleEnum.TextColor,
            styleConfig.modalTextColor,
            institutionList
        );
    }

    if (styleConfig?.textColor) {
        const contentText = document.querySelector('.container-onboarding > p');
        contentText.style.color = styleConfig.textColor;
    }

    if (styleConfig?.fontSize) {
        changeTextStyles(
            obStyleEnum.FontSize,
            styleConfig.fontSize,
            institutionList
        );
    }

    if (styleConfig?.headingColor) {
        const heading = document.querySelector('.institution-modal-header h2');
        heading.style.color = styleConfig.headingColor;
    }

    if (styleConfig?.linkColor) {
        const arrow = document.querySelector('.institution-arrow-block > a');
        if (arrow) {
            arrow.style.color = styleConfig.linkColor;
        }
    }

    _setOBOpacity();
}

function _institutionSbSetConfig(config) {
    const redirect = config.redirectUrl;
    const close = _createCloseIcon();
    close.addEventListener('click', () => {
        window.location.href = !redirect ? document.URL : redirect;
    });
}

function _obConstructMobileEntryScreen(wrapper, config) {
    const onboardContainer = document.createElement('div');
    onboardContainer.className = 'container-onboarding';
    wrapper.prepend(onboardContainer);

    const logoImage = _obInstitutionSbcreateImgNode({
        url: config.logoUrl,
        className: 'institution-company-logo',
        alt: 'Logotype',
    });
    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'company-image-wrapper';
    imgWrapper.appendChild(logoImage);
    onboardContainer.appendChild(imgWrapper);

    const createParagraph = document.createElement('p');
    createParagraph.innerHTML = _truncateText(config.text);
    onboardContainer.appendChild(createParagraph);

    const scrollDownLink = document.createElement('a');
    scrollDownLink.href = '#institution-modal-content';

    const scrollDownImg = document.createElement('img');
    scrollDownImg.src =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAuODYwMDU3IDkuMDZDMC43NjU0MDEgOC45NjYxMiAwLjcxMjE1OCA4LjgzODMyIDAuNzEyMTU4IDguNzA1QzAuNzEyMTU4IDguNTcxNjggMC43NjU0MDEgOC40NDM4OCAwLjg2MDA1NyA4LjM1TDEuMDYwMDYgOC4xNUMxLjE1NDEzIDguMDUyMzQgMS4yODQ0NyA3Ljk5ODAzIDEuNDIwMDYgOEg1LjAwMDA2VjAuNUM1LjAwMDA2IDAuMjIzODU4IDUuMjIzOTEgMCA1LjUwMDA2IDBIMTAuNTAwMUMxMC43NzYyIDAgMTEuMDAwMSAwLjIyMzg1OCAxMS4wMDAxIDAuNVY4SDE0LjU4MDFDMTQuNzE1NiA3Ljk5ODAzIDE0Ljg0NiA4LjA1MjM0IDE0Ljk0MDEgOC4xNUwxNS4xNDAxIDguMzVDMTUuMjM0NyA4LjQ0Mzg4IDE1LjI4OCA4LjU3MTY4IDE1LjI4OCA4LjcwNUMxNS4yODggOC44MzgzMiAxNS4yMzQ3IDguOTY2MTIgMTUuMTQwMSA5LjA2TDguMzUwMDYgMTUuODVDOC4yNTkzMiAxNS45NDY3IDguMTMyNjQgMTYuMDAxNSA4LjAwMDA2IDE2LjAwMTVDNy44Njc0NyAxNi4wMDE1IDcuNzQwNzkgMTUuOTQ2NyA3LjY1MDA2IDE1Ljg1TDAuODYwMDU3IDkuMDZaIiBmaWxsPSIjNDk1NTU1Ii8+Cjwvc3ZnPgo=';
    scrollDownImg.alt = 'arrow image';
    scrollDownImg.className = 'ob-arrow-down';

    scrollDownLink.appendChild(scrollDownImg);
    onboardContainer.appendChild(scrollDownLink);
}

/**
 *
 * @param {Object} institutions
 * @param {HTMLNode} targetNode
 * @param {Object} config
 * @return
 */
function institutionSelector(institutions, targetNode, config = {}) {
    const institutionContentWrapper = document.querySelector(
        '.institution-content-wrapper'
    );

    _institutionSbSetConfig(config);

    // create search
    const searchDiv = document.createElement('div');
    const searchNode = _institutionSbSetSearchBox(searchDiv, config);
    obInstitutionSbModalContent.appendChild(searchNode);

    _obConstructMobileEntryScreen(institutionContentWrapper, config);

    if (config.countryFilter) {
        createCountryListView(targetNode, institutions, config);
    } else {
        _createInstitutionBankListView(targetNode, institutions, config);
    }

    setOBModalStyles(config);
}

const _setOBButtonColor = (config) => {
    const btn = document.querySelector('.ob-btn-primary');

    if (config?.buttonColor) {
        const color = config.buttonColor;
        btn.style.backgroundColor = color;
    }

    if (config?.buttonTextColor) {
        btn.style.color = config.buttonTextColor;
    }
};

const _setOBOpacity = () => {
    const instList = Array.from(document.querySelectorAll('.ob-institution'));
    const hoverState = {
        hover: (event) => {
            event.currentTarget.style.opacity = '.75';
        },
        out: (event) => {
            event.currentTarget.style.opacity = '1';
        },
    };

    instList.map((el) => {
        el.addEventListener('mouseover', hoverState.hover, false);
        el.addEventListener('mouseout', hoverState.out, false);
    });
};

const changeTextStyles = (styleEnum, styleConfig, institutionList) => {
    institutionList.map((el) => {
        const spanElement = el.getElementsByTagName('span');
        Array.from(spanElement).map((spanEl) => {
            if (spanEl.classList.contains('ob-span-text')) {
                if (styleEnum == 'FontSize') {
                    spanEl.style.fontSize = styleConfig;
                } else if (styleEnum == 'TextColor') {
                    spanEl.style.color = styleConfig;
                }
            }
        });
    });
};

const _changeHeading = (text = 'Select your bank') => {
    document.querySelector('.institution-modal-header h2').innerHTML = text;
};

const _clearSearchFormInput = () => {
    const input = document.querySelector('.institution-search-input');
    if (input.value.length > 0) {
        input.value = '';
    }
};

const _appendArrowRight = (child) => {
    let arrowImg = document.createElement('img');
    arrowImg.src =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTYgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgUHJvIDYuMS4xIGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIENvcHlyaWdodCAyMDIyIEZvbnRpY29ucywgSW5jLiAtLT48cGF0aCBkPSJNNjQgNDQ4Yy04LjE4OCAwLTE2LjM4LTMuMTI1LTIyLjYyLTkuMzc1Yy0xMi41LTEyLjUtMTIuNS0zMi43NSAwLTQ1LjI1TDE3OC44IDI1Nkw0MS4zOCAxMTguNmMtMTIuNS0xMi41LTEyLjUtMzIuNzUgMC00NS4yNXMzMi43NS0xMi41IDQ1LjI1IDBsMTYwIDE2MGMxMi41IDEyLjUgMTIuNSAzMi43NSAwIDQ1LjI1bC0xNjAgMTYwQzgwLjM4IDQ0NC45IDcyLjE5IDQ0OCA2NCA0NDh6Ii8+PC9zdmc+';
    arrowImg.alt = 'arrow image';
    arrowImg.className = 'ob-arrow-right';
    child.appendChild(arrowImg);
};

const _addBackArrow = ({visible}) => {
    const arrow = document.querySelector('.institution-arrow-block');
    if (arrow) {
        arrow.style.display = 'flex';
        return arrow;
    }

    const arrowDiv = document.createElement('div');
    arrowDiv.className = 'institution-arrow-block ';

    const img = document.createElement('img');
    img.src =
        'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMjAgNTEyIj48IS0tIEZvbnQgQXdlc29tZSBQcm8gNS4xNS40IGJ5IEBmb250YXdlc29tZSAtIGh0dHBzOi8vZm9udGF3ZXNvbWUuY29tIExpY2Vuc2UgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbS9saWNlbnNlIChDb21tZXJjaWFsIExpY2Vuc2UpIC0tPjxwYXRoIGQ9Ik0zNC41MiAyMzkuMDNMMjI4Ljg3IDQ0LjY5YzkuMzctOS4zNyAyNC41Ny05LjM3IDMzLjk0IDBsMjIuNjcgMjIuNjdjOS4zNiA5LjM2IDkuMzcgMjQuNTIuMDQgMzMuOUwxMzEuNDkgMjU2bDE1NC4wMiAxNTQuNzVjOS4zNCA5LjM4IDkuMzIgMjQuNTQtLjA0IDMzLjlsLTIyLjY3IDIyLjY3Yy05LjM3IDkuMzctMjQuNTcgOS4zNy0zMy45NCAwTDM0LjUyIDI3Mi45N2MtOS4zNy05LjM3LTkuMzctMjQuNTcgMC0zMy45NHoiLz48L3N2Zz4=';
    img.className = 'ob-left-arrow';
    img.alt = 'left arrow image';
    arrowDiv.appendChild(img);

    const link = document.createElement('a');
    link.href = '#institution-modal-content';
    link.innerText = 'Go back';
    arrowDiv.appendChild(link);

    if (!visible) arrowDiv.style.display = 'none';

    obInstitutionModalHeader.prepend(arrowDiv);
    return arrowDiv;
};

const _createCloseIcon = () => {
    const close = document.createElement('img');
    close.src =
        'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxMiAxMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjg1IDEwLjQ0QzExLjk0NDYgMTAuNTMzOSAxMS45OTc5IDEwLjY2MTcgMTEuOTk3OSAxMC43OTVDMTEuOTk3OSAxMC45MjgzIDExLjk0NDYgMTEuMDU2MSAxMS44NSAxMS4xNUwxMS4xNSAxMS44NUMxMS4wNTYxIDExLjk0NDcgMTAuOTI4MyAxMS45OTc5IDEwLjc5NSAxMS45OTc5QzEwLjY2MTcgMTEuOTk3OSAxMC41MzM5IDExLjk0NDcgMTAuNDQgMTEuODVMNS45OTk5NyA3LjQxMDAxTDEuNTU5OTcgMTEuODVDMS40NjYwOSAxMS45NDQ3IDEuMzM4MjkgMTEuOTk3OSAxLjIwNDk3IDExLjk5NzlDMS4wNzE2NiAxMS45OTc5IDAuOTQzODU4IDExLjk0NDcgMC44NDk5NzQgMTEuODVMMC4xNDk5NzQgMTEuMTVDMC4wNTUzMTggMTEuMDU2MSAwLjAwMjA3NTIgMTAuOTI4MyAwLjAwMjA3NTIgMTAuNzk1QzAuMDAyMDc1MiAxMC42NjE3IDAuMDU1MzE4IDEwLjUzMzkgMC4xNDk5NzQgMTAuNDRMNC41ODk5NyA2TDAuMTQ5OTc0IDEuNTZDMC4wNTUzMTggMS40NjYxMiAwLjAwMjA3NTIgMS4zMzgzMiAwLjAwMjA3NTIgMS4yMDVDMC4wMDIwNzUyIDEuMDcxNjkgMC4wNTUzMTggMC45NDM4ODggMC4xNDk5NzQgMC44NTAwMDVMMC44NDk5NzQgMC4xNTAwMDVDMC45NDM4NTggMC4wNTUzNDg2IDEuMDcxNjYgMC4wMDIxMDU3MSAxLjIwNDk3IDAuMDAyMTA1NzFDMS4zMzgyOSAwLjAwMjEwNTcxIDEuNDY2MDkgMC4wNTUzNDg2IDEuNTU5OTcgMC4xNTAwMDVMNS45OTk5NyA0LjU5TDEwLjQ0IDAuMTUwMDA1QzEwLjUzMzkgMC4wNTUzNDg2IDEwLjY2MTcgMC4wMDIxMDU3MSAxMC43OTUgMC4wMDIxMDU3MUMxMC45MjgzIDAuMDAyMTA1NzEgMTEuMDU2MSAwLjA1NTM0ODYgMTEuMTUgMC4xNTAwMDVMMTEuODUgMC44NTAwMDVDMTEuOTQ0NiAwLjk0Mzg4OCAxMS45OTc5IDEuMDcxNjkgMTEuOTk3OSAxLjIwNUMxMS45OTc5IDEuMzM4MzIgMTEuOTQ0NiAxLjQ2NjEyIDExLjg1IDEuNTZMNy40MDk5NyA2TDExLjg1IDEwLjQ0WiIgZmlsbD0iIzQ5NTU1NSIvPgo8L3N2Zz4K';
    close.className = 'institution-modal-close';
    obInstitutionModalHeader.prepend(close);
    return close;
};

/** Utils **/

const _getAllUniqueCountries = (institutions) => {
    let arrCountries = [];
    institutions.forEach((aspsp) => {
        arrCountries.push(...aspsp.countries);
    });
    let uniqueCountries = [...new Set(arrCountries)];
    return uniqueCountries.sort((a, b) => a.localeCompare(b));
};

const _filterByCountry = (institutions, country) => {
    return institutions.filter((inst) => inst.countries.includes(country));
};

const _clearAllInnerNodes = () => {
    const node = document.querySelectorAll('.ob-institution');
    if (!node) return;
    Array.from(node).forEach((el) => {
        el.remove();
    });
};

const _getCountryFromISO = (country) => {
    try {
        let languageNames = new Intl.DisplayNames(['en'], {type: 'region'});
        return languageNames.of(country);
    } catch (err) {
        return country;
    }
};

const _truncateText = (text) => {
    const TEXT_LENGTH = 450;
    if (text.length > TEXT_LENGTH) {
        return text.substring(0, TEXT_LENGTH) + '...';
    }

    return text;
};

export class NordigenBankUI {
	constructor(key, identifier, config) {
		// eslint-disable-next-line no-constructor-return
		return institutionSelector(key, identifier, config);
	}
}

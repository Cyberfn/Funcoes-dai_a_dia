/**
 * Facilita a atualização de <select> com novas opções.
 * @param {string} selector
 * @param {object} options 
 */
function preencher_lista(selector, options) {
    $(selector).empty();
    $.each(options, function(index, value) {
        $(selector).append($('<option>', { value: value, text: value }));
    });
}

preencher_lista('#lista', ['Opção 1', 'Opção 2', 'Opção 3']);

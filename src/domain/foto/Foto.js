export default class Foto {

    constructor(titulo='', url='', descricao='') {

        this._titulo = titulo;
        this._url = url;
        this._descricao = descricao;
    }

    get titulo() {
        return this._titulo;
    }

    set titulo(titulo) {
        this._titulo = titulo;
    }

    get url() {
        return this._url;
    }

    set url(url) {
        this._url = url;
    }

    get descricao() {
        return this._descricao;
    }

    set descricao(descricao) {
        this._descricao = descricao;
    }
}
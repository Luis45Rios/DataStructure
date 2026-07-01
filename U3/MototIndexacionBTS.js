class NodoBusqueda {
    constructor(keyword, urlCache) {
        this.keyword = keyword;
        this.urlCache = urlCache;
        this.visitar = 1;
        this.izquierdo = null;
        this.derecho = null;
    }
}

class MotorIndexacionBST {
    constructor() {
        this.raiz = null;
    }

    indexar(keyword, urlCache) {
        const nuevoNodo = new NodoBusqueda(keyword, urlCache);

        if (this.raiz === null) {
            this.raiz = nuevoNodo;
            return;
        }

        let actual = this.raiz;

        while (true) {
            if (keyword === actual.keyword) {
                actual.visitar++;
                return;
            } else if (keyword < actual.keyword) {
                if (actual.izquierdo === null) {
                    actual.izquierdo = nuevoNodo;
                    return;
                }
                actual = actual.izquierdo;
            } else {
                if (actual.derecho === null) {
                    actual.derecho = nuevoNodo;
                    return;
                }
                actual = actual.derecho
            }
        }
    }
}

const motor = new MotorIndexacionBST();

motor.indexar("google", "https://www.google.com");
motor.indexar("youtube", "https://www.youtube.com");
motor.indexar("facebook", "https://www.facebook.com");
motor.indexar("amazon", "https://www.amazon.com");
motor.indexar("chatgpt", "https://chat.openai.com");
motor.indexar("wikipedia", "https://www.wikipedia.org");
motor.indexar("netflix", "https://www.netflix.com");
motor.indexar("github", "https://github.com");

// Repetido para probar el contador de visitas
motor.indexar("google", "https://www.google.com");

console.log(motor);
import TERRARIOS from "../datos/TERRARIOS.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            //     if (bool) {
            resolve(TERRARIOS)
            //     } else {
            //         reject ("petitorio anulado. Disculpe")
            //     }
        }, 1500)
    })
}

export const productos = []

export const mFetch = (pid) => new Promise((res) => {
    setTimeout(() => {
        res(pid ? productos.find(productos => productos.id === pid) : productos)
    }, 1000)
})


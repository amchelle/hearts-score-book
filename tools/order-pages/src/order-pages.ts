/**
 * order-pages
 * Order pages for double-sided flip-book binding
 */


const startPage = 1
const offset = 2 // strictly added to startPage

function* pageGenerator(startPage: number) {
    let current = startPage
    while (true) {
        yield [offset + current, offset + current + 2, offset + current + 3, offset + current + 1]
        current += 4
    }
    return []
}

const pages = pageGenerator(startPage)

let page = -1
let order: number[] = []

while(page < 100 + offset) {
    order = order.concat(pages.next().value)
    page = Math.max(...order)
}
console.log(order)

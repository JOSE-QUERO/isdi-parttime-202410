console.log('Hello, DOM!')

function printDOMTree() {
    //TODO
    for (var i = 0; i < document.length; i++) {
        var documentChild = document.childNodes[i]

        if (documentChild instanceof DocumentType) continue

        console.log(documentChild.name)
    }
}

printDOMTree()

/*
html
    head
        meta
        meta
        title
    body
        h1
        p
        h2
        ul
            li
            li
            li
        h2
        table
            tr
                th
                th
                th
            tr
                td
                td
                td
            tr
                td
                td
                td
            tr
                td
                td
                td
        script
*/
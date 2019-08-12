const library = [
    {dewey: 1, titles: ['Test Title']},
    {dewey: 2, titles: ['Test Title1']},
    {dewey: 3, titles: ['Test Title2']},
    {dewey: 4, titles: ['Test Title3', 'test Title8']},
    {dewey: 5, titles: ['Test Title4']},
    {dewey: 6, titles: ['Test Title5']},
    {dewey: 7, titles: ['Test Title6']},
    {dewey: 8, titles: ['Test Title7']},

]

console.log(deweySearch(library, 4, 'test Title8'));

function deweySearch(library, dewey, title, start=0, end) {
    end = end === undefined ? library.length : end;

    const middle = Math.floor((start+end)/2);

    if (library[middle].dewey === dewey) {
        let currentTitle;
        let i = 0;
        while (currentTitle !== title) {

            if (library[middle].titles.length < i) {
                return 'book is checked out';
            }
            else if (library[middle].titles[i] === title) {
                currentTitle = library[middle].titles[i]
            }
            else {
                i++;
            }
        }
        return `${currentTitle} found`;
    }
    else if(library[middle].dewey > dewey) {
        end = middle -1;
        return deweySearch(library, dewey, title, start, end);
    }
    
    else if (library[middle].dewey < dewey) {
        start = middle +1;
        return deweySearch(library, dewey, title, start, end);
    }
}
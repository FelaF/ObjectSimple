function Book(title,author,pages,hRead){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = hRead
    this.info = function(hRead){
        if (this.read == true){
            return this.title + " by " + this.author + " is " + this.pages + " pages has been read";
        }
        else if (this.read == false) {
            return this.title + " by " + this.author + " is " + this.pages + " pages has not been read";
        }
    }};
const TheLightningThief = new Book("The Lightning Thief","Rick Riordan", 400, true)

console.log(TheLightningThief.info())

const TheCatintheHat = new Book("The Cat in the Hat", "Dr.Suess", 50, false)

console.log(TheCatintheHat.info())

console.log(Object.getPrototypeOf(TheCatintheHat) === Book.prototype)
console.log(Object.getPrototypeOf(TheLightningThief) === Book.prototype)
console.log(TheCatintheHat.valueOf())

let left = document.getElementById("left");

let myLibrary = [];

function Book (name,author,read,pages,x) {
    this.name = name
    this.author= author
    this.read = read
    this.pages = pages
    this.x = 'X'
    this.info = function() {
      return `The book ${this.name} written by ${this.author} and have ${this.pages} pages. You read ${this.read} pages`
}
}

const a = new Book('steve', 'X',2,3)


addBookToLibrary(a);


function addBookToLibrary(books) {
  myLibrary.push(books);
  addToPage(myLibrary);
}

function hideLeft(){
  left.textContent='';
}
function addToPage(myLibrary) {
    let div = document.createElement("div");
    let name= document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    let read = document.createElement("div");
    let x = document.createElement("button");
    name.id = 'name';
    div.classList.add('card');
    author.id = 'author';
    pages.id = 'pages';
    read.id = 'read';
    x.classList.add("x");
    let count=0;
    for(let i=0;i<myLibrary.length;i++){
    div.id = count;
    x.dataset.number = count;
    x.addEventListener("click", remove);
    x.innerHTML = 'X';
    name.innerHTML = myLibrary[i].name;
    author.innerHTML = myLibrary[i].author;
    pages.innerHTML = myLibrary[i].pages;
    read.innerHTML = myLibrary[i].read;
    left.appendChild(div);
    div.appendChild(x);
    div.appendChild(read);
    div.appendChild(name);
    div.appendChild(author);
    div.appendChild(pages);
    div.appendChild(read);
    count++;
    }
  }

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

document.getElementById("submit").addEventListener("click", function(evt){
    evt.preventDefault();
    let names = document.getElementById("names");
    let authors = document.getElementById("authors");
    let pagess = document.getElementById("pagess");
    let reads = document.getElementById("reads");
    let x = document.getElementsByClassName("x");
    const book = new Book (names.value,authors.value,pagess.value,reads.value);
    addBookToLibrary(book);
    names.value = '';
    authors.value = '';
    pagess.value= '';
    reads.value= '';
    document.getElementById("myForm").style.display = "none";
   });


 function remove(index){
 
  myLibrary.splice(index, 1)
  let a= index.target.getAttribute('data-number');
  const eli = document.getElementById( a);
  eli.remove();

 }

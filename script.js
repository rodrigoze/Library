let left = document.getElementById("left");

let myLibrary = [];

function Book (name,author,read,pages,toggle,x) {
    this.name = name
    this.author= author
    this.read = read
    this.pages = pages
    this.x = 'X'
    this.toggle=toggle
 
}

const a = new Book('steve', 'X',2,3,true)


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
    let t = document.createElement("INPUT");
    t.setAttribute("type", "checkbox");
    name.id = 'name';
    div.classList.add('card');
    author.id = 'author';
    pages.id = 'pages';
    read.id = 'read';
    t.id='checko';
    x.classList.add("x");
    let count=0;
    for(let i=0;i<myLibrary.length;i++){
    div.id = count;
    x.dataset.number = count;
    t.dataset.number = count;
    x.addEventListener("click", remove);
    t.addEventListener("change",chango)
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
    div.appendChild(t);
    if(myLibrary[i].toggle === true)
    t.checked = true;
    else
    t.checked=false;
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
    let b= document.getElementById("check").checked;
    const book = new Book (names.value,authors.value,pagess.value,reads.value,b);
    addBookToLibrary(book);
    names.value = '';
    authors.value = '';
    pagess.value= '';
    reads.value= '';
    document.getElementById("check").checked = false;
    document.getElementById("myForm").style.display = "none";
   });


 function remove(index){

  myLibrary.splice(index, 1)
  let a= index.target.getAttribute('data-number');
  const eli = document.getElementById(a);
  eli.remove();

 }

 function chango(indexo){
  let b= indexo.target.getAttribute('data-number');
  let elis = document.getElementById(b).firstChild.nextSibling.innerHTML;
  const index = myLibrary.map(object => object.name).indexOf(elis);
  if(indexo.target.checked===true)
  myLibrary[index].toggle=true;
  else
  myLibrary[index].toggle=false;
}
 
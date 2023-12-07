const Books = [
    {title: "Book One", genre: "Fiction", Publish: 1981, edition: 2004},
    {title: "Book Two", genre: "Non-Fiction", Publish: 1992, edition: 2008},
    {title: "Book Three", genre: "History", Publish: 1889, edition: 2014},
    {title: "Book Four", genre: "Sci-fiction", Publish: 1999, edition: 2007},
    {title: "Book Five", genre: "History", Publish: 1987, edition: 2000},
    {title: "Book Six", genre: "Comics", Publish: 1978, edition: 2014},
    {title: "Book Seven", genre: "Polity", Publish: 1948, edition: 2019},
] 

// const userBook = Books.filter( (bk) => {
//     return bk.genre === "History"});

// let userBook = Books.filter( (bk) => bk.genre === "Non-Fiction");
//  userBook = Books.filter( (bk) => (bk.edition > 2004));
//  userBook = Books.filter((bk) => bk.Publish == "1992");

 let userBook = Books.filter((bk) =>{
  return bk.genre ==="Non-Fiction" && bk.Publish >=1981
})
// console.log(userBook);


//  let newArr = [];
// let userBook = Books.forEach((bk) =>{
//    if(bk.title == "Book Five"){
//      newArr.push(bk);
//    }
// });


// console.log(newArr);
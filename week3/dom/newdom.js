

//1 declaring an array that contains 10 strings.
var bookId = ["forrest_gump",
    "great_expectations ",
    "the_monk_who_sold_his_monk ",
    "the_amsterdam_connection ",
    "the_little_prince ",
    "the_secret ",
    "the_life_of_frederick_douglass ",
    "love_and_tolerance",
    "pearls_of_wisdom ",
    "twelve_years_as_a_slave "
    
]
//4 object contains information for each book
    var mybooks = [
        { title: "forrest gump", language: "english  ", author: "Winston Groom ", id:"forrest_gump"},
        { title: "great expectations ", language: "english   ", author: "Charles Dickens ", id:"great_expectations" },
        { title: "the monk who sold his monk ", language: "english", author: "Robin Sharma", id:"the_monk_who_sold_his_monk" },
        { title: "the amsterdam connection ", language: "english ", author: "Sue Leather", id:"the_amsterdam_connection"},
        { title: "the little prince ", language: "english ", author: "Antonia de Saint", id:"the_little_prince"},
        { title: "the secret ", language: "english ", author: "Rhonda Byrne", id:"the_secret"},
        { title: "the life of frederick douglass ", language: "english ", author: "Frederick Douglass", id:"the_life_of_frederick_douglass" },
        { title: "love and tolerance", language: "english ", author: "Fethullah Gulen", id:"love_and_tolerance" },
        { title: "pearls of wisdom ", language: "english ", author: "Fethullah Gulen", id:"pearls_of_wisdom"},
        { title: "twelve years as a slave ", language: "english ", author: "Solomon Northup ", id:"twelve_years_as_a_slave"}
];


// 3 generate a ul with li elements for each book ID

// function generateId() {
//     var ul = document.createElement('ul');
//     for (let i = 0; i < bookId.length; i++) {
//         var id = bookId[i];
//         var li = document.createElement('li');
//         li.setAttribute('id', id);
//         ul.appendChild(li);


//     }
//     console.log(ul);
//     //document.body.appendChild(ul);
// }
// generateId();




    var covers = {
        forrest_gump: "./img/Forrest gump.jpg",
        great_expectations: "./img/great expectations.jpg",
        the_monk_who_sold_his_monk: "./img/The monk who sold his car.jpg",
        the_amsterdam_connection: "./img/amsterdam connection.jpg",
        the_little_prince: "./img/little prince.jpg",
        the_secret: "./img/TheSecret.jpg",
        the_life_of_frederick_douglass: "./img/the life of frederick douglass.jpg",
        love_and_tolerance: "./img/love and tolerance.jpg",
        pearls_of_wisdom: "./img/pearls of wisdom.jpg",
        twelve_years_as_a_slave: "./img/twelve-years-a-slave.jpg"

    };
    
function myfunction() {
 
   
        let container = document.createElement("div");
        document.body.appendChild(container);

    for (var i = 0; i < mybooks.length; i++) {
        var id = mybooks[i].id;
        
        var ul = document.createElement('ul');
        container.appendChild(ul);

        //li
        var li = document.createElement('li')
        
        ul.appendChild(li);
        

        //image
        var img = document.createElement("img")
        img.textContent = covers[i];
        li.appendChild(img);


          //head
        var head = document.createElement("h1");
        head.textContent = mybooks[i].title;
        li.appendChild(head);

          //paragraph
        var para = document.createElement("p");
        para.textContent = "language :" + mybooks[i].language;
        li.appendChild(para);

   

        //span
        var span = document.createElement("span");
        span.textContent = "by :" + mybooks[i].author;
        li.appendChild(span);


        for (let key of Object.keys(covers)) {
            let valueOfKeys = covers[key];
            //console.log(valueOfKeys);
            //console.log(key);
            if (id == key) {
                img.src = valueOfKeys;
                img.alt = key;
            }
        
        }
    }
    console.log(ul);
    document.body.appendChild(ul);

}
     myfunction();
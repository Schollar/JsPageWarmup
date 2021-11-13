page_container = document.getElementById("page_container");

function add_cards() {

    var cards = [{
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN00WFc7R-SdgafpQHhi63P48EAVMakaaPg&usqp=CAU",
        title: "Title 1"
    },
    {
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN00WFc7R-SdgafpQHhi63P48EAVMakaaPg&usqp=CAU",
        title: "Title 2"
    },
    {
        img_src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAN00WFc7R-SdgafpQHhi63P48EAVMakaaPg&usqp=CAU",
        title: "Title 3"
    }
    ];


    for (var i = 0; i < cards.length; i++) {
        card_section = document.getElementById("card_section");

        article_tag = document.createElement('a')

        article_tag.setAttribute('class', 'card_container');
        article_tag.setAttribute('onclick', 'remove_card(this)')

        card_image = document.createElement('img');

        card_image.setAttribute('src', cards[i].img_src);

        card_image.setAttribute('class', 'images');

        article_tag.appendChild(card_image);

        card_title = document.createElement('h1');

        card_title.innerText = cards[i].title;

        article_tag.appendChild(card_title);

        card_section.appendChild(article_tag);
    }

};

function remove_card(e) {
    var new_p_tag = document.createElement('p');
    new_p_tag.innerText = "I am a new P Tag";
    e.appendChild(new_p_tag);
}

// document.addEventListener('keyup', event => {
//     if (event.code === 'Space') {
//         // page_container.style.backgroundColor = "pink";
//         add_cards();
//     }
// })


// var images = document.getElementsByClassName("images");
// var link = document.getElementById("link");
// var wording = document.getElementById("wording");

// images.style = "width: '100px' 'height: 100px'"
// wording.innerHTML = "I've been injected!";
// link.style.color = "green";

// var headings = document.getElementsByClassName("heading");

// for (var i = 0; i < headings.length; i++) {
//     headings[i].innerText = "Haha I am random!"
// }
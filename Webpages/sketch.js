// start logic for slideshow
let sliders; //array that stores the images used in the automatic slideshow
let button; //button that, when pressed, uses the Superhero api to access information about characters inputted into the input box
let p; 
let box; //the input box
let url; //the first part of the api query, add the name of the character to this and you have your complete api query url

function setup() {
    // slideshow logic
    sliders = ['cap_1.jpg', 'spidermen.jpg', 'cap_2.jpg', 'ddevil_1.jpg', 'miles_morales.jpg', 'kingdom come.jpg'];
    i = 1;
    setTimeout(setInterval(changeImg, 5000),5000);
    
    // search box logic
    button = select("#search");
    button.mousePressed(makeCall);
    box = select("#box");

    p2 = createP('SEARCH TIPS');
    p2.parent('#search-box-area');
    p2.class('searchBoxInfo');
    
    p2 = createP('You can search for info for OVER 700 CHARACTERS!!');
    p2.parent('#search-box-area');
    p2.class('searchBoxInfo');

    p = createP('Search for the characters by codenames, e.g: search for Batman not Bruce Wayne');
    p.parent('#search-box-area');
    p.class('searchBoxInfo');

    p1 = createP('When searching for a two-worded name, input the name as two seperate words. E.g: Wonder Woman, not wonder-woman and Black Lightning, not Black-Lighting. However, if search does not return anything, then try merging the words e.g: Batman, not Bat man. Finally, if that doesn\'t work, try merging both words with a dash, e.g: Spider-man not Spider Man or Spiderman');
    p1.parent('#search-box-area');
    p1.class('searchBoxInfo');

    p2 = createP('Please click on the search button as opposed to hitting enter in the input field and not that the search box is not case sensitive:)');
    p2.parent('#search-box-area');
    p2.class('searchBoxInfo');


    url = 'https://superheroapi.com/api.php/1188882908202955/search/';

   /* // thumbnail images hover functions
    document.getElementById("superman-thumbnail").onmouseover = function() {
        document.getElementById("superman-thumbnail").setAttribute(
            'src', 'clark.jpg'
            )}*/
} 

const changeImg = () => {
    if(i >= sliders.length){
        i = 0
    } else {
    document.getElementById('first-slide').setAttribute('src', sliders[i])
    i++;
    }

}


const makeCall = () => {
    let inp = box.value();
    let final_url = url + inp;
    loadJSON(final_url, getCharcater);
}





const getCharcater = (character) => {
    for (let i = 0; i < character.results.length; i++) {
        for(const j in character.results[i]) {
            if (j === 'biography') {
                let z = document.getElementById('result-sec')
                

                 //images
                let m = document.createElement('IMG');
                m.className = 'place-holder'
                m.setAttribute('src', character.results[i]['image']['url']);
                z.appendChild(m);

                // code names
                let n = document.createElement('p');
                let o = document.createTextNode(`Code Name: ${character.results[i]['name']}`);
                n.appendChild(o);
                z.appendChild(n);
                n.className = 'result-info'

                // for full names
                let x = document.createElement('p');
                let y = document.createTextNode(`Real Name: ${character.results[i]['biography']['full-name']}`);
                x.appendChild(y);
                z.appendChild(x);
                x.className = 'result-info'

               // for aliases
                let a = document.createElement('p');
                let b = document.createTextNode(`Known Aliases: ${character.results[i]['biography']['aliases']}`);
                a.appendChild(b);
                z.appendChild(a);
                a.className = 'result-info'

                // place of birth
                let d = document.createElement('p');
                let e = document.createTextNode(`Place of Birth: ${character.results[i]['biography']['place-of-birth']}`);
                d.appendChild(e);
                z.appendChild(d);
                d.className = 'result-info'

                // first appearance
                let g = document.createElement('p');
                let h = document.createTextNode(`First Appearance: ${character.results[i]['biography']['first-appearance']}`);
                g.appendChild(h);
                z.appendChild(g);
                g.className = 'result-info'

                // publisher
                let k = document.createElement('p');
                let l = document.createTextNode(`Publisher: ${character.results[i]['biography']['publisher']}`);
                k.appendChild(l);
                z.appendChild(k);
                k.className = 'result-info'             


            }
                    //images 
            if (j === 'image') {
                //let m = document.createElement('img');
                //m.className = 'place-holder'
                //m.setAttribute('src', character.results[i]['image']['url']);
                //z.appendChild(m);
                

            }

            
        }
    
}

// end slideshow logic

}
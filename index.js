var bigbang = []


async function getapi(url, seasonnum, epinum) {

        const response = await fetch(url);

        var data = await response.json();
        bigbang = data
        var output;

        let theory1 = (seasonnum, epinum, bigbang) => {

                let seasonin = parseInt(seasonnum)
                let epiin = parseInt(epinum)
                let len1 = bigbang._embedded.episodes.length

                for (let c = 0; c <= len1; c++) {
                        if (bigbang._embedded.episodes[c].season == seasonin && bigbang._embedded.episodes[c].number == epiin) {
                                output = "true";

                                var visibil = document.getElementById("cont");
                                if (visibil.style.visibility === 'hidden') {
                                        visibil.style.visibility = 'visible';
                                }

                                let card = document.createElement("div");
                                let cardtitle = document.createElement("h3");
                                let cardtext = document.createElement("p");
                                cardtext.className = "card-text"
                                cardtext.innerHTML = bigbang._embedded.episodes[c].summary
                                cardtitle.className = "card-title"
                                cardtitle.innerHTML = bigbang._embedded.episodes[c].name
                                let cardbody = document.createElement("div");
                                cardbody.className = "card-body"
                                card.className = "card"
                                card.style.width = "18rem"
                                card.style.padding = "20pxs"
                                let cardimg = document.createElement("img");
                                cardimg.className = "card-img-top";
                                cardimg.src = bigbang._embedded.episodes[c].image.original;
                                cardbody.append(cardtitle)
                                cardbody.append(cardtext)


                                card.appendChild(cardimg);
                                card.append(cardbody);
                                visibil.append(card)
                                
                        }
                }
                console.log(output)
        }
        
        theory1(seasonnum, epinum, bigbang)



}

async function getapi1(url, epinum) {
        var episodeid = []
        episodeid = epinum.split(",");


        const response = await fetch(url);

        var data = await response.json();
        bigbang = data
        let output = "false";
        let theory2 = (eid, bigbang) => {
                let len2 = bigbang._embedded.episodes.length;

                epobj =
                {
                        len2,
                        eid,
                        epmethod() {
                                for (let c2 = 0; c2 < len2; c2++) {

                                        if (bigbang._embedded.episodes[c2].id == eid) {
                                                output = "true";

                                                return bigbang._embedded.episodes[c2];
                                        }
                                }

                        }

                }

                let retarray = epobj.epmethod();
                if (output != "true") {
                        alert("Enter valid ID!")
                }
                let epinfo = [];
                epinfo.push(retarray);
                var visibil = document.getElementById("cont");
                if (visibil.style.visibility === 'hidden') {
                        visibil.style.visibility = 'visible';
                }
                for (i of epinfo) {

                        let card = document.createElement("div");
                        let cardtitle = document.createElement("h3");
                        let cardtext = document.createElement("p");
                        cardtext.className = "card-text"
                        cardtext.innerHTML = i.summary
                        cardtitle.className = "card-title"
                        cardtitle.innerHTML = i.name
                        let cardbody = document.createElement("div");
                        cardbody.className = "card-body"
                        card.className = "card"
                        card.style.width = "18rem"
                        card.style.padding = "20pxs"
                        let cardimg = document.createElement("img");
                        cardimg.className = "card-img-top";
                        cardimg.src = i.image.original;
                        cardbody.append(cardtitle)
                        cardbody.append(cardtext)


                        card.appendChild(cardimg);
                        card.append(cardbody);
                        visibil.append(card)

                }


        }
        console.log(output)




        for (let i = 0; i < episodeid.length; i++) {
                theory2(episodeid[i], bigbang)
        }


}
async function getapi2(url, epname) {

        const response = await fetch(url);

        var data = await response.json();
        bigbang = data
        let len3 = bigbang._embedded.episodes.length;
        let itemname = []

        for (let i = 0; i < len3; i++) {
                itemname[i] = bigbang._embedded.episodes[i].name

        }



        let theory3 = (epname, bigbang) => {

                let output;
                var visibil = document.getElementById("cont");
                if (visibil.style.visibility === 'hidden') {
                        visibil.style.visibility = 'visible';
                }
                for (let c3 = 0; c3 < len3; c3++) {

                        let str = bigbang._embedded.episodes[c3].name.toString();
                        //console.log(str)
                        if (str.toUpperCase() === epname.toUpperCase()) {
                                output = "true"
                                let card = document.createElement("div");
                                let cardtitle = document.createElement("h3");
                                let cardtext = document.createElement("p");
                                cardtext.className = "card-text"
                                cardtext.innerHTML = bigbang._embedded.episodes[c3].summary
                                cardtitle.className = "card-title"
                                cardtitle.innerHTML = bigbang._embedded.episodes[c3].name
                                let cardbody = document.createElement("div");
                                cardbody.className = "card-body"
                                card.className = "card"
                                card.style.width = "18rem"
                                card.style.padding = "20pxs"
                                let cardimg = document.createElement("img");
                                cardimg.className = "card-img-top";
                                cardimg.src = bigbang._embedded.episodes[c3].image.original;
                                cardbody.append(cardtitle)
                                cardbody.append(cardtext)


                                card.appendChild(cardimg);
                                card.append(cardbody);
                                visibil.append(card);


                        }
                }
                if (output != "true") {
                        alert("enter correct value")
                }


        }
        theory3(epname, bigbang)
}

function type1() {
        let season = document.getElementById("ses").value;
        let episode = document.getElementById("epi").value;
        getapi('bigbang.json', season, episode)
}

function type2() {
        let episode_id = document.getElementById("epid").value;
        getapi1('bigbang.json', episode_id)
}
function type3() {
        let episode_name = document.getElementById("ename").value;
        getapi2('bigbang.json', episode_name)
}




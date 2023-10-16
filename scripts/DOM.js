const frontEndJobs = [
    {
        id:1,
        title: "Desenvolvedor Frontend",
        descrription:"Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000",
        modality: ["Full Time","Remote"]
    },
    {
        id:2,
        title: "Frontend Developer",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard ",
        modality: ["Full Time","Remote"]
    },
    {
        id:3,
        title: "Desenvolvedor Frontend",
        descrription:"The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures,",
        modality: ["Full Time","Presencial"]
    },
    {
        id:4,
        title: "Programador Frontend",
        descrription:"On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms",
        modality: ["Full Time","Remote"]
    },
    {
        id:5,
        title: "UI Developer",
        descrription:"But in certain circumstances and owing to the claims of duty or the obligations",
        modality: ["Full Time","Remote"]
    },
    {
        id:6,
        title: "Desenvolvedor Frontend",
        descrription:"All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary",
        modality: ["Full Time","Remote"]
    },
]
const backEndJobs = [
    {
        id:1,
        title: "Desenvolvedor Backend",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
        modality: ["Full Time","Remote"]
    },
    {
        id:2,
        title: "Desenvolvedor Backend",
        descrription:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
        modality: ["Full Time","Presencial"]
    },
    {
        id:3,
        title: "Desenvolvedor Node",
        descrription:"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from ",
        modality: ["Full Time","Remote"]
    },
    {
        id:4,
        title: "Dev Javascript Backend",
        descrription:"Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
        modality: ["Full Time","Remote"]
    },
    {
        id:5,
        title: "Desenvolvedor Java",
        descrription:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
        modality: ["Full Time","Remote"]
    },
    {
        id:6,
        title: "Backend Developer",
        descrription:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur",
        modality: ["Full Time","Remote"]
    },
]

const frontEnd = document.getElementById("frontend__container");
const backEnd = document.getElementById("backend__container");


  function createFrontSection(){
    frontEndJobs.forEach((element) => {
        frontEnd.appendChild(createCards(element));
    })
}
function createBackSection(){
    backEndJobs.forEach((element) => {
        backEnd.appendChild(createCards(element));
    })
}
 

createFrontSection();
createBackSection();




function createCards(database) {
    
    let li = document.createElement("li");
    let div = document.createElement("div");
    let cardLogo = document.createElement("h1");
    let cardTitle = document.createElement("h2");
    let div2 = document.createElement("div");
    let text = document.createElement("p");
    let div3 = document.createElement("div");
    let h3 = document.createElement("h3");
    let h3_2 = document.createElement("h3");
   
    li.classList.add("cards__li");
    div.classList.add("logo__container");
    cardLogo.classList.add("logo__company");
    cardTitle.classList.add("job__title");
    div2.classList.add("description__container");
    text.classList.add("description");
    div3.classList.add("details__container");
    h3.classList.add("details__1");
    h3_2.classList.add("details__2");

    li.id = "cards__li";
    div.id = "logo__container";
    cardLogo.id = "logo__company";
    div2.id = "description__container";
    text.id = "description";
    div3.id = "details__container";
    h3.id = "details__1";
    h3_2.id = "details__2";

    cardLogo.innerText = "G";
    cardTitle.innerHTML = database.title;
    text.innerHTML = database.descrription;
    h3.innerHTML = database.modality[0];
    h3_2.innerHTML = database.modality[1];

    div.appendChild(cardLogo);
    div.appendChild(cardTitle);

    div2.appendChild(text);

    div3.appendChild(h3);
    div3.appendChild(h3_2);

    li.append(div, div2, div3);

    return li;
}


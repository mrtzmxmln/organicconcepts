var currentPage = sessionStorage.getItem("currentPage");

const NAVRENTAL = document.getElementById("NAVRENTAL");
const NAVDESIGN = document.getElementById("NAVDESIGN");
const NAVCONSULTING = document.getElementById("NAVCONSULTING");
const NAVEVENTS = document.getElementById("NAVEVENTS");

/* ----- check current NavLink ----- */
function checkNav() {

    switch (currentPage) {

        case "rental":
            NAVRENTAL.classList.add('navLinkActive');
            NAVDESIGN.classList.remove('navLinkActive');
            NAVCONSULTING.classList.remove('navLinkActive');
            NAVEVENTS.classList.remove('navLinkActive');
            break;

        case "design":
            NAVRENTAL.classList.remove('navLinkActive');
            NAVDESIGN.classList.add('navLinkActive');
            NAVCONSULTING.classList.remove('navLinkActive');
            NAVEVENTS.classList.remove('navLinkActive');
            break;

        case "consulting":
            NAVRENTAL.classList.remove('navLinkActive');
            NAVDESIGN.classList.remove('navLinkActive');
            NAVCONSULTING.classList.add('navLinkActive');
            NAVEVENTS.classList.remove('navLinkActive');
            break;

        case "events":
            NAVRENTAL.classList.remove('navLinkActive');
            NAVDESIGN.classList.remove('navLinkActive');
            NAVCONSULTING.classList.remove('navLinkActive');
            NAVEVENTS.classList.add('navLinkActive');
            break;

        default:
            break;
    }
}

checkNav();

function openPage(page) {

    switch (page) {

        case 'home':
            sessionStorage.setItem("currentPage", "home");
            window.open("index.html", "_self")
            break;

        case 'rental':
            sessionStorage.setItem("currentPage", "rental");
            window.open("rental.html", "_self");
            break;

        case 'design':
            sessionStorage.setItem("currentPage", "design");
            window.open("design.html", "_self");
            break;

        case 'consulting':
            sessionStorage.setItem("currentPage", "consulting");
            window.open("consulting.html", "_self");
            break;

        case 'events':
            sessionStorage.setItem("currentPage", "events");
            window.open("events.html", "_self");
            break;

        default:
            break;
    }
}

/* PERMANENT LOOP */



/* OLD STUFF

const rentalNav = document.querySelector("#RentalNav");
const navMenu = document.querySelector("#NavMenu");

console.log(rentalNav);

function navOpenRental() {
    navMenu.classList.add('open');
}
*/


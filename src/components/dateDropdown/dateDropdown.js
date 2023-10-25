import './dateDropdown.scss';
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';


//new AirDatepicker('.datepicker');
new AirDatepicker('.datepicker', {
    buttons: ['clear'],

    prevHtml: '<svg class="arrow__prev" width="17" height="18" viewBox="0 0 17 18" fill="#BC9CFF" xmlns="http://www.w3.org/2000/svg">\n' +
'<path class="arrow__prev" d="M16.1755 8.01562V9.98438H3.98801L9.56613 15.6094L8.15988 17.0156L0.144258 9L8.15988 0.984375L9.56613 2.39062L3.98801 8.01562H16.1755Z" fill="#BC9CFF"/>\n' +
'</svg>',
    nextHtml:'<svg class=" arrow__next" width="17" height="18" viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg">\n' +
        '<path d="M8.36301 0.984375L16.3786 9L8.36301 17.0156L6.95676 15.6094L12.5349 9.98438H0.347383V8.01562H12.5349L6.95676 2.39062L8.36301 0.984375Z" fill="#BC9CFF"/>\n' +
        '</svg>\n'




})
//   1

let browser = prompt('Browser')

if (browser == 'Edge') {
    alert("You've got yhe Edge!");
} else if (browser == 'Chrome' || browser || 'Firefox' && browser || 'Safari' && browser || 'Opera') {
    alert('ok we support these browsers too')
} else {
    alert('we hope that this page looks ok!')
}

//   2

let a = +prompt('a?', '');

switch (a) {
    case 0:
        alert(0);
        break;

    case 1:
        alert(1);
        break

    case 2:
    case 3:
        alert('2, 3');
        break

    default:
        break;
}

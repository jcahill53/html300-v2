let current = 0;
// const nav_links = document.links.length;
// const nav_url= document.links.href
console.log(document.links.length);
// console.log(document.links.href);


for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';
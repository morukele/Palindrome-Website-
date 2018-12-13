// let states = ["Kansas", "Nebraska", "North Dakota", "South Dakota"];
// let int = [1, 2, 35, 5, 6, 7, 8, 9];

// function sumation(elements) {
//     return elements.reduce((total, n) => total *= n);
// }

// function urlify(string) {
//     return string.toLowerCase().split(/\s+/).join("-");
// };

// //urls: Functional Version
// function functionalUrls(elements) {
//     return elements.map(function (element) {
//         return urlify(element)
//     });
// };

// function fuctionalSingles(elements) {
//     return elements.filter(element => element.split(/\s+/).length === 2);
// };

// function imperativeLengths(elements) {
//     let lenghts = [];
//     elements.forEach(element => {
//         lenghts[element] = element.length;
//     });
//     return lenghts;
// }

// function functionalLenghts(elements) {
//     return elements.reduce((lenghts, element) => {
//         lenghts[element] = element.length;
//         return lenghts;
//     }, []);
// }

// console.log(functionalUrls(states));
// console.log(fuctionalSingles(states));
// console.log(imperativeLengths(states));
// console.log(functionalLenghts(states));
// console.log(sumation(int));
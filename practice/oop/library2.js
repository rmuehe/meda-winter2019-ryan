function shouldntBeAccessed() {
    console.log(" the meaning of life");
}
var notAuthor = "Xerxes";

module.exports = {
    access : shouldntBeAccessed,
    author: notAuthor
};
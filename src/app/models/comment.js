"use strict";
var Comment = (function () {
    function Comment(name, password) {
        if (name === void 0) { name = ''; }
        if (password === void 0) { password = ''; }
        this.name = name;
        this.password = password;
    }
    Comment.prototype.send = function () {
        console.log(this.name, this.password);
    };
    return Comment;
}());
exports.Comment = Comment;
//# sourceMappingURL=comment.js.map
/**
@class Viewer
*/
function Viewer() {
    var self = this;
    this.sermons = [];

    var initSermons = function () {
        self.sermons.push("The Crisscross blessing");
        self.sermons.push("A Culture of Blessing");
        self.sermons.push("Lord Increase My Capacity");
    }
    
   

    var createSelect = function () {
        for (var idx = 0; idx < this.sermons.length; idx += 1) {
            $("#ptSermonSelect").append("<option>" + this.sermons[idx] + "</option>");
        }
    };


    Viewer.prototype.init() = function () {
        initSermons();
        createSelect();
    }
   
}
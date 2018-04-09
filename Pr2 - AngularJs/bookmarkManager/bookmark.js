angular.module('bookmarkApp', [])
    .controller('bookmarkListController', function() {
    
    //Main function to this
    var bookmarkList = this;
    
    //Pre-entered data
    bookmarkList.bookmarks = [
        {name:'www.google.com', done:false},
        {name:'www.humblebundle.com', done:false},
        {name:'www.reddit.com', done:true},
        {name:'www.youtube.com', done:false}
        ];
    
    //Adding
    bookmarkList.addBookmark = function() {
      bookmarkList.bookmarks.push({name:bookmarkList.bookmarkText, done:false});
      bookmarkList.bookmarkText = '';      
    };
    
    bookmarkList.isBookmark = function (){
        return bookmarkList.bookmarks.length > 0;
    };
        
    //Edit
    bookmarkList.editedItem = null;
    
    bookmarkList.startEditing = function (bookmark){
        bookmark.editing=true;
        bookmarkList.editedItem = bookmark;
    };
    
    bookmarkList.doneEditing = function(bookmark){
        bookmark.editing=false;
        bookmarkList.editedItem = null;
    };
    
    //Counters
    bookmarkList.remaining = function () {
        var count = 0;
        angular.forEach(bookmarkList.bookmarks, function(bookmark) {
            count += bookmark.done ? 0 : 1;
        });
        return count;
    };
    
    bookmarkList.hasDone = function () {
        return (bookmarkList.bookmarks.length != bookmarkList.remaining());
    };
    
    bookmarkList.itemText = function () {
        return (bookmarkList.bookmarks.length - bookmarkList.remaining() > 1) ? "items" : "items";
    };
    
    //Delete
    bookmarkList.clear = function () {
        var oldBookmarks = bookmarkList.bookmarks;
        bookmarkList.bookmarks = [];
        angular.forEach(oldBookmarks, function(bookmark) {
            if (!bookmark.done) bookmarkList.bookmarks.push(bookmark);
        });
    };    
});
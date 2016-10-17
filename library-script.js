var app = angular.module('Library',[]);

app.controller('GreetingController', ['$scope', function($scope) {
  $scope.welcome = "Welcome to:";
  $scope.greeting = 'Eden Public Library';
  $scope.address = "12345 Brick Lane";
  $scope.address2= "Detroit, MI 48101";
  $scope.caption = 'We have a range of books for you to check out. This is a no profit organization that allows the youth to check out books to expand their imagination.'
}]);

app.controller('LibraryInvetory', function(){
  this.products = books;
});




var books =[
{

  name: 'Harry Potter and the Sorcerer\'s Stone',
  author: 'J.K. Rowling',
  description: "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry will learn that he's really a wizard, just as his parents were. But everything changes when Harry is summoned to attend an infamous school for wizards, and he begins to discover some clues about his illustrious birthright. From the surprising way he is greeted by a lovable giant, to the unique curriculum and colorful faculty at his unusual school, Harry finds himself drawn deep inside a mystical world he never knew existed and closer to his own noble destiny.",
  canCheckOutBook: true
},
{
  name: 'Color Purple',
  author: 'Alice Walker',
  description: 'Alice Walker\'s The Color Purple weaves an intricate mosaic of women joined by their love for each other, the men who abuse them, and the children they care for.',
  canCheckOutBook: true
},
{
  name: 'The Girl On The Train',
  author:'Paula Hawkins',
  description:'A psychological thriller set in the environs of London is full of complications and betrayals.',
  canCheckOutBook: true
}
];

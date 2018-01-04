TIC TAC TOE

This is a two player game that asks for a sign-in in order to play it. This is for the purpose of recording the games depending on the user. This game ues 'x' and 'o' as the pieces that are placed on the board and 'x' always goes first

To make this game I used javascript, jquery, HTML, css and ajax.

Planning:
The stratedgy I had for doing this porject was to follow the suggested schedule that was provided to us. This really helped me stay on track. A couple of time I had to skip around the schedule and do something new especially when I was stuck on a problem. One of the first elements I did in the porject was to get the game logic working. This took some time because I would often have to think about what the game really does and how I could make my game do that.
For example, checking to see who won took a lot of code in my game. I would make the game check if the indexes next to eachother were full and if they were full with the same piece. Once the game logice was mostly all set I would work on the ajax calls and api. This was setting up sign-in, sign- up, sign-out, change password, and show games, These took up a lot of my time. I did the user ones first(sign- in, etc), the I did the game ones (create a new games, etc). Once those were working, I moved on to the styling of the game. I left this for last becuase I wanted the game to be playable first. That was the main priority.

To solve problems I had, I would first try and figure out what I wanted to do at that moment. For example, if I wanted to have something happen when you click, I would make sure i was targeting the correct class or id. The next step I would take if I was stuck was to see what was happening or not happening. Then from them look the error up on google. A lot of the time that helped. I would also console log as much as I could to see if I was getting the right information I needed. I would also use the debugger if I was really truly stuck. If after all that i still could not resolve the issue I would open an issue in the game project repo and ask for help from the instructors.

One of the issues I had was keeping the javascript clean. In my game right now I have a lot of events that are a repeat. The only difference is that they target a different index and this was hard coded into all. With time I would like to go back and make allthose into a single event and make the code cleaner.

Challanges :
One of the challanges faced with this project was to make each token change. having it
go from 'x' to 'o' was tricky. Tried a bunch of different functions till I saw someone
use the one I have here and I tried it and after much tinkering, mannaged to get working wiht the rest of the functions that afect the game.

Figureing out how to show that there was a tie was a challenge as well. I had to look at many different example online and I fnally found one that was simple that I could model it after. As well as having the pices change from an 'x' to an 'o' and back. This part was hard to figure out for me becuas I would over think it often. I also looked online to see other examples and then formulate mine.

There was an issue witth the endGame function that had the .off() method. When you would click on it, it would not allow any more click handlers or events. Even when a new game was created it would not allow for more clicking. To be able to create a new game and play it that had to be removed. The challenge then was figuring out how to make it so that when the game is over you cannot click anywhere else on the board until you made a new game.

The updateGame function gave a lot of problems as well. This funcion is supposed to record the cells that are clicked and whether the game is over or not.  At first there was an issue of it now reading the id of the game that was being created. When that was solved (which took a while) it still did not work the way it was suppposed to. It did not take the pieces from the object that was created in the main javascriptfile for the game logic. It was not 'linked'to it. ater many atepmts the only way to get that function to work was to move it to the main javascriptfile with the game logic.

User Stories:
  - As a user i want to be able to place a piece on the board.
  - As a user i would like to see my score compared to whoever im playing against.
  - As a user i would like to be able to sign in and sign up.
  - As a user i would like to view a tract of scores.
  - As a user i would like to sign off at the end.
  - As a suer i would like to see the final scoore and who won/lost or tied

Wireframe:
https://git.generalassemb.ly/storage/user/8896/files/67139f14-e5a3-11e7-93e4-93d28c300890
This is the wireframe I started out with. It is similar to what the game looks like at the end. There are just a few minor differences

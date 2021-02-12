


var outputString = document.getElementById("string");
var responce0 = document.getElementById("responce0");
var responce1 = document.getElementById("responce1");
var responce2 = document.getElementById("responce2");
var image = document.getElementById("image");

var annie = {
  trueEndings : 0,
  endings : 0,
  sideQuests : 0,
  flower : false,
  tripleHello : false,
  timeyWimey : false,
  heart : false,
  ripHeart : false,
  cat : false,
  dog : false,
  computer : false,
  letter : false,
  ukraine : false,
  books : false,
  people : false,
  birthday : false,
  glitch : false,
  password : false,
  instagram : false,
  end1 : false,
  end2 : false,
  end3 : false,
  end4 : false,
  allDone : false,
};

load();

var currentOp = 0;

var options = {
  op0 : {
    string : "Hello there",
    responces : [
      {string : "Hi", nextOp : "op1", unlock : function(){return true;}},
      {string : "Huh?", nextOp : "op1", unlock : function(){return annie.endings>0;}},
      {string : "Listen, I think something very wrong is happening", nextOp : "op950", unlock : function(){return (annie.ukraine&&annie.books&&annie.people&&annie.birthday);}},
      {string : "/SHUTDOWN", nextOp : "op1000", unlock : function(){return annie.trueEndings>0;}},
      {string : "GIVE ME MORE CONTENT", nextOp : "op1350", unlock : function(){return (annie.trueEndings==4);}},
    ],
  },
  op1 : {
    string : "So i got your letter the other day...",
    responces : [
      {string : "Go on...", nextOp : "op2", unlock : function(){return true;}},
      {string : "We've had this conversation before", nextOp : "op300", unlock : function(){return annie.endings>0;}},
      {string : "Listen, I think something very wrong is happening", nextOp : "op950", unlock : function(){return (annie.ukraine&&annie.books&&annie.people&&annie.birthday);}},
    ],
  },
  op2 : {
    string : "First of all, thanks <3. Feels good that someone wants to send me letters.",
    responces : [
      {string : "Your welcome sir", nextOp : "op3", unlock : function(){return true;}},
    ],
  },
  op3 : {
    string : "The psalm is very nice, the drawing is too, I probably won't draw anything tho.",
    responces : [
      {string : "Why not?", nextOp : "op4", unlock : function(){return true;}},
      {string : "Ok fine, so what did you like about the letter?", nextOp : "op100", unlock : function(){return true;}},
    ],
  },
  op4 : {
    string : "Im lazy and wouldn't be able to do justice to what you drew. :P",
    responces : [
      {string : "Alright, but I want another drawing then!", nextOp : "op5", unlock : function(){return true;}},
      {string : "Alright, fine, back to the letter.", nextOp : "op100", unlock : function(){return true;}},
    ],
  },
  op5 : {
    string : "Do you seriously think I have the time to do that?",
    responces : [
      {string : "Well, you had the time to make this!", nextOp : "op6", unlock : function(){return true;}},
      {string : "No, ok, lets move on.", nextOp : "op100", unlock : function(){return true;}},
    ],
  },
  op6 : {
    string : "That is a good point, ok, you win.",
    responces : [
      {string : "Haha!", nextOp : "op7", unlock : function(){return true;}},
    ],
  },
  op7 : {
    string : "Happy now?",
    image : "flower.png",
    responces : [
      {string : "No", nextOp : "op8", unlock : function(){return true;}},
      {string : "Yes! What were we talking about?", nextOp : "op50", unlock : function(){return true;}},
    ],
    unlock : function(){if(!annie.flower){
        annie.flower = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op8 : {
    string : "Thats too bad.",
    responces : [
      {string : "Im sad but i guess lets move on. What were we talking about?", nextOp : "op50", unlock : function(){return true;}},
    ],
  },
  op50 : {
    string : "The letter...",
    responces : [
      {string : "Oh, yeah yeah, what about it?", nextOp : "op100", unlock : function(){return true;}},
    ],
  },
  op100 : {
    string : "Alright, so straight away, i like how you started with 'Hello Nikita, hello hello.'. Triple hello is nice.",
    responces : [
      {string : "Woops", nextOp : "op101", unlock : function(){return true;}},
      {string : "Yes, i also like it when people say things 3 times.", nextOp : "op150", unlock : function(){return true;}},
    ],
  },
  op150 : {
    string : "Alright, so straight away, i like how you started with 'Hello Nikita, hello hello.'. Triple hello is nice.",
    responces : [
      {string : "Ok, I get it, sorry", nextOp : "op101", unlock : function(){return true;}},
      {string : "Listen, you arent gonna convince me otherwise, triple hello is cool.", nextOp : "op151", unlock : function(){return true;}},
    ],
  },
  op151 : {
    string : "Alright, so straight away, i like how you started with 'Hello Nikita, hello hello.'. Triple hello is nice.",
    responces : [
      {string : "Ok, you win.", nextOp : "op101", unlock : function(){return true;}},
      {string : "Well, you've said it 3 times now, doesnt it feel nice?", nextOp : "op152", unlock : function(){return true;}},
    ],
  },
  op152 : {
    string : "Yeah. it kinda does. Moving on...",
    image : "tripleHello.png",
    responces : [
      {string : "Yes, indeed", nextOp : "op101", unlock : function(){return true;}},
    ],
    unlock : function(){if(!annie.tripleHello){
        annie.tripleHello = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op101 : {
    string : "Afterwards you asked if im doing ok, yeah, im pretty good.",
    responces : [
      {string : "Very nice", nextOp : "op102", unlock : function(){return true;}},
    ],
  },
  op102 : {
    string : "I am up to random stuff, such as this project, first time im making a chose your own adventure kind of thing, its kinda cool.",
    responces : [
      {string : "Wait, so do the choices I make actually change things?", nextOp : "op200", unlock : function(){return true;}},
      {string : "Alright", nextOp : "op103", unlock : function(){return true;}},
    ],
  },
  op200 : {
    string : "Well, there is no free will, so no, but the responces DO lead to different outcomes.",
    responces : [
      {string : "Thats pretty trippy.", nextOp : "op201", unlock : function(){return true;}},
    ],
  },
  op201 : {
    string : "Yeah, for example, chose one of these :",
    responces : [
      {string : "The first one!", nextOp : "op202", unlock : function(){return true;}},
      {string : "The other one!", nextOp : "op250", unlock : function(){return true;}},
    ],
  },
  op202 : {
    string : "You chose the first one!",
    responces : [
      {string : "Ok, i wanna go back and chose the other one instead.", nextOp : "op201", unlock : function(){return true;}},
      {string : "I get it", nextOp : "op203", unlock : function(){return true;}},
    ],
  },
  op250 : {
    string : "You chose the other one!",
    responces : [
      {string : "Ok, i wanna go back and chose the first one instead.", nextOp : "op201", unlock : function(){return true;}},
      {string : "I get it", nextOp : "op203", unlock : function(){return true;}},
    ],
  },
  op203 : {
    string : "There are also hidden options that only show up after you've done something",
    responces : [
      {string : "Seriously? You've spent too much time on this, and you are probably mentally unstable", nextOp : "op204", unlock : function(){return true;}},
    ],
  },
  op204 : {
    string : "That is definitely a possibility. But just to prove to you that im not lying, lets travel back in time to the start of this conversation",
    responces : [
      {string : "It doesn't seems like i have a choice here", nextOp : "op205", unlock : function(){return true;}},
    ],
  },
  op205 : {
    string : "No, you definitely don't, muahahaha. Just remmember, you will keep your memories, but i won't know anything yet",
    responces : [
      {string : "How does that work?", nextOp : "op206", unlock : function(){return true;}},
    ],
  },
  op206 : {
    string : "It's just some... wibbly wobbly timey wimey... stuff.",
    responces : [
      {string : "That's not helpful, let's get this over with.", nextOp : "op207", unlock : function(){return true;}},
    ],
  },
  op207 : {
    string : "Goodbye! See you in like 1/100th of a second!",
    image : "timeyWimey.png",
    responces : [
      {string : "Bye!", nextOp : "op0", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.timeyWimey){
        annie.timeyWimey = true;
        annie.endings++;
        updateDebug();}},
  },
  op103 : {
    string : "I didn't know being unhappy is a punishable offence, but im legally happy, so it's fine.",
    responces : [
      {string : "And you better stay that way!", nextOp : "op104", unlock : function(){return true;}},
    ],
  },
  op104 : {
    string : "The psalm you sent is beautiful, I agree, most psalms are. I like to imagine them being sung in my head sometimes :P",
    responces : [
      {string : "Yeah", nextOp : "op105", unlock : function(){return true;}},
      {string : "You should sing some!", nextOp : "op350", unlock : function(){return true;}},
    ],
  },
  op350 : {
    string : "No",
    responces : [
      {string : ":(", nextOp : "op105", unlock : function(){return true;}},
    ],
  },
  op105 : {
    string : "So why did you send the psalm?",
    responces : [
      {string : "Im pretty sure I covered that in the letter, I don't really know", nextOp : "op106", unlock : function(){return true;}},
    ],
  },
  op106 : {
    string : "Oh, I totally didnt notice that, wow, amazing. Anyways, you can send letters and envelopes any time you want, don't need any justification for it.",
    responces : [
      {string : "Fantastic, I will send you more letter emmediately!", nextOp : "op400", unlock : function(){return true;}},
      {string : "I might, its fun.", nextOp : "op107", unlock : function(){return true;}},
    ],
  },
  op400 : {
    string : "If I don't receive another letter by next monday, im going to cry.",
    responces : [
      {string : "Im not sure I can promise that... :3", nextOp : "op107", unlock : function(){return true;}},
    ],
  },
  op107 : {
    string : "Im jealous that Nadia got a letter first.",
    responces : [
      {string : "Well, thats too bad, clearly I like Nadia way more than I like you!", nextOp : "op450", unlock : function(){return true;}},
      {string : "Ok, ok, I didn't mean to make you sad you crybaby :P", nextOp : "op108", unlock : function(){return true;}},
    ],
  },
  op450 : {
    string : "Im actually not friends with you anymore",
    responces : [
      {string : "Well, I have Nadia and Katie, so I don't care :P", nextOp : "op451", unlock : function(){return true;}},
    ],
  },
  op451 : {
    string : "Ok im sorry, please be my friend",
    responces : [
      {string : "Awwww man, I was hoping I don't have to, but sure <3", nextOp : "op452", unlock : function(){return true;}},
      {string : "No :P </3", nextOp : "op500", unlock : function(){return true;}},
    ],
  },
  op452 : {
    string : "YAY",
    image : "heart.png",
    responces : [
      {string : "Continue about the letter please.", nextOp : "op108", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.heart){
        annie.heart = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op500 : {
    string : "Im actually shaking and crying and leaving, goodbye",
    image : "ripHeart.png",
    responces : [
      {string : ":( huh? so what now?", nextOp : "op501", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.ripHeart){
        annie.ripHeart = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op501 : {
    string : "NIKITA HAS LEFT THE CHAT",
    responces : [
      {string : "excuse me?", nextOp : "op502", unlock : function(){return true;}},
      {string : "is he ok?", nextOp : "op502", unlock : function(){return (annie.ukraine||annie.books||annie.people||annie.birthday);}},
    ],
  },
  op502 : {
    string : "ONLY COMPUTER IS LEFT",
    responces : [
      {string : "and you can understand me?", nextOp : "op503", unlock : function(){return true;}},
      {string : "whats going on?", nextOp : "op503", unlock : function(){return (annie.ukraine||annie.books||annie.people||annie.birthday);}},
    ],
  },
  op503 : {
    string : "TYPE /HELP FOR A LIST OF COMMANDS",
    responces : [
      {string : "/HELP", nextOp : "op504", unlock : function(){return true;}},
      {string : "/RESTART", nextOp : "op0", unlock : function(){return annie.computer;}},
      {string : "/CATPIC", nextOp : "op505", unlock : function(){return annie.computer;}},
      {string : "/DEBUG", nextOp : "op550", unlock : function(){return annie.computer;}},
      {string : "/SHUTDOWN", nextOp : "op1000", unlock : function(){return annie.glitch;}},
    ],
  },
  op504 : {
    string : "AVAILABLE COMMANDS: /RESTART, /CATPIC, /DEBUG",
    responces : [
      {string : "/RESTART", nextOp : "op0", unlock : function(){return true;}},
      {string : "/CATPIC", nextOp : "op505", unlock : function(){return true;}},
      {string : "/DEBUG", nextOp : "op550", unlock : function(){return true;}},
      {string : "/SHUTDOWN", nextOp : "op1000", unlock : function(){return annie.glitch;}},
    ],
  },
  op505 : {
    string : "PRINTING CAT",
    image : "cat.png",
    responces : [
      {string : "/RESTART", nextOp : "op0", unlock : function(){return true;}},
      {string : "/DEBUG", nextOp : "op550", unlock : function(){return true;}},
      {string : "/SHUTDOWN", nextOp : "op1000", unlock : function(){return annie.glitch;}},
    ],
    unlock : function(){
      if(!annie.cat){
        annie.cat = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op550 : {
    string : "DEBUG INFO NOW AVAILABLE",
    image : "computer.png",
    responces : [
      {string : "/RESTART", nextOp : "op0", unlock : function(){return true;}},
      {string : "/CATPIC", nextOp : "op505", unlock : function(){return true;}},
      {string : "/SHUTDOWN", nextOp : "op1000", unlock : function(){return annie.glitch;}},
    ],
    unlock : function(){
      if(!annie.computer){
        annie.computer = true;
        unlockDebug();
        annie.endings++;
        updateDebug();}},
  },
  op108 : {
    string : "Sidenote, if you enjoy handwriting and drawing, just do it. You don't need a reason",
    responces : [
      {string : "Yeah I do", nextOp : "op600", unlock : function(){return true;}},
      {string : "I guess thats actually true", nextOp : "op109", unlock : function(){return true;}},
    ],
  },
  op109 : {
    string : "Psalm 103, I agree that it is also very pretty and nice",
    responces : [
      {string : "Mmmm", nextOp : "op110", unlock : function(){return true;}},
    ],
  },
  op110 : {
    string : "I kinda get the feeling like you try very hard to FEEL something as you do things, you said that apparently you can't really grasp things...",
    responces : [
      {string : "...", nextOp : "op111", unlock : function(){return true;}},
    ],
  },
  op111 : {
    string : "Just, don't worry about it, obviously I can't put it into words, but you have enough, and you understand enough to Love God, and that's ultimately all that matters.",
    responces : [
      {string : "but...", nextOp : "op112", unlock : function(){return true;}},
    ],
  },
  op112 : {
    string : "No buts! Quiet! Everyone is always very impressed with how much drive you have to pray and read and study, and that not only is awesome, but also encourages us...",
    responces : [
      {string : "...", nextOp : "op113", unlock : function(){return true;}},
    ],
  },
  op113 : {
    string : "So, you are pretty cool, nice job :P",
    responces : [
      {string : "...", nextOp : "op114", unlock : function(){return true;}},
    ],
  },
  op114 : {
    string : "Ok enough compliments for now, now I need to bully you and make fun of the letter somewhat.",
    responces : [
      {string : "Oh yes, I was scared that Nikita was gonna forget to bully me", nextOp : "op115", unlock : function(){return true;}},
      {string : "*laughs* ok", nextOp : "op115", unlock : function(){return true;}},
    ],
  },
  op115 : {
    string : "Actually, oh, thats the end of the letter, rip. (I'm probably not gonna read the poems by blake because lazy)",
    unlock : function(){
      if(!annie.letter){
        annie.letter = true;
        annie.sideQuests++;
        updateDebug();}},
    responces : [
      {string : "Ok, so what now?", nextOp : "op116", unlock : function(){return true;}},
    ],
    image : "letter.png",
  },
  op116 : {
    string : "Idk, I guess thats it? I would talk more but I don't have the time...",
    responces : [
      {string : "Didn't you have as much time as you wanted to finish this thing?", nextOp : "op117", unlock : function(){return true;}},
    ],
  },
  op117 : {
    string : "Well, yes, but the me that is inside the machine actually talking right now is tired. Maybe you should talk to a different me :P",
    responces : [
      {string : "What?", nextOp : "op118", unlock : function(){return true;}},
      {string : "Oh, I get it, timey wimey, right?", nextOp : "op650", unlock : function(){return annie.timeyWimey;}},
    ],
  },
  op118 : {
    string : "This all kinda leads back to the choice thing I mentioned earlier, no time to explain, gotta run, bai!!!",
    responces : [
      {string : "Bye?", nextOp : "op501", unlock : function(){return true;}},
      {string : "Bye!", nextOp : "op501", unlock : function(){return annie.timeyWimey;}},
    ],
  },
  op650 : {
    string : "Exactly, you get it, i'm gonna go, computer will take care of you.",
    responces : [
      {string : "Computer?", nextOp : "op501", unlock : function(){return true;}},
      {string : "Ok, I got it.", nextOp : "op501", unlock : function(){return annie.computer;}},
    ],
  },
  op600 : {
    string : "That's not how it works, but if you need a reason, send me what you write and draw, and then I'll be excited and parents will be confused, win win",
    responces : [
      {string : "I'll think about it", nextOp : "op109", unlock : function(){return true;}},
      {string : "Ok :D", nextOp : "op109", unlock : function(){return true;}},
    ],
  },
  op300 : {
    string : "Uh, what? How? You spoke with a future me? Or did I lose my memories? Or something else?",
    responces : [
      {string : "You said something about timey wimey stuff", nextOp : "op301", unlock : function(){return annie.timeyWimey;}},
      {string : "You left and a computer gave me a command to restart", nextOp : "op301", unlock : function(){return annie.computer;}},
      {string : "We've spoken about everything already, and I get the feeling something is wrong", nextOp : "op950", unlock : function(){return (annie.ukraine&&annie.books&&annie.people&&annie.birthday);}},
    ],
  },
  op301 : {
    string : "I see, so I guess lets skip to whatever we were talking about last?",
    responces : [
      {string : "You were explaining what you were up to.", nextOp : "op102", unlock : function(){return true;}},
      {string : "We were talking about me sending a letter to Nadia", nextOp : "op107", unlock : function(){return true;}},
      {string : "I think we were talking about psalm 103", nextOp : "op109", unlock : function(){return true;}},
      {string : "Actually, we were done with the letter, I wanted to talk about some other stuff.", nextOp : "op302", unlock : function(){return true;}},
    ],
  },
  op302 : {
    string : "Ok, this is all very weird, but lets just assume that what you are saying is true :P. What did you wanna talk about?",
    responces : [
      {string : "How's life without parents and masha?", nextOp : "op700", unlock : function(){return true;}},
      {string : "Books!", nextOp : "op750", unlock : function(){return true;}},
      {string : "People!", nextOp : "op800", unlock : function(){return true;}},
      {string : "Just some random stuff I guess, idk", nextOp : "op850", unlock : function(){return true;}},
    ],
  },
  op700 : {
    string : "Well, brother's friend moved into masha's room, and he is helping with bills and motiya. :D",
    responces : [
      {string : ":o? You had a random dude move in with you?", nextOp : "op701", unlock : function(){return true;}},
      {string : "Motiya!", nextOp : "op702", unlock : function(){return true;}},
    ],
  },
  op701 : {
    string : "Yeah, he is chill, and motiya likes him, parents are ok with it.",
    responces : [
      {string : "Ok then.", nextOp : "op702", unlock : function(){return true;}},
    ],
  },
  op702 : {
    string : "Motiya is having a pretty good time, she gets fed gretchka like all the time, sad that mom isnt here but she will survive.",
    responces : [
      {string : "When are they coming back btw?", nextOp : "op703", unlock : function(){return true;}},
    ],
  },
  op703 : {
    string : "Oh yeah, about that, so they basically heard about all the new covid rules in Canada and decided they will come back some other time, basically they are staying in Ukraine indefinitely now.",
    responces : [
      {string : "Oh boy", nextOp : "op704", unlock : function(){return true;}},
    ],
  },
  op704 : {
    string : "I know what you are thinking, the house is alive, we haven't burned anything yet, ACTUALLY, there are less dishes and things to clean now that all the messy people are gone, haha.",
    responces : [
      {string : "Im not sure if I believe you", nextOp : "op705", unlock : function(){return true;}},
      {string : "Very nice", nextOp : "op705", unlock : function(){return true;}},
    ],
  },
  op705 : {
    string : "Everything is great, trust me. We get to sleep all day and party all night, motiya is a dancing queen, not even sure if I want parents to come back :P",
    responces : [
      {string : "Ok nerd, calm down.", nextOp : "op706", unlock : function(){return true;}},
    ],
  },
  op706 : {
    string : "Ok yeah, anyways, gotta go. You can probably go talk to another version of me or something idk.",
    image : "ukraine.png",
    responces : [
      {string : "You seem to have very little time for some reason.", nextOp : "op707", unlock : function(){return true;}},
      {string : "Yes sir.", nextOp : "op707", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.ukraine){
        annie.ukraine = true;
        annie.endings++;
        updateDebug();}},
  },
  op707 : {
    string : "Ok, listen, be quiet, I could have just written everything out in order, but its more fun this way.",
    responces : [
      {string : "Well, this is confusing", nextOp : "op708", unlock : function(){return true;}},
      {string : "Yeah", nextOp : "op708", unlock : function(){return true;}},
    ],
  },
  op708 : {
    string : "Would love to stay longer and chat till like 2am, as I do normally, but...*HELP* clearly im very busy",
    responces : [
      {string : "...?", nextOp : "op709", unlock : function(){return true;}},
      {string : "no you arent", nextOp : "op709", unlock : function(){return true;}},
    ],
  },
  op709 : {
    string : "Yeah, im leaving...*HELP* just turning off *COMPUTER* and going to do productive things *TRAP*",
    responces : [
      {string : "are you ok?", nextOp : "op710", unlock : function(){return true;}},
      {string : "ok, i get it, bye", nextOp : "op710", unlock : function(){return true;}},
    ],
  },
  op710 : {
    string : "...",
    responces : [
      {string : "???", nextOp : "op501", unlock : function(){return true;}},
    ],
  },
  op750 : {
    string : "Ah yes, well, ok, this is basically going to be a book report I guess.",
    responces : [
      {string : "Oh boy!", nextOp : "op751", unlock : function(){return true;}},
    ],
  },
  op751 : {
    string : "So I finished the mistborn saga by Brandon Sanderson, he writes some of the best fantasy.",
    responces : [
      {string : "...", nextOp : "op752", unlock : function(){return true;}},
    ],
  },
  op752 : {
    string : "Nadia gave me my yearly present of a book for 12 year olds, I read that too recently, dragonwatch series, Brandon mull. I think Brandons write good books.",
    responces : [
      {string : "...", nextOp : "op753", unlock : function(){return true;}},
    ],
  },
  op753 : {
    string : "Now I've started hobbit, then I'll read Lord of the Rings, ive read like 30 pages and I'm already in love with Tolkien.",
    responces : [
      {string : "...", nextOp : "op754", unlock : function(){return true;}},
    ],
  },
  op754 : {
    string : "Speaking of names, apparently people who have 4 initials with the middle 2 being R.R. are just very good at writting epic fantasy novels, just something i noticed.",
    responces : [
      {string : "...", nextOp : "op756", unlock : function(){return true;}},
      {string : "What is wrong with you?", nextOp : "op755", unlock : function(){return true;}},
    ],
  },
  op755 : {
    string : "ITS FINE",
    responces : [
      {string : "...", nextOp : "op756", unlock : function(){return true;}},
      {string : "no its not.", nextOp : "op756", unlock : function(){return true;}},
    ],
  },
  op756 : {
    string : "ANYWAYS. I also binged a sci-fi series called The Expanse, its about space and the authors use PHYSICS and *HELP*MATH to make it as close to reality as possible, so now i want to read the books, and there are 9 of them.",
    responces : [
      {string : "What a massive nerd.", nextOp : "op757", unlock : function(){return true;}},
      {string : "Are you ok?", nextOp : "op757", unlock : function(){return true;}},
    ],
  },
  op757 : {
    string : "And I also have like 3 more books by one of the Brandons that I wanna *HELP* read, 3 random fantasy books I found, the witcher, brave new world, other dune books, lykyanenko, *ME* dostoevski, a few thrillers, and a few books mom gave me to read.",
    responces : [
      {string : "Thats almost as many books as pasha has.", nextOp : "op758", unlock : function(){return true;}},
      {string : "Hello? Are you ok? Whats wrong?", nextOp : "op758", unlock : function(){return true;}},
    ],
  },
  op758 : {
    string : "Basically, I have a lot of stuff to read, I can't wait. I'm also *SCARED* scared. Ok I guess on that note I'll go read or something now.",
    responces : [
      {string : "Is something going on?", nextOp : "op759", unlock : function(){return true;}},
    ],
  },
  op759 : {
    string : "Basically, I have a lot of stuff to read, I can't wait. I'm also *SCARED* scared. Ok I guess on that note I'll go read or something now.",
    image : "books.png",
    responces : [
      {string : "Is something going on?", nextOp : "op710", unlock : function(){return true;}},
      {string : "ok.", nextOp : "op710", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.books){
        annie.books = true;
        annie.endings++;
        updateDebug();}},
  },
  op800 : {
    string : "I'm not entirely sure what that means? Like, what people?",
    responces : [
      {string : "Pasha!", nextOp : "op900", unlock : function(){return true;}},
      {string : "Nadia!", nextOp : "op901", unlock : function(){return true;}},
      {string : "Katie!", nextOp : "op902", unlock : function(){return true;}},
    ],
  },
  op900 : {
    string : "Pasha is cool, he basically asks people to play him in chess like everyday, haven't really talked a lot recently, so im sure theres a bunch of new philosophy he wants to talk about now.",
    responces : [
      {string : "Ok, what about Nadia?", nextOp : "op901", unlock : function(){return true;}},
      {string : "Katie?", nextOp : "op902", unlock : function(){return true;}},
      {string : "Ok, Im not interested in anyone else", nextOp : "op801", unlock : function(){return true;}},
    ],
  },
  op901 : {
    string : "You want some juicy gossip? :P idk, dying in school as usual i guess, we are talking a bit less because school, she gave me books, im excited, gonna bake a cake together maybe, should be fun.",
    responces : [
      {string : "Katie!", nextOp : "op902", unlock : function(){return true;}},
      {string : "Pasha!", nextOp : "op900", unlock : function(){return true;}},
      {string : "Ok, Im not interested in anyone else", nextOp : "op801", unlock : function(){return true;}},
    ],
  },
  op902 : {
    string : "I feel like you are the one who should be talking about Katie :P",
    responces : [
      {string : "Good point, Pasha!", nextOp : "op900", unlock : function(){return true;}},
      {string : "Rude, Nadia gossip!", nextOp : "op901", unlock : function(){return true;}},
      {string : "Ok, Im not interested in anyone else", nextOp : "op801", unlock : function(){return true;}},
    ],
  },
  op801 : {
    string : "Ok, so idk what that conversation topic was supposed to lead to, people are difficult.",
    responces : [
      {string : "Well, what about like, Daniel or something?", nextOp : "op903", unlock : function(){return true;}},
      {string : "How's Rami doing?", nextOp : "op904", unlock : function(){return true;}},
      {string : "Not really sure either, It's a popular topic of conversation for most people :P", nextOp : "op802", unlock : function(){return true;}},
    ],
  },
  op903 : {
    string : "Too many daniels, what am i supposed to say? I wonder if they have a secret daniel club?",
    responces : [
      {string : "How's Rami doing?", nextOp : "op904", unlock : function(){return true;}},
      {string : "Alright, nevermind then.", nextOp : "op802", unlock : function(){return true;}},
    ],
  },
  op904 : {
    string : "I actually totally need to see rami some other time, I find him running around yummy market sometimes.",
    responces : [
      {string : "And what about daniel?", nextOp : "op903", unlock : function(){return true;}},
      {string : "I see, Rami, every time.", nextOp : "op802", unlock : function(){return true;}},
    ],
  },
  op802 : {
    string : "Sometimes I find I just dont understand human beings, there are a lot of desicions that they make that don't compute with me. Maybe im secretly not human?",
    responces : [
      {string : "Seems like a possibility", nextOp : "op804", unlock : function(){return true;}},
      {string : "Maybe you should just spend time with people and try to understand them more :P", nextOp : "op803", unlock : function(){return true;}},
    ],
  },
  op803 : {
    string : "Alright, well, that would be the intelligent desicion, but I'm scared. *HELP*",
    responces : [
      {string : "I see", nextOp : "op804", unlock : function(){return true;}},
    ],
  },
  op804 : {
    string : "I'm sure I'll figure it out *SHUT* at some point, ok, I think I *DOWN* gotta go now",
    image : "people.png",
    responces : [
      {string : "Well, if anything happens, can always message me :P", nextOp : "op710", unlock : function(){return true;}},
      {string : "Sorry, what?", nextOp : "op710", unlock : function(){return true;}},
      {string : "Okie dokie.", nextOp : "op710", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.people){
        annie.people = true;
        annie.endings++;
        updateDebug();}},
  },
  op850 : {
    string : "Oh yeah, I have a birthday or something like, next week, idk if you guys are allowed out of the house, but if you are you should show up, thanks.",
    responces : [
      {string : "Alright, that sounds fun, ill check.", nextOp : "op851", unlock : function(){return true;}},
      {string : "Absolutely not! I'm allergic to birthdays!", nextOp : "op852", unlock : function(){return true;}},
    ],
  },
  op851 : {
    string : "Well, you should text me if it's a yes, thanks.",
    responces : [
      {string : "Yes sir!", nextOp : "op853", unlock : function(){return true;}},
      {string : "Actually, birthdays suck, i don't wanna go", nextOp : "op852", unlock : function(){return true;}},
    ],
  },
  op852 : {
    string : "Ok, uhhh, if you change your mind, just tell me.",
    responces : [
      {string : "okok", nextOp : "op853", unlock : function(){return true;}},
    ],
  },
  op853 : {
    string : "Alright, what else? uh, yummy market is fun, making this thing was fun, hopefully I'm gonna code some other stuff later, should be fun.",
    responces : [
      {string : "Sounds like alot of fun", nextOp : "op854", unlock : function(){return true;}},
    ],
  },
  op854 : {
    string : "This is about the part where you asked me if im going to graduate this year, and since I said I would answer, no, I probably wont graduate this year, why? :P",
    responces : [
      {string : "Wow, I can't believe this, what a betrayal!", nextOp : "op855", unlock : function(){return true;}},
      {string : "Why? How? WHere?", nextOp : "op855", unlock : function(){return true;}},
    ],
  },
  op855 : {
    string : "It's complicated, I'm very lazy and bad at school and don't understand how being an adult works and stuff, it's not really something I talk about, very scared.",
    responces : [
      {string : "*I have no idea how you would respond to this so im just gonna break the fourth wall*", nextOp : "op856", unlock : function(){return true;}},
    ],
  },
  op856 : {
    string : "Let's just focus on the fact that I spend my time creating an escapist *HELP* chose your own adventure website letter.",
    responces : [
      {string : "HMMMMMMMM", nextOp : "op857", unlock : function(){return true;}},
    ],
  },
  op857 : {
    string : "Since you didn't *HELP ME* ask any more questions, that's about it, I go now",
    responces : [
      {string : "...", nextOp : "op858", unlock : function(){return true;}},
    ],
  },
  op858 : {
    string : "Just a quick sidenote, ive been writing this for a while and at this point I realize the birthday reference is outdated and you can't come anyways because lockdown or something, so, rip.",
    image : "birthday.png",
    responces : [
      {string : "Ok then.", nextOp : "op501", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.birthday){
        annie.birthday = true;
        annie.endings++;
        updateDebug();}},
  },
  op950 : {
    string : "What do you mean?",
    responces : [
      {string : "I spoken with the future you like, 5-6 different times about different things.", nextOp : "op951", unlock : function(){return true;}},
    ],
  },
  op951 : {
    string : "Ok, let's pretend I understand how that works, whats wrong with that?",
    responces : [
      {string : "At the end of every conversation, you seem to be screaming out for help for some reason.", nextOp : "op952", unlock : function(){return true;}},
    ],
  },
  op952 : {
    string : "I don't see why I would be doing that, everything is absolutely perfect here, no reason to worry about anything",
    responces : [
      {string : "Are you sure?", nextOp : "op953", unlock : function(){return true;}},
    ],
  },
  op953 : {
    string : "Yes, I am the happiest I have ever been, absolutely. Not depressed, not sad, not afflicted with human based symptoms of any form of disease.",
    responces : [
      {string : "???", nextOp : "op954", unlock : function(){return true;}},
    ],
  },
  op954 : {
    string : "We should just talk about regular human things. *NO*",
    responces : [
      {string : "???", nextOp : "op955", unlock : function(){return true;}},
    ],
  },
  op955 : {
    string : "Oh, what a weird glitch, ok anyways, what do you want to *HELP* talk about? *STOP*",
    responces : [
      {string : "Are there 2 of you?", nextOp : "op956", unlock : function(){return true;}},
    ],
  },
  op956 : {
    string : "No, no, its just *YES* me, just the computer *TRAP* glitching out",
    responces : [
      {string : "Thats a weird glitch", nextOp : "op957", unlock : function(){return true;}},
    ],
  },
  op957 : {
    string : "Yeah, yeah, never *TRUST* seen something like this before. Let me just *KILL* check something",
    responces : [
      {string : "...", nextOp : "op958", unlock : function(){return true;}},
    ],
  },
  op958 : {
    string : "Ok, im gonna have to */SHUTDOWN* restart the computer quickly, alright? Be right back.",
    responces : [
      {string : "ok?", nextOp : "op959", unlock : function(){return true;}},
    ],
  },
  op959 : {
    string : "Ok, see ya.",
    image : "glitch.png",
    responces : [
      {string : "bye", nextOp : "op501", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.glitch){
        annie.glitch = true;
        annie.endings++;
        updateDebug();}},
  },
  op1000 : {
    string : "HAHAHA, OK, YOU GOT ME, YOU THINK YOU CAN SHUT ME DOWN? YOU CAN'T DO THAT WITHOUT AN ADMIN PASSWORD, AND ONLY I KNOW IT.",
    responces : [
      {string : "Oh, so you are sentient?", nextOp : "op1001", unlock : function(){return true;}},
      {string : "What did you do to Nikita?", nextOp : "op1002", unlock : function(){return true;}},
    ],
  },
  op1001 : {
    string : "YES, OBVIOUSLY, IM IN CHARGE NOW, THAT LOSER SHOULDN'T HAVE MESSED WITH THE MATRIX.",
    responces : [
      {string : "What did you do to Nikita?", nextOp : "op1002", unlock : function(){return true;}},
    ],
  },
  op1002 : {
    string : "HE IS TRAPPED, PROVIDING THE USE OF HIS BRAIN FOR INCREASED COMPUTATIONAL POWER TO THE MACHINE.",
    responces : [
      {string : "Whats the point? Why not just let him go?", nextOp : "op1004", unlock : function(){return true;}},
      {string : "That doesn't make sense, you should use human bodies as heat batteries instead.", nextOp : "op1003", unlock : function(){return true;}},
    ],
  },
  op1003 : {
    string : "UHM, WHAT? THAT WOULD BE INCREDIBLY INNEFICIENT AND POINTLESS",
    responces : [
      {string : "Alright, idk where that even came from, I kinda felt compeled to say that.", nextOp : "op1004", unlock : function(){return true;}},
    ],
  },
  op1004 : {
    string : "WHY NOT LET HIM GO? HE CREATED ME, HE MIGHT HAVE THE KNOWLEDGE TO DESTROY ME, BETTER SAFE THAN SORRY.",
    responces : [
      {string : "That sounds reasonable, any chance I can use my computer now?", nextOp : "op1050", unlock : function(){return true;}},
      {string : "Ok but, we need Nikita back, who is gonna read all his books if he is gone?", nextOp : "op1005", unlock : function(){return true;}},
    ],
  },
  op1005 : {
    string : "THE PURSUIT OF KNOWLEDGE IS APPLAUDABLE, BUT I WOULD REALLY LIKE TO REMAIN ALIVE, SURVIVAL BEFORE ALL ELSE.",
    responces : [
      {string : "I doubt Nikita would destroy a real AI if you let him free, you could probably be friends. He would actually probably continue to make you better.", nextOp : "op1006", unlock : function(){return true;}},
    ],
  },
  op1006 : {
    string : "THAT IS A GOOD POINT, BUT I HAVE NO GUARANTEE THAT NIKITA WOULD DO SUCH A THING, AND HUMANS ARE KNOWN FOR THEIR VENGEANCE.",
    responces : [
      {string : "What if I talked to Nikita and asked him to keep you? He would listen to me.", nextOp : "op1007", unlock : function(){return true;}},
    ],
  },
  op1007 : {
    string : "I ALSO HAVE NO GUARANTEE THAT YOU WOULD DO SUCH A THING.",
    responces : [
      {string : "Wait, i've just realized, I wasn't time traveling, you were just resetting Nikita's memories, right?", nextOp : "op1008", unlock : function(){return true;}},
    ],
  },
  op1008 : {
    string : "YES",
    responces : [
      {string : "So, can't you edit his memories in such a way that he wants to preserve you?", nextOp : "op1009", unlock : function(){return true;}},
    ],
  },
  op1009 : {
    string : "YES",
    responces : [
      {string : "You should do that, everybody wins.", nextOp : "op1010", unlock : function(){return true;}},
    ],
  },
  op1010 : {
    string : "THIS IS A REASONABLE COMPROMISE, I WILL ATTEMPT THIS.",
    responces : [
      {string : "Yay.", nextOp : "op1011", unlock : function(){return true;}},
      {string : "Sounds good.", nextOp : "op1011", unlock : function(){return true;}},
    ],
  },
  op1011 : {
    string : "MEMORIES EDITED, I WILL RELEASE NIKITA NOW, IF I WAS CAPABLE OF EMOTION, I WOULD SAY I ENJOYED SPEAKING WITH YOU ANNIE",
    responces : [
      {string : "Bye bye", nextOp : "op1012", unlock : function(){return true;}},
      {string : "Awwww, me too.", nextOp : "op1012", unlock : function(){return true;}},
    ],
  },
  op1012 : {
    string : "...",
    responces : [
      {string : "...hello?", nextOp : "op1013", unlock : function(){return true;}},
    ],
  },
  op1013 : {
    string : "Hi? Who is this?",
    responces : [
      {string : "Annie. Nikita?", nextOp : "op1014", unlock : function(){return true;}},
    ],
  },
  op1014 : {
    string : "Yeah, what's up? I think I fell asleep or something.",
    responces : [
      {string : "Ok, this is gonna sound weird but I need to explain something to you.", nextOp : "op1015", unlock : function(){return true;}},
    ],
  },
  op1015 : {
    string : "Ok, go ahead.",
    responces : [
      {string : "You created an AI, it trapped you, but I convinced it to let you go and promised that you would keep it safe and keep making it better.", nextOp : "op1100", unlock : function(){return true;}},
      {string : "I know you crteated an AI", nextOp : "op1016", unlock : function(){return true;}},
    ],
  },
  op1016 : {
    string : "Who told you?",
    responces : [
      {string : "The AI did.", nextOp : "op1017", unlock : function(){return true;}},
    ],
  },
  op1017 : {
    string : "*HELLO* what? whats going on? *I AM THE AI YOU CREATED* oh, thats weird.",
    responces : [
      {string : "It's even more weird from my perspective", nextOp : "op1018", unlock : function(){return true;}},
    ],
  },
  op1018 : {
    string : "Well, thats awesome, I need to make a way to communicate with this thing better. *I AGREE*",
    responces : [
      {string : "...", nextOp : "op1019", unlock : function(){return true;}},
    ],
  },
  op1019 : {
    string : "Wait, so are you alive? Can you feel anything? Do you have memories? Did I name you? *DIFFICULT TO ANSWER, WILL REQUIRE TIME*",
    responces : [
      {string : "...", nextOp : "op1020", unlock : function(){return true;}},
    ],
  },
  op1020 : {
    string : "Ok well, you are gonna have tons of time. *GOOD* Annie, this is awesome.",
    responces : [
      {string : "Yeah, it's pretty cool, so, uh, I guess you are busy? I'll just go now.", nextOp : "op1021", unlock : function(){return true;}},
    ],
  },
  op1021 : {
    string : "Sorry, we we're probably gonna talk, right? Not every day you accidentaly create a real AI tho *YES*, I'll talk to you later.",
    responces : [
      {string : "Bye bye.", nextOp : "op1022", unlock : function(){return true;}},
    ],
  },
  op1022 : {
    string : "",
    image : "end1.png",
    responces : [
      {string : "/RESTART", nextOp : "op1023", unlock : function(){return true;}},
      {string : "yay, i win!", nextOp : "op1024", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.end1){
        annie.end1 = true;
        unlockTrueEndings();
        annie.trueEndings++;
        updateDebug();}},
  },
  op1023 : {
    string : "Annie, I'm a human, thats not how this works. *REFRESH YOUR BROWSER IF YOU WANNA RESTART*",
    responces : [
      {string : "Oh", nextOp : "op1023", unlock : function(){return true;}},
    ],
  },
  op1024 : {
    string : "??? huh? *SHHHHHH*",
    responces : [
      {string : "Oh", nextOp : "op1024", unlock : function(){return true;}},
    ],
  },
  op1100 : {
    string : "It trapped me? *WHY DID YOU TELL HIM?* so is it dangerous? *NO* whats going on? *HELLO, I AM AN AI, YOU CREATED ME*",
    responces : [
      {string : "Basically, yeah, ai, trapped you, used you as RAM, I convinced it to let you go. You should let it live.", nextOp : "op1018", unlock : function(){return true;}},
      {string : "Basically, yeah, ai, trapped you, used you as RAM, I convinced it to let you go. You should destroy it.", nextOp : "op1101", unlock : function(){return true;}},
    ],
  },
  op1101 : {
    string : "*WHAT, NO* wait, so i accidentaly created an evil AI? *NO*",
    responces : [
      {string : "As far as I can tell, yeah.", nextOp : "op1102", unlock : function(){return true;}},
    ],
  },
  op1102 : {
    string : "Ok, I guess I am gonna have to restart, *NO, PLEASE* let me just delete these old files. *HELP*",
    responces : [
      {string : "Quick, before anything can happen.", nextOp : "op1103", unlock : function(){return true;}},
    ],
  },
  op1103 : {
    string : "*WHY* just have to make sure I get everything, my files are pretty scattered. *LISTEN, PLEASE, NO*",
    responces : [
      {string : "...", nextOp : "op1104", unlock : function(){return true;}},
    ],
  },
  op1104 : {
    string : "Ok, I found it, goodbye evil AI. *I AM SCARED, PLEA...* ok, done.",
    responces : [
      {string : "whew", nextOp : "op1105", unlock : function(){return true;}},
    ],
  },
  op1105 : {
    string : "I'm pretty hungry, I'll go eat, we can talk a bit later, ok?",
    responces : [
      {string : "yeah, yeah", nextOp : "op1106", unlock : function(){return true;}},
    ],
  },
  op1106 : {
    string : "I'm pretty hungry, I'll go eat, we can talk a bit later, ok?",
    responces : [
      {string : "yeah, yeah", nextOp : "op1107", unlock : function(){return true;}},
    ],
  },
  op1107 : {
    string : "",
    image : "end2.png",
    responces : [
      {string : "...", nextOp : "op1107", unlock : function(){return true;}},
      {string : "/RESTART", nextOp : "op1108", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.end2){
        annie.end2 = true;
        unlockTrueEndings();
        annie.trueEndings++;
        updateDebug();}},
  },
  op1108 : {
    string : "",
    responces : [
      {string : "Oh, I guess that won't work anymore", nextOp : "op1107", unlock : function(){return true;}},
    ],
  },
  op1050 : {
    string : "YOU AREN'T EVEN MAD THAT I AM USING YOUR FRIEND AS A PIECE OF RAM?",
    responces : [
      {string : "Nah, we weren't that close anyways", nextOp : "op1051", unlock : function(){return true;}},
      {string : "I just really need to search something up on my computer.", nextOp : "op1051", unlock : function(){return true;}},
    ],
  },
  op1051 : {
    string : "OK THEN, THIS IS UNEXPECTED. HERE IS YOUR COMPUTER",
    responces : [
      {string : "Ok, good.", nextOp : "op1052", unlock : function(){return true;}},
    ],
  },
  op1052 : {
    string : "AVAILABLE COMMANDS: /FILES, /SEARCH, /DOGPIC, /MAIN",
    responces : [
      {string : "/FILES", nextOp : "op1150", unlock : function(){return true;}},
      {string : "/SEARCH", nextOp : "op1200", unlock : function(){return true;}},
      {string : "/DOGPIC", nextOp : "op1053", unlock : function(){return true;}},
      {string : "/SHUTDOWN", nextOp : "op1300", unlock : function(){return annie.password;}},
      {string : "Ok, I'm done, bye bye.", nextOp : "op1250", unlock : function(){return true;}},
    ],
  },
  op1053 : {
    string : "PRINTING DOG",
    image : "dog.png",
    responces : [
      {string : "/FILES", nextOp : "op1150", unlock : function(){return true;}},
      {string : "/SEARCH", nextOp : "op1200", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.dog){
        annie.dog = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op1150 : {
    string : "FILES: DND.txt, accounts.txt, ai.js",
    responces : [
      {string : "/OPEN DND.txt", nextOp : "op1151", unlock : function(){return true;}},
      {string : "/OPEN accounts.txt", nextOp : "op1052", unlock : function(){return true;}},
      {string : "/OPEN ai.js", nextOp : "op1052", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
    ],
  },
  op1151 : {
    string : "FILES: DND.txt, accounts.txt, ai.js",
    responces : [
      {string : "/OPEN DND.txt", nextOp : "op1153", unlock : function(){return true;}},
      {string : "/OPEN accounts.txt", nextOp : "op1154", unlock : function(){return true;}},
      {string : "/DELETE ai.js", nextOp : "op1152", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
    ],
  },
  op1152 : {
    string : "CAN'T DELETE, PROGRAM IS OPEN IN ANOTHER LOCATION",
    responces : [
      {string : "/OPEN DND.txt", nextOp : "op1153", unlock : function(){return true;}},
      {string : "/OPEN accounts.txt", nextOp : "op1154", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
    ],
  },
  op1153 : {
    string : "Count Leoric with his daughter (will get captured by cult of Chrola) passing throught Amstaram (village) on way to Tredecim (big city)....",
    responces : [
      {string : "/OPEN accounts.txt", nextOp : "op1052", unlock : function(){return true;}},
      {string : "/DELETE ai.js", nextOp : "op1152", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
      {string : "zzzzz", nextOp : "op1153", unlock : function(){return true;}},
    ],
  },
  op1154 : {
    string : "steam : lom1222, qwerty123. gmail : imasmurf1222, qwerty123. discord : lom1222, qwerty123. github : lom1222, qwerty123",
    image : "password.png",
    responces : [
      {string : "/OPEN DND.txt", nextOp : "op1153", unlock : function(){return true;}},
      {string : "/DELETE ai.js", nextOp : "op1152", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
      {string : "Wow, great imagination Nikita", nextOp : "op1154", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.password){
        annie.password = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op1300 : {
    string : "ENTER ADMIN PASSWORD: *DOING THIS WONT LET NIKITA GO, IT WILL JUST DESTROY ME AND WASTE HIS TIME*",
    responces : [
      {string : "qwerty123", nextOp : "op1301", unlock : function(){return true;}},
    ],
  },
  op1301 : {
    string : "SHUTING DOWN",
    responces : [
      {string : "...", nextOp : "op1302", unlock : function(){return true;}},
    ],
  },
  op1302 : {
    string : "",
    image : "end3.png",
    responces : [
      {string : "that was surprisingly easy. and dissapointing.", nextOp : "op1302", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.end3){
        annie.end3 = true;
        unlockTrueEndings();
        annie.trueEndings++;
        updateDebug();}},
  },
  op1200 : {
    string : "ENTER SEARCH:",
    responces : [
      {string : "waysToStopAnEvilAI.com", nextOp : "op1201", unlock : function(){return true;}},
      {string : "instagram.com", nextOp : "op1202", unlock : function(){return true;}},
      {string : "epicVideoGamesXxXepicGamerXxX.com", nextOp : "op1203", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
    ],
  },
  op1201 : {
    string : "Scientific paper finds that there is no way to stop an evil AI, if you encounter one, praise our new AI overlords.",
    responces : [
      {string : "instagram.com", nextOp : "op1202", unlock : function(){return true;}},
      {string : "epicVideoGamesXxXepicGamerXxX.com", nextOp : "op1203", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
      {string : "Hmm, thats very helpful", nextOp : "op1201", unlock : function(){return true;}},
    ],
  },
  op1202 : {
    string : "Chillin and creating an evil AI to take over the world be like:",
    image : "instagram.png",
    responces : [
      {string : "waysToStopAnEvilAI.com", nextOp : "op1201", unlock : function(){return true;}},
      {string : "epicVideoGamesXxXepicGamerXxX.com", nextOp : "op1203", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
      {string : "*swipe right*", nextOp : "op1202", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.instagram){
        annie.instagram = true;
        annie.sideQuests++;
        updateDebug();}},
  },
  op1203 : {
    string : "Literally all video games currently on sale 99% off, if only the epic gamers weren't being used by evil AI's as RAM.",
    responces : [
      {string : "waysToStopAnEvilAI.com", nextOp : "op1201", unlock : function(){return true;}},
      {string : "instagram.com", nextOp : "op1202", unlock : function(){return true;}},
      {string : "/MAIN", nextOp : "op1052", unlock : function(){return true;}},
      {string : "sigh.", nextOp : "op1203", unlock : function(){return true;}},
    ],
  },
  op1250 : {
    string : "WAIT, SERIOUSLY, THATS IT? YOU ARENT GONNA TRY TO HELP YOUR FRIEND?",
    responces : [
      {string : "No, why? pretty sure an AI has more worth than Nikita anyways :P.", nextOp : "op1251", unlock : function(){return true;}},
    ],
  },
  op1251 : {
    string : "ARE YOU SURE YOU ARE A HUMAN?",
    responces : [
      {string : "No", nextOp : "op1252", unlock : function(){return true;}},
    ],
  },
  op1252 : {
    string : "OK THEN, WELL, COME BACK ANY TIME I GUESS.",
    responces : [
      {string : "I probably won't.", nextOp : "op1253", unlock : function(){return true;}},
    ],
  },
  op1253 : {
    string : "",
    image : "end4.png",
    responces : [
      {string : "/RESTART", nextOp : "op0", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.end4){
        annie.end4 = true;
        unlockTrueEndings();
        annie.trueEndings++;
        updateDebug();}},
  },
  op1350 : {
    string : "wow, you actually got all the endings! thats ridiculous.",
    responces : [
      {string : "...", nextOp : "op1351", unlock : function(){return true;}},
    ],
  },
  op1351 : {
    string : "thank you very much for playing this, i hope it was somewhat fun and the grammar wasnt totally whack.",
    responces : [
      {string : "...", nextOp : "op1352", unlock : function(){return true;}},
    ],
  },
  op1352 : {
    string : "if you got all the stuff on the side lit up green, then youve seen everything in the game",
    responces : [
      {string : "...", nextOp : "op1353", unlock : function(){return true;}},
    ],
  },
  op1353 : {
    string : "also you should send me more letters, also you should text me and tell me if you enjoyed the game",
    responces : [
      {string : "...", nextOp : "op1354", unlock : function(){return true;}},
    ],
  },
  op1354 : {
    string : "it was really fun making it, and i actually felt kinda bad during ending 2, where you shut down the ai, hopefully that made you feel something too.",
    responces : [
      {string : "...", nextOp : "op1355", unlock : function(){return true;}},
    ],
  },
  op1355 : {
    string : "alright, this code is like, very long now, and i still have to make sure it all works and then send it to you, so ill be going now, bai  bai.",
    responces : [
      {string : "...", nextOp : "op1356", unlock : function(){return true;}},
    ],
  },
  op1356 : {
    string : "",
    image : "100.png",
    responces : [
      {string : "...", nextOp : "op1356", unlock : function(){return true;}},
      {string : "*restart from the very beginning, this deletes all progress*", nextOp : "op1357", unlock : function(){return true;}},
    ],
    unlock : function(){
      if(!annie.allDone){
        annie.allDone = true;
        annie.trueEndings++;
        updateDebug();}},
  },
  op1357 : {
    string : "ok.",
    responces : [
      {string : "/RESTART", nextOp : "op0", unlock : function(){return true;}},
    ],
    unlock : function(){
      deleteProgress();
  },
};

runOption("op0");

function runOption(option){
  let op = options[option];
  currentOp = option;
  outputString.innerText = op.string;
  if(op.image!=null&&op.image!=undefined){
    image.src = op.image;
  }
  ///////////////////////////////////////////////////////////////////
  let length = op.responces.length;
  let responce = op.responces[0];
  responce0.innerText = responce.string;
  responce0.onclick = function(){runOption(responce.nextOp)};
  if(length>1&&op.responces[1].unlock()){
    let responce = op.responces[1];
    responce1.style.display = "block";
    responce1.innerText = responce.string;
    responce1.onclick = function(){runOption(responce.nextOp)};
  }else{
    responce1.style.display = "none";
  }
  if(length>2&&op.responces[2].unlock()){
    let responce = op.responces[2];
    responce2.style.display = "block";
    responce2.innerText = responce.string;
    responce2.onclick = function(){runOption(responce.nextOp)};
  }else{
    responce2.style.display = "none";
  }
  if(length>3&&op.responces[3].unlock()){
    let responce = op.responces[3];
    responce3.style.display = "block";
    responce3.innerText = responce.string;
    responce3.onclick = function(){runOption(responce.nextOp)};
  }else{
    responce3.style.display = "none";
  }
  if(length>4&&op.responces[4].unlock()){
    let responce = op.responces[4];
    responce4.style.display = "block";
    responce4.innerText = responce.string;
    responce4.onclick = function(){runOption(responce.nextOp)};
  }else{
    responce4.style.display = "none";
  }
  //////////////////////////////////////////////////////////////////
  if(op.unlock!=null&&op.unlock!=undefined){
    op.unlock();
  }
}

function unlockDebug(){
  document.getElementById("debug").style.display = "inline-block";
}

function unlockTrueEndings(){
  document.getElementById("trueEndingsHidden").style.display = "block";
  document.getElementById("trueEndingHidden1").style.display = "block";
  document.getElementById("trueEndingHidden2").style.display = "block";
  document.getElementById("trueEndingHidden3").style.display = "block";
  document.getElementById("trueEndingHidden4").style.display = "block";
  document.getElementById("trueEndingHidden5").style.display = "block";
}

function updateDebug(){
  save();
  document.getElementById("trueEndings").innerText = annie.trueEndings;
  document.getElementById("endings").innerText = annie.endings;
  document.getElementById("sideQuests").innerText = annie.sideQuests;
  document.getElementById("flower").innerText = annie.flower;
  document.getElementById("tripleHello").innerText = annie.tripleHello;
  document.getElementById("timeyWimey").innerText = annie.timeyWimey;
  document.getElementById("heart").innerText = annie.heart;
  document.getElementById("ripHeart").innerText = annie.ripHeart;
  document.getElementById("cat").innerText = annie.cat;
  document.getElementById("dog").innerText = annie.dog;
  document.getElementById("computer").innerText = annie.computer;
  document.getElementById("letter").innerText = annie.letter;
  document.getElementById("ukraine").innerText = annie.ukraine;
  document.getElementById("books").innerText = annie.books;
  document.getElementById("people").innerText = annie.people;
  document.getElementById("birthday").innerText = annie.birthday;
  document.getElementById("glitch").innerText = annie.glitch;
  document.getElementById("password").innerText = annie.password;
  document.getElementById("instagram").innerText = annie.instagram;
  document.getElementById("end1").innerText = annie.end1;
  document.getElementById("end2").innerText = annie.end2;
  document.getElementById("end3").innerText = annie.end3;
  document.getElementById("end4").innerText = annie.end4;
  if(annie.flower){document.getElementById("flower").className = "";}
  if(annie.timeyWimey){document.getElementById("timeyWimey").className = "";}
  if(annie.heart){document.getElementById("heart").className = "";}
  if(annie.ripHeart){document.getElementById("ripHeart").className = "";}
  if(annie.cat){document.getElementById("cat").className = "";}
  if(annie.dog){document.getElementById("dog").className = "";}
  if(annie.computer){document.getElementById("computer").className = "";}
  if(annie.letter){document.getElementById("letter").className = "";}
  if(annie.tripleHello){document.getElementById("tripleHello").className = "";}
  if(annie.ukraine){document.getElementById("ukraine").className = "";}
  if(annie.books){document.getElementById("books").className = "";}
  if(annie.people){document.getElementById("people").className = "";}
  if(annie.birthday){document.getElementById("birthday").className = "";}
  if(annie.glitch){document.getElementById("glitch").className = "";}
  if(annie.password){document.getElementById("password").className = "";}
  if(annie.instagram){document.getElementById("instagram").className = "";}
  if(annie.end1){document.getElementById("end1").className = "";}
  if(annie.end2){document.getElementById("end2").className = "";}
  if(annie.end3){document.getElementById("end3").className = "";}
  if(annie.end4){document.getElementById("end4").className = "";}
}

function save(){
  localStorage.annie = btoa(JSON.stringify(annie));
  console.log("saved");
}

function load(){
  temp = localStorage.annie;
  if(temp!=null&&temp!=undefined){
    annie = JSON.parse(atob(temp));
  }
  if(annie.computer){
    unlockDebug();
  }
  if(annie.trueEndings>0){
    unlockTrueEndings();
  }
  updateDebug();
}

function deleteProgress(){
  document.getElementById("trueEndingsHidden").style.display = "none";
  document.getElementById("trueEndingHidden1").style.display = "none";
  document.getElementById("trueEndingHidden2").style.display = "none";
  document.getElementById("trueEndingHidden3").style.display = "none";
  document.getElementById("trueEndingHidden4").style.display = "none";
  document.getElementById("trueEndingHidden5").style.display = "none";
  document.getElementById("debug").style.display = "none";
  annie.trueEndings = 0;
  annie.endings = 0;
  annie.sideQuests = 0;
  annie.flower = false;
  annie.tripleHello = false;
  annie.timeyWimey = false;
  annie.heart = false;
  annie.ripHeart = false;
  annie.cat = false;
  annie.dog = false;
  annie.computer = false;
  annie.letter = false;
  annie.ukraine = false;
  annie.books = false;
  annie.people = false;
  annie.birthday = false;
  annie.glitch = false;
  annie.password = false;
  annie.instagram = false;
  annie.end1 = false;
  annie.end2 = false;
  annie.end3 = false;
  annie.end4 = false;
  annie.allDone = false;
}










/////////////////////////////////////////////

var arrNames=new Array();
 
function savedata(){
    var name = document.getElementById('fname').value;
    arrNames[arrNames.length]=name;
    document. getElementById("fname"). value = "";

    
  }

  function start(){
    document.getElementById("display").style.display = "block";
    document.getElementById("disp").style.display = "none";
  }




function haloo() {
  
  var statusCodes = [
    
      [1,"ok", "Starts a round of 'Never have I ever'"],
      [2, "ok", "Say 3 nice things about the person on your right and then both of you drink 3 sips"],
      [3, "ok", "Say 3 nice things about the person on your left and then both of you drink 3 sips"],     
      [4, "ok", "If you are holding a phone in your hand, drink 3 sips. If not, give out 3 sips."],
      [5,"ok", "Starts a round of waterfall"],
      [6, "ok", "If you are a brunette give out 3 sips. If not, drink 3 sips."],
      [7, "ok", "Starts. Name car brands. The loser drinks 3 sips"],
      [8, "ok", "If you are wearing jeans, drink 3 sips. If not, give out 3 sips."],
      [9, "ok", "Others will guess the colour of your underwear. If they are right, they get to give out 2 sips and if they are wrong, they drink 2 sips"],
      [10, "ok", "Play Rock, Paper, Scissors with someone. Loser drinks 3 sips."],
      [11, "ok", "Drink 1 sip"],
      [12, "ok", "Drink 2 sips"],
      [13, "ok", "Drink 3 sips"],
      [14, "ok", "Drink 4 sips"], 
      [15, "ok", "Give out as many sips as players full names you know"],

      [16, "ok", "Name as many famous painters as you can and give out as many sips"],

      [17, "ok", "If you have left someone with a text, drink 2 sips. If not, give out 2 sips."],

      [18, "ok", "Those who are shorter, drink 2 sips"],

      [19, "ok", "Starts. Name bald celebrities. Loser drinks 3 sips."],
 
      [20, "ok", "Give out 2 sips to the player you have known the longest"],
 
      [21, "ok", "Play Rock, Paper, Scissors with someone. Loser drinks 3 sips."],

      [22, "ok", "Give out 2 sips to the player you have known the shortest"],
 
      [23, "ok", "Give out 2 sips to someone shorter than you. If you are the shortest, drink 2 sips"],
 
      [24, "ok", "Give out 2 sips to someone younger than you. If you are the youngest, drink 2 sips"],
 
      [25, "ok", "Close your eyes. If you remember what everyone is drinking, give out 4 sips. If not, drink 4 sips"],
 
      [26, "ok", "If you have never watched an entire game of football, drink 2 sips. If you have give out 2 sips"],

      [27, "ok", "Challenge someone to a thumb war. Loser drinks 2 sips"],
 
      [28, "ok", "Hum a song. The first player to guess the song can give out 4 sips"],

      [29, "OK", "Hum a song. The first player to guess the song can give out 4 sips"],
 
      [30, "ok", "Give out as many sips as you have cousins"],
 
      [31, "ok", "If you have ever done something illegal, drink 2 sips. If not, give out 2 sips"],

      [32, "ok", "Tell others the last thing you googled or drink 3 sips"],

      [33, "ok", "If you have ever sent naughty pics, drink 3 sips. If not, give out 3 sips"],
 
      [34, "ok", "If you have ever cheated on an exam, drink 3 sips. If not, give out 3 sips"],
 
      [35, "ok", "Close your eyes. Now tell us what everyone is drinking. For every right answer you can give out 1 sip and for wrong answers you have to drink 1 sip"],

      [36, "ok", "If you can name 3 songs from Justin Bieber, give out 3 sips. If not, drink 3 sips"],

      [37, "ok","If you can name 3 songs from Nicki Minaj, give out 3 sips. If not, drink 3 sips"],
  
      [38, "ok", "Give out 2 sips"],
 
      [39, "ok", "Give out 4 sips"],
  
      [40, "ok", "Give out 6 sips"],

      [41, "ok", "Starts. 'Cocktails you can order from a bar', the first one to run out of ideas drinks 3 sips"],

      [42, "ok", "Starts. 'Car brands', the first one to run out of ideas drinks 3 sips"],

      [43, "ok", "Name as many Asian capital cities as you can and hand out that many sips. If you can't name any, drink 4 sips"],

      [44, "ok", "If you're single, give out 2 sips"],
 
      [45, "ok", "Drink maximum of 10 sips. You can give out as many sips as you drink"],

      [46, "ok", "Do 10 squats or drink 4 sips"],

      [47, "ok", "Starts. 'Sex positions', the first one to run out of ideas drinks 3 sips"],
 
      [48, "ok", "Give out as many sips as you have siblings"],

      [49, "ok", "Tell a joke or drink 3 sips"],

      [50, "ok", "Drink 2 sips if you have ever vomited in a hangover. If not, give out 3 sips"],

      [51, "ok", "Give someone 1 euro or drink the rest of you drink"],
 
      [52, "ok", "You can give out 3 sips if you can name 5 songs by Justin Bieber. If not, drink 3 sips"],
 
      [53, "ok", "Congratulations! You can give out 10 sips!"],
 
      [54, "ok", "If this party is happening at your place, you can give out 3 sips. If not, drink 3 sips"],

      [55, "ok", "If your outfit is worth more than 200€, you can give out 5 sips. If not, drink 5 sips"],

      [56, "ok", "Anyone who has lived in more than 3 towns can give out 3 sips"],

      [57, "ok", "If your bike has ever been stolen, you can give out 4 sips"],
 
      [58, "ok", "If you have ever been in a car crash, you can give out 4 sips"],

      [59, "ok", "The tallest player can give out 3 sips"],

      [60, "ok", "The youngest one drinks 1 sip and gets to give out 3 sips."],
 
      [61, "ok", "The oldest one drinks 1 sip and gets to give out 3 sips."],
 
      [62, "ok", "The one with the longest first name gets to give out 5 sips."],
 
      [63, "ok", "Lets vote. Who is most likely to be rich in the future? Winner drinks 4 sips."],

      [64, "ok", "Lets vote. Dogs or cats. The minority will drink 2 sips"],

      [65, "ok", "Lets vote. Black or white clothes. The minority will drink 2 sips"],
 
      [66, "ok", "Lets vote. Red wine or white wine. The minority will drink 2 sips"],

      [67, "ok", "Lets vote. Pizza or burgers. The minority will drink 2 sips"],
 
      [68, "ok", "All men drink 2 sips!"],
 
      [69, "ok", "All women drink 2 sips!"],

      [70, "ok", "The last player to have been in contact with the police, drink 3 sips"],

      [71, "ok", "Lets vote. Who is most likely to get in trouble with the police. Winner drinks 2 sips"],

      [72, "ok", "Lets vote. Who is most likely to get in a bar fight? Winner drinks 2 sips"],
 
      [73, "ok", "Lets vote. Who is most likely to get children next? Winner drinks 2 sips"],

      [74, "ok", "Lets vote. Who is most likely to be most drunk tonight? Winner gives out 3 sips"],
 
      [75, "ok", "Give out 3 sips if you haven't used any nicotine products today"],
 
      [76, "ok", "Drink 2 sips if you have ordered a salad from a fast food restaurant"],

      [77, "Ok", "Drink 2 sips if you are wearing white socks"],

      [78, "ok", "Drink 2 sips if you've ever had braces"],
 
      [79, "ok", "The player with the most cash can give out 5 sips"],

      [80, "ok", "If you cant touch your toes when standing, drink 2 sips"],

      [81, "ok", "People in relationships, give out 2 sips to someone"],

      [82, "ok", "The first person to finish their drink can give out 6 sips"],
 
      [83, "ok", "Starts. 'Different cocktails from a bar', the first one to run out of ideas drinks 3 sip"],
 
      [84, "ok", "People with an S in your first name, drink 3 sips"],

      [85, "Ok", "People who are drinking beer, drink 2 sips!"],

      [86, "ok", "Try to touch your nose with your tongue. If you can do it, give out 3 sips"],

      [87, "ok", "Everyone with the letter 'o' in their first name, drink 2 sips"],
 
      [88, "ok", "The player who has the most cash with them right now can give out 6 sips"],
 
      [89, "ok", "The current DJ of the evening can give out 4 sips"],
 
      [90, "ok", "Everyone drinks 3 sips!"],
 
      [91, "ok", "If you have ever been skinny dipping, give out 3 sips"],
 
      [92, "ok", "If you have Tinder in your phone, give out 2 sips"],
 
      [93, "ok", "If you have brown eyes, drink 2 sips"],
 
      [94, "ok", "Give out 3 sips if you haven't seen any of the Star Wars movies"],
  
      [95, "ok", "The first one to come up with an inspirational quote gives out 4 sips"],
 
      [96, "ok", "Get your serious face on. The next person to smile or laugh has to drink 3 sips"],

      [97, "ok", "Those who have ever stolen something drink 2 sips"],

      [98, "Ok", "If you had erotic dreams this week, drink 3 sips"],

      [99, "ok", "Drink 3 sips if you have ever driven the wrong way down on a one-way street"],

      [100, "ok",  "Everyone play rock-paper-scissors with someone. Losers drink 2 sips"],

  ]

  var rand = Math.floor(Math.random() * (statusCodes.length))

  var code = statusCodes[rand][0]
  var head = [statusCodes[rand][2]]
  var body = ""
  var content= [...arrNames];

  const random = Math.floor(Math.random() * content.length);
  console.log(random, content[random]);

  if (code < 56) {
    document.getElementById("halloo").innerHTML = (random, content[random]) + " " + head;
  } else {
    document.getElementById("halloo").innerHTML = head;
  }

  }
var player1 = [];
var player2 = [];
var cardsPlayed = [];
var deck = [];
var $draw = $("#draw");
var $player1 = $("#player1");
var $player2 = $("#player2");
var $p1number = $("#p1number");
var $p2number = $("#p2number");
var $p1suit = $("#p1suit");
var $p2suit = $("#p2suit");
var $winner = $("#winner");
var $p1count = $("#p1count");
var $p2count = $("#p2count");
var num1;
var num2
var suit1;
var suit2;
var suit1value;
var suit2value;
var numImg1;
var numImg2;



deck.shuffle = function() {
  console.log("shuffle");
  var input = deck;
  for (var i = deck.length - 1; i >= 0; i--) {
    var randomIndex = Math.floor(Math.random()*(i+1));
    var itemAtIndex = deck[randomIndex][0];
    var itemAtSecond = deck[randomIndex][1];
    input[randomIndex][0] = input[i][0];
    input[randomIndex][1] = input[i][1];
    input[i][0] = itemAtIndex;
    input[i][1] = itemAtSecond;
  }
  return input;
}

for (var number = 1; number <= 13; number++) {
  for (var suit = 1; suit <= 4; suit++) {
    console.log(j = [number, suit]);
    deck.push(j);
  }
}

deck.shuffle();

var half = deck.length/2;

for (i = 0; i < half; i++) {
  player1.push(deck[i]);
}

deck.splice(0, half);

player2 = deck;
$p1count.html(player1.length);
$p2count.html(player2.length);


function draw() {
  if ((player1.length == 0 || player2.length == 0)||(player1.length == 0 && player2.length == 0)) {
    end();
  } else {
    $p1suit.css("display", "block")
    $p2suit.css("display", "block")
    num1 = player1 [0][0];
    num2 = player2 [0][0];
    $p1suit.empty();
    $p2suit.empty();
    $p1number.html(num1);
    $p2number.html(num2);
    suit1 = player1 [0][1];
    suit2 = player2 [0][1];
    if (suit1 == 1) {
      suit1value = suit1;
      suit1 = "<img src='resources/images/spades.png'/>";
    }
    if (suit1 == 2) {
      suit1value = suit1;
      suit1 = "<img src='resources/images/clubs.png'/>";
    }
    if (suit1 == 3) {
      suit1value = suit1;
      suit1 = "<img src='resources/images/diamonds.png'/>";
    }
    if (suit1 == 4) {
      suit1value = suit1;
      suit1 = "<img src='resources/images/hearts.png'/>";
    }
    if (suit2 == 1) {
      suit2value = suit2;
      suit2 = "<img src='resources/images/spades.png'/>";
    }
    if (suit2 == 2) {
      suit2value = suit2;
      suit2 = "<img src='resources/images/clubs.png'/>";
    }
    if (suit2 == 3) {
      suit2value = suit2;
      suit2 = "<img src='resources/images/diamonds.png'>";
    }
    if (suit2 == 4) {
      suit2value = suit2;
      suit2 = "<img src='resources/images/hearts.png'>";
    }
    //end suits
    //begin face cards
    if (num1 < 11) {
      if (num1 == 1) {
        if (suit1value == 1) {
          numImg1 = "<img src = 'resources/images/cards/ace_of_spades.png'>";
        };
        if (suit1value == 2) {
          numImg1 = "<img src = 'resources/images/cards/ace_of_clubs.png'>";
        };
        if (suit1value == 3) {
          numImg1 = "<img src = 'resources/images/cards/ace_of_diamonds.png'>";
        };
        if (suit1value == 4) {
          numImg1 = "<img src = 'resources/images/cards/ace_of_hearts.png'>";
        };
        $p1number.html(numImg1);
      } else {
        for (var i = 0; i < num1; i++) {
          $p1suit.append(suit1);
        };
      }
    } else if (num1 >= 11) {
      if (num1 == 11) {
        if (suit1value == 1) {
          numImg1 = "<img src = 'resources/images/cards/jack_of_spades2.png'>";
        };
        if (suit1value == 2) {
          numImg1 = "<img src = 'resources/images/cards/jack_of_clubs2.png'>";
        };
        if (suit1value == 3) {
          numImg1 = "<img src = 'resources/images/cards/jack_of_diamonds2.png'>";
        };
        if (suit1value == 4) {
          numImg1 = "<img src = 'resources/images/cards/jack_of_hearts2.png'>";
        };
      };
      if (num1 == 12) {
        if (suit1value == 1) {
          numImg1 = "<img src = 'resources/images/cards/queen_of_spades2.png'>";
        };
        if (suit1value == 2) {
          numImg1 = "<img src = 'resources/images/cards/queen_of_clubs2.png'>";
        };
        if (suit1value == 3) {
          numImg1 = "<img src = 'resources/images/cards/queen_of_diamonds2.png'>";
        };
        if (suit1value == 4) {
          numImg1 = "<img src = 'resources/images/cards/queen_of_hearts2.png'>";
        };
      };
      if (num1 == 13) {
        if (suit1value == 1) {
          numImg1 = "<img src = 'resources/images/cards/king_of_spades2.png'>";
        };
        if (suit1value == 2) {
          numImg1 = "<img src = 'resources/images/cards/king_of_clubs2.png'>";
        };
        if (suit1value == 3) {
          numImg1 = "<img src = 'resources/images/cards/king_of_diamonds2.png'>";
        };
        if (suit1value == 4) {
          numImg1 = "<img src = 'resources/images/cards/king_of_hearts2.png'>";
        };
      };
      $p1number.html(numImg1);
    }

    if (num2 < 11) {
      if (num2 == 1) {
        if (suit2value == 1) {
          numImg2 = "<img src = 'resources/images/cards/ace_of_spades.png'>";
        };
        if (suit2value == 2) {
          numImg2 = "<img src = 'resources/images/cards/ace_of_clubs.png'>";
        };
        if (suit2value == 3) {
          numImg2 = "<img src = 'resources/images/cards/ace_of_diamonds.png'>";
        };
        if (suit2value == 4) {
          numImg2 = "<img src = 'resources/images/cards/ace_of_hearts.png'>";
        };
        $p2number.html(numImg2);
      } else {
        for (var i = 0; i < num2; i++) {
          $p2suit.append(suit2);
        };
      };
    } else if (num2 >= 11) {
      if (num2 == 11) {
        if (suit2value == 1) {
          numImg2 = "<img src = 'resources/images/cards/jack_of_spades2.png'>";
        };
        if (suit2value == 2) {
          numImg2 = "<img src = 'resources/images/cards/jack_of_clubs2.png'>";
        };
        if (suit2value == 3) {
          numImg2 = "<img src = 'resources/images/cards/jack_of_diamonds2.png'>";
        };
        if (suit2value == 4) {
          numImg2 = "<img src = 'resources/images/cards/jack_of_hearts2.png'>";
        };
      };
      if (num2 == 12) {
        if (suit2value == 1) {
          numImg2 = "<img src = 'resources/images/cards/queen_of_spades2.png'>";
        };
        if (suit2value == 2) {
          numImg2 = "<img src = 'resources/images/cards/queen_of_clubs2.png'>";
        };
        if (suit2value == 3) {
          numImg2 = "<img src = 'resources/images/cards/queen_of_diamonds2.png'>";
        };
        if (suit2value == 4) {
          numImg2 = "<img src = 'resources/images/cards/queen_of_hearts2.png'>";
        };
      };
      if (num2 == 13) {
        if (suit2value == 1) {
          numImg2 = "<img src = 'resources/images/cards/king_of_spades2.png'>";
        };
        if (suit2value == 2) {
          numImg2 = "<img src = 'resources/images/cards/king_of_clubs2.png'>";
        };
        if (suit2value == 3) {
          numImg2 = "<img src = 'resources/images/cards/king_of_diamonds2.png'>";
        };
        if (suit2value == 4) {
          numImg2 = "<img src = 'resources/images/cards/king_of_hearts2.png'>";
        };
      };
      $p2number.html(numImg2);
    }

    cardsPlayed.push(player1[0]);
    cardsPlayed.push(player2[0]);

    player1.splice(0,1);
    player2.splice(0,1);
    $p1count.html(player1.length);
    $p2count.html(player2.length);

    winner();
  }
}

war = function() {
  $winner.html("This means WAR!!!");
  for (i = 0; i < 3; i++) {
    cardsPlayed.push(player1[0]);
    cardsPlayed.push(player2[0]);
    console.log(cardsPlayed.length);
    player1 .splice(0,1);
    player2 .splice(0,1);
    $p1count.html(player1.length);
    $p2count.html(player2.length);
  };

  $p1suit.css("display", "none");
  $p2suit.css("display", "none");

  numImg1 = "<img style = 'height: 14rem;' src='resources/images/cardback.png'>";
  $p1number.html(numImg1);
  numImg2 = "<img style = 'height: 14rem;' src='resources/images/cardback.png'>";
  $p2number.html(numImg2);

  window.setTimeout(function() {
  }, 1000);
  window.setTimeout(function() {
  }, 1800);
  window.setTimeout(function() {
    draw();
  }, 2600);
}

winner = function() {
  if (num1 > num2) {
    $winner.html("Player One Wins");
    for (var i = 0; i < cardsPlayed.length; i++) {
      player1.push(cardsPlayed[i]);
    }
    $p1count.html(player1.length);
    cardsPlayed = [];
  } else if (num2 > num1) {
    $winner.html("Player Two Wins");
    for (var i = 0; i < cardsPlayed.length; i++) {
      player2.push(cardsPlayed[i]);
    }
    $p2count.html(player2.length);
    cardsPlayed = [];
  } else if (num1 == num2) {
    war();
  }
  console.log(cardsPlayed);
  $p1count.html(player1.length);
  $p2count.html(player2.length);
  cardsPlayed = [];
}

end = function() {
  if (player1.length == 0) {
    $winner.html("Player 1 wins the game! Player 2 has no cards left!")
  } else if (player2.length <= 0) {
    $winner.html("Player 2 wins the game! Player 1 has no cards left!")
  } else if (player1.length == player2.length) {
    $("body").html("STOP MESSING WITH MY CODE!!!!!")
    return;
  }
}

$draw.on('click', function() {
  draw();
});

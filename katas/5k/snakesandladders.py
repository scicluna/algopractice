# Snakes and Ladders is an ancient Indian board game regarded today as a worldwide classic. It is played between two or more players on a 
# gameboard having numbered, gridded squares. 
# A number of "ladders" and "snakes" are pictured on the board, each connecting two specific board squares. (Source Wikipedia)

# Task
# Your task is to make a simple class called SnakesLadders. 
# The test cases will call the method play(die1, die2) independantly of the state of the game or the player turn. 
# The variables die1 and die2 are the die thrown in a turn and are both integers between 1 and 6. The player will move the sum of die1 and die2.

# 1.  There are two players and both start off the board on square 0.

# 2.  Player 1 starts and alternates with player 2.

# 3.  You follow the numbers up the board in order 1=>100

# 4.  If the value of both die are the same then that player will have another go.

# 5.  Climb up ladders. The ladders on the game board allow you to move upwards and get ahead faster. If you land exactly on a square that shows an image of the bottom of a ladder, then you may move the player all the way up to the square at the top of the ladder. (even if you roll a double).

# 6.  Slide down snakes. Snakes move you back on the board because you have to slide down them. If you land exactly at the top of a snake, slide move the player all the way to the square at the bottom of the snake or chute. (even if you roll a double).

# 7.  Land exactly on the last square to win. The first person to reach the highest square on the board wins. But there's a twist! If you roll too high, your player "bounces" off the last square and moves back. You can only win by rolling the exact number needed to land on the last square. For example, if you are on square 98 and roll a five, move your game piece to 100 (two moves), then "bounce" back to 99, 98, 97 (three, four then five moves.)

# 8.  If the Player rolled a double and lands on the finish square “100” without any remaining moves then the Player wins the game and does not have to roll again.

# Return Player n Wins!. Where n is winning player that has landed on square 100 without any remainding moves left.

# Return Game over! if a player has won and another player tries to play.

# Otherwise return Player n is on square x. Where n is the current player and x is the sqaure they are currently on.

class SnakesLadders():

    def __init__(self):
        self.player1 = ["Player 1", 0]
        self.player2 = ["Player 2", 0]
        self.player1_turn = True

    def play(self, die1, die2):
        if self.player1[1] == 100 or self.player2[1] == 100:
            return "Game over!"

        player =  self.player1 if self.player1_turn else self.player2
        if player[1] + (die1+die2) <= 100:
            player[1] += (die1+die2)
        else:
            player[1] = 100 - (player[1] + (die1+die2) - 100)

        player[1] += self.ladder_check(player)
        player[1] -= self.snake_check(player)

        if die1 != die2:
            self.player1_turn = False if self.player1_turn else True

        if player[1] == 100:
            return f"{player[0]} Wins!"

        if player[0] == "Player 1":
            self.player1 = player
        else:
            self.player2 = player

        return f"{player[0]} is on square {player[1]}"
    
    def ladder_check(self, player):
        ladder_dict = {
            2: 36,
            7: 7,
            8: 23,
            15: 11,
            21: 21,
            28: 56,
            36: 8,
            51: 16,
            71: 20,
            78: 20,
            87: 7
        }

        if player[1] in ladder_dict:
            return ladder_dict[player[1]]
        else:
            return 0
        
    def snake_check(self, player):
        snake_dict = {
            16:10,
            46:21,
            49:38,
            62:43,
            64:4,
            74:21,
            89:21,
            92:4,
            95:20,
            99:19
        }

        if player[1] in snake_dict:
            return snake_dict[player[1]]
        else:
            return 0

game = SnakesLadders()
print(game.play(1,1))
print(game.play(1,5))
print(game.play(6,2))
print(game.play(1,1))
    
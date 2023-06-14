# Take a look at wiki description of Connect Four game:

# Wiki Connect Four

# The grid is 6 row by 7 columns, those being named from A to G.

# You will receive a list of strings showing the order of the pieces which dropped in columns:

#   pieces_position_list = ["A_Red",
#                           "B_Yellow",
#                           "A_Red",
#                           "B_Yellow",
#                           "A_Red",
#                           "B_Yellow",
#                           "G_Red",
#                           "B_Yellow"]
# The list may contain up to 42 moves and shows the order the players are playing.

# The first player who connects four items of the same color is the winner.

# You should return "Yellow", "Red" or "Draw" accordingly.

def who_is_winner(pieces):
    board = [[0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],
             [0,0,0,0,0,0,0],]
    positions = {
        "A": {"depth": 5, "column":0},
        "B": {"depth": 5, "column":1}, 
        "C": {"depth": 5, "column":2}, 
        "D": {"depth": 5, "column":3}, 
        "E": {"depth": 5, "column":4}, 
        "F": {"depth": 5, "column":5}, 
        "G": {"depth": 5, "column":6},  
    }

    for placement in pieces:
        column, color = placement.split('_')
        dep = positions[column]["depth"]
        col = positions[column]["column"]

        board[dep][col] = color
        positions[column]["depth"] -= 1
        if win_check(board):
            return color 
    return "Draw"       

def win_check(board):
    if horizontal_win(board):
        return True
    if vertical_win(board):
        return True
    if diagonaltrbl_win(board): 
        return True
    if diagonaltlbr_win(board):
        return True
    return False

def horizontal_win(board):
    check_number = 0
    for row in board:
        for i in range(len(row)-1):
            if row[i] == row[i+1] and row[i] != 0:
                check_number += 1
                if check_number >= 3:
                    return True
            else:
                check_number = 0
        check_number = 0
    return False

def vertical_win(board):
    check_number = 0
    for col in range(7):
        for dep in range(5):
            if board[dep][col] == board[dep+1][col] and board[dep][col] != 0:
                check_number += 1
                if check_number >= 3:
                    return True
            else:
                check_number = 0
        check_number = 0
    return False

def diagchecktrbl(board, r, i, dir):
    check = 0
    if (dir == 1 and r != 0 and i != len(board[r])-1) or (dir == -1 and r != len(board)-1 and i != 0):
        if board[r][i] == board[r-dir][i+dir]:
            check += 1
            check += diagchecktrbl(board, r-dir, i+dir, dir)
    return check

def diagonaltrbl_win(board):
    for r in range(len(board)):
        for i in range(len(board[r])):
            if board[r][i] != 0:
                if diagchecktrbl(board, r, i, 1) >= 3 or diagchecktrbl(board, r, i, -1) >= 3:
                    return True
    return False

def diagchecktlbr(board, r, i, dir):
    check = 0
    if (dir == 1 and r != 0 and i != 0) or (dir == -1 and r != len(board)-1 and i != len(board[r])-1):
        if board[r][i] == board[r-dir][i-dir]:
            check += 1
            check += diagchecktlbr(board, r-dir, i-dir, dir)
    return check

def diagonaltlbr_win(board):
    for r in range(len(board)):
        for i in range(len(board[r])):
            if board[r][i] != 0:
                if diagchecktlbr(board, r, i, 1) >= 3 or diagchecktlbr(board, r, i, -1) >= 3:
                    return True
    return False

print(who_is_winner(['E_Red', 'C_Yellow', 'D_Red', 'F_Yellow', 'D_Red', 'C_Yellow', 'D_Red', 'D_Yellow', 'B_Red', 'D_Yellow', 'G_Red', 'E_Yellow', 'B_Red', 'D_Yellow']))

[[0, 0, 0, 0, 0, 0, 0], 
 [0, 0, 0, 0, 0, 0, 0], 
 [0, 0, 0, 0, 0, 0, 0], 
 [0,       0,      0,     0,     'Yellow',    0,         0], 
 ['Red', 'Red', 'Yellow', 0,     'Yellow', 'Yellow', 'Yellow'], 
 ['Red', 'Red', 'Red', 'Yellow', 'Yellow', 'Red',    'Red']]
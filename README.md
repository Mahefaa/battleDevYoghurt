Objective
You are in charge of carrying out an exciting marketing study on the packaging of a new 
organic yoghurt issued from short circuits. Even if you regret to see a "responsible" 
brand inspired by the methods of industrial producers, this is your job and you have no 
choice... You receive the results of a study where consumers indicate the colour they 
prefer for packaging. Not wanting to make such an important decision alone, you want 
to present the 2 preferred colors to your boss.

Data format
Input
    Row 1: an integer N between 3 and 10 000 corresponding to the number of people 
    interviewed. 
    Rows 2 to N+1 : a string comprising between 4 and 10 lower case letters corresponding 
    to the color preferred by a given person.

    Output
    Two strings separated by a space representing the two colors that come out the most. 
    The first string must be the color that is favored by the greatest number of people.
    There will never be two colors with the same number of votes.
    Example

    Input
        6
        red
        yellow
        blue
        red
        yellow
        red
    Output
        red yellow
        Because red got 3 votes, yellow two votes and blue 1 vote
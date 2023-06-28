using System.Linq;
using System;
public static class Kata
{
    public static bool XO(string input)
    {
        var x = 0;
        var o = 0;
        foreach (char letter in input.ToLower())
        {
            if (letter == 'x')
            {
                x += 1;
            }
            else if (letter == 'o')
            {
                o += 1;
            }
        }
        return x == o;
    }
}
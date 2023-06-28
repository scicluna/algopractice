public class Kata
{
    public static int SumMul(int n, int m)
    {
        if (n > m || n <= 0)
        {
            throw new System.ArgumentException("Invalid arguments: n should be less than or equal to m and greater than 0");
        }

        var sum = 0;
        for (var i = n; i < m; i += n)
        {
            sum += i;
        }
        return sum;
    }
}
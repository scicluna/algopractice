using System;
public static class JadenCase
{
    public static string ToJadenCase(this string phrase)
    {
        string[] newPhrase = phrase.Split(" ");
        for (var i = 0; i < newPhrase.Length; i++)
        {
            char[] newWord = newPhrase[i].ToCharArray();
            newWord[0] = Char.ToUpper(newWord[0]);
            var modified = new string(newWord);
            newPhrase[i] = modified;
        }
        return string.Join(" ", newPhrase);
    }
}

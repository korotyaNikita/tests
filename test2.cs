using System;

class Hedgehogs
{
    public static int MinMeetings(int[] population, int targetColor)
    {
        // Якщо всі їжачки вже бажаного кольору, зустрічей не потрібно
        if (population[targetColor] == population[0] + population[1] + population[2])
            return 0;
            
        // Знаходимо номери не цільового кольору
        int otherColor1 = (targetColor + 1) % 3; 
        int otherColor2 = (targetColor + 2) % 3; 
        
        if (population[targetColor] == 0 && (population[otherColor1] == 0 || population[otherColor2] == 0))
            return -1;
            
        if (population[otherColor1] == population[otherColor2]) 
            return population[otherColor1];
            
        if ((population[otherColor1] - population[otherColor2]) % 3 == 0) 
            return population[otherColor1] > population[otherColor2] ? population[otherColor1] : population[otherColor2];

        return -1;
    }

    static void Main(string[] args)
    {
        int[] population = { 0, 4, 0 }; // Вхідні дані
        int targetColor = 1; // Бажаний колір

        int result = MinMeetings(population, targetColor);
        Console.WriteLine(result);
    }
}
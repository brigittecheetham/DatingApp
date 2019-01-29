using System;
using Microsoft.AspNetCore.Http;

public static class Extensions
{
    public static void AddApplicationError(this HttpResponse response, string errorMessage)
    {
        response.Headers.Add("Application-Error", errorMessage);
        response.Headers.Add("Access-Control-Expose-Headers","Application-Error");
        response.Headers.Add("Access-Control-Allow-Origin", "*");
    }

    public static int CalculateAge(this DateTime date)
    {
        int age = DateTime.Today.Year - date.Year;

        if (date.AddYears(age) > DateTime.Today)
            age--;

        return age;
    }
}
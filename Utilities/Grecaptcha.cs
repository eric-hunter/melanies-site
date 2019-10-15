using System;
using System.Collections.Generic;
using System.IO;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using Newtonsoft.Json;

public class Grecaptcha
    {
        
        public class ApiResponse
        {
            public bool success {get;set;}
            public string challenge_ts {get;set;}
            public string hostname {get;set;}
        }

        public static async Task<ApiResponse> GetGoogleResponseAsync(string secret, string clientResponse)
        {
            string url = "https://www.google.com/recaptcha/api/siteverify";
            WebRequest request = WebRequest.Create(url);

            string postData = string.Format("secret={0}&response={1}&remoteip={2}", secret, clientResponse, string.Empty);        
        
            request.Method = "POST";
            request.ContentType = "application/x-www-form-urlencoded";
            request.ContentLength = postData.Length;

            StreamWriter writer = new StreamWriter(await request.GetRequestStreamAsync());
            writer.Write(postData);
            writer.Close();

            JsonSerializer serializer = new JsonSerializer();
            
            ApiResponse responseData = null;
            using (StreamReader streamReader = new StreamReader(request.GetResponse().GetResponseStream())) 
            using (JsonReader jsonReader = new JsonTextReader(streamReader))
            {
                while (jsonReader.Read())
                {
                    if (jsonReader.TokenType == JsonToken.StartObject)
                    {
                        responseData = serializer.Deserialize<ApiResponse>(jsonReader);
                    }                
                }
            }
            
            return responseData;
        }

        // public static async Task<ApiResponse> GetGoogleResponseAsync(string secret, string clientResponse)
        // {   
        //     var client = HttpClientFactory.Create();
        //     var request = new {
        //         secret = secret,
        //         response = clientResponse
        //     };
        //     var response = await client.PostAsJsonAsync(
        //         "https://www.google.com/recaptcha/api/siteverify", request);

        //     ApiResponse apiResponse = await response.Content.ReadAsAsync<ApiResponse>();
        //     return apiResponse;
        // }
    }

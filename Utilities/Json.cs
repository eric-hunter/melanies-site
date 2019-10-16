using System.IO;
using Newtonsoft.Json;

namespace melanies_site.Utilities
{
    public static class Json
    {
        public static T GetJsonFromStream<T>(Stream s)
        {
            JsonSerializer serializer = new JsonSerializer();
            
            T responseData = default(T);
            using (StreamReader streamReader = new StreamReader(s)) 
            using (JsonReader jsonReader = new JsonTextReader(streamReader))
            {
                while (jsonReader.Read())
                {
                    if (jsonReader.TokenType == JsonToken.StartObject)
                    {
                        responseData = serializer.Deserialize<T>(jsonReader);
                    }                
                }
            }
            return responseData;
        }
    }
}
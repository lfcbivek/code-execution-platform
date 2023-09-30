import requests
import os
from dotenv import load_dotenv
from constants import GET_SUBMISSIONS_URL
load_dotenv()


token = "d1003560-590b-4dda-bc45-5e87c073ff08"
url = GET_SUBMISSIONS_URL+token

querystring = {"base64_encoded":"false","fields":"*"}

headers = {
	"X-RapidAPI-Key": os.getenv('X-RAPID-API-KEY'),
	"X-RapidAPI-Host": "judge0-ce.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
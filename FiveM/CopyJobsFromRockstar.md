---
title: Copy Jobs From Rockstar
description: 
published: false
date: 2024-10-20T10:46:00.078Z
tags: 
editor: markdown
dateCreated: 2023-12-22T09:58:43.345Z
---

# 1.get json web

## Install Python

[https://www.python.org/downloads/](https://www.python.org/downloads/)

-   During installation, make sure to check the "Add Python to PATH" option

## Install dependent libraries

win+X to open terminal or command prompt

Run the following command to install the `requests` library:

```plaintext
pip install requests
```

## Copy code

Use Notepad to create a new “json-web-search”, change the suffix to .py, copy the following content and save it

```plaintext
import requests
import json
import threading
from concurrent.futures import ThreadPoolExecutor, as_completed

MAX_CONCURRENT_REQUESTS = 20

def crawl_url(url, found_data):
    if found_data.is_set():
        # Data found by another thread, no need to continue
        return False

    headers = {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
    }

    try:
        response = requests.get(url, headers=headers)

        if response.status_code == 200:
            try:
                data = response.json()
                if data:
                    print(f"Json data found:{url}")
                    print(f"Please copy it into Nicko's Job Editor (do not copy spaces).")
                    # Set the flag indicating data is found
                    found_data.set()
                    return True
            except json.JSONDecodeError:
                print(f"Invalid JSON response for URL: {url}")
        elif response.status_code == 404:
            print(f"URL not found: {url}")
        else:
            print(f"Error for URL {url}: {response.status_code}")

    except requests.RequestException as e:
        print(f"Error for URL {url}: {str(e)}")

    return False

def crawl_urls_concurrently(base_url):
    found_data = threading.Event()

    urls = []
    for i in range(3):
        for j in range(500):
            for lang in ["en", "ja", "zh", "zh-cn", "fr", "de", "it", "ru", "pt", "pl", "ko", "es", "es-mx"]:
                old_url = f"{base_url}/2_0.jpg"
                url = f"{base_url.rsplit('/', 1)[0]}/{i}_{j}_{lang}.json"
                urls.append(url)

    with ThreadPoolExecutor(max_workers=MAX_CONCURRENT_REQUESTS) as executor:
        futures = [executor.submit(crawl_url, url, found_data) for url in urls]
        for future in as_completed(futures):
            # Stop further crawling if any of the tasks returns True (data found)
            if future.result():
                break

if __name__ == "__main__":
    while True:
        base_url = input("Please paste the job image URL（For example https://prod.cloud.rockstargames.com/ugc/gta5mission/1966/b5qPg2UtVkyK90ynmAl2-A/2_0.jpg）: ")

        if base_url.lower() == 'exit':
            break

        crawl_urls_concurrently(base_url)
```

> -   `MAX_CONCURRENT_REQUESTS = 20`It is the number of concurrent queries at the same time. It is determined according to your own CPU performance. It is recommended to be between 10 and 20.
> -   `i in range(3)`Just leave it as default
> -   `j in range(500)`Just leave it as default
> -   `lang in ["en", "ja", "zh", "zh-cn", "fr", "de", "it", "ru", "pt", "pl", "ko", "es", "es-mx"]`If you know the author's nationality, you can delete other country code to speed up the query.

## Run code

Right-click "json-web-search.py" to pop up the menu and open it using Python

A terminal program will pop up, prompting "Please enter the job image URL"

## Paste image URL

[https://socialclub.rockstargames.com/jobs](https://socialclub.rockstargames.com/jobs)

Search for the job you want to copy, right-click and copy the job image URL address（Sorry, there are Chinese words in the pic.）

![](https://gta5bmx.me/fivem%E7%9B%B8%E5%85%B3/nicko's_job_editor_2.png)

Paste it into the terminal program and press Enter to confirm

Print "The json has been found, Please copy it into Nicko's Job Editor (do not copy spaces)."

# 2.get .xml

## **Open Nicko's Job Editor**

[Google Drive](https://drive.google.com/file/d/1eGthxOLaJ3IN3a1g2F8mxdbviK8UihTa/view)

![](https://gta5bmx.me/fivem%E7%9B%B8%E5%85%B3/nicko's_job_editor_1.png)

Right click and paste the json address you just copied

## Convert

Do you want to replace checkpoints by markers（Yes）

Do you want to replace checkpoints by vehicles（Yes）

Select the xml saving path.

# 3.paste xml content

1.Select Props

![](/fivem相关/copy1.png)

2.Select Advanced Option

![](/fivem相关/copy2.png)

3.Select Upload XML

![](/fivem相关/copy3.png)

4.Open the xml file with notepad and copy the contents inside

5.Paste it

# Extra things to do

## ⚠️Open Check Height

Avoid reaching checkpoints while on the ground

1.Select Checkpoint

![](/fivem相关/cptips1.png)

2.Select Override

![](/fivem相关/cptips2.png)

3.Check Height（Yes）

![](/fivem相关/cptips3.png)

## Race details

![](https://gta5bmx.me/fivem%E7%9B%B8%E5%85%B3/%E5%9B%BE%E5%90%8D%E4%BF%A1%E6%81%AF.png)

-   Title（Do not include illegal symbols such as \\/:"\*?<>|）
-   Description（Do not include illegal symbols such as \\/:"\*?<>|）
-   Length（The total distance between checkpoints must be longer than 1 mile to save）
-   Route Type（Choose Point to Point. If there are no special requirements, do not choose Laps）
-   Map Type（Set to the author's name or abbreviation, such as ioio/RA/nape777/pino, etc.）
-   Image（Copy the image URL from the Rockstar job page and paste it）
-   Allow Join After Start（Select）
-   Force Vehicle（Set to BMX）
import urllib.request

urls = {
    "s658": "https://previews.us-east-1.widencdn.net/preview/47526418/assets/asset-view/eea0f53b-09f1-4a27-a122-f5a5e262b61f/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?sig.ver=1&sig.keyId=us-east-1.20240821&sig.expires=1773356400&sig=5zcAN71-95ju_2_VmsVm86oT1Cj44hPPLBWJx6KWpac",
    "sp14": "https://previews.us-east-1.widencdn.net/preview/47526418/assets/asset-view/55ba2d14-b8a5-4d5d-b478-3b0ddd93dbaf/thumbnail/eyJ3IjoyMDQ4LCJoIjoyMDQ4LCJzY29wZSI6ImFwcCJ9?sig.ver=1&sig.keyId=us-east-1.20240821&sig.expires=1773356400&sig=0v4pimbESj_MdYQOAaSz4Wg5MMgGjLuL5Aei2KDh_R4"
}

headers = {
    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
    "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
    "Referer": "https://medialibrary1.com/"
}

for name, url in urls.items():
    req = urllib.request.Request(url, headers=headers)
    try:
        with urllib.request.urlopen(req) as response:
            with open(f"public/assets/products/{name}-widen.jpg", "wb") as out_file:
                out_file.write(response.read())
                print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")

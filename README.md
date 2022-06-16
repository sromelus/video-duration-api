# VIDEO DURATION API - BETA version

This a small experimental package to get length of videos.

## To get duration for video url

### REQUEST sample coode

```
fetch('http://localhost:8080/api/duration/url', {
    "method": "POST",
    "content-type": "application/json",
    body: JSON.stringify({"url": "https://yourmovieurl.mp4"})
})
```

### RESPONSE

```
{
  "duration": 20.066667
}
```




## To get duration for video file

### REQUEST sample coode
```
fetch('http://localhost:8080/api/duration/url', {
    "method": "POST",
    "content-type": "application/json",
    body: JSON.stringify(formData)
})
```

### RESPONSE
```
{
  "duration": 20.066667
}
```
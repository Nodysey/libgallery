# libGallery
Interactive Photo Gallery for Static Websites

# Setup
Copy `libgallery.css`, `active.wav`, `hover.wav` and `libgallery.js` into a folder on your website.

# Creating a Gallery

Add the libGallery files to every page that contains a gallery.
```html
<head>
    ...
    <link rel="stylesheet" href="directory/with/libgallery.css">
</head>
<body>
    ...
    <script src="directory/with/libgallery.js"></script>
</body>
```
`<gallery>` tags are used to contain a photo gallery.
```html
<gallery>

</gallery>
```
`<year>` tags separate photos by year.
```html
<gallery>
    <year>

    </year>
</gallery>
```
`<legend>` tags signify the name of the year.
```html
<gallery>
    <year>
        <legend>2023</legend>
    </year>
</gallery>
```
`<content>` tags contain the year's content.
```html
<gallery>
    <year>
        <legend>2023</legend>
        <content>

        </content>
    </year>
</gallery>
```
`<month>` tags further separate photos into months, and are similar in content to `<year>` tags.
```html
<gallery>
    <year>
        <legend>2023</legend>
        <content>
            <month>
                <legend>April</legend>
                <content>

                </content>
            </month>
        </content>
    </year>
</gallery>
```
You can put `<img>` tags inside of a month's content.
```html
<gallery>
    <year>
        <legend>2023</legend>
        <content>
            <month>
                <legend>April</legend>
                <content>
                    <img src="https://example.com/example.jpg">
                </content>
            </month>
        </content>
    </year>
</gallery>
```
`<sep>` tags can be used to seperate certain photos, such as during special events. An empty `<sep>` tag can be used as you would an `<hr>` tag.
```html
<gallery>
    <year>
        <legend>2023</legend>
        <content>
            <month>
                <legend>April</legend>
                <content>
                    <sep>VCF East</sep>
                    <img src="https://example.com/example.jpg">
                </content>
            </month>
        </content>
    </year>
</gallery>
```

# Licensing
libGallery is distributed under a GPL-v3.0 license, meaning any derivitaves must be open source and free to access.

const express = require('express');
const os = require('os')
const bodyParser = require('body-parser')
const { getVideoDurationInSeconds } = require('get-video-duration')
const multer  = require('multer');
const path = require('path')

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json())

const upload = multer({ dest: os.tmpdir() });

app.get('/', async (req, res) => {
    res.send('video-duration-server is running') 
})

app.post('/api/duration/url', async (req, res) => {
    const { url } = req.body;
    await getVideoDurationInSeconds(url)
    .then((duration) => {
        res.json({duration});
    }).catch((err) => { 
        res.status(500).json({error: 'url is not valid'});
    });
})

app.post('/api/duration/file', upload.single('file'), (req, res) => {
    getVideoDurationInSeconds(req.file.path)
    .then((duration) => {
        res.json({duration});
    }).catch((err) => { 
        res.status(500).json({error: 'not valid video file'});
    });
})

app.listen(PORT, () => { console.log(`Server is running on port ${PORT}`); });
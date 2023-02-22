import express from 'express';   
import { getDeviceType } from '../../modules/deviceType';
import { pagePath } from '../../modules/path';
const gallery = express.Router();

gallery.get('/', async (req, res) => { 
  const dtype: string = await getDeviceType(req)
  if (dtype == "mobile") {console.log(dtype); return res.status(301).redirect("/gallery/mobile")}
  if (dtype == "tablet") {console.log(dtype); return res.status(301).redirect("/gallery/tablet")}
  if (dtype == "desktop") {console.log(dtype); return res.status(301).redirect("/gallery/desktop")}
  res.send('unknowen device');
 });

gallery.get('/mobile', async (req, res) => { 
     res.sendFile(pagePath + "/mobile/gallery.html")
  });

gallery.get('/tablet', async (req, res) => { 
      res.sendFile(pagePath + "/desktop/gallery.html")
  });

gallery.get('/desktop', async (req, res) => { 
      res.sendFile(pagePath + "/desktop/gallery.html")
  });

export default gallery;
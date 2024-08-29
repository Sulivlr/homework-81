import express from 'express';
import Link from '../models/Link';


const router = express.Router();

router.post('/', async (req, res, next) => {
  try {
    if (!req.body.url) {
      return res.status(400).send({error: 'URL is required'});
    }
    const shortUrl = 'youtube'
    const link = new Link({
      originalUrl: req.body.url,
      shortUrl
    });
    await link.save();
    return res.send(shortUrl);
  } catch (error) {
    next(error);
  }
});

router.get('/:shortUrl', async (req, res, next) => {
  try {
    const link = await Link.findOne({shortUrl: req.params.shortUrl});
    if (link) {
      return res.status(301).redirect(link.originalUrl);
    } else {
      return res.status(404).send({error: 'Not Found'});
    }
  } catch (error) {
    next(error);
  }
});


export default router;
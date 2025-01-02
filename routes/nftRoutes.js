import express from "express";
const router = express.Router();
import nftController from "../controllers/nftController.js";
import authenticate from "../middlewares/authenticate.js";

// Upload NFT
router.post("/upload", authenticate, nftController.uploadNFT);

// Load NFTs
router.get("/load", nftController.loadNFT);

// Buy NFT
router.post("/buy", authenticate, nftController.buyNFT);

router.post("/sold", authenticate, nftController.updateNFT);

// Load Bought NFTs
router.get("/bought", nftController.loadBoughtNFT);

router.get("/unsoldenft", nftController.loadunSoldNFT);

router.get("/bought-a", nftController.loadBoughtNFTFirst);
router.get("/bought-b", nftController.loadBoughtNFTB);
router.get("/bought-c", nftController.loadBoughtNFTC);
router.get("/bought-d", nftController.loadBoughtNFTD);
router.get("/bought-e", nftController.loadBoughtNFTE);
router.get("/bought-f", nftController.loadBoughtNFTF);
router.get("/bought-g", nftController.loadBoughtNFTG);
router.get("/bought-h", nftController.loadBoughtNFTH);
router.get("/bought-i", nftController.loadBoughtNFTI);
router.get("/bought-j", nftController.loadBoughtNFTJ);

export default router;
